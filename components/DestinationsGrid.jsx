"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const spring = { type: "spring", stiffness: 300, damping: 30 };

const destinations = [
  {
    name: "Australia",
    image:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1400&q=85",
    courses: "Nursing, IT, Engineering",
    rate: "42 partner universities",
    className: "md:col-span-7 md:min-h-[520px]"
  },
  {
    name: "United States",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1200&q=85",
    courses: "STEM, Business, Data",
    rate: "Merit routes mapped",
    className: "md:col-span-5 md:min-h-[360px]"
  },
  {
    name: "United Kingdom",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=85",
    courses: "Law, Finance, Health",
    rate: "1-year masters focus",
    className: "md:col-span-5 md:min-h-[360px]"
  },
  {
    name: "Canada",
    image:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=1400&q=85",
    courses: "Co-op, CS, Supply Chain",
    rate: "Province-aware planning",
    className: "md:col-span-7 md:min-h-[520px]"
  }
];

export default function DestinationsGrid() {
  return (
    <section id="destinations" className="bg-canvas py-[clamp(4rem,8vw,7rem)]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.26em] text-[#9A7B35]">
            Destinations & Universities
          </p>
          <h2 className="font-serif text-[clamp(2.4rem,5.4vw,4.8rem)] leading-[1]">
            Compare countries by opportunity, not guesswork.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-12">
          {destinations.map((destination) => (
            <motion.article
              key={destination.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={spring}
              className={`group relative min-h-[420px] overflow-hidden rounded-2xl bg-white shadow-soft ${destination.className}`}
            >
              <Image
                src={destination.image}
                alt={`${destination.name} study destination`}
                fill
                sizes="(min-width: 768px) 58vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/52 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <h3 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-none text-white">
                  {destination.name}
                </h3>
              </div>
              <motion.div
                initial={false}
                className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/88 p-5 text-[#1A1D24] shadow-plush backdrop-blur-xl transition duration-300 md:translate-y-[110%] md:group-hover:translate-y-0 md:group-focus-within:translate-y-0 sm:inset-x-6 sm:bottom-6"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9A7B35]">
                  University Intelligence
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-[#7C8597]">
                      Strengths
                    </p>
                    <p className="mt-1 font-semibold">{destination.courses}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-[#7C8597]">
                      Planning Note
                    </p>
                    <p className="mt-1 font-semibold">{destination.rate}</p>
                  </div>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
