import React, { useEffect } from "react";
import Lenis from "lenis";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MarqueeGallery from "./components/MarqueeGallery";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";

const App = () => {
  useEffect(() => {
    // Initialize Lenis smooth scroll for the silky Wix Studio feel
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    let animationFrameId;

    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#020014] text-white selection:bg-purple-600 selection:text-white">
      {/* 1. Fixed/Sticky Top Navigation */}
      <Navbar />

      <main className="relative flex flex-col w-full">
        {/* 2. Hero (Dark) */}
        <Hero />

        {/* 3. Client Logo Marquee + 3D Image Gallery (Dark) */}
        <MarqueeGallery />

        {/* 4. About Me (Dark) */}
        <AboutMe />

        {/* 5. Services (LIGHT) */}
        <Services />

        {/* 6. Projects (Dark, Stacking Sticky Cards) */}
        <Projects />

        {/* 7. What Clients Are Saying (Dark Bento Testimonials) */}
        <Testimonials />

        {/* 8. Let's Get In Touch (LIGHT) */}
        <ContactSection />
      </main>

      {/* 9. Footer (Dark) */}
      <FooterSection />
    </div>
  );
};

export default App;
