import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Clock, Mail, Menu } from "lucide-react";
import { destinations } from "@/lib/destinations";

const beforeDestination = [
  ["Home", "/"],
  ["Courses", "/courses"]
];

const afterDestination = [
  ["Study Pathway", "/study-pathway"],
  ["Blog & Resources", "/blog"],
  ["About Us", "/about"],
  ["Contact Us", "/contact-us"]
];

export default function Navbar() {
  return (
    <>
      <div className="border-b border-gray-100 bg-white text-xs text-gray-500">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <a href="mailto:info@asaeducators.com" className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-[#D71920]" />
            info@asaeducators.com
          </a>
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#D71920]" />
              10:30 AM To 6:30 PM | Saturday, Sunday Off
            </span>
            <Link href="/lead-form" className="rounded-full bg-[#D71920] px-4 py-2 font-bold text-white transition hover:bg-[#b9141a]">
              Apply Now / Free Consultation
            </Link>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-gray-100 bg-white shadow-sm">
        <nav className="relative mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-3 px-4 py-3 lg:gap-5 lg:px-8">
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

          <div className="hidden items-center gap-5 text-sm font-semibold text-[#0B2D57] xl:flex xl:gap-7">
            {beforeDestination.map(([label, href]) => (
              <Link key={href} href={href} className="transition hover:text-[#D71920]">
                {label}
              </Link>
            ))}
            <div className="group relative">
              <Link href="/destination" className="flex items-center gap-1 transition hover:text-[#D71920]">
                Destinations <ChevronDown className="h-4 w-4" />
              </Link>
              <div className="invisible absolute left-0 top-full z-50 w-64 pt-4 opacity-0 transition group-hover:visible group-hover:opacity-100">
                <div className="rounded-2xl border border-gray-100 bg-white p-2 shadow-2xl shadow-gray-200/80">
                  {destinations.map((destination) => (
                    <Link key={destination.slug} href={`/destination/${destination.slug}`} className="block rounded-xl px-4 py-3 font-bold text-[#0B2D57] transition hover:bg-gray-50 hover:text-[#D71920]">
                      Study in {destination.country}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {afterDestination.map(([label, href]) => (
              <Link key={href} href={href} className="transition hover:text-[#D71920]">
                {label}
              </Link>
            ))}
          </div>

          <Link
            href="/lead-form"
            className="hidden rounded-full bg-[#D71920] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#b9141a] xl:inline-flex"
          >
            Apply Now
          </Link>

          <details className="mobile-menu group xl:hidden">
            <summary className="flex h-14 w-14 cursor-pointer list-none items-center justify-center rounded-full border border-gray-200 bg-white text-[#0B2D57] shadow-sm transition hover:text-[#D71920] [&::-webkit-details-marker]:hidden">
              <Menu className="h-7 w-7" />
            </summary>
            <div className="mobile-menu-panel fixed left-4 right-4 top-[6rem] z-50 mt-3 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl shadow-gray-200/80">
              <div className="grid divide-y divide-gray-100">
                {beforeDestination.map(([label, href]) => (
                  <a key={href} href={href} className="px-5 py-4 text-base font-bold text-[#0B2D57] transition hover:bg-gray-50 hover:text-[#D71920]">
                    {label}
                  </a>
                ))}
                <details className="group/destination">
                  <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-base font-bold text-[#0B2D57] transition hover:bg-gray-50 hover:text-[#D71920] [&::-webkit-details-marker]:hidden">
                    <span>Destinations</span>
                    <span className="text-2xl leading-none text-[#D71920] group-open/destination:rotate-45">+</span>
                  </summary>
                  <div className="grid bg-gray-50 px-5 py-2">
                    <a href="/destination" className="py-2 text-sm font-bold text-[#0B2D57]">
                      All Destinations
                    </a>
                    {destinations.map((destination) => (
                      <a key={destination.slug} href={`/destination/${destination.slug}`} className="py-2 text-sm font-bold text-gray-600 transition hover:text-[#D71920]">
                        Study in {destination.country}
                      </a>
                    ))}
                  </div>
                </details>
                {afterDestination.map(([label, href]) => (
                  <a key={href} href={href} className="px-5 py-4 text-base font-bold text-[#0B2D57] transition hover:bg-gray-50 hover:text-[#D71920]">
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </details>
        </nav>
      </header>
    </>
  );
}
