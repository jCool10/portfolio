"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  const isDark = resolvedTheme === "dark"
  const next = isDark ? "light" : "dark"

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(next)}
      aria-label={mounted ? `Switch to ${next} mode` : "Toggle theme"}
      className="relative h-9 w-9 overflow-hidden rounded-full border border-hairline/60 bg-surface/50 transition-colors hover:bg-elevated hover:text-accent"
    >
      <Sun
        className={
          "absolute size-[1.05rem] transition-all duration-300 " +
          (mounted && isDark
            ? "-rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100")
        }
        strokeWidth={1.75}
      />
      <Moon
        className={
          "absolute size-[1.05rem] transition-all duration-300 " +
          (mounted && isDark
            ? "rotate-0 scale-100 opacity-100"
            : "rotate-90 scale-0 opacity-0")
        }
        strokeWidth={1.75}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
