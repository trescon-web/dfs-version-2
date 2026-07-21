"use client";

import { motion } from "framer-motion";

export default function AboutRepresentation() {
  return (
    <section 
      className="relative py-28 bg-[#022129] bg-cover bg-center no-repeat flex items-center justify-center border-t border-white/5"
      style={{
        backgroundImage: "url('https://dubaifintechsummit.com/wp-content/uploads/2026/01/Global-representation-Bg-Img.svg')",
      }}
    >
      {/* Soft gradient overlay to blend map silhouette */}
      <div className="absolute inset-0 bg-slate-950/20 z-0 pointer-events-none" />

      {/* Local CSS overrides to enforce white text contrast */}
      <style dangerouslySetInnerHTML={{__html: `
        .glob-title {
          color: #ffffff !important;
        }
        .glob-desc {
          color: rgba(255, 255, 255, 0.85) !important;
        }
      `}} />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 w-full flex flex-col items-center space-y-6">
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-black tracking-tight leading-tight glob-title"
        >
          Global representation
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-sm md:text-lg font-medium leading-relaxed max-w-2xl glob-desc"
        >
          An international community of finance leaders meets in Dubai, representing diverse markets and institutions shaping what comes next.
        </motion.p>
      </div>

    </section>
  );
}
