import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ScrollToTop } from "@/components/scroll-to-top";
import { SiteChrome } from "@/components/site-chrome";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <>
      <SiteChrome />
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Work />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
