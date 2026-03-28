export interface Project {
  name: string;
  description: string;
  tech: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  details?: string;
}

export interface Hobby {
  name: string;
  description: string;
  icon: React.ElementType;
}

export interface Skills {
  backend: string[];
  ai: string[];
  frontend: string[];
  database: string[];
  infrastructure: string[];
  softSkills: string[];
  languages: string[];
}
