import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import ImagePlaceholder from './ImagePlaceholder'

const CATEGORIES = ['Factory', 'Machines', 'Products', 'Moulds', 'Manufacturing Process']

const ITEMS = [
  { id: 0, cat: 'Factory', title: 'Factory Floor Setup', image: '/images/gallery/factory-1.jpg' },
  { id: 1, cat: 'Machines', title: 'VMC Machining Center', image: '/images/gallery/machines-1.jpg' },
  { id: 2, cat: 'Products', title: 'Gym Shaker Production', image: '/images/gallery/products-1.jpg' },
  { id: 3, cat: 'Moulds', title: 'Precision Injection Mould', image: '/images/gallery/moulds-1.jpg' },
  { id: 4, cat: 'Manufacturing Process', title: 'CNC Milling in Progress', image: '/images/gallery/process-1.jpg' },
  { id: 5, cat: 'Factory', title: 'Assembly & Inspection Area', image: '/images/gallery/factory-2.jpg' },
  { id: 6, cat: 'Machines', title: 'Injection Moulding Machine', image: '/images/gallery/machines-2.jpg' },
  { id: 7, cat: 'Products', title: 'Lunch Box Component Fit', image: '/images/gallery/products-2.jpg' },
  { id: 8, cat: 'Moulds', title: 'Multi-Cavity Tooling Set', image: '/images/gallery/moulds-2.jpg' },
  { id: 9, cat: 'Manufacturing Process', title: 'Die Fitting & Polish', image: '/images/gallery/process-2.jpg' },
]

export default function Gallery() {
  const [active, setActive] = useState('Factory')
  const filtered = ITEMS.filter((i) => i.cat === active)

  return (
    <section id="gallery" className="relative py-28 md:py-36 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Gallery"
          title="Inside the factory."
          desc="Every tile below is a marked upload slot — drop your own photography in to replace it."
        />

        <Reveal className="flex flex-wrap justify-center gap-3 mb-14">
          {CATEGORIES.map((c) => (
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

        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ scale: 1.03 }}
                className="rounded-sm overflow-hidden"
              >
                <ImagePlaceholder
                  src={item.image}
                  label={`${item.cat} — ${item.title}`}
                  ratio="aspect-square"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}