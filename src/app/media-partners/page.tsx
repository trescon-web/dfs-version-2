import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MediaHero from "@/sections/MediaHero";
import MediaTierGrid from "@/sections/MediaTierGrid";

export const metadata = {
  title: "FinTech Partners | Collaborate with Dubai FinTech Summit",
  description: "Dubai FinTech Summit 2026 Industry leaders supporting the future of finance",
};

export default function MediaPartnersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#02090f] overflow-hidden selection:bg-purple-accent selection:text-white">
      {/* Floating Header */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-grow flex flex-col justify-center">
        <MediaHero />
        <MediaTierGrid />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
