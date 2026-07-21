import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DFFWHero from "@/sections/DFFWHero";
import DFFWMilestones from "@/sections/DFFWMilestones";
import DFFWGovernor from "@/sections/DFFWGovernor";
import DFFWOverview from "@/sections/DFFWOverview";

export default function DFFWPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#02090f] overflow-hidden selection:bg-purple-accent selection:text-white">
      {/* Floating Header */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-grow flex flex-col justify-center">
        <DFFWHero />
        <DFFWMilestones />
        <DFFWGovernor />
        <DFFWOverview />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
