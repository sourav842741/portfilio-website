import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaArrowUp } from "react-icons/fa6";
import { SiLeetcode, SiCodeforces } from "react-icons/si";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      handle: "@sourav842741",
      url: "https://github.com/sourav842741",
      icon: <FaGithub className="text-xl" />,
      color: "hover:border-white/80 hover:text-white hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]",
    },
    {
      name: "LeetCode",
      handle: "@sourav_kumar_07_",
      url: "https://leetcode.com/u/sourav_kumar_07_/",
      icon: <SiLeetcode className="text-xl" />,
      color: "hover:border-amber-400/80 hover:text-amber-400 hover:shadow-[0_0_25px_rgba(251,191,36,0.35)]",
    },
    {
      name: "LinkedIn",
      handle: "Sourav Kumar",
      url: "https://www.linkedin.com/in/sourav-kumar-01250b30b/",
      icon: <FaLinkedin className="text-xl" />,
      color: "hover:border-blue-400/80 hover:text-blue-400 hover:shadow-[0_0_25px_rgba(96,165,250,0.35)]",
    },
    {
      name: "Codolio",
      handle: "Sourav Kumar",
      url: "https://codolio.com/profile/Sourav%20Kumar",
      icon: (
        <img
          src="https://codolio.com/favicon.ico"
          alt="Codolio"
          className="w-5 h-5 rounded-full object-cover"
        />
      ),
      color: "hover:border-purple-400/80 hover:text-purple-300 hover:shadow-[0_0_25px_rgba(192,38,211,0.35)]",
    },
    {
      name: "Instagram",
      handle: "@sourav_kumar_07_",
      url: "https://www.instagram.com/sourav_kumar_07_/",
      icon: <FaInstagram className="text-xl" />,
      color: "hover:border-pink-500/80 hover:text-pink-400 hover:shadow-[0_0_25px_rgba(236,72,153,0.35)]",
    },
    {
      name: "Email",
      handle: "souravkumar85055@gmail.com",
      url: "mailto:souravkumar85055@gmail.com",
      icon: <FaEnvelope className="text-xl" />,
      color: "hover:border-emerald-400/80 hover:text-emerald-400 hover:shadow-[0_0_25px_rgba(52,211,153,0.35)]",
    },
  ];

  const quickNav = [
    { name: "Home / Hero", href: "#home" },
    { name: "Tech Ecosystem", href: "#customers" },
    { name: "About & Education", href: "#about" },
    { name: "Core Services", href: "#services" },
    { name: "Featured Projects", href: "#projects" },
    { name: "Client Endorsements", href: "#testimonials" },
    { name: "Contact & Collab", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="stacked-section stacked-section-dark relative pt-24 pb-16 px-6 sm:px-12 z-80 bg-[#020014] overflow-hidden select-none border-t border-white/10">
      <div className="max-w-[1340px] mx-auto">
        {/* Main Grid: Name + Navigation + Profiles + Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-white/10 pb-16 mb-12">
          {/* Left Column (5 cols): Name & Bio */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="font-display font-black text-[clamp(44px,6vw,92px)] leading-[0.92] tracking-tighter uppercase stroke-text-thick hover:stroke-to-fill transition-all duration-300 cursor-default">
                SOURAV
                <br />
                KUMAR
              </h2>

              <p className="font-body text-white/70 text-xs sm:text-sm tracking-wide leading-relaxed max-w-[460px] mt-6">
                Full-Stack Software Engineer specializing in modern MERN & Next.js architectures, distributed microservices (Redis, RabbitMQ, Docker), real-time WebSockets, and scalable cloud systems.
              </p>

              {/* Status Indicator */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-[11px] font-mono tracking-wider uppercase mt-5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for Full-Stack & Engineering Roles</span>
              </div>
            </div>

            <p className="font-body text-white/40 text-[11px] tracking-wider uppercase mt-8">
              © {currentYear} SOURAV KUMAR · ALL RIGHTS RESERVED
            </p>
          </div>

          {/* Right Columns (7 cols): Profiles, Navigation, Direct Contact */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Col 1: CODING & SOCIAL PROFILES */}
            <div>
              <span className="font-body font-bold text-[11px] tracking-[0.2em] text-purple-400 uppercase block mb-4">
                PROFILES & CODE
              </span>
              <ul className="flex flex-col space-y-3">
                {socialLinks.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between text-[12px] sm:text-[13px] text-white/75 hover:text-white transition-colors duration-200"
                    >
                      <span className="font-body tracking-wider uppercase flex items-center gap-2">
                        <span className="text-white/40 group-hover:text-purple-400 transition-colors">
                          {item.icon}
                        </span>
                        {item.name}
                      </span>
                      <span className="text-xs text-white/30 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 2: NAVIGATION */}
            <div>
              <span className="font-body font-bold text-[11px] tracking-[0.2em] text-purple-400 uppercase block mb-4">
                NAVIGATION
              </span>
              <ul className="flex flex-col space-y-2.5">
                {quickNav.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="font-body text-[12px] sm:text-[13px] text-white/75 hover:text-white transition-colors duration-200 tracking-wider uppercase flex items-center justify-between group"
                    >
                      <span>{link.name}</span>
                      <span className="text-white/20 group-hover:text-white/80 transition-colors text-xs">
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: DIRECT CONTACT */}
            <div>
              <span className="font-body font-bold text-[11px] tracking-[0.2em] text-purple-400 uppercase block mb-4">
                DIRECT CONTACT
              </span>
              <div className="flex flex-col space-y-3 text-[12px] sm:text-[13px] font-body text-white/80">
                <div>
                  <span className="text-[10px] text-white/40 tracking-wider uppercase block font-mono">
                    Primary Email
                  </span>
                  <a
                    href="mailto:souravkumar85055@gmail.com"
                    className="hover:text-purple-400 transition-colors underline break-all text-xs"
                  >
                    souravkumar85055@gmail.com
                  </a>
                </div>

                <div>
                  <span className="text-[10px] text-white/40 tracking-wider uppercase block font-mono">
                    Secondary Email
                  </span>
                  <a
                    href="mailto:sourav842741@gmail.com"
                    className="hover:text-purple-400 transition-colors underline break-all text-xs"
                  >
                    sourav842741@gmail.com
                  </a>
                </div>

                <div>
                  <span className="text-[10px] text-white/40 tracking-wider uppercase block font-mono">
                    Location
                  </span>
                  <span className="text-white/70 text-xs">
                    New Delhi, India (Worldwide Remote)
                  </span>
                </div>

                <div>
                  <span className="text-[10px] text-white/40 tracking-wider uppercase block font-mono">
                    Timezone
                  </span>
                  <span className="text-white/70 text-xs font-mono">
                    IST (UTC +5:30)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Social Pills Bar: Full-Width High-Gloss Interactive Tiles */}
        <div className="w-full flex flex-wrap items-center justify-between gap-4 pt-2">
          {/* Social Badges Pill List */}
          <div className="flex flex-wrap items-center gap-3">
            {socialLinks.map((item) => (
              <a
                key={`badge-${item.name}`}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#06041D] border border-white/15 text-white/90 text-xs font-body font-semibold tracking-wider uppercase transition-all duration-300 ${item.color} hover:-translate-y-0.5`}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
                <span className="text-[10px] text-white/40 font-mono">
                  {item.handle}
                </span>
                <span className="text-xs text-white/40">↗</span>
              </a>
            ))}
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/20 hover:border-white text-white/80 hover:text-white font-body text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:bg-white/10 ml-auto"
            title="Scroll back to top"
          >
            <span>BACK TO TOP</span>
            <FaArrowUp className="text-xs" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
