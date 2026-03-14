import React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  AtSign,
  Circle,
  Download,
  Facebook,
  Github,
  Linkedin,
  Phone,
} from "lucide-react"

import { Button } from "../ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "../ui/card"

const socialLinks = [
  {
    href: "https://www.facebook.com/reddevils.1908",
    icon: Facebook,
    label: "Facebook profile",
  },
  {
    href: "https://www.linkedin.com/in/hoang-ngoc-loc/",
    icon: Linkedin,
    label: "LinkedIn profile",
  },
  {
    href: "https://github.com/jCool10",
    icon: Github,
    label: "GitHub profile",
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
    label: "Phone number",
    value: "0374830117",
    href: "tel:+84374830117",
  },
]

const Sidebar = () => {
  return (
    <div className="relative flex w-full flex-col items-start justify-center gap-6 rounded-2xl bg-card/80 p-4 shadow-lg backdrop-blur-xl border border-border/50 md:p-8 xl:items-center overflow-hidden">
      {/* Decorative accent gradient bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent/50 to-transparent" />

      {/* Avatar + Name + Role */}
      <div className="flex items-center justify-start gap-3 xl:flex-col">
        <Image
          className="rounded-[2rem] ring-2 ring-accent/20 ring-offset-2 ring-offset-background"
          src="/197475999.jpg"
          alt="Hoang Ngoc Loc - Web Developer"
          width={150}
          height={150}
          priority
        />
        <div className="flex flex-col justify-center gap-2 xl:items-center xl:gap-3">
          <div className="text-center text-xl font-bold font-heading leading-9 md:text-3xl">
            Hoang Ngoc Loc
          </div>
          <div className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent md:text-sm">
            Web Development
          </div>

          {/* Availability status */}
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Circle className="size-2 fill-emerald-500 text-emerald-500 animate-pulse" />
            Available for work
          </div>

          {/* Social links */}
          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                className="rounded-lg p-2 transition-all duration-300 hover:scale-110 hover:bg-accent hover:text-accent-foreground cursor-pointer"
                variant="secondary"
                size="icon"
                asChild
              >
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <link.icon className="size-4" />
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="w-full h-px bg-border" />

      {/* Contact info */}
      <Card className="grid w-full grid-cols-1 gap-4 pt-6 lg:grid-cols-2 xl:grid-cols-1">
        {contactInfo.map((info) => (
          <CardContent key={info.label} className="col-span-1 flex gap-2">
            <Button
              className="rounded-lg p-2 cursor-default"
              variant="secondary"
              size="icon"
            >
              <info.icon aria-hidden="true" className="size-4" />
            </Button>
            <div>
              <CardTitle className="text-sm font-semibold text-muted-foreground">
                {info.label}
              </CardTitle>
              <CardDescription className="text-sm font-semibold">
                <Link href={info.href}>{info.value}</Link>
              </CardDescription>
            </div>
          </CardContent>
        ))}
      </Card>

      {/* Download CV */}
      <Button
        className="m-auto gap-2 bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 group cursor-pointer"
        asChild
      >
        <Link
          href="/CV_Hoang Ngoc Loc_Web.pdf"
          download
          className="flex items-center gap-2"
        >
          <Download className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          Download CV
        </Link>
      </Button>
    </div>
  )
}

export default Sidebar
