import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutMe = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  // Scroll driven transforms for floating 3D assets
  const splatY = useTransform(scrollYProgress, [0, 1], [-40, 30]);
  const cubeY = useTransform(scrollYProgress, [0, 1], [40, -50]);
  const flowerY = useTransform(scrollYProgress, [0, 1], [-30, 40]);
  const heartY = useTransform(scrollYProgress, [0, 1], [50, -30]);

  // Outline to silver fill interpolation
  const titleFillOpacity = useTransform(scrollYProgress, [0.3, 0.9], [0, 1]);

  // Clean, professional engineering capabilities (Zero emojis, Real SVG technical icons)
  const systemCapabilities = [
    {
      name: "Microservices",
      tag: "DISTRIBUTED ARCHITECTURE",
      desc: "Decoupled services, API gateways, fault tolerance & inter-service RPC communication.",
      svg: (
        <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      ),
    },
    {
      name: "Redis",
      tag: "CACHING & PUB/SUB",
      desc: "Sub-millisecond in-memory data store, session states, rate limiting & cache invalidation.",
      svg: (
        <svg className="w-5 h-5 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
    },
    {
      name: "RabbitMQ",
      tag: "MESSAGE QUEUES",
      desc: "Asynchronous task workers, dead letter exchanges, pub/sub consumer pipelines & backpressure.",
      svg: (
        <svg className="w-5 h-5 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <path d="M6 12h.01M12 12h.01M18 12h.01" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "Docker",
      tag: "CONTAINERIZATION",
      desc: "Multi-stage builds, isolated containerized microservices & production container deployment.",
      svg: (
        <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 11h3v3H4zM8 11h3v3H8zM12 11h3v3h-3zM8 7h3v3H8zM12 7h3v3h-3z" />
          <path d="M2 15a8 8 0 0 0 16 0c2 0 4-2 4-4a4 4 0 0 0-4-4c-1 0-2 .5-3 1.2" />
        </svg>
      ),
    },
    {
      name: "Node.js & Express",
      tag: "HIGH-THROUGHPUT APIS",
      desc: "Event loop optimization, streaming I/O, middleware pipelines & RESTful contract design.",
      svg: (
        <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      name: "Dual Database Strategy",
      tag: "POSTGRESQL + MONGODB",
      desc: "ACID transactional financial ledgers (Postgres) paired with flexible JSON catalog stores (Mongo).",
      svg: (
        <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      ),
    },
    {
      name: "Real-Time WebSockets",
      tag: "SOCKET.IO CHANNELS",
      desc: "Live multiplayer battle rooms, instant notification broadcasts & collaborative synchronization.",
      svg: (
        <svg className="w-5 h-5 text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4.93 4.93a10 10 0 0 1 14.14 0" />
          <path d="M7.76 7.76a6 6 0 0 1 8.48 0" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
    },
    {
      name: "Java & DSA",
      tag: "ALGORITHMIC FOUNDATIONS",
      desc: "Extensive problem-solving in data structures, time-space complexity optimization & clean logic.",
      svg: (
        <svg className="w-5 h-5 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative min-h-screen py-28 px-4 sm:px-10 flex flex-col items-center justify-center bg-[#020014] overflow-hidden z-30 select-none"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-purple-900/10 blur-[150px] pointer-events-none" />

      {/* Floating 3D Objects */}
      {/* 1. Chrome Splat - Top Left */}
      <motion.div
        style={{ y: splatY }}
        className="absolute top-8 sm:top-14 left-2 sm:left-[5%] w-[90px] sm:w-[140px] lg:w-[180px] pointer-events-none z-10"
      >
        <div className="animate-float">
          <img
            src="/assets/chrome_splat.jpg"
            alt="Chrome Splat 3D"
            className="w-full h-auto object-contain rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          />
        </div>
      </motion.div>

      {/* 2. Blue Glossy Cube - Top Right */}
      <motion.div
        style={{ y: cubeY }}
        className="absolute top-6 sm:top-12 -right-4 sm:right-[4%] w-[85px] sm:w-[130px] lg:w-[170px] pointer-events-none z-10"
      >
        <div className="animate-float-delayed">
          <img
            src="/assets/blue_cube.jpg"
            alt="Blue Cube 3D"
            className="w-full h-auto object-contain rounded-2xl border border-blue-500/20 shadow-[0_0_30px_rgba(47,128,237,0.25)]"
          />
        </div>
      </motion.div>

      {/* 3. Purple 3D Flower - Right Lower */}
      <motion.div
        style={{ y: flowerY }}
        className="absolute bottom-12 sm:bottom-20 right-2 sm:right-[6%] w-[90px] sm:w-[135px] lg:w-[175px] pointer-events-none z-10"
      >
        <div className="animate-float">
          <img
            src="/assets/purple_flower.jpg"
            alt="Purple Flower 3D"
            className="w-full h-auto object-contain rounded-2xl border border-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.25)]"
          />
        </div>
      </motion.div>

      {/* 4. Red Glossy Heart - Bottom Left */}
      <motion.div
        style={{ y: heartY }}
        className="absolute bottom-10 sm:bottom-16 left-3 sm:left-[6%] w-[85px] sm:w-[125px] lg:w-[165px] pointer-events-none z-10"
      >
        <div className="animate-float-reverse">
          <img
            src="/assets/red_heart.jpg"
            alt="Red Heart 3D"
            className="w-full h-auto object-contain rounded-2xl border border-pink-500/20 shadow-[0_0_30px_rgba(236,72,153,0.25)]"
          />
        </div>
      </motion.div>

      {/* Central Content */}
      <div className="max-w-[1240px] w-full mx-auto flex flex-col items-center relative z-20">
        {/* Title: ABOUT ME with outline to silver solid reveal */}
        <div className="relative mb-6 text-center">
          <h2 className="font-display font-black text-[clamp(44px,7vw,110px)] uppercase tracking-tight stroke-text">
            ABOUT ME
          </h2>
          <motion.h2
            style={{ opacity: titleFillOpacity }}
            className="absolute inset-0 font-display font-black text-[clamp(44px,7vw,110px)] uppercase tracking-tight silver-text pointer-events-none"
          >
            ABOUT ME
          </motion.h2>
        </div>

        {/* Professional Engineering Bio */}
        <div className="max-w-[860px] mx-auto text-center mb-14">
          <p className="font-body text-white font-medium text-base sm:text-lg leading-relaxed mb-4">
            Full-Stack & Distributed Systems Developer with strong competencies in{" "}
            <span className="text-purple-300 font-semibold">
              Java (DSA), Microservices, Redis, RabbitMQ, Docker, Node.js, Express, React 18, and Next.js
            </span>.
          </p>
          <p className="font-body text-white/60 text-sm sm:text-base leading-relaxed">
            I engineer resilient distributed backends, asynchronous messaging pipelines, transactional inventory ledgers, and immersive frontend experiences built for scale and zero-latency performance.
          </p>
        </div>

        {/* Engineering Architecture & Systems Matrix (Professional Minimal Design) */}
        <div className="w-full mb-14">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-6">
            <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-white/50 uppercase">
              // SYSTEMS ARCHITECTURE & CORE CAPABILITIES
            </span>
            <span className="text-[11px] font-mono text-purple-400 font-medium">
              PRODUCTION VERIFIED
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {systemCapabilities.map((item) => (
              <div
                key={item.name}
                className="bg-[#06041A]/70 border border-white/10 hover:border-purple-500/40 rounded-2xl p-5 backdrop-blur-xl transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
                      {item.svg}
                    </div>
                    <span className="text-[9px] font-mono font-semibold tracking-wider text-white/40 uppercase">
                      {item.tag}
                    </span>
                  </div>
                  <h4 className="font-body font-bold text-white text-base tracking-wide mb-1.5 group-hover:text-purple-200 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-white/55 font-body text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bento Grid: Experience & Education */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          {/* Column 1: Experience (5 cols) */}
          <div className="lg:col-span-5 outline-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 text-sm font-bold">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] text-purple-400 tracking-[0.2em] font-bold uppercase font-body block">
                    PROFESSIONAL EXPERIENCE
                  </span>
                  <h3 className="font-display text-white text-lg tracking-wide uppercase">
                    WORK HISTORY
                  </h3>
                </div>
              </div>

              {/* Experience Item */}
              <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-body font-bold text-white text-sm sm:text-base">
                    Frontend Development Intern
                  </h4>
                  <span className="text-[11px] font-bold tracking-wider text-purple-300 bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-500/20 font-mono">
                    4 WEEKS
                  </span>
                </div>
                <p className="text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3 font-mono">
                  IBM SkillsBuild Project
                </p>
                <ul className="flex flex-col space-y-2 text-white/70 text-xs leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">▸</span>
                    <span>Completed an intensive internship focusing on modern frontend architecture.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">▸</span>
                    <span>Engineered responsive, accessible UI components with clean coding practices.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">▸</span>
                    <span>Optimized user workflows and interface usability for interactive web apps.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Skills Pills */}
            <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap gap-2">
              {[
                "Microservices",
                "Redis Caching",
                "RabbitMQ Queues",
                "Docker",
                "Event-Driven Arch",
                "Full-Stack Dev",
                "DSA Problem Solving",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono font-medium tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Column 2: Education (7 cols) */}
          <div className="lg:col-span-7 outline-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 text-sm font-bold">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] text-blue-400 tracking-[0.2em] font-bold uppercase font-body block">
                    ACADEMIC BACKGROUND
                  </span>
                  <h3 className="font-display text-white text-lg tracking-wide uppercase">
                    EDUCATION
                  </h3>
                </div>
              </div>

              {/* 3 Education Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* 1. B.Tech CSE */}
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-purple-400 font-mono font-semibold uppercase tracking-wider block mb-1">
                      UNDERGRADUATE
                    </span>
                    <h4 className="font-body font-bold text-white text-sm mb-1 leading-snug">
                      B.Tech in CSE
                    </h4>
                    <p className="text-white/50 text-[11px] leading-tight mb-3">
                      Abacus Institute of Engineering & Management (Mogra)
                    </p>
                  </div>
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[10px] text-white/40 uppercase font-mono">CGPA</span>
                    <span className="font-mono font-bold text-emerald-400 text-sm">8.1</span>
                  </div>
                </div>

                {/* 2. Class XII */}
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-blue-400 font-mono font-semibold uppercase tracking-wider block mb-1">
                      SENIOR SECONDARY (XII)
                    </span>
                    <h4 className="font-body font-bold text-white text-sm mb-1 leading-snug">
                      PSEB Board
                    </h4>
                    <p className="text-white/50 text-[11px] leading-tight mb-3">
                      Indian Public School (2022)
                    </p>
                  </div>
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[10px] text-white/40 uppercase font-mono">SCORE</span>
                    <span className="font-mono font-bold text-emerald-400 text-sm">88.2%</span>
                  </div>
                </div>

                {/* 3. Class X */}
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-pink-400 font-mono font-semibold uppercase tracking-wider block mb-1">
                      MATRICULATION (X)
                    </span>
                    <h4 className="font-body font-bold text-white text-sm mb-1 leading-snug">
                      PSEB Board
                    </h4>
                    <p className="text-white/50 text-[11px] leading-tight mb-3">
                      Dr. Ambedkar Vidiya Mandir (2020)
                    </p>
                  </div>
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[10px] text-white/40 uppercase font-mono">SCORE</span>
                    <span className="font-mono font-bold text-emerald-400 text-sm">95.0%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Achievement Note */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-white/50 font-body">
                Strong foundations in DSA, Distributed Systems & Database Scalability.
              </span>
              <span className="text-xs text-purple-400 font-mono font-bold tracking-wider uppercase">
                VERIFIED CREDENTIALS
              </span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div>
          <a href="#contact" className="cta-pill group">
            <span>GET IN TOUCH</span>
            <span className="text-base font-normal transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
