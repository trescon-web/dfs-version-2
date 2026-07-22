"use client";
import { getAssetPath } from "@/utils/assetPath";
import { motion } from "framer-motion";

export default function SponsorsTierGrid() {
  const sections = [
    {
      title: "Founding & Strategic Partners",
      columnsClass: "grid-cols-1 md:grid-cols-3",
      cardHeight: "h-[160px] md:h-[200px]",
      items: [
        {
          name: "Emirates NBD",
          tier: "Founding Partner & Premium Banking Partner",
          logo: "https://media.konfhub.com/sponsors/2026/July/08/1783515054932-00c58332-1cd9-4233-ac70-5a6bdf9cbb9d.png"
        },
        {
          name: "Commercial Bank of Dubai",
          tier: "Founding Partner & Strategic Banking Partner",
          logo: "https://media.konfhub.com/sponsors/2026/July/08/1783502459834-03c4ce3a-03aa-42e6-b541-f1aa602d06ca.png"
        },
        {
          name: "UAE Ministry of Investment",
          tier: "Strategic Partner",
          logo: "https://media.konfhub.com/sponsors/2026/July/08/1783500691668-d7c24a12-b993-49af-82e7-bd02d3210923.png"
        }
      ]
    },
    {
      title: "Ecosystem & Strategic Payment Partners",
      columnsClass: "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto",
      cardHeight: "h-[140px] md:h-[180px]",
      items: [
        {
          name: "Ignyte",
          tier: "Ecosystem Partner",
          logo: "https://media.konfhub.com/sponsors/2026/July/08/1783500752560-0055d952-460c-472a-9cd4-dd69e406eddb.png"
        },
        {
          name: "Pay10",
          tier: "Strategic Payment Partner",
          logo: "https://media.konfhub.com/sponsors/2026/July/08/1783502487851-307af9e2-1369-463e-99a7-1ee04657fdcf.png"
        }
      ]
    },
    {
      title: "Diamond & Platinum Sponsors",
      columnsClass: "grid-cols-1 md:grid-cols-3",
      cardHeight: "h-[130px] md:h-[160px]",
      items: [
        {
          name: "Neural Heights Technologies",
          tier: "Diamond Sponsor",
          logo: "https://media.konfhub.com/sponsors/2026/July/08/1783500808247-96276399-c782-47ce-9db6-f135ccca7852.png"
        },
        {
          name: "Ripple",
          tier: "Platinum Sponsor",
          logo: "https://media.konfhub.com/sponsors/2026/July/08/1783500826632-f912fe34-64ec-498d-93cc-680d72b1da6f.png"
        },
        {
          name: "Mawarid Finance PJSC",
          tier: "Platinum Sponsor",
          logo: "https://media.konfhub.com/sponsors/2026/July/08/1783500851880-45643111-4a23-476f-8e38-4830828b81a3.png"
        }
      ]
    },
    {
      title: "Gold Sponsors",
      columnsClass: "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto",
      cardHeight: "h-[120px] md:h-[150px]",
      items: [
        {
          name: "O Gold Precious Metals Trading",
          tier: "Gold Sponsor",
          logo: "https://media.konfhub.com/sponsors/2026/July/08/1783500869531-31aa280d-8ec7-405a-aaf6-d74dd1f4b3c8.png"
        },
        {
          name: "Montran",
          tier: "Gold Sponsor",
          logo: "https://media.konfhub.com/sponsors/2026/July/08/1783500885248-2306e9f6-1c4b-4965-9c4a-9b1f29ebfd27.png"
        }
      ]
    },
    {
      title: "Silver Sponsors",
      columnsClass: "grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6",
      cardHeight: "h-[100px] md:h-[130px]",
      items: [
        {
          name: "Signzy Technologies Private Limited",
          tier: "Silver Sponsor",
          logo: "https://media.konfhub.com/sponsors/2026/July/08/1783500905697-821c3734-3ffa-44be-a83f-26c7ba38d87a.png"
        },
        {
          name: "X SpotWealth EU LTD (XSpot 360)",
          tier: "Silver Sponsor",
          logo: "https://media.konfhub.com/sponsors/2026/July/08/1783500923146-bc34b0c6-3662-4461-8033-5309e36069fa.png"
        },
        {
          name: "Al Ansari Financial Services PJSC",
          tier: "Silver Sponsor",
          logo: "https://media.konfhub.com/sponsors/2026/July/08/1783500940745-06fef6ac-d19b-4346-9716-a2a18254fef3.png"
        },
        {
          name: "Wio Bank PJSC",
          tier: "Silver Sponsor",
          logo: "https://media.konfhub.com/sponsors/2026/July/08/1783500956296-58fa5260-b358-41d7-ab9a-2488f7c4b6bb.png"
        },
        {
          name: "Bonree Data Technology Co.,Ltd",
          tier: "Silver Sponsor",
          logo: "https://media.konfhub.com/sponsors/2026/July/08/1783500974363-a1fc6ccd-0d75-4a42-8cd4-fd56a6b8372e.png"
        },
        {
          name: "Yubi",
          tier: "Silver Sponsor",
          logo: "https://media.konfhub.com/sponsors/2026/July/08/1783500995246-91dd75ff-bfd7-4f5f-a39c-3f17968518a7.png"
        }
      ]
    },
    {
      title: "Premium Bronze Sponsors",
      columnsClass: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
      cardHeight: "h-[90px] md:h-[110px]",
      items: [
        {
          name: "Azakaw",
          tier: "Premium Bronze Sponsor",
          logo: "https://media.konfhub.com/sponsors/2026/July/08/1783501014544-43c9df47-b6fb-4768-b853-d9f1a22c64f4.png"
        },
        {
          name: "Optimum Solutions",
          tier: "Premium Bronze Sponsor",
          logo: "https://media.konfhub.com/sponsors/2026/July/08/1783501043747-981976ce-f0d2-4b84-a64a-9ce6b39634a7.png"
        },
        {
          name: "Taurus",
          tier: "Premium Bronze Sponsor",
          logo: "https://media.konfhub.com/sponsors/2026/July/08/1783501070027-418b7b8b-e89c-4c78-8fa4-423f1b8aca0d.png"
        },
        {
          name: "Sumsub",
          tier: "Premium Bronze Sponsor",
          logo: "https://media.konfhub.com/sponsors/2026/July/08/1783501098378-715bd6bb-454b-407a-b61d-ac1355695c83.png"
        },
        {
          name: "HyperPay DMCC",
          tier: "Premium Bronze Sponsor",
          logo: "https://media.konfhub.com/sponsors/2026/July/08/1783501115195-338b024c-e40a-4800-a8f4-2b426fe0570f.png"
        },
        {
          name: "The Boston Consulting Group",
          tier: "Premium Bronze Sponsor",
          logo: "https://media.konfhub.com/sponsors/2026/July/08/1783501133776-8a1c7b1f-24b8-42e3-9e93-8f10ee51b93b.png"
        },
        {
          name: "DefineX",
          tier: "Premium Bronze Sponsor",
          logo: "https://media.konfhub.com/sponsors/2026/July/08/1783501153362-ab778a56-a4ff-4228-a892-2c743a3fea84.png"
        },
        {
          name: "Komainu",
          tier: "Premium Bronze Sponsor",
          logo: "https://media.konfhub.com/sponsors/2026/July/08/1783501179959-b418d575-8ec1-40e9-87ef-90fc49510492.png"
        },
        {
          name: "TerraPay",
          tier: "Premium Bronze Sponsor",
          logo: "https://media.konfhub.com/sponsors/2026/July/08/1783501203095-1a8694ae-d564-4916-8380-aafb081bbab9.png"
        },
        {
          name: "Integra Technologies FZE",
          tier: "Premium Bronze Sponsor",
          logo: "https://media.konfhub.com/sponsors/2026/July/08/1783501227827-98ee38fe-6c51-47c1-8d16-9e441f946933.png"
        },
        {
          name: "CImplr by Cash Invoice",
          tier: "Premium Bronze Sponsor",
          logo: "https://media.konfhub.com/sponsors/2026/July/08/1783501245974-23836704-d8da-40f5-8f7b-db4cf293faae.png"
        },
        {
          name: "Jocata",
          tier: "Premium Bronze Sponsor",
          logo: "https://media.konfhub.com/sponsors/2026/July/08/1783501274027-4b50acdc-9b6c-4c6f-805c-c5b615487bd9.png"
        },
        {
          name: "Centroid Solutions",
          tier: "Premium Bronze Sponsor",
          logo: "https://media.konfhub.com/sponsors/2026/July/08/1783501290925-cac57798-9124-46a0-9f6b-3217e212f98e.png"
        },
        {
          name: "QualityKiosk Technologies Pvt Ltd",
          tier: "Premium Bronze Sponsor",
          logo: "https://media.konfhub.com/sponsors/2026/July/08/1783501306744-f1f104b8-133c-4d38-92fd-4eafa0a6bea6.png"
        },
        {
          name: "Kamel Pay",
          tier: "Premium Bronze Sponsor",
          logo: "https://media.konfhub.com/sponsors/2026/July/08/1783501367344-ce98587c-28f6-441c-b655-4011ac1214e7.png"
        }
      ]
    },
    {
      title: "Bronze Sponsors",
      columnsClass: "grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6",
      cardHeight: "h-[80px] md:h-[100px]",
      items: [
        {
          name: "InvestSuite",
          tier: "Bronze Sponsor",
          logo: "https://media.konfhub.com/sponsors/2026/July/08/1783501384190-442ce458-bbeb-4f7e-b2ec-521b4c84cdc4.png"
        },
        {
          name: "PhotonPay",
          tier: "Bronze Sponsor",
          logo: "https://media.konfhub.com/sponsors/2026/July/08/1783501403391-3222783a-4117-42fa-96e9-f907870b5029.png"
        },
        {
          name: "BitOasis",
          tier: "Bronze Sponsor",
          logo: "https://media.konfhub.com/sponsors/2026/July/08/1783501423110-5200b8d9-36a1-4f42-8f82-1b87ae2f2d3a.png"
        },
        {
          name: "Softlabs Group - Ainfinite Ai",
          tier: "Bronze Sponsor",
          logo: "https://media.konfhub.com/sponsors/2026/July/08/1783501458444-b05c9c3b-960f-466d-a9b4-6cae9e8b831d.png"
        },
        {
          name: "OSON Payments",
          tier: "Bronze Sponsor",
          logo: "https://media.konfhub.com/sponsors/2026/July/08/1783501513626-2ad0e087-34b0-4e22-a9f1-ae2194d41cf9.png"
        },
        {
          name: "AE Coin",
          tier: "Bronze Sponsor",
          logo: "https://media.konfhub.com/sponsors/2026/July/08/1783501532909-f04d5cf0-47ff-43e8-839e-0257e4a4f24c.png"
        },
        {
          name: "MetaQuotes",
          tier: "Bronze Sponsor",
          logo: "https://media.konfhub.com/sponsors/2026/July/08/1783501551524-ecfe0589-eeb0-47b0-aaa7-df511ee76140.png"
        }
      ]
    }
  ];

  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">
      
      {/* Dynamic style overrides to guarantee contrast in light mode */}
      <style dangerouslySetInnerHTML={{__html: `
        .spons-section-title {
          color: #082028 !important;
        }
        .logo-card {
          background-color: #ffffff !important;
          border-color: #f1f5f9 !important;
        }
        .logo-card:hover {
          border-color: #12e8e8 !important;
          box-shadow: 0 10px 30px -10px rgba(18, 232, 232, 0.15) !important;
        }
      `}} />

      <div className="max-w-[1320px] mx-auto px-6 relative z-10 w-full space-y-24">
        
        {sections.map((section, sIdx) => (
          <div key={sIdx} className="space-y-10 text-center">
            
            {/* Tier Title */}
            <div className="flex flex-col items-center space-y-3">
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-wider font-sans spons-section-title">
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
                  className={`relative ${section.cardHeight} rounded-3xl border flex items-center justify-center p-6 transition-all duration-300 group shadow-sm logo-card cursor-pointer overflow-hidden`}
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
                    {item.tier}
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
