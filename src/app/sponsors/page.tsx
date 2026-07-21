import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SponsorsHero from "@/sections/SponsorsHero";
import SponsorsTierGrid from "@/sections/SponsorsTierGrid";

export default function SponsorsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#02090f] overflow-hidden selection:bg-purple-accent selection:text-white dark-theme">
      {/* Floating Header */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-grow flex flex-col justify-center">
        <SponsorsHero />
        <SponsorsTierGrid />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
