"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, ArrowLeft, ArrowRight } from "lucide-react";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const testimonials = [
    {
      quote: "The Dubai FinTech Summit has established itself as the premier convening platform for digital assets policy makers and financial executives globally. The caliber of delegates is completely unmatched.",
      author: "Catherine Miller",
      role: "Chief Compliance Officer",
      org: "Sovereign Settlement Clearing",
    },
    {
      quote: "An extraordinary assembly of VCs and founders. We initialized three major co-investment syndications within the first day inside the investor match deal rooms.",
      author: "Li Kang",
      role: "General Partner",
      org: "Matrix Tech Ventures",
    },
    {
      quote: "Dubai continues to lead in setting cognitive finance guidelines. Presenting our algorithmic AI credit rails on the main stage to central bankers was a milestone.",
      author: "Dr. Amara Al-Husseini",
      role: "Founder & CEO",
      org: "Neural Finance Labs",
    },
  ];

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden bg-midnight border-t border-white/5 text-left">
      
      {/* Volumetric background lights */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-electric-turquoise/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-denim-grey/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-start space-y-12">
        
        {/* Header Block */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 bg-electric-turquoise/10 border border-electric-turquoise/20 px-3.5 py-1.5 rounded-full self-start w-fit text-electric-turquoise text-xs font-mono font-bold tracking-widest uppercase">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>EXECUTIVE FEEDBACK</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-[-0.03em] text-gradient-white">
            Industry endorsement
          </h2>
        </div>

        {/* Carousel Card Panel */}
        <div className="relative w-full h-[280px] md:h-[240px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 p-8 md:p-10 rounded-2xl border border-white/10 bg-[#12343f]/25 flex flex-col justify-between select-none"
            >
              <p className="text-base md:text-lg text-white/80 leading-relaxed font-medium italic">
                “{testimonials[index].quote}”
              </p>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="text-left">
                  <span className="block text-sm font-bold text-white leading-none">
                    {testimonials[index].author}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-denim-grey font-bold uppercase mt-1 block">
                    {testimonials[index].role} // {testimonials[index].org}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider Controllers */}
        <div className="flex space-x-4 select-none self-end pt-4">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-graphite/40 border border-white/5 hover:border-white/20 text-white transition-colors cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-graphite/40 border border-white/5 hover:border-white/20 text-white transition-colors cursor-pointer"
            aria-label="Next testimonial"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
