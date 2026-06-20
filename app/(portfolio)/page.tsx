import { ArrowUpRight, Boxes, Cpu, Wand2 } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Boxes,
    title: "Frontend Engineering",
    description:
      "Responsive, accessible SPAs with Next.js App Router, React, Tailwind, and shadcn/ui — built around real user flows, not template patterns.",
  },
  {
    icon: Cpu,
    title: "Backend & Systems",
    description:
      "REST and GraphQL APIs, event-driven microservices on Node.js / NestJS, PostgreSQL, RabbitMQ, and Redis. DDD and Hexagonal where it earns its keep.",
  },
  {
    icon: Wand2,
    title: "AI Integration",
    description:
      "LLM features that actually ship: RAG pipelines, streaming classifiers, and tool-using agents with LangChain, LangGraph, and OpenAI.",
  },
]

const focusTags = ["TypeScript", "Next.js", "NestJS", "Postgres", "LangChain"]

export default function IndexPage() {
  return (
    <div className="space-y-16 lg:space-y-20">
      {/* Lede — editorial intro */}
      <section className="space-y-6 stagger">
        <div className="eyebrow">
          <span>01</span>
          <span aria-hidden>—</span>
          <span>About</span>
        </div>

        <h2 className="display text-balance text-4xl leading-[1.05] sm:text-5xl lg:text-[56px] lg:leading-[0.98]">
          Full-stack engineer building{" "}
          <span className="italic text-accent">considered</span> software
          end-to-end.
        </h2>

        <p className="max-w-[58ch] text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
          I&apos;m Loc. I design and ship production web applications in the
          TypeScript ecosystem — React and Next.js on the front, Node.js
          (Express, NestJS) on the back, with Postgres, MongoDB, and
          event-driven services on RabbitMQ and Redis. I&apos;ve independently
          delivered SaaS for international clients, including AI-integrated
          platforms with LangChain and OpenAI.
        </p>

        <p className="max-w-[58ch] text-pretty leading-relaxed text-muted-foreground">
          I&apos;m drawn to clean architecture (DDD, Hexagonal, microservices),
          pragmatic engineering, and code that&apos;s a pleasure to maintain six
          months later.
        </p>

        {/* Focus tags — tight inline meta, not chunky badges */}
        <ul className="flex flex-wrap items-center gap-x-3 gap-y-1.5 pt-2 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
          <li className="text-foreground/60">Stack /</li>
          {focusTags.map((tag, i) => (
            <li
              key={tag}
              className="flex items-center gap-3"
            >
              <span>{tag}</span>
              {i < focusTags.length - 1 && (
                <span aria-hidden className="text-foreground/25">·</span>
              )}
            </li>
          ))}
        </ul>
      </section>

      <div className="hairline" />

      {/* Services / what I do */}
      <section className="space-y-8">
        <div className="flex items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="eyebrow">
              <span>02</span>
              <span aria-hidden>—</span>
              <span>What I do</span>
            </div>
            <h3 className="display text-3xl leading-tight sm:text-4xl">
              Three sides of the same craft.
            </h3>
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hairline/70 bg-hairline/60 md:grid-cols-3">
          {services.map((service, i) => (
            <li
              key={service.title}
              className="group relative bg-surface p-6 transition-colors duration-300 hover:bg-elevated/60 md:p-7"
            >
              {/* Number marker in the corner */}
              <span className="absolute right-5 top-5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70">
                0{i + 1}
              </span>

              <span
                aria-hidden
                className="mb-6 inline-flex size-10 items-center justify-center rounded-lg bg-accent-soft text-accent transition-transform duration-300 group-hover:-translate-y-0.5"
              >
                <service.icon className="size-5" strokeWidth={1.6} />
              </span>

              <h4 className="font-heading text-xl font-medium tracking-tight">
                {service.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <div className="hairline" />

      {/* Direct CTA — pulls visitors deeper without a giant banner */}
      <section className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <div className="eyebrow">
            <span>03</span>
            <span aria-hidden>—</span>
            <span>Next</span>
          </div>
          <h3 className="display text-2xl leading-tight sm:text-3xl">
            Have a project in mind?
          </h3>
          <p className="text-muted-foreground">
            I&apos;m available for new work. Let&apos;s talk specifics.
          </p>
        </div>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 self-start rounded-full border border-foreground/20 bg-foreground px-5 py-2.5 text-sm font-medium tracking-tight text-background shadow-soft transition-all duration-200 hover:gap-3 hover:bg-foreground/90 sm:self-auto"
        >
          Get in touch
          <ArrowUpRight
            className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            strokeWidth={2}
          />
        </Link>
      </section>
    </div>
  )
}
