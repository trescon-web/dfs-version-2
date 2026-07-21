"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { DFSDiamond } from "@/components/BrandElements";

/**
 * High-performance 3D Financial Topographic Mesh Canvas
 */
function Luxury3DFinanceCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Grid sizes
    const cols = 26;
    const rows = 26;
    const spacing = 45;
    const focalLength = 400;
    
    // Grid nodes
    const points: { x: number; y: number; z: number; ox: number; oz: number }[] = [];
    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        const x = (c - cols / 2) * spacing;
        const z = (r - rows / 2) * spacing;
        points.push({ x, y: 0, z, ox: x, oz: z });
      }
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = (e.clientX - window.innerWidth / 2) * 0.12;
      mouseRef.current.targetY = (e.clientY - window.innerHeight / 2) * 0.12;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    let time = 0;
    const render = () => {
      time += 0.008;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse rotation tracking
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const angleY = mouse.x * 0.003;
      const angleX = mouse.y * 0.003 + 0.45; // default pitch angle

      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      const centerX = width / 2;
      const centerY = height * 0.65; // lower focus line

      // Map 3D points
      const projected = points.map((p) => {
        // Topographic wave math
        const dist = Math.sqrt(p.ox * p.ox + p.oz * p.oz) * 0.008;
        const y = Math.sin(dist - time * 3.5) * Math.cos(p.ox * 0.008 + time) * 32;

        // Y-axis rotation
        let x1 = p.ox * cosY - p.oz * sinY;
        let z1 = p.ox * sinY + p.oz * cosY;

        // X-axis rotation
        let y2 = y * cosX - z1 * sinX;
        let z2 = y * sinX + z1 * cosX;

        // Projection
        const scale = focalLength / (focalLength + z2 + 300);
        const projX = x1 * scale + centerX;
        const projY = y2 * scale + centerY;

        return { x: projX, y: projY, depth: z2, visible: scale > 0 };
      });

      // Draw grid line mesh
      ctx.strokeStyle = "rgba(197, 168, 128, 0.035)";
      ctx.lineWidth = 0.8;
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const idx = c * rows + r;
          const p1 = projected[idx];
          if (!p1 || !p1.visible) continue;

          // Connect horizontal neighbors
          if (c < cols - 1) {
            const p2 = projected[(c + 1) * rows + r];
            if (p2 && p2.visible) {
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
          // Connect vertical neighbors
          if (r < rows - 1) {
            const p2 = projected[idx + 1];
            if (p2 && p2.visible) {
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none select-none z-10 opacity-70" />;
}

export default function Hero() {
  const containerVars = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const lineVars = {
    initial: { y: 60, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1] as any, // easeOutExpo
      },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-36 pb-16 overflow-hidden bg-midnight">
      
      {/* 1. Official Ambient Background Video - 100% Clear Opacity */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-100 select-none z-0"
      >
        <source src="/videos/dfs-hero-video.mp4" type="video/mp4" />
      </video>

      {/* 3. Official Brand Floating Diamonds (Parallax/UX Depth) */}
      <div className="absolute left-[-5%] top-[35%] w-48 h-48 opacity-10 pointer-events-none hidden lg:block z-10 select-none animate-spin" style={{ animationDuration: "120s" }}>
        <DFSDiamond className="text-electric-turquoise" />
      </div>
      <div className="absolute right-[-5%] top-[25%] w-48 h-48 opacity-10 pointer-events-none hidden lg:block z-10 select-none animate-spin" style={{ animationDuration: "90s" }}>
        <DFSDiamond className="text-electric-turquoise" />
      </div>

      {/* Center content container */}
      <div className="max-w-6xl mx-auto px-6 w-full text-center relative z-20 my-auto flex flex-col items-center">

        <motion.h1
          variants={containerVars}
          initial="initial"
          animate="animate"
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-[-0.04em] leading-[0.85] max-w-6xl flex flex-col items-center select-none"
        >
          <span className="block overflow-hidden py-1">
            <motion.span variants={lineVars} className="block font-sans font-bold shimmer-text hover:scale-[1.02] transition-transform duration-300 cursor-default">
              Connecting
            </motion.span>
          </span>
          <span className="block overflow-hidden py-1">
            <motion.span variants={lineVars} className="block font-sans font-bold shimmer-text hover:scale-[1.02] transition-transform duration-300 cursor-default">
              markets
            </motion.span>
          </span>
          <span className="block overflow-hidden py-1">
            <motion.span variants={lineVars} className="block font-sans font-bold shimmer-text hover:scale-[1.02] transition-transform duration-300 cursor-default">
              transforming
            </motion.span>
          </span>
          <span className="block overflow-hidden py-1">
            <motion.span variants={lineVars} className="block font-sans font-bold shimmer-text hover:scale-[1.02] transition-transform duration-300 cursor-default">
              economies
            </motion.span>
          </span>
        </motion.h1>

        {/* Redesigned Integrated Monospace Metadata Band (Date & Location) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-base md:text-lg font-mono tracking-widest"
        >
          <span className="font-bold flex items-center shrink-0 text-white" style={{ color: "#ffffff" }}>
            <Calendar className="w-5 h-5 mr-2.5 shrink-0 text-white" style={{ color: "#ffffff", stroke: "#ffffff" }} />
            <span style={{ color: "#ffffff" }}>02-03 November 2026</span>
          </span>
          <span className="hidden sm:inline w-[1.5px] h-5 bg-white/40" />
          <span className="font-bold flex items-center shrink-0 text-white" style={{ color: "#ffffff" }}>
            <MapPin className="w-5 h-5 mr-2.5 shrink-0 text-white" style={{ color: "#ffffff", stroke: "#ffffff" }} />
            <span style={{ color: "#ffffff" }}>Madinat Jumeirah, Dubai, UAE</span>
          </span>
        </motion.div>

        {/* Luxury CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-5 pt-8 z-20 relative"
        >
          <button
            onClick={() => {
              const agendaSection = document.querySelector("#agenda");
              if (agendaSection) agendaSection.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-unified"
          >
            Buy a Pass
          </button>
          <button
            onClick={() => alert("Registration enquiry form initialized. Check your chat dashboard.")}
            className="btn-unified-outline"
          >
            Enquire Now
          </button>
        </motion.div>
      </div>

      {/* Footer Organizer Details (Bottom of Hero) */}
      <div className="max-w-7xl mx-auto px-6 w-full relative z-20 mt-8 pb-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 md:gap-12"
        >
          {/* Organised by DIFC */}
          <img 
            src="/images/organized-difc-logo-new.svg" 
            alt="Organised by DIFC" 
            className="h-12 sm:h-14 md:h-16 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-all duration-300" 
          />

          <span className="hidden sm:inline text-white/30 text-2xl font-light">|</span>

          {/* Part of Future Finance Week */}
          <img 
            src="/images/Dffw-New-Logo.svg" 
            alt="Part of Dubai Future Finance Week" 
            className="h-12 sm:h-14 md:h-16 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-all duration-300" 
          />
        </motion.div>
      </div>
      
    </section>
  );
}
