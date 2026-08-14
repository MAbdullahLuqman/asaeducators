import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import {
  ChevronDown,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  X,
  Youtube
} from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const navLinks = ["Home", "Courses", "Destination", "Study Pathway", "Blog", "About", "Contact Us"];
const footerLinks = [
  ["Courses", "/courses"],
  ["Destination", "/destination"],
  ["Study Pathway", "/study-pathway"],
  ["Blog", "/blog"],
  ["About", "/about"],
  ["Contact Us", "/contact-us"]
];
const socials = [
  ["Facebook", Facebook],
  ["X", X],
  ["Instagram", Instagram],
  ["LinkedIn", Linkedin],
  ["YouTube", Youtube]
];

export const metadata = {
  title: "ASA Educators | Study Abroad Consultancy",
  description:
    "ASA Educators helps students plan admissions, visas, and study abroad pathways."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-white font-sans text-[#0B2D57] antialiased">
        <div className="border-b border-gray-100 bg-white text-xs text-gray-500">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2 sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <a href="mailto:info@asaeducators.com" className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#D71920]" />
              info@asaeducators.com
            </a>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#D71920]" />
              10:30 AM To 6:30 PM | Saturday, Sunday Off
            </div>
          </div>
        </div>

        <header className="sticky top-0 z-40 border-b border-gray-100 bg-white shadow-sm">
          <nav className="mx-auto flex min-h-20 max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-3 lg:flex-nowrap lg:px-8">
            <Link href="/" aria-label="ASA Educators home" className="shrink-0">
              <Image
                src="/brand/asa-educators-header.png"
                alt="ASA Educators"
                width={190}
                height={58}
                priority
                className="h-14 w-auto object-contain"
              />
            </Link>

            <div className="hidden items-center gap-7 text-sm font-semibold text-[#0B2D57] lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link}
                  href={link === "Home" ? "/" : `/${link.toLowerCase().replaceAll(" ", "-")}`}
                  className="flex items-center gap-1 transition hover:text-[#D71920]"
                >
                  {link}
                  {link === "Destination" && <ChevronDown className="h-4 w-4" />}
                </Link>
              ))}
            </div>

            <Link
              href="/lead-form"
              className="rounded-full bg-[#D71920] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#b9141a]"
            >
              Apply Now
            </Link>
            <div className="flex w-full gap-5 overflow-x-auto pb-1 text-sm font-semibold text-[#0B2D57] lg:hidden">
              {navLinks.map((link) => (
                <Link
                  key={link}
                  href={link === "Home" ? "/" : `/${link.toLowerCase().replaceAll(" ", "-")}`}
                  className="shrink-0 transition hover:text-[#D71920]"
                >
                  {link}
                </Link>
              ))}
            </div>
          </nav>
        </header>

        <div className="fixed right-0 top-1/2 z-50 hidden -translate-y-1/2 rounded-l-full bg-gray-100 px-2 py-4 shadow-lg sm:flex sm:flex-col sm:gap-4">
          {socials.map(([label, Icon]) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="rounded-full p-2 text-[#0B2D57] transition hover:bg-white hover:text-[#D71920]"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        {children}

        <footer className="bg-[#081F3D] text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
            <div>
              <Image
                src="/brand/asa-educators-header.png"
                alt="ASA Educators"
                width={190}
                height={58}
                className="h-14 w-auto rounded bg-white object-contain p-2"
              />
              <p className="mt-5 max-w-md leading-7 text-white/75">
                ASA Educators helps students choose destinations, prepare for
                IELTS/PTE, submit applications, organise documents, and move
                toward international education with a clear plan.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-extrabold">Quick Links</h2>
              <div className="mt-5 grid gap-3">
                {footerLinks.map(([label, href]) => (
                  <Link key={href} href={href} className="text-white/75 transition hover:text-white">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-lg font-extrabold">Contact</h2>
              <div className="mt-5 grid gap-3 text-white/75">
                <a href="mailto:info@asaeducators.com">info@asaeducators.com</a>
                <p>10:30 AM To 6:30 PM</p>
                <p>Saturday, Sunday Off</p>
                <Link href="/lead-form" className="mt-3 w-fit rounded-full bg-[#D71920] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#b9141a]">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 py-4 text-center text-sm text-white/60">
            © {new Date().getFullYear()} ASA Educators. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
