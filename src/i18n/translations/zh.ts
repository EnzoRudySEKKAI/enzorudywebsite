export const zhTranslations = {
  meta: {
    title: 'Enzo Rudy SEKKAI 夏立 - 作品集',
    description: '全栈软件工程师，专注于使用C#/.NET进行后端开发、Azure云基础设施和现代Web技术。',
  },
  nav: {
    language: '语言',
    en: 'EN',
    zh: '中文',
  },
  header: {
    name: 'ENZO RUDY SEKKAI 夏立',
  },
  bio: {
    intro: '全栈软件工程师和多面手，专注于使用C#/.NET进行后端开发、Azure云基础设施和现代Web技术。',
    technicalExpertise: {
      title: '技术专长',
      content: '后端开发、云架构和全栈解决方案，专注于可扩展性和代码整洁。',
    },
    coreStrengths: {
      title: '核心优势',
      content: '多面手——我能够学习并掌握任何我下定决心要做的事情。强大的沟通能力，能够搭建技术团队与非技术团队之间的桥梁。',
    },
    closing: '热衷于持续扩展我在整个技术栈的知识。AI爱好者，利用智能编码提高生产力并构建更智能的解决方案。',
  },
  sections: {
    skills: '技能与工具',
    experience: '工作经历',
    education: '教育背景',
    projects: '精选项目',
    hobbies: '兴趣爱好',
    companyProject: '我的公司',
  },
  skills: {
    backend: '后端',
    frontend: '前端',
    languages: '语言',
    softSkills: '软技能',
  },
  companyProject: {
    title: 'Vemakin',
    subtitle: '电影制作生产操作系统',
    description: '一款专为电影制作和媒体生产管理设计的综合生产操作系统。它提供了一个集中化、同步化的生态系统，用于管理项目、设备清单、镜头列表、笔记和后期制作工作流程。',
    features: {
      projectManagement: '项目管理',
      equipmentInventory: '设备清单',
      shotManagement: '镜头管理',
      notesSystem: '笔记系统',
      postProduction: '后期制作',
      routePlanning: '路线规划',
    },
    builtWith: '技术栈',
    moreInfo: '更多信息',
    visitSite: '访问网站',
  },
  vemakin: {
    title: 'Vemakin',
    subtitle: '电影制作生产操作系统',
    heroDescription: 'Vemakin解决了电影行业中生产管理碎片化的痛点，提供了一个集成平台，连接生产的各个方面。传统的生产管理通常需要使用多个互不通信的工具。Vemakin将这些工作流程统一到一个单一、连贯的平台中，具有实时同步、离线弹性、专业级数据安全和直观的现代UI/UX。',
    overview: {
      title: '概览',
      problem: {
        title: '问题所在',
        content: '传统的生产管理需要使用多个工具（电子表格、文档、专业软件），这些工具之间无法互相通信。',
      },
      solution: {
        title: '解决方案',
        content: 'Vemakin将工作流程统一到一个平台中，具有实时同步、离线弹性、专业安全和移动响应式设计。',
      },
    },
    features: {
      title: '核心功能',
      projectManagement: {
        title: '项目管理',
        description: '创建和管理多个项目，实现完全的数据隔离。上下文操作允许直接从项目视图添加笔记、任务和镜头。',
      },
      equipmentInventory: {
        title: '设备清单',
        description: '追踪个人设备，访问包含技术规格的综合性设备目录。自动规格功能可获取传感器尺寸、焦距和重量等数据。',
      },
      shotManagement: {
        title: '镜头管理',
        description: '使用GPS坐标和路线优化来规划、组织和追踪镜头。关联位置、标记状态，并将特定设备链接到镜头。',
      },
      notesSystem: {
        title: '笔记系统',
        description: '与项目、镜头和设备关联的集中化笔记记录。支持富文本，配备Markdown编辑器，可进行分类整理。',
      },
      postProduction: {
        title: '后期制作任务',
        description: '管理后期制作阶段的工作任务和流程。状态工作流从待处理→进行中→已完成，支持优先级设置。',
      },
      routePlanning: {
        title: '路线规划',
        description: '使用Google Routes API自动计算拍摄地点之间的路线。支持多站点路线，可计算距离和行程时间。',
      },
    },
    architecture: {
      title: '系统架构',
      description: 'Vemakin采用现代三层架构，前端使用React，后端API使用Go，数据库使用PostgreSQL，全部托管在Google Cloud基础设施上，并集成Firebase服务。',
      clientLayer: {
        title: '客户端层',
        content: '使用TypeScript开发的React Web应用程序，响应式设计，支持渐进式Web应用功能。',
      },
      apiLayer: {
        title: 'API层',
        content: 'Google Cloud Run托管Go + Echo RESTful API，配备认证、CORS和日志中间件。',
      },
      dataLayer: {
        title: '数据层',
        content: 'Cloud SQL上的PostgreSQL用于关系型数据，Firebase用于认证和存储。',
      },
    },
    techStack: {
      title: '技术栈',
      frontend: '前端',
      backend: '后端',
      infrastructure: '基础设施',
    },
    security: {
      title: '安全与认证',
      firebaseAuth: {
        title: 'Firebase认证',
        content: '安全的用户身份管理，支持JWT令牌验证和自动令牌刷新。',
      },
      dataOwnership: {
        title: '数据所有权',
        content: '行级安全确保用户只能访问自己的数据，实现完全的项目隔离。',
      },
      corsProtection: {
        title: 'CORS保护',
        content: '为生产域配置严格的跨源资源共享策略。',
      },
      professionalSecurity: {
        title: '专业安全',
        content: '企业级安全，配备加密连接和安全的凭证管理。',
      },
    },
    cta: '访问Vemakin网站',
    backToPortfolio: '返回作品集',
  },
  experiences: [
    {
      title: '.NET后端开发工程师（全职）',
      company: 'Hager - Bordeaux, France',
      period: '2023/09 - 2025/08',
      description: '使用.NET框架开发C#后端解决方案，采用DDD架构和Azure基础设施。主要项目包括虚拟设备的物理事件模拟器和管理安装解决方案。编写单元测试、集成测试和技术文档。',
    },
    {
      title: '.NET后端开发工程师（实习）',
      company: 'Hager - Bordeaux, France',
      period: '2023/04 - 2023/09',
      description: '使用.NET开发C#后端解决方案，使内部用户能够修改设备环境。应用领域驱动设计（DDD）架构，将应用程序部署在Azure基础设施上，并在使用Azure DevOps的敏捷环境中工作。',
    },
    {
      title: '销售顾问（学生兼职）',
      company: 'Auchan Bordeaux Lac',
      period: '2020年6月 - 2023年4月',
      description: '在欧尚超市担任销售顾问和经理的学生兼职，负责手机、电视和多媒体部门。',
    },
    {
      title: 'Java开发工程师（实习）',
      company: 'Avista',
      period: '2018 & 2019',
      description: '开发财务和资金管理软件。使用Java和SQL在应用程序中实现新功能。',
    },
  ],
  education: [
    {
      degree: '非学历汉语项目',
      school: '复旦大学（Fudan University），中国上海',
      period: '2025 - 2026',
    },
    {
      degree: "计算机科学硕士学位 (Master's degree in Computer Science)",
      school: '波尔多大学（University of Bordeaux），法国',
      period: '2021 - 2023',
      details: '法国评分：15.59/20 - GPA：3.7',
    },
    {
      degree: "计算机科学学士学位 (Bachelor's degree in Computer Science)",
      school: '波尔多大学（University of Bordeaux），法国',
      period: '2019 - 2021',
    },
  ],
  projects: [
    {
      name: '自主机器人',
      description: '创建一个能够检测和跟踪彩色线的自主机器人。使用计算机视觉（OpenCV）以及机器人学相关的数学和几何知识。',
    },
    {
      name: 'VueJS图像处理',
      description: '创建一个VueJS客户端-服务器架构，允许在浏览器中进行照片处理，具有实时滤镜和效果。',
    },
    {
      name: '神经网络',
      description: '实现神经网络、机器学习和AI，用于图像识别、数据分析和研究应用。',
    },
    {
      name: 'CPU/GPU优化',
      description: '使用OpenMP和OpenCL进行CPU和GPU优化，提高程序和算法性能。',
    },
  ],
  hobbies: [
    {
      name: '旅行',
      description: '探索新地方',
    },
    {
      name: '电影',
      description: '导演、制作',
    },
    {
      name: 'AI和测试模型',
      description: '保持更新',
    },
  ],
  contact: {
    location: '中国上海',
  },
};
