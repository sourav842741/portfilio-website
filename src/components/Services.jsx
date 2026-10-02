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
    },
    {
      num: "02",
      title: "FRONTEND & UI/UX INTERACTION",
      desc: "Crafting pixel-perfect, high-performance interfaces with Tailwind CSS, Framer Motion, and GSAP micro-animations for high-conversion web products.",
    },
    {
      num: "03",
      title: "MICROSERVICES & BACKEND SYSTEMS",
      desc: "Engineering distributed microservices, RabbitMQ event queues, Redis caching & pub/sub, secure RESTful APIs, and runtime contract validators.",
    },
    {
      num: "04",
      title: "AI INTEGRATION & AUTOMATION",
      desc: "Integrating cutting-edge LLMs including Google Gemini API to build intelligent real-time conversational agents, doubt resolvers, and smart helpers.",
    },
    {
      num: "05",
      title: "DSA & PERFORMANCE OPTIMIZATION",
      desc: "Applying strong algorithmic problem-solving principles in Java and JavaScript to ensure maximum speed, memory efficiency, and clean codebases.",
    },
  ];

  return (
    <section
      id="services"
      ref={containerRef}
      className="stacked-section stacked-section-light relative py-28 px-6 sm:px-12 z-40 select-none"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Title: SERVICES with ghost outline to solid black reveal */}
        <div className="relative mb-20 text-center">
          {/* Outline ghost title */}
          <h2 className="font-display font-black text-[clamp(44px,7vw,110px)] uppercase tracking-tight stroke-text-black">
            SERVICES
          </h2>

          {/* Solid Black Title Layer */}
          <motion.h2
            style={{ opacity: titleSolidOpacity }}
            className="absolute inset-0 font-display font-black text-[clamp(44px,7vw,110px)] uppercase tracking-tight text-[#0A0A0A] pointer-events-none"
          >
            SERVICES
          </motion.h2>
          <p className="font-body text-[#6B7280] text-xs sm:text-sm tracking-[0.2em] uppercase mt-2">
            WHAT I BRING TO THE TABLE
          </p>
        </div>

        {/* Vertical List of 5 Rows with 1px dividers */}
        <div className="w-full border-t border-gray-300">
          {serviceItems.map((item, index) => (
            <motion.div
              key={item.num}
              initial={{ filter: "blur(8px)", opacity: 0.2, y: 15 }}
              whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="py-10 border-b border-gray-300 grid grid-cols-1 md:grid-cols-12 gap-6 items-center group transition-colors duration-300 hover:bg-black/[0.02] px-4 rounded-xl"
            >
              {/* Big Number (01-05) */}
              <div className="md:col-span-2">
                <span className="font-display text-[46px] sm:text-[56px] text-[#0A0A0A] tracking-tighter leading-none group-hover:text-purple-600 transition-colors duration-300">
                  {item.num}
                </span>
              </div>

              {/* Title */}
              <div className="md:col-span-4">
                <h3 className="font-body font-bold text-[14px] sm:text-[15px] tracking-[0.1em] text-[#0A0A0A] uppercase">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <div className="md:col-span-6">
                <p className="font-body text-[#6B7280] text-[13px] sm:text-[14px] leading-relaxed max-w-[500px]">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
