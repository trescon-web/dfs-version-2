"use client";

import React, { useState } from "react";

export default function JoinNetwork() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      setSubmitted(true);
      // Reset form values
      setEmail("");
      setName("");
    }
  };

  return (
    <section className="join-network-section px-4 sm:px-6 md:px-12" aria-label="Join our Exclusive Network">
      <div className="section-container join-network-container max-w-7xl mx-auto w-full">
        <div className="join-network-content">
          <h2 className="join-network-title">Get access to exclusive discounts and announcements</h2>
          <p className="join-network-desc">Join the Dubai Fintech Summit network now for updates, speakers news, and early access to offers.</p>
        </div>

        <div className="join-network-form-wrapper">
          {submitted ? (
            <div className="join-success-message">
              <span className="success-icon">✓</span>
              <div>
                <h3>Thank you for joining!</h3>
                <p>You've successfully subscribed to our exclusive network updates and offer announcements.</p>
              </div>
            </div>
          ) : (
            <form className="join-network-form" id="join-network-form" onSubmit={handleSubmit}>
              <div className="form-grid-row">
                <div className="form-group">
                  <label htmlFor="network-email" className="form-label">Email address *</label>
                  <input
                    type="email"
                    id="network-email"
                    name="email"
                    className="form-input"
                    placeholder="user@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="network-name" className="form-label">First name *</label>
                  <input
                    type="text"
                    id="network-name"
                    name="name"
                    className="form-input"
                    placeholder="First name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group button-group">
                  <span className="button-label-shim">&nbsp;</span>
                  <button type="submit" className="network-submit-btn">
                    <span>Join our network</span>
                    <span className="arrow-circle">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
              <p className="form-disclaimer">
                You may withdraw your consent at any time. Learn more on our{" "}
                <a href="#" className="disclaimer-link">Privacy Policy</a> and{" "}
                <a href="#" className="disclaimer-link">T&Cs</a>.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
