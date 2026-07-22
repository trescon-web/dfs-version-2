"use client";
import { getAssetPath } from "@/utils/assetPath";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, X } from 'lucide-react';

export default function StickyBottomBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check local storage or state to see if it was dismissed in the current session
    const dismissed = sessionStorage.getItem('dfs_bottom_banner_dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
    }

    const handleScroll = () => {
      // Show banner if scrolled down past 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    sessionStorage.setItem('dfs_bottom_banner_dismissed', 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && !isDismissed && (
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 220 }}
          className="fixed bottom-0 left-0 right-0 w-full bg-[#030d16]/98 backdrop-blur-xl border-t border-white/10 shadow-[0_-10px_45px_rgba(0,0,0,0.6)] z-50 py-2.5 sm:py-3.5 px-3.5 sm:px-6 md:px-8 select-none"
        >
          {/* Top animated moving gradient line */}
          <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#12e8e8] via-[#2563eb] via-[#0f766e] to-[#12e8e8] animate-gradient-move" />
          
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes banner-gradient-shift {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
            .animate-gradient-move {
              background-size: 200% auto;
              animation: banner-gradient-shift 5s linear infinite;
            }
          `}} />

          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4">
            
            {/* Header info / Badge */}
            <div className="flex items-center justify-between w-full sm:w-auto min-w-0">
              <div className="flex items-center space-x-2.5 min-w-0">
                {/* Badge */}
                <div className="flex items-center space-x-1.5 px-2.5 py-1 bg-[#12e8e8]/10 text-[#12e8e8] border border-[#12e8e8]/30 rounded-full text-[9px] sm:text-[10px] font-mono font-bold tracking-wider uppercase shrink-0">
                  <span className="w-1.5 h-1.5 bg-[#12e8e8] rounded-full animate-ping" style={{ animationDuration: '1.5s' }} />
                  <span>Early Bird</span>
                </div>
                
                {/* Text info */}
                <div className="text-left min-w-0">
                  <h4 className="text-white font-bold text-xs sm:text-sm tracking-tight leading-snug truncate">
                    Save 20% on Passes
                  </h4>
                  <p className="text-slate-400 text-[11px] font-medium tracking-tight mt-0.5 truncate hidden md:block">
                    Secure your spot at the best rates before prices increase.
                  </p>
                </div>
              </div>

              {/* Mobile dismiss cross button */}
              <button
                onClick={handleDismiss}
                className="sm:hidden p-1 rounded-lg hover:bg-white/10 text-white/60 hover:text-white transition-colors shrink-0 cursor-pointer ml-2"
                aria-label="Dismiss banner"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* BOTH ACTION BUTTONS SIDE-BY-SIDE ON ALL SCREENS */}
            <div className="flex items-center space-x-2.5 w-full sm:w-auto shrink-0 justify-end">
              {/* Register Now Button */}
              <a
                href={getAssetPath("/get-involved/#buy-tickets")}
                className="flex-1 sm:flex-initial flex items-center justify-center space-x-1 sm:space-x-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#12e8e8] text-[#030d16] border border-[#12e8e8] hover:bg-[#030d16] hover:text-[#12e8e8] rounded-full font-mono text-[9.5px] sm:text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-sm"
              >
                <span>Register Now</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Enquire Now Button */}
              <a
                href={getAssetPath("/general-enquiry")}
                className="flex-1 sm:flex-initial flex items-center justify-center space-x-1 sm:space-x-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#030d16] text-white border border-white/20 hover:border-[#12e8e8] hover:text-[#12e8e8] rounded-full font-mono text-[9.5px] sm:text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-sm"
              >
                <span>Enquire Now</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Desktop dismiss cross button */}
              <button
                onClick={handleDismiss}
                className="hidden sm:block p-1.5 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors shrink-0 cursor-pointer ml-1"
                aria-label="Dismiss banner"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
