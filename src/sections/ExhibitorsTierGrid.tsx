"use client";

import { motion } from "framer-motion";

export default function ExhibitorsTierGrid() {
  const sections = [
    {
      title: "Exhibitors",
      columnsClass: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
      cardHeight: "h-[100px] md:h-[120px]",
      items: [
        {
          name: "UNITED SIGNALS",
          logo: "https://media.konfhub.com/exhibitors/2026/July/08/1783518448513-2b279c78-7aa9-4c24-b887-fe4522adc516.png"
        },
        {
          name: "Knight Fintech",
          logo: "https://media.konfhub.com/exhibitors/2026/July/08/1783518464263-f58af18c-2831-46ec-af98-bf869d22459e.png"
        },
        {
          name: "21st Financial Technology",
          logo: "https://media.konfhub.com/exhibitors/2026/July/08/1783518479847-91e50d8f-a4e1-42e1-8e33-9a2add55b8bc.png"
        },
        {
          name: "Treinetic",
          logo: "https://media.konfhub.com/exhibitors/2026/July/08/1783518495132-28c14bb4-be3b-4148-9c64-6aef284fe545.png"
        },
        {
          name: "Veriff",
          logo: "https://media.konfhub.com/exhibitors/2026/July/08/1783518510579-4771bb4e-a6a9-4385-9c17-d0ed50475f0e.png"
        },
        {
          name: "iPiD",
          logo: "https://media.konfhub.com/exhibitors/2026/July/08/1783518525597-c80fd156-7433-4132-ac1f-829094e7d6a8.png"
        },
        {
          name: "Royaye Andisheh Parvaz",
          logo: "https://media.konfhub.com/exhibitors/2026/July/08/1783518540929-0d9e5ed7-f0cf-4ce8-bcc5-7662da6d43ea.png"
        },
        {
          name: "OnFinance AI",
          logo: "https://media.konfhub.com/exhibitors/2026/July/08/1783518556513-372a182c-fbdc-4fbd-a24f-29f8a49efcf5.png"
        },
        {
          name: "KeeSystem",
          logo: "https://media.konfhub.com/exhibitors/2026/July/08/1783518576613-61fd529e-6140-44b8-a0cd-0bb65c8e2831.png"
        },
        {
          name: "Started PR",
          logo: "https://media.konfhub.com/exhibitors/2026/July/08/1783518593679-806a6437-680d-4b4a-910c-7baafc6b9878.png"
        }
      ]
    },
    {
      title: "Startup Exhibitor",
      columnsClass: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
      cardHeight: "h-[90px] md:h-[110px]",
      items: [
        {
          name: "ComplyStream",
          logo: "https://media.konfhub.com/exhibitors/2026/July/08/1783518612746-509f18e9-49ce-4193-9712-4ce4d16d4088.png"
        },
        {
          name: "NeoSOFT",
          logo: "https://media.konfhub.com/exhibitors/2026/July/08/1783518627597-c0a31fb9-4fbc-45b5-b75e-7a2346490a97.png"
        },
        {
          name: "Tutelar Solutions Private Limited",
          logo: "https://media.konfhub.com/exhibitors/2026/July/08/1783518642630-b26febc2-d976-4e1b-956a-b7f0c12f08a6.png"
        },
        {
          name: "Roam",
          logo: "https://media.konfhub.com/exhibitors/2026/July/08/1783518665730-9f52e338-bd3d-47f4-89d5-6eac11a9cce6.png"
        }
      ]
    },
    {
      title: "Startup Pods",
      columnsClass: "grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6",
      cardHeight: "h-[80px] md:h-[100px]",
      items: [
        {
          name: "Komplai",
          logo: "https://media.konfhub.com/exhibitors/2026/July/08/1783518683246-0634fd36-8aa1-4054-974f-59c71ebe18bf.png"
        },
        {
          name: "DUX",
          logo: "https://media.konfhub.com/exhibitors/2026/July/08/1783518699294-8857190a-da33-47a7-a44e-4d7456abc650.png"
        },
        {
          name: "TAXVIEWR",
          logo: "https://media.konfhub.com/exhibitors/2026/July/08/1783518714115-f7a8a120-5002-4c15-9744-48dfd5b0c394.png"
        },
        {
          name: "Portuma",
          logo: "https://media.konfhub.com/exhibitors/2026/July/08/1783518730164-faaa3936-4423-4144-8839-2249f2684642.png"
        },
        {
          name: "CSL Pay Ltd",
          logo: "https://media.konfhub.com/exhibitors/2026/February/23/1771839880090-e3f3b9e7-bab9-4335-b7ac-f69613cd7925.png"
        },
        {
          name: "Finnulate AI",
          logo: "https://media.konfhub.com/exhibitors/2026/July/08/1783518747781-ebd7c38f-8124-45a7-b888-8c35dc04f3ac.png"
        },
        {
          name: "PayFex Global",
          logo: "https://media.konfhub.com/exhibitors/2026/July/08/1783518764112-94a89ae3-de05-4c75-a8b3-41e601dbe8d6.png"
        }
      ]
    }
  ];

  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">
      
      {/* Dynamic style overrides to guarantee contrast in light mode */}
      <style dangerouslySetInnerHTML={{__html: `
        .exhib-section-title {
          color: #082028 !important;
        }
        .exhib-logo-card {
          background-color: #ffffff !important;
          border-color: #f1f5f9 !important;
        }
        .exhib-logo-card:hover {
          border-color: #12e8e8 !important;
          box-shadow: 0 10px 30px -10px rgba(18, 232, 232, 0.15) !important;
        }
      `}} />

      <div className="max-w-[1320px] mx-auto px-6 relative z-10 w-full space-y-24">
        
        {sections.map((section, sIdx) => (
          <div key={sIdx} className="space-y-10 text-center">
            
            {/* Category Header */}
            <div className="flex flex-col items-center space-y-3">
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-wider font-sans exhib-section-title">
                {section.title}
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-[#12e8e8] to-[#c5a880] rounded-full" />
            </div>

            {/* Logo Grid */}
            <div className={`grid gap-6 ${section.columnsClass}`}>
              {section.items.map((item, itemIdx) => (
                <motion.div
                  key={itemIdx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: itemIdx * 0.05 }}
                  className={`relative ${section.cardHeight} rounded-3xl border flex items-center justify-center p-6 transition-all duration-300 group shadow-sm exhib-logo-card cursor-pointer overflow-hidden`}
                >
                  {/* Subtle logo zoom */}
                  <img
                    src={item.logo}
                    alt={`${item.name} logo`}
                    title={item.name}
                    className="max-w-full max-h-full object-contain filter hover:scale-[1.05] transition-transform duration-500 block"
                  />
                  
                  {/* Hover tooltip for accessibility */}
                  <div className="absolute bottom-2 left-2 right-2 text-[9px] text-center font-mono font-bold tracking-widest text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 truncate pointer-events-none">
                    {section.title}
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
