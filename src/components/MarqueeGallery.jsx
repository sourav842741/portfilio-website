import React from "react";

const MarqueeGallery = () => {
  // Top Strip: Core Frameworks & Technologies
  const topTechLogos = [
    { name: "MICROSERVICES", role: "DISTRIBUTED ARCHITECTURE" },
    { name: "REDIS", role: "CACHING & PUB/SUB" },
    { name: "RABBITMQ", role: "ASYNC MESSAGE QUEUES" },
    { name: "DOCKER", role: "CONTAINERIZATION" },
    { name: "NEXT.JS 14", role: "FULL-STACK FRAMEWORK" },
    { name: "TYPESCRIPT", role: "TYPED JAVASCRIPT" },
    { name: "REACT.JS", role: "UI LIBRARY" },
    { name: "NODE.JS", role: "SERVER RUNTIME" },
    { name: "SOCKET.IO", role: "REAL-TIME ENGINE" },
    { name: "EXPRESS.JS", role: "BACKEND API" },
    { name: "MONGODB", role: "NOSQL DATABASE" },
    { name: "POSTGRESQL", role: "RELATIONAL DATABASE" },
    { name: "TAILWIND CSS", role: "MODERN STYLING" },
  ];

  // Bottom Strip: Additional Tech, Tools & Core Competencies
  const bottomTechLogos = [
    { name: "JAVA", role: "DSA & PROBLEM SOLVING" },
    { name: "EVENT-DRIVEN ARCHITECTURE", role: "SYSTEM DESIGN" },
    { name: "REDIS SESSIONS & QUEUES", role: "HIGH PERFORMANCE" },
    { name: "RABBITMQ EXCHANGES", role: "MESSAGE BROKER" },
    { name: "REDUX TOOLKIT", role: "GLOBAL STATE" },
    { name: "RESTFUL APIS", role: "INTEGRATION" },
    { name: "GIT & GITHUB", role: "VERSION CONTROL" },
    { name: "JWT & RBAC", role: "SECURITY" },
    { name: "VERCEL & CLOUD", role: "DEPLOYMENT" },
    { name: "NPM PACKAGES", role: "OPEN SOURCE" },
    { name: "ENTERPRISE ERP", role: "OPERATIONS" },
  ];

  // Real Projects List including OpenTube, BlogVerse & flagship additions
  const projects = [
    {
      id: "placementor",
      name: "Place Mentors",
      tech: "React 18 · Socket.io · AI Prep",
      img: "/assets/projects/placementor.png",
      liveUrl: "https://placementor.online/",
      githubUrl: "https://github.com/sourav842741/Place--Mentors.git",
      width: "w-[430px]",
    },
    {
      id: "opentube",
      name: "OpenTube Video Platform",
      tech: "React · Node.js · Express · MongoDB",
      img: "/assets/projects/opentube.png",
      liveUrl: "https://open-tube-1.onrender.com/",
      githubUrl: "https://github.com/sourav842741/Open-Tube.git",
      width: "w-[430px]",
    },
    {
      id: "blogverse",
      name: "BlogVerse (Web & Mobile)",
      tech: "React 18 · React Native · Expo · Node",
      img: "/assets/projects/blogverse.png",
      liveUrl: "https://blog-website-1-ez1y.onrender.com",
      githubUrl: "https://github.com/sourav842741/Blog-website.git",
      width: "w-[430px]",
    },
    {
      id: "instadl",
      name: "InstaDL Media Downloader",
      tech: "React 18 · Vite · Tailwind · Framer Motion",
      img: "/assets/projects/instadl.jpg",
      liveUrl: "https://instagram-story-downloader-jet.vercel.app/",
      githubUrl: "https://github.com/sourav842741/instagram-story-downloader",
      width: "w-[420px]",
    },
    {
      id: "erp",
      name: "Nexus ERP Hub",
      tech: "MERN · Inventory Ledger · RBAC",
      img: "/assets/projects/erp_dashboard.png",
      liveUrl: "https://erp-system-os.onrender.com",
      githubUrl: "https://github.com/sourav842741/ERP-System.git",
      width: "w-[420px]",
    },
    {
      id: "yaade",
      name: "Yaadon Ki Gali (90s)",
      tech: "React · Web Audio · Retro CRT",
      img: "/assets/projects/yaade1.webp",
      liveUrl: "https://90-s-ki-yaade.vercel.app/",
      githubUrl: "https://github.com/sourav842741/90-s-ki-yaade.git",
      width: "w-[410px]",
    },
    {
      id: "p11",
      name: "MultiCart Marketplace",
      tech: "Next.js · TypeScript · Tailwind",
      img: "/assets/projects/project11.png",
      liveUrl: "https://multicart-omega.vercel.app/",
      githubUrl: "https://github.com/sourav842741/Multicart",
      width: "w-[410px]",
    },
    {
      id: "p9",
      name: "Customer Support AI",
      tech: "Next.js · Gemini API · TS",
      img: "/assets/projects/project9.png",
      liveUrl: "https://customer-support-ai-virid.vercel.app/",
      githubUrl: "https://github.com/sourav842741/Customer-Support-ai",
      width: "w-[380px]",
    },
    {
      id: "p10",
      name: "function-contract (NPM)",
      tech: "Node.js · Runtime Validator",
      img: "/assets/projects/project10.png",
      liveUrl: "https://www.npmjs.com/package/function-contract",
      githubUrl: "https://github.com/sourav842741/function-contracter",
      width: "w-[360px]",
    },
    {
      id: "p8",
      name: "StudySathi AI Platform",
      tech: "MERN Stack · AI Doubts",
      img: "/assets/projects/project8.png",
      liveUrl: "https://studysathi-ai-client.onrender.com/auth",
      githubUrl: "https://github.com/sourav842741/StudySathi---Ai",
      width: "w-[400px]",
    },
    {
      id: "p2",
      name: "CreoVue Social Media",
      tech: "React · Node.js · JWT Auth",
      img: "/assets/projects/project2.png",
      liveUrl: "https://creovue-social-media.onrender.com",
      githubUrl: "https://github.com/sourav842741/Creovue-Social-Media",
      width: "w-[390px]",
    },
    {
      id: "p1",
      name: "Vidyapath Courses LMS",
      tech: "MERN · Video Lectures",
      img: "/assets/projects/project1.png",
      liveUrl: "https://vidyapath-coureses-1.onrender.com/",
      githubUrl: "https://github.com/sourav842741/Vidyapath-Coureses",
      width: "w-[400px]",
    },
    {
      id: "p6",
      name: "Quick Zaikaa Food",
      tech: "React · Redux · Tailwind",
      img: "/assets/projects/project6.png",
      liveUrl: "https://quick-zaikaa.onrender.com/",
      githubUrl: "https://github.com/sourav842741/Quick-Zaikaa.git",
      width: "w-[380px]",
    },
  ];

  // Distribute across 3 alternating rows
  const row1 = [projects[0], projects[1], projects[2], projects[3], projects[5], projects[7]];
  const row2 = [projects[2], projects[3], projects[4], projects[6], projects[8], projects[9]];
  const row3 = [projects[1], projects[3], projects[0], projects[2], projects[10], projects[11]];

  // Render a project card with hover reveal live project link
  const renderProjectCard = (item, idx) => (
    <div
      key={`${item.id}-${idx}`}
      className={`relative ${item.width} h-[240px] rounded-[22px] overflow-hidden flex-shrink-0 border border-white/20 bg-[#06041A] shadow-2xl group cursor-pointer`}
    >
      {/* Real Project Image */}
      <img
        src={item.img}
        alt={item.name}
        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />

      {/* Static bottom tag (visible always before hover) */}
      <div className="absolute bottom-3 left-3 z-10 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
        <span className="text-[11px] font-bold tracking-wider uppercase text-white bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/25 shadow-md">
          {item.name}
        </span>
      </div>

      {/* Full Interactive Hover Overlay with Live Project & Code links */}
      <div className="absolute inset-0 bg-[#020014]/90 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-6 z-20">
        {/* Top: Project Info */}
        <div>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-purple-400 font-body block mb-1">
            FEATURED PROJECT
          </span>
          <h4 className="font-display text-white text-base sm:text-lg leading-snug tracking-wide uppercase">
            {item.name}
          </h4>
          <p className="text-white/70 text-xs font-body mt-1">
            {item.tech}
          </p>
        </div>

        {/* Bottom: Action Links */}
        <div className="flex items-center gap-3 pt-3 border-t border-white/15">
          {item.liveUrl && (
            <a
              href={item.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white font-body text-xs font-bold px-4 py-2 rounded-full shadow-[0_0_20px_rgba(219,39,119,0.5)] transition-transform duration-200 hover:scale-105"
            >
              <span>LIVE DEMO</span>
              <span>↗</span>
            </a>
          )}
          {item.githubUrl && (
            <a
              href={item.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 border border-white/40 hover:border-white text-white/90 hover:text-white font-body text-xs font-bold px-3.5 py-2 rounded-full hover:bg-white/10 transition-colors duration-200"
            >
              <span>CODE</span>
              <span>↗</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="customers" className="relative bg-[#020014] py-10 overflow-hidden z-20">
      {/* 1. TOP TECHNOLOGY STRIP (Marquee Left) */}
      <div className="w-full border-t border-b border-white/10 py-5 mb-12 overflow-hidden bg-black/20">
        <div className="marquee-left flex items-center gap-16 select-none">
          {[...topTechLogos, ...topTechLogos].map((item, idx) => (
            <div
              key={`top-${idx}`}
              className="flex items-center gap-4 group cursor-default whitespace-nowrap"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
              <div className="flex flex-col">
                <span className="font-display text-white/95 text-sm tracking-wider group-hover:text-purple-400 transition-colors duration-200">
                  {item.name}
                </span>
                <span className="text-[10px] text-white/40 tracking-[0.15em] font-semibold uppercase font-body">
                  {item.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. REAL PROJECT SHOWCASE GALLERY (NO AI IMAGES, HOVER LIVE LINKS) */}
      <div className="relative w-full flex flex-col gap-4 overflow-hidden">
        {/* Row 1: Left */}
        <div className="marquee-left flex items-center gap-4">
          {[...row1, ...row1].map((item, idx) => renderProjectCard(item, idx))}
        </div>

        {/* Row 2: Right */}
        <div className="marquee-right flex items-center gap-4">
          {[...row2, ...row2].map((item, idx) => renderProjectCard(item, idx))}
        </div>

        {/* Row 3: Left */}
        <div className="marquee-left flex items-center gap-4">
          {[...row3, ...row3].map((item, idx) => renderProjectCard(item, idx))}
        </div>
      </div>

      {/* 3. BOTTOM TECHNOLOGY STRIP (Marquee Right) */}
      <div className="w-full border-t border-b border-white/10 py-5 mt-12 overflow-hidden bg-black/20">
        <div className="marquee-right flex items-center gap-16 select-none">
          {[...bottomTechLogos, ...bottomTechLogos].map((item, idx) => (
            <div
              key={`bot-${idx}`}
              className="flex items-center gap-4 group cursor-default whitespace-nowrap"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-emerald-400" />
              <div className="flex flex-col">
                <span className="font-display text-white/95 text-sm tracking-wider group-hover:text-pink-400 transition-colors duration-200">
                  {item.name}
                </span>
                <span className="text-[10px] text-white/40 tracking-[0.15em] font-semibold uppercase font-body">
                  {item.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeGallery;
