"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Contact, Home, Layers, User } from "lucide-react"

import { cn } from "@/lib/utils"

const navigationLinks = [
  { href: "/", label: "About", icon: Home },
  { href: "/resume", label: "Resume", icon: User },
  { href: "/project", label: "Work", icon: Layers },
  { href: "/contact", label: "Contact", icon: Contact },
]

const Navbar = () => {
  const path = usePathname()

  return (
    <>
      {/* Desktop: pill row aligned right of content */}
      <nav
        aria-label="Section"
        className="mb-6 hidden justify-end lg:flex"
      >
        <ul
          className={cn(
            "inline-flex items-center gap-1 rounded-full border border-hairline/70 bg-surface/70 p-1",
            "shadow-soft backdrop-blur-xl"
          )}
        >
          {navigationLinks.map((item) => {
            const Icon = item.icon
            const active = path === item.href
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5",
                    "text-sm font-medium tracking-tight transition-colors duration-200",
                    active
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:bg-elevated hover:text-foreground"
                  )}
                >
                  <Icon className="size-3.5" strokeWidth={1.75} />
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Mobile: bottom dock — single primary surface, safe-area aware */}
      <nav
        aria-label="Section"
        className="fixed inset-x-0 bottom-0 z-30 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden"
      >
        <ul
          className={cn(
            "mx-auto flex max-w-md items-center justify-between gap-1 rounded-full border border-hairline/70 p-1.5",
            "bg-surface/85 shadow-soft backdrop-blur-xl"
          )}
        >
          {navigationLinks.map((item) => {
            const Icon = item.icon
            const active = path === item.href
            return (
              <li key={item.href} className="flex-1">
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  aria-label={item.label}
                  className={cn(
                    "relative flex h-11 flex-col items-center justify-center gap-0.5 rounded-full",
                    "text-[10px] font-medium tracking-tight transition-colors duration-200",
                    active
                      ? "bg-foreground text-background"
                      : "text-muted-foreground"
                  )}
                >
                  <Icon className="size-[18px]" strokeWidth={1.75} />
                  <span>{item.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}

export default Navbar
