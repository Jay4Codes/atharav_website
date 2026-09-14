import type { Metadata } from "next";
import { IBM_Plex_Mono, Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { site } from "@/data/content";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.headline}`,
    template: `%s — ${site.name}`,
  },
  description: site.summary,
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} — ${site.headline}`,
    description: site.summary,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${sourceSerif.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg text-ink">{children}</body>
    </html>
  );
}
