"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/landing", label: "Destinations" }
];

const spring = { type: "spring", stiffness: 300, damping: 30 };

export default function Navigation() {
  const pathname = usePathname();
  const [hovered, setHovered] = useState(null);
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-canvas/86 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="flex min-h-12 items-center text-lg font-bold tracking-tight text-olive"
        >
          ASA Educators
        </Link>

        <div className="hidden items-center rounded-full border border-line bg-white/75 p-1 shadow-soft md:flex">
          {links.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            const visible = hovered === link.href || (!hovered && active);

            return (
              <Link
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHovered(link.href)}
                onMouseLeave={() => setHovered(null)}
                className="relative flex min-h-12 items-center rounded-full px-5 text-sm font-semibold text-[#3F4654] transition hover:text-olive"
              >
                {visible ? (
                  <motion.span
                    layoutId="nav-pill"
                    transition={spring}
                    className="absolute inset-0 rounded-full bg-gold-soft"
                  />
                ) : null}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </div>

        <Link
          href="/services"
          className="hidden min-h-12 items-center rounded-full bg-olive px-6 text-sm font-semibold text-white shadow-soft transition hover:bg-olive-dark active:scale-[0.97] md:inline-flex"
        >
          Book Consultation
        </Link>

        <button
          type="button"
          aria-label="Open navigation"
          onClick={() => setOpen(true)}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white text-olive shadow-soft md:hidden"
        >
          <Menu size={22} />
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={spring}
            className="fixed inset-0 z-50 bg-canvas"
          >
            <div className="flex h-20 items-center justify-between px-5">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center text-lg font-bold text-olive"
              >
                ASA Educators
              </Link>
              <button
                type="button"
                aria-label="Close navigation"
                onClick={() => setOpen(false)}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white text-olive"
              >
                <X size={22} />
              </button>
            </div>
            <div className="px-6 pt-12">
              {links.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...spring, delay: index * 0.045 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-16 items-center border-b border-gray-100 font-serif text-[clamp(2rem,9vw,3.5rem)] leading-none text-[#1A1D24]"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
