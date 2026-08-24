const FIREBASE_CONFIG = {
  apiKey: process.env.FIREBASE_API_KEY || process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  projectId: process.env.FIREBASE_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
};

const limits = globalThis.__asaLeadLimits || new Map();
globalThis.__asaLeadLimits = limits;

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 8;

function clientIp(request) {
  return (request.headers.get("x-forwarded-for") || "unknown").split(",")[0].trim();
}

function rateLimited(ip) {
  const now = Date.now();
  const current = limits.get(ip) || { count: 0, resetAt: now + WINDOW_MS };
  const next = current.resetAt < now ? { count: 1, resetAt: now + WINDOW_MS } : { ...current, count: current.count + 1 };
  limits.set(ip, next);

  // ponytail: in-memory limit, move to Redis/edge KV if multi-instance abuse matters.
  return next.count > MAX_REQUESTS;
}

function clean(value, max = 500) {
  return String(value || "").replace(/\s+/g, " ").trim().slice(0, max);
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function fieldValue(value) {
  return { stringValue: value };
}

function parseLead(body) {
  const lead = {
    name: clean(body.name, 120),
    email: clean(body.email, 160).toLowerCase(),
    phone: clean(body.phone, 60),
    destination: clean(body.destination, 80),
    level: clean(body.level, 80),
    intake: clean(body.intake, 80),
    message: clean(body.message, 1000),
    source: "website",
    status: "new",
    submittedAt: new Date().toISOString()
  };

  if (lead.name.length < 2 || !isEmail(lead.email) || lead.phone.length < 7) {
    return null;
  }

  return lead;
}

async function saveLead(lead) {
  const response = await fetch(
    `https://firestore.googleapis.com/v1/projects/${FIREBASE_CONFIG.projectId}/databases/(default)/documents/leads?key=${FIREBASE_CONFIG.apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fields: {
          name: fieldValue(lead.name),
          email: fieldValue(lead.email),
          phone: fieldValue(lead.phone),
          destination: fieldValue(lead.destination),
          level: fieldValue(lead.level),
          intake: fieldValue(lead.intake),
          message: fieldValue(lead.message),
          source: fieldValue(lead.source),
          status: fieldValue(lead.status),
          submittedAt: { timestampValue: lead.submittedAt },
          createdAt: { timestampValue: lead.submittedAt }
        }
      })
    }
  );

  if (!response.ok) {
    throw new Error(`Firestore rejected lead save (${response.status}).`);
  }

  const saved = await response.json();
  return saved.name?.split("/").pop();
}

export async function POST(request) {
  if (!FIREBASE_CONFIG.apiKey || !FIREBASE_CONFIG.projectId) {
    return Response.json({ error: "Lead storage is not configured." }, { status: 503 });
  }

  if (rateLimited(clientIp(request))) {
    return Response.json({ error: "Too many lead submissions." }, { status: 429 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const lead = parseLead(body);
  if (!lead) {
    return Response.json({ error: "Invalid lead details." }, { status: 400 });
  }

  try {
    const id = await saveLead(lead);
    return Response.json({ id, lead });
  } catch {
    return Response.json({ error: "Unable to save lead." }, { status: 502 });
  }
}
