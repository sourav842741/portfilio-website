import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const titleSolidOpacity = useTransform(scrollYProgress, [0.3, 0.8], [0, 1]);

  // Sourav's real projects including OpenTube, BlogVerse & flagship additions
  const projectsData = [
    {
      id: "01",
      name: "PLACE MENTORS",
      type: "AI PLACEMENT PREPARATION PLATFORM",
      desc: "Full-stack placement accelerator with AI study roadmaps, real-time multiplayer coding battle arena (Socket.io), resume analyzer, and DSA question tracking.",
      tags: ["React 18", "Redux Toolkit", "Socket.io", "Tailwind CSS", "AI Mentorship"],
      mainImg: "/assets/projects/placementor.png",
      subImg1: "/assets/projects/placementor_battle.png",
      subImg2: "/assets/projects/project11.png",
      liveUrl: "https://placementor.online/",
      githubUrl: "https://github.com/sourav842741/Place--Mentors.git",
    },
    {
      id: "02",
      name: "NEXUS ERP",
      type: "ENTERPRISE OPERATIONS & INVENTORY HUB",
      desc: "Marketplace ERP system featuring single-source-of-truth inventory ledger, automated order deductions, inter-warehouse transfers, dynamic RBAC, and multi-channel sync.",
      tags: ["MERN Stack", "Socket.io", "Inventory Ledger", "RBAC", "Tailwind CSS"],
      mainImg: "/assets/projects/erp_dashboard.png",
      subImg1: "/assets/projects/erp_inventory.png",
      subImg2: "/assets/projects/project9.png",
      liveUrl: "https://erp-system-os.onrender.com",
      githubUrl: "https://github.com/sourav842741/ERP-System.git",
    },
    {
      id: "03",
      name: "YAADON KI GALI (90'S KI YAADE)",
      type: "IMMERSIVE RETRO NOSTALGIA EXPERIENCE",
      desc: "Interactive digital memory museum capturing 90s Indian culture with retro cassette players, CRT television scanline modals, live internet radio, and nostalgic ambient audio.",
      tags: ["React 18", "Tailwind CSS", "Web Audio", "Retro CRT", "Vercel"],
      mainImg: "/assets/projects/yaade1.webp",
      subImg1: "/assets/projects/yaade2.webp",
      subImg2: "/assets/projects/project8.png",
      liveUrl: "https://90-s-ki-yaade.vercel.app/",
      githubUrl: "https://github.com/sourav842741/90-s-ki-yaade.git",
    },
    {
      id: "04",
      name: "OPENTUBE",
      type: "FULL-STACK VIDEO STREAMING PLATFORM",
      desc: "Comprehensive YouTube-style video platform with video playback, shorts feed, channel subscriptions, likes, comments, dynamic search, and responsive dark interface.",
      tags: ["React 18", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Video Streaming"],
      mainImg: "/assets/projects/opentube.png",
      subImg1: "/assets/projects/project3.png",
      subImg2: "/assets/projects/project11.png",
      liveUrl: "https://open-tube-1.onrender.com/",
      githubUrl: "https://github.com/sourav842741/Open-Tube.git",
    },
    {
      id: "05",
      name: "BLOGVERSE",
      type: "CROSS-PLATFORM TECH PUBLISHING & MOBILE APP",
      desc: "Modern cross-platform engineering publication ecosystem featuring React web client, React Native Expo mobile app, Node.js/MongoDB API, live sync, SVG captchas, and dynamic markdown handbooks.",
      tags: ["React 18", "React Native", "Expo SDK", "Node.js", "MongoDB Atlas", "JWT & RBAC"],
      mainImg: "/assets/projects/blogverse.png",
      subImg1: "/assets/projects/project2.png",
      subImg2: "/assets/projects/project8.png",
      liveUrl: "https://blog-website-1-ez1y.onrender.com",
      githubUrl: "https://github.com/sourav842741/Blog-website.git",
    },
    {
      id: "06",
      name: "INSTADL",
      type: "INSTAGRAM REELS & STORY DOWNLOADER",
      desc: "High-speed Instagram media downloader web application built with React 18, Vite, Tailwind CSS, and Framer Motion. Features instant link parsing, video thumbnail preview, HD MP4 extraction, and download history.",
      tags: ["React 18", "Vite", "Tailwind CSS", "Framer Motion", "Axios", "Vercel"],
      mainImg: "/assets/projects/instadl.jpg",
      subImg1: "/assets/projects/project11.png",
      subImg2: "/assets/projects/project3.png",
      liveUrl: "https://instagram-story-downloader-jet.vercel.app/",
      githubUrl: "https://github.com/sourav842741/instagram-story-downloader",
    },
    {
      id: "07",
      name: "MULTICART",
      type: "MULTI-VENDOR MARKETPLACE",
      desc: "Modern multi-vendor e-commerce platform allowing sellers to launch independent stores, manage catalogs, inventory, dynamic cart, and responsive storefronts.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Marketplace", "Vercel"],
      mainImg: "/assets/projects/project11.png",
      subImg1: "/assets/projects/project9.png",
      subImg2: "/assets/projects/project8.png",
      liveUrl: "https://multicart-omega.vercel.app/",
      githubUrl: "https://github.com/sourav842741/Multicart",
    },
    {
      id: "08",
      name: "CUSTOMER SUPPORT AI",
      type: "INTELLIGENT CHAT ASSISTANT",
      desc: "AI-powered real-time customer support platform integrated with Google Gemini API, streaming dynamic responses, conversational memory, and clean modern UI.",
      tags: ["Next.js", "TypeScript", "Gemini API", "Tailwind CSS"],
      mainImg: "/assets/projects/project9.png",
      subImg1: "/assets/projects/project11.png",
      subImg2: "/assets/projects/project10.png",
      liveUrl: "https://customer-support-ai-virid.vercel.app/",
      githubUrl: "https://github.com/sourav842741/Customer-Support-ai",
    },
    {
      id: "09",
      name: "STUDYSATHI AI",
      type: "SMART LEARNING PLATFORM",
      desc: "Full-stack AI-enabled educational portal providing instant AI doubt resolution, interactive study modules, progress analytics, and secure authentication.",
      tags: ["MongoDB", "Express.js", "React.js", "Node.js", "AI Integration"],
      mainImg: "/assets/projects/project8.png",
      subImg1: "/assets/projects/project1.png",
      subImg2: "/assets/projects/project2.png",
      liveUrl: "https://studysathi-ai-client.onrender.com/auth",
      githubUrl: "https://github.com/sourav842741/StudySathi---Ai",
    },
    {
      id: "10",
      name: "FUNCTION-CONTRACT",
      type: "RUNTIME API VALIDATOR (NPM)",
      desc: "Lightweight npm package that validates API payloads and function contracts at runtime, preventing silent schema drifts and frontend crashes.",
      tags: ["JavaScript", "Node.js", "NPM Package", "Runtime Validation"],
      mainImg: "/assets/projects/project10.png",
      subImg1: "/assets/projects/project11.png",
      subImg2: "/assets/projects/project9.png",
      liveUrl: "https://www.npmjs.com/package/function-contract",
      githubUrl: "https://github.com/sourav842741/function-contracter",
    },
    {
      id: "11",
      name: "CREOVUE",
      type: "SOCIAL MEDIA & BLOG PLATFORM",
      desc: "Interactive social blogging ecosystem built with MERN stack allowing users to publish articles, like, follow creators, and manage JWT-secured profiles.",
      tags: ["React", "Node.js", "Express", "MongoDB", "JWT Auth"],
      mainImg: "/assets/projects/project2.png",
      subImg1: "/assets/projects/project3.png",
      subImg2: "/assets/projects/project6.png",
      liveUrl: "https://creovue-social-media.onrender.com",
      githubUrl: "https://github.com/sourav842741/Creovue-Social-Media",
    },
  ];

  return (
    <section
      id="projects"
      ref={containerRef}
      className="stacked-section stacked-section-dark relative pt-28 pb-36 px-4 sm:px-10 z-50 bg-[#020014]"
    >
      <div className="max-w-[1300px] mx-auto">
        {/* Title: PROJECTS with ghost outline to silver solid reveal */}
        <div className="relative mb-20 text-center">
          <h2 className="font-display font-black text-[clamp(44px,7vw,110px)] uppercase tracking-tight stroke-text">
            PROJECTS
          </h2>
          <motion.h2
            style={{ opacity: titleSolidOpacity }}
            className="absolute inset-0 font-display font-black text-[clamp(44px,7vw,110px)] uppercase tracking-tight silver-text pointer-events-none"
          >
            PROJECTS
          </motion.h2>
          <p className="font-body text-white/50 text-xs sm:text-sm tracking-[0.2em] uppercase mt-2">
            FEATURED WORKS & FULL-STACK APPLICATIONS
          </p>
        </div>

        {/* Stacked Sticky Project Cards (Deck Stacking on Scroll) */}
        <div className="relative w-full pb-32">
          {projectsData.map((project, index) => {
            // Precise peek offset so each card stacks cleanly over the previous one like a real deck
            const stickyTop = `calc(68px + ${index * 9}px)`;

            return (
              <div
                key={project.id}
                style={{
                  position: "sticky",
                  top: stickyTop,
                  zIndex: 10 + index,
                }}
                className="w-full bg-[#06041D] border border-white/15 border-t-2 border-t-purple-400/40 hover:border-white/60 transition-all duration-300 rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 shadow-[0_-30px_60px_rgba(0,0,0,0.95),0_30px_60px_rgba(0,0,0,0.9)] mb-24 sm:mb-36 last:mb-0 relative backdrop-blur-2xl group"
              >
                {/* Glowing Top Accent Line */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-purple-400/80 to-transparent pointer-events-none" />

                {/* Header Row: Big number + Project Title/Type + Action Buttons */}
                <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-6 mb-6 gap-4">
                  {/* Left: Number + Project Info */}
                  <div className="flex items-center gap-5 sm:gap-8">
                    <span className="font-display text-[38px] sm:text-[52px] text-white leading-none">
                      {project.id}
                    </span>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] text-purple-400 tracking-[0.2em] font-bold uppercase font-body">
                          {project.type}
                        </span>
                        <span className="hidden sm:inline-block text-[9px] font-mono tracking-widest text-purple-300/80 bg-purple-950/60 px-2.5 py-0.5 rounded-full border border-purple-500/30">
                          {project.id} / {String(projectsData.length).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="font-display text-white text-lg sm:text-2xl tracking-wide uppercase mt-0.5">
                        {project.name}
                      </h3>
                    </div>
                  </div>

                  {/* Right: Live Demo + GitHub Buttons */}
                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 border border-white/30 hover:border-white px-4 py-2 rounded-full text-white/90 hover:text-white font-body text-[11px] font-bold tracking-[0.1em] uppercase hover:bg-white/10 transition-all duration-300"
                      >
                        <span>CODE</span>
                        <span className="text-xs">↗</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="cta-pill group !py-2 !px-5 !text-[11px]"
                      >
                        <span>LIVE DEMO</span>
                        <span className="text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                          ↗
                        </span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Description & Tags */}
                <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="font-body text-white/70 text-xs sm:text-sm max-w-[720px] leading-relaxed">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image Grid: 1 large left (~60%) + 2 stacked right (~40%) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
                  {/* Main Large Image */}
                  <div className="lg:col-span-7 h-[280px] sm:h-[400px] rounded-[18px] sm:rounded-[22px] overflow-hidden border border-white/15 bg-black/60 group relative">
                    <img
                      src={project.mainImg}
                      alt={project.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                      <span className="font-body text-xs font-semibold text-white tracking-wider uppercase bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                        Primary Preview
                      </span>
                    </div>
                  </div>

                  {/* 2 Smaller Stacked Images */}
                  <div className="lg:col-span-5 grid grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">
                    <div className="h-[132px] sm:h-[188px] rounded-[18px] sm:rounded-[22px] overflow-hidden border border-white/15 bg-black/60 group relative">
                      <img
                        src={project.subImg1}
                        alt={`${project.name} preview 1`}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="h-[132px] sm:h-[188px] rounded-[18px] sm:rounded-[22px] overflow-hidden border border-white/15 bg-black/60 group relative">
                      <img
                        src={project.subImg2}
                        alt={`${project.name} preview 2`}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
