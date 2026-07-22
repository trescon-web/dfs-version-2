"use client";
import { motion } from "framer-motion";

export default function AssociationsPartnershipBlock() {
  return (
    <section className="relative py-20 bg-[#eefaff] overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[30%] h-[30%] bg-[#12e8e8]/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1240px] mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#082028] leading-tight">
              Association partnerships
            </h2>
            
            <div className="space-y-6 text-[#2d4750] text-[16px] md:text-[18px] leading-relaxed font-sans">
              <p>
                Association partnerships at Dubai FinTech Summit give governments, chambers, business councils, 
                universities, and innovation ecosystems the opportunity to gain direct access to a senior, global 
                decision-maker audience. These partnerships offer a powerful opportunity to showcase ecosystems, 
                support member organisations, and drive impactful cross-border collaboration.
              </p>
              <p>
                DFS transcends borders. It serves as a global convergence point for policy, capital, and innovation, 
                where ideas scale and markets connect.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Signing Ceremony Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100/50 bg-white p-2"
          >
            <img
              src="https://dubaifintechsummit.com/wp-content/uploads/2026/04/Association-Partnerships-at-Dubai-FinTech-Summit-Latest-Img-2048x1366-1.png"
              alt="Association Partnerships signing ceremony at Dubai FinTech Summit"
              className="w-full h-auto rounded-2xl object-cover block"
              loading="lazy"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
