import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const columns = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/success-stories", label: "Success Stories" },
      { href: "/programs", label: "Study Pathways" },
      { href: "/blog", label: "Blog/Resources" }
    ]
  },
  {
    title: "Study Pathways",
    links: [
      { href: "/success-stories", label: "Cyprus Success Stories" },
      { href: "/programs/cyprus-admissions", label: "Cyprus Admissions" },
      { href: "/programs/visa-documentation", label: "Visa Documentation" },
      { href: "/programs/scholarship-guidance", label: "Scholarship Guidance" },
      { href: "/programs/pre-departure-support", label: "Pre-Departure Support" }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="bg-espresso text-canvas">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Link href="/" className="text-2xl font-semibold tracking-[-0.04em]">
            ASA Educators
          </Link>
          <p className="mt-5 max-w-md leading-7 text-white/68">
            Premium study abroad guidance for students pursuing admissions,
            visas, and trusted international education pathways.
          </p>
          <Link
            href="/programs#lead-form"
            className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-gold px-6 text-sm font-bold text-white shadow-button transition duration-300 hover:-translate-y-0.5 hover:bg-olive-dark active:scale-[0.98]"
          >
            Start application <ArrowRight size={18} />
          </Link>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-olive-soft">
              {column.title}
            </p>
            <div className="mt-5 grid gap-3">
              {column.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-sm text-white/58 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
            <span className="inline-flex items-center gap-2">
              <Mail size={16} /> hello@asaeducators.com
            </span>
            <span className="inline-flex items-center gap-2">
              <Phone size={16} /> +92 300 1304726
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} /> Faisalabad, Pakistan
            </span>
          </div>
          <p>© 2026 ASA Educators. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
