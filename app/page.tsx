import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import bg from "public/imgs/Project/Metaverse-Build/MusicVenue.jpg"
import Image from "next/image"

export default function IndexPage() {
  return (
    <section className="relative items-center" >
      <Image src={bg} className=" absolute top-0 -z-10 h-screen w-screen blur " alt="bg" style={{
        '-webkit-mask-image':'radial-gradient(circle farthest-side at top left,transparent 30%,black 150%)',
        objectFit:"cover"
      }}/>
      <div className="container grid gap-6  pb-8 pt-32">

      <div className="flex max-w-[980px] flex-col items-start gap-2 ">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Beautifully designed components <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ size: "lg" })}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          GitHub
        </Link>
      </div>
      </div>
    </section>
  )
}
