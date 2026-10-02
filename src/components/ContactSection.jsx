import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill out all fields.");
      return;
    }
    setStatus("Thank you! Your message has been received.");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus(""), 5000);
  };

  return (
    <section
      id="contact"
      className="stacked-section stacked-section-light relative py-28 sm:py-36 px-6 sm:px-12 z-70 bg-[#EEF1F4] overflow-hidden select-none"
    >
      {/* Floating 3D Decor 1: Purple Glossy Blob at left edge (lower) */}
      <div className="absolute -bottom-8 -left-8 sm:left-4 w-[120px] sm:w-[170px] lg:w-[220px] pointer-events-none z-10">
        <div className="animate-float">
          <img
            src="/assets/purple_blob.jpg"
            alt="Purple 3D Blob"
            className="w-full h-auto object-contain rounded-3xl mix-blend-multiply opacity-90 shadow-2xl"
          />
        </div>
      </div>

      {/* Floating 3D Decor 2: Lime/Yellow Lightning Bolt at top-right */}
      <div className="absolute top-8 right-2 sm:right-10 w-[90px] sm:w-[130px] lg:w-[170px] pointer-events-none z-10">
        <div className="animate-float-delayed">
          <img
            src="/assets/lime_lightning.jpg"
            alt="Lime Lightning 3D"
            className="w-full h-auto object-contain rounded-3xl mix-blend-multiply opacity-90 shadow-2xl"
          />
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start relative z-20">
        {/* Left Column: Heading LET'S GET IN TOUCH (3 lines, black display font) + Email */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <h2 className="font-display font-black text-[#0A0A0A] text-[clamp(40px,5.5vw,76px)] leading-[0.95] tracking-tight uppercase mb-8">
              LET'S
              <br />
              GET IN
              <br />
              TOUCH
            </h2>

            <p className="font-body text-[#6B7280] text-sm sm:text-base max-w-[420px] mb-8 leading-relaxed">
              Have an ambitious 3D project or want to collaborate on next-generation digital experiences? Drop me a message anytime.
            </p>
          </div>

          <div className="pt-4">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#6B7280] block font-body mb-2">
              DIRECT INQUIRIES
            </span>
            <a
              href="mailto:sourav842741@gmail.com"
              className="font-body font-bold text-lg sm:text-2xl text-[#0A0A0A] underline hover:text-purple-600 transition-colors duration-200 tracking-wide"
            >
              sourav842741@gmail.com
            </a>
          </div>
        </div>

        {/* Right Column: Minimal Underline-style Form */}
        <div className="lg:col-span-6 bg-white/70 backdrop-blur-md p-8 sm:p-12 rounded-[28px] border border-black/5 shadow-xl">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-8">
            {/* Input: Name */}
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="name"
                className="font-body text-[11px] font-bold tracking-[0.2em] text-[#6B7280] uppercase"
              >
                YOUR NAME
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                className="bg-transparent border-b-2 border-gray-300 focus:border-[#6D28D9] py-3 text-base text-[#0A0A0A] font-body outline-none transition-colors placeholder:text-gray-400"
              />
            </div>

            {/* Input: Email */}
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="email"
                className="font-body text-[11px] font-bold tracking-[0.2em] text-[#6B7280] uppercase"
              >
                YOUR EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="jane@example.com"
                className="bg-transparent border-b-2 border-gray-300 focus:border-[#6D28D9] py-3 text-base text-[#0A0A0A] font-body outline-none transition-colors placeholder:text-gray-400"
              />
            </div>

            {/* Input: Message */}
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="message"
                className="font-body text-[11px] font-bold tracking-[0.2em] text-[#6B7280] uppercase"
              >
                PROJECT DETAILS
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your timeline, vision, and scope..."
                className="bg-transparent border-b-2 border-gray-300 focus:border-[#6D28D9] py-3 text-base text-[#0A0A0A] font-body outline-none transition-colors placeholder:text-gray-400 resize-none"
              />
            </div>

            {/* Submit Pill Button */}
            <div className="pt-2 flex items-center justify-between">
              <button
                type="submit"
                className="cta-pill-light group inline-flex items-center gap-3"
              >
                <span>SEND MESSAGE</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </button>

              {status && (
                <span className="font-body text-xs font-semibold text-purple-700 animate-fade-in">
                  {status}
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
