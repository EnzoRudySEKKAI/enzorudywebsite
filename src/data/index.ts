import { Globe, Film, Brain } from 'lucide-react';
import type { Project, Experience, Education, Skills } from '@/types';

export const projects: Project[] = [
  {
    name: 'Autonomous Robot',
    description:
      'Creation of an autonomous robot capable of detecting and tracking a color line. Use of computer vision (OpenCV) as well as mathematics and geometry related to robotics.',
    tech: ['OpenCV', 'Python', 'C++', 'Arduino', 'ROS'],
  },
  {
    name: 'VueJS Image Processing',
    description:
      'Creation of a client-server infrastructure in VueJS allowing browser photo processing with real-time filters and effects.',
    tech: ['VueJS', 'JavaScript', 'Node.js', 'WebSocket'],
  },
  {
    name: 'Neural Networks',
    description:
      'Implementation of neural networks, machine learning, and AI for image recognition, data analysis, and research applications.',
    tech: ['Python', 'TensorFlow', 'PyTorch', 'NumPy'],
  },
  {
    name: 'CPU/GPU Optimization',
    description:
      'Improvement of programs and algorithms performances using CPU and GPU optimization with OpenMP and OpenCL.',
    tech: ['C', 'C++', 'OpenMP', 'OpenCL', 'CUDA'],
  },
];

export const experiences: Experience[] = [
  {
    title: 'Fulltime .NET Backend Engineer',
    company: 'Hager - Bordeaux, France',
    period: '2023/09 - 2025/08',
    description:
      'Developed robust C#/.NET backends on Azure for next-generation Hager devices, optimizing execution via parallel processing, DDD, and relational/graph databases. Worked closely with front-end teams in an Agile environment to design a physical event simulator for virtual devices and a complete installation management solution. Maintained strict code quality and system reliability with unit tests, integration tests, and technical documentation.',
  },
  {
    title: 'Intern .NET Backend Engineer',
    company: 'Hager - Bordeaux, France',
    period: '2023/04 - 2023/09',
    description:
      'Built a C#/.NET backend solution on Azure for device environment configuration, architected purely on Domain-Driven Design (DDD) principles.',
  },
  {
    title: 'Sales Adviser (Student Job)',
    company: 'Auchan Bordeaux Lac',
    period: 'June 2020 - April 2023',
    description:
      'Student job as a sales adviser and manager at Auchan Hypermarket in the mobile phone, television, and multimedia department.',
  },
  {
    title: 'Intern Java Developer',
    company: 'Avista',
    period: '2018 & 2019',
    description:
      'Developed software for finance and treasury management. Utilized Java and SQL to implement new functionalities within the application.',
  },
];

export const education: Education[] = [
  {
    degree: 'Non diploma Chinese degree',
    school: 'Fudan University, Shanghai, China',
    period: '2025 - 2026',
  },
  {
    degree: "Master's degree in Computer Science",
    school: 'University of Bordeaux, France',
    period: '2021 - 2023',
    details: 'French notation: 15.59/20 - GPA: 3.7',
  },
  {
    degree: "Bachelor's degree in Computer Science",
    school: 'University of Bordeaux, France',
    period: '2019 - 2021',
  },
];

export const hobbies = [
  {
    name: 'Traveling',
    description: 'Discovering places and cultures',
    icon: Globe,
  },
  {
    name: 'Movies',
    description: 'Realization, production and filmaking process',
    icon: Film,
  },
  {
    name: 'AI',
    description: 'Agentic coding, local models and benchmark',
    icon: Brain,
  },
];

export const skills: Skills = {
  backend: ['C', 'C#/.NET', 'Go', 'Java', 'Python', 'DDD & MVC Architecture', 'RESTful APIs', 'Microservices'],
  ai: ['Agentic coding', 'MCP', 'Open source model', 'Local AI', 'Skills', 'Prompts'],
  frontend: ['React 19', 'TypeScript', 'JavaScript', 'Vue.js', 'HTML5', 'CSS3', 'HTMX', 'PHP'],
  database: ['PostgreSQL', 'MySQL', 'Graph Databases'],
  infrastructure: ['Microsoft Azure', 'Google Cloud Platform', 'Firebase', 'Azure DevOps', 'CI/CD', 'Git', 'Docker'],
  softSkills: ['Adaptability', 'Teamwork', 'Communication', 'Positivity', 'Motivation'],
  languages: ['French (Native)', 'English (TOEIC 900/990)', 'Chinese (Intermediate, studied at Fudan University)'],
};
