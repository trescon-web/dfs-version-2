"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpeakersHero from "@/sections/SpeakersHero";
import SpeakersDirectory from "@/sections/SpeakersDirectory";

export default function SpeakersPage() {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const searchParam = params.get("search");
      if (searchParam) {
        setSearchQuery(searchParam);
      }
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-hidden selection:bg-purple-accent selection:text-white">
      {/* Floating Header */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-grow flex flex-col justify-center">
        <SpeakersHero />
        <SpeakersDirectory 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
