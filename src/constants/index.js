import {
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
  php,
  C,
  Cpp,
  BT,
  springboot,

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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Software Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML-5",
    icon: html,
  },
  {
    name: "CSS-3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React-JS",
    icon: reactjs,
  },
  {
    name: "Tailwind-CSS",
    icon: tailwind,
  },
  {
    name: "Node-JS",
    icon: nodejs,
  },
  {
    name: "Three-JS",
    icon: threejs,
  },
  {
    name: "GitHub",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "php",
    icon: php,
  },  {
    name: "C",
    icon: C,
  },  
  {
    name: "C++",
    icon: Cpp,
  },
  {
    name: "BootStrap",
    icon: BT,
  },
];

const experiences = [
  {
    title: "ICT Student" ,
    company_name: "I.T.C. Salvatore Rampone",
    icon: rampone,
    iconBg: "#383E56",
    date: "September 2020 - June 2025",
    points: [
      "Development with programming languages and ICT infrastructures.",
      "ICT support and assistance.",
      "Training in the field of Security and privacy.",
      "Development of robotic prototypes of various types.",
      "Development of structures, applications and web pages.",
      "Use of the google suite, virtual classes and lessons in the cloud.",
    ],
  }
];

 const testimonials = [
  /*{
    testimonial: "",
    name: "",
    designation: "",
    company: "",
    image: ""
  }*/
];

const projects = [
  {
    name: "Java Back-End WebSite",
    description:"Backend system for an e-commerce application. From the project structure and the features described, the system supports the typical features of an e-commerce application, such as shopping cart management, category management, product management, user authentication, order management and so on.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
    ],
    image: springboot,
    source_code_link: "https://github.com/dev-francesca-mazzeo/JAVAWEBSITEBACKEND/",
  }
];

export { services, technologies, experiences, testimonials, projects };