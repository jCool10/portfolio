import React from "react"
import Image from "next/image"
import {
  CplusplusIcon,
  Css3Icon,
  DockerIcon,
  ExpressIcon,
  FigmaIcon,
  GithubIcon,
  Html5Icon,
  IllustratorIcon,
  JavascriptIcon,
  MongodbIcon,
  MuiIcon,
  MysqlIcon,
  NextJSIcon,
  NodeJSIcon,
  PhotoshopIcon,
  PostgresqlIcon,
  PostmanIcon,
  PrismaIcon,
  PythonIcon,
  ReactIcon,
  ReactQueryIcon,
  ReduxIcon,
  SassIcon,
  TailwindcssIcon,
  TypescriptIcon,
  UbuntuIcon,
  VSCodeIcon,
} from "@/public/icons"
import { GraduationCap, UserCog } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Timeline,
  TimelineDescription,
  TimelineDot,
  TimelineItem,
  TimelineTime,
  TimelineTitle,
} from "@/components/ui/timeline"
import { Icons } from "@/components/icons"

const Resume = () => {
  const skills = {
    languages: [
      {
        icon: CplusplusIcon,
        title: "C++",
      },
      {
        icon: PythonIcon,
        title: "Python",
      },
      {
        icon: JavascriptIcon,
        title: "JavaScirpt",
      },

      {
        icon: TypescriptIcon,
        title: "TypeScript",
      },
    ],
    frontend: [
      {
        icon: Html5Icon,
        title: "HTML",
      },
      {
        icon: Css3Icon,
        title: "Css",
      },
      {
        icon: ReactIcon,
        title: "React",
      },
      {
        icon: ReduxIcon,
        title: "Redux",
      },
      {
        icon: ReactQueryIcon,
        title: "React Query",
      },
      {
        icon: MuiIcon,
        title: "MaterialUI",
      },
      {
        icon: SassIcon,
        title: "Sass",
      },
      {
        icon: TailwindcssIcon,
        title: "Tailwind CSS",
      },
    ],
    backend: [
      {
        icon: NodeJSIcon,
        title: "Node JS",
      },
      {
        icon: MongodbIcon,
        title: "Mongo DB",
      },
      {
        icon: MysqlIcon,
        title: "My SQL",
      },
      {
        icon: PostgresqlIcon,
        title: "Postgre SQL",
      },
    ],
    tools: [
      {
        icon: PostmanIcon,
        title: "Postman",
      },
      {
        icon: VSCodeIcon,
        title: "VS Code",
      },
      {
        icon: PhotoshopIcon,
        title: "Photoshop",
      },
      {
        icon: IllustratorIcon,
        title: "Illustrator",
      },
      {
        icon: FigmaIcon,
        title: "Figma",
      },
      {
        icon: DockerIcon,
        title: "Docker",
      },
      {
        icon: UbuntuIcon,
        title: "Ubuntu",
      },
    ],
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="relative text-4xl font-bold after:absolute after:bottom-3 after:ml-[5px] after:inline-block after:h-1 after:w-1/4 after:bg-primary after:content-['']">
          Resume
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <CardTitle className="flex items-center gap-3">
          <Button
            className=" cursor-default rounded-lg p-0"
            variant="secondary"
            size="icon"
          >
            <UserCog className="size-8" />
          </Button>
          Skills
        </CardTitle>

        <Card>
          <CardHeader>
            <CardTitle>Languages</CardTitle>
          </CardHeader>
          <CardContent className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {skills.languages.map((skill, index) => (
              <div
                key={index}
                className="col-span-1 inline-flex flex-col items-center justify-end"
              >
                <Image src={skill.icon} height={70} width={70} alt="" />
                <CardDescription className="mt-2 text-xl font-semibold">
                  {skill.title}
                </CardDescription>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Front-end</CardTitle>
          </CardHeader>
          <CardContent className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {skills.frontend.map((skill, index) => (
              <div
                key={index}
                className="col-span-1 inline-flex flex-col items-center justify-end"
              >
                <Image src={skill.icon} height={70} width={70} alt="" />
                <CardDescription className="mt-2 text-xl font-semibold">
                  {skill.title}
                </CardDescription>
              </div>
            ))}
            <div className="col-span-1 inline-flex flex-col items-center justify-end">
              <Icons.logo className="size-[70px]" />
              <CardDescription className="mt-2 text-xl font-semibold">
                Next JS
              </CardDescription>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Back-end</CardTitle>
          </CardHeader>
          <CardContent className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {skills.backend.map((skill, index) => (
              <div
                key={index}
                className="col-span-1 inline-flex flex-col items-center justify-end"
              >
                <Image src={skill.icon} height={70} width={70} alt="" />
                <CardDescription className="mt-2 text-xl font-semibold">
                  {skill.title}
                </CardDescription>
              </div>
            ))}

            <div className="col-span-1 inline-flex flex-col items-center justify-end">
              <Icons.express className="size-[70px]" />
              <CardDescription className="mt-2 text-xl font-semibold">
                Express JS
              </CardDescription>
            </div>

            <div className="col-span-1 inline-flex flex-col items-center justify-end">
              <Icons.prisma className="size-[70px]" />
              <CardDescription className="mt-2 text-xl font-semibold">
                Prisma
              </CardDescription>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tools</CardTitle>
          </CardHeader>
          <CardContent className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            <div className="col-span-1 inline-flex flex-col items-center justify-end">
              <Icons.gitHub className="size-[70px]" />
              <CardDescription className="mt-2 text-xl font-semibold">
                Github
              </CardDescription>
            </div>
            {skills.tools.map((skill, index) => (
              <div
                key={index}
                className="col-span-1 inline-flex flex-col items-center justify-end"
              >
                <Image src={skill.icon} height={70} width={70} alt="" />
                <CardDescription className="mt-2 text-xl font-semibold">
                  {skill.title}
                </CardDescription>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="col-span-1">
            <CardTitle className="flex items-center gap-3">
              <Button
                className=" cursor-default rounded-lg p-0"
                variant="secondary"
                size="icon"
              >
                <GraduationCap className="size-8" />
              </Button>
              Education
            </CardTitle>
            <Timeline className="ml-4 pt-4">
              <TimelineItem>
                <TimelineDot />
                <TimelineTime>10/2020 - now</TimelineTime>
                <TimelineTitle>Computer Engineer</TimelineTitle>
                <TimelineDescription>
                  Da Nang University of Science and Technology
                </TimelineDescription>
              </TimelineItem>
            </Timeline>
          </div>

          <div className="col-span-1">
            <CardTitle className="flex items-center gap-3">
              <Button
                className=" cursor-default rounded-lg p-0"
                variant="secondary"
                size="icon"
              >
                <GraduationCap className="size-8" />
              </Button>
              Activities
            </CardTitle>
            <Timeline className="ml-4 pt-4">
              <TimelineItem>
                <TimelineDot />
                <TimelineTime>3/2023 - 9/2023</TimelineTime>
                <TimelineTitle>Front-end Developer</TimelineTitle>
                <TimelineDescription>MLOpsVN</TimelineDescription>
              </TimelineItem>

              <TimelineItem>
                <TimelineDot />
                <TimelineTime>10/2022 - now</TimelineTime>
                <TimelineTitle>Leader of Web/App and Algorithm</TimelineTitle>
                <TimelineDescription>Pioneer Club</TimelineDescription>
              </TimelineItem>
            </Timeline>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default Resume
