const blogPosts = [
  {
    slug: "scholarship-portfolio",
    title: "How to Build a Scholarship Portfolio That Reads Like Evidence",
    excerpt:
      "A practical framework for turning grades, activities, and ambition into a persuasive funding case.",
    date: "2026-02-18",
    readTime: "7 min read",
    sections: [
      {
        heading: "Start With Fit",
        body:
          "Scholarship committees reward clarity. Before drafting essays, identify the academic themes, leadership evidence, and community outcomes that match the award criteria."
      },
      {
        heading: "Show Proof, Not Personality Alone",
        body:
          "A strong portfolio connects each claim to measurable evidence: research outputs, competition results, volunteer hours, internships, publications, or sustained leadership responsibilities."
      },
      {
        heading: "Build a Funding Calendar",
        body:
          "Track opening dates, internal university deadlines, recommendation letter lead times, and document translation windows so each application receives enough strategic attention."
      }
    ]
  },
  {
    slug: "visa-readiness",
    title: "Visa Readiness Begins Before the Offer Letter",
    excerpt:
      "The strongest visa files are built early, with consistent finances, coherent study intent, and clean documentation.",
    date: "2026-03-04",
    readTime: "6 min read",
    sections: [
      {
        heading: "Document Consistency",
        body:
          "Names, dates, study gaps, funding sources, sponsor relationships, and employment history must align across bank records, academic files, identity documents, and statements."
      },
      {
        heading: "Credible Study Intent",
        body:
          "Visa officers look for a logical connection between your past study, selected course, destination, and career outcome. That story should be specific and verifiable."
      },
      {
        heading: "Financial Traceability",
        body:
          "A clean fund trail matters more than a large final balance. Prepare sponsor income evidence, account history, and explanations for unusual deposits."
      }
    ]
  }
];

const landingPages = [
  {
    slug: "study-in-australia",
    destination: "Australia",
    title: "Study in Australia With a Clear Admission and Visa Plan",
    summary:
      "Shortlist universities, compare scholarship routes, and prepare a visa-ready file with expert support from first consultation to arrival.",
    stats: ["43 universities", "6 major intakes", "Post-study work routes"],
    focus: ["Nursing", "IT", "Business Analytics", "Engineering"],
    image:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1400&q=85",
    timeline: ["Profile review", "University shortlist", "Offer strategy", "Visa file readiness"],
    highlights: [
      "Strong options for healthcare, technology, business, and engineering applicants.",
      "Planning must account for intake timing, Genuine Student requirements, and financial documentation."
    ]
  },
  {
    slug: "study-in-canada",
    destination: "Canada",
    title: "Build a Canada Application Strategy Around Outcomes",
    summary:
      "Choose programs that connect to employability, budget, location, and long-term pathway goals without losing sight of documentation quality.",
    stats: ["90+ public institutions", "Co-op options", "Province-aware planning"],
    focus: ["Computer Science", "Healthcare", "Supply Chain", "Finance"],
    image:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=1400&q=85",
    timeline: ["Destination fit", "Program comparison", "Funding plan", "Study permit file"],
    highlights: [
      "Course choice should be connected to province, employability, co-op access, and budget.",
      "A strong file explains academic progression, funds, and realistic study intent."
    ]
  },
  {
    slug: "study-in-usa",
    destination: "United States",
    title: "Study in the United States With a Strong Academic Case",
    summary:
      "Build a balanced university list, prepare scholarship positioning, and align applications around academic fit and long-term goals.",
    stats: ["4,000+ institutions", "Merit scholarships", "Flexible majors"],
    focus: ["STEM", "Business", "Data Science", "Pre-Med"],
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1400&q=85",
    timeline: ["Profile positioning", "Balanced college list", "Essay strategy", "I-20 and visa prep"],
    highlights: [
      "Applications need a clear mix of reach, target, and safer institutions.",
      "Scholarship outcomes depend on academic evidence, deadlines, and a coherent applicant story."
    ]
  },
  {
    slug: "study-in-uk",
    destination: "United Kingdom",
    title: "Plan a UK Application Around Course Fit and Timing",
    summary:
      "Compare universities, one-year masters routes, scholarships, and visa requirements with a compact, deadline-aware plan.",
    stats: ["1-year masters", "UCAS routes", "Graduate route options"],
    focus: ["Law", "Finance", "Public Health", "Data Analytics"],
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1400&q=85",
    timeline: ["Course mapping", "Statement review", "CAS readiness", "Visa documentation"],
    highlights: [
      "UK planning rewards focused course selection and early document preparation.",
      "Scholarships and deposits often move quickly, so deadlines need careful sequencing."
    ]
  }
];

async function fetchData(items) {
  const response = await fetch(
    `data:application/json,${encodeURIComponent(JSON.stringify(items))}`,
    { cache: "force-cache" }
  );

  if (!response.ok) {
    throw new Error("Unable to load content");
  }

  return response.json();
}

export async function getBlogPosts() {
  return fetchData(blogPosts);
}

export async function getBlogPost(slug) {
  const posts = await getBlogPosts();
  return posts.find((post) => post.slug === slug);
}

export async function getLandingPages() {
  return fetchData(landingPages);
}

export async function getLandingPage(slug) {
  const pages = await getLandingPages();
  return pages.find((page) => page.slug === slug);
}
