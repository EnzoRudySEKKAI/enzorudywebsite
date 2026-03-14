export const enTranslations = {
  meta: {
    title: 'Enzo Rudy SEKKAI - Portfolio',
    description: 'Full-stack Software Engineer specializing in backend development with C#/.NET, Azure cloud infrastructure, and modern web technologies.',
  },
  nav: {
    language: 'Language',
    en: 'EN',
    zh: '中文',
  },
  header: {
    name: 'ENZO RUDY SEKKAI',
  },
  bio: {
    intro: 'Full-stack Software Engineer and jack of all trades, specializing in backend development with C#/.NET, Azure cloud infrastructure, and modern web technologies.',
    technicalExpertise: {
      title: 'Technical Expertise',
      content: 'Backend development, cloud architecture, and full-stack solutions with a focus on scalability and clean code.',
    },
    coreStrengths: {
      title: 'Core Strengths',
      content: 'Jack of all trades — I can learn and master anything I set my mind to. Strong communicator who bridges technical and non-technical teams.',
    },
    closing: 'Passionate about continuously expanding my knowledge across the entire technology stack. AI enthusiast leveraging agentic coding to boost productivity and build smarter solutions.',
  },
  sections: {
    skills: 'Skills & Tools',
    experience: 'Experience',
    education: 'Education',
    projects: 'Featured Projects',
    hobbies: 'Hobbies & Interests',
    companyProject: 'My Company Project',
  },
  skills: {
    backend: 'Backend',
    frontend: 'Frontend',
    languages: 'Languages',
    softSkills: 'Soft Skills',
  },
  companyProject: {
    title: 'Vemakin',
    subtitle: 'Production OS for Filmmaking',
    description: 'A comprehensive Production Operating System designed specifically for filmmaking and media production management. It provides a centralized, synchronized ecosystem for managing projects, equipment inventory, shot lists, notes, and post-production workflows.',
    features: {
      projectManagement: 'Project Management',
      equipmentInventory: 'Equipment Inventory',
      shotManagement: 'Shot Management',
      notesSystem: 'Notes System',
      postProduction: 'Post-Production',
      routePlanning: 'Route Planning',
    },
    builtWith: 'Built with',
    moreInfo: 'More Information',
    visitSite: 'Visit Live Site',
  },
  vemakin: {
    title: 'Vemakin',
    subtitle: 'Production OS for Filmmaking',
    heroDescription: 'Vemakin addresses the fragmented nature of production management in the film industry by offering an integrated platform that connects all aspects of a production. Traditional production management often involves juggling multiple tools that don\'t communicate with each other. Vemakin unifies these workflows into a single, cohesive platform with real-time synchronization, offline resilience, professional-grade data security, and intuitive modern UI/UX.',
    overview: {
      title: 'Overview',
      problem: {
        title: 'The Problem',
        content: 'Traditional production management involves juggling multiple tools (spreadsheets, documents, specialized software) that don\'t communicate with each other.',
      },
      solution: {
        title: 'The Solution',
        content: 'Vemakin unifies workflows into a single platform with real-time sync, offline resilience, professional security, and mobile-responsive design.',
      },
    },
    features: {
      title: 'Key Features',
      projectManagement: {
        title: 'Project Management',
        description: 'Create and manage multiple productions with complete data isolation. Contextual actions allow adding notes, tasks, and shots directly from project views.',
      },
      equipmentInventory: {
        title: 'Equipment Inventory',
        description: 'Track personal gear and access a comprehensive gear catalog with technical specifications. Auto-specifications retrieve data like sensor size, focal length, and weight.',
      },
      shotManagement: {
        title: 'Shot Management',
        description: 'Plan, organize, and track shots with GPS coordinates and route optimization. Associate locations, mark status, and link specific gear to shots.',
      },
      notesSystem: {
        title: 'Notes System',
        description: 'Centralized note-taking linked to projects, shots, and equipment. Rich text support with Markdown-enabled editor and categorization.',
      },
      postProduction: {
        title: 'Post-Production Tasks',
        description: 'Manage tasks and workflows for the post-production phase. Status workflow from Pending → In Progress → Completed with priority levels.',
      },
      routePlanning: {
        title: 'Route Planning',
        description: 'Automatic route calculation between shoot locations using Google Routes API. Multi-stop routes with distance and duration calculations.',
      },
    },
    architecture: {
      title: 'Architecture',
      description: 'Vemakin follows a modern three-tier architecture with React frontend, Go backend API, and PostgreSQL database, all hosted on Google Cloud infrastructure with Firebase services.',
      clientLayer: {
        title: 'Client Layer',
        content: 'React web application with TypeScript, responsive design, and Progressive Web App capabilities.',
      },
      apiLayer: {
        title: 'API Layer',
        content: 'Google Cloud Run hosting Go + Echo RESTful API with middleware for auth, CORS, and logging.',
      },
      dataLayer: {
        title: 'Data Layer',
        content: 'PostgreSQL on Cloud SQL for relational data, Firebase for authentication and storage.',
      },
    },
    techStack: {
      title: 'Technology Stack',
      frontend: 'Frontend',
      backend: 'Backend',
      infrastructure: 'Infrastructure',
    },
    security: {
      title: 'Security & Authentication',
      firebaseAuth: {
        title: 'Firebase Authentication',
        content: 'Secure user identity management with JWT token verification and automatic token refresh.',
      },
      dataOwnership: {
        title: 'Data Ownership',
        content: 'Row-level security ensuring users only access their own data with complete project isolation.',
      },
      corsProtection: {
        title: 'CORS Protection',
        content: 'Configured for production domains with strict cross-origin resource sharing policies.',
      },
      professionalSecurity: {
        title: 'Professional Security',
        content: 'Enterprise-grade security with encrypted connections and secure credential management.',
      },
    },
    cta: 'Visit Vemakin Live Site',
    backToPortfolio: 'Back to Portfolio',
  },
  experiences: [
    {
      title: 'Fulltime .NET Backend Developer',
      company: 'Hager - Bordeaux, France',
      period: '2023/09 - 2025/08',
      description: 'Developed backend solutions in C# using the .NET framework, with a DDD architecture and Azure infrastructure. Key projects included a physical event simulator for virtual devices and a solution to manage installations. Wrote unit tests, integration tests, and technical documentation.',
    },
    {
      title: 'Intern .NET Backend Developer',
      company: 'Hager - Bordeaux, France',
      period: '2023/04 - 2023/09',
      description: 'Developed a backend solution in C# with .NET to enable internal users to modify device environments. Applied Domain-Driven Design (DDD) architecture, deployed the application on Azure infrastructure, and operated within an Agile environment using Azure DevOps.',
    },
    {
      title: 'Sales Adviser (Student Job)',
      company: 'Auchan Bordeaux Lac',
      period: 'June 2020 - April 2023',
      description: 'Student job as a sales adviser and manager at Auchan Hypermarket in the mobile phone, television, and multimedia department.',
    },
    {
      title: 'Intern Java Developer',
      company: 'Avista',
      period: '2018 & 2019',
      description: 'Developed software for finance and treasury management. Utilized Java and SQL to implement new functionalities within the application.',
    },
  ],
  education: [
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
  ],
  projects: [
    {
      name: 'Autonomous Robot',
      description: 'Creation of an autonomous robot capable of detecting and tracking a color line. Use of computer vision (OpenCV) as well as mathematics and geometry related to robotics.',
    },
    {
      name: 'VueJS Image Processing',
      description: 'Creation of a client-server infrastructure in VueJS allowing browser photo processing with real-time filters and effects.',
    },
    {
      name: 'Neural Networks',
      description: 'Implementation of neural networks, machine learning, and AI for image recognition, data analysis, and research applications.',
    },
    {
      name: 'CPU/GPU Optimization',
      description: 'Improvement of programs and algorithms performances using CPU and GPU optimization with OpenMP and OpenCL.',
    },
  ],
  hobbies: [
    {
      name: 'Traveling',
      description: 'Exploring new places',
    },
    {
      name: 'Movies',
      description: 'Realization, production',
    },
    {
      name: 'AI and testing models',
      description: 'Being updated',
    },
  ],
  contact: {
    location: 'Shanghai, China',
  },
};
