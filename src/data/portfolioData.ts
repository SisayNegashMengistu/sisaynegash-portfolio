import {
  Education,
  Experience,
  Project,
  Skill,
  SocialLink,
  NavLink,
} from "../types";

export const navigationLinks: NavLink[] = [
  { id: 1, name: "Home", href: "#home" },
  { id: 2, name: "About", href: "#about" },
  { id: 3, name: "Skills", href: "#skills" },
  { id: 4, name: "Projects", href: "#projects" },
  { id: 5, name: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/sisaynegashmengistu",
    icon: "github",
  },
  {
    id: 2,
    name: "LinkedIn",
    url: "https://linkedin.com/in/sisaynegashmengistu",
    icon: "linkedin",
  },
  {
    id: 3,
    name: "Twitter",
    url: "https://x.com/lossereee",
    icon: "twitter",
  },
  {
    id: 4,
    name: "Instagram",
    url: "https://www.instagram.com/sisaynegashmengistu",
    icon: "instagram",
  },
  { id: 5, name: "Telegram", url: "https://t.me/sisaynegashmengistu", icon: "telegram" },
];

export const educationData: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Science in  software engineering",
    institution: "Bahir Dar Institution of Technology",
    location: "Bahir Dar, Ethiopia",
    date: "2015 - 2019",
    description:
      "Earned a Bachelor’s degree in Software Engineering with comprehensive knowledge of software development life-cycle (SDLC), software design, programming, database systems, and software project management. Completed a final-year project focused on the design and development of a wireless pick-and-place robotic arm controlled through an Android application.",
  },
  {id: 2,
    degree: "Master of Science in  software engineering",
    institution: "Bahir Dar Institution of Technology",
    location: "Bahir Dar, Ethiopia",
    date: "2023 - 2024",
    description:
      "Completed a Master’s degree in Software Engineering with a focus on advanced software development methodologies, software engineering processes, project management, and emerging technologies. Conducted research on Explainable Artificial Intelligence (XAI)-based approaches for fetal anomaly detection, applying machine learning and software engineering principles to develop intelligent healthcare solutions.",},
  {
    id: 3,
    degree: "Software Engineering Bootcamp",
    institution: "Dire Dawa Institute of Technology,",
    location: "Dire Dawa, Ethiopia",
    date: "2025",
    description:
      "Completed an intensive Software Engineering Bootcamp focused on designing and developing DDU-One, an all-in-one Enterprise Resource Planning (ERP) system for Dire Dawa University. Gained practical experience in full-stack development, system integration, software architecture, collaborative development, and real-world ERP implementation.",
  },
   {
    id: 4,
    degree: "AI Powered Fullstack Application Development",
    institution: "Evangadi",
    location: "USA",
    date: "2026",
    description: "Completed intensive training in AI-Powered Full-Stack Application Development at Evangadi, USA, gaining hands-on experience in building intelligent, modern web applications.",
  },
];

export const experienceData: Experience[] = [
  {
    id: 1,
    position: "Fullstack Developer",
    company: "Freelance",
    location: "Remote",
    date: "Oct 2020 - Present",
    description:
      "Develop and maintain responsive, scalable web applications using modern frontend technologies including React and TypeScript. Design and implement reusable UI components, integrate frontend applications with backend APIs, and contribute to full software development life-cycle activities including requirement analysis, development, debugging, and performance optimization. Collaborate with clients to deliver efficient, user-focused, and reliable software solutions."},
  {
    id: 2,
    position: "Web Developer – Property Management System Intern",
    company: "Amhara Metal Industry Enterprise",
    location: "Bahir Dar, Ethiopia",
    date: "Oct 2018 - Jan 2019",
    description:
      "Developed and debugged a web-based Property Management System as part of a collaborative software development team. Designed and implemented responsive user interfaces using HTML, CSS, and JavaScript, while developing backend functionality with PHP. Contributed to system analysis, feature implementation, troubleshooting, and performance improvements to deliver a reliable and user-friendly management solution.",
    },
  {
    id: 3,
    position: "Project Leader",
    company: "Final Year Project",
    location: "Bahir Dar Institution of Technology",
    date: "Sep 2018 - June 2019",
    description:
      "Led the design, development, and debugging of a wireless pick-and-place robotic arm integrated with an Android-based control application. Coordinated a multidisciplinary team working on Android development, Arduino-based embedded systems, Proteus-based circuit simulation, electrical system integration, and robotic arm modeling using Autodesk Maya. Implemented AI-driven features using reinforcement learning techniques to enhance robotic decision-making and automation capabilities. Managed project planning, technical integration, troubleshooting, and quality assurance to deliver an efficient and reliable robotic solution.",
    },
    {
  id: 4,
  position: "Leadership",
    company: "Pre-Engineering Coordinator",
    location: "Dire Dawa University",
    date: "Sep 2024 - Present",
    description:
      "Provide academic leadership and administrative coordination for the Pre-Engineering program, overseeing more than 200 instructors, 3,000+ students across 24+ sections, and 20+ academic advisors. Responsible for class scheduling, academic coordination, conflict resolution between instructors and students, examination regulation management, grade monitoring, and continuous improvement of teaching and learning activities. Facilitate effective communication among academic stakeholders and ensure smooth implementation of academic policies, procedures, and educational initiatives." },
];

