'use client';

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
          className="fixed bottom-0 left-0 right-0 w-full bg-white/98 backdrop-blur-md shadow-[0_-10px_45px_rgba(0,0,0,0.08)] z-50 py-4 md:py-5 px-8 md:px-12 select-none"
        >
          {/* Top animated moving gradient line */}
          <div className="absolute top-0 left-0 right-0 h-[3.5px] bg-gradient-to-r from-[#12e8e8] via-[#2563eb] via-[#0f766e] to-[#12e8e8] animate-gradient-move" />
          
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

          <div className="w-full flex items-center justify-between gap-3 sm:gap-6">
            
            {/* Left Section: Early Bird Pass registration */}
            <div className="flex items-center justify-between sm:justify-start space-x-2.5 sm:space-x-4 w-full sm:w-auto min-w-0">
              
              {/* Badge & Text container */}
              <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
                {/* Badge */}
                <div className="hidden xs:flex items-center space-x-1.5 px-2 py-1 sm:px-3.5 sm:py-1.5 bg-[#0f766e]/10 text-[#0f766e] border border-[#0f766e]/20 rounded-full text-[9px] sm:text-[11px] font-mono font-bold tracking-wider uppercase shrink-0">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#12e8e8] rounded-full animate-ping" style={{ animationDuration: '1.5s' }} />
                  <span>Early Bird</span>
                </div>
                
                {/* Text info */}
                <div className="text-left min-w-0">
                  <h4 className="text-slate-900 font-bold text-xs sm:text-sm md:text-[16px] tracking-tight leading-snug">
                    Save 20% on Passes
                  </h4>
                  <p className="text-slate-500 text-[11px] md:text-xs font-semibold tracking-tight mt-0.5 truncate hidden md:block">
                    Secure your spot at the best rates before prices increase.
                  </p>
                </div>
              </div>

              {/* Mobile right controls (Register button + Close button on mobile) */}
              <div className="flex items-center space-x-2 shrink-0">
                {/* Action Button */}
                <a
                  href="/get-involved/#buy-tickets"
                  className="shrink-0 flex items-center space-x-1 sm:space-x-1.5 px-3 py-1.5 sm:px-5 sm:py-2.5 bg-[#12e8e8] text-[#082028] border border-[#12e8e8] hover:bg-slate-900 hover:border-slate-900 hover:text-[#12e8e8] rounded-lg font-mono text-[9px] sm:text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-sm"
                >
                  <span>Register Now</span>
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>

                {/* Dismiss Cross Button on mobile */}
                <button
                  onClick={handleDismiss}
                  className="sm:hidden p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors shrink-0 cursor-pointer"
                  aria-label="Dismiss banner"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Middle Divider */}
            <div className="hidden lg:block w-[1px] h-10 bg-slate-200/80 mx-2" />

            {/* Right Section: Sponsorship enquiries */}
            <div className="hidden lg:flex items-center space-x-6 flex-1 justify-end min-w-0">
              {/* Badge */}
              <div className="flex items-center space-x-1.5 px-3.5 py-1.5 bg-blue-600/10 text-blue-600 border border-blue-600/20 rounded-full text-[10px] md:text-[11px] font-mono font-bold tracking-wider uppercase shrink-0">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                <span>Sponsorship</span>
              </div>
              
              {/* Text info */}
              <div className="text-left min-w-0">
                <h4 className="text-slate-900 font-bold text-sm md:text-[16px] tracking-tight leading-none">
                  Sponsorship Opportunities
                </h4>
                <p className="text-slate-500 text-[11px] md:text-xs font-semibold tracking-tight mt-1 truncate">
                  Elevate your brand presence and connect with 8,000+ C-level delegates.
                </p>
              </div>

              {/* Action Button */}
              <a
                href="/general-enquiry"
                className="shrink-0 flex items-center space-x-1.5 px-5 py-2.5 bg-[#12e8e8] text-[#082028] border border-[#12e8e8] hover:bg-slate-900 hover:border-slate-900 hover:text-[#12e8e8] rounded-lg font-mono text-[10px] md:text-xs font-bold tracking-wider uppercase hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-sm hover:shadow-[0_4px_20px_rgba(18,232,232,0.35)]"
              >
                <span>Enquire Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Dismiss Cross Button (Desktop) */}
            <button
              onClick={handleDismiss}
              className="hidden sm:block p-2 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors shrink-0 cursor-pointer"
              aria-label="Dismiss banner"
            >
              <X className="w-5 h-5" />
            </button>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
