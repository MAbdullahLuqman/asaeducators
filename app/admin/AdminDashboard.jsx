"use client";

import {
  AlertCircle,
  FilePlus2,
  CheckCircle2,
  Database,
  Edit3,
  FileText,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  Mail,
  Plus,
  Save,
  ShieldCheck,
  Trophy,
  Users,
  RefreshCw,
  Trash2
} from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, doc, getDoc, getDocs, orderBy, query, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
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

const friendlyFields = {
  stats: [
    { key: "value", label: "Highlight number" },
    { key: "label", label: "Description" }
  ],
  programs: [
    { key: "title", label: "Pathway title" },
    { key: "category", label: "Category" },
    { key: "level", label: "Study level" },
    { key: "duration", label: "Duration / intake" },
    { key: "summary", label: "Short card summary", multiline: true },
    { key: "description", label: "Full pathway description", multiline: true },
    { key: "image", label: "Image URL" },
    { key: "outcomes", label: "Student outcomes (one per line)", list: true, multiline: true },
    { key: "modules", label: "Pathway modules (one per line)", list: true, multiline: true }
  ],
  successStories: [
    { key: "studentName", label: "Student name" },
    { key: "university", label: "University" },
    { key: "destination", label: "Destination" },
    { key: "intake", label: "Intake" },
    { key: "counselor", label: "Counselor" },
    { key: "contact", label: "Counselor phone" }
  ],
  blogPosts: [
    { key: "title", label: "Post title" },
    { key: "category", label: "Category" },
    { key: "date", label: "Publish date" },
    { key: "readTime", label: "Reading time" },
    { key: "excerpt", label: "Listing summary", multiline: true }
  ],
  counselors: [
    { key: "name", label: "Counselor name" },
    { key: "phone", label: "Phone number" }
  ],
  siteSettings: [
    { key: "name", label: "Organization name" },
    { key: "email", label: "Email" },
    { key: "phone", label: "Phone" },
    { key: "address", label: "Address", multiline: true }
  ]
};

