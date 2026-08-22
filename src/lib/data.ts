export const profile = {
  name: "Sunil Sakri",
  title: "Product Manager, Supply Chain & Fulfillment",
  company: "Tesco Technology",
  location: "Bengaluru, Karnataka, India",
  email: "sunilsakri1994@gmail.com",
  linkedin: "https://www.linkedin.com/in/sunil-sakri",
  resume: "/Sunil-Sakri-Resume.pdf",
  tagline: "I build supply chain systems that move goods more efficiently at scale.",
  summary:
    "At Tesco, I own the ordering engine behind one of the UK's largest grocery networks — 500K+ SKUs, multi-depot distribution, millions of orders weekly. I led the platform's modernization from a legacy monolith to an API-first architecture, then layered in ML-driven forecasting, real-time demand signals, and inventory optimization algorithms that measurably moved the needle.",
};

export const topSkills = ["Supply Chain Management", "CI/CD", "Angular"];

export const coreCompetencies = [
  "Product Strategy & Vision",
  "Roadmapping & Prioritization",
  "Cross-Functional Leadership",
  "Warehouse & Inventory Management (WMS)",
  "Demand Forecasting & Inventory Optimization",
  "API-First Platform Design",
  "Stakeholder Management",
  "Payments & Claims Workflows",
];

export type ExperienceRole = {
  role: string;
  period: string;
  location?: string;
  bullets: string[];
};

export type ExperienceEntry = {
  company: string;
  span?: string;
  roles: ExperienceRole[];
  featured: boolean;
};

export const experience: ExperienceEntry[] = [
  {
    company: "Tesco Technology",
    span: "Feb 2023 — Present · 3 yrs 7 mos",
    featured: true,
    roles: [
      {
        role: "Product Manager — Supply Chain & Fulfillment",
        period: "Feb 2023 — Present",
        location: "Bengaluru",
        bullets: [
          "Own end-to-end product strategy for Tesco's national ordering engine — the core system deciding what gets ordered, in what quantity, from which supplier, to which depot — across 500K+ SKUs.",
          "Led platform modernization from legacy architecture to API-first design, enabling modular algorithm releases and cutting deployment cycles from weeks to days.",
        ],
      },
      {
        role: "Associate Product Manager",
        period: "Feb 2023 — Nov 2024",
        location: "Bengaluru, Karnataka, India",
        bullets: [
          "Led inventory management initiatives across Tesco's fresh and ambient distribution centers through the Warehouse Management System (WMS).",
          "Defined the product vision and roadmap by analyzing stock discrepancies and inefficient tracking, projecting annual savings of £220K.",
          "Led cross-functional initiatives with legal, UX, and engineering to ship automated solutions — improving compliance and productivity, and delivering £750K in annual savings across inventory management and workflow efficiency.",
        ],
      },
    ],
  },
  {
    company: "Optum",
    featured: true,
    roles: [
      {
        role: "Associate Product Manager — Payments Integrity",
        period: "May 2022 — Feb 2023 · 10 mos",
        location: "Hyderabad, Telangana, India",
        bullets: [
          "Managed a B2B claims overpayment recovery platform helping US healthcare insurers recover overpaid claims from providers through a streamlined outreach workflow.",
          "Conceptualized and launched capabilities that simplified the overpayment process, delivering $890K in total annual savings.",
          "Led cross-functional efforts with operations and business teams, cutting claim recovery turnaround time by ~15%.",
        ],
      },
    ],
  },
  {
    company: "Ernst & Young",
    featured: true,
    roles: [
      {
        role: "Software Engineer",
        period: "Jul 2016 — Jun 2020 · 4 yrs",
        location: "Bangalore",
        bullets: [
          "Built interactive applications solving problems across US Tax, Wealth Management, and fraud dispute & due diligence.",
          "Improved application functionality and APIs by designing cross-platform frameworks.",
          "Optimized the agile development cycle by creating reusable components, reducing cycle time.",
        ],
      },
    ],
  },
  {
    company: "The ProdZen",
    featured: false,
    roles: [
      {
        role: "Intern",
        period: "Nov 2021 — Jan 2022 · 3 mos",
        bullets: [
          "Built a top-down market-sizing model for a B2B SaaS client in pharma contract manufacturing.",
          "Conducted primary research into customer needs in the pharma supply chain segment.",
        ],
      },
    ],
  },
  {
    company: "Optum",
    featured: false,
    roles: [
      {
        role: "Product Management Intern",
        period: "May 2021 — Jul 2021 · 3 mos",
        location: "Hyderabad, Telangana, India",
        bullets: [
          "Conducted market assessment for the Life Sciences industry in the US to identify market opportunities.",
          "Ran competitor analysis across 5 competitors and identified gaps in Optum's product suite.",
          "Recommended features for a healthcare predictive platform to commercialize the offering.",
        ],
      },
    ],
  },
  {
    company: "Indian Institute of Technology, Guwahati",
    featured: false,
    roles: [
      {
        role: "Summer Intern",
        period: "May 2015 — Jul 2015 · 3 mos",
        bullets: ["Acoustic phonetic analysis of fricatives (speech recognition)."],
      },
    ],
  },
];

export const education = [
  {
    school: "T.A. Pai Management Institute",
    degree: "PGDM, MBA",
    period: "2020 — 2022",
  },
  {
    school: "Siddaganga Institute of Technology",
    degree: "B.E., Electronics and Communication",
    period: "2012 — 2016",
  },
  {
    school: "Sri Chaitanya Junior College, Hyderabad",
    degree: "Intermediate",
    period: "2010 — 2012",
  },
  {
    school: "Defence Laboratories School",
    degree: "Class X",
    period: "2000 — 2010",
  },
];

export const certifications = [
  "IT Project Management",
  "Digital Product Management: Modern Fundamentals",
  "Product Analytics Micro-Certification",
];

export const honors = ["Extra Miler Award", "Onsite Recognition"];

export const languages = [
  { name: "English", level: "Full Professional" },
  { name: "Hindi", level: "Full Professional" },
  { name: "Telugu", level: "Full Professional" },
  { name: "Kannada", level: "Native or Bilingual" },
];
