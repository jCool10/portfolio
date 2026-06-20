export type ProjectData = {
  title: string
  /** Display period, e.g. "2025 — Present" */
  period: string
  /** Optional cover screenshot. When absent, the UI renders a tech-stack cover. */
  image?: string
  summary: string
  overview: string[]
  technologies: string[]
  github: string | null
  website: string | null
  category: string
}

export const projectsData: ProjectData[] = [
  {
    title: "jCommerce — Microservices E-Commerce Platform",
    period: "2025 — Present",
    summary:
      "Self-driven microservices e-commerce platform — 6 NestJS services and 2 Next.js apps in a Turborepo monorepo, built end-to-end around production patterns.",
    overview: [
      "Project Description: A self-driven side project exploring production microservices — 6 NestJS services (API Gateway, Auth, Catalog, Search, Order, Email Worker) and 2 Next.js apps (Storefront, Admin) in a Turborepo + pnpm monorepo, with multi-currency support (USD + VND, integer subunits, no FX).",
      "Architecture: Hexagonal layering with Result<T, E> error handling, Saga orchestration with compensation for the checkout flow, and a Transactional Outbox that writes the domain mutation and outbox row in one Prisma transaction before a 1s poller drains to a RabbitMQ topic exchange.",
      "Key Engineering: Idempotent Stripe webhook handling via a Postgres UNIQUE constraint, deadlock-free inventory reservation using SELECT ... FOR UPDATE ordered by SKU, and an order state machine enforced inside the aggregate root.",
      "Infra & Observability: Event-driven Elasticsearch indexing with blue-green alias swaps, a BullMQ + MJML/Handlebars email pipeline, JWT (RS256) refresh-token auth, and a full observability stack (OpenTelemetry, Grafana, Loki, Tempo, Prometheus, Sentry).",
    ],
    technologies: [
      "NestJS",
      "Next.js",
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
    github: "https://github.com/jCool10/jCommerce",
    website: null,
    category: "Full stack",
  },
  {
    title: "AnythingRAG — RAG Chat with Anything",
    period: "2025",
    summary:
      "Multi-user RAG app to upload PDFs and chat with them — hybrid retrieval, cross-encoder reranking, and source-attributed answers in English and Vietnamese.",
    overview: [
      "Project Description: A multi-user RAG application that lets users upload PDFs (plus DOCX/TXT) and chat with them in natural language, returning source-attributed answers across English and Vietnamese.",
      "Architecture: Three containerized services — a Next.js client, a Node.js / Express API, and a Python FastAPI RAG service — orchestrated via Docker Compose (etcd + MinIO + Milvus).",
      "RAG Pipeline: BAAI/bge-m3 dense embeddings (1024-dim) and BM25 sparse search fused via Reciprocal Rank Fusion, then cross-encoder reranking (ms-marco-MiniLM-L-6-v2); a remote Llama 3.2 3B LLM served over HTTP.",
      "Security & Persistence: JWT (RS256) auth with per-user RSA-2048 keypair encryption for workspace isolation; documents persisted on MongoDB + AWS S3, all wired through structured logging and security middleware (Helmet, CORS, rate limiting).",
    ],
    technologies: [
      "Next.js",
      "Express.js",
      "TypeScript",
      "Python (FastAPI)",
      "LangChain",
      "Milvus",
      "MongoDB",
      "AWS S3",
      "Docker",
    ],
    github: "https://github.com/jCool10/capstone-project",
    website: null,
    category: "Full stack",
  },
  {
    title: "MLOps Marathon 2023",
    period: "2023",
    image:
      "https://res.cloudinary.com/dpkkgg1hf/image/upload/v1692502392/Portfolio/mlops_wtqosq.png",
    summary:
      "Official website for MLOps Marathon 2023 — the first MLOps competition in Vietnam — built with Next.js and SCSS Modules and shipped on Vercel.",
    overview: [
      "Project Description: Built the official website for MLOps Marathon 2023 — the first competition on Machine Learning Operations (MLOps) in Vietnam — as a freelance front-end developer for MLOpsVN.",
      "Role and Responsibilities: Designed a mobile-friendly, fully responsive interface and optimized the site for fast loading and a smooth user experience, then deployed and managed the production site on Vercel.",
    ],
    technologies: ["Next.js", "SCSS Modules", "Vercel"],
    github: null,
    website: "https://mlops.vn/marathon",
    category: "Front-end",
  },
]
