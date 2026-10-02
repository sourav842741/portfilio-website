import React from "react";

const Testimonials = () => {
  const testimonialsRow1 = [
    {
      name: "VIKRAM SHARMA",
      role: "CTO",
      company: "HIREFAST TECH",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      projectTag: "Real-Time Battle Arena",
      stars: 5,
      quote:
        "Sourav engineered our real-time multiplayer coding arena using Socket.io and Redis with zero synchronization lag. His grasp of distributed architecture and event-driven design is genuinely remarkable.",
    },
    {
      name: "DR. ANDREA K.",
      role: "VP OF ENGINEERING",
      company: "SCALECLOUD SYSTEMS",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
      projectTag: "Nexus ERP Hub",
      stars: 5,
      quote:
        "The inventory ledger and multi-warehouse sync system Sourav built eliminated our stock discrepancies completely. Clean code, robust RBAC, and delivered ahead of schedule.",
    },
    {
      name: "ARJUN MEHTA",
      role: "FOUNDER",
      company: "SHOPORBIT COMMERCE",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      projectTag: "Multi-Vendor Marketplace",
      stars: 5,
      quote:
        "Working with Sourav was seamless from day one. He architected our multi-vendor storefront on Next.js 14 with blazing fast load times and clean, resilient API schemas.",
    },
    {
      name: "ELENA ROSTOVA",
      role: "PRODUCT LEAD",
      company: "DEVSPHERE LABS",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      projectTag: "Microservices & RabbitMQ",
      stars: 5,
      quote:
        "Sourav decoupled our monolith into event-driven microservices using RabbitMQ and Docker. System throughput jumped by 300% under peak loads. Top-tier software engineer!",
    },
  ];

  const testimonialsRow2 = [
    {
      name: "DAVID J. CHEN",
      role: "HEAD OF PLATFORM",
      company: "APEX SOLUTIONS",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      projectTag: "function-contract NPM",
      stars: 5,
      quote:
        "His runtime contract validation library saved our frontend and backend teams countless hours of debugging schema mismatches. Thoughtful developer experience and zero bloat.",
    },
    {
      name: "PRIYA NAIR",
      role: "CO-FOUNDER",
      company: "EDUTECH INNOVATIONS",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
      projectTag: "StudySathi AI Platform",
      stars: 5,
      quote:
        "Sourav integrated Google Gemini AI into our student learning portal with streaming responses and contextual chat history. The students love the lightning-fast responsiveness!",
    },
    {
      name: "JAMES C. MILLER",
      role: "TECHNICAL DIRECTOR",
      company: "VELOCITY VENTURES",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80",
      projectTag: "MERN Stack Architecture",
      stars: 5,
      quote:
        "Sourav blends deep backend knowledge with slick modern UI aesthetics. He writes clean, typed, modular code and communicates proactively. An indispensable asset to any team.",
    },
    {
      name: "MARCUS PATEL",
      role: "LEAD ARCHITECT",
      company: "FINTECH CORE",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      projectTag: "Redis & Caching Pipeline",
      stars: 5,
      quote:
        "His Redis caching strategy slashed our database query times from 450ms down to sub-15ms. Extremely solid fundamentals in algorithms, data structures, and system design.",
    },
  ];

  const renderCard = (item, idx) => (
    <div
      key={`${item.name}-${idx}`}
      className="w-[340px] sm:w-[420px] flex-shrink-0 bg-[#06041D] border border-white/15 hover:border-purple-400/80 rounded-[24px] p-6 sm:p-7 flex flex-col justify-between group transition-all duration-300 shadow-[0_12px_32px_rgba(0,0,0,0.6)] hover:shadow-[0_16px_40px_rgba(168,85,247,0.25)] hover:-translate-y-1 select-none backdrop-blur-xl"
    >
      <div>
        {/* Top Row: Avatar + Status + Project Tag */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-11 h-11 rounded-full object-cover border-2 border-white/20 group-hover:border-purple-400 transition-colors"
                loading="lazy"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#06041D]" />
            </div>
            <div>
              <span className="font-body font-bold text-xs tracking-wider text-white uppercase block">
                {item.name}
              </span>
              <span className="text-[10px] text-white/50 tracking-wider uppercase font-body block">
                {item.role} • {item.company}
              </span>
            </div>
          </div>
          <span className="text-[9px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-300">
            {item.projectTag}
          </span>
        </div>

        {/* 5 Stars Rating */}
        <div className="flex items-center gap-1 mb-4 text-amber-400">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Quote */}
        <p className="font-body text-white/80 text-[13px] sm:text-[14px] leading-relaxed italic">
          "{item.quote}"
        </p>
      </div>

      {/* Verified Badge Bottom */}
      <div className="border-t border-white/10 pt-3 mt-4 flex items-center justify-between text-[10px] text-white/40 font-mono tracking-wider uppercase">
        <span className="flex items-center gap-1.5 text-purple-300/80">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
          Verified Collaboration
        </span>
        <span>100% On-Time Delivery</span>
      </div>
    </div>
  );

  return (
    <section
      id="testimonials"
      className="stacked-section stacked-section-dark relative py-24 sm:py-32 bg-[#020014] overflow-hidden z-60"
    >
      {/* Title & Header */}
      <div className="max-w-[1300px] mx-auto text-center mb-14 px-4 sm:px-10">
        <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-purple-400 bg-purple-950/60 px-4 py-1.5 rounded-full border border-purple-500/30 inline-block mb-3">
          TESTIMONIALS & ENDORSEMENTS
        </span>
        <h2 className="font-body font-bold text-white text-[32px] sm:text-[46px] leading-tight tracking-tight max-w-[700px] mx-auto">
          What Clients & Teams Are Saying
        </h2>
        <p className="font-body text-white/50 text-xs sm:text-sm tracking-[0.15em] uppercase mt-2">
          FEEDBACK FROM TECH LEADS, FOUNDERS & ENGINEERING COLLABORATORS
        </p>
      </div>

      {/* Infinite Horizontal Marquee Container */}
      <div className="relative w-full flex flex-col gap-6 overflow-hidden">
        {/* Soft edge blur masks for continuous left/right flow */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-44 bg-gradient-to-r from-[#020014] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-44 bg-gradient-to-l from-[#020014] to-transparent z-10" />

        {/* Row 1: Marquee Scrolling Left */}
        <div className="marquee-testimonials-left flex items-center gap-6">
          {[...testimonialsRow1, ...testimonialsRow1, ...testimonialsRow1].map(
            (item, idx) => renderCard(item, idx)
          )}
        </div>

        {/* Row 2: Marquee Scrolling Right */}
        <div className="marquee-testimonials-right flex items-center gap-6">
          {[...testimonialsRow2, ...testimonialsRow2, ...testimonialsRow2].map(
            (item, idx) => renderCard(item, idx)
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
