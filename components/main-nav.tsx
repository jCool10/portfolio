"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname()

  return (
    <div className="flex items-center gap-8">
      {/* Wordmark — serif initials + sans surname. More distinctive than a logo image. */}
      <Link
        href="/"
        aria-label="Hoang Ngoc Loc — Home"
        className="group flex items-baseline gap-1.5 transition-opacity hover:opacity-80"
      >
        <span className="font-heading text-xl font-medium leading-none tracking-tight">
          Hoang
        </span>
        <span className="font-heading text-xl font-medium italic leading-none tracking-tight text-accent">
          Loc
        </span>
        <span className="ml-1 hidden text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground sm:inline">
          / Portfolio
        </span>
      </Link>

      {items?.length ? (
        <nav className="hidden items-center gap-1 md:flex">
          {items.map((item, index) => {
            if (!item.href) return null
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href)
            return (
              <Link
                key={index}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative px-3 py-1.5 text-sm font-medium transition-colors",
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                  item.disabled && "cursor-not-allowed opacity-60"
                )}
              >
                {item.title}
                {/* Hairline underline on active route */}
                <span
                  className={cn(
                    "absolute inset-x-3 -bottom-[1px] h-px origin-left scale-x-0 bg-accent transition-transform duration-300",
                    active && "scale-x-100"
                  )}
                />
              </Link>
            )
          })}
        </nav>
      ) : null}
    </div>
  )
}
