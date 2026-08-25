import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  ["Courses", "/courses"],
  ["Destinations", "/destination"],
  ["Study Pathway", "/study-pathway"],
  ["Blog & Resources", "/blog"],
  ["About Us", "/about"],
  ["Contact Us", "/contact-us"]
];

export default function Footer() {
  return (
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
            ASA Educators helps students choose destinations, prepare for English tests,
            submit university applications, organize documents, and move toward
            international education with a clear plan.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold">Quick Links</h2>
          <div className="mt-5 grid gap-3">
            {footerLinks.map(([label, href]) => (
              <Link key={href} href={href} className="text-white/75 transition hover:text-white">
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold">Contact</h2>
          <div className="mt-5 grid gap-3 text-white/75">
            <a href="mailto:info@asaeducators.com">info@asaeducators.com</a>
            <a href="tel:+923001025753">+92 300 1025753</a>
            <a href="tel:+923006162069">+92 300 6162069</a>
            <p>10:30 AM To 6:30 PM</p>
            <p>Sunday Off</p>
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
  );
}
