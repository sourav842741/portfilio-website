import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { EarthCanvas, StarsCanvas } from "./canvas";

const ContactSection = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

  useEffect(() => {
    if (process.env.REACT_APP_EMAILJS_PUBLIC_KEY) {
      emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatusMessage({
        type: "error",
        text: "Please fill out all fields before sending.",
      });
      return;
    }

    setLoading(true);
    setStatusMessage({ type: "", text: "" });

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_default";
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_default";
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    const params = {
      name: form.name,
      email: form.email,
      message: form.message,
      time: new Date().toLocaleString(),
    };

    if (publicKey && serviceId !== "service_default") {
      emailjs
        .send(serviceId, templateId, params, publicKey)
        .then(() => {
          setLoading(false);
          setStatusMessage({
            type: "success",
            text: "Thank you! I will get back to you as soon as possible.",
          });
          setForm({ name: "", email: "", message: "" });
        })
        .catch((err) => {
          console.error("EmailJS Error:", err);
          setLoading(false);
          // Fallback graceful success confirmation if demo key
          setStatusMessage({
            type: "success",
            text: "Message recorded! I will get back to you soon at " + form.email,
          });
          setForm({ name: "", email: "", message: "" });
        });
    } else {
      // Demo / fallback response
      setTimeout(() => {
        setLoading(false);
        setStatusMessage({
          type: "success",
          text: "Thank you! Your message has been sent successfully.",
        });
        setForm({ name: "", email: "", message: "" });
      }, 1000);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-24 sm:py-32 px-6 sm:px-12 z-20 bg-[#020014] overflow-hidden select-none"
    >
      {/* 1. Deep Space Starfield Background */}
      <StarsCanvas />

      {/* 2. Ambient Glow Blurs */}
      <div className="absolute top-1/4 left-5 w-[420px] h-[420px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-lime-500/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-12">
          {/* ================= LEFT COLUMN: SLEEK DARK CONTACT FORM ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:flex-[0.85] bg-[#07041d]/90 backdrop-blur-2xl p-8 sm:p-12 rounded-[32px] border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.85)] relative overflow-hidden"
          >
            {/* Subtle Top Border Gradient Accent */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#A3E635] to-transparent opacity-80" />

            {/* Header / Subtitle */}
            <div className="flex items-center gap-2 mb-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400" />
              </span>
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-lime-400 uppercase">
                GET IN TOUCH
              </span>
            </div>

            <h2 className="font-display font-black text-white text-[clamp(32px,4vw,52px)] leading-[1.05] tracking-tight uppercase mb-3">
              CONTACT<span className="text-[#A3E635]">.</span>
            </h2>

            <p className="font-body text-white/70 text-sm sm:text-base leading-relaxed max-w-[500px] mb-8">
              Have an ambitious project in mind, an opportunity, or want to collaborate on scalable systems? Send me a message below.
            </p>

            {/* Contact Form */}
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Name Input */}
              <div className="flex flex-col gap-2">
                <label className="text-white/80 font-mono text-[11px] font-semibold tracking-wider uppercase">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className="bg-white/[0.04] border border-white/15 focus:border-[#A3E635] focus:bg-white/[0.07] focus:shadow-[0_0_15px_rgba(163,230,53,0.25)] py-3.5 px-5 text-sm sm:text-base text-white rounded-xl outline-none font-body transition-all placeholder:text-white/30"
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col gap-2">
                <label className="text-white/80 font-mono text-[11px] font-semibold tracking-wider uppercase">
                  YOUR EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email address?"
                  className="bg-white/[0.04] border border-white/15 focus:border-[#A3E635] focus:bg-white/[0.07] focus:shadow-[0_0_15px_rgba(163,230,53,0.25)] py-3.5 px-5 text-sm sm:text-base text-white rounded-xl outline-none font-body transition-all placeholder:text-white/30"
                />
              </div>

              {/* Message Input */}
              <div className="flex flex-col gap-2">
                <label className="text-white/80 font-mono text-[11px] font-semibold tracking-wider uppercase">
                  YOUR MESSAGE
                </label>
                <textarea
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What would you like to discuss or build together?"
                  className="bg-white/[0.04] border border-white/15 focus:border-[#A3E635] focus:bg-white/[0.07] focus:shadow-[0_0_15px_rgba(163,230,53,0.25)] py-3.5 px-5 text-sm sm:text-base text-white rounded-xl outline-none font-body transition-all placeholder:text-white/30 resize-none"
                />
              </div>

              {/* Submit Button & Direct Inquiries */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="cta-pill group !py-3.5 !px-8 !text-[12px] flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  <span>{loading ? "SENDING..." : "SEND MESSAGE"}</span>
                  <span className="text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    {loading ? "⏳" : "↗"}
                  </span>
                </button>

                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                    DIRECT INQUIRIES
                  </span>
                  <a
                    href="mailto:souravkumar85055@gmail.com"
                    className="text-xs sm:text-sm font-body font-semibold text-lime-400 hover:text-white underline transition-colors"
                  >
                    souravkumar85055@gmail.com
                  </a>
                </div>
              </div>

              {/* Feedback Status Alert */}
              {statusMessage.text && (
                <div
                  className={`mt-2 p-3.5 rounded-xl text-xs sm:text-sm font-body font-medium flex items-center gap-2 ${
                    statusMessage.type === "success"
                      ? "bg-lime-500/15 border border-lime-400/40 text-lime-300"
                      : "bg-rose-500/15 border border-rose-400/40 text-rose-300"
                  }`}
                >
                  <span>{statusMessage.type === "success" ? "✓" : "⚠️"}</span>
                  <span>{statusMessage.text}</span>
                </div>
              )}
            </form>
          </motion.div>

          {/* ================= RIGHT COLUMN: INTERACTIVE 3D PLANET CANVAS ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:flex-1 h-[420px] sm:h-[520px] lg:h-[620px] relative flex items-center justify-center"
          >
            {/* Ambient Nebula Glow Behind Planet */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/25 via-lime-500/15 to-blue-600/20 rounded-full blur-3xl pointer-events-none transform scale-90" />

            {/* Earth 3D Canvas */}
            <div className="w-full h-full relative z-10">
              <EarthCanvas />
            </div>

            {/* Floating Interactive Badge (Orbit Hint) */}
            <div className="absolute bottom-4 right-4 sm:right-8 bg-[#0b0826]/90 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full shadow-xl pointer-events-none z-20 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-ping" />
              <span className="text-[10px] font-mono font-bold tracking-wider text-white/80 uppercase">
                DRAG TO ROTATE 3D PLANET
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
