import React from "react"
import Image from "next/image"
import { Briefcase, GraduationCap } from "lucide-react"

import { skillCategories, type SkillItem } from "@/config/resume-skills-data"
import {
  Timeline,
  TimelineDescription,
  TimelineDot,
  TimelineItem,
  TimelineTime,
  TimelineTitle,
} from "@/components/ui/timeline"
import { Icons } from "@/components/icons"

/* Single skill — uniform icon+label pill regardless of icon source.
   Brand logos use raster/SVG icons; concepts without a brand
   (REST APIs, Microservices, RAG, etc.) use a muted Lucide glyph. */
const SkillPill = ({ skill }: { skill: SkillItem }) => {
  const hasIcon = Boolean(skill.src || skill.iconKey || skill.lucide)

  // Fallback: pure text pill (should be rare now)
  if (!hasIcon) {
    return (
      <span className="inline-flex items-center rounded-md border border-hairline/80 bg-elevated/40 px-2 py-1 text-xs font-medium text-foreground/80 transition-colors duration-150 hover:border-accent/50 hover:bg-accent-soft/40 hover:text-accent">
        {skill.title}
      </span>
    )
  }

  const LucideGlyph = skill.lucide
  const CustomIcon = skill.iconKey
    ? Icons[skill.iconKey as keyof typeof Icons]
    : null

  return (
    <span className="group/skill inline-flex items-center gap-2 rounded-md border border-hairline/80 bg-surface px-2.5 py-1.5 transition-all duration-150 hover:-translate-y-px hover:border-accent/50 hover:shadow-soft">
      {skill.src ? (
        <Image
          src={skill.src}
          height={18}
          width={18}
          alt={skill.title}
          className="size-[18px] object-contain"
        />
      ) : CustomIcon ? (
        <CustomIcon className="size-[18px]" />
      ) : LucideGlyph ? (
        <LucideGlyph
          className="size-[18px] text-muted-foreground transition-colors duration-150 group-hover/skill:text-accent"
          strokeWidth={1.6}
        />
      ) : null}
      <span className="text-xs font-medium tracking-tight">
        {skill.title}
      </span>
    </span>
  )
}

const SectionHeader = ({
  number,
  eyebrow,
  title,
}: {
  number: string
  eyebrow: string
  title: string
}) => (
  <div className="space-y-3">
    <div className="eyebrow">
      <span>{number}</span>
      <span aria-hidden>—</span>
      <span>{eyebrow}</span>
    </div>
    <h3 className="display text-2xl leading-tight tracking-tight sm:text-3xl">
      {title}
    </h3>
  </div>
)

const Resume = () => (
  <div className="space-y-16 lg:space-y-20">
    {/* Page heading */}
    <header className="space-y-4 stagger">
      <div className="eyebrow">
        <span>00</span>
        <span aria-hidden>—</span>
        <span>Resume</span>
      </div>
      <h2 className="display text-balance text-4xl leading-[1.05] sm:text-5xl lg:text-[56px] lg:leading-[0.98]">
        Skills, history, and <span className="italic text-accent">receipts</span>.
      </h2>
      <p className="max-w-[58ch] text-pretty leading-relaxed text-muted-foreground">
        A working summary of what I build with and where I&apos;ve been. Grouped
        by intent, not by every keyword.
      </p>
    </header>

    <div className="hairline" />

    {/* Skills */}
    <section className="space-y-8">
      <SectionHeader number="01" eyebrow="Stack" title="What I build with." />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {skillCategories.map((category) => (
          <div
            key={category.label}
            className="space-y-4 rounded-2xl border border-hairline/70 bg-surface/60 p-5 backdrop-blur-sm transition-colors duration-300 hover:border-accent/30"
          >
            <div className="flex items-center justify-between">
              <h4 className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                {category.label}
              </h4>
              <span className="font-mono text-[10px] tabular-nums text-muted-foreground/60">
                {String(category.items.length).padStart(2, "0")}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {category.items.map((skill, i) => (
                <SkillPill key={i} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

    <div className="hairline" />

    {/* Education & Experience */}
    <section className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="flex size-9 items-center justify-center rounded-lg bg-accent-soft text-accent"
          >
            <GraduationCap className="size-4" strokeWidth={1.6} />
          </span>
          <SectionHeader
            number="02"
            eyebrow="Education"
            title="Where I learned."
          />
        </div>

        <Timeline className="ml-4">
          <TimelineItem>
            <TimelineDot />
            <TimelineTime>10/2020 — 2025</TimelineTime>
            <TimelineTitle>
              Bachelor of Computer Engineering
            </TimelineTitle>
            <TimelineDescription>
              Da Nang University of Science and Technology
            </TimelineDescription>
          </TimelineItem>
        </Timeline>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="flex size-9 items-center justify-center rounded-lg bg-accent-soft text-accent"
          >
            <Briefcase className="size-4" strokeWidth={1.6} />
          </span>
          <SectionHeader
            number="03"
            eyebrow="Experience"
            title="Where I&rsquo;ve worked."
          />
        </div>

        <Timeline className="ml-4">
          <TimelineItem>
            <TimelineDot />
            <TimelineTime>7/2024 — Present</TimelineTime>
            <TimelineTitle>Full-stack Developer</TimelineTitle>
            <TimelineDescription>24H.DEV CO., LTD</TimelineDescription>
          </TimelineItem>
          <TimelineItem>
            <TimelineDot className="bg-foreground/40" />
            <TimelineTime>3/2023 — 9/2023</TimelineTime>
            <TimelineTitle>Front-end Developer (Contract)</TimelineTitle>
            <TimelineDescription>MLOpsVN</TimelineDescription>
          </TimelineItem>
          <TimelineItem>
            <TimelineDot className="bg-foreground/40" />
            <TimelineTime>10/2022 — 2024</TimelineTime>
            <TimelineTitle>
              Head of Web/App &amp; Algorithms Department
            </TimelineTitle>
            <TimelineDescription>
              Pioneer Student Research Club, DUT
            </TimelineDescription>
          </TimelineItem>
        </Timeline>
      </div>
    </section>
  </div>
)

export default Resume
