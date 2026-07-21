import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LaunchpadHero from "@/sections/LaunchpadHero";
import LaunchpadStage from "@/sections/LaunchpadStage";
import LaunchpadParticipate from "@/sections/LaunchpadParticipate";

export const metadata = {
  title: "FinTech Launchpad | Dubai FinTech Summit 2026",
  description: "A global stage for breakthrough ideas and disruptive innovations at Dubai FinTech Summit 2026.",
};

export default function FintechLaunchpadPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#02090f] overflow-hidden selection:bg-purple-accent selection:text-white">
      {/* Floating Header */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-grow flex flex-col justify-center">
        <LaunchpadHero />
        <LaunchpadStage />
        <LaunchpadParticipate />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
