"use client"

import React from "react"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { ArrowUpRight, Github, Linkedin, Mail, Send } from "lucide-react"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactSchema = z.object({
  fullname: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

const directLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "hngloc10@gmail.com",
    href: "mailto:hngloc10@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/hoang-ngoc-loc",
    href: "https://www.linkedin.com/in/hoang-ngoc-loc/",
    external: true,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@jCool10",
    href: "https://github.com/jCool10",
    external: true,
  },
]

const Contact = () => {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullname: "",
      email: "",
      message: "",
    },
  })

  const [submitted, setSubmitted] = React.useState(false)

  const onSubmit = async (_values: z.infer<typeof contactSchema>) => {
    setSubmitted(true)
    form.reset()
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="space-y-12">
      {/* Header */}
      <header className="space-y-4 stagger">
        <div className="eyebrow">
          <span>00</span>
          <span aria-hidden>—</span>
          <span>Contact</span>
        </div>
        <h2 className="display text-balance text-4xl leading-[1.05] sm:text-5xl lg:text-[56px] lg:leading-[0.98]">
          Let&apos;s build something <span className="italic text-accent">good</span>.
        </h2>
        <p className="max-w-[58ch] text-pretty leading-relaxed text-muted-foreground">
          Got a project, role, or just want to say hi? Send a message — I read
          and reply to every one within a couple of working days.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-12">
        {/* Direct links column */}
        <aside className="space-y-6 lg:col-span-2">
          <div className="eyebrow">Reach me directly</div>
          <ul className="space-y-3">
            {directLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-xl border border-hairline/70 bg-surface/60 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-soft"
                >
                  <span
                    aria-hidden
                    className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent"
                  >
                    <link.icon className="size-4" strokeWidth={1.6} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {link.label}
                    </div>
                    <div className="truncate text-sm font-medium">
                      {link.value}
                    </div>
                  </div>
                  <ArrowUpRight
                    className="size-4 text-muted-foreground transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    strokeWidth={2}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="hairline" />

          <div className="flex items-start gap-3 rounded-xl border border-hairline/70 bg-elevated/40 p-4">
            <span className="relative mt-1 flex size-1.5">
              <span className="absolute inset-0 animate-breathe rounded-full bg-success" />
              <span className="relative inline-flex size-1.5 rounded-full bg-success" />
            </span>
            <div className="space-y-0.5">
              <p className="text-sm font-medium tracking-tight">
                Available for new projects
              </p>
              <p className="text-xs text-muted-foreground">
                Based in Đà Nẵng · Open to remote work
              </p>
            </div>
          </div>
        </aside>

        {/* Form column */}
        <div className="lg:col-span-3">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="fullname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your name"
                          autoComplete="name"
                          className="h-11 rounded-lg border-hairline bg-surface/60 text-base focus-visible:border-accent/60"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="you@company.com"
                          autoComplete="email"
                          className="h-11 rounded-lg border-hairline bg-surface/60 text-base focus-visible:border-accent/60"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="A short brief — what you&rsquo;re building, when you&rsquo;d like to start, anything else useful."
                        rows={6}
                        className="resize-none rounded-lg border-hairline bg-surface/60 text-base leading-relaxed focus-visible:border-accent/60"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <p
                  aria-live="polite"
                  className={
                    "text-sm transition-opacity duration-300 " +
                    (submitted
                      ? "text-success opacity-100"
                      : "opacity-0")
                  }
                >
                  Thanks — I&apos;ll reply within a couple of working days.
                </p>

                <button
                  type="submit"
                  disabled={form.formState.isSubmitting}
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium tracking-tight text-background shadow-soft transition-all duration-200 hover:gap-3 hover:bg-foreground/90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Send message
                  <Send
                    className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
                    strokeWidth={2}
                  />
                </button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Contact
