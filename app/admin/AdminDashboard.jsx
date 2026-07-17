"use client";

import {
  AlertCircle,
  CheckCircle2,
  Database,
  Edit3,
  FileText,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  Mail,
  Save,
  ShieldCheck,
  Trophy,
  Users
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, doc, getDoc, getDocs, orderBy, query, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db, isFirebaseConfigured } from "@/lib/firebase";
import { editableContentGroups } from "@/lib/defaultContent";

const contentTabs = [
  {
    key: "stats",
    label: "Stats",
    icon: LayoutDashboard,
    description: "Homepage proof points and performance counters."
  },
  {
    key: "programs",
    label: "Programs",
    icon: GraduationCap,
    description: "Study pathway cards, detail pages, FAQs, modules, and images."
  },
  {
    key: "successStories",
    label: "Success",
    icon: Trophy,
    description: "Student approvals, institutions, counselor assignment, and phone links."
  },
  {
    key: "blogPosts",
    label: "Blog",
    icon: FileText,
    description: "Resource articles, dates, excerpts, categories, and article sections."
  },
  {
    key: "counselors",
    label: "Counselors",
    icon: Users,
    description: "Advisor names and contact numbers used by success-story summaries."
  },
  {
    key: "siteSettings",
    label: "Settings",
    icon: ShieldCheck,
    description: "Organization, contact, and location settings prepared for API expansion."
  }
];

const storageKey = (groupKey) => `asaeducators:adminContent:${groupKey}`;

function formatJson(value) {
  return JSON.stringify(value, null, 2);
}

function getSummary(item, groupKey) {
  if (groupKey === "stats") return `${item.value || ""} ${item.label || ""}`.trim();
  if (groupKey === "programs") return item.title || item.id || "Untitled program";
  if (groupKey === "successStories") return `${item.studentName || "Student"} / ${item.university || "Institution"}`;
  if (groupKey === "blogPosts") return item.title || item.slug || "Untitled post";
  if (groupKey === "counselors") return `${item.name || "Counselor"} / ${item.phone || "No phone"}`;
  return item.name || item.id || "Settings record";
}

function readLocalGroup(groupKey) {
  try {
    const saved = window.localStorage.getItem(storageKey(groupKey));
    return saved ? JSON.parse(saved) : editableContentGroups[groupKey];
  } catch {
    return editableContentGroups[groupKey];
  }
}

function writeLocalGroup(groupKey, items) {
  window.localStorage.setItem(storageKey(groupKey), formatJson(items));
}

