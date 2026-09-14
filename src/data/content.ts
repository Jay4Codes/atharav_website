export const site = {
  name: "Atharav Samant",
  shortName: "AS",
  location: "Richardson, TX",
  phone: "(214) 223-7218",
  email: "atharav.samant@utdallas.edu",
  linkedin: "https://www.linkedin.com/in/atharav-samant",
  headline: "MBA & M.S. Business Analytics and AI",
  school: "The University of Texas at Dallas",
  photo: "/images/atharav.jpg",
  url: "https://atharavsamant.com",
  seeking:
    "Actively seeking __internships__ in *consulting*, *technology strategy*, *business analytics*, *product management*, and *digital transformation*.",
  summary:
    "I am an **MBA and M.S. Business Analytics** candidate at **The University of Texas at Dallas** with a background that combines *technology*, *data analytics*, *business operations*, and *project leadership*.",
  seoDescription:
    "Atharav Samant is an MBA and M.S. Business Analytics and AI candidate at The University of Texas at Dallas (August 2026 – May 2028). Former Project Manager at Abhitech Energycon, he built AbhiStat, AbhiPMT, and SmartCoke for manufacturing, steel plants, and power utilities.",
  keywords: [
    "Atharav Samant",
    "Atharav Ganesh Samant",
    "MBA UT Dallas",
    "M.S. Business Analytics and AI",
    "Naveen Jindal School of Management",
    "UC Davis Computer Science",
    "Abhitech Energycon",
    "AbhiStat",
    "AbhiPMT",
    "SmartCoke",
    "industrial analytics",
    "manufacturing AI",
    "fuel blending optimization",
    "project management",
    "consulting",
    "Richardson TX",
  ],
} as const;

export const nav = [
  { href: "#about", label: "About", icon: "user" },
  { href: "#work", label: "Work", icon: "ops" },
  { href: "#experience", label: "Experience", icon: "briefcase" },
  { href: "#education", label: "Education", icon: "grad" },
  { href: "#contact", label: "Contact", icon: "mail" },
] as const;

export const affiliations = [
  {
    name: "Abhitech Energycon",
    role: "Project Manager, 2023–2026",
    src: "/logos/abhitech.svg",
    href: "https://www.abhitechenergycon.com/",
    onDark: false,
  },
  {
    name: "UT Dallas",
    role: "MBA / M.S. Analytics & AI, 2026–2028",
    src: "/logos/utdallas.svg",
    href: "https://jindal.utdallas.edu/",
    onDark: false,
  },
  {
    name: "UC Davis",
    role: "Computer Science & Engineering, 2019–2023",
    src: "/logos/ucdavis.svg",
    href: "https://www.ucdavis.edu/",
    onDark: true,
  },
] as const;

export const about = {
  paragraphs: [
    "After earning my Bachelor's degree in **Computer Science & Engineering** from the **University of California, Davis**, I returned to India to work in an industrial business. That gave me a chance to operate at the *intersection of technology and business*, building solutions while working directly with customers, engineers, and business leaders on real operational challenges.",
    "At **Abhitech Energycon**, I developed **ERP** and **analytics** solutions, led *cross-functional projects*, and helped drive **AI** and **machine learning** initiatives focused on manufacturing optimization and operational efficiency. I created an **automated analytics platform** that transformed product reporting and customer analysis, reducing manual effort while improving decision-making. I also led work on sustainability, industrial AI, and process improvement, including presenting **SmartCoke** at the *World Congress on Engineering Asset Management (WCEAM 2024)*.",
    "What differentiates my experience is the combination of *technical expertise* and *business exposure*. Having worked in an *owner-operated business environment*, I have firsthand insight into how strategic decisions are made, how teams are managed, and how technology investments create __measurable business value__.",
    "I am building on that foundation through a *dual-degree* **MBA and M.S. in Business Analytics and Artificial Intelligence** at **The University of Texas at Dallas**, combining business strategy, analytics, and AI to solve complex business challenges and drive **digital transformation**.",
  ],
  interests: [
    "Management consulting",
    "Technology consulting",
    "Business analytics",
    "Digital transformation",
    "Product strategy",
    "Artificial intelligence",
    "ERP systems",
    "Operations improvement",
    "Data-driven decision making",
  ],
} as const;

export const projects = [
  {
    id: "abhistat",
    visual: "chart",
    name: "AbhiStat",
    href: "https://abhistat.com",
    image: "/images/abhistat.jpg",
    kind: "Analytics product",
    timeframe: "Abhitech Energycon",
    impact: "5 hours → 5 minutes",
    summary:
      "Diagnosed a __5-hour__ manual product analysis workflow and led development of an **automated analytics platform** that produces *client-ready* statistics, visualizations, and insights.",
    details: [
      "Replaced a slow, expert-dependent analysis cycle with a *repeatable product-performance pipeline*.",
      "Translated **statistical** and **machine learning** results into evidence leadership and clients could use to make faster decisions.",
    ],
    tags: ["Python", "Statistical analysis", "Machine learning", "Data visualization"],
  },
  {
    id: "abhipmt",
    visual: "ops",
    name: "AbhiPMT",
    href: "https://abhi9.in",
    image: "/images/abhi9.jpg",
    kind: "Operations platform",
    timeframe: "Abhitech Energycon",
    impact: "~$28K / year avoided",
    summary:
      "Built the business case, defined requirements, and coordinated rollout of an in-house **task management and resource allocation** platform now used by approximately __400 employees__.",
    details: [
      "Cut estimated software spend by __96%__ by replacing third-party tools with an internal system.",
      "Covered work allocation, project tracking, and day-to-day operating cadence for a *distributed industrial organization*.",
    ],
    tags: ["Product development", "Requirements analysis", "Business case", "ERP / operations"],
  },
  {
    id: "smartcoke",
    visual: "plant",
    name: "SmartCoke",
    kind: "Industrial AI",
    timeframe: "Abhitech Energycon · WCEAM 2024",
    impact: "Presented to ~60 peers",
    summary:
      "Led research and development of an **AI fuel-blending optimization** initiative, synthesizing plant process analysis, operating data, and input from **IIT Kanpur** advisors and industry experts.",
    details: [
      "Aimed at better blending decisions and output quality for *steel plants* and *power utilities*.",
      "Presented the solution at the *World Congress on Engineering Asset Management* to an international audience of industry and academic participants.",
    ],
    tags: ["Process analysis", "Industrial AI", "Fuel blending", "Cross-functional R&D"],
  },
  {
    id: "field-reporting",
    visual: "field",
    name: "Field reporting redesign",
    kind: "Operating system",
    timeframe: "Abhitech Energycon",
    impact: "45 min → 4 min",
    summary:
      "Redesigned **field reporting** and **management review** workflows so site updates reach leadership while the window to act is still open.",
    details: [
      "Compressed field reporting from __45 minutes to 4 minutes__.",
      "Shortened senior management review cycles from __2–3 days to 2–3 hours__.",
    ],
    tags: ["Workflow design", "Project management", "Operations"],
  },
] as const;

