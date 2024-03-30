"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"

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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import ProjectModel from "@/components/shared/ProjectModel"

const ProjectCard = ({ projectData }: any) => {
  const { title, image, summary, overview, technologies, github, website } =
    projectData
  return (
    <Card className="col-span-1 ">
      <Image
        className="rounded-lg object-cover"
        src={image}
        width={500}
        height={200}
        alt={title}
      />
      <CardHeader className="py-3">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{summary}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Read More</Button>
          </DialogTrigger>
          <DialogContent className=" h-[80vh] max-w-[900px] overflow-scroll">
            <ProjectModel
              title={title}
              image={image}
              overviews={overview}
              technologies={technologies}
              github={github}
              website={website}
            />
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  )
}

const Project = () => {
  const [filter, setFilter] = useState("All")

  const projectsData = [
    {
      title: "MLOps Marathon 2023",
      image:
        "https://res.cloudinary.com/dpkkgg1hf/image/upload/v1692502392/Portfolio/mlops_wtqosq.png",
      summary:
        "Create the MLOps Marathon website for the inaugural MLOps Marathon 2023 competition in Vietnam.",
      overview: [
        "In this project, I participated in building the website for the MLOps Marathon 2023 competition, the first MLOps (Machine Learning Operations) competition in Vietnam.",
        "The main goal of the project was to create an efficient website optimized for fast loading speed and responsive across various mobile devices and platforms.",
        "The project was successfully completed with optimized loading speed and a responsive interface, ensuring that the MLOps Marathon 2023 website delivers a great userexperience and serves the competition effectively.",
      ],
      technologies: ["NextJs", "Vercel", "CSS modules (SCSS)"],
      github: null,
      website: "https://mlops.vn/marathon",
    },
    {
      title: "Shopee clone",
      image:
        "https://res.cloudinary.com/dpkkgg1hf/image/upload/v1692627622/Portfolio/shopee_eu6okt.png",
      summary:
        "This project involves creating a user-interface clone of the Shopee e-commerce platform.",
      overview: [
        "This project involves creating a user-interface clone of the Shopee e-commerce platform. The goal is to replicate the user experience and design elements of the Shopee website. This includes developing similar features and functionalities to provide users with a familiar and intuitive shopping interface. The project aims to offer a seamless shopping experience akin to Shopee, enhancing user engagement and interaction.",
      ],
      technologies: [
        "React Js",
        "Tailwind CSS",
        "TypeScript",
        "Redux",
        "React Hook Form",
        "React Query",
        "Yup",
      ],
      github: "https://github.com/jCool10/Shopee-Clone",
      website: "https://jcool-shopee.netlify.app/",
    },
    // {
    //   title: "The Pioneer Website",
    //   image:
    //     "https://res.cloudinary.com/dpkkgg1hf/image/upload/v1692627296/Portfolio/pioneerclub_kprxiy.png",
    //   summary:
    //     "This project involves creating a user-interface clone of the Shopee e-commerce platform.",
    //   overview: [
    //     "This project involves creating a user-interface clone of the Shopee e-commerce platform. The goal is to replicate the user experience and design elements of the Shopee website. This includes developing similar features and functionalities to provide users with a familiar and intuitive shopping interface. The project aims to offer a seamless shopping experience akin to Shopee, enhancing user engagement and interaction.",
    //   ],
    //   technologies: [""],
    // },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="relative text-4xl font-bold after:absolute after:bottom-3 after:ml-[5px] after:inline-block after:h-1 after:w-1/4 after:bg-primary after:content-['']">
          Project
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="mb-4 flex flex-row flex-wrap items-center justify-start gap-4">
          {["All", "Front-end", "Back-end", "Full stack"].map((item) => (
            <Button
              key={item}
              value={item}
              variant={filter === item ? "default" : "secondary"}
              className="rounded-lg px-4 py-2"
              onClick={(e) => setFilter(item)}
            >
              {item}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projectsData.map((project, index) => (
            <ProjectCard projectData={project} key={index} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default Project
