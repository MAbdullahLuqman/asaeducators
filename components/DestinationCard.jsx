import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function DestinationCard({ destination }) {
  return (
    <Link
      href={`/destination/${destination.slug}`}
      className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={destination.image}
          alt={`Study in ${destination.country}`}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
        <h3 className="absolute bottom-5 left-5 text-2xl font-bold text-white">
          Study in {destination.country}
        </h3>
      </div>
      <div className="p-6">
        <p className="leading-7 text-gray-600">{destination.copy}</p>
        <div className="mt-5 grid gap-2">
          {destination.points.slice(0, 3).map((point) => (
            <span key={point} className="flex gap-2 text-sm font-semibold text-[#0B2D57]">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#D71920]" />
              {point}
            </span>
          ))}
        </div>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#D71920]">
          Explore destination <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