function formatJson(value) {
  return JSON.stringify(value, null, 2);
}

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function formatLeadDate(value) {
  if (!value) return "Just now";
  const date = typeof value?.toDate === "function" ? value.toDate() : new Date(value);
  return Number.isNaN(date.getTime())
    ? "Just now"
    : new Intl.DateTimeFormat("en", { dateStyle: "medium", timeStyle: "short" }).format(date);
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
  const [leadLoading, setLeadLoading] = useState(false);
  const [leadError, setLeadError] = useState("");
  const [blogForm, setBlogForm] = useState({ title: "", category: "", excerpt: "", body: "" });
  const [selectedIndex, setSelectedIndex] = useState(0);

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
        setSelectedIndex(0);
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

  const loadLeads = useCallback(async () => {
    if (!firebaseMode || !user) return;

    setLeadLoading(true);
    setLeadError("");
    try {
      const snapshot = await getDocs(query(collection(db, "leads"), orderBy("createdAt", "desc")));
      setLeads(snapshot.docs.map((leadDoc) => ({ id: leadDoc.id, ...leadDoc.data() })));
    } catch {
      setLeads([]);
      setLeadError("Unable to load leads. Check Firestore permissions and the createdAt index.");
    } finally {
      setLeadLoading(false);
    }
  }, [firebaseMode, user]);

  useEffect(() => {
    loadLeads();
  }, [loadLeads]);

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

  async function handleCreateBlogPost(event) {
    event.preventDefault();
    setError("");
    setMessage("");

    const title = blogForm.title.trim();
    const category = blogForm.category.trim();
    const excerpt = blogForm.excerpt.trim();
    const body = blogForm.body.trim();
    const slug = slugify(title);

    if (!title || !category || !excerpt || !body || !slug) {
      setError("Add a title, category, summary, and article body before publishing.");
      return;
    }

    try {
      const currentPosts = JSON.parse(draft);
      if (!Array.isArray(currentPosts)) throw new Error("Blog content must be a JSON array.");
      if (currentPosts.some((post) => post.slug === slug)) {
        throw new Error("A blog post with this title already exists. Change the title to create a unique URL.");
      }

      const paragraphs = body.split(/\n\s*\n/).filter(Boolean);
      const newPost = {
        slug,
        title,
        excerpt,
        date: new Date().toISOString().slice(0, 10),
        readTime: `${Math.max(1, Math.ceil(body.split(/\s+/).length / 200))} min read`,
        category,
        sections: paragraphs.map((paragraph, index) => ({
          heading: index === 0 ? "Overview" : `Key point ${index + 1}`,
          body: paragraph
        }))
      };
      const nextPosts = [newPost, ...currentPosts];

      setSaving(true);
      if (firebaseMode) {
        await setDoc(doc(db, "adminContent", "blogPosts"), {
          items: nextPosts,
          updatedAt: serverTimestamp()
        });
      } else {
        writeLocalGroup("blogPosts", nextPosts);
      }

      setItems(nextPosts);
      setDraft(formatJson(nextPosts));
      setBlogForm({ title: "", category: "", excerpt: "", body: "" });
      setMessage(firebaseMode ? "Blog post published to Firebase." : "Blog post saved locally for this browser.");
    } catch (publishError) {
      setError(publishError.message || "Unable to publish this blog post.");
    } finally {
      setSaving(false);
    }
  }

  async function handleLeadStatus(leadId, status) {
    if (!firebaseMode) return;
    setLeadError("");
    try {
      await updateDoc(doc(db, "leads", leadId), { status, updatedAt: serverTimestamp() });
      setLeads((currentLeads) =>
        currentLeads.map((lead) => (lead.id === leadId ? { ...lead, status } : lead))
      );
    } catch {
      setLeadError("Unable to update this lead. Check Firestore permissions.");
    }
  }

  function resetDraft() {
    const fallback = editableContentGroups[activeKey] || [];
    setItems(fallback);
    setDraft(formatJson(fallback));
    setMessage("Draft reset to bundled defaults. Save to persist it.");
    setError("");
  }

  const editorFields = friendlyFields[activeKey] || [];
  const selectedItem = items[selectedIndex] || null;

  function updateFriendlyField(field, value) {
    const nextItems = items.map((item, index) => {
      if (index !== selectedIndex) return item;
      return {
        ...item,
        [field.key]: field.list
          ? value.split("\n").map((entry) => entry.trim()).filter(Boolean)
          : value
      };
    });
    setItems(nextItems);
    setDraft(formatJson(nextItems));
  }

  function addRecord() {
    const defaultRecord = editorFields.reduce((record, field) => {
      record[field.key] = field.list ? [] : "";
      return record;
    }, {});
    if (activeKey === "programs") {
      defaultRecord.id = `pathway-${Date.now()}`;
      defaultRecord.faqs = [];
    }
    if (activeKey === "blogPosts") {
      defaultRecord.slug = `new-post-${Date.now()}`;
      defaultRecord.sections = [];
    }
    const nextItems = [...items, defaultRecord];
    setItems(nextItems);
    setDraft(formatJson(nextItems));
    setSelectedIndex(nextItems.length - 1);
  }

  function deleteRecord() {
    if (!selectedItem) return;
    const nextItems = items.filter((_, index) => index !== selectedIndex);
    setItems(nextItems);
    setDraft(formatJson(nextItems));
    setSelectedIndex(Math.max(0, selectedIndex - 1));
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

            <section className="mt-6 rounded-2xl border border-[#dbe7dd] bg-[#f4f8f3] p-5 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-olive">Edit records</p>
                  <p className="mt-1 text-sm leading-6 text-muted">
                    Select a record, edit the labeled fields, then use Save to publish your changes.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={addRecord}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-olive px-5 text-sm font-semibold text-white shadow-button transition hover:bg-olive-dark"
                >
                  <Plus size={17} /> Add record
                </button>
              </div>

              <div className="mt-5 grid gap-5 lg:grid-cols-[14rem_1fr]">
                <div className="grid max-h-[32rem] gap-2 overflow-y-auto pr-1">
                  {items.map((item, index) => (
                    <button
                      key={`${activeKey}-editor-${index}`}
                      type="button"
                      onClick={() => setSelectedIndex(index)}
                      className={`rounded-xl border p-4 text-left transition ${
                        selectedIndex === index
                          ? "border-olive bg-olive text-white shadow-button"
                          : "border-line bg-white text-ink hover:border-olive"
                      }`}
                    >
                      <span className="block text-sm font-semibold">{getSummary(item, activeKey)}</span>
                      <span className={`mt-1 block text-xs ${selectedIndex === index ? "text-white/80" : "text-muted"}`}>
                        Record {index + 1}
                      </span>
                    </button>
                  ))}
                </div>

                {selectedItem ? (
                  <div className="rounded-xl border border-line bg-white p-5">
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <p className="text-lg font-semibold text-ink">{getSummary(selectedItem, activeKey) || "New record"}</p>
                      <button
                        type="button"
                        onClick={deleteRecord}
                        className="inline-flex min-h-10 items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 text-sm font-semibold text-red-700 transition hover:bg-red-100"
                      >
                        <Trash2 size={16} /> Delete
                      </button>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      {editorFields.map((field) => (
                        <label key={field.key} className={field.multiline ? "md:col-span-2" : ""}>
                          <span className="mb-2 block text-sm font-semibold text-ink">{field.label}</span>
                          {field.multiline ? (
                            <textarea
                              value={field.list ? (selectedItem[field.key] || []).join("\n") : selectedItem[field.key] || ""}
                              onChange={(event) => updateFriendlyField(field, event.target.value)}
                              className="min-h-28 w-full rounded-xl border border-line bg-white p-4 text-sm leading-6 text-ink outline-none transition focus:border-olive focus:ring-4 focus:ring-olive/15"
                            />
                          ) : (
                            <input
                              value={selectedItem[field.key] || ""}
                              onChange={(event) => updateFriendlyField(field, event.target.value)}
                              className="min-h-12 w-full rounded-xl border border-line bg-white px-4 text-sm text-ink outline-none transition focus:border-olive focus:ring-4 focus:ring-olive/15"
                            />
                          )}
                        </label>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="rounded-xl border border-dashed border-line bg-white p-8 text-sm text-muted">
                    Add your first record to begin.
                  </div>
                )}
              </div>
            </section>

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

            {activeKey === "blogPosts" ? (
              <form
                onSubmit={handleCreateBlogPost}
                className="mt-6 rounded-lg border border-line bg-canvas p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-soft text-olive">
                    <FilePlus2 size={19} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">Quick publish a blog post</p>
                    <p className="mt-1 text-sm leading-6 text-muted">
                      Write the article below. Separate paragraphs with a blank line and the dashboard will create readable article sections automatically.
                    </p>
                  </div>
                </div>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <input
                    value={blogForm.title}
                    onChange={(event) => setBlogForm((form) => ({ ...form, title: event.target.value }))}
                    placeholder="Post title"
                    className="min-h-12 rounded-lg border border-line bg-white px-4 text-sm font-medium outline-none focus:border-olive focus:ring-4 focus:ring-olive/15"
                  />
                  <input
                    value={blogForm.category}
                    onChange={(event) => setBlogForm((form) => ({ ...form, category: event.target.value }))}
                    placeholder="Category (for example, Visa Guides)"
                    className="min-h-12 rounded-lg border border-line bg-white px-4 text-sm font-medium outline-none focus:border-olive focus:ring-4 focus:ring-olive/15"
                  />
                </div>
                <textarea
                  value={blogForm.excerpt}
                  onChange={(event) => setBlogForm((form) => ({ ...form, excerpt: event.target.value }))}
                  placeholder="Short summary shown on the blog listing"
                  className="mt-4 min-h-24 w-full rounded-lg border border-line bg-white p-4 text-sm leading-6 outline-none focus:border-olive focus:ring-4 focus:ring-olive/15"
                />
                <textarea
                  value={blogForm.body}
                  onChange={(event) => setBlogForm((form) => ({ ...form, body: event.target.value }))}
                  placeholder="Write the blog post here. Use a blank line between paragraphs."
                  className="mt-4 min-h-52 w-full rounded-lg border border-line bg-white p-4 text-sm leading-6 outline-none focus:border-olive focus:ring-4 focus:ring-olive/15"
                />
                <button
                  type="submit"
                  disabled={saving}
                  className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full bg-olive px-5 text-sm font-semibold text-white shadow-button transition hover:bg-olive-dark disabled:opacity-50"
                >
                  <FilePlus2 size={17} />
                  {saving ? "Publishing..." : "Publish blog post"}
                </button>
              </form>
            ) : null}

            <details className="mt-6 rounded-xl border border-line bg-white p-5">
              <summary className="cursor-pointer text-sm font-semibold text-olive">
                Advanced JSON editor
              </summary>
              <p className="mt-2 text-sm leading-6 text-muted">
                Use this only for fields not shown above, such as program FAQs or full blog sections.
              </p>
              <textarea
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                spellCheck={false}
                className="mt-4 min-h-80 w-full resize-y rounded-xl border border-line bg-[#f8faf7] p-5 font-mono text-sm leading-6 text-[#263129] outline-none focus:border-olive focus:ring-4 focus:ring-olive/15"
                aria-label={`${activeTab.label} JSON editor`}
              />
            </details>
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
            {firebaseMode ? (
              <button
                type="button"
                onClick={loadLeads}
                disabled={leadLoading}
                className="mt-4 inline-flex min-h-10 items-center gap-2 rounded-full border border-line bg-white px-4 text-sm font-semibold text-olive transition hover:border-olive disabled:opacity-50"
              >
                <RefreshCw size={16} className={leadLoading ? "animate-spin" : ""} />
                Refresh leads
              </button>
            ) : null}
            {leadError ? <p className="mt-4 rounded-lg border border-red-100 bg-red-50 p-4 text-sm font-semibold text-red-700">{leadError}</p> : null}
            <div className="mt-5 grid gap-3">
              {firebaseMode && leads.length ? (
                leads.map((lead) => (
                  <div
                    key={lead.id}
                    className="grid gap-3 rounded-lg border border-line bg-canvas p-4 text-sm md:grid-cols-[1.1fr_1fr_1fr_auto] md:items-center"
                  >
                    <div>
                      <span className="block font-semibold text-ink">{lead.name || "Unnamed lead"}</span>
                      <span className="mt-1 block text-xs text-muted">{formatLeadDate(lead.createdAt || lead.submittedAt)}</span>
                    </div>
                    <span className="text-muted">{lead.email || "No email"}</span>
                    <span className="text-muted">{lead.program || "No program"} / {lead.level || "No level"}</span>
                    <select
                      aria-label={`Status for ${lead.name || "lead"}`}
                      value={lead.status || "new"}
                      onChange={(event) => handleLeadStatus(lead.id, event.target.value)}
                      className="min-h-10 rounded-lg border border-line bg-white px-3 text-sm font-semibold text-olive outline-none focus:border-olive focus:ring-4 focus:ring-olive/15"
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="qualified">Qualified</option>
                      <option value="closed">Closed</option>
                    </select>
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
