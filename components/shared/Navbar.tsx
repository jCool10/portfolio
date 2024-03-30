"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Contact, Home, Layers, User } from "lucide-react"

import { Button } from "../ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

const Navbar = () => {
  const navigationLinks = [
    { href: "/", label: "Home", icon: <Home /> },
    {
      href: "/resume",
      label: "Resume",
      icon: <User />,
    },
    {
      href: "/project",
      label: "Project",
      icon: <Layers />,
    },
    {
      href: "/contact",
      label: "Contact",
      icon: <Contact />,
    },
  ]

  const path = usePathname()

  return (
    <div className="fixed bottom-0 left-0 z-30  w-full lg:absolute lg:right-0 lg:top-0 lg:mb-4 lg:flex lg:h-20 lg:justify-end">
      <Card className="flex justify-center gap-10 px-8 py-2 ">
        {navigationLinks.map((item, index) => (
          <CardTitle key={index}>
            <Button
              className="flex size-16 h-16 flex-col rounded-2xl p-0"
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
