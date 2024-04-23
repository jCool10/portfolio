import React from "react"
import Link from "next/link"
import { Calendar } from "lucide-react"

import { cn, formatDate } from "@/lib/utils"

import { buttonVariants } from "../ui/button"
import Tag from "./Tag"

interface Props {
  slug: string
  date: string
  title: string
  description?: string
  tags?: Array<string>
}

export default function PostItem({
  date,
  slug,
  title,
  description,
  tags,
}: Props) {
  return (
    <article className="flex flex-col gap-2 border-b border-border py-3">
      <div>
        <h2 className="text-2xl font-bold">
          <Link href={"/" + slug}>{title}</Link>
        </h2>
      </div>
      <div className="flex gap-2">
        {tags?.map((tag) => (
          <Tag tag={tag} key={tag} />
        ))}
      </div>
      <div className="max-w-none text-muted-foreground">{description}</div>
      <div className="flex items-center justify-between">
        <dl>
          <dt className="sr-only">Published On</dt>
          <dd className="flex items-center gap-1 text-sm font-medium sm:text-base">
            <Calendar className="size-4" />
            <time dateTime={date}>{formatDate(date)}</time>
          </dd>
        </dl>
        <Link
          href={"/" + slug}
          className={cn(buttonVariants({ variant: "link" }), "py-0")}
        >
          Read more →
        </Link>
      </div>
    </article>
  )
}
