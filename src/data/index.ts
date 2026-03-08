import { Globe, Film, Brain } from 'lucide-react';
import type { Project, Experience, Education } from '@/types';

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
    title: 'Fulltime .NET Backend Developer',
    company: 'Hager - Bordeaux, France',
    period: '2023/09 - 2025/08',
    description:
      'Developed backend solutions in C# using the .NET framework, with a DDD architecture and Azure infrastructure. Key projects included a physical event simulator for virtual devices and a solution to manage installations. Wrote unit tests, integration tests, and technical documentation.',
  },
  {
    title: 'Intern .NET Backend Developer',
    company: 'Hager - Bordeaux, France',
    period: '2023/04 - 2023/09',
    description:
      'Developed a backend solution in C# with .NET to enable internal users to modify device environments. Applied Domain-Driven Design (DDD) architecture, deployed the application on Azure infrastructure, and operated within an Agile environment using Azure DevOps.',
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
    degree: 'Chinese classes',
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
    description: 'Exploring new places',
    icon: Globe,
  },
  {
    name: 'Movies',
    description: 'Realization, production',
    icon: Film,
  },
  {
    name: 'AI and testing models',
    description: 'Being updated',
    icon: Brain,
  },
];

export const skills = {
  backend: ['C', 'C#/.NET', 'Java', 'Python', 'Go', 'SQL'],
  frontend: ['JavaScript', 'HTML', 'HTMX', 'PHP', 'CSS', 'VueJS'],
  languages: ['French (Native)', 'English (Fluent, TOEIC 900/990)'],
  softSkills: ['Adaptability & Teamwork', 'Communication', 'Positivity & Motivation'],
};
