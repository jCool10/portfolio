"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, ExternalLink, Github } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  projectCategories,
  projectsData,
  type ProjectData,
} from "@/config/projects-data"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import ProjectModel from "@/components/shared/ProjectModel"

const ProjectCard = ({ project }: { project: ProjectData }) => {
  const {
    title,
    image,
    summary,
    overview,
    technologies,
    github,
    website,
    category,
  } = project
  const visibleTechs = technologies.slice(0, 4)
  const remaining = technologies.length - visibleTechs.length

  return (
    <Dialog>
      <article
        className={cn(
          "group relative flex flex-col overflow-hidden rounded-2xl border border-hairline/70 bg-surface",
          "transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-soft"
        )}
      >
        {/* Cover image */}
        <DialogTrigger asChild>
          <button
            type="button"
            className="relative block aspect-[16/10] w-full overflow-hidden bg-elevated text-left"
            aria-label={`Open ${title} details`}
          >
            <Image
              src={image}
              alt={title}
              fill
              sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            {/* Bottom gradient for legibility */}
            <span
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            {/* Floating category tag */}
            <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-background/85 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-foreground backdrop-blur-md">
              {category}
            </span>
          </button>
        </DialogTrigger>

        {/* Body */}
        <div className="flex flex-1 flex-col gap-4 p-5">
          <header className="space-y-2">
            <h3 className="font-heading text-lg font-medium leading-tight tracking-tight">
              {title}
            </h3>
            <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
              {summary}
            </p>
          </header>

          {/* Tech meta — comma-separated typographic list, not a badge soup */}
          <ul className="flex flex-wrap items-center gap-x-1.5 gap-y-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            {visibleTechs.map((tech, i) => (
              <li key={i} className="flex items-center gap-1.5">
                <span>{tech}</span>
                {i < visibleTechs.length - 1 && (
                  <span aria-hidden className="text-foreground/30">·</span>
                )}
              </li>
            ))}
            {remaining > 0 && (
              <li className="text-foreground/40">+{remaining}</li>
            )}
          </ul>

          {/* Footer actions */}
          <div className="mt-auto flex items-center justify-between pt-2">
            <DialogTrigger asChild>
              <button
                type="button"
                className="group/btn inline-flex items-center gap-1.5 text-sm font-medium tracking-tight text-foreground transition-colors hover:text-accent"
              >
                Read more
                <ArrowUpRight
                  className="size-3.5 transition-transform duration-200 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                  strokeWidth={2}
                />
              </button>
            </DialogTrigger>

            <div className="flex items-center gap-1">
              {github && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-8 rounded-full text-muted-foreground hover:bg-elevated hover:text-accent"
                  asChild
                >
                  <Link
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${title} on GitHub`}
                  >
                    <Github className="size-4" strokeWidth={1.75} />
                  </Link>
                </Button>
              )}
              {website && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-8 rounded-full text-muted-foreground hover:bg-elevated hover:text-accent"
                  asChild
                >
                  <Link
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${title} live site`}
                  >
                    <ExternalLink className="size-4" strokeWidth={1.75} />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </article>

      <DialogContent className="h-[85vh] max-w-[920px] overflow-y-auto p-0">
        <ProjectModel
          title={title}
          image={image}
          overviews={overview}
          technologies={technologies}
          github={github ?? undefined}
          website={website ?? undefined}
        />
      </DialogContent>
    </Dialog>
  )
}

const Project = () => {
  const [filter, setFilter] = useState("All")

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filter)

  return (
    <div className="space-y-12">
      <header className="space-y-4 stagger">
        <div className="eyebrow">
          <span>00</span>
          <span aria-hidden>—</span>
          <span>Work</span>
        </div>
        <h2 className="display text-balance text-4xl leading-[1.05] sm:text-5xl lg:text-[56px] lg:leading-[0.98]">
          Things I&apos;ve <span className="italic text-accent">shipped</span>.
        </h2>
        <p className="max-w-[58ch] text-pretty leading-relaxed text-muted-foreground">
          A selection of work spanning full-stack web apps, AI-integrated
          platforms, and internal tools. Click any card for more.
        </p>
      </header>

      {/* Filter — hairline tab bar */}
      <div
        role="tablist"
        aria-label="Filter projects by category"
        className="-mx-1 flex flex-wrap items-center gap-1 border-b border-hairline/70 pb-2"
      >
        {projectCategories.map((item) => {
          const active = filter === item
          return (
            <button
              key={item}
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(item)}
              className={cn(
                "relative rounded-full px-3.5 py-1.5 text-sm font-medium tracking-tight transition-colors duration-200",
                active
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item}
              {active && (
                <span
                  aria-hidden
                  className="absolute inset-x-3 -bottom-[9px] h-px bg-accent"
                />
              )}
            </button>
          )
        })}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Project
