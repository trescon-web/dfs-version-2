"use client";
import { motion } from "framer-motion";

export default function DFFWMilestones() {
  const stats = [
    { value: "40,000", suffix: "+", label: "Global attendees" },
    { value: "1,000", suffix: "+", label: "International speakers" },
    { value: "1,000", suffix: "+", label: "Sponsors and exhibitors" },
    { value: "10", suffix: "+", label: "Global events" },
    { value: "120", suffix: "", label: "Countries represented" }
  ];

  return (
    <section className="relative py-16 bg-[#f4f6f8] border-t border-b border-slate-200/50 flex items-center justify-center overflow-hidden">
      
      {/* Decorative Cyan Triangle Accent in Bottom-Left */}
      <div 
        className="absolute bottom-0 left-0 w-12 h-12 bg-[#12e8e8] pointer-events-none select-none"
        style={{ clipPath: "polygon(0 100%, 100% 100%, 0 0)" }}
      />

      <style dangerouslySetInnerHTML={{__html: `
        .dffw-ms-val {
          color: #0f172a !important;
        }
        .dffw-ms-lbl {
          color: #475569 !important;
        }
      `}} />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="space-y-2 select-none"
            >
              <div className="text-4xl md:text-5xl font-black tracking-tight flex items-center justify-center">
                <span className="dffw-ms-val">{stat.value}</span>
                {stat.suffix && (
                  <span className="text-[#12e8e8] ml-0.5">{stat.suffix}</span>
                )}
              </div>
              <p className="text-xs md:text-sm font-bold uppercase tracking-wider leading-relaxed dffw-ms-lbl">
                {stat.label.split(" ").map((word, i) => (
                  <span key={i} className="block">
                    {word}
                  </span>
                ))}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
