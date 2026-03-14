import { type StaticImageData } from "next/image"

import {
  CplusplusIcon,
  Css3Icon,
  DockerIcon,
  FigmaIcon,
  Html5Icon,
  IllustratorIcon,
  JavascriptIcon,
  MongodbIcon,
  MuiIcon,
  MysqlIcon,
  NodeJSIcon,
  PhotoshopIcon,
  PostgresqlIcon,
  PostmanIcon,
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

export type SkillItem = {
  /** Static image import for standard icons */
  src?: StaticImageData
  /** Key in the Icons component for custom SVG icons */
  iconKey?: string
  title: string
}

export type SkillCategory = {
  label: string
  items: SkillItem[]
}

export const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    items: [
      { src: CplusplusIcon, title: "C++" },
      { src: PythonIcon, title: "Python" },
      { src: JavascriptIcon, title: "JavaScript" },
      { src: TypescriptIcon, title: "TypeScript" },
    ],
  },
  {
    label: "Front-end",
    items: [
      { src: Html5Icon, title: "HTML" },
      { src: Css3Icon, title: "CSS" },
      { src: ReactIcon, title: "React" },
      { src: ReduxIcon, title: "Redux" },
      { src: ReactQueryIcon, title: "React Query" },
      { src: MuiIcon, title: "Material UI" },
      { src: SassIcon, title: "Sass" },
      { src: TailwindcssIcon, title: "Tailwind CSS" },
      { iconKey: "logo", title: "Next JS" },
      { iconKey: "shadcnui", title: "Shadcn UI" },
    ],
  },
  {
    label: "Back-end",
    items: [
      { src: NodeJSIcon, title: "Node JS" },
      { src: MongodbIcon, title: "MongoDB" },
      { src: MysqlIcon, title: "MySQL" },
      { src: PostgresqlIcon, title: "PostgreSQL" },
      { iconKey: "express", title: "Express JS" },
      { iconKey: "socketio", title: "Socket IO" },
      { iconKey: "prisma", title: "Prisma" },
    ],
  },
  {
    label: "Tools",
    items: [
      { iconKey: "gitHub", title: "GitHub" },
      { src: PostmanIcon, title: "Postman" },
      { src: VSCodeIcon, title: "VS Code" },
      { src: PhotoshopIcon, title: "Photoshop" },
      { src: IllustratorIcon, title: "Illustrator" },
      { src: FigmaIcon, title: "Figma" },
      { src: DockerIcon, title: "Docker" },
      { src: UbuntuIcon, title: "Ubuntu" },
    ],
  },
]
