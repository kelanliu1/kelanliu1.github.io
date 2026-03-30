import {
  reactjs,
  waymo,
  intuidex,
  torch,
  django,
  work,
} from "../assets";

import linkedin from "../assets/linkedin-in.svg";
import github from "../assets/github.svg";
import mail from "../assets/envelope-solid.svg";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
];

const services = [
  {
    title: "Machine Learning",
    icon: torch,
  },
  {
    title: "Front-End",
    icon: reactjs,
  },
  {
    title: "Back-End",
    icon: django,
  },
];

const socials = [
  {
    title: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/kelan-liu/"
  },
  {
    title: "GitHub",
    icon: github,
    link: "https://github.com/kelanliu1"
  },
  {
    title: "Email",
    icon: mail,
    link: "mailto:kelanliu01@gmail.com"
  },
  
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "ClassLink",
    icon: work,
    iconBg: "#383E56",
    date: "Jan 2024 – Present",
    points: [
      "Architected and implemented a serverless translation management system supporting localization across multiple product front ends; delivered a department-wide presentation on problem context, architecture, and system design (Python, TypeScript, AWS Lambda, S3)",
      "Collaborated cross-functionally with the Authentication team to deliver features for Microsoft Entra and Google Directory integrations, contributing directly to adjacent team codebases",
      "Wrote performant Python code running on AWS Lambda to support internal pull-request pipelines and event-driven automation workflows",
      "Optimized critical SQL queries, reducing database query costs by up to 68% (MySQL, Redis)",
      "Maintained and developed backend APIs for existing and new products using Node.js and TypeScript, deployed on Amazon ECS",
      "Built a resilient request library with retry logic and exponential backoff, reducing socket hangups and server-side errors",
      "Identified and patched a privilege-escalation vulnerability caused by misconfigured AWS SES IAM permissions",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Intuidex",
    icon: intuidex,
    iconBg: "#383E56",
    date: "May 2021 - Aug 2021",
    points: [
      "Ported and optimized video processing and machine learning algorithms to develop new supporting software infrastructure for embedded systems with CUDA and GPU support (Docker, Python)",
      "Created and optimized algorithms for real-time motion detection and image snapshotting to support CNN and YOLO models, facilitating live license plate detection on video streams (OpenCV)",
      "Reduced object detection and classification training runtime by 4 minutes on a large training dataset of thousands of vehicles with license plate images",
    ],
  },
  {
    title: "Software Engineer, Machine Learning, Research Intern",
    company_name: "Waymo",
    icon: waymo,
    iconBg: "#E6DEDD",
    date: "Sept 2021 - Jan 2022",
    points: [
      "Contributed to building a real-time driving simulation platform through kinematics simulation and cloud visualization integration (C++, Python)",
      "Developed a driving user interface to facilitate human-simulation interaction and established a data collection pipeline with real-time latency visualization for driving simulation (Angular, RxJS, Typescript)",
      "Optimized end-to-end latency to under 200ms by utilizing D3.js for latency visualization, which allowed for better monitoring of related graphics rendering and road mapping plugins (GFX)",
      "Cross functionally collaborated with 3D modeling team and simulation team to incorporate 3D car models and realistic graphics for simulation",
      "Significantly improved intern permission pitfalls by implementing intern-friendly scripts for existing software infrastructure"
    ],
  },
];

export { services, experiences, socials };