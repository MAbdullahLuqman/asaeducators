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
  Menu,
  X,
  Youtube
} from "lucide-react";
import { destinations } from "@/lib/destinations";

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
          <nav className="relative mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-3 px-4 py-3 lg:gap-6 lg:px-8">
            <Link href="/" aria-label="ASA Educators home" className="shrink-0">
              <Image
                src="/brand/asa-educators-header.png"
                alt="ASA Educators"
                width={190}
                height={58}
                priority
                className="h-12 w-auto object-contain sm:h-14"
              />
            </Link>

            <div className="hidden items-center gap-7 text-sm font-semibold text-[#0B2D57] lg:flex">
              {navLinks.map((link) => (
                link === "Destination" ? (
                  <div key={link} className="group relative">
                    <Link
                      href="/destination"
                      className="flex items-center gap-1 transition hover:text-[#D71920]"
                    >
                      Destination <ChevronDown className="h-4 w-4" />
                    </Link>
                    <div className="invisible absolute left-0 top-full z-50 w-56 translate-y-3 rounded-2xl border border-gray-100 bg-white p-2 opacity-0 shadow-2xl shadow-gray-200/80 transition group-hover:visible group-hover:translate-y-2 group-hover:opacity-100">
                      {destinations.map((destination) => (
                        <Link
                          key={destination.slug}
                          href={`/destination/${destination.slug}`}
                          className="block rounded-xl px-4 py-3 font-bold text-[#0B2D57] transition hover:bg-gray-50 hover:text-[#D71920]"
                        >
                          Study in {destination.country}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link}
                    href={link === "Home" ? "/" : `/${link.toLowerCase().replaceAll(" ", "-")}`}
                    className="flex items-center gap-1 transition hover:text-[#D71920]"
                  >
                    {link}
                  </Link>
                )
              ))}
            </div>

            <Link
              href="/lead-form"
              className="hidden rounded-full bg-[#D71920] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#b9141a] lg:inline-flex"
            >
              Apply Now
            </Link>

            <details className="group lg:hidden">
              <summary className="flex h-14 w-14 cursor-pointer list-none items-center justify-center rounded-full border border-gray-200 bg-white text-[#0B2D57] shadow-sm transition hover:text-[#D71920] [&::-webkit-details-marker]:hidden">
                <Menu className="h-7 w-7" />
              </summary>
              <div className="absolute left-4 right-4 top-full z-50 mt-3 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl shadow-gray-200/80">
                <div className="grid divide-y divide-gray-100">
                  {navLinks.map((link) => (
                    link === "Destination" ? (
                      <details key={link} className="group/destination">
                        <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-base font-bold text-[#0B2D57] transition hover:bg-gray-50 hover:text-[#D71920] [&::-webkit-details-marker]:hidden">
                          <span>Destination</span>
                          <span className="text-2xl leading-none text-[#D71920] group-open/destination:rotate-45">+</span>
                        </summary>
                        <div className="grid bg-gray-50 px-5 py-2">
                          <a href="/destination" className="py-2 text-sm font-bold text-[#0B2D57]">
                            All Destinations
                          </a>
                          {destinations.map((destination) => (
                            <a
                              key={destination.slug}
                              href={`/destination/${destination.slug}`}
                              className="py-2 text-sm font-bold text-gray-600 transition hover:text-[#D71920]"
                            >
                              Study in {destination.country}
                            </a>
                          ))}
                        </div>
                      </details>
                    ) : (
                      <a
                        key={link}
                        href={link === "Home" ? "/" : `/${link.toLowerCase().replaceAll(" ", "-")}`}
                        className="px-5 py-4 text-base font-bold text-[#0B2D57] transition hover:bg-gray-50 hover:text-[#D71920]"
                      >
                        {link}
                      </a>
                    )
                  ))}
                </div>
                <div className="border-t border-gray-100 p-4">
                  <a
                    href="/lead-form"
                    className="flex w-full justify-center rounded-full bg-[#D71920] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#b9141a]"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </details>
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
