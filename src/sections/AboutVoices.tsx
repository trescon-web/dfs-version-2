"use client";
import { getAssetPath } from "@/utils/assetPath";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ChevronLeft, ChevronRight, X } from "lucide-react";

export default function AboutVoices() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  const voices = [
    {
      name: "Abdullah Alghadouni",
      role: "COO & Co-Founder at",
      company: "UPFRONT",
      image: getAssetPath("/images/speaker_he_essa_kazim.png"),
      video: ""
    },
    {
      name: "Amith Rajan",
      role: "Head of Wholesale Digital Banking",
      company: "Mashreq",
      image: getAssetPath("/images/speaker_david_nobg.png"),
      video: ""
    },
    {
      name: "Andrew Reakes",
      role: "Director Financial Services Industry",
      company: "Presight",
      image: getAssetPath("/images/speaker_marcus_nobg.png"),
      video: ""
    },
    {
      name: "Joseph Ziolkowski",
      role: "CEO and Founder",
      company: "Relm Insurance, Ltd.",
      image: getAssetPath("/images/speaker_noel_quinn_julius_baer.png"),
      video: ""
    },
    {
      name: "Karim Chouman",
      role: "Founder and CEO",
      company: "MYNE",
      image: getAssetPath("/images/speaker_hosam_arab_tabby.png"),
      video: ""
    },
    {
      name: "Khaled Boudemagh",
      role: "Senior Manager, Strategic Partnerships MENA",
      company: "Checkout.com",
      image: getAssetPath("/images/speaker_alex_manson_sc_ventures.png"),
      video: ""
    },
    {
      name: "Mahmoud Bouchelif",
      role: "Founder & Managing Director",
      company: "LeanTech SG",
      image: getAssetPath("/images/speaker_bjorn_sibbern_swiss_exchange.png"),
      video: ""
    },
    {
      name: "Mahmoud Abuebeid",
      role: "CEO & Co-Founder",
      company: "GSS Group",
      image: getAssetPath("/images/speaker_elena_nobg.png"),
      video: ""
    },
    {
      name: "Mayank Gautam",
      role: "Director Global Trade",
      company: "Nasscom",
      image: getAssetPath("/images/speaker_sarah_nobg.png"),
      video: ""
    },
    {
      name: "Nadeem K Qureshi",
      role: "Sales Director",
      company: "Integra Technologies",
      image: getAssetPath("/images/speaker_adena_nobg.png"),
      video: ""
    },
    {
      name: "Pratik Shah",
      role: "Co-Founder & CTO",
      company: "Emtribe",
      image: getAssetPath("/images/speaker_david.png"),
      video: ""
    }
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -310, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 310, behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-20 bg-white border-t border-slate-100 overflow-hidden select-none">
      
      {/* Local style overrides to defeat global styles on text colors */}
      <style dangerouslySetInnerHTML={{__html: `
        .voices-title {
          color: #0f172a !important;
        }
        .voice-card-title {
          color: #ffffff !important;
        }
        .voice-card-role {
          color: rgba(255, 255, 255, 0.75) !important;
        }
        .voice-card-comp {
          color: #12e8e8 !important;
        }
        /* Hide scrollbars globally for this section */
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full space-y-12">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#0b766e] uppercase block">
              ATTENDEE STATEMENTS
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight voices-title">
              Voices behind the impact
            </h2>
          </div>

          {/* Slider controls */}
          <div className="flex items-center space-x-3 shrink-0">
            <button
              onClick={scrollLeft}
              className="p-3 bg-slate-50 border border-slate-200 text-slate-700 hover:border-[#0b766e]/30 hover:bg-[#0b766e]/5 hover:text-[#0b766e] rounded-full transition-all duration-300 cursor-pointer active:scale-90"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="p-3 bg-slate-50 border border-slate-200 text-slate-700 hover:border-[#0b766e]/30 hover:bg-[#0b766e]/5 hover:text-[#0b766e] rounded-full transition-all duration-300 cursor-pointer active:scale-90"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Slider Track */}
        <div className="relative w-full">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 py-4 scrollbar-none scroll-smooth"
          >
            {voices.map((voice, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
                className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group w-[285px] h-[380px] shrink-0 snap-center border border-slate-100"
              >
                {/* Full-bleed Background Image */}
                <img
                  src={voice.image}
                  alt={voice.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/15 transition-colors duration-300 pointer-events-none" />

                {/* Play Button Overlay (Top-Right) */}
                <button 
                  onClick={() => setActiveVideoUrl(voice.video)}
                  className="absolute top-5 right-5 w-11 h-11 bg-[#12e8e8] hover:bg-white text-slate-950 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 shadow-lg cursor-pointer z-20 active:scale-90"
                >
                  <Play className="w-4 h-4 fill-current text-slate-950 ml-0.5" />
                </button>

                {/* Meta details (Bottom Overlay) */}
                <div className="absolute bottom-0 inset-x-0 p-6 z-10 text-left bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent pt-24 pointer-events-none">
                  <h4 className="text-lg font-bold leading-tight voice-card-title">
                    {voice.name}
                  </h4>
                  <div className="text-[11px] leading-relaxed font-semibold voice-card-role mt-1.5 flex flex-wrap gap-1 items-center">
                    <span>{voice.role}</span>
                    <span className="voice-card-comp font-black">{voice.company}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Video Lightbox Modal */}
      <AnimatePresence>
        {activeVideoUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/90 z-50 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setActiveVideoUrl(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveVideoUrl(null)}
                className="absolute top-4 right-4 p-2 bg-slate-950/50 hover:bg-slate-950/80 text-white rounded-full transition-colors cursor-pointer z-10"
              >
                <X className="w-6 h-6" />
              </button>

              {/* HTML5 Video Player */}
              <div className="aspect-video w-full bg-black">
                <video
                  src={activeVideoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
