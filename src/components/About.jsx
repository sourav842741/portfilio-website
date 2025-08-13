import React, { useRef, useEffect } from "react";
import { Tilt } from "react-tilt";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

gsap.registerPlugin(ScrollTrigger);

const useGsap = (elementRef, animation, delay = 0) => {
  useEffect(() => {
    if (elementRef.current) {
      gsap.fromTo(elementRef.current, animation.from, {
        ...animation.to,
        delay,
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }
  }, [elementRef, animation, delay]);
};

const ServiceCard = ({ index, title, icon }) => {
  const cardRef = useRef(null);
  useGsap(
    cardRef,
    {
      from: { opacity: 0, y: 100, scale: 0.8 },
      to: { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" },
    },
    index * 0.2
  );

  return (
    <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
      <Tilt className="xs:w-[280px] w-full">
        <div
          ref={cardRef}
          className="w-full bg-gradient-to-br from-blue-500/10 to-purple-600/10 p-[1px] rounded-2xl shadow-2xl border border-blue-500/20"
        >
          <div className="bg-black/80 backdrop-blur-sm rounded-2xl py-8 px-8 min-h-[300px] flex flex-col justify-center items-center text-center group hover:bg-black/90 transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <img
                src={icon}
                alt={title}
                className="w-12 h-12 object-contain"
              />
            </div>
            <h3 className="text-white text-[22px] font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300">
              {title}
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const About = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  // Heading Animation
  useGsap(headingRef, {
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
  });

  // Paragraph Animation
  useGsap(
    paragraphRef,
    {
      from: { opacity: 0, y: 50 },
      to: { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
    },
    0.3
  );

  return (
    <>
      <div ref={headingRef} className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30"
        >
          <span className="text-blue-400 text-sm font-medium">
            Get to know me
          </span>
        </motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </div>

<div ref={paragraphRef} className="max-w-4xl mx-auto text-center mb-20">
  <p className="text-gray-300 text-[18px] leading-[32px]">
    🚀 <b>Full-Stack Developer | Problem Solver | Innovator</b> skilled in <b>Java, JavaScript, React, Node.js, and Express.js</b>. Experienced in building <b>scalable web apps</b> including a Learning Portal, Social Media Platform, Hostel Listing App, E-Commerce Store, and Weather App.
    <br /><br />
    🎓 <b>Education:</b> <br />
    <b>Computer Science Engineering (CSE)</b> | Abacus Institute of Engineering And Management – (Mogra) | CGPA: <b>8.7</b> | (10-2-2025) <br />
    <b>XII (PSEB)</b> | Indian Public School | <b>89.7%</b> | 2022 <br />
    <b>X (PSEB)</b> | Dr. Ambedkar Vidiya Mandir | <b>99.9%</b> | 2020
  </p>
</div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
