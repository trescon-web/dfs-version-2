"use client";
import React, { useRef, useState, useEffect } from "react";
import { getAssetPath } from "@/utils/assetPath";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

export default function VideoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  // Track the scroll progress through the entire section (from entering viewport to leaving viewport)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Apple-style scroll animation:
  // Starts small (65% width, 36px rounded corners), expands to 100% full screen width when centered,
  // and shrinks back to small (65% width, 36px rounded corners) when scrolling up or down past the section!
  const width = useTransform(scrollYProgress, [0, 0.5, 1], ["65%", "100%", "65%"]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.5, 1], ["36px", "0px", "36px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0.65, 0.95, 1, 0.95, 0.65]);

  // Auto-play / pause on in-view
  const isInView = useInView(containerRef, { amount: 0.2 });

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isMuted) {
        videoRef.current.muted = false;
        setIsMuted(false);
      }
      if (videoRef.current.paused) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <section 
      ref={containerRef} 
      className="w-full bg-[#02090f] py-16 lg:py-24 relative z-20 overflow-hidden"
    >
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#12e8e8]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Header Block */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 text-center mb-10 md:mb-14">
        <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#12e9e9] uppercase block mb-3">
          EXPERIENCE THE SUMMIT
        </span>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-[900] tracking-tight text-[#ffffff] leading-tight">
          Watch the Highlights
        </h2>
      </div>

      {/* Scroll Expanding Full Screen Video Frame */}
      <div className="w-full flex justify-center items-center relative z-10 px-0">
        <motion.div
          style={{
            width,
            borderRadius,
            opacity
          }}
          className="relative overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.85)] border-y border-white/10 bg-[#06131f] group transition-all duration-500 hover:border-[#12e9e9]/30"
        >
          <video
            ref={videoRef}
            onClick={togglePlay}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-auto object-cover block cursor-pointer"
          >
            <source src={getAssetPath("/videos/dfs-highlights-2025.mp4")} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Premium Audio Toggle Button */}
          <button 
            onClick={toggleMute}
            className="absolute bottom-6 right-6 md:bottom-8 md:right-8 bg-black/60 hover:bg-black/90 backdrop-blur-xl border border-white/20 text-white rounded-full p-3.5 md:p-4 transition-all duration-300 flex items-center justify-center shadow-2xl cursor-pointer z-30 hover:scale-110 active:scale-95 group/btn"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 md:w-6 md:h-6 text-white group-hover/btn:text-[#12e9e9] transition-colors" />
            ) : (
              <Volume2 className="w-5 h-5 md:w-6 md:h-6 text-[#12e9e9]" />
            )}
          </button>
        </motion.div>
      </div>

    </section>
  );
}
