import { redirect } from "next/navigation";

export const metadata = {
  title: "Study Pathways"
};

export default function LandingIndexPage() {
  redirect("/programs");
}
