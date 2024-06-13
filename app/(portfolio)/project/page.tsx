"use client"

import React, { useState } from "react"
import Image from "next/image"

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
        "Project Description: Developed the MLOps Marathon website for the 2023 MLOps Marathon competition, the first competition on Machine Learning Operations (MLOps) in Vietnam",
        "Role and Responsibilities: Designed a mobile-friendly interface to ensure responsiveness across different platforms. Additionally, optimized the website to ensure fast loading speeds and a good user experience.",
      ],
      technologies: ["NextJs", "Vercel", "CSS modules (SCSS)"],
      github: null,
      website: "https://mlops.vn/marathon",
      category: "Front-end",
    },
    {
      title: "Discord clone",
      image:
        "https://res.cloudinary.com/dpkkgg1hf/image/upload/v1713024358/Portfolio/discord-clone_kkuqz4.png",
      summary:
        "This project is an ambitious full-stack endeavor replicating the core functionalities of Discord.",
      overview: [
        "Project Description: Developed an instant messaging application similar to Discord, supporting messaging, audio and video calls, and member management. The project used full-stack technology with real-time messaging functionality, member management, and diverse communication channels.",
        "Role and Responsibilities: Designed and developed key functionalities, including real-time communication and user authentication, as well as the user interface design.",
        "Key features include real-time messaging, voice and video calls, infinite message loading, and comprehensive server customization. ",
      ],
      technologies: [
        "Next.js",
        "Socket.io",
        "Tailwind CSS",
        "React Hook Form",
        "Express",
        "Prisma",
        "Node.js",
        "My SQL",
        "Docker",
      ],
      github: "https://github.com/jCool10/discord-clone",
      website: "https://jcool-discord-clone.vercel.app/",
      category: "Full stack",
    },
    {
      title: "Shopee clone",
      image:
        "https://res.cloudinary.com/dpkkgg1hf/image/upload/v1692627622/Portfolio/shopee_eu6okt.png",
      summary:
        "This project involves creating a user-interface clone of the Shopee e-commerce platform.",
      overview: [
        "Project Description: Developed a clone of the Shopee e-commerce website, focusing on recreating core features like product display, shopping cart management, and product filtering, ...",
        "Role and Responsibilities: Responsible for front-end development with full functionality of the e-commerce website, ensuring features worked correctly and performance was optimized.",
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
      category: "Front-end",
    },
    {
      title: "My Portfolio",
      image:
        "https://res.cloudinary.com/dpkkgg1hf/image/upload/v1714404529/Portfolio_t3qbys.png",
      summary:
        "This project involves creating a user-interface clone of the Shopee e-commerce platform.",
      overview: [
        "Project Description: Developed a personal website with a blog using Next.js, showcasing projects and sharing knowledge through articles.",
        "Role and Responsibilities: Designed and developed the entire website.",
      ],
      technologies: [
        "Next JS",
        "Tailwind CSS",
        "Shadcn UI",
        "Velite",
        "Next Themes",
        "React Hook Form,",
      ],
      github: "https://github.com/jCool10/portfolio",
      website: "https://jcool-portfolio.vercel.app/",
      category: "Front-end",
    },
    {
      title: "E-commerce Backend",
      image:
        "https://res.cloudinary.com/dpkkgg1hf/image/upload/v1714404529/Portfolio_t3qbys.png",
      summary:
        "This project involves creating a user-interface clone of the Shopee e-commerce platform.",
      overview: [
        "Project Description: Developed the backend for an e-commerce application using Node.js and TypeScript. Provided a fully functional API for an e-commerce application. Implemented CI/CD with Docker and GitHub Actions to automate the development, testing, and deployment process, ensuring code consistency and efficiency. Used Swagger for API documentation.",
        "Role and Responsibilities: Programmed and designed the database structure, developed API endpoints, set up and configured CI/CD, and secured customer information.",
      ],
      technologies: [
        "Node JS",
        "Typescript",
        "Docker",
        "Swagger",
        "MongoDB",
        "Express JS",
        "Json Web Token",
      ],
      github: "https://github.com/jCool10/BE-ecommerce-TS-",
      website: null,
      category: "Back-end",
    },
    {
      title: "Scientific Research Project: Chat PDF",
      image:
        "https://res.cloudinary.com/dpkkgg1hf/image/upload/v1714404529/Portfolio_t3qbys.png",
      summary:
        "This project involves creating a user-interface clone of the Shopee e-commerce platform.",
      overview: [
        "Project Description: Developed the ChatPDF website integrating Large Language Models (LLMs) to enhance the interaction and information access process within PDF documents. The system supports extracting, normalizing, and querying information quickly and accurately, using natural language processing techniques and vector databases.",
        "Role and Responsibilities: Developed the Frontend with Next.js and Tailwind CSS, designed user interaction flows, integrated LLMs for natural language processing. Managed Backend development with Node.js, ExpressJS, and implemented data processing and storage solutions using MongoDB, AWS S3,and Pinecone.",
      ],
      technologies: [
        "Next JS",
        "Tailwind CSS",
        "Clerk",
        "Express JS",
        "NodeJS",
        "Langchain",
        "OpenAI",
        "MongoDB",
        "AWS S3",
        "Pinecone",
      ],
      github: "https://github.com/jCool10/ChatPDF",
      website: null,
      category: "Full stack",
    },
    {
      title: "The Pioneer Website",
      image:
        "https://res.cloudinary.com/dpkkgg1hf/image/upload/v1692627296/Portfolio/pioneerclub_kprxiy.png",
      summary:
        "This project involves creating a user-interface clone of the Shopee e-commerce platform.",
      overview: [
        "Project Description: Developed the interface for the `Pioneer Student Research Club`, based on a pre-existing design.",
        "Role and Responsibilities: Served as the project leader, assigning tasks to team members and ensuring project progress. Also responsible for front-end development, supporting and guiding team members, and resolving technical issues.",
      ],
      technologies: [
        "ReactJS",
        "Axios",
        "React Router Dom",
        "CSS module (SCSS)",
        "React Redux",
      ],
      github: null,
      website: "https://pioneerclub.netlify.app/",
      category: "Full - stack",
    },
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
          {projectsData
            .filter((project) => {
              if (filter === "All") return true
              return project.category === filter
            })
            .map((project, index) => (
              <ProjectCard projectData={project} key={index} />
            ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default Project
