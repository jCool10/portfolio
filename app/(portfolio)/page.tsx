import Link from "next/link"
import { Database, Laptop } from "lucide-react"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function IndexPage() {
  return (
    <Card className="relative">
      <CardHeader>
        <CardTitle className="relative text-4xl font-bold after:absolute after:bottom-3 after:ml-[5px] after:inline-block after:h-1 after:w-1/4 after:bg-primary after:content-['']">
          About me
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p>Hello there!</p>
        <p>
          I&apos;m thrilled to welcome you to my portfolio. I am a passionate
          individual on a journey towards a career in web development.
          Currently, I am a fourth-year student majoring in Computer Engineering
          at the university. Throughout my academic journey and hands-on
          experiences during my time at university, I have accumulated a diverse
          knowledge of programming, interface design, and web application
          development. I am in a constant pursuit of enhancing my skills and
          staying abreast of emerging trends in the industry.
        </p>
        <p>
          Thank you for visiting, and I&apos;m excited to show you my work and
          progress.
        </p>
      </CardContent>

      <CardHeader>
        <CardTitle>What I am doing</CardTitle>
      </CardHeader>

      <CardFooter className="grid grid-cols-1 gap-x-8 gap-y-5 lg:grid-cols-2">
        <Card className="col-span-1 min-h-36">
          <CardHeader className="flex flex-row gap-4">
            <div>
              <Laptop size={40} />
            </div>
            <div>
              <CardTitle>Frontend Developer</CardTitle>
              <CardDescription>
                Skilled in crafting responsive and visually appealing
                single-page applications (SPAs).
              </CardDescription>
            </div>
          </CardHeader>
        </Card>

        <Card className="col-span-1 min-h-36">
          <CardHeader className="flex flex-row gap-4">
            <div>
              <Database size={40} />
            </div>
            <div>
              <CardTitle>Backend Developer</CardTitle>
              <CardDescription>
                Adept at constructing robust backend infrastructures that
                efficiently handle data processing, storage, and retrieval.
              </CardDescription>
            </div>
          </CardHeader>
        </Card>
      </CardFooter>
    </Card>
  )
}
