// Edit this file to update the whole portfolio – no need to touch the components.

export const profile = {
  name: "Unathi Pikiso",
  title: "Junior Frontend Developer",
  location: "Cape Town, South Africa",
  email: "unathipikiso42@gmail.com",
  phone: "+27 78 507 2595",
  github: "https://www.github.com/Unathi2000",
  linkedin: "https://www.linkedin.com/in/unathi-pikiso-777643288",
  photo: "/profile.jpg",
  cv: "/Unathi_Pikiso_CV.pdf",
  certificates: "/Bootcamp_Certificates.pdf",
  tagline:
    "I build responsive, user-friendly web interfaces with React, JavaScript and Tailwind CSS.",
  about: [
    "I'm a Junior Frontend Developer from Cape Town with around three years of self-taught coding behind me and hands-on experience as a Frontend Developer Intern and freelancer. I love turning designs into clean, interactive interfaces that feel good on every screen.",
    "I've built portfolio sites, admin dashboards and e-commerce stores, and I'm certified in Web Development, FullStack Software Development and Google AI. Outside of code, I volunteer at WeThinkCode, where I run coding fundamentals workshops and mentor beginners.",
  ],
  stats: [
    { value: "3+", label: "Years self-taught" },
    { value: "3", label: "Projects built" },
    { value: "4", label: "Certifications" },
  ],
};

// level = 0–100 (what the progress bar shows)
export const skills = [
  {
    group: "Frontend",
    items: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 88 },
      { name: "JavaScript (ES6+)", level: 80 },
      { name: "React.js", level: 82 },
    ],
  },
  {
    group: "Styling & Design",
    items: [
      { name: "Tailwind CSS", level: 85 },
      { name: "Responsive / Mobile-First", level: 90 },
      { name: "Figma", level: 65 },
    ],
  },
  {
    group: "Tools & Concepts",
    items: [
      { name: "Git & GitHub", level: 78 },
      { name: "REST APIs", level: 70 },
      { name: "Debugging & Testing", level: 75 },
    ],
  },
];

export const softSkills = [
  "Facilitation & Mentoring",
  "Communication",
  "Teamwork",
  "Problem-Solving",
  "Leadership",
  "Attention to Detail",
];

// TODO: replace the empty `live` strings with your deployed links (Netlify / Vercel)
// and point `github` at each project's repository.
export const projects = [
  {
    title: "Responsive Personal Portfolio",
    description:
      "A modern portfolio to showcase skills and projects, with a responsive layout, reusable components and a clean UI.",
    tech: ["React", "Tailwind CSS"],
    highlights: ["Optimised for mobile, tablet and desktop", "Reusable component library"],
    live: "",
    github: "https://github.com/Unathi2000",
  },
  {
    title: "Admin Dashboard",
    description:
      "A functional admin dashboard with navigation, data tables and stat cards, focused on usability and clear data presentation.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    highlights: ["Reusable, scalable UI components", "Fully responsive layout"],
    live: "",
    github: "https://github.com/Unathi2000",
  },
  {
    title: "E-commerce Store",
    description:
      "A complete store interface with product listings and a shopping cart, designed for a clean, friendly shopping experience.",
    tech: ["React", "JavaScript"],
    highlights: ["Add / remove cart items", "Live price total calculation"],
    live: "",
    github: "https://github.com/Unathi2000",
  },
];

export const timeline = [
  {
    period: "2023",
    title: "Started self-taught coding",
    place: "Self-directed learning",
    points: ["Began learning HTML, CSS and JavaScript through online courses and projects."],
    type: "learning",
  },
  {
    period: "2024 – 2025",
    title: "Frontend Developer Intern / Freelance Developer",
    place: "Remote",
    points: [
      "Developed and deployed responsive web applications using React and Tailwind CSS.",
      "Translated UI designs into functional, interactive interfaces.",
      "Used Git and GitHub for version control and collaboration.",
      "Tested and debugged applications across browsers and devices.",
    ],
    type: "work",
  },
  {
    period: "June 2025",
    title: "SheCodes Bootcamp – Web Development",
    place: "SheCodes",
    points: [
      "Completed Introduction to Coding and Introduction to Web Development workshops.",
      "Earned the Web Development certificate.",
    ],
    type: "education",
  },
  {
    period: "2025 – 2026",
    title: "IDC Recruitment Ambassador (Volunteer)",
    place: "WeThinkCode",
    points: [
      "Facilitate coding fundamentals workshops for aspiring software developers.",
      "Mentor beginners and support recruitment activities.",
      "Strengthened communication, leadership and public speaking skills.",
    ],
    type: "work",
  },
  {
    period: "2025 – 2026",
    title: "Certifications",
    place: "WeThinkCode · Google AI · CAPACITI (Coursera) · FNB Academy",
    points: [
      "GenAI Course for Software Engineering – WeThinkCode",
      "Google AI Certificate",
      "FullStack in Software Development Certificate",
    ],
    type: "education",
  },
];
