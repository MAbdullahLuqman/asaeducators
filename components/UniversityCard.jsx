import { ArrowRight, Building2, MapPin } from "lucide-react";

export default function UniversityCard({ university }) {
  const majors = university.majors || [];
  const initials = university.name
    .split(/\s+/)
    .filter((word) => /^[A-Z]/.test(word))
    .slice(0, 3)
    .map((word) => word[0])
    .join("");

  return (
    <article className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#FEE2E2] text-sm font-black text-[#D71920]">
          {initials || <Building2 className="h-7 w-7" />}
        </div>
        <div>
          <h3 className="text-xl font-bold leading-snug text-[#071326]">{university.name}</h3>
          <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-gray-500">
            <MapPin className="h-4 w-4 text-[#D71920]" />
            {university.location}
          </p>
        </div>
      </div>
      <div className="mt-5 grid gap-3 text-sm text-gray-600">
        <p>
          <span className="font-bold text-[#0B2D57]">Intakes:</span> {university.intakes}
        </p>
        <p>
          <span className="font-bold text-[#0B2D57]">Popular majors:</span> {majors.join(", ")}
        </p>
      </div>
      <a
        href="#lead-form"
        className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#D71920] px-5 text-sm font-bold text-white transition hover:bg-[#b9141a]"
      >
        Apply to this University <ArrowRight className="h-4 w-4" />
      </a>
    </article>
  );
}
