export interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  date: string;
  description: string;
}

export interface Experience {
  id: number;
  position: string;
  company: string;
  location: string;
  date: string;
  description: string;
}

export interface Skill {
  id: number;
  name: string;
  icon: string;
  progress: number;
  category: 'frontend' | 'backend' | 'tools' | 'engineering'| 'cloud' | 'ai';
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  demoUrl: string;
  githubUrl: string;
  featured?: boolean;
  category: string;
  underDev?: boolean;
}

export interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: string;
}

export interface NavLink {
  id: number;
  name: string;
  href: string;
}