import React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  AtSign,
  Download,
  Facebook,
  Github,
  Linkedin,
  Phone,
} from "lucide-react"

import { Button } from "../ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import { Separator } from "../ui/separator"

const Sidebar = () => {
  return (
    <div className="relative flex w-full flex-col items-start justify-center gap-8 rounded-2xl bg-white/20 p-4 shadow backdrop-blur-3xl md:p-8 xl:items-center">
      <div className="flex items-center justify-start gap-3 xl:flex-col ">
        <Image
          className="rounded-[2rem]  "
          src="/197475999.jpg"
          alt="avatar"
          width={100}
          height={100}
          sizes="fill"
        />
        <div className="flex flex-col  justify-center gap-2 xl:items-center xl:gap-4">
          <div className="text-center text-xl font-bold leading-9 md:text-3xl">
            Hoang Ngoc Loc
          </div>
          <div className="text-sm font-medium leading-10 opacity-50 md:text-base">
            Web Development
          </div>

          <div className="flex items-center gap-2">
            <Button className="rounded-lg p-2 " variant="secondary">
              <Link
                href="https://www.facebook.com/reddevils.1908"
                target="_blank"
              >
                <Facebook />
              </Link>
            </Button>

            <Button className="rounded-lg p-2" variant="secondary">
              <Link
                href="https://www.linkedin.com/in/hoang-ngoc-loc/"
                target="_blank"
              >
                <Linkedin />
              </Link>
            </Button>
            <Button className="rounded-lg p-2" variant="secondary">
              <Link href="https://github.com/jCool10" target="_blank">
                <Github />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* <div className="h-px w-full bg-neutral-700" /> */}
      {/* <Separator orientation="vertical" /> */}

      <Card className="grid w-full grid-cols-1 gap-4 pt-6 lg:grid-cols-2 xl:grid-cols-1">
        <CardContent className="col-span-1 flex gap-2">
          <Button className="rounded-lg p-2 " variant="secondary">
            <AtSign />
          </Button>

          <div>
            <CardTitle className="text-sm font-semibold opacity-50">
              Email
            </CardTitle>
            <CardDescription className="text-sm font-semibold">
              <Link href="mailto:hngloc10@gmail.com">hngloc10@gmail.com</Link>
            </CardDescription>
          </div>
        </CardContent>

        <CardContent className="col-span-1 flex gap-2">
          <Button className="rounded-lg p-2 " variant="secondary">
            <Phone />
          </Button>

          <div>
            <CardTitle className="text-sm font-semibold opacity-50">
              Phone number
            </CardTitle>
            <CardDescription className="text-sm font-semibold">
              <Link href="tel:+84374830117">0374830117</Link>
            </CardDescription>
          </div>
        </CardContent>
      </Card>

      {/* <div className="h-px w-full bg-neutral-700" /> */}
      <Button className="m-auto" variant="secondary">
        <Link
          href="/CV_Hoang Ngoc Loc_Web.pdf"
          download
          className="flex items-center justify-center gap-3 rounded-full "
        >
          <Download />
          Download CV
        </Link>
      </Button>
    </div>
  )
}

export default Sidebar
