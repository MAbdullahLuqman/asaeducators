const localLeadKey = "asaeducators:leads";

function saveLocalLead(lead) {
  if (typeof window === "undefined" || !window.localStorage) return;
  const saved = JSON.parse(window.localStorage.getItem(localLeadKey) || "[]");
  window.localStorage.setItem(localLeadKey, JSON.stringify([lead, ...saved].slice(0, 100)));
  window.localStorage.setItem("asaeducators:lastLead", JSON.stringify(lead));
}

async function createFirestoreLead(lead) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 8000);
  const response = await fetch("/api/leads", {
    method: "POST",
    signal: controller.signal,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(lead)
  }).finally(() => window.clearTimeout(timeout));

  if (!response.ok) {
    const detail = await response.json().catch(() => ({}));
    throw new Error(detail.error || `Lead save failed (${response.status}).`);
  }

  const saved = await response.json();
  return saved.id;
}

export async function submitLead(values) {
  const lead = {
    ...values,
    source: "website",
    status: "new",
    submittedAt: new Date().toISOString()
  };

  saveLocalLead(lead);

  const id = await createFirestoreLead(lead);
  return { stored: "firebase", id, lead };
}
