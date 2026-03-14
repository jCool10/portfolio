import React from "react"
import Image from "next/image"
import { Briefcase, Code2, GraduationCap } from "lucide-react"

import { skillCategories, type SkillItem } from "@/config/resume-skills-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Timeline,
  TimelineDescription,
  TimelineDot,
  TimelineItem,
  TimelineTime,
  TimelineTitle,
} from "@/components/ui/timeline"
import { Icons } from "@/components/icons"

/* Renders a single skill icon with label */
const SkillIcon = ({ skill }: { skill: SkillItem }) => {
  const iconClass =
    "transition-transform duration-200 group-hover/skill:scale-110"

  return (
    <div className="group/skill flex flex-col items-center gap-1.5 rounded-lg p-2 transition-colors duration-200 hover:bg-muted">
      {skill.src ? (
        <Image
          src={skill.src}
          height={40}
          width={40}
          alt={skill.title}
          className={iconClass}
        />
      ) : skill.iconKey ? (
        (() => {
          const CustomIcon = Icons[skill.iconKey as keyof typeof Icons]
          return <CustomIcon className={`size-10 ${iconClass}`} />
        })()
      ) : null}
      <span className="text-xs font-medium text-muted-foreground">
        {skill.title}
      </span>
    </div>
  )
}

/* Section header with accent icon */
const SectionHeader = ({
  icon: Icon,
  title,
}: {
  icon: React.ElementType
  title: string
}) => (
  <div className="flex items-center gap-3">
    <Button
      className="cursor-default rounded-lg bg-accent/10 p-0 text-accent"
      variant="ghost"
      size="icon"
    >
      <Icon className="size-5" />
    </Button>
    <CardTitle className="font-heading">{title}</CardTitle>
  </div>
)

const Resume = () => (
  <Card className="animate-fade-in-up">
    <CardHeader>
      <CardTitle className="relative text-4xl font-bold font-heading after:absolute after:bottom-3 after:ml-[5px] after:inline-block after:h-1 after:w-1/4 after:rounded-full after:bg-accent after:content-['']">
        Resume
      </CardTitle>
    </CardHeader>

    <CardContent className="flex flex-col gap-6">
      {/* Skills */}
      <SectionHeader icon={Code2} title="Skills" />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {skillCategories.map((category) => (
          <div
            key={category.label}
            className="space-y-3 rounded-xl border p-4"
          >
            <Badge variant="secondary" className="text-xs font-semibold">
              {category.label}
            </Badge>
            <div className="flex flex-wrap gap-1">
              {category.items.map((skill, i) => (
                <SkillIcon key={i} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="h-px w-full bg-border" />

      {/* Education & Experience */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <SectionHeader icon={GraduationCap} title="Education" />
          <Timeline className="ml-4 pt-4">
            <TimelineItem>
              <TimelineDot className="border-accent bg-accent" />
              <TimelineTime>10/2020 - Present</TimelineTime>
              <TimelineTitle>Computer Engineering</TimelineTitle>
              <TimelineDescription>
                Da Nang University of Science and Technology
              </TimelineDescription>
            </TimelineItem>
          </Timeline>
        </div>

        <div>
          <SectionHeader icon={Briefcase} title="Experience" />
          <Timeline className="ml-4 pt-4">
            <TimelineItem>
              <TimelineDot className="border-accent bg-accent" />
              <TimelineTime>3/2023 - 9/2023</TimelineTime>
              <TimelineTitle>Front-end Developer</TimelineTitle>
              <TimelineDescription>MLOpsVN</TimelineDescription>
            </TimelineItem>
            <TimelineItem>
              <TimelineDot className="border-accent bg-accent" />
              <TimelineTime>10/2022 - Present</TimelineTime>
              <TimelineTitle>Leader of Web/App and Algorithm</TimelineTitle>
              <TimelineDescription>Pioneer Club</TimelineDescription>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </CardContent>
  </Card>
)

export default Resume
