"use client";
import { motion } from "framer-motion";

export default function AssociationsTierGrid() {
  const associations = [
    { name: "Institute of International Finance", label: "Knowledge Partner", logo: "https://media.konfhub.com/partners/2026/July/08/1783515716287-a43bacc0-32fb-4c09-bdfc-97ea0ce6d7a4.png", link: "https://www.iif.com/" },
    { name: "Association of Fintechs In Kenya", label: "Supporting Association", logo: "https://media.konfhub.com/partners/2026/July/08/1783515732151-ebc33826-9493-4ac8-99b1-5857e14b42d9.png", link: "https://www.fintechassociationofkenya.org/" },
    { name: "Amcham Dubai", label: "Supporting Association", logo: "https://media.konfhub.com/partners/2026/July/08/1783515757918-58f06ae6-5157-4215-b3dd-0920ae381090.png", link: "https://amchamdubai.org/" },
    { name: "Astrolabs", label: "Supporting Association", logo: "https://media.konfhub.com/partners/2026/July/08/1783515782218-1fb0f5cf-1446-43f0-afee-c8a6a1ac6e6c.png", link: "https://astrolabs.com/" },
    { name: "BRICS Chamber of Commerce & Industry", label: "Supporting Association", logo: "https://media.konfhub.com/partners/2026/July/08/1783516223316-7bec160c-876d-46cd-a3b6-bbde8bdcbde2.png", link: "https://bricschamber.support/" },
    { name: "British Chamber of Commerce Dubai", label: "Supporting Association", logo: "https://media.konfhub.com/partners/2026/July/08/1783516271064-a74d74cc-c201-42d4-a64c-2c0fcd9500ba.png", link: "https://britishchamberdubai.com/" },
    { name: "EDFA", label: "Supporting Association", logo: "https://media.konfhub.com/partners/2026/July/08/1783515841617-2461b78a-8334-44e3-93c3-61afc31e1ea8.png", link: "/general-enquiry" },
    { name: "Findexable", label: "Supporting Association", logo: "https://media.konfhub.com/partners/2026/July/08/1783516308813-41a3d3fa-bff6-46b3-9567-e6c84ddd3f46.png", link: "/general-enquiry" },
    { name: "Fintech Alliance Philippines", label: "Supporting Association", logo: "https://media.konfhub.com/partners/2026/July/08/1783516330264-9a4cd414-6f57-4498-b401-1667297ef5e2.png", link: "/general-enquiry" },
    { name: "Fintech Bulgaria", label: "Supporting Association", logo: "https://media.konfhub.com/partners/2026/July/08/1783516350664-e22ef884-c71b-43e9-9c76-6ddf3390a985.png", link: "/general-enquiry" },
    { name: "Fintech Poland", label: "Supporting Association", logo: "https://media.konfhub.com/partners/2026/July/08/1783516370361-2d70c13a-ce5e-4985-ab46-ab0fa8822e7d.png", link: "/general-enquiry" },
    { name: "Acxelerate India", label: "Supporting Association", logo: "https://media.konfhub.com/partners/2026/July/09/1783580620925-88351297-3ebe-4b80-8609-1c223ee112f0.png", link: "/general-enquiry" }
  ];

  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">
      
      {/* Dynamic style overrides to match the exact design standard */}
      <style dangerouslySetInnerHTML={{__html: `
        .exact-assoc-card {
          background-color: #ffffff !important;
          border: 1.5px solid rgba(18, 232, 232, 0.45) !important;
          border-radius: 20px !important;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.02) !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        .exact-assoc-card:hover {
          border-color: #12e8e8 !important;
          box-shadow: 0 10px 25px -5px rgba(18, 232, 232, 0.25) !important;
          transform: translateY(-2px) !important;
        }
        .exact-assoc-title-label {
          color: #082028 !important;
          font-family: var(--font-sans, system-ui, sans-serif);
          font-weight: 700 !important;
        }
        .exact-assoc-header-text {
          color: #082028 !important;
          font-family: var(--font-sans, system-ui, sans-serif);
          font-weight: 800 !important;
        }
      `}} />

      <div className="max-w-[1240px] mx-auto px-6 relative z-10 w-full space-y-16">
        
        {/* Section Heading */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl exact-assoc-header-text tracking-wide">
            Supporting Associations
          </h2>
          <div className="w-[200px] h-[3px] bg-[#12e8e8] mx-auto rounded-full" />
        </div>

        {/* 3-Column Grid matching standard design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {associations.map((item, itemIdx) => (
            <motion.a
              key={itemIdx}
              href={item.link}
              target={item.link.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (itemIdx % 3) * 0.08 }}
              className="exact-assoc-card h-[210px] md:h-[230px] p-8 flex flex-col justify-between items-center cursor-pointer block"
            >
              {/* Partner Label at the top */}
              <div className="w-full text-center">
                <span className="text-[13px] md:text-[14px] exact-assoc-title-label tracking-wide block uppercase leading-snug">
                  {item.label}
                </span>
              </div>

              {/* Logo centered below */}
              <div className="flex-grow flex items-center justify-center w-full mt-4 max-h-[110px] overflow-hidden">
                <img
                  src={item.logo}
                  alt={`${item.name} logo`}
                  title={`Visit ${item.name} website`}
                  className="max-w-full max-h-full object-contain filter hover:scale-[1.05] transition-transform duration-500 block"
                  loading="lazy"
                />
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
