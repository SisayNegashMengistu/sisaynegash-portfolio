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
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjGJLlwMJrzSMbMMb43MUvLAF8HNljNeiLrTBtN52EI-3uw2_rwfrWUWt1&s=10",
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN5lWV2rV2NxA9cXU8rqv6kNAkX09fkg4SbxHqMRLPNNqYj6PCdKQSu9EX&s=10",
    techStack: ["React", "Tailwind CSS"],
    demoUrl: "https://miranagym.netlify.app",// must edit
    githubUrl: "https://github.com/sisaynegashmengistu/Mirana-Gym",// must edit
    featured: true,
    category: "Frontend",
  },
  {
    id: 6,
    title: "Awesome Machine Learning Interpretability",
    description:
      "Contributed to a curated Responsible AI and Machine Learning Interpretability repository by adding and organizing Explainable AI (XAI) resources, tools, frameworks, and learning materials, with a focus on improving access to practical model interpretability and responsible machine learning resources.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9VZY9wJaNE0FqxuxugKpqc2kikz8bII3ENsuHTAR1lFQYv4izaqJf1vaq&s=10",
    techStack: ["Python", "XAI / Explainability", "SHAP", "LIME", "Scikit-learn", "Git & GitHub","Markdown"],
    demoUrl: "#",//edit
    githubUrl: "https://github.com/sisaynegashmengistu/awesome-machine-learning-interpretability",//edit
    featured: true,
    category: "Frontend",
  },
];

export const personalInfo = {
  name: "Sisay Negash",
  title: "Software Engineer | Lecturer|AI/XAI research",
  description:"I'm a Software Engineer, Lecturer, and Full-Stack Developer.I build scalable, secure, and user-friendly software using modern technologies. I combine academic excellence with industry experience to deliver innovative solutions and mentor future engineers.",
  location: "Dire Dawa, Ethiopia",
  email: "ctrlasoft@gmail.com",
  phone: "+2519 27-64-07-51",
  avatar:
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};
