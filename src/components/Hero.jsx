import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const normX = (e.clientX / innerWidth - 0.5) * 2;
      const normY = (e.clientY / innerHeight - 0.5) * 2;
      setTilt({
        x: normX * 10,
        y: -normY * 10,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const techTags = [
    "Next.js 14",
    "React.js",
    "Node.js",
    "Microservices",
    "Redis",
    "RabbitMQ",
    "Docker",
    "Java (DSA)",
  ];

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen w-full flex items-center justify-center pt-24 pb-16 px-6 sm:px-12 bg-[#020014] overflow-hidden select-none z-10">
      {/* Ambient background glows and mesh lights */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-fuchsia-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Grid Pattern Background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-[1360px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-20">
        {/* Left Side: Headline, Subtitle, Tech Pills, and Action Buttons */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-6 backdrop-blur-md"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-bold tracking-[0.18em] text-emerald-300 uppercase font-body">
              AVAILABLE FOR NEW OPPORTUNITIES
            </span>
          </motion.div>

          {/* Giant Headline: Hi, I'm Sourav */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-[clamp(44px,6.2vw,92px)] tracking-[-0.03em] leading-[1.05] text-white uppercase mb-6"
          >
            HI, I'M{" "}
            <span className="silver-text tracking-tight">SOURAV</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-white/80 text-base sm:text-lg leading-relaxed max-w-[620px] mb-8"
          >
            <strong className="text-white font-semibold">
              Full-Stack & Distributed Systems Developer
            </strong>{" "}
            who crafts scalable web applications, event-driven microservices architectures, and solves real problems with clean, performant code.
          </motion.p>

          {/* Tech Stack Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-2 mb-10 max-w-[620px]"
          >
            {techTags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-body font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/90 hover:border-purple-500/50 hover:bg-purple-500/10 transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            {/* View Projects CTA */}
            <a href="#projects" className="cta-pill group !py-3 !px-7 !text-[13px]">
              <span>VIEW MY WORK</span>
              <span className="text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>

            {/* View CV Button */}
            <a
              href="https://drive.google.com/file/d/1EGMEh7h_TvLSgVGKA04deElsou3ROKk-/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white font-body text-[13px] font-bold px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-300 uppercase tracking-wider"
            >
              <span>VIEW CV</span>
              <span>📄</span>
            </a>

            {/* GitHub Button */}
            <a
              href="https://github.com/sourav842741"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white font-body text-[13px] font-bold px-4 py-3 rounded-full hover:bg-white/5 transition-colors duration-300 uppercase tracking-wider"
            >
              <span>GITHUB</span>
              <span>↗</span>
            </a>
          </motion.div>
        </div>

        {/* Right Side: Interactive 3D Showcase Card with Sourav's Real Photo */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
            style={{
              transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
              transformStyle: "preserve-3d",
              transition: "transform 0.15s ease-out",
            }}
          >
            {/* Glowing Backdrop behind Photo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 to-pink-600/30 rounded-[32px] blur-2xl transform scale-105 pointer-events-none" />

            {/* Photo Container Frame */}
            <div className="relative w-[280px] sm:w-[320px] rounded-[30px] p-3 bg-gradient-to-b from-white/20 via-white/5 to-white/10 border border-white/20 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden">
              <div className="w-full h-[360px] sm:h-[400px] rounded-[24px] overflow-hidden bg-black/60 relative">
                <img
                  src="/assets/sourav_profile.png"
                  alt="Sourav Kumar"
                  className="w-full h-full object-cover object-top"
                />

                {/* Subtle vignette shadow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020014] via-transparent to-transparent opacity-60" />

                {/* Name Badge on Photo Bottom */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-black/75 backdrop-blur-md border border-white/15 flex items-center justify-between">
                  <div>
                    <span className="font-display text-white text-sm tracking-wider block">
                      SOURAV KUMAR
                    </span>
                    <span className="text-[10px] text-purple-300 font-body font-semibold tracking-wider uppercase block">
                      FULL-STACK & SYSTEMS
                    </span>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                </div>
              </div>
            </div>

            {/* Floating Orbiting Badge 1: 10+ Projects */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-5 -right-6 sm:-right-8 bg-[#0b0826]/90 backdrop-blur-xl border border-white/20 px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-2.5 z-30"
            >
              <span className="text-base">🚀</span>
              <div className="flex flex-col">
                <span className="font-display text-white text-xs tracking-wider">
                  10+ PROJECTS
                </span>
                <span className="text-[9px] text-white/50 uppercase font-body font-semibold">
                  PRODUCTION READY
                </span>
              </div>
            </motion.div>

            {/* Floating Orbiting Badge 2: 8.1 CGPA */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-6 sm:-left-8 bg-[#0b0826]/90 backdrop-blur-xl border border-white/20 px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-2.5 z-30"
            >
              <span className="text-base">⭐</span>
              <div className="flex flex-col">
                <span className="font-display text-amber-300 text-xs tracking-wider">
                  8.1 CGPA (CSE)
                </span>
                <span className="text-[9px] text-white/50 uppercase font-body font-semibold">
                  ACADEMIC EXCELLENCE
                </span>
              </div>
            </motion.div>

            {/* Floating Orbiting Badge 3: Distributed Systems */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="hidden sm:flex absolute top-1/2 -right-12 translate-y-1/2 bg-[#0b0826]/90 backdrop-blur-xl border border-white/20 px-3.5 py-2 rounded-2xl shadow-2xl items-center gap-2 z-30"
            >
              <span className="text-sm">⚡</span>
              <span className="font-display text-xs text-purple-300 tracking-wider">
                MICROSERVICES
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Mouse Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
        <a href="#customers" className="flex flex-col items-center">
          <div className="w-5 h-8 rounded-full border-2 border-white/30 flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-purple-400 rounded-full"
            />
          </div>
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/50 font-body mt-1">
            SCROLL
          </span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
