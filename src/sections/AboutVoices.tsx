"use client";
import { getAssetPath } from "@/utils/assetPath";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ChevronLeft, ChevronRight, X } from "lucide-react";

export default function AboutVoices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const voices = [
    {
      name: "Abdullah Alghadouni",
      role: "COO & Co-Founder at",
      company: "UPFRONT",
      image: getAssetPath("/images/speaker_he_essa_kazim.png"),
      video: "https://dubaifintechsummit.com/wp-content/uploads/2026/02/Abdullah-1.mp4"
    },
    {
      name: "Amith Rajan",
      role: "Head of Wholesale Digital Banking",
      company: "Mashreq",
      image: getAssetPath("/images/speaker_david.png"),
      video: "https://dubaifintechsummit.com/wp-content/uploads/2026/02/Amith-Rajan.mp4"
    },
    {
      name: "Andrew Reakes",
      role: "Director Financial Services Industry",
      company: "Presight",
      image: getAssetPath("/images/speaker_marcus.png"),
      video: "https://dubaifintechsummit.com/wp-content/uploads/2026/02/Andrew-Reakes.mp4"
    },
    {
      name: "Joseph Ziolkowski",
      role: "CEO and Founder",
      company: "Relm Insurance, Ltd.",
      image: getAssetPath("/images/speaker_noel_quinn_julius_baer.png"),
      video: "https://dubaifintechsummit.com/wp-content/uploads/2026/02/Joseph.mp4"
    },
    {
      name: "Karim Chouman",
      role: "Founder and CEO",
      company: "MYNE",
      image: getAssetPath("/images/speaker_hosam_arab_tabby.png"),
      video: "https://dubaifintechsummit.com/wp-content/uploads/2026/02/Karim-Chouman.mp4"
    },
    {
      name: "Khaled Boudemagh",
      role: "Senior Manager, Strategic Partnerships MENA",
      company: "Checkout.com",
      image: getAssetPath("/images/speaker_alex_manson_sc_ventures.png"),
      video: "https://dubaifintechsummit.com/wp-content/uploads/2026/02/Khalid.mp4"
    },
    {
      name: "Mahmoud Bouchelif",
      role: "Founder & Managing Director",
      company: "LeanTech SG",
      image: getAssetPath("/images/speaker_bjorn_sibbern_swiss_exchange.png"),
      video: "https://dubaifintechsummit.com/wp-content/uploads/2026/02/Mahmoud-1.mp4"
    },
    {
      name: "Mahmoud Abuebeid",
      role: "CEO & Co-Founder",
      company: "GSS Group",
      image: getAssetPath("/images/speaker_elena.png"),
      video: "https://dubaifintechsummit.com/wp-content/uploads/2026/02/Mahmoud-Abuebeid.mp4"
    },
    {
      name: "Mayank Gautam",
      role: "Director Global Trade",
      company: "Nasscom",
      image: getAssetPath("/images/speaker_sarah.png"),
      video: "https://dubaifintechsummit.com/wp-content/uploads/2026/02/Mayank.mp4"
    },
    {
      name: "Nadeem K Qureshi",
      role: "Sales Director",
      company: "Integra Technologies",
      image: getAssetPath("/images/speaker_fadi_ghandour_wamda.jpg"),
      video: "https://dubaifintechsummit.com/wp-content/uploads/2026/02/Nadeem-K.-Qureshi.mp4"
    },
    {
      name: "Pratik Shah",
      role: "Co-Founder & CTO",
      company: "Emtribe",
      image: getAssetPath("/images/speaker_david.png"),
      video: "https://dubaifintechsummit.com/wp-content/uploads/2026/02/Pratik.mp4"
    },
    {
      name: "William Bao Bean",
      role: "Managing Director",
      company: "Orbit Startups",
      image: getAssetPath("/images/speaker_marcus.png"),
      video: "https://dubaifintechsummit.com/wp-content/uploads/2026/02/William.mp4"
    },
    {
      name: "Yehia Hamdy",
      role: "Head of Marketing",
      company: "FinTech Saudi",
      image: getAssetPath("/images/speaker_elena.png"),
      video: "https://dubaifintechsummit.com/wp-content/uploads/2026/02/Yehia.mp4"
    }
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-24 bg-[#f8fafc] border-t border-slate-200 overflow-hidden select-none">
      
      {/* Local style overrides for text colors */}
      <style dangerouslySetInnerHTML={{__html: `
        .voices-title {
          color: #0f172a !important;
        }
        .voice-card-title {
          color: #ffffff !important;
        }
        .voice-card-role {
          color: rgba(255, 255, 255, 0.85) !important;
        }
        .voice-card-comp {
          color: #12e9e9 !important;
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

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full space-y-14">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#0d9488] uppercase block">
              ATTENDEE STATEMENTS
            </span>
            <h2 className="text-4xl md:text-5xl font-[800] tracking-tight leading-tight voices-title">
              Voices behind the impact
            </h2>
          </div>

          {/* Slider controls */}
          <div className="flex items-center space-x-3 shrink-0">
            <button
              onClick={scrollLeft}
              className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 text-slate-700 hover:border-[#0d9488]/30 hover:bg-[#0d9488]/5 hover:text-[#0d9488] rounded-full transition-all duration-300 cursor-pointer active:scale-90 shadow-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 mr-0.5" />
            </button>
            <button
              onClick={scrollRight}
              className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 text-slate-700 hover:border-[#0d9488]/30 hover:bg-[#0d9488]/5 hover:text-[#0d9488] rounded-full transition-all duration-300 cursor-pointer active:scale-90 shadow-sm"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 ml-0.5" />
            </button>
          </div>
        </div>

        {/* Horizontal Slider Track */}
        <div className="relative w-full -mx-6 px-6 sm:mx-0 sm:px-0">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 scrollbar-none scroll-smooth"
          >
            {voices.map((voice, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                onClick={() => setActiveVideoUrl(voice.video)}
                className="relative rounded-[32px] overflow-hidden bg-[#04111d] shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(18,233,233,0.2)] transition-all duration-500 group w-[280px] h-[440px] shrink-0 snap-center border border-white/10 hover:border-[#12e9e9]/50 cursor-pointer"
              >
                {/* Official Dubai FinTech Summit Branding Element Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#081f33] via-[#04111d] to-[#02090f] overflow-hidden">
                  {/* Geometric Diamond Vector Lines */}
                  <svg className="absolute -right-8 -top-8 w-56 h-56 text-[#12e9e9]/20 pointer-events-none group-hover:scale-110 transition-transform duration-700" viewBox="0 0 200 200" fill="none">
                    <path d="M100 0 L200 100 L100 200 L0 100 Z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M100 20 L180 100 L100 180 L20 100 Z" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                    <circle cx="100" cy="100" r="45" stroke="currentColor" strokeWidth="1" />
                  </svg>
                  {/* Neon Cyan Radial Backdrop Glow */}
                  <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-44 h-44 bg-[#12e9e9]/15 rounded-full blur-2xl pointer-events-none group-hover:bg-[#12e9e9]/25 transition-colors duration-500" />
                </div>

                {/* Speaker Cutout Portrait with DFS Brand Element */}
                <div className="absolute inset-0 overflow-hidden rounded-[32px] z-10">
                  <img
                    src={voice.image}
                    alt={voice.name}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Rich Gradient Overlay for Text Visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#02090f] via-[#02090f]/30 to-transparent pointer-events-none z-15 opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Sleek Cyan Play Button Badge (Top-Right) */}
                <div className="absolute top-5 right-5 w-11 h-11 bg-[#12e9e9] group-hover:bg-white text-slate-950 flex items-center justify-center rounded-full transition-all duration-300 shadow-[0_4px_16px_rgba(18,233,233,0.4)] group-hover:scale-110 z-20 active:scale-95">
                  <Play className="w-4 h-4 fill-current text-slate-950 ml-0.5" />
                </div>

                {/* Meta details (Bottom Overlay) */}
                <div className="absolute bottom-0 inset-x-0 p-7 z-20 text-left pointer-events-none transform group-hover:-translate-y-1 transition-transform duration-500 ease-out">
                  <h4 className="text-xl font-bold leading-tight voice-card-title mb-1.5">
                    {voice.name}
                  </h4>
                  <div className="text-xs leading-relaxed font-semibold voice-card-role flex flex-col gap-0.5">
                    <span>{voice.role}</span>
                    <span className="voice-card-comp font-black tracking-wide">{voice.company}</span>
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
            className="fixed inset-0 bg-slate-900/90 z-[100] flex items-center justify-center p-4 backdrop-blur-xl"
            onClick={() => setActiveVideoUrl(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              className="relative w-full max-w-5xl bg-black rounded-[32px] overflow-hidden border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveVideoUrl(null)}
                className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-[#12e9e9] hover:text-slate-950 text-white rounded-full transition-colors cursor-pointer z-10 backdrop-blur-md"
              >
                <X className="w-5 h-5" />
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

