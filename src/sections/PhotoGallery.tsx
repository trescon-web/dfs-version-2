"use client";

import { useState } from "react";
import { X, Play, Image, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryItem {
  id: string;
  type: "image" | "video";
  url: string;
  caption: string;
  size: "large" | "medium" | "tall";
}

export default function PhotoGallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const items: GalleryItem[] = [
    {
      id: "g1",
      type: "image",
      url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=700&fit=crop",
      caption: "Dubai Madinat Jumeirah Summit Canopy at Night",
      size: "large"
    },
    {
      id: "g2",
      type: "video",
      url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=500&fit=crop",
      caption: "DFS 2026 Executive Opening Panel Keynote",
      size: "medium"
    },
    {
      id: "g3",
      type: "image",
      url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=500&fit=crop",
      caption: "Bilateral Trade Corridor Roundtable Sessions",
      size: "tall"
    },
    {
      id: "g4",
      type: "image",
      url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=500&fit=crop",
      caption: "AI Sandbox Interactive Demonstration Pods",
      size: "medium"
    },
    {
      id: "g5",
      type: "image",
      url: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=500&fit=crop",
      caption: "Global VC & Startup Pitch Exhibition Hall",
      size: "large"
    },
    {
      id: "g6",
      type: "video",
      url: "https://images.unsplash.com/photo-1582653291997-079a1dfd7a61?q=80&w=500&fit=crop",
      caption: "Dubai Future District Fund Announcement Briefing",
      size: "medium"
    }
  ];

  return (
    <section className="relative py-28 bg-midnight border-t border-border-dark overflow-hidden">
      <div className="absolute top-[20%] right-0 w-[500px] h-[500px] ambient-glow glow-blue" style={{ opacity: 0.05 }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Headings */}
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-purple-accent font-semibold">
            11 // Summit Highlights
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gradient-white mt-4">
            Visual Highlights & Media Gallery
          </h2>
          <p className="text-sm md:text-base text-foreground/60 mt-4 leading-relaxed">
            Relive key moments, keynote announcements, bilateral discussions, and innovation launches through our curated visual editorial feed.
          </p>
        </div>

        {/* Masonry Layout grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="break-inside-avoid relative group rounded-2xl overflow-hidden border border-border-dark cursor-pointer bg-slate-dark shadow-xl"
            >
              {/* Image Container with Zoom hover */}
              <div className="relative overflow-hidden w-full h-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.url}
                  alt={item.caption}
                  className="w-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Shadow Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-85 group-hover:opacity-60 transition-opacity" />

                {/* Media Indicator Icons */}
                <div className="absolute top-4 left-4 p-2 bg-midnight/80 backdrop-blur border border-white/10 rounded-lg text-white">
                  {item.type === "video" ? <Play className="w-3.5 h-3.5 fill-white text-white" /> : <Image className="w-3.5 h-3.5" />}
                </div>

                <div className="absolute top-4 right-4 p-2 bg-midnight/80 backdrop-blur border border-white/10 rounded-lg text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Bottom text description */}
              <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col justify-end">
                <p className="text-xs font-bold text-white tracking-tight leading-snug line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedItem && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedItem(null)}
                className="fixed inset-0 bg-midnight/95 z-50 cursor-pointer flex items-center justify-center"
              />

              {/* Media viewer */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-6 md:inset-20 z-50 flex flex-col items-center justify-center pointer-events-none"
              >
                <div className="relative w-full max-w-4xl aspect-video bg-slate-dark border border-border-dark rounded-2xl overflow-hidden pointer-events-auto shadow-2xl">
                  {/* Close trigger */}
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="absolute top-6 right-6 p-2 rounded-lg bg-midnight/80 backdrop-blur border border-border-dark text-foreground/60 hover:text-white transition-colors z-10"
                    aria-label="Close lightbox"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  {/* Render content */}
                  {selectedItem.type === "video" ? (
                    <div className="w-full h-full flex flex-col items-center justify-center relative bg-black/60">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={selectedItem.url}
                        alt={selectedItem.caption}
                        className="absolute inset-0 w-full h-full object-cover opacity-35"
                      />
                      <div className="relative z-10 flex flex-col items-center space-y-4 text-center px-6">
                        <div className="w-16 h-16 rounded-full bg-purple-accent border border-purple-accent/40 flex items-center justify-center text-white cursor-pointer hover:scale-105 transition-transform shadow-lg shadow-purple-glow">
                          <Play className="w-6 h-6 fill-white text-white translate-x-0.5" />
                        </div>
                        <h4 className="text-sm font-bold text-white tracking-tight">Streaming Live Highlights Feed...</h4>
                      </div>
                    </div>
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={selectedItem.url}
                      alt={selectedItem.caption}
                      className="w-full h-full object-cover"
                    />
                  )}

                  {/* Bottom description bar */}
                  <div className="absolute bottom-0 left-0 right-0 bg-midnight/90 border-t border-border-dark p-6">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-purple-accent font-bold">
                      {selectedItem.type === "video" ? "Video Highlights" : "Photo Highlights"} // DFS Media
                    </span>
                    <p className="text-sm font-bold text-white tracking-tight mt-1 leading-snug">
                      {selectedItem.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