export default function AdminDashboard() {
  const [activeKey, setActiveKey] = useState("stats");
  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(!isFirebaseConfigured || !auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [items, setItems] = useState(editableContentGroups.stats);
  const [draft, setDraft] = useState(formatJson(editableContentGroups.stats));
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [leads, setLeads] = useState([]);

  const firebaseMode = Boolean(isFirebaseConfigured && db);
  const authRequired = Boolean(firebaseMode && auth);
  const activeTab = useMemo(
    () => contentTabs.find((tab) => tab.key === activeKey) || contentTabs[0],
    [activeKey]
  );

  useEffect(() => {
    if (!authRequired) {
      setAuthReady(true);
      return undefined;
    }

    return onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthReady(true);
    });
  }, [authRequired]);

  useEffect(() => {
    async function loadGroup() {
      setLoading(true);
      setError("");
      setMessage("");

      try {
        let nextItems = editableContentGroups[activeKey] || [];

        if (firebaseMode) {
          const snapshot = await getDoc(doc(db, "adminContent", activeKey));
          const remoteItems = snapshot.exists() ? snapshot.data()?.items : null;
          if (Array.isArray(remoteItems)) nextItems = remoteItems;
        } else if (typeof window !== "undefined") {
          nextItems = readLocalGroup(activeKey);
        }

        setItems(nextItems);
        setDraft(formatJson(nextItems));
      } catch (loadError) {
        setError(loadError.message || "Unable to load this content group.");
      } finally {
        setLoading(false);
      }
    }

    if (!authRequired || user) {
      loadGroup();
    }
  }, [activeKey, authRequired, firebaseMode, user]);

  useEffect(() => {
    async function loadLeads() {
      if (!firebaseMode || !user) return;

      try {
        const snapshot = await getDocs(query(collection(db, "leads"), orderBy("createdAt", "desc")));
        setLeads(snapshot.docs.map((leadDoc) => ({ id: leadDoc.id, ...leadDoc.data() })));
      } catch {
        setLeads([]);
      }
    }

    loadLeads();
  }, [firebaseMode, user]);

  async function handleLogin(event) {
    event.preventDefault();
    setAuthError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch {
      setAuthError("Invalid admin email or password.");
    }
  }

  async function handleSave() {
    setSaving(true);
    setError("");
    setMessage("");

    try {
      const parsed = JSON.parse(draft);
      if (!Array.isArray(parsed)) {
        throw new Error("Content must be a JSON array.");
      }

      if (firebaseMode) {
        await setDoc(doc(db, "adminContent", activeKey), {
          items: parsed,
          updatedAt: serverTimestamp()
        });
      } else {
        writeLocalGroup(activeKey, parsed);
      }

      setItems(parsed);
      setDraft(formatJson(parsed));
      setMessage(firebaseMode ? "Saved to Firebase." : "Saved locally for this browser.");
    } catch (saveError) {
      setError(saveError.message || "Unable to save this content group.");
    } finally {
      setSaving(false);
    }
  }

  function resetDraft() {
    const fallback = editableContentGroups[activeKey] || [];
    setItems(fallback);
    setDraft(formatJson(fallback));
    setMessage("Draft reset to bundled defaults. Save to persist it.");
    setError("");
  }

  if (!authReady) {
    return (
      <main className="min-h-screen bg-[#F4F6F1] px-6 pt-32 text-ink">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-olive">
          Loading admin session
        </p>
      </main>
    );
  }

  if (authRequired && !user) {
    return (
      <main className="min-h-screen bg-[#F4F6F1] px-6 pt-32 text-ink">
        <section className="mx-auto max-w-md rounded-lg border border-line bg-white p-7 shadow-soft">
          <div className="mb-7 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold-soft text-olive">
            <ShieldCheck size={22} />
          </div>
          <h1 className="text-3xl font-semibold tracking-[-0.04em]">Admin sign in</h1>
          <p className="mt-3 text-sm leading-6 text-muted">
            Use a Firebase Authentication admin user to manage ASA Educators content.
          </p>
          <form onSubmit={handleLogin} className="mt-7 grid gap-4">
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
              className="min-h-12 rounded-lg border border-line px-4 outline-none focus:border-olive focus:ring-4 focus:ring-olive/15"
            />
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
              className="min-h-12 rounded-lg border border-line px-4 outline-none focus:border-olive focus:ring-4 focus:ring-olive/15"
            />
            {authError ? <p className="text-sm font-semibold text-red-700">{authError}</p> : null}
            <button
              type="submit"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-olive px-5 text-sm font-semibold text-white shadow-button transition hover:bg-olive-dark"
            >
              Sign in
            </button>
          </form>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F4F6F1] pt-24 text-ink">
      <section className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 sm:px-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-olive">
              ASA Admin
            </p>
            <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.05em]">
              Content operations
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
              Manage the six core content groups that feed the public site. Firebase is used when configured; local mode keeps the dashboard usable during setup.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex min-h-10 items-center gap-2 rounded-full border border-line bg-canvas px-4 text-sm font-semibold text-olive">
              <Database size={16} />
              {firebaseMode ? "Firebase backend" : "Local fallback"}
            </span>
            {authRequired ? (
              <button
                type="button"
                onClick={() => signOut(auth)}
                className="inline-flex min-h-10 items-center gap-2 rounded-full border border-line bg-white px-4 text-sm font-semibold text-olive transition hover:border-olive"
              >
                <LogOut size={16} />
                Sign out
              </button>
            ) : null}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-8 sm:px-8 lg:grid-cols-[18rem_1fr]">
        <aside className="h-fit rounded-lg border border-line bg-white p-3 shadow-soft">
          <div className="grid gap-2">
            {contentTabs.map((tab) => {
              const Icon = tab.icon;
              const active = activeKey === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveKey(tab.key)}
                  className={`flex min-h-12 items-center gap-3 rounded-md px-4 text-left text-sm font-semibold transition ${
                    active ? "bg-olive text-white" : "text-[#3F4654] hover:bg-canvas hover:text-olive"
                  }`}
                >
                  <Icon size={18} />
                  {tab.label}
                </button>
              );
            })}
          </div>
          <div className="mt-4 rounded-md bg-canvas p-4 text-xs leading-5 text-muted">
            API-ready shape: every tab saves an array to `adminContent/{activeKey}`.
          </div>
        </aside>

        <div className="grid gap-6">
          <section className="rounded-lg border border-line bg-white p-6 shadow-soft">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-olive">
                  <Edit3 size={16} />
                  {activeTab.label}
                </p>
                <h2 className="text-3xl font-semibold tracking-[-0.04em]">{activeTab.description}</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={resetDraft}
                  className="inline-flex min-h-11 items-center rounded-full border border-line bg-white px-4 text-sm font-semibold text-olive transition hover:border-olive"
                >
                  Reset defaults
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  disabled={saving}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-olive px-5 text-sm font-semibold text-white shadow-button transition hover:bg-olive-dark disabled:opacity-50"
                >
                  <Save size={16} />
                  {saving ? "Saving..." : "Save"}
                </button>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg bg-canvas p-4">
                <p className="text-3xl font-semibold text-olive">{items.length}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  records
                </p>
              </div>
              <div className="rounded-lg bg-canvas p-4 md:col-span-2">
                <p className="text-sm font-semibold text-ink">Recent records</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {items.slice(0, 5).map((item, index) => (
                    <span
                      key={`${activeKey}-${index}`}
                      className="rounded-full bg-white px-3 py-2 text-xs font-semibold text-muted"
                    >
                      {getSummary(item, activeKey)}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {message ? (
              <p className="mt-5 flex gap-2 rounded-lg border border-green-100 bg-green-50 p-4 text-sm font-semibold text-green-700">
                <CheckCircle2 size={17} />
                {message}
              </p>
            ) : null}
            {error ? (
              <p className="mt-5 flex gap-2 rounded-lg border border-red-100 bg-red-50 p-4 text-sm font-semibold text-red-700">
                <AlertCircle size={17} />
                {error}
              </p>
            ) : null}

            <textarea
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              spellCheck={false}
              className="mt-6 min-h-[34rem] w-full resize-y rounded-lg border border-line bg-[#101411] p-5 font-mono text-sm leading-6 text-[#E7F4EC] outline-none focus:border-olive focus:ring-4 focus:ring-olive/15"
              aria-label={`${activeTab.label} JSON editor`}
            />
          </section>

          <section className="rounded-lg border border-line bg-white p-6 shadow-soft">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-olive">
                  <Mail size={16} />
                  Leads
                </p>
                <h2 className="text-2xl font-semibold tracking-[-0.04em]">Consultation requests</h2>
              </div>
              <span className="rounded-full bg-canvas px-4 py-2 text-sm font-semibold text-muted">
                {firebaseMode ? `${leads.length} loaded` : "Firebase required"}
              </span>
            </div>
            <div className="mt-5 grid gap-3">
              {firebaseMode && leads.length ? (
                leads.slice(0, 8).map((lead) => (
                  <div
                    key={lead.id}
                    className="grid gap-2 rounded-lg border border-line bg-canvas p-4 text-sm md:grid-cols-[1fr_1fr_1fr]"
                  >
                    <span className="font-semibold text-ink">{lead.name || "Unnamed lead"}</span>
                    <span className="text-muted">{lead.email || "No email"}</span>
                    <span className="text-muted">{lead.program || "No program"} / {lead.level || "No level"}</span>
                  </div>
                ))
              ) : (
                <p className="rounded-lg bg-canvas p-4 text-sm leading-6 text-muted">
                  Lead records appear here when Firebase is configured and form submissions exist.
                </p>
              )}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
