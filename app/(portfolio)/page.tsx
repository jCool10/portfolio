import { Code2, Database, Laptop } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const services = [
  {
    icon: Laptop,
    title: "Frontend Developer",
    description:
      "Skilled in crafting responsive and visually appealing single-page applications (SPAs).",
  },
  {
    icon: Database,
    title: "Backend Developer",
    description:
      "Adept at constructing robust backend infrastructures that efficiently handle data processing, storage, and retrieval.",
  },
]

export default function IndexPage() {
  return (
    <Card className="relative animate-fade-in-up">
      <CardHeader>
        <CardTitle className="relative text-4xl font-bold font-heading after:absolute after:bottom-3 after:ml-[5px] after:inline-block after:h-1 after:w-1/4 after:rounded-full after:bg-accent after:content-['']">
          About me
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Intro */}
        <div className="space-y-3 text-muted-foreground leading-relaxed">
          <p className="text-lg font-medium text-foreground">
            Hello there! Welcome to my corner of the web.
          </p>
          <p>
            I&apos;m thrilled to welcome you to my portfolio. I am a passionate
            individual on a journey towards a career in web development.
            Currently, I am a fourth-year student majoring in Computer
            Engineering at the university. Throughout my academic journey and
            hands-on experiences during my time at university, I have
            accumulated a diverse knowledge of programming, interface design,
            and web application development. I am in a constant pursuit of
            enhancing my skills and staying abreast of emerging trends in the
            industry.
          </p>
          <p>
            Thank you for visiting, and I&apos;m excited to show you my work
            and progress.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-border" />

        {/* What I am doing */}
        <div className="space-y-4">
          <CardTitle className="relative font-heading text-2xl flex items-center gap-2">
            <Code2 className="size-5 text-accent" />
            What I am doing
          </CardTitle>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {services.map((service) => (
              <Card
                key={service.title}
                className="group border-l-2 border-l-accent/30 transition-all duration-300 hover:border-l-accent hover:shadow-lg"
              >
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="rounded-lg bg-accent/10 p-2.5 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                    <service.icon className="size-6" />
                  </div>
                  <div className="space-y-1">
                    <CardTitle className="text-base">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
