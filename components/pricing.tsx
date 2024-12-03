import { forwardRef } from 'react'
import { Check } from 'lucide-react'

const plans = [
  {
    name: "Starter",
    price: "$1,499",
    features: [
      "Brand identity essentials",
      "Logo design (2 concepts)",
      "Basic style guide",
      "Basic style guide",
      "Social media templates (3 designs)",
      "2 rounds of revisions",
      "2 weeks delivery",
      "Email support"
    ]
  },
  {
    name: "Pro",
    price: "$2,699",
    features: [
      "Complete brand package",
      "Logo design (4 concepts)",
      "Comprehensive style guide",
      "Full stationery design",
      "Social media kit (8 designs)",
      "Website design (5 pages)",
      "4 rounds of revisions",
      "4 weeks delivery",
      "Priority email & call support",
      "Monthly design consultation"
    ],
    highlighted: true
  },
  {
    name: "Business",
    price: "Custom Pricing",
    features: [
      "Tailored brand strategy",
      "Unlimited design concepts",
      "Extended brand guidelines",
      "Custom digital solutions",
      "Complete marketing collateral",
      "Unlimited revisions",
      "Flexible timeline",
      "24/7 dedicated support",
      "Quarterly strategy sessions",
      "Regular brand evolution updates"
    ]
  }
]

export const Pricing = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="py-24" style={{ background: '#121212' }}>
      <div className="container space-y-12">
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
              Discover Our Prices
            </span>
          </h2>
          <p className="text-[#D1DAEA]">Choose the plan that works for you</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              style={{
                border: '1px solid #2B2B2B',
                background: 'linear-gradient(122deg, rgba(28, 28, 28, 0.50) 0%, #050505 96.81%)',
                mixBlendMode: 'plus-lighter',
              }}
              className={`border rounded-xl p-8 space-y-6 ${
                plan.highlighted 
                  ? 'border-purple-500 ring-2 ring-purple-500 ring-opacity-50' 
                  : 'border-white/10'
              }`}
            >
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                <div className="text-2xl font-bold text-purple-400">
                  {plan.price}
                </div>
              </div>
              <ul className="space-y-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm">
                    <Check className="h-5 w-5 text-purple-400 shrink-0 mt-0.5" />
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

Pricing.displayName = 'Pricing'

