import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

export const metadata = {
  metadataBase: new URL("https://asaeducators.com"),
  title: {
    default: "ASA Educators | Premium Study Abroad Consultancy",
    template: "%s | ASA Educators"
  },
  description:
    "ASA Educators helps ambitious students secure admissions, visas, and study abroad pathways across trusted international institutions."
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "ASA Educators",
    url: "https://asaeducators.com",
    email: "hello@asaeducators.com",
    description:
      "Premium study abroad consultancy for admissions, documentation, visas, and international education planning."
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-canvas font-sans text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Navigation />
        <div className="min-h-screen bg-canvas">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
