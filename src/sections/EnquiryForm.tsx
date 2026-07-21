"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, ShieldCheck } from "lucide-react";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    enquiryType: "sponsorship",
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    jobTitle: "",
    company: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email) {
      alert("Please complete the required fields.");
      return;
    }
    // Simulate API request
    setSubmitted(true);
  };

  return (
    <section className="relative pb-28 bg-[#02090f]">
      
      {/* Local CSS Overrides */}
      <style dangerouslySetInnerHTML={{__html: `
        .enq-label {
          color: #c5a880 !important;
          font-family: system-ui, -apple-system, sans-serif !important;
          font-size: 11px !important;
          font-weight: 700 !important;
          letter-spacing: 0.1em !important;
          text-transform: uppercase !important;
        }
        .enq-input {
          color: #ffffff !important;
          font-family: system-ui, -apple-system, sans-serif !important;
          background: transparent !important;
          border: none !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
          font-size: 14px !important;
          padding-bottom: 8px !important;
          width: 100% !important;
        }
        .enq-input:focus {
          outline: none !important;
          border-bottom: 1px solid #12e8e8 !important;
        }
        .enq-input::placeholder {
          color: rgba(255, 255, 255, 0.25) !important;
        }
        .enq-radio-btn {
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          background: rgba(255, 255, 255, 0.02) !important;
          color: rgba(255, 255, 255, 0.7) !important;
          font-family: system-ui, -apple-system, sans-serif !important;
          font-size: 12px !important;
          font-weight: 600 !important;
          transition: all 0.3s ease !important;
          cursor: pointer !important;
        }
        .enq-radio-btn.active {
          border-color: #12e8e8 !important;
          background: rgba(18, 232, 232, 0.05) !important;
          color: #ffffff !important;
        }
      `}} />

      <div className="max-w-3xl mx-auto px-6 relative z-10 w-full">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="p-8 md:p-10 rounded-3xl backdrop-blur-xl bg-[#081824]/40 border border-white/5 shadow-2xl relative overflow-hidden text-left"
            >
              {/* Card Hover Glow effect */}
              <div className="absolute -inset-px bg-gradient-to-br from-transparent via-transparent to-[#12e8e8]/5 rounded-3xl pointer-events-none" />

              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                
                {/* 1. Enquiry Type Options */}
                <div className="space-y-3">
                  <span className="enq-label block">I am interested in</span>
                  <div className="flex flex-wrap gap-2.5 pt-1">
                    {[
                      { id: "sponsorship", label: "Sponsorship" },
                      { id: "exhibiting", label: "Exhibiting" },
                      { id: "speaking", label: "Speaking" },
                      { id: "delegate", label: "Delegate Pass" },
                      { id: "general", label: "General Enquiry" },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, enquiryType: opt.id })}
                        className={`enq-radio-btn px-4 py-2 rounded-xl ${
                          formData.enquiryType === opt.id ? "active" : ""
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Personal Grid Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* First Name */}
                  <div className="space-y-2">
                    <span className="enq-label block">First Name *</span>
                    <input
                      type="text"
                      required
                      placeholder="Jane"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="enq-input"
                    />
                  </div>
                  {/* Last Name */}
                  <div className="space-y-2">
                    <span className="enq-label block">Last Name</span>
                    <input
                      type="text"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="enq-input"
                    />
                  </div>
                </div>

                {/* 3. Contact Grid Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* Business Email */}
                  <div className="space-y-2">
                    <span className="enq-label block">Business Email *</span>
                    <input
                      type="email"
                      required
                      placeholder="jane.doe@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="enq-input"
                    />
                  </div>
                  {/* Mobile Number */}
                  <div className="space-y-2">
                    <span className="enq-label block">Mobile Number</span>
                    <input
                      type="tel"
                      placeholder="+971 50 123 4567"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="enq-input"
                    />
                  </div>
                </div>

                {/* 4. Company Grid Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* Job Title */}
                  <div className="space-y-2">
                    <span className="enq-label block">Job Title</span>
                    <input
                      type="text"
                      placeholder="Chief Technology Officer"
                      value={formData.jobTitle}
                      onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                      className="enq-input"
                    />
                  </div>
                  {/* Company Name */}
                  <div className="space-y-2">
                    <span className="enq-label block">Company Name</span>
                    <input
                      type="text"
                      placeholder="FinTech Innovations Ltd"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="enq-input"
                    />
                  </div>
                </div>

                {/* 5. Message box */}
                <div className="space-y-2">
                  <span className="enq-label block">Message / Inquiry Details</span>
                  <textarea
                    rows={4}
                    placeholder="Provide details about your query or partnership objectives..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="enq-input resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-4 text-center">
                  <button
                    type="submit"
                    className="btn-unified inline-flex items-center space-x-2.5"
                  >
                    <span>Send Enquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>

              </form>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-10 rounded-3xl backdrop-blur-xl bg-[#081824]/40 border border-white/5 shadow-2xl relative overflow-hidden text-center flex flex-col items-center space-y-6"
            >
              <div className="p-4 rounded-full bg-[#12e8e8]/5 border border-[#12e8e8]/20 text-[#12e8e8] mb-2 animate-pulse">
                <ShieldCheck className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">Enquiry Received</h3>
              <p className="text-white/60 leading-relaxed max-w-md text-sm font-semibold">
                Thank you, **{formData.firstName}**. Your enquiry details have been transmitted to the host committee. An advisory delegate will contact you shortly at **{formData.email}**.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-unified-outline"
                >
                  Submit Another Form
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
