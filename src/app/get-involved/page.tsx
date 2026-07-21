import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GetInvolvedHero from "@/sections/GetInvolvedHero";
import BuyTickets from "@/sections/BuyTickets";
import GetInvolvedSponsor from "@/sections/GetInvolvedSponsor";
import GetInvolvedExhibit from "@/sections/GetInvolvedExhibit";
import GetInvolvedSpeak from "@/sections/GetInvolvedSpeak";

export default function GetInvolvedPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#02090f] overflow-hidden selection:bg-purple-accent selection:text-white">
      {/* Floating Header */}
      <Navbar />

      {/* Main Page Sections */}
      <main className="flex-grow flex flex-col justify-center">
        <GetInvolvedHero />
        <BuyTickets />
        <GetInvolvedSponsor />
        <GetInvolvedExhibit />
        <GetInvolvedSpeak />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
