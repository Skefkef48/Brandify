import { forwardRef } from 'react'
import { IconMessageChatbotFilled, IconMessageFilled, IconPaletteFilled} from '@tabler/icons-react';

export const Services = forwardRef<HTMLElement>((props, ref) => {
  const services = [
    {
      title: "Designs & Interfaces",
      description: "From concept to reality, we craft high quality designs and interfaces that engage users and elevate brands. Our systematic approach to design helps your digital products stand out.",
      icon: <IconPaletteFilled className="h-6 w-6" />,
    },
    {
      title: "Branding",
      description: "From story to symbol, we bring brands to life through strategic positioning and visual storytelling. Our holistic approach ensures your brand story resonates with your target market.",
      icon: <IconMessageFilled className="h-6 w-6" />,
    },
    {
      title: "Dedicated Support",
      description: "From concept to completion, we're your dedicated partner in success. Our experienced team provides ongoing support and expert guidance that goes beyond the final delivery.",
      icon: <IconMessageChatbotFilled className="h-6 w-6" />,
    },
  ]

  return (
    <section ref={ref} className="py-24" style={{ background: '#121212' }}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
          <span style={{
                background: 'linear-gradient(100deg, #EDEDEE 44.87%, #BCA4FF 74.67%)',
                backgroundClip: 'text',
                fontFamily: 'Roboto',
                fontSize: '40px',
                fontStyle: 'normal',
                fontWeight: 500,
                
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>What We Offer</span>
          </h2>
          <p className="text-white/70">
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                border: '1px solid #2B2B2B',
                background: 'linear-gradient(122deg, rgba(28, 28, 28, 0.50) 0%, #050505 96.81%)',
                mixBlendMode: 'plus-lighter',
              }}
              className="rounded-xl p-8 text-white space-y-4"
            >
              <div className="text-black mb-6 bg-white rounded-lg p-4 w-fit rounded-xl">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

Services.displayName = 'Services'

