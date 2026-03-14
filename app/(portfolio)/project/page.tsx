"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  projectCategories,
  projectsData,
  type ProjectData,
} from "@/config/projects-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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
  const visibleTechs = technologies.slice(0, 3)
  const remaining = technologies.length - visibleTechs.length

  return (
    <Card className="col-span-1 flex flex-col overflow-hidden border-l-2 border-l-transparent transition-all duration-300 hover:-translate-y-1 hover:border-l-accent hover:shadow-lg group cursor-pointer">
      {/* Image with category badge overlay */}
      <div className="relative overflow-hidden">
        <Image
          className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={image}
          width={500}
          height={280}
          alt={title}
        />
        <Badge className="absolute right-2 top-2 bg-accent/90 text-accent-foreground text-[10px]">
          {category}
        </Badge>
      </div>

      {/* Title & summary */}
      <CardHeader className="flex-1 py-3">
        <CardTitle className="text-base">{title}</CardTitle>
        <CardDescription className="line-clamp-2 text-sm">
          {summary}
        </CardDescription>
      </CardHeader>

      {/* Tech badges */}
      <CardContent className="pb-2 pt-0">
        <div className="flex flex-wrap gap-1">
          {visibleTechs.map((tech, i) => (
            <Badge
              key={i}
              variant="secondary"
              className="px-1.5 py-0 text-[10px]"
            >
              {tech}
            </Badge>
          ))}
          {remaining > 0 && (
            <Badge
              variant="outline"
              className="px-1.5 py-0 text-[10px] text-muted-foreground"
            >
              +{remaining}
            </Badge>
          )}
        </div>
      </CardContent>

      {/* Actions: Read More + direct links */}
      <CardFooter className="flex items-center gap-2 pt-0">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="cursor-pointer transition-all duration-300 hover:border-accent hover:text-accent"
            >
              Read More
            </Button>
          </DialogTrigger>
          <DialogContent className="h-[80vh] max-w-[900px] overflow-scroll">
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

        <div className="ml-auto flex items-center gap-1">
          {github && (
            <Button
              variant="ghost"
              size="icon"
              className="size-8 cursor-pointer hover:text-accent"
              asChild
            >
              <Link
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub repository"
              >
                <Github className="size-4" />
              </Link>
            </Button>
          )}
          {website && (
            <Button
              variant="ghost"
              size="icon"
              className="size-8 cursor-pointer hover:text-accent"
              asChild
            >
              <Link
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live website"
              >
                <ExternalLink className="size-4" />
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}

const Project = () => {
  const [filter, setFilter] = useState("All")

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filter)

  return (
    <Card className="animate-fade-in-up">
      <CardHeader>
        <CardTitle className="relative text-4xl font-bold font-heading after:absolute after:bottom-3 after:ml-[5px] after:inline-block after:h-1 after:w-1/4 after:rounded-full after:bg-accent after:content-['']">
          Projects
        </CardTitle>
      </CardHeader>

      <CardContent>
        {/* Filter buttons - pill style */}
        <div className="mb-6 flex flex-wrap gap-2">
          {projectCategories.map((item) => (
            <Button
              key={item}
              variant={filter === item ? "default" : "ghost"}
              size="sm"
              className={cn(
                "rounded-full px-4 transition-all duration-300 cursor-pointer",
                filter === item
                  ? "bg-accent text-accent-foreground shadow-sm"
                  : "hover:text-accent"
              )}
              onClick={() => setFilter(item)}
            >
              {item}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default Project
