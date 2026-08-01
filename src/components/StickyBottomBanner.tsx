"use client";
import { getAssetPath } from "@/utils/assetPath";
import React, { useState, useEffect } from 'react';
import { ArrowUpRight, X } from 'lucide-react';

export default function StickyBottomBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 250);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isDismissed) return null;

  return (
    <>
      <style>{`
        #global-sticky-bottom-banner {
          background-color: #ffffff !important;
          background: #ffffff !important;
          color: #0f172a !important;
          border-top: 3px solid #12e9e9 !important;
          box-shadow: 0 -8px 30px rgba(0, 0, 0, 0.15) !important;
          position: fixed !important;
          bottom: 0 !important;
          left: 0 !important;
          right: 0 !important;
          width: 100% !important;
          z-index: 99999 !important;
          padding: 10px 16px !important;
        }
        #global-sticky-bottom-banner h4 {
          color: #0f172a !important;
        }
        #global-sticky-bottom-banner p {
          color: #475569 !important;
        }
        #global-sticky-bottom-banner .close-btn-highlight:hover {
          background-color: #12e9e9 !important;
          color: #030d16 !important;
          transform: scale(1.08);
        }
      `}</style>

      <div
        id="global-sticky-bottom-banner"
        style={{
          display: isVisible ? 'block' : 'none',
          backgroundColor: '#ffffff',
          background: '#ffffff',
          color: '#0f172a',
          borderTop: '3px solid #12e9e9',
          boxShadow: '0 -8px 30px rgba(0, 0, 0, 0.15)',
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 99999,
          padding: '10px 16px',
        }}
      >
        <div style={{ maxWidth: '80rem', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px', background: '#ffffff', backgroundColor: '#ffffff' }}>
          
          {/* Left Promo: Early Bird */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: '1 1 auto', minWidth: 0 }}>
            {/* Early Bird Badge */}
            <div style={{ backgroundColor: '#dff9f9', color: '#0f766e', border: '1px solid #a5f3fc', borderRadius: '9999px', padding: '4px 10px', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0, fontFamily: 'monospace' }}>
              <span style={{ width: '6px', height: '6px', backgroundColor: '#0f766e', borderRadius: '50%', display: 'inline-block' }} />
              <span>Early Bird</span>
            </div>
            
            {/* Headline & Description */}
            <div style={{ textAlign: 'left', minWidth: 0 }}>
              <h4 style={{ color: '#0f172a', margin: 0, fontWeight: 800, fontSize: '13px', letterSpacing: '-0.01em', lineHeight: 1.3 }}>
                Save 20% on Passes
              </h4>
              <p style={{ color: '#475569', margin: 0, fontWeight: 500, fontSize: '10.5px', letterSpacing: '-0.01em', lineHeight: 1.3, marginTop: '2px' }}>
                Secure your spot at the best rates before prices increase.
              </p>
            </div>

            {/* Register Now Button */}
            <a
              href={getAssetPath("/get-involved/#buy-tickets")}
              style={{ backgroundColor: '#12e9e9', color: '#030d16', padding: '6px 16px', fontFamily: 'monospace', fontSize: '10.5px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0, textDecoration: 'none', whiteSpace: 'nowrap' }}
            >
              <span>Register Now</span>
              <ArrowUpRight style={{ width: '14px', height: '14px' }} />
            </a>
          </div>

          {/* Vertical Separator — hidden on mobile */}
          <div style={{ width: '1px', height: '28px', backgroundColor: '#cbd5e1', flexShrink: 0 }} className="hidden md:block" />

          {/* Right Promo & Highlighted Close Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: '1 1 auto', minWidth: 0, justifyContent: 'flex-end' }}>
            {/* Sponsorship Badge */}
            <div style={{ backgroundColor: '#e0f2fe', color: '#0369a1', border: '1px solid #bae6fd', borderRadius: '9999px', padding: '4px 10px', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0, fontFamily: 'monospace' }}>
              <span style={{ width: '6px', height: '6px', backgroundColor: '#0369a1', borderRadius: '50%', display: 'inline-block' }} />
              <span>Sponsorship</span>
            </div>
            
            {/* Headline & Description */}
            <div style={{ textAlign: 'left', minWidth: 0 }}>
              <h4 style={{ color: '#0f172a', margin: 0, fontWeight: 800, fontSize: '13px', letterSpacing: '-0.01em', lineHeight: 1.3 }}>
                Sponsorship Opportunities
              </h4>
              <p style={{ color: '#475569', margin: 0, fontWeight: 500, fontSize: '10.5px', letterSpacing: '-0.01em', lineHeight: 1.3, marginTop: '2px' }}>
                Elevate your brand presence and connect with 8,000+ C-level delegates.
              </p>
            </div>

            {/* Enquire Now Button */}
            <a
              href={getAssetPath("/general-enquiry")}
              style={{ backgroundColor: '#ffffff', color: '#0f172a', border: '1px solid #cbd5e1', padding: '6px 14px', fontFamily: 'monospace', fontSize: '10.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0, textDecoration: 'none', whiteSpace: 'nowrap' }}
            >
              <span>Enquire Now</span>
              <span style={{ width: '16px', height: '16px', backgroundColor: '#030d16', color: '#ffffff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', flexShrink: 0 }}>
                <ArrowUpRight style={{ width: '12px', height: '12px' }} />
              </span>
            </a>

            {/* Highlighted Close Button on Far Right */}
            <button
              onClick={() => setIsDismissed(true)}
              className="close-btn-highlight"
              style={{
                backgroundColor: '#0f172a',
                color: '#ffffff',
                border: 'none',
                borderRadius: '50%',
                width: '26px',
                height: '26px',
                minWidth: '26px',
                minHeight: '26px',
                padding: 0,
                margin: 0,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                flexShrink: 0,
                transition: 'all 0.2s ease',
                marginLeft: '6px',
                boxShadow: '0 2px 8px rgba(15, 23, 42, 0.2)',
              }}
              title="Close Banner"
              aria-label="Close Banner"
            >
              <X style={{ width: '14px', height: '14px', strokeWidth: 2.5, display: 'block', flexShrink: 0 }} />
            </button>
          </div>

        </div>
      </div>
    </>
  );
}
