export const zhTranslations = {
  meta: {
    title: 'Enzo Rudy SEKKAI (夏立) - 作品集',
    description: '全栈软件工程师，专注于使用C#/.NET进行后端开发、Azure云基础设施和现代Web技术。',
  },
  nav: {
    language: '语言',
    en: 'EN',
    zh: '中文',
  },
  header: {
    name: 'ENZO RUDY SEKKAI (夏立)',
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
    technicalDeepDive: {
      title: '技术深度解析',
      subtitle: '深入了解Vemakin背后的工程决策和设计模式',
      expandAll: '全部展开',
      collapseAll: '全部折叠',
      concurrency: {
        title: '并发与Go Routines',
        easySummary: 'Go routines就像轻量级线程，让应用能同时做很多事情——比如在用户继续操作的同时，在后台计算镜头之间的路线，没有任何延迟。',
        sections: {
          goroutines: {
            title: 'Go Routines实战',
            content: 'Go routines是Vemakin并发模型的核心。每个HTTP请求由一个轻量级goroutine处理（通常2-8KB栈，动态增长）。镜头间路线计算等后台任务在独立的goroutine中运行，确保主请求-响应周期不受阻塞。',
          },
          channels: {
            title: 'Channel通信机制',
            content: 'Go channel提供goroutine间的类型安全通信。Vemakin使用缓冲channel将路线计算请求与其执行解耦，实现生产者-消费者模式。这防止快速的API响应被昂贵的Google Routes API调用拖慢。',
          },
          workerPool: {
            title: '工作池模式',
            content: '固定数量的goroutine从共享channel中处理路线计算任务。这控制资源消耗（特别是Google Routes的API速率限制）同时最大化吞吐量。池大小绑定到runtime.NumCPU()以实现最佳CPU利用率。',
          },
          parallelism: {
            title: '并发 vs 并行',
            content: '并发是同时处理多件事；并行是同时做多件事。Go的调度器（GMP模型：Goroutine-Machine-Processor）将goroutine分配到OS线程上。GOMAXPROCS=4时，最多4个goroutine真正并行执行。Vemakin利用此特性进行并行数据库查询和并发API调用。',
          },
        },
      },
      securityDeepDive: {
        title: '安全深入（OWASP与最佳实践）',
        easySummary: '每个用户请求在处理前都会经过验证。密码和令牌绝不会不安全地存储。API遵循行业标准安全实践来保护用户数据。',
        sections: {
          owasp: {
            title: 'OWASP Top 10 防护',
            content: 'Vemakin应对关键OWASP风险：A01（失效的访问控制）通过每次请求的用户所有权检查；A03（注入）通过参数化SQL查询；A05（安全配置错误）通过严格的CORS和最少HTTP方法；A07（认证失败）通过Firebase JWT自动刷新；A09（日志记录失败）通过zerolog结构化日志。',
          },
          csrf: {
            title: 'CSRF防护策略',
            content: 'Vemakin使用无状态JWT API架构，天然抗CSRF。Authorization头（而非cookie）携带令牌，浏览器不会自动将其附加到跨域请求。SameSite=Strict cookie仅用于非API会话数据。此外，CORS限制允许的源为已知前端域名。',
          },
          sqlInjection: {
            title: 'SQL注入防护',
            content: '所有数据库查询使用pgx/sqlx的参数化语句。绝不使用字符串拼接或fmt.Sprintf构建查询。go-playground/validator在数据到达repository层前强制类型安全验证。',
          },
          xssPrevention: {
            title: 'XSS防护',
            content: 'React自动转义JSX表达式，防止反射型XSS。绝不使用dangerouslySetInnerHTML处理用户内容。后端使用html.EscapeString验证和清理所有输入。Content-Security-Policy头限制脚本来源。',
          },
          tokenSecurity: {
            title: 'JWT令牌管理',
            content: 'Firebase ID令牌1小时后过期。Axios拦截器使用user.getIdToken(true)在令牌过期前自动刷新。刷新失败重定向到登录页。每个请求使用Firebase Admin SDK在服务端验证令牌——绝不仅信任客户端验证。',
          },
          rateLimiting: {
            title: '速率限制',
            content: 'Echo中间件使用令牌桶算法（golang.org/x/time/rate）限制每IP每分钟100次请求。这防止暴力破解和API滥用。速率限制头（X-RateLimit-Remaining）告知客户端其配额。',
          },
        },
      },
      databaseOptimization: {
        title: '数据库优化',
        easySummary: '数据库经过精心设计，使用索引加速查询，选择灵活的数据类型，并采用软删除模式在保留数据的同时保持高性能。',
        sections: {
          indexing: {
            title: '索引策略',
            content: 'PostgreSQL索引经过精心选择：外键（user_id、project_id）上的B-tree索引加速JOIN性能；deleted_at IS NULL上的部分索引从查询中排除软删除行；常用过滤列上的复合索引（category + brand）。deleted_at上的部分索引节省约30%的索引大小，因为只索引活跃记录。',
          },
          softDelete: {
            title: '软删除模式',
            content: '所有实体使用deleted_at时间戳列而非物理删除。这支持数据恢复、审计跟踪，防止意外数据丢失。每个查询都包含WHERE deleted_at IS NULL，在repository层强制执行。后台清理worker在90天后硬删除记录。',
          },
          jsonb: {
            title: 'JSONB灵活规格存储',
            content: '设备规格因类别差异很大（相机有传感器，镜头有焦距）。Vemakin不使用单一宽表（许多可空列），而是使用类别专用规格表，JSONB列存储数组类型数据（帧率、编解码器、录制介质）。这在提供常见字段类型安全的同时允许类别特有数据的灵活性。',
          },
          connectionPooling: {
            title: '连接池管理',
            content: 'pgx维护到Cloud SQL的连接池（默认4-20个连接）。Cloud SQL Auth Proxy处理基于IAM的认证和加密，消除了静态数据库凭据的需求。连接健康检查防止陈旧连接导致错误。',
          },
          queryOptimization: {
            title: '查询优化模式',
            content: 'Vemakin使用显式列列表的SELECT（绝不SELECT *），目录数据的批量插入，以及基于上下文的超时防止长时间运行的查询。sqlx库提供高效的结构体扫描和命名查询，在保持类型安全的同时减少样板代码。',
          },
        },
      },
      apis: {
        title: 'API与集成',
        easySummary: 'Vemakin连接多个Google服务——用于认证、基于地图的路线规划和位置搜索——加上内存缓存使一切变得快速。',
        sections: {
          googleRoutes: {
            title: 'Google Routes API',
            content: 'Google Routes API计算镜头位置之间的驾车、步行、骑行和两轮车路线。Vemakin缓存结果24小时，并强制60分钟的重新计算冷却期以管理API成本。OSRM（开源路由引擎）作为备选方案确保即使Google API不可用时路线计算始终有效。',
          },
          googlePlaces: {
            title: 'Google Places API',
            content: 'Places API为用户创建镜头时的位置自动补全提供支持。会话令牌将多个自动补全请求分组为单个计费会话，降低成本约80%。前端请求防抖（300ms）避免输入时过多的API调用。',
          },
          firebaseAdmin: {
            title: 'Firebase Admin SDK',
            content: 'Firebase Admin SDK在服务端运行，在每个请求中验证ID令牌。它异步运行，因此验证不会阻塞请求处理。首次登录时，中间件自动创建与Firebase UID同步的本地用户记录，从第一天起确保数据所有权。',
          },
          bigCache: {
            title: 'BigCache内存缓存',
            content: 'BigCache为设备目录（约1500项）提供GC友好的内存缓存。它通过将条目存储在字节数组中而非map[string]interface{}来避免Go的垃圾回收开销。缓存在启动时从JSON文件预热，每小时刷新一次，减少目录浏览约90%的数据库查询。',
          },
          mountLinks: {
            title: '卡口系统与设备兼容性',
            content: '设备目录包含相机和镜头的卡口类型数据（E-mount、EF、PL、RF、L-mount）。这支持未来功能，如在镜头中分配镜头到相机机身时的兼容性警告。卡口字段存储为类型化的VARCHAR，具有类外键关系到标准化卡口名称。',
          },
        },
      },
      frontendPatterns: {
        title: '前端架构模式',
        easySummary: '前端组织为小的可复用组件，使用智能缓存避免不必要的网络请求，并乐观更新UI以获得流畅体验。',
        sections: {
          stateManagement: {
            title: '状态管理分离',
            content: 'Vemakin清晰分离三种状态：服务器状态（TanStack Query）处理API数据，自动缓存、后台重新获取和乐观更新；客户端状态（Zustand）管理UI关注点如活跃项目、主题和模态框可见性；表单状态（React Hook Form + Zod）使用类型安全模式处理表单验证。',
          },
          optimisticUpdates: {
            title: '乐观更新',
            content: '当用户创建或更新实体时，UI在API响应到达前立即更新。如果API调用失败，TanStack Query自动回滚到先前状态。这使应用感觉即时响应，同时保持数据一致性。',
          },
          atomicDesign: {
            title: '原子设计组件',
            content: '组件遵循原子设计：原子（Button、Input、Icon）→ 分子（FormField、Card）→ 有机体（ProjectCard、ShotList）→ 模板（DashboardLayout）。这确保一致性、可复用性和清晰的关注点分离。每个组件都用TypeScript接口类型化。',
          },
          tanstackCaching: {
            title: 'TanStack Query缓存策略',
            content: '每种数据类型有调整的缓存设置：类别（很少变化，24小时staleTime）、项目（1小时staleTime）、镜头（5分钟staleTime）。窗口焦点时的后台重新获取保持数据新鲜而无需手动刷新。查询键遵循结构化模式以实现精确缓存失效。',
          },
        },
      },
      architectureDecisions: {
        title: '架构决策',
        easySummary: '每项技术都有选择的理由——Go用于速度和并发，Firebase用于安全认证，Cloud Run用于经济高效的托管，PostgreSQL用于可靠的数据存储。',
        sections: {
          whyGo: {
            title: '为什么选择Go？',
            content: 'Go替代Python（原始后端）的原因：10倍更快的执行速度，goroutine原生并发，单二进制文件部署（无依赖地狱），对Cloud Run的scale-to-zero模型至关重要的快速冷启动，以及优秀的PostgreSQL驱动生态系统（pgx、sqlx）。从FastAPI迁移到Echo将响应时间从约200ms降至约15ms。',
          },
          whyCloudRun: {
            title: '为什么选择Google Cloud Run？',
            content: 'Cloud Run提供无服务器容器：按请求付费（空闲时缩放至零）、自动HTTPS、内置负载均衡、通过URL重写与Firebase Hosting的无缝集成，以及简单的基于Docker的部署。与始终运行的VM相比，Cloud Run将Vemakin的基础设施成本降低约70%。',
          },
          whyFirebase: {
            title: '为什么选择Firebase Auth？',
            content: 'Firebase Authentication处理安全身份管理的复杂性：一行代码实现社交登录（Google）、自动令牌刷新、内置验证的邮箱/密码认证、免费套餐覆盖最多1万月活用户，以及Google的久经考验的安全性。它消除了构建和维护自定义认证的需求。',
          },
          repositoryPattern: {
            title: 'Repository模式',
            content: '每个数据库实体都有专用的repository结构体，封装所有SQL查询。Handler绝不直接接触SQL——它们使用类型化参数调用repository方法。这种分离支持使用mock数据库（sqlmock）轻松进行单元测试、清晰的依赖图，以及在不更改业务逻辑的情况下切换数据库实现的能力。',
          },
        },
      },
    },
    cta: '访问Vemakin网站',
    backToPortfolio: '返回作品集',
    vpnTooltip: '在中国大陆可能需要VPN访问',
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
      name: 'AI',
      description: '智能体编码、本地模型和基准测试',
    },
  ],
  contact: {
    location: '中国上海',
  },
};
