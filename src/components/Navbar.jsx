import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "ABOUT", href: "#about" },
    { title: "SHOWCASE", href: "#customers" },
    { title: "PROJECTS", href: "#projects" },
    { title: "REVIEWS", href: "#testimonials" },
    { title: "CONTACT", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#020014]/90 backdrop-blur-xl py-3 border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1380px] mx-auto px-6 sm:px-10 flex justify-between items-center">
        {/* Brand Logo: SOURAV.DEV */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-lime-400 p-[1.5px] shadow-lg shadow-purple-500/25 transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-[#030014] rounded-2xl flex items-center justify-center font-display font-black text-sm text-white group-hover:bg-transparent transition-colors">
              SK
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-black text-sm tracking-wider text-white group-hover:text-lime-300 transition-colors">
              SOURAV.DEV
            </span>
            <span className="text-[9px] font-mono font-bold tracking-[0.2em] text-lime-400 uppercase">
              FULL-STACK & SYSTEMS
            </span>
          </div>
        </a>

        {/* Desktop Centered Floating Navigation Capsule */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#06041D]/90 border border-white/15 rounded-full px-5 py-2 backdrop-blur-xl shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-white/75 hover:text-white font-body text-[11px] font-bold tracking-[0.16em] px-4 py-1.5 rounded-full hover:bg-white/10 transition-all uppercase duration-200"
            >
              {link.title}
            </a>
          ))}
        </nav>

        {/* Right CTA & Status Pill */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="hidden xl:inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lime-500/10 border border-lime-500/30 text-lime-300 text-[10px] font-mono tracking-wider">
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
            <span>OPEN TO WORK</span>
          </div>

          <a
            href="#contact"
            className="cta-pill group !py-2 !px-5 !text-[11px]"
          >
            <span>LET'S TALK</span>
            <span className="text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2.5 rounded-xl bg-white/5 border border-white/10 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#020014]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 transition-all duration-300">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/90 hover:text-white font-body text-xs font-bold tracking-[0.2em] py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.title}</span>
                <span className="text-lime-400 text-xs">↗</span>
              </a>
            ))}
            <div className="pt-2 flex justify-between items-center">
              <span className="text-[11px] font-mono text-lime-400">
                🟢 Available for Full-Stack Roles
              </span>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="cta-pill !py-2 !px-4 !text-[10px]"
              >
                LET'S TALK
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
