import { GiFactory } from 'react-icons/gi'
import { FaTools, FaDraftingCompass, FaCogs } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import Counter from './Counter'

const MACHINES = [
  { icon: <FaCogs />, title: 'VMC Machines', count: '2 Units', text: 'High-precision vertical machining centres for accurate die and mould-base work.' },
  { icon: <FaTools />, title: 'Tool Room Facility', count: 'Dedicated', text: 'A fully equipped tool room supporting fine finishing, fitting and maintenance.' },
  { icon: <GiFactory />, title: 'Injection Moulding Machines', count: '3 Units', text: 'Production-grade injection moulding lines for consistent, high-volume output.' },
  { icon: <FaDraftingCompass />, title: 'In-House Design Team', count: 'Always On', text: 'Dedicated design & development team working alongside the shop floor.' },
]

export default function Machinery() {
  return (
    <section id="machinery" className="relative py-28 md:py-36 bg-ink">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Infrastructure"
          title="A precision manufacturing setup, built for repeatability."
          desc="500 square metres of factory floor, organised around four core capabilities."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {MACHINES.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.08}>
              <div className="glass rounded-sm p-7 h-full flex flex-col">
                <div className="text-gold text-2xl mb-5">{m.icon}</div>
                <span className="eyebrow mb-2">{m.count}</span>
                <h3 className="font-display text-lg text-ivory mb-2">{m.title}</h3>
                <p className="text-smoke text-sm leading-relaxed">{m.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="glass rounded-sm py-12 px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <Counter to={500} suffix=" m²" label="Factory Area" />
          <Counter to={25} label="Skilled Workers" />
          <Counter to={5} label="Core Machines" />
          <Counter to={20} suffix="+" label="Years Experience" />
        </Reveal>
      </div>
    </section>
  )
}
