"use client";

import { motion } from "framer-motion";

export default function PatronageSponsors() {
  const sponsorsList = [
    { name: "Emirates NBD", logoUrl: "https://media.konfhub.com/sponsors/2026/July/08/1783515054932-00c58332-1cd9-4233-ac70-5a6bdf9cbb9d.png" },
    { name: "Commercial Bank of Dubai", logoUrl: "https://media.konfhub.com/sponsors/2026/July/08/1783502459834-03c4ce3a-03aa-42e6-b541-f1aa602d06ca.png" },
    { name: "UAE Ministry of Investment", logoUrl: "https://media.konfhub.com/sponsors/2026/July/08/1783500691668-d7c24a12-b993-49af-82e7-bd02d3210923.png" },
    { name: "Ignyte", logoUrl: "https://media.konfhub.com/sponsors/2026/July/08/1783500752560-0055d952-460c-472a-9cd4-dd69e406eddb.png" },
    { name: "Pay10", logoUrl: "https://media.konfhub.com/sponsors/2026/July/08/1783502487851-307af9e2-1369-463e-99a7-1ee04657fdcf.png" },
    { name: "Neural Heights", logoUrl: "https://media.konfhub.com/sponsors/2026/July/08/1783500808247-96276399-c782-47ce-9db6-f135ccca7852.png" },
    { name: "Ripple", logoUrl: "https://media.konfhub.com/sponsors/2026/July/08/1783500826632-f912fe34-64ec-498d-93cc-680d72b1da6f.png" },
    { name: "Mawarid Finance", logoUrl: "https://media.konfhub.com/sponsors/2026/July/08/1783500851880-45643111-4a23-476f-8e38-4830828b81a3.png" },
    { name: "O Gold", logoUrl: "https://media.konfhub.com/sponsors/2026/July/08/1783500869531-31aa280d-8ec7-405a-aaf6-d74dd1f4b3c8.png" },
    { name: "Montran", logoUrl: "https://media.konfhub.com/sponsors/2026/July/08/1783500885248-2306e9f6-1c4b-4965-9c4a-9b1f29ebfd27.png" },
    { name: "Signzy", logoUrl: "https://media.konfhub.com/sponsors/2026/July/08/1783500905697-821c3734-3ffa-44be-a83f-26c7ba38d87a.png" },
    { name: "Wio Bank", logoUrl: "https://media.konfhub.com/sponsors/2026/July/08/1783500956296-58fa5260-b358-41d7-ab9a-2488f7c4b6bb.png" },
    { name: "Yubi", logoUrl: "https://media.konfhub.com/sponsors/2026/July/08/1783500995246-91dd75ff-bfd7-4f5f-a39c-3f17968518a7.png" },
    { name: "Taurus", logoUrl: "https://media.konfhub.com/sponsors/2026/July/08/1783501070027-418b7b8b-e89c-4c78-8fa4-423f1b8aca0d.png" },
  ];

  return (
    <section className="relative pt-8 pb-4 md:pt-10 md:pb-6 overflow-hidden bg-gradient-to-r from-[#011B24] via-[#043343] to-[#011B24] border-t border-b border-white/5 select-none w-full flex flex-col items-center">
      
      {/* CSS infinite scroll styling */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-logo-marquee {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
        .animate-logo-marquee:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* Left Chevron Strip Overlay (Hidden on mobile) */}
      <div className="hidden sm:block absolute left-4 md:left-14 top-4 md:top-6 opacity-20 pointer-events-none z-0">
        <svg className="w-24 h-10 text-[#12E9E9]" viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 5l15 15-15 15" />
          <path d="M25 5l15 15-15 15" />
          <path d="M40 5l15 15-15 15" />
          <path d="M55 5l15 15-15 15" />
          <path d="M70 5l15 15-15 15" />
        </svg>
      </div>

      {/* Right Chevron Strip Overlay (Hidden on mobile) */}
      <div className="hidden sm:block absolute right-4 md:right-14 top-4 md:top-6 opacity-20 pointer-events-none z-0">
        <svg className="w-24 h-10 text-[#12E9E9]" viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 5l15 15-15 15" />
          <path d="M25 5l15 15-15 15" />
          <path d="M40 5l15 15-15 15" />
          <path d="M55 5l15 15-15 15" />
          <path d="M70 5l15 15-15 15" />
        </svg>
      </div>

      {/* Center Content block */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10 flex flex-col items-center space-y-2">
        
        {/* Under the Patronage of badge label */}
        <div className="flex items-center space-x-1.5 font-mono font-bold tracking-[0.2em] uppercase">
          <span style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "12px" }}>UNDER THE PATRONAGE OF</span>
        </div>

        {/* H.H. Sheikh Maktoum Name */}
        <h2 
          className="text-base sm:text-xl md:text-2xl lg:text-[26px] font-black tracking-tight leading-snug px-2 text-wrap"
          style={{ color: "#12E9E9" }}
        >
          H.H. Sheikh Maktoum bin Mohammed bin Rashid Al Maktoum
        </h2>

        {/* President details label */}
        <p 
          className="leading-relaxed font-semibold uppercase tracking-wider text-[10px] sm:text-xs md:text-[13px] max-w-3xl mx-auto text-wrap px-2"
          style={{ color: "rgba(255, 255, 255, 0.8)" }}
        >
          First Deputy Ruler of Dubai, Deputy Prime Minister, and Minister of Finance, UAE, and President of DIFC
        </p>

      </div>

      {/* Partners / Sponsors infinite scrolling marquee */}
      <div className="w-full mt-6 pt-3.5 pb-2 border-t border-white/5 bg-black/15 relative z-10 overflow-hidden flex flex-col items-center">
        {/* Helper title */}
        <span 
          className="font-mono font-bold tracking-[0.25em] uppercase mb-3.5 text-[10px] md:text-[14px]" 
          style={{ color: "rgba(255, 255, 255, 0.65)" }}
        >
          2026 OFFICIAL CONVENING PARTNERS & SPONSORS
        </span>

        {/* Infinite Logo Track wrapper */}
        <div className="w-full overflow-hidden select-none">
          <div className="animate-logo-marquee space-x-8">
            {/* Group 1 */}
            {sponsorsList.map((sp, idx) => (
              <div
                key={`g1-${idx}`}
                className="h-[64px] md:h-[82px] w-auto rounded-xl flex items-center justify-center px-6 py-3 shrink-0 hover:scale-[1.04] transition-all duration-300 shadow-md border border-white/10"
                style={{ backgroundColor: "#ffffff" }}
                title={sp.name}
              >
                <img
                  src={sp.logoUrl}
                  alt={sp.name}
                  className="h-[42px] md:h-[60px] w-auto object-contain"
                />
              </div>
            ))}
            {/* Group 2 (Repeat) */}
            {sponsorsList.map((sp, idx) => (
              <div
                key={`g2-${idx}`}
                className="h-[64px] md:h-[82px] w-auto rounded-xl flex items-center justify-center px-6 py-3 shrink-0 hover:scale-[1.04] transition-all duration-300 shadow-md border border-white/10"
                style={{ backgroundColor: "#ffffff" }}
                title={sp.name}
              >
                <img
                  src={sp.logoUrl}
                  alt={sp.name}
                  className="h-[42px] md:h-[60px] w-auto object-contain"
                />
              </div>
            ))}
            {/* Group 3 (Repeat for wrap safety) */}
            {sponsorsList.map((sp, idx) => (
              <div
                key={`g3-${idx}`}
                className="h-[64px] md:h-[82px] w-auto rounded-xl flex items-center justify-center px-6 py-3 shrink-0 hover:scale-[1.04] transition-all duration-300 shadow-md border border-white/10"
                style={{ backgroundColor: "#ffffff" }}
                title={sp.name}
              >
                <img
                  src={sp.logoUrl}
                  alt={sp.name}
                  className="h-[42px] md:h-[60px] w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
