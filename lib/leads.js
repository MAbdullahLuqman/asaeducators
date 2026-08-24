import { firebaseConfig, isFirebaseConfigured } from "@/lib/firebase";

const localLeadKey = "asaeducators:leads";

function saveLocalLead(lead) {
  if (typeof window === "undefined" || !window.localStorage) return;
  const saved = JSON.parse(window.localStorage.getItem(localLeadKey) || "[]");
  window.localStorage.setItem(localLeadKey, JSON.stringify([lead, ...saved].slice(0, 100)));
  window.localStorage.setItem("asaeducators:lastLead", JSON.stringify(lead));
}

function fieldValue(value) {
  if (value === undefined || value === null) return { stringValue: "" };
  return { stringValue: String(value) };
}

async function createFirestoreLead(lead) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 8000);
  const response = await fetch(
    `https://firestore.googleapis.com/v1/projects/${firebaseConfig.projectId}/databases/(default)/documents/leads?key=${firebaseConfig.apiKey}`,
    {
      method: "POST",
      signal: controller.signal,
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
  ).finally(() => window.clearTimeout(timeout));

  if (!response.ok) {
    throw new Error(`Firestore rejected lead save (${response.status}).`);
  }

  const saved = await response.json();
  return saved.name?.split("/").pop();
}

export async function submitLead(values) {
  const lead = {
    ...values,
    source: "website",
    status: "new",
    submittedAt: new Date().toISOString()
  };

  saveLocalLead(lead);

  if (!isFirebaseConfigured) {
    return { stored: "local", lead };
  }

  try {
    const id = await createFirestoreLead(lead);
    return { stored: "firebase", id, lead };
  } catch {
    return { stored: "local", lead };
  }
}
