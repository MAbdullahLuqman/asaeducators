const defaultRequirements = [
  {
    level: "Foundation",
    academic: "Matric, O Levels, Intermediate Part I, or equivalent profile review.",
    english: "IELTS/PTE/ELLT/LanguageCert where required, or academy preparation plan.",
    documents: "Passport, academic records, photos, and guardian/sponsor details."
  },
  {
    level: "Bachelor's",
    academic: "Intermediate, A Levels, DAE, or equivalent qualification matched to course entry.",
    english: "Accepted English test, MOI, or institution-approved alternative where available.",
    documents: "Transcripts, certificates, passport, SOP, and financial sponsor evidence."
  },
  {
    level: "Master's",
    academic: "Relevant bachelor's degree with transcripts, final certificate, and CV.",
    english: "IELTS/PTE/LanguageCert/Oxford ELLT or university-approved English route.",
    documents: "Degree records, CV, SOP, references, passport, and financial documents."
  }
];

function uni(name, location, intakes, majors) {
  return { name, location, intakes, majors };
}

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
    why: ["English-taught programs", "Moderate living costs", "Friendly student environment", "Spring and Fall intake options"],
    services: [
      ["Visa Application Assistance", "Document checks, financial file review, embassy forms, and interview preparation before submission."],
      ["Pre-Departure Orientation", "Travel planning, accommodation guidance, enrollment tasks, and arrival briefing for the first weeks abroad."],
      ["Language Test Preparation", "IELTS, PTE, LanguageCert, and Oxford ELLT guidance when a university needs proof of English."]
    ],
    compass: [
      ["Initial Consultation", "We review academics, budget, English level, target intake, and family expectations."],
      ["Find Universities and Courses", "Your counselor builds a shortlist by fees, entry rules, course fit, and deadline risk."],
      ["Apply and Receive Offers", "Applications, documents, offer letters, deposits, and visa timing are tracked in one plan."]
    ],
    admissions: [
      "High school certificate for undergraduate entry or a relevant bachelor degree for postgraduate entry.",
      "English proof through IELTS, PTE, LanguageCert, Oxford ELLT, MOI, or an accepted university route.",
      "Passport, academic transcripts, photographs, SOP, recommendation letters, and sponsor evidence.",
      "Offer letter, financial documents, medical clearance, police clearance, and completed visa forms."
    ],
    universities: [
      uni("University of Cyprus", "Nicosia, Cyprus", "Fall and Spring", ["Economics", "Engineering", "Computer Science"]),
      uni("Cyprus University of Technology", "Limassol, Cyprus", "Fall intake", ["Technology", "Health Sciences", "Management"]),
      uni("Eastern Mediterranean University", "Famagusta, Cyprus", "February and September", ["Engineering", "Business", "Architecture"]),
      uni("University of Nicosia", "Nicosia, Cyprus", "Fall and Spring", ["Medicine", "Business", "Computer Science"]),
      uni("Frederick University", "Nicosia and Limassol", "Fall and Spring", ["Engineering", "Education", "Business"]),
      uni("Open University of Cyprus", "Nicosia, Cyprus", "Fall intake", ["Education", "Management", "Information Systems"]),
      uni("European University Cyprus", "Nicosia, Cyprus", "Fall and Spring", ["Health Sciences", "Business", "Engineering"]),
      uni("Neapolis University Pafos", "Paphos, Cyprus", "Fall and Spring", ["Architecture", "Business", "Law"]),
      uni("Cyprus International University", "North Cyprus", "February and September", ["Engineering", "Business", "Pharmacy"]),
      uni("Girne American University", "Kyrenia, Cyprus", "February and September", ["Business", "Aviation", "Hospitality"]),
      uni("University of Kyrenia", "Kyrenia, Cyprus", "February and September", ["Maritime", "Aviation", "Health Sciences"]),
      uni("Near East University", "North Cyprus", "February and September", ["Medicine", "Dentistry", "Engineering"]),
      uni("European University of Lefke", "Lefke, Cyprus", "February and September", ["Engineering", "Health", "Business"]),
      uni("Mediterranean Institute of Management", "Nicosia, Cyprus", "Fall intake", ["Management", "Business", "Public Administration"]),
      uni("American University of Cyprus", "Nicosia, Cyprus", "February, June, September", ["Business", "Computing", "Hospitality"]),
      uni("Alexander College", "Larnaca, Cyprus", "February and September", ["Business", "Law", "Health Sciences"])
    ],
    requirements: defaultRequirements,
    whyDetails: [
      ["Affordable Tuition & Living Costs", "Cyprus gives families a practical European route with lower tuition and living costs than many larger study destinations."],
      ["English-Taught Programs", "Many programs are delivered in English, especially across business, hospitality, computing, engineering, and health-related fields."],
      ["Safe Student Lifestyle", "Compact cities, active student communities, and a welcoming environment make Cyprus easier for first-time international students."],
      ["European Exposure", "Students gain international classroom experience and a useful bridge toward wider European academic and career opportunities."],
      ["Multicultural Environment", "Cyprus hosts students from many regions, helping Pakistani students adjust while still experiencing a global campus culture."],
      ["Strong Weather and Lifestyle", "Mild winters, sunny summers, and coastal cities create a balanced study and living experience."]
    ],
    applicationProcess: [
      "Confirm study level, preferred intake, budget, and English test route.",
      "Shortlist institutions by course fit, tuition, location, and admission criteria.",
      "Prepare academic documents, passport, photos, SOP, recommendations, and sponsor evidence.",
      "Submit the application, track offer conditions, and prepare payment or deposit steps.",
      "Build the visa file with financial evidence, medical records, police clearance, and final university documents."
    ],
    postStudy:
      "Cyprus gives students a European study environment with practical living costs. Career options depend on employer demand, program relevance, and current residence/work authorization rules.",
    workPermit: [
      ["Work permit route", "Graduates generally need a valid employer contract and the correct work authorization to move from study to full-time employment."],
      ["Employer-led process", "The employer usually supports the work permit request through the relevant labour and migration authorities."],
      ["Typical validity", "Work authorization is commonly linked to the contract period and can be renewable when employment remains valid."],
      ["Core documents", "Passport copy, clean criminal record, medical clearance, employment contract, and completed government forms may be required."],
      ["Planning note", "Students should not rely only on part-time work. Career planning should begin while selecting the course and institution."]
    ],
    faqs: [
      ["Is Cyprus affordable for Pakistani students?", "Cyprus is often chosen because tuition and living costs can be more manageable than many larger European destinations."],
      ["Can I study in English?", "Many institutions offer English-taught routes, but each program should be checked before application."],
      ["Can international students work while studying?", "Work options depend on current student visa rules, city, employer availability, and the student's class schedule."],
      ["What are the post-study work options?", "Graduates usually need an eligible employer offer and correct authorization before starting full-time work."],
      ["Are scholarships available?", "Some institutions provide discounts or merit awards. ASA reviews eligibility and deadlines before application."]
    ],
    work: [
      "Students can explore part-time work rules through their institution and current immigration guidance.",
      "Graduate work options normally depend on a valid employer offer and the correct work authorization.",
      "ASA helps students understand realistic career pathways before choosing a program."
    ]
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
    why: ["Globally recognised degrees", "Multicultural campuses", "Strong student services", "Career-focused programs"],
    services: [
      ["Course and Campus Shortlisting", "Compare institutions by program structure, entry profile, tuition, location, and student support."],
      ["Genuine Student File Guidance", "Prepare academic history, financial evidence, study logic, and family documentation with a clear narrative."],
      ["Pre-Departure Planning", "Review travel, accommodation, enrollment, health cover, and first-week settlement tasks."]
    ],
    compass: [
      ["Profile Review", "Check academic background, English level, budget, and preferred cities."],
      ["Application Plan", "Select courses, confirm intakes, prepare documents, and submit applications in sequence."],
      ["Offer to Visa Readiness", "Track offer conditions, payments, health cover, and visa file requirements."]
    ],
    admissions: [
      "Academic certificates and transcripts for the selected study level.",
      "English language evidence accepted by the chosen institution.",
      "Passport, statement of purpose, work history where relevant, and updated CV.",
      "Financial documents, sponsor evidence, health cover, and visa-supporting records."
    ],
    universities: [
      uni("Deakin University", "Victoria, Australia", "March, July, November", ["IT", "Business", "Health"]),
      uni("La Trobe University", "Melbourne, Australia", "February and July", ["Business", "Nursing", "Cybersecurity"]),
      uni("University of Tasmania", "Tasmania, Australia", "February and July", ["Marine Science", "IT", "Business"]),
      uni("CQUniversity Australia", "Multiple campuses", "March, July, November", ["Engineering", "Business", "Health"]),
      uni("Federation University", "Victoria, Australia", "February and July", ["IT", "Engineering", "Education"]),
      uni("Western Sydney University", "Sydney, Australia", "March and July", ["Business", "Data Science", "Health"])
    ],
    requirements: defaultRequirements,
    postStudy:
      "Australia offers post-study work options that vary by qualification, location, and current immigration policy. Students should plan funding, city costs, and employability before enrollment.",
    faqs: [
      ["Which intake is best for Australia?", "February/March and July are common, but availability depends on university and course."],
      ["Do I need English test scores?", "Most students need accepted English evidence unless the university approves an alternative route."]
    ],
    work: [
      "Student work settings depend on visa rules and current government conditions.",
      "Career planning should start with the course, not after arrival.",
      "Students should compare city costs before choosing an institution."
    ]
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
    why: ["Shorter degree duration", "Strong academic reputation", "Wide course selection", "Clear progression routes"],
    services: [
      ["UK University Shortlisting", "Compare course modules, entry requirements, fees, scholarships, campus location, and employability focus."],
      ["Personal Statement Support", "Shape academic history, career goals, and course motivation into a focused application narrative."],
      ["CAS and Visa Readiness", "Track offer conditions, deposits, financial documents, TB test planning, and CAS milestones."]
    ],
    compass: [
      ["Eligibility Check", "Review grades, gaps, English evidence, work history, and target intake."],
      ["Offer Strategy", "Apply to a balanced shortlist across ambition, fit, and affordability."],
      ["Conditions and CAS", "Clear academic, English, payment, and document conditions before visa preparation."]
    ],
    admissions: [
      "Academic transcripts, certificates, CV, passport, and personal statement.",
      "IELTS, PTE, LanguageCert, Oxford ELLT, MOI, or another accepted English route.",
      "Offer condition documents, deposit proof, financial records, and TB test where required.",
      "CAS details, visa forms, sponsor evidence, and travel preparation documents."
    ],
    universities: [
      uni("University of Chester", "Chester, UK", "January, May, September", ["Business", "Computer Science", "Health"]),
      uni("University of Lincoln", "Lincoln, UK", "January and September", ["Engineering", "Business", "Media"]),
      uni("University of Portsmouth", "Portsmouth, UK", "January and September", ["Data Science", "Business", "Law"]),
      uni("Birmingham City University", "Birmingham, UK", "January, May, September", ["Business", "Computing", "Art and Design"]),
      uni("University of Huddersfield", "Huddersfield, UK", "January and September", ["Engineering", "Business", "Education"]),
      uni("University of Bolton", "Bolton, UK", "January and September", ["Health", "Business", "Computing"]),
      uni("Glasgow Caledonian University (GCU)", "Glasgow, UK", "January and September", ["Public Health", "Business", "Engineering"]),
      uni("University of Northampton", "Northampton, UK", "January and September", ["Business", "Education", "Health"]),
      uni("Northumbria University", "Newcastle, UK", "January and September", ["Business", "Computing", "Law"]),
      uni("University of Greenwich", "London, UK", "January and September", ["Business", "Data Science", "Engineering"])
    ],
    requirements: defaultRequirements,
    postStudy:
      "The UK Graduate route can allow eligible graduates to stay after completing a qualifying degree. Duration and eligibility depend on the latest UKVI rules, course level, and compliance history.",
    faqs: [
      ["Can ASA help with CAS readiness?", "Yes. We track offer conditions, deposit steps, financial documents, English evidence, and CAS milestones."],
      ["Can I apply without IELTS?", "Some universities accept alternatives such as MOI, PTE, LanguageCert, or Oxford ELLT, depending on course and intake."]
    ],
    work: [
      "Students should review current student work rules before budgeting around income.",
      "Graduate-route planning depends on course level, institution, and visa compliance.",
      "ASA helps students choose courses with realistic academic and career progression."
    ]
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
    why: ["Research-driven education", "Modern campuses", "Innovation culture", "High quality of life"],
    services: [
      ["Program Matching", "Review English-taught programs, academic prerequisites, tuition range, and scholarship timing."],
      ["Document Sequencing", "Prepare transcripts, degree records, passport, English evidence, and motivation documents before deadlines."],
      ["Arrival Planning", "Plan accommodation, residence permit steps, insurance, travel, and enrollment tasks."]
    ],
    admissions: [
      "Academic records, degree certificates, course descriptions, and grading documents.",
      "English evidence accepted by the institution and national application route.",
      "Statement of purpose, CV, passport, and scholarship documents where relevant.",
      "Residence permit documents, financial evidence, insurance, and admission proof."
    ],
    universities: [
      uni("Lund University", "Lund, Sweden", "Autumn intake", ["Engineering", "Business", "Sustainability"]),
      uni("Uppsala University", "Uppsala, Sweden", "Autumn intake", ["Science", "Business", "Public Health"]),
      uni("KTH Royal Institute of Technology", "Stockholm, Sweden", "Autumn intake", ["Engineering", "Computer Science", "Sustainability"]),
      uni("Chalmers University of Technology", "Gothenburg, Sweden", "Autumn intake", ["Engineering", "Architecture", "Technology"]),
      uni("Stockholm University", "Stockholm, Sweden", "Autumn intake", ["Social Sciences", "Data Science", "Business"]),
      uni("University of Gothenburg", "Gothenburg, Sweden", "Autumn intake", ["Business", "Arts", "Health"])
    ],
    requirements: defaultRequirements,
    postStudy:
      "Sweden can suit students planning research-led careers and innovation-focused programs. Residence and job-search options depend on current Swedish migration rules and degree completion.",
    faqs: [
      ["Are Swedish programs taught in English?", "Many master's programs are English-taught; bachelor's options should be checked carefully."],
      ["When should I prepare?", "Sweden has strict application windows, so academic and English documents should be ready early."]
    ],
    work: [
      "Students should plan living costs carefully because part-time work can vary by city and schedule.",
      "Career outcomes are strongest when the selected program connects to prior study and skills.",
      "Research-focused applicants should prepare academic records and project evidence early."
    ]
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
    why: ["Affordable tuition", "Lower living costs", "International branch campuses", "Comfortable cultural transition"],
    services: [
      ["Budget-Friendly Shortlisting", "Compare tuition, living cost, course availability, location, and entry routes."],
      ["Application and EMGS Support", "Prepare academic records, passport documents, offer requirements, and visa processing steps."],
      ["Student Settlement Guidance", "Plan accommodation, travel, campus registration, and basic arrival tasks."]
    ],
    admissions: [
      "Academic certificates, transcripts, passport, photos, and application forms.",
      "English evidence or university-approved English preparation route.",
      "Offer documents, payment records, medical requirements, and visa processing documents.",
      "Accommodation plan, travel details, and enrollment instructions."
    ],
    universities: [
      uni("Asia Pacific University", "Kuala Lumpur, Malaysia", "Multiple intakes", ["IT", "Business", "Cybersecurity"]),
      uni("Taylor's University", "Subang Jaya, Malaysia", "Multiple intakes", ["Hospitality", "Business", "Design"]),
      uni("INTI International University", "Nilai, Malaysia", "Multiple intakes", ["Business", "Engineering", "Computing"]),
      uni("UCSI University", "Kuala Lumpur, Malaysia", "Multiple intakes", ["Medicine", "Music", "Business"]),
      uni("University of Cyberjaya", "Cyberjaya, Malaysia", "Multiple intakes", ["Medicine", "Pharmacy", "Psychology"]),
      uni("SEGi University", "Kota Damansara, Malaysia", "Multiple intakes", ["Business", "IT", "Health"])
    ],
    requirements: defaultRequirements,
    postStudy:
      "Malaysia is often selected for affordable tuition and lower living costs. Career pathways depend on program relevance, employer demand, and current work authorization policy.",
    faqs: [
      ["Is Malaysia budget-friendly?", "It can be a practical option for families comparing tuition and living costs in Asia."],
      ["Are there international campuses?", "Yes, Malaysia has local and international campus options, depending on course and budget."]
    ],
    work: [
      "Students should treat part-time work as support, not the main funding plan.",
      "Lower living costs can make Malaysia practical for families comparing Asian routes.",
      "Course recognition and progression should be checked before final enrollment."
    ]
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
    why: ["Competitive tuition", "Scholarship routes", "Large student cities", "Wide program availability"],
    services: [
      ["University and City Comparison", "Compare Istanbul, Ankara, and other student cities by fees, programs, and lifestyle fit."],
      ["Scholarship File Review", "Prepare academic evidence, motivation documents, recommendation letters, and deadline calendars."],
      ["Visa and Travel Preparation", "Organize offer documents, financial evidence, accommodation plans, and arrival instructions."]
    ],
    admissions: [
      "Academic certificates, transcripts, passport, photos, and completed application forms.",
      "English or Turkish language evidence depending on the selected program.",
      "Statement of purpose, recommendation letters, and scholarship documents where needed.",
      "Offer letter, payment proof, financial evidence, insurance, and visa documents."
    ],
    universities: [
      uni("Istanbul Aydin University", "Istanbul, Turkey", "Fall and Spring", ["Medicine", "Engineering", "Business"]),
      uni("Bahcesehir University", "Istanbul, Turkey", "Fall and Spring", ["Architecture", "Business", "Engineering"]),
      uni("Istanbul Bilgi University", "Istanbul, Turkey", "Fall and Spring", ["Law", "Media", "Business"]),
      uni("Altinbas University", "Istanbul, Turkey", "Fall and Spring", ["Dentistry", "Pharmacy", "Engineering"]),
      uni("Istinye University", "Istanbul, Turkey", "Fall and Spring", ["Medicine", "Health", "Engineering"]),
      uni("Okan University", "Istanbul, Turkey", "Fall and Spring", ["Aviation", "Business", "Engineering"])
    ],
    requirements: defaultRequirements,
    postStudy:
      "Turkey offers broad program options and competitive tuition. Career planning should consider language, licensing, employer demand, and the student's long-term destination goals.",
    faqs: [
      ["Can I study in English in Turkey?", "Many private universities offer English-medium programs, but language requirements vary by course."],
      ["Are scholarships possible?", "Scholarship routes exist, but students need strong academic documents and early deadline planning."]
    ],
    work: [
      "Students should check language expectations and city costs before selecting a program.",
      "Scholarship timelines can be competitive, so documents should be prepared early.",
      "Career planning depends on program language, professional licensing, and long-term goals."
    ]
  }
];

export function getDestination(slug) {
  return destinations.find((destination) => destination.slug === slug);
}
