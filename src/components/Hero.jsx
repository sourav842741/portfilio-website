import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiReact, SiNodedotjs, SiNextdotjs, SiDocker, SiRedis } from "react-icons/si";
import { FaJava } from "react-icons/fa";

// Stable list of animated roles
const ROLES = [
  "DEVELOPER",
  "ENGINEER",
  "ARCHITECT",
  "FULL-STACK DEV",
  "PROBLEM SOLVER",
];

// Isolated High-Performance Typewriter Component (Zero Parent Re-render Lag)
const TypewriterRole = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("DEVELOPER");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullWord = ROLES[roleIndex];
    let timer;

    if (!isDeleting) {
      // Natural typing cadence (90ms per letter)
      if (displayedText.length < fullWord.length) {
        timer = setTimeout(() => {
          setDisplayedText(fullWord.slice(0, displayedText.length + 1));
        }, 90);
      } else {
        // Pause at finished word for 2.2 seconds
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      // Snappy deleting phase (45ms per letter)
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(fullWord.slice(0, displayedText.length - 1));
        }, 45);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <span className="inline-flex items-center min-w-[200px]">
      <span>{displayedText}</span>
      <span className="inline-block w-[3px] sm:w-[4.5px] h-[0.8em] bg-[#A3E635] ml-1.5 rounded-sm shadow-[0_0_12px_rgba(163,230,53,1)] animate-cursor" />
    </span>
  );
};

