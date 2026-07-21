import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogHero from "@/sections/BlogHero";
import BlogDirectory from "@/sections/BlogDirectory";

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#02090f] overflow-hidden selection:bg-purple-accent selection:text-white dark-theme">
      {/* Floating Header */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-grow flex flex-col justify-center">
        <BlogHero />
        <BlogDirectory />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
