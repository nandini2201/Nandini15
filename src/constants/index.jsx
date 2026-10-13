import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  Fynii,
  P2P,
  ciena,
  trasna,
  Invoice,
  netflix,
  simon,
  threejs,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Web Developer",
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer (Backend)",
    company_name: "Trasna Solutions",
    icon: trasna,
    iconBg: "#383E56",
    date: "Sep 2023 - Present",
    points: [
      "Designed and developed 20+ scalable backend services using FastAPI and Flask with RESTful architecture.",
      "Improved API performance by up to 40% using PostgreSQL indexing, query optimization, and Redis caching.",
      "Built distributed microservices handling high-volume transactions using Celery, RabbitMQ, and asynchronous processing.",
      "Implemented JWT-based authentication and role-based access control for secure APIs.",
      "Built Dockerized services and deployed applications using CI/CD pipelines on cloud infrastructure.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Ciena India Pvt Ltd",
    icon: ciena,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Aug 2023",
    points: [
      "Developed automation tools for MPLS and BGP network systems, reducing manual effort by 30%.",
      "Built RPC-based automation and testing frameworks for large-scale network validation.",
      "Improved test coverage across distributed routing environments through automated test pipelines.",
      "Strong background in Python and leveraged tools like Pytest to streamline the testing process.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: (
      <a href="https://resulens.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
        onMouseLeave={(e) => (e.target.style.textDecoration = "none")}>
        ResuLens
      </a>
    ),
    description:
      "AI-powered resume evaluation system using LLMs for job description matching and candidate scoring. Features LLM-based scoring for ATS optimization, keyword extraction, and skill matching using Grok AI.",
    tags: [
      {
        name: "fastapi",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "grok-ai",
        color: "pink-text-gradient",
      },
    ],
    image: Invoice,
    source_code_link: "https://github.com/nandini2201/ResuLens",
  },
  {
    name: (
      <a href="https://smartclips-ai.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
        onMouseLeave={(e) => (e.target.style.textDecoration = "none")}>
        SmartClips AI
      </a>
    ),
    description:
      "Full-stack AI platform for automated short-form video generation from text prompts. Integrated AI APIs for content generation and automated media pipeline processing with secure authentication.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "clerk",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/nandini2201/SmartClips-AI",
  },
  {
    name: (
      <a href="https://invoice-app-sage.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
        onMouseLeave={(e) => (e.target.style.textDecoration = "none")}>
        Invoice Management System
      </a>
    ),
    description:
      "Full-stack invoice management system with analytics and reporting features. Designed scalable REST APIs and optimized MongoDB schema for fast queries with advanced search and filtering.",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: simon,
    source_code_link: "https://github.com/nandini2201/Invoice-app",
  },
];

export { services, technologies, experiences, testimonials, projects };
