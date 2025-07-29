import {
  // Importing icons and images from the assets folder
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  python,
  java,
  threejs,
  mysql,
  rampone,
  siinfo,
  trinaware,
  php,
  C,
  Cpp,
  BT,
  springboot,
  reactsite,
  arduino,
  raspberry,
} from "../assets";

// Navigation links used in the main navigation bar or menu of the website
export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

// Array of services offered, each with an id, title, and corresponding icon
const services = [
  { id: "service-web", title: "Web Developer", icon: web },
  { id: "service-mobile", title: "Software Developer", icon: mobile },
  { id: "service-backend", title: "Backend Developer", icon: backend },
  { id: "service-frontend", title: "Frontend Developer", icon: creator },
];

// List of technologies known or used by the developer, each having an id, display name, and icon
const technologies = [
  { id: "tech-html5", name: "HTML-5", icon: html },
  { id: "tech-css3", name: "CSS-3", icon: css },
  { id: "tech-javascript", name: "JavaScript", icon: javascript },
  { id: "tech-typescript", name: "TypeScript", icon: typescript },
  { id: "tech-reactjs", name: "React-JS", icon: reactjs },
  { id: "tech-tailwindcss", name: "Tailwind-CSS", icon: tailwind },
  { id: "tech-nodejs", name: "Node-JS", icon: nodejs },
  { id: "tech-threejs", name: "Three-JS", icon: threejs },
  { id: "tech-github", name: "GitHub", icon: git },
  { id: "tech-docker", name: "Docker", icon: docker },
  { id: "tech-python", name: "Python", icon: python },
  { id: "tech-java", name: "Java", icon: java },
  { id: "tech-mysql", name: "MySQL", icon: mysql },
  { id: "tech-php", name: "PHP", icon: php },
  { id: "tech-c", name: "C", icon: C },
  { id: "tech-cpp", name: "C++", icon: Cpp },
  { id: "tech-bootstrap", name: "Bootstrap", icon: BT },
  { id: "tech-arduino", name: "Arduino", icon: arduino },
  { id: "tech-raspberrypi", name: "Raspberry Pi", icon: raspberry },
];

// Array of professional experiences, each containing details such as role, company, dates, icon, background color, and key responsibilities or achievements
const experiences = [
  {
    id: "exp-rampone",
    title: "ICT Student",
    company_name: "I.T.C. Salvatore Rampone",
    icon: rampone,
    iconBg: "#383E56",
    date: "September 2023 - now",
    points: [
      "Development using programming languages and ICT infrastructures.",
      "ICT support and assistance.",
      "Training in Security and Privacy.",
      "Development of various robotic prototypes.",
      "Creation of structures, applications, and web pages.",
      "Use of Google Suite, virtual classrooms, and cloud lessons.",
    ],
  },
  {
    id: "exp-siinfo",
    title: "Web Developer",
    company_name: "SIINFO",
    icon: siinfo,
    iconBg: "#383E56",
    date: "May 2022 - October 2022",
    points: [
      "Development with Java(Spring Boot), SQL, React-JS.",
      "Use of AWS cloud services.",
      "Use of virtual machines.",
      "Development of structures, applications, and web pages.",
    ],
  },
  {
    id: "exp-trinaware",
    title: "Web Developer",
    company_name: "Trinaware",
    icon: trinaware,
    iconBg: "#383E56",
    date: "Sep 2023 - Dec 2023",
    points: [
      "Development with Java(Spring Boot), SQL.",
      "Use of AWS cloud services.",
      "Use of virtual machines.",
      "Development of structures, applications, microservices, and web pages.",
    ],
  },
];

// Testimonials section (currently empty, but structure reserved for future use)
// You can add user or client feedback here in the future
const testimonials = [
  /* Example:
  {
    testimonial: "Great developer, very reliable!",
    name: "John Doe",
    designation: "Manager",
    company: "Tech Corp",
    image: "link_to_image"
  }
  */
];

// Projects portfolio with details such as project name, description, technology tags, image, and source code repository link
const projects = [
  {
    id: "proj-java-backend",
    name: "Java Back-End WebSite",
    description:
      "Backend system for an e-commerce application. Features include shopping cart management, category and product management, user authentication, and order processing.",
    tags: [
      { name: "java", color: "blue-text-gradient" },
      { name: "springboot", color: "green-text-gradient" },
      { name: "sql", color: "pink-text-gradient" },
    ],
    image: springboot,
    source_code_link:
      "https://github.com/dev-francesca-mazzeo/JAVAWEBSITEBACKEND/",
  },
  {
    id: "proj-portfolio-react",
    name: "Portfolio DEVFM - React App",
    description:
      "A minimalist personal portfolio website built with React. It features a clean design, project showcase, interactive 3D graphics with Three.js, responsive layout, and a contact form.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "javascript", color: "green-text-gradient" },
      { name: "three-js", color: "blue-text-gradient" },
      { name: "html-css", color: "pink-text-gradient" },
    ],
    image: reactsite,
    source_code_link:
      "https://github.com/dev-francesca-mazzeo/PORTFOLIO-REACT-DEVFM.git",
  },
  {
    id: "proj-ecommerce-java",
    name: "E-commerce - Java App",
    description:
      "Spring Boot web application managing users, shopping carts, products, and authentication with refresh tokens.",
    tags: [
      { name: "java", color: "blue-text-gradient" },
      { name: "springboot", color: "green-text-gradient" },
      { name: "sql", color: "blue-text-gradient" },
    ],
    image: springboot,
    source_code_link: "https://github.com/dev-francesca-mazzeo/E-commerceApp",
  },
];

// Export all constants to be used in other parts of the application
export { services, technologies, experiences, testimonials, projects };
