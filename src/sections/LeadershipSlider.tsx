"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

interface SliderCard {
  title: string;
  img: string;
  scene: string;
  tagline: string;
  desc: string;
  objectPos?: string;
}

export default function LeadershipSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const cards: SliderCard[] = [
    {
      title: "Exclusive ecosystem events",
      img: "/images/exclusive_ecosystem_events_clean.jpg",
      scene: "01",
      tagline: "PILLAR 01",
      desc: "Invite-only sessions and workshops designed for decision-makers driving change across FinTech."
    },
    {
      title: "Conference programme",
      img: "/images/dfs_conference_programme_clean.jpg",
      scene: "02",
      tagline: "PILLAR 02",
      desc: "Dive into powerful keynotes and sharp panel debates that tackle the real issues shaping global finance."
    },
    {
      title: "The innovation arena",
      img: "/images/innovation_arena_clean.jpg",
      scene: "03",
      tagline: "PILLAR 03",
      desc: "Explore breakthrough technologies and meet the companies redefining financial services."
    },
    {
      title: "Strategic networking",
      img: "/images/dfs_strategic_networking_custom_clean.jpg",
      scene: "04",
      tagline: "PILLAR 04",
      desc: "Connect with industry leaders, investors, and innovators ready to turn ideas into action."
    },
    {
      title: "FinTech launchpad",
      img: "/images/dfs_fintech_launchpad_custom_clean.jpg",
      scene: "05",
      tagline: "PILLAR 05",
      desc: "A platform for announcements, innovations, collaboration, and key connections."
    },
    {
      title: "DFS dialogues",
      img: "/images/dfs_dialogues_clean.jpg",
      scene: "06",
      tagline: "PILLAR 06",
      desc: "Closed-door discussions among policymakers and C-suite leaders providing regulatory and market insights."
    },
    {
      title: "MOUs and partnerships",
      img: "/images/mous_partnerships_clean.jpg",
      scene: "07",
      tagline: "PILLAR 07",
      desc: "Build high-impact alliances with the people and companies transforming the FinTech landscape.",
      objectPos: "object-top"
    },
    {
      title: "FinTech World Cup grand finale",
      img: "/images/fintech_world_cup_grand_finale_clean.jpg",
      scene: "08",
      tagline: "PILLAR 08",
      desc: "Watch top start-ups battle it out live for global recognition, rewards, and investment."
    },
  ];

  const isMouseDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isMouseDownRef.current = true;
    startXRef.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftRef.current = scrollRef.current.scrollLeft;
    // Disable snap & smooth behavior during active mouse drag for fluid motion
    scrollRef.current.style.scrollSnapType = "none";
    scrollRef.current.style.scrollBehavior = "auto";
  };

  const handleMouseLeave = () => {
    if (!isMouseDownRef.current || !scrollRef.current) return;
    isMouseDownRef.current = false;
    scrollRef.current.style.scrollSnapType = "x mandatory";
    scrollRef.current.style.scrollBehavior = "smooth";
  };

  const handleMouseUp = () => {
    if (!isMouseDownRef.current || !scrollRef.current) return;
    isMouseDownRef.current = false;
    scrollRef.current.style.scrollSnapType = "x mandatory";
    scrollRef.current.style.scrollBehavior = "smooth";
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDownRef.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.6; // Smooth 1:1.6 drag velocity multiplier
    scrollRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="leadership" className="relative py-28 md:py-36 overflow-hidden bg-[#02090f] border-t border-white/5">
      
      {/* Explicit style overrides to defeat global theme CSS color rules */}
      <style dangerouslySetInnerHTML={{__html: `
        #leadership h2 {
          color: #ffffff !important;
        }
        #leadership h2 span {
          color: #12E9E9 !important;
        }
        #leadership .card-title {
          color: #ffffff !important;
        }
        #leadership .group:hover .card-title {
          color: #12E9E9 !important;
        }
        #leadership .card-desc {
          color: rgba(255, 255, 255, 0.95) !important;
          font-weight: 400 !important;
        }
      `}} />

      {/* Background ambient cinematic spotlight glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[300px] bg-[#12E9E9]/5 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[250px] bg-[#12E9E9]/3 rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full space-y-16">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4 max-w-2xl text-left">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-[2px] bg-[#12E9E9] shrink-0" />
              <span className="text-xs font-mono font-bold tracking-widest text-[#12E9E9] uppercase">
                SUMMIT HIGHLIGHTS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[46px] font-black leading-[1.1] tracking-tight text-white">
              Global leadership. Strategic dialogue. <span className="text-[#12E9E9]">High-impact innovation.</span>
            </h2>
          </div>

          <div className="flex items-center space-x-4 shrink-0 pb-1">
            {/* Draggable scroll assistance arrows */}
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full bg-[#12E9E9] text-[#02090f] hover:bg-white hover:scale-105 transition-all duration-300 cursor-pointer flex items-center justify-center shadow-lg shadow-[#12E9E9]/20"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5 stroke-[2.5] text-[#02090f] stroke-[#02090f]" />
            </button>
            
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full bg-[#12E9E9] text-[#02090f] hover:bg-white hover:scale-105 transition-all duration-300 cursor-pointer flex items-center justify-center shadow-lg shadow-[#12E9E9]/20"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5 stroke-[2.5] text-[#02090f] stroke-[#02090f]" />
            </button>

            {/* Buy a pass CTA */}
            <a
              href="#tickets"
              className="btn-unified"
            >
              <span>Buy a pass</span>
              <ArrowUpRight className="w-4 h-4 text-[#082028] stroke-[#082028] stroke-[2.5]" />
            </a>
          </div>
        </div>

        {/* Horizontal Widescreen Slider Track with Mouse Drag & Touch Support */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex space-x-8 overflow-x-auto scrollbar-none pb-8 snap-x snap-mandatory w-full z-10 cursor-grab active:cursor-grabbing select-none"
          style={{ scrollbarWidth: "none" }}
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="group min-w-[280px] sm:min-w-[340px] md:min-w-[480px] max-w-[480px] rounded-3xl border border-white/10 bg-[#061f2e]/90 flex flex-col snap-start transition-all hover:border-[#12E9E9]/40 select-none text-left overflow-hidden h-[480px] sm:h-[520px] md:h-[560px] cursor-grab active:cursor-grabbing shadow-2xl relative shrink-0"
            >
              {/* Top border anamorphic lens flare glow effect */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#12E9E9]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" />

              {/* Card Photo Backdrop with smooth zoom */}
              <Image
                src={card.img}
                alt={card.title}
                fill
                className={`object-cover ${card.objectPos || 'object-center'} transition-transform duration-700 ease-out group-hover:scale-[1.06]`}
                sizes="(max-width: 768px) 90vw, 480px"
              />

              {/* Cinematic Vignette Shadow and Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-90" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.55)_100%)] z-10 pointer-events-none" />

              {/* Slide Scene counter in corner */}
              <div className="absolute top-6 right-6 z-20 font-mono text-[9px] font-bold text-white/30 tracking-widest group-hover:text-[#12E9E9]/60 transition-colors">
                SCENE // {card.scene}
              </div>

              {/* Bottom Details (Title, tag, expanding accent line) */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-left space-y-1">
                <span className="block text-[10px] md:text-xs font-mono font-bold tracking-[0.25em] text-[#12E9E9] uppercase">
                  {card.tagline}
                </span>
                
                <span className="block text-xl md:text-3xl font-black tracking-tight text-white leading-tight group-hover:text-[#12E9E9] transition-colors duration-300 card-title" style={{ color: "#ffffff" }}>
                  {card.title}
                </span>

                {/* Smooth Slide-down Hover Description text */}
                <p 
                  className="text-[15px] md:text-[17px] font-normal leading-relaxed max-h-0 opacity-0 group-hover:max-h-[120px] group-hover:opacity-100 transition-all duration-500 ease-out overflow-hidden mt-1.5 card-desc"
                  style={{ color: "rgba(255, 255, 255, 0.95)" }}
                >
                  {card.desc}
                </p>
                
                {/* Horizontal turquoise bar underline that expands on hover */}
                <div className="w-8 group-hover:w-16 h-[2px] bg-[#12E9E9] mt-3 rounded-full transition-all duration-500 ease-out" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
