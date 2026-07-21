import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AssociationsHero from "@/sections/AssociationsHero";
import AssociationsPartnershipBlock from "@/sections/AssociationsPartnershipBlock";
import AssociationsWhyAssociate from "@/sections/AssociationsWhyAssociate";
import AssociationsTierGrid from "@/sections/AssociationsTierGrid";

export const metadata = {
  title: "Supporting Associations | Dubai FinTech Summit",
  description: "Dubai FinTech Summit 2026 global alliances, trade bodies, and industry chambers supporting fintech acceleration.",
};

export default function AssociationsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#02090f] overflow-hidden selection:bg-purple-accent selection:text-white">
      {/* Floating Header */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-grow flex flex-col justify-center">
        <AssociationsHero />
        <AssociationsPartnershipBlock />
        <AssociationsWhyAssociate />
        <AssociationsTierGrid />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
