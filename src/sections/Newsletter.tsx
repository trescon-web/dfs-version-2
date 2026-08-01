"use client";
import { getAssetPath } from "@/utils/assetPath";
import { motion } from "framer-motion";
import { Sparkles, Mail, Send } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Terminal registered: ${email}`);
      setEmail("");
    }
  };

  return (
    <section id="newsletter" className="relative py-28 md:py-36 overflow-hidden bg-midnight border-t border-slate-200/10 text-center flex items-center justify-center">
      
      {/* 1. Full cover background photo with zero opacity mask overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src={getAssetPath("/images/dfs_networking_hall.jpg")}
          alt="Dubai FinTech Summit networking hall background"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-100"
        />
      </div>

      {/* 2. Glassmorphic Luxury Card container (Light/Platinum theme style) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-2xl mx-auto px-8 py-12 md:py-16 rounded-3xl border border-white/40 bg-white/92 backdrop-blur-xl shadow-[0_20px_50px_rgba(15,23,42,0.3)] text-center flex flex-col items-center space-y-6"
      >
        {/* Header Block */}
        <div className="flex items-center space-x-2 bg-slate-900/10 border border-slate-900/20 px-3.5 py-1.5 rounded-full text-slate-900 text-xs font-mono font-bold tracking-widest uppercase">
          <Mail className="w-3.5 h-3.5 text-slate-900" />
          <span>INTEL BROADCAST</span>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-[800] tracking-[-0.03em] text-slate-900 leading-tight">
          Subscribe to summit updates
        </h2>
        
        <p className="text-xs md:text-sm text-slate-600 max-w-md leading-relaxed font-semibold">
          Receive priority speaker releases, regulatory whitepapers, and discount windows delivered directly to your inbox.
        </p>

        {/* Subscription Terminal Input Form */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col sm:flex-row gap-3 pt-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ENTER BUSINESS EMAIL"
            required
            className="flex-grow px-5 py-4 rounded-xl border border-slate-300/80 bg-slate-50 text-slate-900 placeholder-slate-400 text-xs font-mono tracking-widest focus:outline-none focus:border-slate-800 transition-all text-center sm:text-left"
          />
          <button
            type="submit"
            className="px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-mono font-bold tracking-widest flex items-center justify-center space-x-2 transition-all hover:shadow-[0_0_25px_rgba(15,23,42,0.25)] cursor-pointer"
          >
            <span>SUBSCRIBE</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>

        <span className="text-[10px] text-slate-500 font-bold select-none">
          By subscribing, you agree to our privacy policy and data governance rules.
        </span>
      </motion.div>
    </section>
  );
}

