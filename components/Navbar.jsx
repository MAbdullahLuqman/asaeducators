"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Clock, Mail, Menu, X } from "lucide-react";
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
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

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
              10:30 AM To 6:30 PM | Sunday Off
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

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="flex h-14 w-14 items-center justify-center rounded-full border border-red-100 bg-white text-[#D71920] shadow-sm ring-8 ring-red-50 transition hover:bg-red-50 xl:hidden"
          >
            <Menu className="h-7 w-7" />
          </button>

          {open ? (
            <div className="fixed inset-0 z-50 bg-[#071326]/55 backdrop-blur-sm xl:hidden">
              <button
                type="button"
                aria-label="Close menu backdrop"
                className="absolute inset-0 cursor-default"
                onClick={closeMenu}
              />
              <div className="absolute inset-x-4 top-4 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl shadow-black/25">
                <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
                  <Image
                    src="/brand/asa-educators-header.png"
                    alt="ASA Educators"
                    width={140}
                    height={44}
                    className="h-12 w-auto object-contain"
                  />
                  <button
                    type="button"
                    aria-label="Close menu"
                    onClick={closeMenu}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-[#D71920] transition hover:bg-red-100"
                  >
                    <X className="h-7 w-7" />
                  </button>
                </div>

                <div className="max-h-[calc(100svh-8rem)] overflow-y-auto">
                  <div className="grid divide-y divide-gray-100">
                    {beforeDestination.map(([label, href]) => (
                      <Link key={href} href={href} onClick={closeMenu} className="px-6 py-5 text-lg font-bold text-[#0B2D57] transition hover:bg-gray-50 hover:text-[#D71920]">
                        {label}
                      </Link>
                    ))}
                    <details className="group/destination">
                      <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 text-lg font-bold text-[#0B2D57] transition hover:bg-gray-50 hover:text-[#D71920] [&::-webkit-details-marker]:hidden">
                        <span>Destinations</span>
                        <span className="text-3xl leading-none text-[#D71920] transition group-open/destination:rotate-45">+</span>
                      </summary>
                      <div className="grid bg-gray-50 px-6 py-3">
                        <Link href="/destination" onClick={closeMenu} className="py-3 text-base font-bold text-[#0B2D57]">
                          All Destinations
                        </Link>
                        {destinations.map((destination) => (
                          <Link key={destination.slug} href={`/destination/${destination.slug}`} onClick={closeMenu} className="py-3 text-sm font-bold text-gray-600 transition hover:text-[#D71920]">
                            Study in {destination.country}
                          </Link>
                        ))}
                      </div>
                    </details>
                    {afterDestination.map(([label, href]) => (
                      <Link key={href} href={href} onClick={closeMenu} className="px-6 py-5 text-lg font-bold text-[#0B2D57] transition hover:bg-gray-50 hover:text-[#D71920]">
                        {label}
                      </Link>
                    ))}
                  </div>
                  <div className="border-t border-gray-100 p-5">
                    <Link
                      href="/lead-form"
                      onClick={closeMenu}
                      className="flex min-h-12 items-center justify-center rounded-xl bg-[#D71920] px-6 text-sm font-extrabold text-white transition hover:bg-[#b9141a]"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : null}

        </nav>
      </header>
    </>
  );
}
