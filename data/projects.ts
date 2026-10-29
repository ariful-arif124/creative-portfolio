export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Bazar Dor",
    description:
      "A market price tracking web app where users can browse daily prices of essential products, explore categories, and stay updated on price changes.",
    image: "/projects/bazar-dor.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
    ],
    github: "https://github.com/ariful-arif124/bazar-dor1",
    live: "https://bazar-dor1-ten.vercel.app/",
  },
  {
    id: 2,
    title: "CampusHub",
    description:
      "A campus notice board platform that helps students stay updated with notices, events, and important campus information in one place.",
    image: "/projects/campus-hub.png",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
    ],
    github: "https://github.com/ariful-arif124/Campus---Notice",
    live: "https://campus-notice-steel.vercel.app/",
  },
  {
    id: 3,
    title: "FitLog",
    description:
      "A fitness workout application where users can browse workouts, manage their workout plan, and save routines for tracking progress.",
    image: "/projects/fitlog.png",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
    ],
    github: "https://github.com/ariful-arif124/Fit-Log-Site",
    live: "https://fit-log-site.vercel.app/",
  },
];