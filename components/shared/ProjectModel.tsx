import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Github, Globe } from "lucide-react"

import { TechIcon, TechStackCover } from "@/components/shared/TechStackIcons"

interface Props {
  title: string
  period: string
  category: string
  summary: string
  overviews: Array<string>
  technologies: Array<string>
  image?: string
  github?: string
  website?: string
}

const ProjectModel = ({
  image,
  overviews,
  title,
  period,
  category,
  summary,
  technologies,
  github,
  website,
}: Props) => {
  return (
    <article className="bg-surface">
      {/* Cover — screenshot when available, otherwise a tech-stack cover */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-elevated">
        {image ? (
          <Image
            alt={title}
            src={image}
            fill
            sizes="(min-width: 920px) 920px, 100vw"
            className="object-cover"
          />
        ) : (
          <TechStackCover technologies={technologies} />
        )}
      </div>

      <div className="space-y-8 p-6 md:p-8">
        {/* Title */}
        <header className="space-y-3">
          <div className="eyebrow">
            <span>{category}</span>
            <span aria-hidden>—</span>
            <span>{period}</span>
          </div>
          <h2 className="display text-3xl leading-tight sm:text-4xl">
            {title}
          </h2>
          <p className="max-w-[60ch] text-pretty leading-relaxed text-muted-foreground">
            {summary}
          </p>
        </header>

        {/* External links — quiet inline row */}
        {(github || website) && (
          <div className="flex flex-wrap gap-2">
            {github && (
              <Link
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-hairline/70 bg-elevated/40 px-3.5 py-1.5 text-xs font-medium tracking-tight transition-colors hover:border-accent/60 hover:bg-accent-soft/40 hover:text-accent"
              >
                <Github className="size-3.5" strokeWidth={1.75} />
                Source
                <ArrowUpRight
                  className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={2}
                />
              </Link>
            )}
            {website && (
              <Link
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-hairline/70 bg-elevated/40 px-3.5 py-1.5 text-xs font-medium tracking-tight transition-colors hover:border-accent/60 hover:bg-accent-soft/40 hover:text-accent"
              >
                <Globe className="size-3.5" strokeWidth={1.75} />
                Live site
                <ArrowUpRight
                  className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={2}
                />
              </Link>
            )}
          </div>
        )}

        <div className="hairline" />

        {/* Overview */}
        <section className="space-y-4">
          <h3 className="eyebrow">Overview</h3>
          <div className="space-y-4 text-pretty leading-relaxed text-muted-foreground">
            {overviews.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </section>

        <div className="hairline" />

        {/* Stack — brand icon + label */}
        <section className="space-y-4">
          <h3 className="eyebrow">Stack</h3>
          <ul className="flex flex-wrap gap-1.5">
            {technologies.map((item, index) => (
              <li
                key={index}
                className="inline-flex items-center gap-2 rounded-md border border-hairline/80 bg-elevated/40 px-2.5 py-1.5 text-xs font-medium tracking-tight"
              >
                <TechIcon tech={item} size={16} />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  )
}

export default ProjectModel
