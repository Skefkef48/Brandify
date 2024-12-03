"use client"

import { Button } from "@/components/ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { forwardRef } from 'react'

export const Contact = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="py-10 bg-[#121212]">
      <div className="container">
        <div className="max-w-2xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
            <span
              style={{
                background: 'linear-gradient(100deg, #EDEDEE 44.87%, #BCA4FF 74.67%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Would you like to learn more about our Company?
            </span>
            </h2>
            <p className="text-[#D1DAEA]">Let's talk</p>
          </div>
          <form className="space-y-6">
            <Input
              placeholder="Name"
              style={{
                border: '1px solid #2B2B2B',
                background: 'linear-gradient(122deg, rgba(28, 28, 28, 0.50) 0%, #050505 96.81%)',
                mixBlendMode: 'plus-lighter',
              }}
              className="text-white placeholder:text-white/50 rounded"
            />
            <Input
              type="email"
              placeholder="Email"
              style={{
                border: '1px solid #2B2B2B',
                background: 'linear-gradient(122deg, rgba(28, 28, 28, 0.50) 0%, #050505 96.81%)',
                mixBlendMode: 'plus-lighter',
              }}
              className="text-white placeholder:text-white/50 rounded"
            />
            <Textarea
              placeholder="Your Message"
              style={{
                border: '1px solid #2B2B2B',
                background: 'linear-gradient(122deg, rgba(28, 28, 28, 0.50) 0%, #050505 96.81%)',
                mixBlendMode: 'plus-lighter',
              }}
              className="text-white placeholder:text-white/50 min-h-[150px] rounded"
            />
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
})

Contact.displayName = 'Contact'

