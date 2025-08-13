import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa6";
import { SiLeetcode, SiCodeforces } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      <a
        href="https://github.com/sourav842741"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://leetcode.com/u/sourav_kumar_07_/"
        target="_blank"
        rel="noopener noreferrer"
        title="LeetCode"
      >
        <SiLeetcode size={24} />
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        title="Codeforces"
      >
        <SiCodeforces size={24} />
      </a>
    <a
  href="https://codolio.com/profile/Sourav%20Kumar"
  target="_blank"
  rel="noopener noreferrer"
  title="Codolio"
>
  <img
    src="https://codolio.com/favicon.ico" 
    /* Or use the full owl logo SVG hosted locally or online */
    alt="Codolio"
    style={{ width: 24, height: 24 }}
  />
</a>


      <a
        href="https://www.linkedin.com/in/sourav-kumar-01250b30b/"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="mailto:souravkumar85055@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        title="Email"
      >
        <FaEnvelope size={24} />
      </a>
      <a
        href="https://www.instagram.com/sourav_kumar_07_/"
        target="_blank"
        rel="noopener noreferrer"
        title="Instagram"
      >
        <FaInstagram size={24} />
      </a>
    </footer>
  );
};

export default Footer;
