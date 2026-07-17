import { doc, getDoc } from "firebase/firestore";
import { db, isFirebaseConfigured } from "@/lib/firebase";
import {
  defaultBlogPosts,
  defaultPrograms,
  defaultStats,
  defaultSuccessStories,
  editableContentGroups
} from "@/lib/defaultContent";

export { editableContentGroups };

async function getContentGroup(groupKey) {
  const fallback = editableContentGroups[groupKey] || [];

  if (!isFirebaseConfigured || !db) {
    return fallback;
  }

  try {
    const snapshot = await getDoc(doc(db, "adminContent", groupKey));
    const items = snapshot.exists() ? snapshot.data()?.items : null;
    return Array.isArray(items) ? items : fallback;
  } catch (error) {
    console.error(`Unable to load ${groupKey} from Firebase`, error);
    return fallback;
  }
}

export async function getStats() {
  return getContentGroup("stats");
}

export async function getPrograms() {
  return getContentGroup("programs");
}

export async function getProgram(id) {
  const items = await getPrograms();
  return items.find((program) => program.id === id);
}

export async function getSuccessStories() {
  return getContentGroup("successStories");
}

export async function getBlogPosts() {
  return getContentGroup("blogPosts");
}

export async function getBlogPost(slug) {
  const posts = await getBlogPosts();
  return posts.find((post) => post.slug === slug);
}

export async function getCounselors() {
  return getContentGroup("counselors");
}

export async function getSiteSettings() {
  return getContentGroup("siteSettings");
}

export async function getLandingPages() {
  return getPrograms();
}

export async function getLandingPage(slug) {
  return getProgram(slug);
}

export const fallbackContent = {
  stats: defaultStats,
  programs: defaultPrograms,
  successStories: defaultSuccessStories,
  blogPosts: defaultBlogPosts
};