//Skill
export const skillsData: Skill[] = [
  // Frontend Development
  {
    id: 1,
    name: "TypeScript",
    icon: "typescript",
    progress: 85,
    category: "frontend",
  },
  {
    id: 2,
    name: "React.js",
    icon: "react",
    progress: 90,
    category: "frontend",
  },
  {
  id: 35,
  name: "PHP",
  icon: "php",
  progress: 95,
  category: "backend",
},
{
  id: 36,
  name: "Laravel",
  icon: "laravel",
  progress: 85,
  category: "backend",
},
  {
    id: 3,
    name: "Vue.js",
    icon: "vue",
    progress: 80,
    category: "frontend",
  },
  {
    id: 4,
    name: "JavaScript",
    icon: "javascript",
    progress: 90,
    category: "frontend",
  },
  {
    id: 5,
    name: "HTML5 & CSS3",
    icon: "code",
    progress: 95,
    category: "frontend",
  },
  {
    id: 6,
    name: "Tailwind CSS",
    icon: "paintbrush",
    progress: 90,
    category: "frontend",
  },

  // Backend Development
  {
    id: 7,
    name: "Python",
    icon: "python",
    progress: 90,
    category: "backend",
  },
  {
    id: 8,
    name: "Django",
    icon: "server",
    progress: 85,
    category: "backend",
  },
  {
    id: 9,
    name: "Node.js",
    icon: "node",
    progress: 80,
    category: "backend",
  },
  {
    id: 10,
    name: "REST API Development",
    icon: "api",
    progress: 85,
    category: "backend",
  },
  {
   id: 31,
  name: "Java",
  icon: "java",
  progress: 75,
  category: "backend",
},
{id: 32,
  name: "Go (Golang)",
  icon: "go",
  progress: 65,
  category: "backend",},
  {
    id: 11,
    name: "SQL & Database Design",
    icon: "database",
    progress: 85,
    category: "backend",
  },
  {
    id: 12,
    name: "MongoDB",
    icon: "mongodb",
    progress: 75,
    category: "backend",
  },

  // Artificial Intelligence & Data Science
  {
    id: 13,
    name: "Machine Learning",
    icon: "brain",
    progress: 90,
    category: "ai",
  },
  {
    id: 14,
    name: "Explainable AI (XAI)",
    icon: "explain",
    progress: 85,
    category: "ai",
  },
  {
    id: 15,
    name: "TensorFlow & Keras",
    icon: "tensorflow",
    progress: 75,
    category: "ai",
  },
  {
    id: 16,
    name: "Scikit-learn",
    icon: "python",
    progress: 90,
    category: "ai",
  },
  {
    id: 17,
    name: "SHAP & LIME",
    icon: "analytics",
    progress: 85,
    category: "ai",
  },

  // DevOps & Engineering Tools
  {
    id: 18,
    name: "Git & GitHub",
    icon: "git-branch",
    progress: 90,
    category: "tools",
  },
  {id: 33,
  name: "Power BI",
  icon: "chart",
  progress: 80,
  category: "tools",},
  {  id: 34,
  name: "Jira",
  icon: "project-management",
  progress: 85,
  category: "tools",
},
  {
    id: 19,
    name: "Docker",
    icon: "docker",
    progress: 75,
    category: "tools",
  },
  {
    id: 20,
    name: "Linux",
    icon: "terminal",
    progress: 85,
    category: "tools",
  },
  {
    id: 21,
    name: "CI/CD",
    icon: "workflow",
    progress: 70,
    category: "tools",
  },
  {
    id: 22,
    name: "Postman",
    icon: "send",
    progress: 85,
    category: "tools",
  },

  // Cloud & Deployment
  {
    id: 23,
    name: "Vercel",
    icon: "vercel",
    progress: 80,
    category: "cloud",
  },
  {
    id: 24,
    name: "Netlify",
    icon: "netlify",
    progress: 75,
    category: "cloud",
  },
  {
    id: 25,
    name: "Cloud Deployment",
    icon: "cloud",
    progress: 75,
    category: "cloud",
  },

  // Software Engineering & Research
  {
    id: 26,
    name: "Software Architecture",
    icon: "architecture",
    progress: 85,
    category: "engineering",
  },
  {
    id: 27,
    name: "System Design",
    icon: "system",
    progress: 80,
    category: "engineering",
  },
  {
    id: 28,
    name: "Agile Development",
    icon: "agile",
    progress: 85,
    category: "engineering",
  },
  {
    id: 29,
    name: "Research & Publication",
    icon: "research",
    progress: 90,
    category: "engineering",
  },
  {

    id: 30,

    name: "Software Testing",

    icon: "architecture",

    progress: 97,

    category: "engineering",

  },
];
export const projectsData: Project[] = [
  {
    id: 1,
    title: "Diabetes Prediction System Using Machine Learning",
    description:
      "This project implements a diabetes prediction system using machine learning techniques. The system takes various health-related features as input and predicts whether a person is likely to have diabetes or not.",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0zKac32fTFNAKa6p-pgpvQaJ2_zS-t1qnM0BCLA1LiA&s=10",
    techStack: ["HTML","CSS", "Logistic Regression","JavaScript","Django"," Git / GitHub"],
    demoUrl: "#",// must edit
    githubUrl: "https://github.com/sisaynegashmengistu/Diabetes_Prediction_system_using_ML",// must edit
    featured: true,
    category: "Fullstack",
  },
  {
    id: 2,
    title: "Properties management system",
    description:
      "A web-based Property Management System designed to streamline property, tenant, and rental management through a centralized platform. It helps users efficiently manage property information, tenant records, and related management activities while reducing manual work.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-j_0amOOtBaVHvtLRxQ5YTFDdZQeW7ZaYKZhtAR_-vg&s=10",
    techStack: ["HTML", "CSS", "PHP", "JavaScript","Laravel"],
    demoUrl: "https://github.com/sisaynegashmengistu/telemedicine",// must edit
    githubUrl: "https://github.com/sisaynegashmengistu/Properties-management-system",// must edit
    featured: false,
    category: "Fullstack",
  },
  {
    id: 3,
    title: "Robotic arm",
    description:"Wireless robotic arm system designed to remotely pick and place objects using an Android-controlled interface. Integrates Arduino-based control, wireless communication, and robotic motion for automated object handling.",
    image:"https://www.evsint.com/wp-content/uploads/2020/11/Pick-and-place-robot-arm1.jpg",
    techStack: ["Arduino", "Maya-3D Modeling and Design", "Proteus – Circuit design and simulation", "Android"],
    demoUrl: "#",// must edit
    githubUrl: "https://github.com/sisaynegashmengistu/Wireless-robotic-arm-for-Picking-and-placing-objects",//must edit
    featured: true,
    category: "Fullstack",
  },
  {
    id: 4,
    title: "XAI-Based Fetal Abnormalities Detection",
    description:
      "An Explainable AI-based fetal anomaly detection system developed with Django and machine learning to classify fetal health conditions from Cardiotocography (CTG) data. Integrates SHAP and LIME to provide interpretable explanations of model predictions and identify the key factors influencing each result.",
    image:"data:image/jpeg;base64,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",
    techStack: ["Django", "Python", "Jupyter Notebook", "HTML", "CSS", "SQLite", "SHAP",  "LIME."],
    demoUrl: "#",//must edit
    githubUrl: "https://github.com/sisaynegashmengistu/Fata_anomalies",//must edit
    featured: true,
    category: "Fullstack",
  },
  {
    id: 5,
    title: "Mirana Gym",
    description:
      "A clean and modern gym landing page showcasing services, pricing, and class schedules, designed using React and Tailwind CSS.",
    image:
      "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    techStack: ["React", "Tailwind CSS"],
    demoUrl: "https://miranagym.netlify.app",// must edit
    githubUrl: "https://github.com/sisaynegashmengistu/Mirana-Gym",// must edit
    featured: false,
    category: "Frontend",
  },
  {
    id: 6,
    title: "SocialBook (Meta Clone UI)",
    description:
      "A Facebook-like user interface clone built with HTML, CSS, and JavaScript. Focused on UI replication and responsiveness.",
    image:
      "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    techStack: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://greatface.netlify.app/",//edit
    githubUrl: "https://github.com/sisaynegashmengistu",//edit
    featured: false,
    category: "Frontend",
  },
];

export const personalInfo = {
  name: "Sisay Negash Mengistu",
  title: "Software Engineer | Lecturer|AI/XAI research",
  description:"I'm a Software Engineer, Lecturer, and Full-Stack Developer.I build scalable, secure, and user-friendly software using modern technologies. I combine academic excellence with industry experience to deliver innovative solutions and mentor future engineers.",
  location: "Dire Dawa, Ethiopia",
  email: "ctrlasoft@gmail.com",
  phone: "+2519 27-64-07-51",
  avatar:
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};