export const experience = [
  {
    company: "Abhitech Energycon Limited",
    location: "Mumbai, India",
    logo: "/logos/abhitech.svg",
    href: "https://www.abhitechenergycon.com/",
    focus: "Energy conservation · steel & power",
    roles: [
      {
        title: "Project Manager",
        dates: "March 2024 – June 2026",
        bullets: [
          "Led **AbhiStat** from a __5-hour__ manual analysis bottleneck to a __5-minute__ automated analytics product.",
          "Owned the business case and rollout of an in-house task and resource platform adopted by ~__400 employees__, avoiding ~__$28K__ in annual software spend.",
          "Directed **SmartCoke**, coordinating *13–14 contributors* across software, operations, academia, and industry for plants ranging from **210 MW to 800 MW**.",
          "Redesigned field reporting and management review so updates moved in *minutes and hours instead of days*.",
        ],
      },
      {
        title: "Software Engineer",
        dates: "November 2023 – March 2024",
        bullets: [
          "Ran plant visits, customer requirements work, and process analysis with **IIT Kanpur** advisors to ground early **SmartCoke** development in operating reality.",
          "Built **statistical** and **machine learning** analyses that isolated product impact after controlling for external operating variables, then packaged results as *client-ready evidence*.",
        ],
      },
    ],
  },
  {
    company: "Technocrafts Switchgears Pvt. Ltd.",
    location: "Thane, India",
    logo: "/logos/technocrafts.png",
    href: "https://www.technocrafts.net/",
    focus: "Medium-voltage switchgear · manufacturing",
    roles: [
      {
        title: "Intern",
        dates: "June 2021 – July 2021",
        certificate: "/images/technocrafts-certificate.jpg",
        bullets: [
          "Completed internship projects in *circuits and panel designing* with **2D AutoCAD**, plus **panel testing** and **relay programming** on an existing electrical system.",
          "Supported *manufacturing optimization*, quality assurance, and technical documentation while gaining hands-on exposure to **industrial automation** and engineering project execution.",
        ],
      },
    ],
  },
] as const;

export const speaking = {
  event: "World Congress on Engineering Asset Management",
  short: "WCEAM 2024",
  role: "Presenter",
  date: "October 2024",
  detail:
    "Presented **SmartCoke**, an *AI-driven fuel blending optimization* solution, to an international audience of ~60 industry and academic participants — covering quality and sustainability applications.",
} as const;

export const education = [
  {
    school: "The University of Texas at Dallas",
    college: "Naveen Jindal School of Management",
    degree: "MBA and M.S. in Business Analytics and Artificial Intelligence",
    dates: "August 2026 – May 2028",
    note: "Dual degree",
    detail:
      "Pursuing a *dual-degree* **MBA and M.S. in Business Analytics and Artificial Intelligence** at the **Naveen Jindal School of Management**. Interested in *consulting*, *technology strategy*, *digital transformation*, *product innovation*, and *data-driven decision-making*.",
    logo: "/logos/utdallas.svg",
    href: "https://jindal.utdallas.edu/",
    onDark: false,
  },
  {
    school: "The University of California, Davis",
    college: "College of Engineering",
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    dates: "September 2019 – September 2023",
    note: "Undergraduate",
    logo: "/logos/ucdavis.svg",
    href: "https://www.ucdavis.edu/",
    onDark: true,
  },
] as const;

export const partners = [
  {
    name: "IIT Kanpur",
    role: "Academic advisors, SmartCoke",
    src: "/logos/iitk.svg",
    href: "https://www.iitk.ac.in/",
  },
] as const;

export const skills = [
  {
    group: "Analytics",
    items: [
      "Python",
      "Java",
      "Data analysis",
      "Statistical data analysis",
      "Machine learning",
      "Data visualization",
    ],
  },
  {
    group: "Product & technology",
    items: [
      "Software design",
      "Computer programming",
      "Unity",
      "Product development",
      "Requirements analysis",
      "ERP systems",
    ],
  },
  {
    group: "Leadership",
    items: [
      "People management",
      "Leadership",
      "Project management",
      "Strategic communications",
      "Time management",
      "Customer retention",
    ],
  },
  {
    group: "Outside work",
    items: [
      "Badminton",
      "Squash",
      "Chess",
      "Table tennis",
      "Soccer",
      "Cycling",
      "Event management",
      "Photography",
    ],
  },
] as const;
