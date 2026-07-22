"use client";
import { motion } from "framer-motion";

export default function RoundtablesHero() {
  return (
    <section 
      className="relative h-[250px] overflow-hidden bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('https://dubaifintechsummit.com/wp-content/uploads/2026/03/Sponsors-new-hero_banner-img-scaled.webp')" }}
    >
      {/* Dark overlay for extra readability */}
      <div className="absolute inset-0 bg-slate-950/45 z-0" />
      
      {/* Ambient background glows */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#12e8e8]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#c5a880]/5 rounded-full blur-[120px]" />
      </div>

      {/* Explicit style override to bypass global overrides */}
      <style dangerouslySetInnerHTML={{__html: `
        .rt-hero-title {
          color: #ffffff !important;
        }
      `}} />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full text-center flex flex-col items-center justify-center pt-16">
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-black tracking-tight leading-tight rt-hero-title"
        >
          DFS Dialogues
        </motion.h1>
      </div>
    </section>
  );
}