const Hero = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const normX = (e.clientX / innerWidth - 0.5) * 2;
      const normY = (e.clientY / innerHeight - 0.5) * 2;
      setTilt({
        x: normX * 8,
        y: -normY * 8,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const appBadges = [
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-xl" />,
      bg: "bg-white text-black",
      label: "NEXT.JS",
    },
    {
      name: "React",
      icon: <SiReact className="text-xl text-[#00D8FF]" />,
      bg: "bg-[#0b1926] border border-cyan-400/40 text-cyan-300",
      label: "REACT",
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="text-xl text-[#5FA04E]" />,
      bg: "bg-[#0f1f12] border border-emerald-500/40 text-emerald-300",
      label: "NODE",
    },
    {
      name: "Docker",
      icon: <SiDocker className="text-xl text-[#2496ED]" />,
      bg: "bg-[#0a1a2e] border border-blue-400/40 text-blue-300",
      label: "DOCKER",
    },
    {
      name: "Redis",
      icon: <SiRedis className="text-xl text-[#DC382D]" />,
      bg: "bg-[#250d0c] border border-rose-500/40 text-rose-300",
      label: "REDIS",
    },
    {
      name: "Java",
      icon: <FaJava className="text-xl text-[#E76F00]" />,
      bg: "bg-[#241407] border border-amber-500/40 text-amber-300",
      label: "JAVA",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen w-full flex items-center justify-center pt-24 pb-16 px-6 sm:px-12 bg-[#020014] overflow-hidden select-none z-10"
    >
      {/* 1. Ambient Background Glows */}
      <div className="absolute top-10 left-10 w-[450px] h-[450px] bg-purple-600/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-lime-500/15 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* 2. Grid Pattern Background with Radial Mask */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, #000 70%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, #000 70%, transparent 100%)",
        }}
      />

      <div className="max-w-[1360px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-20">
        {/* ================= LEFT COLUMN: CREATIVE DESIGNER-DEVELOPER HERO TYPOGRAPHY ================= */}
        <div className="lg:col-span-7 flex flex-col items-start text-left relative">
          {/* Creative Sparkles & Doodles (Top Left of Headline) */}
          <div className="absolute -top-10 -left-2 pointer-events-none select-none flex items-center gap-2">
            <svg width="44" height="44" viewBox="0 0 100 100" fill="none" className="text-lime-400">
              <path
                d="M50 0L55 35L90 40L55 45L50 80L45 45L10 40L45 35Z"
                fill="#A3E635"
                filter="drop-shadow(0 0 10px rgba(163,230,53,0.9))"
              />
              <path d="M78 12L80 22L90 25L80 28L78 38L76 28L66 25L76 22Z" fill="#FACC15" />
              <path d="M22 68L24 76L32 78L24 80L22 88L20 80L12 78L20 76Z" fill="#A3E635" />
            </svg>
          </div>

          {/* Glowing Code Brackets Doodle */}
          <div className="absolute top-1 left-[240px] sm:left-[280px] pointer-events-none select-none text-lime-400 font-mono font-black text-xl tracking-tighter opacity-90 filter drop-shadow-[0_0_12px_rgba(163,230,53,0.8)]">
            &lt;/&gt;
          </div>

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-lime-500/10 border border-lime-500/30 mb-4 backdrop-blur-md"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-lime-400" />
            </span>
            <span className="text-[11px] font-bold tracking-[0.18em] text-lime-300 uppercase font-mono">
              AVAILABLE FOR NEW OPPORTUNITIES
            </span>
          </motion.div>

          {/* 3-Tier Dynamic Headline with Reduced Font Size & Buttery Smooth Typewriter Animation */}
          <div className="flex flex-col mb-4 relative">
            {/* Top Tier: Warm Orange/Amber Handwritten Accent */}
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-amber-400 font-bold text-lg sm:text-xl tracking-wide italic mb-1"
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "0.02em",
                textShadow: "0 0 20px rgba(251, 191, 36, 0.4)",
              }}
            >
              Professional
            </motion.span>

            {/* Middle Tier: Bold Clean White Sans (Scaled down for balance) */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-black text-[clamp(28px,3.8vw,48px)] tracking-[-0.02em] leading-[1] text-white uppercase"
            >
              SOFTWARE
            </motion.h1>

            {/* Bottom Tier: Smooth Typewriter Animation with Isolated Component */}
            <div className="h-[clamp(32px,4vw,54px)] flex items-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="font-display font-black text-[clamp(28px,3.8vw,48px)] tracking-[-0.02em] leading-[1] text-[#A3E635] uppercase flex items-center"
                style={{
                  textShadow: "0 0 30px rgba(163, 230, 53, 0.45)",
                }}
              >
                <TypewriterRole />
              </motion.h1>
            </div>
          </div>

          {/* Subtitle Description with Sourav's Name */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-white/80 text-sm sm:text-base leading-relaxed max-w-[580px] mb-6"
          >
            Hi, I'm <strong className="text-white font-bold">Sourav Kumar</strong> — a Full-Stack & Distributed Systems Developer who crafts scalable web applications, event-driven microservices architectures, and solves real problems with clean, performant code.
          </motion.p>

          {/* SQUIRCLE APP ICON BADGES (Next.js, React, Node.js, Docker, Redis, Java) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap items-center gap-2.5 mb-8"
          >
            {appBadges.map((app) => (
              <div
                key={app.name}
                className={`w-11 h-11 rounded-[14px] flex flex-col items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 cursor-pointer ${app.bg}`}
                title={app.name}
              >
                {app.icon}
                <span className="text-[7.5px] font-mono font-bold tracking-tight mt-0.5 opacity-90">
                  {app.label}
                </span>
              </div>
            ))}

            {/* Paper Airplane Doodle next to badges */}
            <div className="ml-2 hidden sm:block opacity-90 text-lime-400">
              <svg width="34" height="34" viewBox="0 0 100 100" fill="none" stroke="#A3E635" strokeWidth="3">
                <path d="M10 80L90 20L60 90L45 55L10 80Z" strokeLinejoin="round" />
                <path d="M45 55L90 20" strokeLinejoin="round" />
                <path d="M15 90C30 95 35 75 50 85" strokeDasharray="4 4" stroke="#FACC15" />
              </svg>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            {/* View Projects CTA */}
            <a href="#projects" className="cta-pill group !py-2.5 !px-6 !text-[12px]">
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
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white font-body text-[12px] font-bold px-5 py-2.5 rounded-full hover:bg-white/10 transition-all duration-300 uppercase tracking-wider"
            >
              <span>VIEW CV</span>
              <span>📄</span>
            </a>

            {/* GitHub Button */}
            <a
              href="https://github.com/sourav842741"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-white/75 hover:text-white font-body text-[12px] font-bold px-4 py-2.5 rounded-full hover:bg-white/5 transition-colors duration-300 uppercase tracking-wider"
            >
              <FaGithub className="text-base" />
              <span>GITHUB</span>
              <span>↗</span>
            </a>
          </motion.div>
        </div>

        {/* ================= RIGHT COLUMN: STYLED CUTOUT PORTRAIT WITH GLOWING CONTOUR & LIME BACKDROP ================= */}
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
            {/* Glowing Backdrop behind Photo (Neon Lime + Purple Aurora) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-lime-500/30 via-yellow-500/20 to-purple-600/35 rounded-[36px] blur-2xl transform scale-105 pointer-events-none" />

            {/* Creative Doodle: Pen Tool with Bezier Curve (Top Left of Card) */}
            <div className="absolute -top-10 -left-10 pointer-events-none z-30 hidden sm:block">
              <svg width="48" height="48" viewBox="0 0 100 100" fill="none">
                <path d="M20 70 Q 50 10 80 50" stroke="#A3E635" strokeWidth="2.5" fill="none" />
                <circle cx="20" cy="70" r="4" fill="#A3E635" />
                <circle cx="80" cy="50" r="4" fill="#A3E635" />
                <path d="M45 25 L65 15 L75 35 L55 45 Z" fill="#FACC15" />
                <circle cx="55" cy="30" r="3" fill="#020014" />
              </svg>
            </div>

            {/* Photo Container Frame with Cutout */}
            <div className="relative w-[290px] sm:w-[340px] rounded-[32px] p-3.5 bg-gradient-to-b from-white/20 via-white/5 to-white/10 border border-white/25 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.85)] overflow-hidden">
              <div className="w-full h-[380px] sm:h-[430px] rounded-[26px] overflow-hidden bg-[#040216] relative flex items-center justify-center">
                {/* Styled Cutout Portrait Image with Glowing Yellow Contour & Lime Blob */}
                <img
                  src="/assets/sourav_styled_portrait.png"
                  alt="Sourav Kumar"
                  className="w-full h-full object-cover object-center filter contrast-[1.05]"
                />

                {/* Subtle vignette shadow overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#020014] via-[#020014]/60 to-transparent pointer-events-none" />

                {/* Name Badge on Photo Bottom */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3 rounded-2xl bg-black/85 backdrop-blur-md border border-white/15 flex items-center justify-between">
                  <div>
                    <span className="font-display text-white text-xs sm:text-sm tracking-wider block">
                      SOURAV KUMAR
                    </span>
                    <span className="text-[10px] text-lime-400 font-mono font-semibold tracking-wider uppercase block">
                      FULL-STACK & SYSTEMS
                    </span>
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
              </div>
            </div>

            {/* Floating Orbiting Badge 1: 10+ Projects */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-5 -right-6 sm:-right-8 bg-[#0b0826]/95 backdrop-blur-xl border border-white/20 px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-2.5 z-30"
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
              className="absolute -bottom-4 -left-6 sm:-left-8 bg-[#0b0826]/95 backdrop-blur-xl border border-white/20 px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-2.5 z-30"
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
              className="hidden sm:flex absolute top-1/2 -right-10 translate-y-1/2 bg-[#0b0826]/95 backdrop-blur-xl border border-lime-400/30 px-3.5 py-2 rounded-2xl shadow-2xl items-center gap-2 z-30"
            >
              <span className="text-sm">⚡</span>
              <span className="font-display text-xs text-lime-300 tracking-wider">
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
              className="w-1 h-2 bg-lime-400 rounded-full"
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
