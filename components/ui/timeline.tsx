import React from "react"

import { cn } from "@/lib/utils"

const Timeline = React.forwardRef<
  HTMLOListElement,
  React.HTMLAttributes<HTMLOListElement>
>(({ className, ...props }, ref) => {
  return (
    <ol
      ref={ref}
      className={cn("relative border-s border-hairline/80", className)}
      {...props}
    />
  )
})
Timeline.displayName = "Timeline"

const TimelineItem = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => {
  return (
    <li
      ref={ref}
      className={cn("relative mb-7 ms-5 last:mb-0", className)}
      {...props}
    />
  )
})

TimelineItem.displayName = "TimelineItem"

const TimelineDot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "absolute -start-[7px] top-1.5 size-2.5 rounded-full border-2 border-background bg-accent",
        className
      )}
      {...props}
    />
  )
})

TimelineDot.displayName = "TimelineDot"

const TimelineTime = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "mb-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground",
        className
      )}
      {...props}
    />
  )
})

TimelineTime.displayName = "TimelineTime"

const TimelineTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "font-heading text-base font-medium tracking-tight text-foreground",
        className
      )}
      {...props}
    />
  )
})

TimelineTitle.displayName = "TimelineTitle"

const TimelineDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("mt-0.5 text-sm text-muted-foreground", className)}
      {...props}
    />
  )
})

TimelineDescription.displayName = "TimelineDescription"

export {
  Timeline,
  TimelineItem,
  TimelineDot,
  TimelineTitle,
  TimelineTime,
  TimelineDescription,
}
