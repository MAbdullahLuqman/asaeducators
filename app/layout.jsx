import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata = {
  title: "ASA Educators | Study Abroad Consultancy",
  description:
    "ASA Educators helps students plan admissions, visas, and study abroad pathways."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-white font-sans text-[#0B2D57] antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
