import { type StaticImageData } from "next/image"
import {
  AwsIcon,
  AzureIcon,
  CplusplusIcon,
  Css3Icon,
  DockerIcon,
  ElasticsearchIcon,
  FigmaIcon,
  GcpIcon,
  GithubActionsIcon,
  GrafanaIcon,
  GraphqlIcon,
  Html5Icon,
  HuggingfaceIcon,
  IllustratorIcon,
  JavascriptIcon,
  KafkaIcon,
  KubernetesIcon,
  LangchainIcon,
  LanggraphIcon,
  LokiIcon,
  MilvusIcon,
  MongodbIcon,
  MuiIcon,
  MysqlIcon,
  NestjsIcon,
  NginxIcon,
  NodeJSIcon,
  OpenaiIcon,
  OpentelemetryIcon,
  PhotoshopIcon,
  PineconeIcon,
  PostgresqlIcon,
  PostmanIcon,
  PrometheusIcon,
  PythonIcon,
  RabbitmqIcon,
  ReactHookFormIcon,
  ReactIcon,
  ReactQueryIcon,
  RedisIcon,
  ReduxIcon,
  SassIcon,
  SentryIcon,
  SwaggerIcon,
  TailwindcssIcon,
  TempoIcon,
  TypescriptIcon,
  UbuntuIcon,
  VSCodeIcon,
  VercelIcon,
} from "@/public/icons"
import {
  BookOpen,
  Boxes,
  GitBranch,
  Hexagon,
  Sigma,
  Webhook,
  type LucideIcon,
} from "lucide-react"

export type SkillItem = {
  /** Static image import for standard icons */
  src?: StaticImageData
  /** Key in the Icons component for custom SVG icons */
  iconKey?: string
  /** Lucide icon component — used for concepts without a brand logo
   * (e.g. REST APIs, Microservices, DDD/Hexagonal, CI/CD, RAG, pgvector) */
  lucide?: LucideIcon
  title: string
}

export type SkillCategory = {
  label: string
  items: SkillItem[]
}

export const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    items: [
      { src: TypescriptIcon, title: "TypeScript" },
      { src: JavascriptIcon, title: "JavaScript" },
      { src: PythonIcon, title: "Python" },
      { src: CplusplusIcon, title: "C/C++" },
    ],
  },
  {
    label: "Front-end",
    items: [
      { src: ReactIcon, title: "React" },
      { iconKey: "logo", title: "Next JS" },
      { src: ReduxIcon, title: "Redux" },
      { src: ReactQueryIcon, title: "React Query" },
      { src: ReactHookFormIcon, title: "React Hook Form" },
      { src: TailwindcssIcon, title: "Tailwind CSS" },
      { src: SassIcon, title: "Sass/SCSS" },
      { iconKey: "shadcnui", title: "Shadcn UI" },
      { src: MuiIcon, title: "Material UI" },
      { src: Html5Icon, title: "HTML" },
      { src: Css3Icon, title: "CSS" },
    ],
  },
  {
    label: "Back-end",
    items: [
      { src: NodeJSIcon, title: "Node JS" },
      { iconKey: "express", title: "Express JS" },
      { src: NestjsIcon, title: "NestJS" },
      { lucide: Webhook, title: "REST APIs" },
      { src: GraphqlIcon, title: "GraphQL (Apollo)" },
      { iconKey: "socketio", title: "Socket.IO" },
      { lucide: Boxes, title: "Microservices" },
      { src: RabbitmqIcon, title: "RabbitMQ" },
      { src: KafkaIcon, title: "Kafka" },
      { lucide: Hexagon, title: "DDD / Hexagonal" },
    ],
  },
  {
    label: "Databases & Search",
    items: [
      { src: PostgresqlIcon, title: "PostgreSQL" },
      { src: MysqlIcon, title: "MySQL" },
      { src: MongodbIcon, title: "MongoDB" },
      { iconKey: "prisma", title: "Prisma" },
      { src: RedisIcon, title: "Redis" },
      { src: ElasticsearchIcon, title: "Elasticsearch" },
      { src: MilvusIcon, title: "Milvus" },
      { lucide: Sigma, title: "pgvector" },
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      { src: AwsIcon, title: "AWS" },
      { src: GcpIcon, title: "GCP" },
      { src: AzureIcon, title: "Azure" },
      { src: DockerIcon, title: "Docker" },
      { src: KubernetesIcon, title: "Kubernetes" },
      { src: GithubActionsIcon, title: "GitHub Actions" },
      { lucide: GitBranch, title: "CI/CD" },
      { src: VercelIcon, title: "Vercel" },
      { src: NginxIcon, title: "Nginx" },
    ],
  },
  {
    label: "AI / ML",
    items: [
      { src: LangchainIcon, title: "LangChain" },
      { src: LanggraphIcon, title: "LangGraph" },
      { src: OpenaiIcon, title: "OpenAI API" },
      { lucide: BookOpen, title: "RAG" },
      { src: HuggingfaceIcon, title: "HuggingFace" },
      { src: PineconeIcon, title: "Pinecone" },
    ],
  },
  {
    label: "Observability & Tooling",
    items: [
      { src: OpentelemetryIcon, title: "OpenTelemetry" },
      { src: GrafanaIcon, title: "Grafana" },
      { src: LokiIcon, title: "Loki" },
      { src: TempoIcon, title: "Tempo" },
      { src: PrometheusIcon, title: "Prometheus" },
      { src: SentryIcon, title: "Sentry" },
      { src: PostmanIcon, title: "Postman" },
      { src: SwaggerIcon, title: "Swagger" },
    ],
  },
  {
    label: "Tools",
    items: [
      { iconKey: "gitHub", title: "GitHub" },
      { src: VSCodeIcon, title: "VS Code" },
      { src: FigmaIcon, title: "Figma" },
      { src: UbuntuIcon, title: "Ubuntu" },
      { src: PhotoshopIcon, title: "Photoshop" },
      { src: IllustratorIcon, title: "Illustrator" },
    ],
  },
]
