import Image, { type StaticImageData } from "next/image"
import {
  AwsIcon,
  DockerIcon,
  ElasticsearchIcon,
  ExpressIcon,
  LangchainIcon,
  MilvusIcon,
  MongodbIcon,
  NestjsIcon,
  NextJSIcon,
  PostgresqlIcon,
  PrismaIcon,
  PythonIcon,
  RabbitmqIcon,
  RedisIcon,
  SassIcon,
  TypescriptIcon,
  VercelIcon,
} from "@/public/icons"
import { CreditCard, Layers, type LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

type IconDescriptor = { src?: StaticImageData; lucide?: LucideIcon }

/* Maps a technology label (as written in projects-data) to a brand/concept icon.
   Brands without a logo in the set (Stripe, Turborepo) fall back to a Lucide glyph. */
const TECH_ICONS: Record<string, IconDescriptor> = {
  "nestjs": { src: NestjsIcon },
  "next.js": { src: NextJSIcon },
  "nextjs": { src: NextJSIcon },
  "typescript": { src: TypescriptIcon },
  "postgresql": { src: PostgresqlIcon },
  "prisma": { src: PrismaIcon },
  "redis": { src: RedisIcon },
  "rabbitmq": { src: RabbitmqIcon },
  "elasticsearch": { src: ElasticsearchIcon },
  "stripe": { lucide: CreditCard },
  "docker": { src: DockerIcon },
  "turborepo": { lucide: Layers },
  "express.js": { src: ExpressIcon },
  "express": { src: ExpressIcon },
  "python (fastapi)": { src: PythonIcon },
  "python": { src: PythonIcon },
  "langchain": { src: LangchainIcon },
  "milvus": { src: MilvusIcon },
  "mongodb": { src: MongodbIcon },
  "aws s3": { src: AwsIcon },
  "vercel": { src: VercelIcon },
  "scss modules": { src: SassIcon },
}

const resolve = (tech: string): IconDescriptor | null =>
  TECH_ICONS[tech.toLowerCase().trim()] ?? null

const initials = (tech: string) =>
  tech.replace(/[^a-zA-Z0-9]/g, "").slice(0, 2).toUpperCase()

/* A single technology glyph. Falls back to two-letter initials when no logo exists. */
export const TechIcon = ({
  tech,
  size = 20,
  className,
}: {
  tech: string
  size?: number
  className?: string
}) => {
  const descriptor = resolve(tech)
  const dim = { width: size, height: size }

  if (descriptor?.src) {
    return (
      <Image
        src={descriptor.src}
        alt={tech}
        width={size}
        height={size}
        style={dim}
        className={cn("object-contain", className)}
      />
    )
  }

  if (descriptor?.lucide) {
    const Glyph = descriptor.lucide
    return (
      <Glyph
        style={dim}
        strokeWidth={1.6}
        className={cn("text-muted-foreground", className)}
        aria-label={tech}
      />
    )
  }

  return (
    <span
      style={dim}
      className={cn(
        "inline-flex items-center justify-center font-mono text-[9px] font-semibold tracking-tight text-muted-foreground",
        className
      )}
      aria-label={tech}
    >
      {initials(tech)}
    </span>
  )
}

/* Cover artwork used in place of a screenshot: a faint index watermark behind a
   cluster of the project's tech-stack glyphs. Keeps the section image-free but
   still visual and on-brand. */
export const TechStackCover = ({
  technologies,
  index,
  className,
}: {
  technologies: string[]
  index?: number
  className?: string
}) => {
  // Prefer techs that resolve to a real logo so the cluster reads cleanly.
  const withLogo = technologies.filter((t) => resolve(t)?.src)
  const shown = (withLogo.length >= 4 ? withLogo : technologies).slice(0, 6)

  return (
    <div
      className={cn(
        "relative grid h-full w-full place-items-center overflow-hidden bg-gradient-to-br from-elevated via-surface to-elevated",
        className
      )}
    >
      {/* Faint engineering grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.5] [background-image:linear-gradient(to_right,hsl(var(--hairline)/0.5)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--hairline)/0.5)_1px,transparent_1px)] [background-size:28px_28px]"
      />
      {/* Index watermark */}
      {typeof index === "number" && (
        <span
          aria-hidden
          className="absolute -bottom-6 right-2 font-mono text-[120px] font-semibold leading-none text-foreground/[0.04]"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      )}
      {/* Glyph cluster */}
      <div className="relative flex max-w-[80%] flex-wrap items-center justify-center gap-2.5">
        {shown.map((tech) => (
          <span
            key={tech}
            className="grid size-11 place-items-center rounded-xl border border-hairline/60 bg-surface/80 shadow-soft backdrop-blur-sm"
          >
            <TechIcon tech={tech} size={22} />
          </span>
        ))}
      </div>
    </div>
  )
}
