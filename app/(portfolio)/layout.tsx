import React from "react"

import Navbar from "@/components/shared/Navbar"
import Sidebar from "@/components/shared/Sidebar"

interface Props {
  children: React.ReactNode
}

export default function PortfolioLayout({ children }: Props) {
  return (
    <div className="container py-8 lg:py-12">
      <div className="grid grid-cols-12 gap-6 lg:gap-10">
        <div className="col-span-12 xl:col-span-4 xl:sticky xl:top-24 xl:self-start">
          <Sidebar />
        </div>
        <div className="relative col-span-12 pb-28 lg:pb-0 xl:col-span-8">
          <Navbar />
          <div className="animate-rise">{children}</div>
        </div>
      </div>
    </div>
  )
}
