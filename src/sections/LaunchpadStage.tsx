"use client";

import { motion } from "framer-motion";

export default function LaunchpadStage() {
  const showcaseItems = [
    "FinTech pioneers",
    "Industry leaders",
    "Government stakeholders"
  ];

  return (
    <div className="w-full flex flex-col">
      
      {/* SECTION 1: A global stage for FinTech innovation (Dark Slate Theme) */}
      <section className="relative py-24 bg-[#082028] text-white overflow-hidden">
        {/* Glow ambient */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#12e8e8]/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-[1240px] mx-auto px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Text Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 space-y-6"
            >
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#082028] leading-tight">
                A global stage for FinTech innovation
              </h2>
              <div className="w-16 h-1 bg-[#12e8e8] rounded-full" />
              <p className="text-slate-650 text-[16px] md:text-[18px] leading-relaxed font-sans font-normal">
                A global stage for breakthrough ideas and disruptive innovations. Showcase new products, 
                share insights, and make announcements that shape the industry. For policymakers, academics, 
                government leaders, and enterprise innovators — this is where innovation takes the spotlight.
              </p>
            </motion.div>

            {/* Right: Graphic Stage Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 relative"
            >
              <img
                src="/images/stage-innovation.png"
                alt="A Global Stage for FinTech Innovation"
                className="w-full h-auto block object-contain"
                loading="lazy"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 2: Join a premier showcase of bold ideas (Light Theme) */}
      <section className="relative py-24 bg-[#eefaff] text-[#082028] overflow-hidden">
        {/* Glow ambient */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[30%] h-[30%] bg-[#12e8e8]/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-[1240px] mx-auto px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Showcase Graphic Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/50 bg-white p-2 order-2 lg:order-1"
            >
              <img
                src="https://dubaifintechsummit.com/wp-content/uploads/2026/02/Join-a-premier-showcase-img-New.webp"
                alt="Join a premier showcase stage discussion at Dubai FinTech Summit"
                className="w-full h-auto rounded-2xl object-cover block"
                loading="lazy"
              />
            </motion.div>

            {/* Right: Bullet Points */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 space-y-6 order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
                Join a premier showcase of bold ideas and brilliant minds
              </h2>
              <div className="w-16 h-1 bg-[#12e8e8] rounded-full" />
              
              <div className="space-y-6">
                <p className="text-[#2d4750] text-[16px] md:text-[18px] font-sans font-semibold">
                  Present your breakthrough to the people who matter:
                </p>
                
                <ul className="space-y-4 text-[#2d4750] text-[16px] md:text-[18px] font-sans font-medium">
                  {showcaseItems.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-3 leading-relaxed">
                      {/* Premium Cyan bullet check icon */}
                      <svg 
                        className="w-5 h-5 text-[#12e8e8] shrink-0" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        strokeWidth={4}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
