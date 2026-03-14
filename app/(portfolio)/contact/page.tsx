"use client"

import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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

const Contact = () => {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullname: "",
      email: "",
      message: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof contactSchema>) => {
    alert("Thank you for your message! I will get back to you soon.")
    form.reset()
  }

  return (
    <Card className="animate-fade-in-up">
      <CardHeader>
        <CardTitle className="relative text-4xl font-bold font-heading after:absolute after:bottom-3 after:ml-[5px] after:inline-block after:h-1 after:w-1/4 after:rounded-full after:bg-accent after:content-['']">
          Contact
        </CardTitle>
        <p className="mt-2 text-muted-foreground">
          Have a question or want to work together? Drop me a message below.
        </p>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full name</FormLabel>
                  <FormControl>
                    <Input placeholder="Full name" {...field} />
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
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Email Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Message"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 cursor-pointer px-8"
              type="submit"
            >
              Send Message
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default Contact
