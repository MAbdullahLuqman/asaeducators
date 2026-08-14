export const destinations = [
  {
    slug: "cyprus",
    country: "Cyprus",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
    copy: "A practical European study option with accessible tuition, English-taught programs, and a student-friendly environment.",
    intro:
      "Cyprus is a strong first international destination for students who want European exposure, manageable living costs, and a smoother transition into overseas study.",
    points: ["Affordable European route", "Business and hospitality options", "Strong entry point for first-time travellers"],
    programs: ["Business Administration", "Hospitality Management", "Computer Science", "Health Sciences"],
    why: ["English-taught programs", "Moderate living costs", "Friendly student environment", "Spring and Fall intake options"]
  },
  {
    slug: "australia",
    country: "Australia",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=85",
    copy: "A globally recognised destination for students seeking high-quality education, multicultural campuses, and career-focused programs.",
    intro:
      "Australia offers internationally respected qualifications, modern campuses, and a wide range of study options for students planning long-term academic and professional growth.",
    points: ["World-ranked institutions", "Multiple intake options", "Broad course availability"],
    programs: ["Information Technology", "Engineering", "Business", "Nursing and Health"],
    why: ["Globally recognised degrees", "Multicultural campuses", "Strong student services", "Career-focused programs"]
  },
  {
    slug: "uk",
    country: "UK",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=85",
    copy: "A strong academic destination for students who want respected qualifications and shorter degree routes.",
    intro:
      "The UK is known for academic depth, respected universities, and efficient degree timelines, especially for students considering one-year postgraduate options.",
    points: ["One-year master routes", "Historic universities", "Clear academic progression"],
    programs: ["Business and Management", "Law", "Data Science", "Public Health"],
    why: ["Shorter degree duration", "Strong academic reputation", "Wide course selection", "Clear progression routes"]
  },
  {
    slug: "sweden",
    country: "Sweden",
    image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=1200&q=85",
    copy: "A modern education system known for innovation, research, sustainability, and high-quality student life.",
    intro:
      "Sweden is a good fit for students who value research, innovation, sustainability, and independent learning in a modern European environment.",
    points: ["Innovation-led learning", "Research opportunities", "English-taught programs"],
    programs: ["Engineering", "Sustainability", "Computer Science", "Design and Innovation"],
    why: ["Research-driven education", "Modern campuses", "Innovation culture", "High quality of life"]
  },
  {
    slug: "malaysia",
    country: "Malaysia",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=85",
    copy: "A cost-effective Asian study destination with international campuses, diverse communities, and accessible living costs.",
    intro:
      "Malaysia suits students who want a balanced option: international education, lower living costs, and a familiar Asian student lifestyle.",
    points: ["Budget-conscious option", "International campuses", "Comfortable student lifestyle"],
    programs: ["Business", "Information Technology", "Hospitality", "Engineering"],
    why: ["Affordable tuition", "Lower living costs", "International branch campuses", "Comfortable cultural transition"]
  },
  {
    slug: "turkey",
    country: "Turkey",
    image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=85",
    copy: "A culturally rich destination with competitive tuition, growing universities, and a wide range of programs.",
    intro:
      "Turkey gives students a blend of competitive fees, growing universities, cultural depth, and broad academic options across major cities.",
    points: ["Competitive fees", "Scholarship possibilities", "Strong campus culture"],
    programs: ["Medicine and Health", "Engineering", "Business", "International Relations"],
    why: ["Competitive tuition", "Scholarship routes", "Large student cities", "Wide program availability"]
  }
];

export function getDestination(slug) {
  return destinations.find((destination) => destination.slug === slug);
}
