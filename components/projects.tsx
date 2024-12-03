import Image from "next/image"
import { Globe } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { forwardRef } from 'react'

const projects = [
  {
    title: "Taskify - A Project Management App",
    description: "This app allows users to view all their projects and tasks assigned to them efficiently. Users can also collaborate to complete the projects as a team.",
    image: "/images/taskify.png",
    layout: "horizontal",
    span: "col-span-2"
  },
  {
    title: "Quiet Camps",
    description: "Quiet Camp is an app designed to help remote teams collaborate more effectively in a stress-free, inclusive environment.",
    image: "/images/quiet.png",
    layout: "right",
    span: "col-span-1"
  },
  {
    title: "Stormy Logo",
    image: "/images/stormy.png",
    layout: "logo",
    span: "col-span-1"
  },
  {
    title: "Fintech Project - A Wallet App",
    description: "This app enables users to efficiently manage all their accounts and transactions in one place. Users can track their expenses, set budgets, and collaborate with shared wallets for joint financial goals as a team.",
    image: "/images/fintech.png",
    layout: "horizontal",
    span: "col-span-2"
  }
]

export const Projects = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="py-24" style={{ background: '#121212' }}>
      <div className="container space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
        <span
              style={{
                background: 'linear-gradient(100deg, #EDEDEE 44.87%, #BCA4FF 74.67%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Browse through some of our projects
            </span>
          </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              style={{
                border: '1px solid #2B2B2B',
                background: 'linear-gradient(122deg, rgba(28, 28, 28, 0.50) 0%, #050505 96.81%)',
                mixBlendMode: 'plus-lighter',
              }}
              className={`border border-zinc-800 rounded-xl overflow-hidden ${project.span}`}
            >
              {project.layout === "logo" ? (
                <div className="relative h-[300px]">
                  <Image
                    src={project.image}
                    quality={100}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className={`flex ${
                  project.layout === "horizontal" 
                    ? "flex-row" 
                    : project.layout === "right"
                    ? "flex-row-reverse"
                    : "flex-col"
                } h-full`}>
                  <div className={`relative ${
                    project.layout === "horizontal" || project.layout === "right"
                      ? "w-1/2"
                      : "w-full h-[300px]"
                  }`}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      quality={100}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className={`flex flex-col justify-between p-6 ${
                    project.layout === "horizontal" || project.layout === "right"
                      ? "w-1/2"
                      : "w-full"
                  }`}>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                      {project.description && (
                        <p className="text-[#D1DAEA] text-sm leading-relaxed">
                          {project.description}
                        </p>
                      )}
                    </div>
                    {project.description && (
                      <div className="flex gap-2 mt-4">
                        <Button
                          className="text-black bg-white hover:bg-[#BCA4FF] rounded-[8px]"
                        >
                          Read More
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

Projects.displayName = 'Projects'

