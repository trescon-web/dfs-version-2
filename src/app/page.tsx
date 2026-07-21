import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import PatronageSponsors from "@/sections/PatronageSponsors";
import AboutSection from "@/sections/AboutSection";
import ImpactSection from "@/sections/ImpactSection";
import FeaturedSpeakers from "@/sections/FeaturedSpeakers";
import JoinNetwork from "@/sections/JoinNetwork";
import WhyAttend from "@/sections/WhyAttend";
import ConnectingCapitals from "@/sections/ConnectingCapitals";
import DiscussionTopics from "@/sections/DiscussionTopics";
import LeadershipSlider from "@/sections/LeadershipSlider";
import Exhibition from "@/sections/Exhibition";
import InTheNews from "@/sections/InTheNews";
import Footer from "@/components/Footer";
import StickyBottomBanner from "@/components/StickyBottomBanner";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-midnight overflow-hidden selection:bg-purple-accent selection:text-white">
      {/* Floating Header */}
      <Navbar />

      {/* Main Homepage Sections */}
      <main className="flex-grow flex flex-col justify-center">
        <Hero />
        <PatronageSponsors />
        <AboutSection />
        <ImpactSection />
        <FeaturedSpeakers />
        <JoinNetwork />
        <WhyAttend />
        <ConnectingCapitals />
        <DiscussionTopics />
        <LeadershipSlider />
        <Exhibition />
        <InTheNews />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Scroll-triggered sticky bottom banner */}
      <StickyBottomBanner />
    </div>
  );
}
