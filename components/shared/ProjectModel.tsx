import React from "react"
import Image from "next/image"
import Link from "next/link"
import { AtSign, Github, Globe, Phone } from "lucide-react"

import { Icons } from "../icons"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card"

interface Props {
  title: string
  image: string
  overviews: Array<string>
  technologies: Array<string>
  github?: string
  website?: string
}

const ProjectModel = ({
  image,
  overviews,
  title,
  technologies,
  github,
  website,
}: Props) => {
  return (
    <>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          <Image
            alt="Image"
            src={image}
            width={700}
            height={475}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <div className="grid w-full grid-cols-1 md:grid-cols-2">
          {github && (
            <CardContent className="col-span-1 flex gap-2 pl-0">
              <Button
                className="rounded-lg p-2"
                variant="secondary"
                size="icon"
              >
                <Github className="size-8" />
              </Button>

              <div>
                <CardTitle className="text-base font-semibold opacity-50">
                  Github
                </CardTitle>
                <CardDescription className="text-sm font-semibold">
                  <Link href={github} target="_blank">
                    {github}
                  </Link>
                </CardDescription>
              </div>
            </CardContent>
          )}

          {website && (
            <CardContent className="col-span-1 flex gap-2 pl-0">
              <Button className="rounded-lg p-2 " variant="secondary">
                <Globe />
              </Button>

              <div>
                <CardTitle className="text-sm font-semibold opacity-50">
                  Website
                </CardTitle>
                <CardDescription className="text-sm font-semibold">
                  <Link href={website} target="_blank">
                    {website}
                  </Link>
                </CardDescription>
              </div>
            </CardContent>
          )}
        </div>
        <CardTitle>Overview</CardTitle>
        {overviews.map((item, index) => (
          <p key={index}>{item}</p>
        ))}

        <CardTitle>Stack/Technologies</CardTitle>
        <div className="">
          {technologies.map((item, index) => (
            <Badge key={index} className="mb-2 mr-2 text-base">
              {item}
            </Badge>
          ))}
        </div>
      </CardContent>
    </>
  )
}

export default ProjectModel
