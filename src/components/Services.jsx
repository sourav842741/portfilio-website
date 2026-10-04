import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Services = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const titleSolidOpacity = useTransform(scrollYProgress, [0.3, 0.8], [0, 1]);

  const serviceItems = [
    {
      num: "01",
      title: "FULL-STACK WEB APPLICATIONS",
      desc: "Architecting end-to-end scalable web applications using Next.js, React, Node.js, and MongoDB with modern state management and seamless UX.",
      tag: "NEXT.JS / REACT",
    },
    {
      num: "02",
      title: "FRONTEND & UI/UX INTERACTION",
      desc: "Crafting pixel-perfect, high-performance interfaces with Tailwind CSS, Framer Motion, and GSAP micro-animations for high-conversion web products.",
      tag: "ANIMATION & 3D",
    },
    {
      num: "03",
      title: "MICROSERVICES & BACKEND SYSTEMS",
      desc: "Engineering distributed microservices, RabbitMQ event queues, Redis caching & pub/sub, secure RESTful APIs, and runtime contract validators.",
      tag: "DISTRIBUTED ARCHITECTURE",
    },
    {
      num: "04",
      title: "AI INTEGRATION & AUTOMATION",
      desc: "Integrating cutting-edge LLMs including Google Gemini API to build intelligent real-time conversational agents, doubt resolvers, and smart helpers.",
      tag: "LLM & GENAI",
    },
    {
      num: "05",
      title: "DSA & PERFORMANCE OPTIMIZATION",
      desc: "Applying strong algorithmic problem-solving principles in Java and JavaScript to ensure maximum speed, memory efficiency, and clean codebases.",
      tag: "JAVA / DATA STRUCTURES",
    },
  ];

  return (
    <section
      id="services"
      ref={containerRef}
      className="stacked-section stacked-section-dark relative py-28 sm:py-36 px-6 sm:px-12 z-40 bg-[#020014] overflow-hidden select-none"
    >
      {/* Ambient Glows */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-lime-500/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto relative z-10">
        {/* Title: SERVICES with ghost outline to solid reveal */}
        <div className="relative mb-20 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-500/10 border border-lime-500/30 mb-5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400" />
            </span>
            <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-lime-400 uppercase">
              CAPABILITIES & SERVICES
            </span>
          </div>

          <div className="relative w-full">
            {/* Outline ghost title */}
            <h2 className="font-display font-black text-[clamp(44px,7vw,110px)] uppercase tracking-tight stroke-text select-none">
              SERVICES
            </h2>

            {/* Solid Silver / White Title Layer */}
            <motion.h2
              style={{ opacity: titleSolidOpacity }}
              className="absolute inset-0 font-display font-black text-[clamp(44px,7vw,110px)] uppercase tracking-tight text-white drop-shadow-[0_0_35px_rgba(255,255,255,0.2)] pointer-events-none"
            >
              SERVICES
            </motion.h2>
          </div>

          <p className="font-mono text-white/50 text-xs sm:text-sm tracking-[0.25em] uppercase mt-3">
            // WHAT I BRING TO THE TABLE
          </p>
        </div>

        {/* Vertical List of Service Rows */}
        <div className="w-full border-t border-white/10">
          {serviceItems.map((item, index) => (
            <motion.div
              key={item.num}
              initial={{ filter: "blur(8px)", opacity: 0.2, y: 15 }}
              whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="py-9 border-b border-white/10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center group transition-all duration-300 hover:bg-white/[0.04] px-6 rounded-2xl border border-transparent hover:border-white/15 hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)] cursor-pointer"
            >
              {/* Big Number (01-05) */}
              <div className="md:col-span-2 flex items-center gap-3">
                <span className="font-display text-[44px] sm:text-[56px] font-black bg-gradient-to-r from-purple-400 via-pink-400 to-[#A3E635] bg-clip-text text-transparent tracking-tighter leading-none group-hover:scale-105 transition-transform duration-300 inline-block">
                  {item.num}
                </span>
              </div>

              {/* Title & Tag */}
              <div className="md:col-span-4 flex flex-col gap-1.5">
                <h3 className="font-display font-bold text-[14px] sm:text-[16px] tracking-[0.04em] text-white uppercase group-hover:text-[#A3E635] transition-colors duration-300">
                  {item.title}
                </h3>
                <span className="text-[10px] font-mono text-white/40 tracking-wider uppercase font-semibold">
                  {item.tag}
                </span>
              </div>

              {/* Description */}
              <div className="md:col-span-5">
                <p className="font-body text-white/70 text-[13px] sm:text-[14.5px] leading-relaxed max-w-[520px] group-hover:text-white/95 transition-colors duration-300">
                  {item.desc}
                </p>
              </div>

              {/* Action Arrow Icon */}
              <div className="md:col-span-1 flex justify-end">
                <span className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/60 group-hover:text-[#A3E635] group-hover:border-[#A3E635]/50 group-hover:bg-lime-400/10 transition-all duration-300 text-sm">
                  ↗
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
