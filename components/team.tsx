import Image from "next/image"
import { useState, useEffect, forwardRef } from "react"

export const Team = forwardRef<HTMLElement>((props, ref) => {
  const [currentMember, setCurrentMember] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState('next')
  
  const teamMembers = [
    {
      name: "Reda Bezzaoui",
      role: "Designer",
      image: "/images/ANAAA.jpg",
      description: "Bouzide Marzouki leads our design team with her innovative vision and deep understanding of user-centered design principles. Her expertise in digital product design and brand identity has helped numerous clients achieve their business objectives through compelling visual narratives.",
    },
    {
      name: "Bouzide Marzouki",
      role: "Head Support",
      image: "/images/BOUZIDE.jpg",
      description: "Bouzide brings technical excellence and creative problem-solving to every project. With his extensive background in digital technologies and user experience design, he ensures our solutions are not just beautiful but also technically robust and future-proof.",
    },
    {
      name: "Youssef El Ansari",
      role: "Developer",
      image: "/images/skrecized.jpeg",
      description: "Youssef brings technical excellence and creative problem-solving to every project. With his extensive background in digital technologies and user experience design, he ensures our solutions are not just beautiful but also technically robust and future-proof.",
    },
  ]

  const handleMemberChange = (index: number) => {
    if (isAnimating) return
    setDirection(index > currentMember ? 'next' : 'prev')
    setIsAnimating(true)
    setCurrentMember(index)
  }

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 500)
      return () => clearTimeout(timer)
    }
  }, [isAnimating])

  const member = teamMembers[currentMember]

  return (
    <section ref={ref} className="py-12" style={{ background: '#121212' }}>
      <div className="container max-w-[800px] mx-auto space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold">
          <span
              style={{
                background: 'linear-gradient(100deg, #EDEDEE 44.87%, #BCA4FF 74.67%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Get To Know Our Team!
            </span>
          </h2>
          <p className="text-white">Meet the Creative Minds</p>
          <p className="text-[#D1DAEA] text-sm max-w-[720px]">
            A small but mighty team of digital craftspeople who turn bold ideas into reality. We're designers, thinkers, and problem-solvers united by our passion for exceptional work.
          </p>
        </div>

        <div 
          className="rounded-xl overflow-hidden"
          style={{
            border: '1px solid #2B2B2B',
            background: 'linear-gradient(122deg, rgba(28, 28, 28, 0.50) 0%, #050505 96.81%)',
            mixBlendMode: 'plus-lighter',
          }}
        >
          <div className="p-12 relative overflow-hidden">
            <div 
              className={`transform transition-all duration-500 ease-in-out ${
                isAnimating 
                  ? direction === 'next'
                    ? '-translate-x-full opacity-0'
                    : 'translate-x-full opacity-0'
                  : 'translate-x-0 opacity-100'
              }`}
            >
              <div className="flex items-start gap-8">
                <div className="w-[180px] h-full rounded-full  flex items-center justify-center overflow-hidden flex-shrink-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    quality={100}
                    className={`w-full h-full object-contain transform transition-transform duration-500 ${
                      isAnimating ? 'scale-95' : 'scale-100'
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#BCA4FF] text-sm mb-4">
                    {member.role}
                  </p>
                  <p className="text-[#D1DAEA] text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-2 p-4 border-t border-[#2B2B2B]">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => handleMemberChange(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentMember === index ? 'w-8 bg-[#BCA4FF]' : 'w-2 bg-[#2B2B2B]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})

Team.displayName = 'Team'

