
import {
  backend,
  creator,
  mobile,
  web,
  github,
  css,
  project2,
  project3,
  project4,
  project5,
  project6,
  mysql,
  express,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  project1,
  project8,
  project9,
  project10,
  project11,
  opentube,
  blogverse,
  instadl,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "DSA Problem Solver",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github,
  },
];

const experiences = [
  {
    title: "Frontend Development Intern",
    company_name: "IBM SkillsBuild Project",
    icon: undefined,
    iconBg: "#383E56",
    date: "4 Weeks",
    points: [
      "Completed a 4-week internship at IBM focusing on frontend development.",
      "Worked extensively with HTML, CSS, and JavaScript to build responsive and user-friendly web pages.",
      "Gained hands-on experience in designing interactive UI components and improving overall site usability.",
      "Learned and applied industry-standard coding practices to deliver clean and maintainable code.",
    ],
  },
];

const achievements = [
  "Developed and deployed multiple full-stack projects including a Learning Management Portal, Instagram-like social platform, Hostel Listing platform, and an E-Commerce website.",
  "Implemented advanced features like real-time notifications, AI-powered functionalities, interactive maps, and secure authentication in MERN stack applications.",
  "Continuously learning and applying new technologies to build scalable, user-friendly, and visually appealing web applications.",
];

