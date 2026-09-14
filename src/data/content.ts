export const site = {
  name: "Atharav Samant",
  shortName: "AS",
  location: "Richardson, TX",
  phone: "(214) 223-7218",
  email: "atharav.samant@utdallas.edu",
  linkedin: "https://www.linkedin.com/in/atharav-samant",
  resumeHref: "/Atharav%20Samant%20Resume.pdf",
  headline: "MBA & M.S. Business Analytics and AI",
  school: "The University of Texas at Dallas",
  status: "Seeking consulting internships",
  summary:
    "I work at the intersection of industrial operations, analytics, and product — building tools that turn plant data into decisions leadership can act on.",
} as const;

export const nav = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;

export const metrics = [
  {
    value: "5 min",
    label: "Product analysis cycle",
    detail: "Down from a 5-hour manual workflow via AbhiStat",
  },
  {
    value: "96%",
    label: "Software cost avoided",
    detail: "In-house platform adopted by ~400 employees",
  },
  {
    value: "4 min",
    label: "Field reporting time",
    detail: "Down from 45 minutes; reviews now hours, not days",
  },
  {
    value: "210–800 MW",
    label: "Plant scale served",
    detail: "Steel plants and power utilities across the portfolio",
  },
] as const;

export const projects = [
  {
    id: "abhistat",
    number: "01",
    name: "AbhiStat",
    kind: "Analytics product",
    timeframe: "Abhitech Energycon",
    impact: "5 hours → 5 minutes",
    summary:
      "Diagnosed a 5-hour manual product analysis workflow and led development of an automated analytics platform that produces client-ready statistics, visualizations, and insights.",
    details: [
      "Replaced a slow, expert-dependent analysis cycle with a repeatable product-performance pipeline.",
      "Translated statistical and machine learning results into evidence leadership and clients could use to make faster decisions.",
    ],
    tags: ["Python", "Statistical analysis", "Machine learning", "Data visualization"],
  },
  {
    id: "abhipmt",
    number: "02",
    name: "AbhiPMT",
    kind: "Operations platform",
    timeframe: "Abhitech Energycon",
    impact: "~$28K / year avoided",
    summary:
      "Built the business case, defined requirements, and coordinated rollout of an in-house task management and resource allocation platform now used by approximately 400 employees.",
    details: [
      "Cut estimated software spend by 96% by replacing third-party tools with an internal system.",
      "Covered work allocation, project tracking, and day-to-day operating cadence for a distributed industrial organization.",
    ],
    tags: ["Product development", "Requirements analysis", "Business case", "ERP / operations"],
  },
  {
    id: "smartcoke",
    number: "03",
    name: "SmartCoke",
    kind: "Industrial AI",
    timeframe: "Abhitech Energycon · WCEAM 2024",
    impact: "Presented to ~60 peers",
    summary:
      "Led research and development of an AI fuel-blending optimization initiative, synthesizing plant process analysis, operating data, and input from IIT Kanpur advisors and industry experts.",
    details: [
      "Aimed at better blending decisions and output quality for steel plants and power utilities.",
      "Presented the solution at the World Congress on Engineering Asset Management to an international audience of industry and academic participants.",
    ],
    tags: ["Process analysis", "Industrial AI", "Fuel blending", "Cross-functional R&D"],
  },
  {
    id: "field-reporting",
    number: "04",
    name: "Field reporting redesign",
    kind: "Operating system",
    timeframe: "Abhitech Energycon",
    impact: "45 min → 4 min",
    summary:
      "Redesigned field reporting and management review workflows so site updates reach leadership while the window to act is still open.",
    details: [
      "Compressed field reporting from 45 minutes to 4 minutes.",
      "Shortened senior management review cycles from 2–3 days to 2–3 hours.",
    ],
    tags: ["Workflow design", "Project management", "Operations"],
  },
] as const;

export const experience = [
  {
    company: "Abhitech Energycon Limited",
    location: "Mumbai, India",
    roles: [
      {
        title: "Project Manager",
        dates: "March 2024 – June 2026",
        bullets: [
          "Led AbhiStat from a 5-hour manual analysis bottleneck to a 5-minute automated analytics product.",
          "Owned the business case and rollout of an in-house task and resource platform adopted by ~400 employees, avoiding ~$28K in annual software spend.",
          "Directed SmartCoke, coordinating 13–14 contributors across software, operations, academia, and industry for plants ranging from 210 MW to 800 MW.",
          "Redesigned field reporting and management review so updates moved in minutes and hours instead of days.",
        ],
      },
      {
        title: "Software Engineer",
        dates: "November 2023 – March 2024",
        bullets: [
          "Ran plant visits, customer requirements work, and process analysis with IIT Kanpur advisors to ground early SmartCoke development in operating reality.",
          "Built statistical and machine learning analyses that isolated product impact after controlling for external operating variables, then packaged results as client-ready evidence.",
        ],
      },
    ],
  },
] as const;

export const speaking = {
  event: "World Congress on Engineering Asset Management (WCEAM 2024)",
  role: "Presenter",
  date: "October 2024",
  detail:
    "Presented SmartCoke, an AI-driven fuel blending optimization solution, to an international audience of ~60 industry and academic participants — covering quality and sustainability applications.",
} as const;

export const education = [
  {
    school: "The University of Texas at Dallas",
    college: "Naveen Jindal School of Management",
    degree: "MBA and M.S. in Business Analytics and AI",
    dates: "June 2028",
    note: "Dual degree",
  },
  {
    school: "The University of California, Davis",
    college: "College of Engineering",
    degree: "B.S. in Computer Science & Engineering",
    dates: "September 2023",
    note: "Undergraduate",
  },
] as const;

export const skills = [
  {
    group: "Analytics",
    items: [
      "Python",
      "Data analysis",
      "Statistical analysis",
      "Machine learning",
      "Data visualization",
    ],
  },
  {
    group: "Product & technology",
    items: [
      "Product development",
      "Requirements analysis",
      "Business case development",
      "ERP systems",
      "Project management",
    ],
  },
] as const;
