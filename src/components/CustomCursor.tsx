"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (ringRef.current && glowRef.current) {
        const { clientX, clientY } = e;
        
        // Immediate updates using direct style manipulations (low-latency)
        ringRef.current.style.transform = `translate3d(${clientX - 10}px, ${clientY - 10}px, 0)`;
        glowRef.current.style.transform = `translate3d(${clientX - 100}px, ${clientY - 100}px, 0)`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over interactive elements
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".glass-card") ||
        target.closest(".cursor-pointer")
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Outer Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 w-5 h-5 rounded-full border pointer-events-none z-50 transition-all duration-300 ease-out hidden md:block ${
          hovered
            ? "border-emerald-accent bg-emerald-accent/10 scale-150"
            : "border-purple-accent/60 bg-transparent scale-100"
        }`}
        style={{
          transform: "translate3d(-100px, -100px, 0)",
          willChange: "transform",
        }}
      />
      {/* Ambient Spotlight Shadow Glow */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-[200px] h-[200px] rounded-full pointer-events-none z-40 bg-[radial-gradient(circle,rgba(197,168,128,0.1)_0%,transparent_70%)] mix-blend-normal hidden md:block"
        style={{
          transform: "translate3d(-100px, -100px, 0)",
          willChange: "transform",
        }}
      />
    </>
  );
}
