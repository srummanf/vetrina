// lib/projects.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Study on El Niño's impact on Chennai groundwater sustainability",
    description:
      "This project analyzes the impact of El Niño on groundwater levels in Chennai. It identifies areas prone to water depletion and proposes sustainable water management solutions. Using various datasets and predictive modeling techniques, the study helps understand groundwater trends and recharge potential.",
    link: "https://github.com/srummanf/ElNino-Anomaly-Study",
  },
  {
    id: 2,
    title: "DevHub",
    description:
      "Designed and developed a centralized platform to empower developers with access to high-quality resources, modern UI kits, and productivity tools. ",
    link: "https://hkhub.vercel.app/",
  },
];
