import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RoundtablesHero from "@/sections/RoundtablesHero";
import RoundtablesContent from "@/sections/RoundtablesContent";

export const metadata = {
  title: "DFS Dialogues | Roundtables & Workshops | Dubai FinTech Summit",
  description: "Curated technical workshops, executive roundtables, and closed-door summits at Dubai FinTech Summit 2026.",
};

export default function RoundtablesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#02090f] overflow-hidden selection:bg-purple-accent selection:text-white">
      {/* Floating Header */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-grow flex flex-col justify-center">
        <RoundtablesHero />
        <RoundtablesContent />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
