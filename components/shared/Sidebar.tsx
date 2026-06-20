import React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowUpRight,
  AtSign,
  Download,
  Github,
  Linkedin,
  Phone,
} from "lucide-react"

import { cn } from "@/lib/utils"

import { Button } from "../ui/button"

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/hoang-ngoc-loc/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/jCool10",
    icon: Github,
    label: "GitHub",
  },
]

const contactInfo = [
  {
    icon: AtSign,
    label: "Email",
    value: "hngloc10@gmail.com",
    href: "mailto:hngloc10@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+84 374 830 117",
    href: "tel:+84374830117",
  },
]

const Sidebar = () => {
  return (
    <aside
      className={cn(
        "group/sidebar relative w-full overflow-hidden",
        "rounded-2xl border border-hairline/70 bg-surface/80 backdrop-blur-xl",
        "shadow-soft"
      )}
    >
      {/* Subtle accent corner glow — replaces the heavy gradient bar */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-accent/15 blur-3xl"
      />

      <div className="relative flex flex-col gap-6 p-6 md:p-7">
        {/* Identity block */}
        <div className="flex items-start gap-4 xl:flex-col xl:items-start">
          <div className="relative shrink-0">
            <div
              aria-hidden
              className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent/30 to-transparent blur-sm"
            />
            <Image
              className="relative size-[88px] rounded-2xl object-cover ring-1 ring-hairline xl:size-[140px]"
              src="/197475999.jpg"
              alt="Hoang Ngoc Loc — Full-stack Engineer"
              width={150}
              height={150}
              priority
            />
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-2 xl:gap-3">
            <span className="eyebrow">Full-stack Engineer</span>
            <h1 className="font-heading text-2xl font-medium leading-[1.05] tracking-tight md:text-[28px] xl:text-[32px]">
              Hoang Ngoc
              <span className="italic text-accent"> Loc</span>
            </h1>

            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="relative flex size-1.5">
                <span className="absolute inset-0 animate-breathe rounded-full bg-success" />
                <span className="relative inline-flex size-1.5 rounded-full bg-success" />
              </span>
              <span className="font-medium tracking-tight">
                Available for new work
              </span>
            </div>
          </div>
        </div>

        {/* Hairline */}
        <div className="hairline" />

        {/* Contact rows — replace nested cards with quiet rows */}
        <dl className="flex flex-col gap-3">
          {contactInfo.map((info) => (
            <div key={info.label} className="flex items-center gap-3">
              <span
                aria-hidden
                className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-hairline/80 bg-elevated/60 text-muted-foreground"
              >
                <info.icon className="size-4" strokeWidth={1.6} />
              </span>
              <div className="min-w-0">
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {info.label}
                </dt>
                <dd className="truncate text-sm font-medium">
                  <Link
                    href={info.href}
                    className="transition-colors hover:text-accent"
                  >
                    {info.value}
                  </Link>
                </dd>
              </div>
            </div>
          ))}
        </dl>

        {/* Hairline */}
        <div className="hairline" />

        {/* Social */}
        <div className="flex flex-wrap items-center gap-2">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${link.label} profile`}
              className={cn(
                "group/link inline-flex items-center gap-2 rounded-full border border-hairline/70 bg-elevated/40 px-3 py-1.5",
                "text-xs font-medium text-foreground/80 transition-all duration-200",
                "hover:border-accent/60 hover:bg-accent/8 hover:text-accent"
              )}
            >
              <link.icon className="size-3.5" strokeWidth={1.75} />
              {link.label}
              <ArrowUpRight
                className="size-3 -translate-x-0.5 opacity-0 transition-all duration-200 group-hover/link:translate-x-0 group-hover/link:opacity-100"
                strokeWidth={2}
              />
            </Link>
          ))}
        </div>

        {/* CTA — primary action */}
        <Button
          asChild
          className={cn(
            "h-11 w-full justify-center gap-2 rounded-xl",
            "bg-foreground text-background hover:bg-foreground/90",
            "shadow-soft transition-all duration-200 group/cv"
          )}
        >
          <Link href="/CV - Hoang Ngoc Loc.pdf" download>
            <Download
              className="size-4 transition-transform duration-200 group-hover/cv:translate-y-0.5"
              strokeWidth={2}
            />
            <span className="text-sm font-medium tracking-tight">
              Download CV
            </span>
          </Link>
        </Button>
      </div>
    </aside>
  )
}

export default Sidebar
