import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryHero from "@/sections/EnquiryHero";
import EnquiryForm from "@/sections/EnquiryForm";

export default function EnquiryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#02090f] overflow-hidden selection:bg-purple-accent selection:text-white dark-theme">
      {/* Floating Header */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-grow flex flex-col justify-center">
        <EnquiryHero />
        <EnquiryForm />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
