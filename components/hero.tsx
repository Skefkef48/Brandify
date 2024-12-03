import Image from "next/image"
import { Button } from "@/components/ui/button"
import { TbArrowNarrowRight } from "react-icons/tb"

interface HeroProps {
  onAboutClick: () => void;
}

export function Hero({ onAboutClick }: HeroProps) {
  return (
    <section className="pt-32 pb-24" style={{ background: '#121212' }}>
      <div className="container flex flex-col md:flex-row items-center justify-between gap-16">
        <div className="flex-1 space-y-6">
          <h1
            style={{
              fontFamily: 'Roboto',
              fontSize: '50px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: 'normal',
              letterSpacing: '3.2px',
            }}
            className="leading-tight"
          >
            <span
              style={{
                background: 'linear-gradient(100deg, #EDEDEE 44.87%, #BCA4FF 74.67%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
            We craft brands that make an impact.
            </span>
          </h1>
          <p className="text-lg text-[#D1DAEA] max-w-[540px]">
            A boutique digital studio where strategic thinking meets creative excellence. We transform ideas into memorable brand experiences.
          </p>
          <Button
            onClick={onAboutClick}
            className="bg-[#00030E] hover:bg-white hover:text-black text-[#BCA4FF] px-6 rounded-[8px] font-semibold"
          >
            About Us <TbArrowNarrowRight className="ml-2" />
          </Button>
        </div>
        <div className="flex-1 flex justify-end">
          <Image
            src="/images/3d-working-at-desk.png"
            alt="Designer working at desk"
            width={340}
            height={419}
            quality={100}
            className="w-[340px] h-[418.642px]"
          />
        </div>
      </div>
    </section>
  )
}

