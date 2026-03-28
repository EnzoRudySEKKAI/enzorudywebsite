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
      content: 'Jack of all trades — I can learn and master anything I set my mind to. Strong communication skills that bridges technical and non-technical teams.',
    },
    closing: 'Passionate about continuously expanding my knowledge across the entire technology stack. AI enthusiast leveraging agentic coding to boost productivity and build smarter solutions.',
  },
  sections: {
    skills: 'Skills & Tools',
    experience: 'Experience',
    education: 'Education',
    projects: 'Featured Projects',
    hobbies: 'Hobbies & Interests',
    companyProject: 'My company',
  },
  skills: {
    backend: 'Backend',
    ai: 'AI',
    frontend: 'Frontend',
    database: 'Database',
    infrastructure: 'Infrastructure / DevOps',
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
    visitSite: 'Visit site',
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
    technicalDeepDive: {
      title: 'Technical Deep Dive',
      subtitle: 'In-depth look at the engineering decisions and patterns behind Vemakin',
      expandAll: 'Expand All',
      collapseAll: 'Collapse All',
      concurrency: {
        title: 'Concurrency & Go Routines',
        easySummary: 'Go routines are like lightweight threads that let the app do many things at once — like calculating routes between shots while the user keeps working without any delay.',
        sections: {
          goroutines: {
            title: 'Go Routines in Action',
            content: 'Go routines are the backbone of Vemakin\'s concurrency model. Each HTTP request is handled by a lightweight goroutine (typically 2-8KB stack, dynamically grown). Background tasks like route calculations between shot locations run in separate goroutines, ensuring the main request-response cycle is never blocked.',
          },
          channels: {
            title: 'Channels for Communication',
            content: 'Go channels provide type-safe communication between goroutines. Vemakin uses buffered channels to decouple route calculation requests from their execution, implementing a producer-consumer pattern. This prevents fast API responses from being slowed down by expensive Google Routes API calls.',
          },
          workerPool: {
            title: 'Worker Pool Pattern',
            content: 'A fixed pool of goroutines processes route calculation jobs from a shared channel. This controls resource consumption (especially API rate limits on Google Routes) while maximizing throughput. The pool size is tied to runtime.NumCPU() for optimal CPU utilization.',
          },
          parallelism: {
            title: 'Concurrency vs Parallelism',
            content: 'Concurrency is about dealing with many things at once; parallelism is about doing many things at once. Go\'s scheduler (GMP model: Goroutine-Machine-Processor) distributes goroutines across OS threads. With GOMAXPROCS=4, up to 4 goroutines execute truly in parallel. Vemakin leverages this for parallel DB queries and concurrent API calls.',
          },
        },
      },
      securityDeepDive: {
        title: 'Security (OWASP & Best Practices)',
        easySummary: 'Every user request is verified before processing. Passwords and tokens are never stored insecurely. The API follows industry-standard security practices to protect user data.',
        sections: {
          owasp: {
            title: 'OWASP Top 10 Mitigations',
            content: 'Vemakin addresses key OWASP risks: A01 (Broken Access Control) via per-request user ownership checks; A03 (Injection) via parameterized SQL queries; A05 (Security Misconfiguration) via strict CORS and minimal HTTP methods; A07 (Auth Failures) via Firebase JWT with automatic refresh; A09 (Logging Failures) via zerolog structured logging.',
          },
          csrf: {
            title: 'CSRF Protection Strategy',
            content: 'Vemakin uses a stateless JWT-based API architecture, which is inherently CSRF-resistant. The Authorization header (not cookies) carries the token, so browsers won\'t attach it to cross-origin requests automatically. SameSite=Strict cookies are used only for non-API session data. Additionally, CORS restricts allowed origins to known frontend domains.',
          },
          sqlInjection: {
            title: 'SQL Injection Prevention',
            content: 'All database queries use parameterized statements via pgx/sqlx. No string concatenation or fmt.Sprintf is ever used in query construction. Input validation via go-playground/validator enforces type safety before data reaches the repository layer.',
          },
          xssPrevention: {
            title: 'XSS Prevention',
            content: 'React automatically escapes JSX expressions, preventing reflected XSS. dangerouslySetInnerHTML is never used with user content. The backend validates and sanitizes all inputs using html.EscapeString for any string that might be rendered. Content-Security-Policy headers restrict script sources.',
          },
          tokenSecurity: {
            title: 'JWT Token Management',
            content: 'Firebase ID tokens expire after 1 hour. The Axios interceptor automatically refreshes tokens before they expire using user.getIdToken(true). Failed refresh attempts redirect to login. Tokens are verified server-side on every request using Firebase Admin SDK — client-side validation alone is never trusted.',
          },
          rateLimiting: {
            title: 'Rate Limiting',
            content: 'Echo middleware enforces 100 requests per minute per IP using a token bucket algorithm (golang.org/x/time/rate). This protects against brute-force attacks and API abuse. Rate limit headers (X-RateLimit-Remaining) inform clients of their quota.',
          },
        },
      },
      databaseOptimization: {
        title: 'Database Optimization',
        easySummary: 'The database is carefully designed with indexes for fast queries, smart data types for flexibility, and patterns like soft-delete to preserve data while keeping performance high.',
        sections: {
          indexing: {
            title: 'Indexing Strategy',
            content: 'PostgreSQL indexes are carefully chosen: B-tree indexes on foreign keys (user_id, project_id) for JOIN performance; partial indexes on deleted_at IS NULL to exclude soft-deleted rows from queries; composite indexes on frequently filtered columns (category + brand). The partial index on deleted_at saves ~30% index size since only active records are indexed.',
          },
          softDelete: {
            title: 'Soft Delete Pattern',
            content: 'All entities use a deleted_at timestamp column instead of physical deletion. This enables data recovery, audit trails, and prevents accidental data loss. Every query includes WHERE deleted_at IS NULL, enforced at the repository layer. A background cleanup worker hard-deletes records older than 90 days.',
          },
          jsonb: {
            title: 'JSONB for Flexible Specs',
            content: 'Equipment specifications vary wildly by category (cameras have sensors, lenses have focal lengths). Instead of a single wide table with many nullable columns, Vemakin uses category-specific specs tables with JSONB columns for array-type data (frame rates, codecs, recording media). This provides type safety for common fields while allowing flexibility for category-specific data.',
          },
          connectionPooling: {
            title: 'Connection Pooling',
            content: 'pgx maintains a connection pool (default 4-20 connections) to Cloud SQL. The Cloud SQL Auth Proxy handles IAM-based authentication and encryption, eliminating the need for static database credentials. Connection health checks prevent stale connections from causing errors.',
          },
          queryOptimization: {
            title: 'Query Optimization Patterns',
            content: 'Vemakin uses SELECT with explicit column lists (never SELECT *), batch inserts for catalog data, and context-based timeouts to prevent long-running queries. The sqlx library provides efficient struct scanning with named queries, reducing boilerplate while maintaining type safety.',
          },
        },
      },
      apis: {
        title: 'APIs & Integrations',
        easySummary: 'Vemakin connects to several Google services — for authentication, map-based route planning, and location search — plus an in-memory cache to make everything fast.',
        sections: {
          googleRoutes: {
            title: 'Google Routes API',
            content: 'The Google Routes API calculates driving, walking, cycling, and two-wheeler routes between shot locations. Vemakin caches results for 24 hours and enforces a 60-minute cooldown on recalculations to manage API costs. A fallback to OSRM (Open Source Routing Machine) ensures route calculation always works, even if the Google API is unavailable.',
          },
          googlePlaces: {
            title: 'Google Places API',
            content: 'The Places API powers location autocomplete when users create shots. Session tokens group autocomplete requests into a single billable session, reducing costs by ~80%. Requests are debounced on the frontend (300ms) to avoid excessive API calls during typing.',
          },
          firebaseAdmin: {
            title: 'Firebase Admin SDK',
            content: 'The Firebase Admin SDK runs server-side to verify ID tokens on every request. It runs asynchronously so verification doesn\'t block request processing. On first login, the middleware automatically creates a local user record synced with Firebase UID, ensuring data ownership from day one.',
          },
          bigCache: {
            title: 'BigCache In-Memory Cache',
            content: 'BigCache provides GC-friendly in-memory caching for the gear catalog (~1500 items). It avoids Go\'s garbage collector overhead by storing entries in byte arrays, not maps[string]interface{}. The cache is warmed on startup from a JSON file and refreshed every hour, reducing database queries by ~90% for catalog browsing.',
          },
          mountLinks: {
            title: 'Mount System & Equipment Compatibility',
            content: 'The gear catalog includes mount type data (E-mount, EF, PL, RF, L-mount) for cameras and lenses. This enables future features like compatibility warnings when assigning lenses to camera bodies in a shot. The mount field is stored as a typed VARCHAR with a foreign-key-like relationship to standardized mount names.',
          },
        },
      },
      frontendPatterns: {
        title: 'Frontend Architecture Patterns',
        easySummary: 'The frontend is organized into small reusable pieces, uses smart caching to avoid unnecessary network requests, and updates the UI optimistically for a snappy feel.',
        sections: {
          stateManagement: {
            title: 'State Management Separation',
            content: 'Vemakin cleanly separates three types of state: Server State (TanStack Query) handles API data with automatic caching, background refetching, and optimistic updates. Client State (Zustand) manages UI concerns like active project, theme, and modal visibility. Form State (React Hook Form + Zod) handles form validation with type-safe schemas.',
          },
          optimisticUpdates: {
            title: 'Optimistic Updates',
            content: 'When a user creates or updates an entity, the UI updates immediately before the API response arrives. If the API call fails, TanStack Query automatically rolls back to the previous state. This makes the app feel instant while maintaining data consistency.',
          },
          atomicDesign: {
            title: 'Atomic Design Components',
            content: 'Components follow atomic design: Atoms (Button, Input, Icon) → Molecules (FormField, Card) → Organisms (ProjectCard, ShotList) → Templates (DashboardLayout). This ensures consistency, reusability, and clear separation of concerns. Each component is typed with TypeScript interfaces.',
          },
          tanstackCaching: {
            title: 'TanStack Query Cache Strategy',
            content: 'Each data type has tuned cache settings: Categories (rarely change, 24h staleTime), Projects (1h staleTime), Shots (5min staleTime). Background refetching on window focus keeps data fresh without manual refresh. Query keys follow a structured pattern for precise cache invalidation.',
          },
        },
      },
      architectureDecisions: {
        title: 'Architecture Decisions',
        easySummary: 'Every technology was chosen for a reason — Go for speed and concurrency, Firebase for secure auth, Cloud Run for cost-effective hosting, and PostgreSQL for reliable data storage.',
        sections: {
          whyGo: {
            title: 'Why Go?',
            content: 'Go was chosen over Python (the original backend) for: 10x faster execution, native concurrency with goroutines, single binary deployment (no dependency hell), fast cold starts critical for Cloud Run\'s scale-to-zero model, and excellent PostgreSQL driver ecosystem (pgx, sqlx). The migration from FastAPI to Echo reduced response times from ~200ms to ~15ms.',
          },
          whyCloudRun: {
            title: 'Why Google Cloud Run?',
            content: 'Cloud Run provides serverless containers: pay per request (scales to zero when idle), automatic HTTPS, built-in load balancing, seamless Firebase Hosting integration via URL rewrites, and simple Docker-based deployment. Compared to always-on VMs, Cloud Run reduced infrastructure costs by ~70% for Vemakin\'s usage pattern.',
          },
          whyFirebase: {
            title: 'Why Firebase Auth?',
            content: 'Firebase Authentication handles the complexity of secure identity management: social login (Google) with one line of code, automatic token refresh, email/password with built-in validation, free tier covers up to 10K monthly active users, and battle-tested security by Google. It eliminates the need to build and maintain custom auth.',
          },
          repositoryPattern: {
            title: 'Repository Pattern',
            content: 'Every database entity has a dedicated repository struct that encapsulates all SQL queries. Handlers never touch SQL directly — they call repository methods with typed parameters. This separation enables easy unit testing with mock databases (sqlmock), clear dependency graphs, and the ability to swap database implementations without changing business logic.',
          },
        },
      },
    },
    cta: 'Vemakin site',
    backToPortfolio: 'Back to Portfolio',
    vpnTooltip: 'May require VPN in mainland China',
  },
  experiences: [
    {
      title: 'Fulltime .NET Backend Engineer',
      company: 'Hager - Bordeaux, France',
      period: '2023/09 - 2025/08',
      description: 'Developed robust C#/.NET backends on Azure for next-generation Hager devices, optimizing execution via parallel processing, DDD, and relational/graph databases. Worked closely with front-end teams in an Agile environment to design a physical event simulator for virtual devices and a complete installation management solution. Maintained strict code quality and system reliability with unit tests, integration tests, and technical documentation.',
    },
    {
      title: 'Intern .NET Backend Engineer',
      company: 'Hager - Bordeaux, France',
      period: '2023/04 - 2023/09',
      description: 'Built a C#/.NET backend solution on Azure for device environment configuration, architected purely on Domain-Driven Design (DDD) principles.',
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
      description: 'Discovering places and cultures',
    },
    {
      name: 'Movies',
      description: 'Realization, production and filmaking process',
    },
    {
      name: 'AI',
      description: 'Agentic coding, local models and benchmark',
    },
  ],
  contact: {
    location: 'Shanghai, China',
  },
};
