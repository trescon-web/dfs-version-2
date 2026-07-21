import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ExhibitorsHero from "@/sections/ExhibitorsHero";
import ExhibitorsTierGrid from "@/sections/ExhibitorsTierGrid";

export default function ExhibitorsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#02090f] overflow-hidden selection:bg-purple-accent selection:text-white">
      {/* Floating Header */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-grow flex flex-col justify-center">
        <ExhibitorsHero />
        <ExhibitorsTierGrid />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