const projects = [
  {
    name: "Place Mentors – AI Placement Preparation Platform",
    description:
      "Full-stack placement accelerator with AI study roadmaps, real-time multiplayer coding battle arena (Socket.io), resume analyzer, and DSA question tracking.",
    tags: [
      { name: "React 18", color: "blue-text-gradient" },
      { name: "Socket.io", color: "green-text-gradient" },
      { name: "Redux Toolkit", color: "pink-text-gradient" },
      { name: "AI Mentorship", color: "white-text-gradient" },
    ],
    image: "/assets/projects/placementor.png",
    source_code_link: "https://github.com/sourav842741/Place--Mentors.git",
    live_demo_link: "https://placementor.online/",
  },
  {
    name: "Nexus ERP – Multi-Channel Operations & Inventory Hub",
    description:
      "Enterprise Marketplace ERP featuring single-source-of-truth inventory ledger, automated order deductions, inter-warehouse transfers, dynamic RBAC, and multi-channel synchronization.",
    tags: [
      { name: "MERN Stack", color: "green-text-gradient" },
      { name: "Socket.io", color: "blue-text-gradient" },
      { name: "Inventory Ledger", color: "white-text-gradient" },
      { name: "RBAC", color: "pink-text-gradient" },
    ],
    image: "/assets/projects/erp_dashboard.png",
    source_code_link: "https://github.com/sourav842741/ERP-System.git",
    live_demo_link: "https://erp-system-os.onrender.com",
  },
  {
    name: "Yaadon Ki Gali – 90s Indian Nostalgia",
    description:
      "An interactive digital museum capturing 90s Indian culture with retro cassette players, CRT television scanline modals, live internet radio, and nostalgic ambient audio.",
    tags: [
      { name: "React 18", color: "blue-text-gradient" },
      { name: "Web Audio", color: "yellow-text-gradient" },
      { name: "Retro CRT", color: "pink-text-gradient" },
      { name: "Vercel", color: "white-text-gradient" },
    ],
    image: "/assets/projects/yaade1.webp",
    source_code_link: "https://github.com/sourav842741/90-s-ki-yaade.git",
    live_demo_link: "https://90-s-ki-yaade.vercel.app/",
  },
  {
  name: "MultiCart – Multi-Vendor Marketplace Platform",
  description:
    "A modern multi-vendor marketplace application that enables users to create their own online stores and manage products independently. The platform includes seller onboarding, dynamic product listing, cart management, and a scalable frontend architecture. Designed for business scalability and smooth user experience using optimized component structure and state management.",
  tags: [
    { name: "Next.js", color: "white-text-gradient" },
    { name: "TypeScript", color: "blue-text-gradient" },
    { name: "Tailwind CSS", color: "white-text-gradient" },
    { name: "Marketplace Platform", color: "green-text-gradient" },
    { name: "Vercel Deployment", color: "pink-text-gradient" },
  ],
  image: project11,
  source_code_link: "https://github.com/sourav842741/Multicart",
  live_demo_link: "https://multicart-omega.vercel.app/",
},
  {
  name: "function-contract – Runtime API Validator",
  description:
    "A lightweight npm package designed to validate API responses and function outputs at runtime. It helps detect frontend-backend mismatches instantly by enforcing structured data contracts, preventing silent UI failures and improving application reliability.",
  tags: [
    { name: "JavaScript", color: "yellow-text-gradient" },
    { name: "Node.js", color: "green-text-gradient" },
    { name: "NPM Package", color: "white-text-gradient" },
    { name: "Runtime Validation", color: "blue-text-gradient" },
    { name: "API Development", color: "pink-text-gradient" },
  ],
  image: project10,
  source_code_link: "https://github.com/sourav842741/function-contracter",
  live_demo_link: "https://www.npmjs.com/package/function-contract",
},
  {
  name: "Customer Support AI – Intelligent Chat Assistant",
  description:
    "An AI-powered customer support application built using Next.js and TypeScript. The platform integrates Google's Gemini API to generate intelligent and real-time responses to user queries. It features a dynamic chat interface, API routes for backend logic, and a fully responsive modern UI.",
  tags: [
    { name: "Next.js", color: "white-text-gradient" },
    { name: "TypeScript", color: "blue-text-gradient" },
    { name: "Gemini API", color: "white-text-gradient" },
    { name: "Tailwind CSS", color: "white-text-gradient" },
    { name: "Vercel", color: "green-text-gradient" },
  ],
  image: project9,
  source_code_link: "https://github.com/sourav842741/Customer-Support-ai",
  live_demo_link: "https://customer-support-ai-virid.vercel.app/",
},
  {
  name: "Study Sathi AI – Smart Learning Platform",
  description:
    "An AI-powered MERN stack web application built to enhance student learning experience. The platform provides secure authentication, AI-based doubt resolution, interactive study sessions, progress tracking, and a modern responsive interface to support efficient and personalized learning.",
  tags: [
    { name: "MongoDB", color: "green-text-gradient" },
    { name: "Express.js", color: "blue-text-gradient" },
    { name: "React.js", color: "pink-text-gradient" },
    { name: "Node.js", color: "yellow-text-gradient" },
    { name: "Tailwind CSS", color: "white-text-gradient" },
    { name: "Artificial Intelligence", color: "white-text-gradient" },
  ],
  image: project8,
  source_code_link: "https://github.com/sourav842741/StudySathi---Ai",
  live_demo_link: "https://studysathi-ai-client.onrender.com/auth",
},
  {
    name: "E-Learning Management System",
    description:
      "A full-stack MERN application for managing and delivering online courses. Includes features like user authentication, course creation, video lectures, progress tracking, and responsive UI for a smooth learning experience.",
    tags: [
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "Express.js", color: "blue-text-gradient" },
      { name: "React.js", color: "pink-text-gradient" },
      { name: "Node.js", color: "yellow-text-gradient" },
      { name: "Tailwind CSS", color: "white-text-gradient" },
    ],
    image: project1,
    source_code_link: "https://github.com/sourav842741/Vidyapath-Coureses",
    live_demo_link: "https://vidyapath-coureses-1.onrender.com/",
  },

