"use client";
import { getAssetPath } from "@/utils/assetPath";
import { motion } from "framer-motion";

export default function Footer() {
  const columns = [
    {
      title: "ABOUT",
      items: [
        { label: "DFS", href: getAssetPath("/about") },
        { label: "News", href: getAssetPath("/blog") },
        { label: "Blog", href: getAssetPath("/blog") },
      ],
    },
    {
      title: "ENQUIRE",
      items: [
        { label: "Media partnership", href: getAssetPath("/general-enquiry") },
        { label: "Sponsorship", href: getAssetPath("/general-enquiry") },
        { label: "Become an affiliate", href: getAssetPath("/general-enquiry") },
      ],
    },
    {
      title: "TERMS AND CONDITIONS",
      items: [
        { label: "Cookie policy", href: getAssetPath("/general-enquiry") },
        { label: "Privacy policy", href: getAssetPath("/general-enquiry") },
        { label: "General terms and conditions", href: getAssetPath("/general-enquiry") },
      ],
    },
  ];

  return (
    <footer className="relative bg-[#021a22] border-t border-white/5 pt-16 pb-12 overflow-hidden text-left select-none z-20">
      
      {/* Local style block to enforce exact colors and font families across different device configurations */}
      <style dangerouslySetInnerHTML={{__html: `
        .footer-header {
          color: #ffffff !important;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
        }
        .footer-link {
          color: #98b6c0 !important;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
        }
        .footer-link:hover {
          color: #12e8e8 !important;
        }
        .footer-copyright {
          color: #98b6c0 !important;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
        }
        .footer-input {
          color: #ffffff !important;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
        }
        .footer-input::placeholder {
          color: #98b6c0 !important;
          opacity: 0.6 !important;
        }
      `}} />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16">
        
        {/* Top Row: Partner / Organizer Logos separated by slanted lines */}
        <div className="grid grid-cols-2 md:flex md:flex-wrap items-center justify-items-center md:justify-center gap-6 sm:gap-8 lg:gap-10 pb-10 md:pb-12 border-b border-white/10 w-full text-center">
          
          {/* Logo 1: Dubai Fintech Summit */}
          <div className="flex items-center justify-center h-14 md:h-16 w-full md:w-auto">
            <img 
              src={getAssetPath("/images/Dubai-Fintech-Summit-Green-White-Logo.svg")} 
              alt="Dubai Fintech Summit" 
              className="h-10 sm:h-12 md:h-15 w-auto object-contain max-w-[140px] sm:max-w-none" 
            />
          </div>

          {/* Separator */}
          <img 
            src={getAssetPath("/images/Vector-Right.svg")} 
            alt="Separator" 
            className="h-9 w-auto object-contain opacity-55 hidden md:block" 
          />

          {/* Logo 2: Organised by DIFC */}
          <div className="flex items-center justify-center h-14 md:h-16 w-full md:w-auto">
            <img 
              src={getAssetPath("/images/organized-difc-logo-new.svg")} 
              alt="Organised by DIFC" 
              className="h-10 sm:h-12 md:h-15 w-auto object-contain max-w-[140px] sm:max-w-none" 
            />
          </div>

          {/* Separator */}
          <img 
            src={getAssetPath("/images/Vector-Right.svg")} 
            alt="Separator" 
            className="h-9 w-auto object-contain opacity-55 hidden md:block" 
          />

          {/* Logo 3: Part of Dubai Future Finance Week */}
          <div className="flex items-center justify-center h-14 md:h-16 w-full md:w-auto">
            <img 
              src={getAssetPath("/images/Dffw-New-Logo.svg")} 
              alt="Part of Dubai Future Finance Week" 
              className="h-10 sm:h-12 md:h-15 w-auto object-contain max-w-[140px] sm:max-w-none" 
            />
          </div>

          {/* Separator */}
          <img 
            src={getAssetPath("/images/Vector-Right.svg")} 
            alt="Separator" 
            className="h-9 w-auto object-contain opacity-55 hidden md:block" 
          />

          {/* Logo 4: Managed by Trescon */}
          <div className="flex items-center justify-center h-14 md:h-16 w-full md:w-auto">
            <img 
              src={getAssetPath("/images/10-trescon-logo-white.svg")} 
              alt="Managed by Trescon" 
              className="h-12 sm:h-14 md:h-18 w-auto object-contain max-w-[140px] sm:max-w-none" 
            />
          </div>

        </div>

        {/* Middle Row: Links Columns & Newsletter */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-8 items-start w-full">
          
          {columns.map((col, idx) => (
            <div key={idx} className="lg:col-span-3 space-y-5 text-left">
              <span className="text-[15px] md:text-[16px] font-bold tracking-wider uppercase block footer-header">
                {col.title}
              </span>
              
              <ul className="space-y-3.5">
                {col.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <a
                      href={item.href}
                      className="text-[16px] md:text-[17px] font-medium transition-colors block footer-link"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 4: Newsletter Sign-up */}
          <div className="lg:col-span-3 space-y-5 text-left">
            <span className="text-[15px] md:text-[16px] font-bold tracking-wider uppercase block footer-header">
              STAY UP TO DATE WITH US
            </span>
            
            <div className="relative flex items-center border-b border-[#98b6c0]/30 focus-within:border-[#12e8e8] pb-2 w-full mt-4 transition-colors duration-300">
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent border-none text-[16px] focus:outline-none w-full pr-8 font-medium footer-input"
              />
              <button 
                className="absolute right-0 text-white hover:text-[#12e8e8] transition-colors cursor-pointer text-lg font-bold"
                aria-label="Submit email"
              >
                →
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Row: Copyright & Socials */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 w-full">
          <span className="text-[14px] md:text-[15px] font-medium footer-copyright">
            Copyright ©2026 <span className="underline cursor-pointer hover:text-white">DIFC</span>, All Rights Reserved.
          </span>

          {/* Cyan social links */}
          <div className="flex items-center space-x-4">
            {/* X */}
            <a href="#" aria-label="X (formerly Twitter)">
              <svg className="w-5 h-5 text-[#12e8e8] hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a href="#" aria-label="YouTube">
              <svg className="w-5 h-5 text-[#12e8e8] hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a href="#" aria-label="Facebook">
              <svg className="w-5 h-5 text-[#12e8e8] hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a href="#" aria-label="Instagram">
              <svg className="w-5 h-5 text-[#12e8e8] hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn">
              <svg className="w-5 h-5 text-[#12e8e8] hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
