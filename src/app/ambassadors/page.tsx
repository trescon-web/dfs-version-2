import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AmbassadorsHero from "@/sections/AmbassadorsHero";
import AmbassadorsContent from "@/sections/AmbassadorsContent";

export const metadata = {
  title: "FinTech Ambassadors | Global Voices of Dubai FinTech Summit 2026",
  description: "Meet Dubai FinTech Summit Ambassadors. Global FinTech leaders fostering innovation, collaboration, and growth across financial technology ecosystems.",
};

export default function AmbassadorsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#02090f] overflow-hidden selection:bg-purple-accent selection:text-white">
      {/* Floating Header */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-grow flex flex-col justify-center">
        <AmbassadorsHero />
        <AmbassadorsContent />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
