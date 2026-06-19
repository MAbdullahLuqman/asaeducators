import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "ASA Educators | Premium Study Abroad Consultancy",
  description:
    "A premium educational consultancy platform for scholarships, admissions, visas, and global study planning."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-canvas font-sans text-ink antialiased">
        <Navigation />
        <div className="min-h-screen bg-canvas">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
