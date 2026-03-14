"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Contact, Home, Layers, User } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { Card, CardTitle } from "../ui/card"

const Navbar = () => {
  const navigationLinks = [
    { href: "/", label: "Home", icon: <Home /> },
    { href: "/resume", label: "Resume", icon: <User /> },
    { href: "/project", label: "Projects", icon: <Layers /> },
    { href: "/contact", label: "Contact", icon: <Contact /> },
  ]

  const path = usePathname()

  return (
    <div className="fixed bottom-0 left-0 z-30 w-full lg:static lg:mb-4 lg:flex lg:justify-end">
      <Card className="flex justify-center gap-3 px-8 md:gap-6">
        {navigationLinks.map((item, index) => (
          <CardTitle key={index}>
            <Button
              className={cn(
                "flex h-14 w-14 flex-col rounded-xl p-0 text-xs transition-all duration-300 cursor-pointer",
                path === item.href && "ring-2 ring-accent ring-offset-2 ring-offset-background shadow-md shadow-accent/20"
              )}
              variant={path === item.href ? "default" : "secondary"}
              asChild
            >
              <Link href={item.href}>
                {item.icon}
                {item.label}
              </Link>
            </Button>
          </CardTitle>
        ))}
      </Card>
    </div>
  )
}

export default Navbar
