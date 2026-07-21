import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/sections/AboutHero";
import AboutDFFW from "@/sections/AboutDFFW";
import AboutD33 from "@/sections/AboutD33";
import AboutThemes from "@/sections/AboutThemes";
import AboutRepresentation from "@/sections/AboutRepresentation";
import AboutSectors from "@/sections/AboutSectors";
import AboutLeaders from "@/sections/AboutLeaders";
import AboutExperience from "@/sections/AboutExperience";
import AboutDFS2025 from "@/sections/AboutDFS2025";
import AboutVoices from "@/sections/AboutVoices";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#02090f] overflow-hidden selection:bg-purple-accent selection:text-white">
      {/* Floating Header */}
      <Navbar />

      {/* Main Page Sections */}
      <main className="flex-grow flex flex-col justify-center">
        <AboutHero />
        <AboutDFFW />
        <AboutD33 />
        <AboutThemes />
        <AboutRepresentation />
        <AboutSectors />
        <AboutLeaders />
        <AboutExperience />
        <AboutDFS2025 />
        <AboutVoices />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
