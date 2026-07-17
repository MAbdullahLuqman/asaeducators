import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, isFirebaseConfigured } from "@/lib/firebase";

export async function submitLead(values) {
  const lead = {
    ...values,
    source: "website",
    submittedAt: new Date().toISOString()
  };

  if (typeof window !== "undefined" && window.localStorage) {
    window.localStorage.setItem("asaeducators:lastLead", JSON.stringify(lead));
  }

  if (!isFirebaseConfigured || !db) {
    return { stored: "local", lead };
  }

  const docRef = await addDoc(collection(db, "leads"), {
    ...values,
    source: "website",
    createdAt: serverTimestamp()
  });

  return { stored: "firebase", id: docRef.id, lead };
}
