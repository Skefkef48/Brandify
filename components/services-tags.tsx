export function ServicesTags() {
  const services = [
    "Mobile Apps",
    "Web design",
    "Branding",
    "Logo design",
    "Illustrations"
  ]

  return (
    <section className="pb-18" style={{ background: '#121212' }}>
      <div className="container">
        <div className="text-center space-y-12">
          <h3 className="text-2xl font-bold">
            <span className="bg-clip-text text-transparent bg-[#BCA4FF]">
              And More!
            </span>
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="px-14 py-4 rounded-xl text-white justify-center"
                style={{
                  border: '1px solid #2B2B2B',
                  background: 'linear-gradient(122deg, rgba(28, 28, 28, 0.50) 0%, #050505 96.81%)',
                  mixBlendMode: 'plus-lighter',
                }}
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

