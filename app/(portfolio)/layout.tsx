import React from "react"

import Navbar from "@/components/shared/Navbar"
import Sidebar from "@/components/shared/Sidebar"

interface Props {
  children: React.ReactNode
}

export default function PortfolioLayout({ children }: Props) {
  return (
    <div className="container mx-auto min-h-[80vh] py-4">
      <section className="grid grid-cols-12 gap-5">
        <div className="col-span-12 lg:col-span-12 xl:col-span-3">
          <Sidebar />
        </div>
        <div className="relative col-span-12 mb-14 lg:col-span-12 xl:col-span-9">
          <Navbar />
          <div>{children}</div>
        </div>
      </section>
    </div>
  )
}
