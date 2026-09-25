import { site } from "@/data/content";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    image: `${site.url}${site.photo}`,
    email: site.email,
    telephone: site.phone,
    jobTitle: site.headline,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Richardson",
      addressRegion: "TX",
      addressCountry: "US",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "The University of Texas at Dallas",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "University of California, Davis",
      },
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "Bachelor of Science in Computer Science & Engineering",
        recognizedBy: {
          "@type": "CollegeOrUniversity",
          name: "University of California, Davis",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "MBA and M.S. in Business Analytics and Artificial Intelligence",
        recognizedBy: {
          "@type": "CollegeOrUniversity",
          name: "The University of Texas at Dallas",
        },
      },
    ],
    worksFor: {
      "@type": "Organization",
      name: "Abhitech Energycon Limited",
      url: "https://www.abhitechenergycon.com/",
    },
    sameAs: [site.linkedin],
    description: site.seoDescription,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
