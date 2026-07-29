import { motion } from 'framer-motion'
import { GiFactory } from 'react-icons/gi'
import { FaIndustry, FaPencilRuler, FaCogs, FaBullseye } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const SERVICES = [
  {
    icon: <GiFactory />,
    title: 'Injection Plastic Mould Manufacturing',
    text: 'Precision-cut injection moulds engineered to tight tolerances for long-run production reliability.',
  },
  {
    icon: <FaIndustry />,
    title: 'Industrial Die Manufacturing',
    text: 'Custom dies built for durability and repeatability across demanding industrial applications.',
  },
  {
    icon: <FaPencilRuler />,
    title: 'Product Design & Development',
    text: 'In-house design team turning concepts into manufacturable, production-ready product designs.',
  },
  {
    icon: <FaCogs />,
    title: 'Custom Plastic Product Manufacturing',
    text: 'End-to-end production of bespoke plastic components tailored to your specifications.',
  },
  {
    icon: <FaBullseye />,
    title: 'Precision Engineering Solutions',
    text: 'Tight-tolerance engineering support across tooling, fixtures and component manufacturing.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-28 md:py-36 bg-ink">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="What We Do"
          title="Five disciplines, one precision standard."
          desc="From first sketch to finished mould, every service we offer is held to the same tolerance for quality and timeline."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -8, rotateX: 2 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="h-full glass rounded-sm p-8 group relative overflow-hidden"
              >
                <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-gold/5 group-hover:bg-gold/10 transition-colors" />
                <div className="text-gold text-3xl mb-6 relative z-10">{s.icon}</div>
                <h3 className="font-display text-xl text-ivory mb-3 relative z-10">{s.title}</h3>
                <p className="text-smoke text-sm leading-relaxed relative z-10">{s.text}</p>
                <div className="mt-6 h-[1px] w-10 bg-gold-fade group-hover:w-20 transition-all duration-500" />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
