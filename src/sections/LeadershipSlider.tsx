"use client";
import { getAssetPath } from "@/utils/assetPath";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

export default function LeadershipSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const cards = [
    {
      title: "Exclusive ecosystem events",
      img: getAssetPath("/images/exclusive_ecosystem_events_clean.jpg"),
      tagline: "PILLAR 01",
      desc: "Invite-only sessions and workshops for decision-makers.",
      link: getAssetPath("/about/")
    },
    {
      title: "Conference programme",
      img: getAssetPath("/images/dfs_conference_programme_clean.jpg"),
      tagline: "PILLAR 02",
      desc: "Keynotes and panels tackling global finance.",
      link: getAssetPath("/speakers/")
    },
    {
      title: "The innovation arena",
      img: getAssetPath("/images/innovation_arena_clean.jpg"),
      tagline: "PILLAR 03",
      desc: "Breakthrough technologies redefining financial services.",
      link: getAssetPath("/exhibitors/")
    },
    {
      title: "Strategic networking",
      img: getAssetPath("/images/dfs_networking_hall.jpg"),
      tagline: "PILLAR 04",
      desc: "Connect with leaders, investors, and innovators.",
      link: getAssetPath("/get-involved/")
    },
    {
      title: "FinTech launchpad",
      img: getAssetPath("/images/stage-innovation.png"),
      tagline: "PILLAR 05",
      desc: "Announcements, innovations, and key connections.",
      link: getAssetPath("/fintech-launchpad/")
    },
    {
      title: "DFS dialogues",
      img: getAssetPath("/images/dfs_dialogues_clean.jpg"),
      tagline: "PILLAR 06",
      desc: "Closed-door discussions with policymakers and C-suite.",
      link: getAssetPath("/roundtables-workshops/")
    },
    {
      title: "MOUs and partnerships",
      img: getAssetPath("/images/mous_partnerships_clean.jpg"),
      tagline: "PILLAR 07",
      desc: "High-impact alliances transforming FinTech.",
      link: getAssetPath("/get-involved/")
    },
    {
      title: "FinTech World Cup grand finale",
      img: getAssetPath("/images/fintech_world_cup_winners.jpg"),
      tagline: "PILLAR 08",
      desc: "Top start-ups battle for global recognition.",
      link: getAssetPath("/fintech-launchpad/")
    },
  ];

  // Auto-advance every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [cards.length]);

  // Scroll active card to center
  useEffect(() => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const card = track.children[activeIndex] as HTMLElement;
    if (!card) return;
    const scrollLeft = card.offsetLeft - (track.clientWidth - card.clientWidth) / 2;
    track.scrollTo({ left: scrollLeft, behavior: "smooth" });
  }, [activeIndex]);

  const goNext = () => setActiveIndex((prev) => (prev + 1) % cards.length);
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);

  return (
    <section id="leadership" className="relative py-20 md:py-28 overflow-hidden bg-[#02090f] border-t border-white/5">

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[300px] bg-[#12E9E9]/5 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4 max-w-2xl text-left">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-[2px] bg-[#12E9E9] shrink-0" />
              <span className="text-xs font-mono font-bold tracking-widest text-[#12E9E9] uppercase">
                SUMMIT HIGHLIGHTS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[46px] font-[800] leading-[1.1] tracking-tight" style={{ color: "#ffffff" }}>
              Global leadership. Strategic dialogue.{" "}
              <span style={{ color: "#12E9E9" }}>High-impact innovation.</span>
            </h2>
          </div>

          <div className="flex items-center space-x-4 shrink-0 pb-1">
            <button
              onClick={goPrev}
              style={{ backgroundColor: "#12E9E9", color: "#02090f" }}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer active:scale-95 shadow-lg shadow-[#12E9E9]/25 hover:bg-white hover:scale-105"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>
            <button
              onClick={goNext}
              style={{ backgroundColor: "#12E9E9", color: "#02090f" }}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer active:scale-95 shadow-lg shadow-[#12E9E9]/25 hover:bg-white hover:scale-105"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
            <a href="#tickets" className="btn-unified">
              <span>Buy a pass</span>
              <ArrowUpRight className="w-4 h-4 text-[#082028] stroke-[#082028] stroke-[2.5]" />
            </a>
          </div>
        </div>
      </div>

      {/* Apple TV+ Carousel Track */}
      <div
        ref={trackRef}
        className="flex gap-5 relative z-10 select-none"
        style={{
          overflowX: "auto",
          scrollbarWidth: "none",
          paddingLeft: "10vw",
          paddingRight: "10vw",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {cards.map((card, idx) => {
          const isActive = idx === activeIndex;
          return (
            <div
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className="relative shrink-0 rounded-[20px] md:rounded-[28px] overflow-hidden cursor-pointer transition-all duration-500 shadow-2xl"
              style={{
                width: "clamp(320px, 60vw, 900px)",
                height: "clamp(220px, 35vw, 520px)",
                scrollSnapAlign: "center",
                transform: isActive ? "scale(1)" : "scale(0.92)",
                opacity: isActive ? 1 : 0.5,
                boxShadow: isActive ? "0 20px 60px rgba(18,233,233,0.2)" : "0 10px 30px rgba(0,0,0,0.5)",
                transition: "transform 0.5s cubic-bezier(0.25,0.1,0.25,1), opacity 0.5s ease, box-shadow 0.5s ease",
              }}
            >
              {/* Background Image */}
              <img
                src={card.img}
                alt={card.title}
                draggable={false}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                }}
              />

              {/* Dark gradient overlay */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
                zIndex: 10
              }} />

              {/* Top-right DFS badge */}
              <div style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                zIndex: 20,
                display: "flex",
                alignItems: "center",
                gap: "6px",
                background: "rgba(0,0,0,0.4)",
                backdropFilter: "blur(12px)",
                padding: "6px 14px",
                borderRadius: "9999px",
                border: "1px solid rgba(255,255,255,0.2)",
              }}>
                <span style={{ color: "#12e9e9", fontSize: "14px" }}>✦</span>
                <span style={{ color: "#fff", fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>DFS 2026</span>
              </div>

              {/* Bottom content */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "28px 32px", zIndex: 20, textAlign: "left" }}>
                <span style={{ display: "block", fontSize: "10px", fontFamily: "monospace", fontWeight: 700, letterSpacing: "0.25em", color: "#12E9E9", textTransform: "uppercase", marginBottom: "4px" }}>
                  {card.tagline}
                </span>

                <h3 style={{
                  fontSize: "clamp(20px, 2vw, 30px)",
                  fontWeight: 900,
                  color: "#ffffff",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.15,
                  marginBottom: "6px",
                }}>
                  {card.title}
                </h3>

                <p style={{
                  fontSize: "15px",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: 1.5,
                  marginBottom: "12px",
                }}>
                  {card.desc}
                </p>

                <div style={{ width: "32px", height: "2px", background: "#12E9E9", borderRadius: "9999px" }} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Dot pagination */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginTop: "40px", position: "relative", zIndex: 10 }}>
        {cards.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            style={{
              height: "8px",
              width: idx === activeIndex ? "32px" : "8px",
              borderRadius: "9999px",
              background: idx === activeIndex ? "#12e9e9" : "rgba(255,255,255,0.3)",
              boxShadow: idx === activeIndex ? "0 0 10px #12e9e9" : "none",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              padding: 0,
            }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
