export const defaultStats = [
  { value: "2,400+", label: "students advised" },
  { value: "97%", label: "document readiness rate" },
  { value: "18+", label: "destination pathways" },
  { value: "2026", label: "intake planning active" }
];

export const defaultPrograms = [
  {
    id: "cyprus-admissions",
    title: "Cyprus Admissions Pathway",
    category: "Europe pathway",
    level: "Undergraduate and postgraduate",
    duration: "Spring and Fall intakes",
    summary:
      "University shortlisting, offer strategy, and application support for students targeting Cyprus and European study routes.",
    description:
      "This pathway helps students build a clear Cyprus application plan, compare institutions, prepare academic documents, and move from profile review to offer letter with disciplined deadline control.",
    outcomes: [
      "Institution shortlist aligned with budget and eligibility",
      "Application documents prepared and reviewed before submission",
      "Clear intake calendar for offer, deposit, and visa milestones"
    ],
    modules: ["Profile assessment", "University shortlist", "Document checklist", "Offer tracking"],
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85",
    faqs: [
      {
        question: "Can ASA help if I have not selected a university yet?",
        answer:
          "Yes. ASA Educators starts with your academic profile, budget, target intake, and long-term goals before recommending a shortlist."
      },
      {
        question: "Which Cyprus institutions do you support?",
        answer:
          "ASA supports applications to trusted Cyprus institutions including American University of Cyprus and Alexander College pathways."
      }
    ]
  },
  {
    id: "visa-documentation",
    title: "Visa Documentation Review",
    category: "Visa readiness",
    level: "Offer holders",
    duration: "2-4 week preparation",
    summary:
      "A structured review of financial evidence, identity documents, academic files, and visa submission readiness.",
    description:
      "Visa Documentation Review is designed for students who need a consistent, well-organized file before submission. Counselors review document gaps, financial traceability, and application logic.",
    outcomes: [
      "Cleaner financial and sponsor documentation",
      "Reduced file inconsistencies before submission",
      "Step-by-step visa checklist for the selected intake"
    ],
    modules: ["File audit", "Financial evidence review", "Sponsor documentation", "Submission checklist"],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=85",
    faqs: [
      {
        question: "Do you guarantee visas?",
        answer:
          "No consultancy can guarantee a visa. ASA focuses on careful preparation, documentation quality, and file consistency."
      }
    ]
  },
  {
    id: "scholarship-guidance",
    title: "Scholarship & Budget Guidance",
    category: "Funding strategy",
    level: "Merit-focused applicants",
    duration: "Deadline-based planning",
    summary:
      "Budget mapping, scholarship route review, and evidence packaging for students seeking affordable study abroad options.",
    description:
      "ASA helps students understand tuition, living costs, deposit timelines, and merit-based opportunities so families can make informed decisions before committing to an institution.",
    outcomes: [
      "Realistic budget map for tuition and living costs",
      "Scholarship and discount opportunities identified",
      "Evidence package prepared for funding consideration"
    ],
    modules: ["Budget review", "Scholarship mapping", "Evidence packaging", "Deadline planning"],
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1400&q=85",
    faqs: [
      {
        question: "Can ASA find full scholarships?",
        answer:
          "ASA identifies realistic scholarship and discount routes based on the student's profile, institution options, and current intake rules."
      }
    ]
  },
  {
    id: "pre-departure-support",
    title: "Pre-Departure Support",
    category: "Arrival planning",
    level: "Visa-approved students",
    duration: "Final 30 days",
    summary:
      "Guidance for travel documents, enrollment tasks, accommodation planning, and student arrival readiness.",
    description:
      "Pre-Departure Support helps students move from approval to arrival with a calmer plan for travel, enrollment, campus onboarding, and essential first-week tasks.",
    outcomes: [
      "Travel and enrollment checklist completed",
      "Accommodation and arrival planning reviewed",
      "Student briefed on next steps before departure"
    ],
    modules: ["Travel readiness", "Enrollment tasks", "Accommodation guidance", "Arrival briefing"],
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=85",
    faqs: [
      {
        question: "When should pre-departure planning begin?",
        answer:
          "Students should begin as soon as visa approval is received so travel, enrollment, and accommodation steps are not rushed."
      }
    ]
  },
  {
    id: "english-test-preparation",
    title: "English Test Preparation",
    category: "IELTS, PTE and ELLT",
    level: "Applicants building English evidence",
    duration: "2 weeks to 2 months",
    summary:
      "Focused IELTS, PTE, LanguageCert, and Oxford ELLT preparation connected to each student's university and visa timeline.",
    description:
      "This pathway helps students choose the right English test route, strengthen weak modules, practice under timed conditions, and prepare evidence that matches the selected university requirement.",
    outcomes: [
      "Test route selected according to university acceptance",
      "Speaking, writing, reading, and listening gaps identified",
      "Mock practice plan aligned with admission deadlines"
    ],
    modules: ["Diagnostic review", "Module training", "Mock practice", "Score planning"],
    image:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1400&q=85",
    faqs: [
      {
        question: "Which English tests can ASA prepare students for?",
        answer:
          "ASA supports IELTS, PTE, LanguageCert, and Oxford ELLT preparation, depending on the university's accepted options."
      }
    ]
  },
  {
    id: "uk-university-admissions",
    title: "UK University Admissions",
    category: "UK pathway",
    level: "Undergraduate and postgraduate",
    duration: "January, May, and September intakes",
    summary:
      "University selection, course comparison, offer support, and document planning for students targeting UK institutions.",
    description:
      "This pathway gives students a practical UK admission plan across course fit, tuition range, intake availability, English evidence, personal statement quality, and offer conditions.",
    outcomes: [
      "UK university shortlist matched with profile and budget",
      "Personal statement and academic documents reviewed",
      "Offer conditions, deposits, and CAS-readiness tracked"
    ],
    modules: ["Profile mapping", "Course comparison", "Application submission", "Offer condition tracking"],
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1400&q=85",
    faqs: [
      {
        question: "Can ASA help compare UK universities?",
        answer:
          "Yes. ASA compares course availability, tuition, intake timing, entry requirements, and long-term student goals before recommending options."
      }
    ]
  }
];

