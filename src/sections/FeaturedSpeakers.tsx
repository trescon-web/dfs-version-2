"use client";
import { getAssetPath } from "@/utils/assetPath";
import { useState, useEffect, useRef } from "react";

interface Speaker {
  name: string;
  title: string;
  company: string;
  badge: string;
  img: string;
  logo: string;
}

const speakers: Speaker[] = [
  {
    name: "H.E. Essa Kazim",
    title: "Governor",
    company: "Dubai International Financial Centre",
    badge: "UAE",
    img: getAssetPath("/assets/speaker_he_essa_kazim.png"),
    logo: getAssetPath("/assets/difc-logo-dark.svg")
  },
  {
    name: "Alex Manson",
    title: "CEO",
    company: "SC Ventures",
    badge: "SGP",
    img: getAssetPath("/assets/speaker_alex_manson_sc_ventures.png"),
    logo: getAssetPath("/assets/logo_scventures_real.svg")
  },
  {
    name: "Bjørn Sibbern",
    title: "Global Head Exchanges",
    company: "SIX Swiss Exchange",
    badge: "SUI",
    img: getAssetPath("/assets/speaker_bjorn_sibbern_swiss_exchange.png"),
    logo: getAssetPath("/assets/logo_six_real.svg")
  },
  {
    name: "Shri Ashishkumar Chauhan",
    title: "Managing Director & CEO",
    company: "National Stock Exchange of India (NSE)",
    badge: "IND",
    img: getAssetPath("/assets/speaker_shri_ashishkumar_chauhan_national_stock_exchange_of_india_(nse).JPG"),
    logo: getAssetPath("/assets/logo_nse_real.svg")
  },
  {
    name: "Kentaro Okuda",
    title: "President & Group CEO",
    company: "Nomura Holdings, Inc.",
    badge: "JPN",
    img: getAssetPath("/assets/speaker_kentaro_okuda_nomura_holdings_inc.jpg"),
    logo: getAssetPath("/assets/logo_nomura_real.svg")
  },
  {
    name: "Fadi Ghandour",
    title: "Executive Chairman",
    company: "Wamda Group",
    badge: "JOR",
    img: getAssetPath("/assets/speaker_fadi_ghandour_wamda.jpg"),
    logo: getAssetPath("/assets/logo_wamda_real.svg")
  },
  {
    name: "Hosam Arab",
    title: "CEO & Co-Founder",
    company: "Tabby",
    badge: "UAE",
    img: getAssetPath("/assets/speaker_hosam_arab_tabby.png"),
    logo: getAssetPath("/assets/logo_tabby_real.svg")
  },
  {
    name: "Noel Quinn",
    title: "Board Member",
    company: "Julius Baer",
    badge: "SUI",
    img: getAssetPath("/assets/speaker_noel_quinn_julius_baer.png"),
    logo: getAssetPath("/assets/logo_juliusbaer_real.svg")
  }
];

export default function FeaturedSpeakers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = speakers.length;

  const isMouseDownRef = useRef(false);
  const startXRef = useRef(0);
  const hasSwipedRef = useRef(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    isMouseDownRef.current = true;
    startXRef.current = e.clientX;
    hasSwipedRef.current = false;
    setIsPaused(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDownRef.current || hasSwipedRef.current) return;
    const diffX = e.clientX - startXRef.current;
    if (diffX < -30) {
      handleNext();
      hasSwipedRef.current = true;
    } else if (diffX > 30) {
      handlePrev();
      hasSwipedRef.current = true;
    }
  };

  const handleMouseUp = () => {
    isMouseDownRef.current = false;
    setIsPaused(false);
  };

  const handleMouseLeave = () => {
    isMouseDownRef.current = false;
    setIsPaused(false);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 2000); // Slide every 2 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isPaused, total]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handleCardClick = (index: number) => {
    if (currentIndex !== index) {
      setCurrentIndex(index);
    }
  };

  const getSlideClassName = (index: number) => {
    const diff = (index - currentIndex + total) % total;
    if (diff === 0) return "carousel-3d-card active";
    if (diff === 1) return "carousel-3d-card next";
    if (diff === 2) return "carousel-3d-card far-next";
    if (diff === 3) return "carousel-3d-card far-far-next";
    if (diff === total - 1) return "carousel-3d-card prev";
    if (diff === total - 2) return "carousel-3d-card far-prev";
    if (diff === total - 3) return "carousel-3d-card far-far-prev";
    return "carousel-3d-card hidden-slide";
  };

  return (
    <section id="headliners" className="headliners-section" aria-label="Summit Speakers">
      
      <div className="section-container">
        
        <div className="headliners-header">
          <div className="headliners-title-group">
            <span className="headliners-eyebrow">Dubai FinTech Summit</span>
            <h2 className="headliners-title">The headliners</h2>
          </div>
        </div>

        {/* 3D Carousel Wrapper with Mouse Drag Support */}
        <div 
          className="carousel-3d-container cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={() => setIsPaused(true)}
        >
          {/* Floating Navigation Buttons */}
          <button onClick={handlePrev} className="carousel-nav-btn btn-prev" aria-label="Previous Speaker">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <button onClick={handleNext} className="carousel-nav-btn btn-next" aria-label="Next Speaker">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>

          <div className="carousel-3d-track">
            {speakers.map((speaker, idx) => (
              <div
                key={idx}
                className={getSlideClassName(idx)}
                data-index={idx}
                onClick={() => handleCardClick(idx)}
              >
                <div className="card-image-panel">
                  <img src={speaker.img} alt={speaker.name} />
                  <div className="card-badge-top">{speaker.badge}</div>
                  <div className="speaker-logo-overlay">
                    <img src={speaker.logo} alt={speaker.company} className="speaker-company-logo" />
                  </div>
                </div>
                <div className="card-info-panel">
                  <h3 className="speaker-name">{speaker.name}</h3>
                  <p className="speaker-title">{speaker.title}</p>
                  <p className="speaker-company">{speaker.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="speakers-footer">
          <a href="/speakers" className="btn-outline-cyan">
            <span>View all speakers</span>
            <span className="arrow-circle">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}
