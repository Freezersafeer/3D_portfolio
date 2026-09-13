import {
  contact,
  css,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  nodejs,
  react,
  tailwindcss,
  typescript,
  skills as skillsIcon,
  python as PythonIcon,
} from "../assets/icons";

export const skills = [
  { imageUrl: html, name: "HTML", type: "Frontend" },
  { imageUrl: css, name: "CSS", type: "Frontend" },
  { imageUrl: javascript, name: "JavaScript", type: "Frontend" },
  { imageUrl: react, name: "React", type: "Frontend" },
  { imageUrl: tailwindcss, name: "Tailwind CSS", type: "Frontend" },
  { imageUrl: PythonIcon, name: "Python", type: "Programming" },
  { imageUrl: nodejs, name: "FastAPI", type: "Backend" },
  { imageUrl: git, name: "Git", type: "Version Control" },
  { imageUrl: github, name: "GitHub", type: "Version Control" },
];

export const experiences = [
  {
    title: "MCA Student",
    company_name: "Academic & Personal Projects",
    date: "Present",
    icon: react,
    iconBg: "#dbeafe",
    points: [
      "Building practical projects and improving my programming skills.",
      "Learning C language to interact with Hardwares",
      "Working with microcontrolers,OS,Networking and Git.",
      "Developing and presenting project prototypes for hackathons and academic work.",
    ],
  },
  {
    title: "Jack of Some trades,Master of ONE!",
    company_name: "My Extra Skills",
    date: "2026",
    icon: skillsIcon,
    iconBg: "#dcfce7",
    points: [
      "learned Boat Pulling and participated in state level compatition and won silver medal through NCC",
      "My NCC journey taught me stuffs like sailing, swimming, firing, semaphore skill, different knot skills, How does a ship works and some rifle skills.",
      "Firing and sailing was a skill learned through NCC and horned through camps- A skill which i cant use elsewhere!",
      "Appart from that am a fast learner with physics background exploring my intrested feild!",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Safeer-Ahamed-B?tab=repositories",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/feed/",
  },
];

export const projects = [
  {
    iconUrl: react,
    theme: "btn-back-blue",
    name: "HealthLink",
    description:
      "A healthcare coordination prototype for patients, health workers, doctors, and hospitals, with emergency requests, ticket tracking, role-based views, and location-aware workflows.",
    link: "#",
  },
  {
    iconUrl: github,
    theme: "btn-back-black",
    name: "3D Personal Portfolio",
    description:
      "This interactive portfolio built with React, React Three Fiber, Three.js, Tailwind CSS, and React Router. Designed to showcase my skills, projects, and learning journey.",
    link: "#",
  },
  {
    iconUrl: javascript,
    theme: "btn-back-green",
    name: "More Projects Coming Soon",
    description:
      "I am continuously building projects during my MCA journey. New applications, experiments, and hackathon work will be added here.",
    link: "#",
  },
];
