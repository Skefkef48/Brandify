import { forwardRef } from 'react'

export const AboutUs = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="py-12 text-white" style={{ background: '#121212' }}>
      <div className="container flex flex-col items-center border border-[#716299] border-solid rounded-[16px] p-8 max-w-[640px] justify-center">
        <p
        style={{
          fontFamily: 'Roboto',
          fontSize: '15px',
          fontStyle: 'normal',
          fontWeight: 100,
          lineHeight: 'normal',
          letterSpacing: '1px',
          color: '#FFFFFF',
        }}
         >
          We're a tight-knit creative studio that turns bold ideas into powerful brand experiences. Small by choice, we believe in quality over quantity, bringing focused attention and creative precision to every project. Our approach combines strategic thinking with crafted design to help ambitious brands stand out and make their mark.
        </p>
      </div>
    </section>
  )
})

AboutUs.displayName = 'AboutUs'

