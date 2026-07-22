"use client";
import { motion } from "framer-motion";

export default function MediaTierGrid() {
  const partners = [
    { name: "Khaleej Times", label: "Official Media Partner", logo: "https://media.konfhub.com/partners/2026/July/08/1783512920724-cec1ec44-1fbd-49ae-80f1-70de38564d6c.png", link: "https://www.khaleejtimes.com/?_refresh=true" },
    { name: "Arabian Business", label: "Strategic Media Partner", logo: "https://media.konfhub.com/partners/2026/July/08/1783512945254-02e5217b-a4ef-40ff-94a4-0e2d2f659271.png", link: "https://www.arabianbusiness.com/" },
    { name: "Muck Rack", label: "Official PR & Media Intelligence Partner", logo: "https://media.konfhub.com/partners/2026/July/08/1783512966621-3fdb972e-3124-4705-9da0-dd28605547de.png", link: "https://muckrack.com/" },
    { name: "CEO Middle East", label: "Strategic Magazine Partner", logo: "https://media.konfhub.com/partners/2026/July/08/1783512987821-16d56648-8bd5-4876-b001-a9a1d6eff7ee.png", link: "https://www.ceo-middleeast.com/" },
    { name: "Entrepreneur Middle East", label: "Ecosystem Partner", logo: "https://media.konfhub.com/partners/2026/July/08/1783513010868-41bb7263-0633-448f-a0e2-8e06a8a15497.png", link: "https://mena.entrepreneur.com/" },
    { name: "Finance World Magazine", label: "Finance Magazine Partner", logo: "https://media.konfhub.com/partners/2026/July/08/1783513027938-f762dcea-3ce7-4128-86be-17e9d673f40f.png", link: "https://thefinanceworld.com/" },
    { name: "The Technology Express", label: "Technology Intelligence Partner", logo: "https://media.konfhub.com/partners/2026/July/08/1783513045920-fe1ec3a1-c94c-4bb1-bf7b-febfd3f05f4c.png", link: "https://thetechnologyexpress.com/" },
    { name: "Emirati Times", label: "Flagship Media Partner", logo: "https://media.konfhub.com/partners/2026/July/08/1783513061238-c17d767c-08a4-46c4-8c24-355badd86be5.png", link: "https://emiratitimes.com/" },
    { name: "GCC Business News", label: "Innovation Media Partner", logo: "https://media.konfhub.com/partners/2026/July/08/1783513079238-70894490-980a-4e02-b23e-5f1d13deeddf.png", link: "https://www.gccbusinessnews.com/" },
    { name: "Ecomonies.com", label: "Financial Intelligence Partner", logo: "https://media.konfhub.com/partners/2026/July/08/1783513093488-42110e29-db40-454a-8b79-143ba82bf596.png", link: "https://economies.com/" },
    { name: "zex PR", label: "Digital PR Distribution Partner", logo: "https://media.konfhub.com/partners/2026/July/08/1783513118953-2753d2ef-a576-48ac-b179-13589bfc19f6.png", link: "https://zexprwire.com/" },
    { name: "Banking News", label: "Global Ecosystem Partner", logo: "https://media.konfhub.com/partners/2026/July/08/1783513161437-5d86c804-40ae-4eca-adf9-58a4af744b8e.png", link: "https://bankingnews.com.np/" },
    { name: "Fast Company Middle East", label: "Media Partner", logo: "https://media.konfhub.com/partners/2026/July/08/1783513175868-841ec0fa-25fd-43c6-a9ed-c3796de47c25.png", link: "https://fastcompanyme.com/" },
    { name: "Euromoney", label: "Media Partner", logo: "https://media.konfhub.com/partners/2026/July/08/1783513192018-5f931329-a30f-4ba1-abab-9697f57f4e9a.png", link: "https://www.euromoney.com/" },
    { name: "MIT Sloan Middle East", label: "Media Partner", logo: "https://media.konfhub.com/partners/2026/July/08/1783513207787-3a2f94de-5f00-4879-bdfe-1a912ef92517.png", link: "https://www.mitsloanme.com/" },
    { name: "CEO Magazine", label: "Media Partner", logo: "https://media.konfhub.com/partners/2026/July/08/1783513222770-2c5a39d6-8261-42e7-a904-239e7d868ceb.png", link: "https://www.theceomagazine.com/" },
    { name: "Eye of Dubai", label: "Media Partner", logo: "https://media.konfhub.com/partners/2026/July/08/1783513241502-3e8f4ddd-9cd4-4685-be66-2d57732c34fc.png", link: "https://www.eyeofdubai.ae/" },
    { name: "FinTech.am", label: "Media Partner", logo: "https://media.konfhub.com/partners/2026/July/08/1783513259269-299243b5-a761-4303-8148-2020ccda81b5.png", link: "https://www.fintech.am/" },
    { name: "FinTech Review", label: "Media Partner", logo: "https://media.konfhub.com/partners/2026/July/08/1783513282167-75771508-28f5-4b58-956d-011c5926d516.png", link: "https://fintechreview.net/" },
    { name: "Eye of Riyadh", label: "Media Partner", logo: "https://media.konfhub.com/partners/2026/July/08/1783513300285-af1a806a-15d8-414f-a998-7890f6f5a4e8.png", link: "https://www.eyeofriyadh.com/" },
    { name: "The American Bazaar", label: "Media Partner", logo: "https://media.konfhub.com/partners/2026/July/08/1783513317455-44896074-ebf3-4540-a1ad-d76184f83f02.png", link: "https://americanbazaaronline.com/" },
    { name: "Middle East News 24/7", label: "Media Partner", logo: "https://media.konfhub.com/partners/2026/July/08/1783513330985-b6d27e8b-f263-4410-8ad8-61d36458b9e8.png", link: "https://menews247.com/" },
    { name: "Financial Freedom Today", label: "Media Partner", logo: "https://media.konfhub.com/partners/2026/July/08/1783513348936-730711e3-a7f4-4524-ab3c-5a5af272481b.png", link: "https://fifreedomtoday.com/" },
    { name: "Fintech News UAE", label: "Media Partner", logo: "https://media.konfhub.com/partners/2026/July/08/1783513366170-ce446ae0-98a6-4793-89d5-e95d2060ede4.png", link: "https://fintechnews.media/" },
    { name: "Starflare.ai", label: "Media Partner", logo: "https://media.konfhub.com/partners/2026/July/08/1783513385285-3ebef650-e231-4caf-b752-7073df5b2706.png", link: "https://www.starflare.ai/" },
    { name: "Breaking FinTech News", label: "Media Partner", logo: "https://media.konfhub.com/partners/2026/July/08/1783513421320-d15c74b2-73d2-4c7c-8aaf-4c7988abd95f.png", link: "https://breakingfintech.news/" },
    { name: "Coin Gabbar", label: "Media Partner", logo: "https://media.konfhub.com/partners/2026/July/08/1783513440502-b240f4fd-4689-45dd-8051-ac3d74fd2109.png", link: "https://www.coingabbar.com/" },
    { name: "FX Street", label: "Media Partner", logo: "https://media.konfhub.com/partners/2026/July/08/1783513457067-4c1ea2a5-3e31-4570-ae1f-31f30c970a7c.png", link: "https://www.fxstreet.com/" },
    { name: "Fintech News Egypt", label: "Media Partner", logo: "https://media.konfhub.com/partners/2026/July/08/1783513479866-0149fb76-64b9-4cb6-9a18-772f3ad2c9ee.png", link: "https://egypt.fintechnews.media/" },
    { name: "FinTech BoostUP", label: "Media Partner", logo: "https://media.konfhub.com/partners/2026/July/08/1783513498751-8afc9aa5-e611-4fee-9ee3-0bc3330aad20.png", link: "https://fintechboostup.com/" },
    { name: "FinTech Intel", label: "Media Partner", logo: "https://media.konfhub.com/partners/2026/July/08/1783513517433-dd73683b-c18a-446d-8031-482cd796bf2a.png", link: "https://fintech-intel.com/" },
    { name: "The Asian Banker", label: "Media Partner", logo: "https://media.konfhub.com/partners/2026/July/08/1783513536003-4ac61230-64d0-405c-bd87-3d82a569aee6.png", link: "https://www.theasianbanker.com/" },
    { name: "Fintech News Pakistan", label: "Media Partner", logo: "https://media.konfhub.com/partners/2026/July/08/1783513554665-90936134-2857-43f0-ba29-2cbc52252d28.png", link: "http://fintechnews.pk/" },
    { name: "Securities Finance Times", label: "Media Partner", logo: "https://media.konfhub.com/partners/2026/July/08/1783513584467-ef3172ac-bfc8-4202-847b-a2d5c414f740.png", link: "https://www.securitiesfinancetimes.com/" },
    { name: "FinTech Finance News", label: "Media Partner", logo: "https://media.konfhub.com/partners/2026/July/08/1783513600950-01354626-58c3-419d-8438-fc0f716d5d72.png", link: "https://www.ffnews.com" },
    { name: "Key Difference Wire", label: "Media Partner", logo: "https://media.konfhub.com/partners/2026/July/08/1783513620735-bbe0c231-e256-46b1-82a2-cdc1784aa950.png", link: "https://keydifference.com/wire/" },
    { name: "Financial IT", label: "Media Partner", logo: "https://media.konfhub.com/partners/2026/July/08/1783513640415-c1ec50cc-fe66-4ab7-a121-f091931d11ed.png", link: "https://financialit.net/" },
    { name: "Fintech News saudi Arabia", label: "Media Partner", logo: "https://media.konfhub.com/partners/2026/July/08/1783513658015-69ddd5c3-9733-4019-93cf-dd368e3029c4.png", link: "https://ksa.fintechnews.media/" },
    { name: "Digital Assets Edge", label: "Media Partner", logo: "https://media.konfhub.com/partners/2026/July/08/1783513680651-b12e8f03-5361-4c6d-937d-bdfd8775f0bc.png", link: "https://www.digitalassetsedge.com/" },
    { name: "Web3TV", label: "Media Partner", logo: "https://media.konfhub.com/partners/2026/July/08/1783513696585-fa985993-7086-4068-ba47-d1407e6b04ce.png", link: "https://web3.tv/" },
    { name: "Tech Revolt", label: "Media Partner", logo: "https://media.konfhub.com/partners/2026/July/08/1783513743383-5b59e9c6-a11a-4939-8984-d5d42ff04f0c.png", link: "https://techrevolt.news/" },
    { name: "Fintech News Qatar", label: "Media Partner", logo: "https://media.konfhub.com/partners/2026/July/08/1783513762783-5e11e9c1-bfaa-4440-bcc5-cd4fd7ea9d7c.png", link: "https://qatar.fintechnews.media/" },
    { name: "Cointelegraph", label: "Media Partner", logo: "https://media.konfhub.com/partners/2026/July/08/1783513783932-37a2d49b-6bba-4460-86d7-fdd8d3e479e7.png", link: "https://cointelegraph.com/" },
    { name: "Fintech News Europe", label: "Media Partner", logo: "https://media.konfhub.com/partners/2026/July/08/1783513810716-1b6969bf-9e76-4718-8e90-639e62c53ab9.png", link: "https://europe.fintechnews.media/" },
    { name: "FinTech Bloom", label: "Media Partner", logo: "https://media.konfhub.com/partners/2026/July/08/1783513825000-d63bbc1d-5492-4f68-95f9-a92cab473eef.png", link: "https://fintechbloom.com/" }
  ];

  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">
      
      {/* Dynamic style overrides to match the exact design in the image */}
      <style dangerouslySetInnerHTML={{__html: `
        .exact-media-card {
          background-color: #ffffff !important;
          border: 1.5px solid rgba(18, 232, 232, 0.45) !important;
          border-radius: 20px !important;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.02) !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        .exact-media-card:hover {
          border-color: #12e8e8 !important;
          box-shadow: 0 10px 25px -5px rgba(18, 232, 232, 0.25) !important;
          transform: translateY(-2px) !important;
        }
        .exact-title-label {
          color: #082028 !important;
          font-family: var(--font-sans, system-ui, sans-serif);
          font-weight: 700 !important;
        }
        .exact-header-text {
          color: #082028 !important;
          font-family: var(--font-sans, system-ui, sans-serif);
          font-weight: 800 !important;
        }
      `}} />

      <div className="max-w-[1240px] mx-auto px-6 relative z-10 w-full space-y-16">
        
        {/* Section Heading exactly as shown in screenshot */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl exact-header-text tracking-wide">
            Media Partners
          </h2>
          <div className="w-[200px] h-[3px] bg-[#12e8e8] mx-auto rounded-full" />
        </div>

        {/* 3-Column Grid matching screenshot layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((item, itemIdx) => (
            <motion.a
              key={itemIdx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (itemIdx % 3) * 0.08 }}
              className="exact-media-card h-[210px] md:h-[230px] p-8 flex flex-col justify-between items-center cursor-pointer block"
            >
              {/* Partner Label at the top */}
              <div className="w-full text-center">
                <span className="text-[13px] md:text-[14px] exact-title-label tracking-wide block uppercase leading-snug">
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
