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
    title: "Study on El Niño's impact on Chennai",
    description:
      "This project analyzes the impact of El Niño on groundwater levels in Chennai.",
    link: "https://github.com/srummanf/ElNino-Anomaly-Study",
  },
  {
    id: 2,
    title: "DevHub",
    description:
      "Designed and developed a centralized platform to empower developers with access to high-quality resources, modern UI kits, and productivity tools. ",
    link: "https://hkhub.vercel.app/",
  },
  {
    id: 3,
    title: "Soft Voting Ensemble Approach for Pre-Confirmation Fraud Detection in Blockchain Mempool Transactions",
    description:
      "This project introduces a novel machine learning-integrated blockchain framework to detect fraudulent transactions proactively within the Ethereum ecosystem. ",
    link: "https://github.com/srummanf/Fraud-Blockchain-Transaction-Detection",
  },
  {
    id: 3,
    title: "Data Encryption In Image using Chaos Map",
    description:
      "Implemented a dual-map approach, integrating the Arnold Map and Henon Map techniques to encode data within digital images.",
    link: "https://github.com/srummanf/Chaos-Map-Data-Encryption",
  },
  {
    id: 3,
    title: "Dyslexia Prediction App",
    description:
      "Developed an application using Python and Streamlit to predict Dyslexia from handwriting images.",
    link: "https://github.com/srummanf/Dyslexia-Detection-from-Handwriting",
  },
  {
    id: 3,
    title: "Early Detection Of Retinopathy of Prematurity",
    description:
      "Conducted research on the early detection of retinopathy of prematurity, culminating in a machine learning paper.",
    link: "https://github.com/srummanf/Early-detection-of-Retinopathy-of-Prematurity-ROP",
  },
  {
    id: 3,
    title: "Artificial Intelligence Based ANPR System with FRS",
    description:
      "Developed a smart surveillance solution that enhances traditional ANPR and FRS systems by addressing visibility issues (fog, rain, reflections, dust).",
    link: "https://github.com/mohammadshaad/codephilics-vitish",
  },
];
