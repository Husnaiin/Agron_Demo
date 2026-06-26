import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProblemStatement } from "@/components/sections/ProblemStatement";
import { Objectives } from "@/components/sections/Objectives";
import { ResearchPipeline } from "@/components/sections/ResearchPipeline";
import { SystemArchitecture } from "@/components/sections/SystemArchitecture";
import { VideoShowcase } from "@/components/sections/VideoShowcase";
import { Gallery } from "@/components/sections/Gallery";
import { WhyAgron } from "@/components/sections/WhyAgron";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemStatement />
        <Objectives />
        <SystemArchitecture />
        <ResearchPipeline />
        <VideoShowcase />
        <Gallery />
        <WhyAgron />
      </main>
      <Footer />
    </>
  );
}