export const defaultSuccessStories = [
  {
    studentName: "Ahmad Hussain",
    university: "American University of Cyprus",
    destination: "Cyprus, Europe",
    intake: "Spring 2026",
    counselor: "Mehreen CH",
    contact: "+92 300 1304726"
  },
  {
    studentName: "Hussain Ahmad",
    university: "Alexander College",
    destination: "Cyprus, Europe",
    intake: "Spring 2026",
    counselor: "Mehreen CH",
    contact: "+92 300 1304726"
  },
  {
    studentName: "M Tayyab Raza",
    university: "American University of Cyprus",
    destination: "Cyprus, Europe",
    intake: "Spring 2026",
    counselor: "Sadia Asim",
    contact: "+92 300 1025752"
  },
  {
    studentName: "Behroze Ali Khan",
    university: "American University of Cyprus",
    destination: "Cyprus, Europe",
    intake: "Spring 2026",
    counselor: "Sadia Asim",
    contact: "+92 300 1025752"
  },
  {
    studentName: "Shehzad Tanveer",
    university: "Alexander College",
    destination: "Cyprus, Europe",
    intake: "2026 Intake",
    counselor: "Mehreen CH",
    contact: "+92 300 1304726"
  },
  {
    studentName: "Samar Hayat",
    university: "Alexander College",
    destination: "Cyprus, Europe",
    intake: "Spring 2026",
    counselor: "Sadia Asim",
    contact: "+92 300 1025752"
  },
  {
    studentName: "M Usama",
    university: "Alexander College",
    destination: "Cyprus, Europe",
    intake: "2026 Intake",
    counselor: "Sadia Asim",
    contact: "+92 300 1025752"
  }
];