{
  name: "CreoVue – Social Media Platform",
  description:
    "CreoVue is a modern, full-stack social media platform developed using the MERN stack (MongoDB, Express, React, Node.js) that enables users to create, edit, and explore blogs in real-time. ",
  tags: [
    { name: "React", color: "blue-text-gradient" },
    { name: "Express", color: "green-text-gradient" },
    { name: "MongoDB", color: "white-text-gradient" },
    { name: "Node.js", color: "pink-text-gradient" },
    { name: "JWT Auth", color: "yellow-text-gradient" },
    { name: "Responsive UI", color: "orange-text-gradient" },
  ],
  image: project2,
  source_code_link: "https://github.com/sourav842741/Creovue-Social-Media",
  live_demo_link: "https://creovue-social-media.onrender.com",
},

  {
  name: "Quick Zaikaa- Food Delivery Website",
  description:
    "Quick Zaikaa is a modern food delivery web application  built using React and Redux. It allows users to browse restaurants, filter them by ratings, cuisine, and budget, and quickly add food items to the cart. The app features a responsive UI built with Tailwind CSS, shimmer loading effects for better UX, and offline detection.",
  tags: [
    { name: "React", color: "blue-text-gradient" },
    { name: "Redux", color: "green-text-gradient" },
    { name: "Tailwind CSS", color: "pink-text-gradient" },
  ],
  image: project6, 
  source_code_link: "https://github.com/sourav842741/Quick-Zaikaa.git",
  live_demo_link: "https://quick-zaikaa.onrender.com/",
},


  {
    name: "OpenTube – Full-Stack Video Streaming Platform",
    description:
      "Full-stack YouTube clone built with React, Tailwind CSS, Node.js, and MongoDB. Features video uploads, streaming player, Shorts reel, comments, likes/subscriptions, and responsive dark UI.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "pink-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "Express", color: "orange-text-gradient" },
      { name: "MongoDB", color: "white-text-gradient" },
    ],
    image: opentube,
    source_code_link: "https://github.com/sourav842741/Open-Tube.git",
    live_demo_link: "https://open-tube-1.onrender.com/",
  },
  {
    name: "BlogVerse – Cross-Platform Tech Publishing & Mobile App",
    description:
      "Modern cross-platform engineering publication ecosystem with React web client, React Native Expo mobile app, Node/Express/MongoDB API, real-time live sync, SVG captchas, and dynamic markdown handbooks.",
    tags: [
      { name: "React 18", color: "blue-text-gradient" },
      { name: "React Native", color: "green-text-gradient" },
      { name: "Expo SDK", color: "white-text-gradient" },
      { name: "Node.js", color: "pink-text-gradient" },
      { name: "MongoDB Atlas", color: "green-text-gradient" },
    ],
    image: blogverse,
    source_code_link: "https://github.com/sourav842741/Blog-website.git",
    live_demo_link: "https://blog-website-1-ez1y.onrender.com",
  },
  {
    name: "InstaDL – Instagram Reels & Story Downloader",
    description:
      "A fast, responsive Instagram media downloader built with React 18, Vite, Tailwind CSS, and Framer Motion. Enables users to paste Instagram Reel/Post links, preview video metadata, and download HD MP4 files with download history tracking.",
    tags: [
      { name: "React 18", color: "blue-text-gradient" },
      { name: "Vite", color: "pink-text-gradient" },
      { name: "Tailwind CSS", color: "white-text-gradient" },
      { name: "Framer Motion", color: "green-text-gradient" },
      { name: "Vercel", color: "yellow-text-gradient" },
    ],
    image: instadl,
    source_code_link: "https://github.com/sourav842741/instagram-story-downloader",
    live_demo_link: "https://instagram-story-downloader-jet.vercel.app/",
  },

 {
  name: "Blinkit Clone",
  description:
    "A fully responsive grocery delivery platform clone inspired by Blinkit. Features category-wise product listing, cart management, and a modern UI with fast navigation. Built using HTML, CSS, and JavaScript for a smooth and engaging shopping experience.",
  tags: [
    { name: "HTML", color: "blue-text-gradient" },
    { name: "CSS", color: "white-text-gradient" },
    { name: "JavaScript", color: "pink-text-gradient" },
  ],
  image: project4,
  source_code_link: "https://github.com/sourav842741/Blinkit-Clone",
  live_demo_link: "https://blinkit-clone-psi.vercel.app/",
},

  {
    name: "Simon Say Game",
    description:
      "A visually accurate frontend clone of Razorpay built with HTML and Tailwind CSS. Fully responsive layout replicating modern UI components and animations for practice and learning purposes.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
    ],
    image: project5,
    source_code_link: "https://github.com/sourav842741/siman-says-game.git",
    live_demo_link: "https://siman-says-game-one.vercel.app/",
  },

];

export { services, technologies, experiences, projects, achievements };
