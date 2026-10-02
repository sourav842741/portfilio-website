import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "ABOUT", href: "#about" },
    { title: "CUSTOMERS", href: "#customers" },
    { title: "PROJECTS", href: "#projects" },
    { title: "CONTACT", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#020014]/80 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 flex justify-between items-center">
        {/* Desktop 4 links spread evenly across full width */}
        <nav className="w-full hidden md:flex justify-between items-center">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-white/80 hover:text-white font-body text-[12px] sm:text-[13px] font-bold tracking-[0.2em] transition-colors uppercase duration-200 relative group py-2"
            >
              {link.title}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Mobile Header: Logo/Initials + Hamburger */}
        <div className="w-full flex md:hidden justify-between items-center">
          <a href="#" className="font-display text-white text-lg tracking-wider">
            SK.3D
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            <svg
              className="w-6 h-6"
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
        <div className="md:hidden bg-[#020014]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 transition-all duration-300">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/90 hover:text-white font-body text-sm font-bold tracking-[0.2em] py-2 border-b border-white/5"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
