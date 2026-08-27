import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import ImagePlaceholder from './ImagePlaceholder'

const CATS = ['All', 'Gym Shakers', 'Lunch Box Dies', 'Injection Moulds', 'Custom Manufacturing']

const PROJECTS = [
  {
    cat: 'Gym Shakers',
    title: 'Premium Gym Shaker Tooling',
    text: 'Multi-cavity mould developed for a leak-proof gym shaker line.',
    image: '/images/projects/gym-shaker-mould.jpg',
  },
  {
    cat: 'Lunch Box Dies',
    title: 'Electric Lunch Box Die Set',
    text: 'Precision die set for an insulated, self-heating lunch box housing.',
    image: '/images/projects/electric-lunch-box-die.jpg',
  },
  {
    cat: 'Injection Moulds',
    title: 'High-Volume Injection Mould',
    text: 'Production mould built for consistent, high-volume component output.',
    image: '/images/projects/injection-mould-high-volume.jpg',
  },
  {
    cat: 'Custom Manufacturing',
    title: 'Client-Specified Component Run',
    text: 'Custom plastic component manufactured to client engineering drawings.',
    image: '/images/projects/custom-manufacturing-run.jpg',
  },
  {
    cat: 'Lunch Box Dies',
    title: 'Non-Electric Lunch Box Mould',
    text: 'Multi-compartment mould tooling for daily-use lunch boxes.',
    image: '/images/projects/lunch-box-mould.jpg',
  },
  {
    cat: 'Injection Moulds',
    title: 'Industrial Die Development',
    text: 'Custom industrial die engineered for repeatable durability.',
    image: '/images/projects/industrial-die-development.jpg',
  },
]

export default function Projects() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.cat === active)

  return (
    <section id="projects" className="relative py-28 md:py-36 bg-ink">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Projects & Portfolio"
          title="A selection of tooling & manufacturing work."
          desc="Replace these placeholders with photography of your own completed projects."
        />

        <Reveal className="flex flex-wrap justify-center gap-3 mb-14">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              data-cursor
              className={`text-xs uppercase tracking-widest2 px-5 py-2.5 rounded-full border transition-colors ${
                active === c
                  ? 'bg-gold-fade text-ink border-transparent'
                  : 'border-gold-line text-smoke hover:text-gold'
              }`}
            >
              {c}
            </button>
          ))}
        </Reveal>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                layout
                key={p.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass rounded-sm overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <ImagePlaceholder src={p.image} label={`${p.title} Photo`} ratio="aspect-[4/3]" />
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors" />
                </div>
                <div className="p-6">
                  <span className="eyebrow">{p.cat}</span>
                  <h3 className="font-display text-lg text-ivory mt-2 mb-2">{p.title}</h3>
                  <p className="text-smoke text-sm leading-relaxed">{p.text}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
