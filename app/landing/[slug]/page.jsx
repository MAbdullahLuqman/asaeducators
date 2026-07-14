import { redirect } from "next/navigation";

export async function generateMetadata() {
  return {
    title: "Study Pathways"
  };
}

export default function LandingPage() {
  redirect("/programs");
}
