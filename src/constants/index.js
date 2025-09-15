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
  project6,
  project5,
  project7,
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
    company_name: "IBM",
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
  name: "Quick Zaikaa",
  description:
    "Quick Zaikaa is a modern food delivery web application inspired by Swiggy, built using React and Redux. It allows users to browse restaurants, filter them by ratings, cuisine, and budget, and quickly add food items to the cart. The app features a responsive UI built with Tailwind CSS, shimmer loading effects for better UX, and offline detection. Ideal for learning real-world React patterns and state management.",
  tags: [
    { name: "React", color: "blue-text-gradient" },
    { name: "Redux", color: "green-text-gradient" },
    { name: "Tailwind CSS", color: "pink-text-gradient" },
  ],
  image: project7, 
  source_code_link: "https://github.com/sourav842741/Quick-Zaikaa.git",
  live_demo_link: "https://quick-zaikaa.onrender.com/",
},


{
  name: "Airbnb - Clone",
  description:
    "A full-stack Airbnb-inspired web application that allows users to browse, search, and book unique stays. Features include dynamic property listings, individual property detail pages, responsive design, and seamless booking flow. Built with EJS, Bootstrap, JavaScript, and MongoDB for a smooth and interactive user experience.",
  tags: [
    { name: "ejs", color: "blue-text-gradient" },
    { name: "JavaScript", color: "pink-text-gradient" },
    { name: "bootstrap", color: "green-text-gradient" },
    { name: "MongoDB", color: "white-text-gradient" },
  ],
  image: project3,
  source_code_link: "https://github.com/sourav842741/AirNb-clone",
  live_demo_link: "https://airnb-clone-1.onrender.com/",
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
