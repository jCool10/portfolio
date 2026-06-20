export type ProjectData = {
  title: string
  image: string
  summary: string
  overview: string[]
  technologies: string[]
  github: string | null
  website: string | null
  category: string
}

export const projectCategories = [
  "All",
  "Front-end",
  "Back-end",
  "Full stack",
] as const

export const projectsData: ProjectData[] = [
  {
    title: "jCool E-Commerce — NestJS Microservices Platform",
    image:
      "https://res.cloudinary.com/dpkkgg1hf/image/upload/v1714404529/Portfolio_t3qbys.png",
    summary:
      "Portfolio-grade e-commerce platform with 6 NestJS microservices and 2 Next.js frontends in a Turborepo monorepo.",
    overview: [
      "Project Description: Designed and built a portfolio-grade e-commerce platform: 6 NestJS microservices (API Gateway, Auth, Catalog, Search, Order, Email Worker) + 2 Next.js frontends (Storefront, Admin) in a Turborepo + pnpm monorepo, with multi-currency support (USD + VND, integer subunits, no FX).",
      "Architecture: Applied Hexagonal Architecture, Result<T, E> error handling, Saga orchestration with compensation, and Transactional Outbox (domain mutation + outbox row in one Prisma transaction; 1s poller drains to RabbitMQ topic exchange).",
      "Key Engineering: Idempotent Stripe webhook handling via Postgres UNIQUE constraint + advisory locks; deadlock-free inventory reservation using SELECT ... FOR UPDATE ordered by SKU; FSM enforced inside the aggregate root.",
      "Infra & Observability: Event-driven Elasticsearch indexing with blue-green alias swap; BullMQ + MJML/Handlebars email pipeline; JWT (RS256) refresh-token auth; full observability with Pino + OpenTelemetry + Grafana / Loki / Tempo / Prometheus + Sentry.",
    ],
    technologies: [
      "NestJS",
      "Next.js 14",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "RabbitMQ",
      "Elasticsearch",
      "Stripe",
      "Docker",
      "Turborepo",
    ],
    github: "https://github.com/jCool10/jCool-ecommerce",
    website: null,
    category: "Full stack",
  },
  {
    title: "Capstone — RAG Chat with PDF",
    image:
      "https://res.cloudinary.com/dpkkgg1hf/image/upload/v1714404529/Portfolio_t3qbys.png",
    summary:
      "Microservices RAG system for Q&A over PDF/DOCX/TXT documents with hybrid search and reranking.",
    overview: [
      "Project Description: Built a microservices RAG system for Q&A over PDF/DOCX/TXT documents: Next.js 14 client (App Router, shadcn/ui, React Query) + Node.js/Express/TypeScript API + Python FastAPI RAG service — fully containerized via Docker Compose (etcd + MinIO + Milvus).",
      "RAG Pipeline: Implemented end-to-end RAG with BAAI/bge-m3 embeddings (1024-dim) and hybrid search (Milvus dense + BM25 sparse) fused via RRF, with cross-encoder reranking (ms-marco-MiniLM-L-6-v2); remote LLM (Llama 3.2 3B) served via HTTP.",
      "Backend & Security: Designed backend with JWT RS256 auth, per-user RSA 2048 keypair encryption, workspace isolation, AWS S3 file storage, MongoDB persistence, Winston structured logging, and security middleware (Helmet, CORS, rate limiting).",
      "Frontend UX: Source-attributed answers with conversation history; Axios interceptor for JWT refresh-on-401 with queued retries; EN→VI translation pipeline for multi-language support.",
    ],
    technologies: [
      "Next.js 14",
      "Express.js",
      "TypeScript",
      "Python (FastAPI)",
      "LangChain",
      "Milvus",
      "MongoDB",
      "AWS S3",
      "Docker Compose",
    ],
    github: "https://github.com/jCool10/capstone-project",
    website: null,
    category: "Full stack",
  },
  {
    title: "MLOps Marathon 2023",
    image:
      "https://res.cloudinary.com/dpkkgg1hf/image/upload/v1692502392/Portfolio/mlops_wtqosq.png",
    summary:
      "Create the MLOps Marathon website for the inaugural MLOps Marathon 2023 competition in Vietnam.",
    overview: [
      "Project Description: Developed the MLOps Marathon website for the 2023 MLOps Marathon competition, the first competition on Machine Learning Operations (MLOps) in Vietnam",
      "Role and Responsibilities: Designed a mobile-friendly interface to ensure responsiveness across different platforms. Additionally, optimized the website to ensure fast loading speeds and a good user experience.",
    ],
    technologies: ["NextJs", "Vercel", "CSS modules (SCSS)"],
    github: null,
    website: "https://mlops.vn/marathon",
    category: "Front-end",
  },
  {
    title: "Discord clone",
    image:
      "https://res.cloudinary.com/dpkkgg1hf/image/upload/v1713024358/Portfolio/discord-clone_kkuqz4.png",
    summary:
      "This project is an ambitious full-stack endeavor replicating the core functionalities of Discord.",
    overview: [
      "Project Description: Developed an instant messaging application similar to Discord, supporting messaging, audio and video calls, and member management. The project used full-stack technology with real-time messaging functionality, member management, and diverse communication channels.",
      "Role and Responsibilities: Designed and developed key functionalities, including real-time communication and user authentication, as well as the user interface design.",
      "Key features include real-time messaging, voice and video calls, infinite message loading, and comprehensive server customization. ",
    ],
    technologies: [
      "Next.js",
      "Socket.io",
      "Tailwind CSS",
      "React Hook Form",
      "Express",
      "Prisma",
      "Node.js",
      "My SQL",
      "Docker",
    ],
    github: "https://github.com/jCool10/discord-clone",
    website: "https://jcool-discord-clone.vercel.app/",
    category: "Full stack",
  },
  {
    title: "Shopee clone",
    image:
      "https://res.cloudinary.com/dpkkgg1hf/image/upload/v1692627622/Portfolio/shopee_eu6okt.png",
    summary:
      "This project involves creating a user-interface clone of the Shopee e-commerce platform.",
    overview: [
      "Project Description: Developed a clone of the Shopee e-commerce website, focusing on recreating core features like product display, shopping cart management, and product filtering, ...",
      "Role and Responsibilities: Responsible for front-end development with full functionality of the e-commerce website, ensuring features worked correctly and performance was optimized.",
    ],
    technologies: [
      "React Js",
      "Tailwind CSS",
      "TypeScript",
      "Redux",
      "React Hook Form",
      "React Query",
      "Yup",
    ],
    github: "https://github.com/jCool10/Shopee-Clone",
    website: "https://jcool-shopee.netlify.app/",
    category: "Front-end",
  },
  {
    title: "My Portfolio",
    image:
      "https://res.cloudinary.com/dpkkgg1hf/image/upload/v1714404529/Portfolio_t3qbys.png",
    summary:
      "Personal portfolio and blog built with Next.js, showcasing projects and sharing knowledge through articles.",
    overview: [
      "Project Description: Developed a personal website with a blog using Next.js, showcasing projects and sharing knowledge through articles.",
      "Role and Responsibilities: Designed and developed the entire website.",
    ],
    technologies: [
      "Next JS",
      "Tailwind CSS",
      "Shadcn UI",
      "Velite",
      "Next Themes",
      "React Hook Form,",
    ],
    github: "https://github.com/jCool10/portfolio",
    website: "https://jcool-portfolio.vercel.app/",
    category: "Front-end",
  },
  {
    title: "E-commerce Backend",
    image:
      "https://res.cloudinary.com/dpkkgg1hf/image/upload/v1714404529/Portfolio_t3qbys.png",
    summary:
      "RESTful API backend for e-commerce with CI/CD pipeline, Docker containerization, and Swagger documentation.",
    overview: [
      "Project Description: Developed the backend for an e-commerce application using Node.js and TypeScript. Provided a fully functional API for an e-commerce application. Implemented CI/CD with Docker and GitHub Actions to automate the development, testing, and deployment process, ensuring code consistency and efficiency. Used Swagger for API documentation.",
      "Role and Responsibilities: Programmed and designed the database structure, developed API endpoints, set up and configured CI/CD, and secured customer information.",
    ],
    technologies: [
      "Node JS",
      "Typescript",
      "Docker",
      "Swagger",
      "MongoDB",
      "Express JS",
      "Json Web Token",
    ],
    github: "https://github.com/jCool10/BE-ecommerce-TS-",
    website: null,
    category: "Back-end",
  },
  {
    title: "Scientific Research Project: Chat PDF",
    image:
      "https://res.cloudinary.com/dpkkgg1hf/image/upload/v1714404529/Portfolio_t3qbys.png",
    summary:
      "Research project integrating LLMs for intelligent PDF document interaction and information extraction.",
    overview: [
      "Project Description: Developed the ChatPDF website integrating Large Language Models (LLMs) to enhance the interaction and information access process within PDF documents. The system supports extracting, normalizing, and querying information quickly and accurately, using natural language processing techniques and vector databases.",
      "Role and Responsibilities: Developed the Frontend with Next.js and Tailwind CSS, designed user interaction flows, integrated LLMs for natural language processing. Managed Backend development with Node.js, ExpressJS, and implemented data processing and storage solutions using MongoDB, AWS S3,and Pinecone.",
    ],
    technologies: [
      "Next JS",
      "Tailwind CSS",
      "Clerk",
      "Express JS",
      "NodeJS",
      "Langchain",
      "OpenAI",
      "MongoDB",
      "AWS S3",
      "Pinecone",
    ],
    github: "https://github.com/jCool10/ChatPDF",
    website: null,
    category: "Full stack",
  },
  {
    title: "The Pioneer Website",
    image:
      "https://res.cloudinary.com/dpkkgg1hf/image/upload/v1692627296/Portfolio/pioneerclub_kprxiy.png",
    summary:
      "Official website for the Pioneer Student Research Club at Da Nang University of Science and Technology.",
    overview: [
      "Project Description: Developed the interface for the `Pioneer Student Research Club`, based on a pre-existing design.",
      "Role and Responsibilities: Served as the project leader, assigning tasks to team members and ensuring project progress. Also responsible for front-end development, supporting and guiding team members, and resolving technical issues.",
    ],
    technologies: [
      "ReactJS",
      "Axios",
      "React Router Dom",
      "CSS module (SCSS)",
      "React Redux",
    ],
    github: null,
    website: "https://pioneerclub.netlify.app/",
    category: "Full stack",
  },
]