export const defaultBlogPosts = [
  {
    slug: "cyprus-student-visa-checklist",
    title: "Cyprus Student Visa Checklist for 2026 Applicants",
    excerpt:
      "The core documents, financial evidence, and timing considerations students should prepare before visa submission.",
    date: "2026-02-18",
    readTime: "7 min read",
    category: "Visa Guides",
    sections: [
      {
        heading: "Start With Consistency",
        body:
          "Names, dates, academic records, sponsor details, and financial evidence should align across every document before submission."
      },
      {
        heading: "Prepare Financial Evidence Early",
        body:
          "Families should review fund history, sponsor relationship documents, and unusual deposits before the final visa file is assembled."
      },
      {
        heading: "Track Intake Deadlines",
        body:
          "Offer letters, deposits, document legalization, and appointment windows should be tracked on one shared calendar."
      }
    ]
  },
  {
    slug: "choosing-a-cyprus-university",
    title: "How to Choose a Cyprus University With Confidence",
    excerpt:
      "A practical guide to comparing institutions by program fit, budget, student support, and long-term outcomes.",
    date: "2026-03-04",
    readTime: "6 min read",
    category: "Admissions",
    sections: [
      {
        heading: "Look Beyond the Name",
        body:
          "Students should compare course structure, intake availability, tuition, recognition, location, and student services before applying."
      },
      {
        heading: "Match the Program to Your Profile",
        body:
          "A strong application connects previous study, selected course, budget, and future goals in a clear sequence."
      }
    ]
  },
  {
    slug: "study-abroad-budget-plan",
    title: "Building a Realistic Study Abroad Budget",
    excerpt:
      "Tuition is only one part of the plan. Families should map deposits, living costs, travel, documentation, and emergency reserves.",
    date: "2026-04-12",
    readTime: "5 min read",
    category: "Family Planning",
    sections: [
      {
        heading: "Separate Fixed and Flexible Costs",
        body:
          "Tuition, deposits, visa fees, and travel documents are easier to plan when separated from living costs and personal spending."
      },
      {
        heading: "Plan Before the Offer Letter",
        body:
          "Budget readiness should be reviewed before applications are submitted so families can make decisions quickly after an offer."
      }
    ]
  },
  {
    slug: "ielts-pte-or-ellt",
    title: "IELTS, PTE, LanguageCert, or Oxford ELLT: Which Route Fits?",
    excerpt:
      "A practical comparison for students choosing an English test based on university acceptance, timeline, and preparation style.",
    date: "2026-05-08",
    readTime: "6 min read",
    category: "Test Preparation",
    sections: [
      {
        heading: "Start With University Acceptance",
        body:
          "The best English test is the one your selected university accepts for your course, intake, and visa route. Students should confirm this before booking a test."
      },
      {
        heading: "Match the Test to Your Strengths",
        body:
          "Some students perform better in computer-based tests, while others need more guided speaking practice. A diagnostic session helps choose the route with fewer surprises."
      },
      {
        heading: "Plan Backward From the Deadline",
        body:
          "Test preparation should leave enough time for mock practice, result release, application submission, offer conditions, and visa document preparation."
      }
    ]
  },
  {
    slug: "uk-university-shortlist-guide",
    title: "How to Build a Practical UK University Shortlist",
    excerpt:
      "A student-friendly way to compare UK universities by course fit, tuition, entry requirements, location, and intake timing.",
    date: "2026-05-22",
    readTime: "7 min read",
    category: "University Selection",
    sections: [
      {
        heading: "Compare the Course First",
        body:
          "A strong shortlist starts with the actual course modules, assessment style, placement options, and progression routes rather than only the university name."
      },
      {
        heading: "Keep Budget Visible",
        body:
          "Tuition, deposits, accommodation, visa fees, health surcharge, and living costs should be reviewed together before an application is submitted."
      },
      {
        heading: "Check Offer Conditions Early",
        body:
          "Students should understand academic, English, deposit, and document conditions before accepting an offer so the next step is clear."
      }
    ]
  },
  {
    slug: "student-visa-file-mistakes",
    title: "Common Student Visa File Mistakes to Avoid",
    excerpt:
      "Small inconsistencies in names, dates, finances, and academic history can slow a student visa file. Here is what to check early.",
    date: "2026-06-10",
    readTime: "5 min read",
    category: "Visa Guides",
    sections: [
      {
        heading: "Inconsistent Personal Details",
        body:
          "Names, passport numbers, dates of birth, addresses, and academic dates should match across forms, certificates, bank documents, and sponsor records."
      },
      {
        heading: "Weak Financial Explanation",
        body:
          "Large deposits, unclear sponsor relationships, and incomplete bank histories can create avoidable questions. Families should prepare explanations before submission."
      },
      {
        heading: "Late Document Collection",
        body:
          "Police certificates, medical records, attestations, translations, and updated bank statements can take time. Start before the offer letter becomes urgent."
      }
    ]
  }
];

export const defaultCounselors = [
  { name: "Mehreen CH", phone: "+92 300 1304726" },
  { name: "Sadia Asim", phone: "+92 300 1025752" }
];

export const defaultSiteSettings = [
  {
    id: "organization",
    name: "ASA Educators",
    email: "hello@asaeducators.com",
    phone: "+92 300 1304726",
    location: "Faisalabad, Pakistan",
    address:
      "ASA Educators, Al-Arabia Tower, Harianwala Chowk, D Ground Block B People's Colony No 1, Faisalabad."
  }
];

export const editableContentGroups = {
  stats: defaultStats,
  programs: defaultPrograms,
  successStories: defaultSuccessStories,
  blogPosts: defaultBlogPosts,
  counselors: defaultCounselors,
  siteSettings: defaultSiteSettings
};
