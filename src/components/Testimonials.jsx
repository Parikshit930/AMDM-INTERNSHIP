import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const TESTIMONIALS = [
  {
    name: 'Rajeev Malhotra',
    role: 'Procurement Head, Consumer Goods Brand',
    text: 'A.M Die Mould delivered our gym shaker tooling ahead of schedule, with tolerances that needed zero rework on our production line.',
  },
  {
    name: 'Sunita Verma',
    role: 'Operations Manager, Packaging Company',
    text: 'Their in-house design team caught issues in our drawings before they became production problems — that kind of partnership is rare.',
  },
  {
    name: 'Karan Mehta',
    role: 'Founder, Fitness Equipment Brand',
    text: 'Pricing was competitive and the communication never wavered. Our lunch box line has been running flawlessly since launch.',
  },
]

export default function Testimonials() {
  const [idx, setIdx] = useState(0)
  const next = () => setIdx((i) => (i + 1) % TESTIMONIALS.length)
  const prev = () => setIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const t = TESTIMONIALS[idx]

  return (
    <section className="relative py-28 md:py-36 bg-ink">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <SectionHeading eyebrow="Testimonials" title="What our clients say." />

        <Reveal className="glass rounded-sm p-10 md:p-14 relative">
          <FaQuoteLeft className="text-gold text-3xl mb-6" />
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <p className="font-display text-xl md:text-2xl text-ivory leading-relaxed mb-8">"{t.text}"</p>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="text-ivory font-medium">{t.name}</p>
                  <p className="text-smoke text-sm">{t.role}</p>
                </div>
                <div className="flex gap-1 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-10">
            <button onClick={prev} data-cursor aria-label="Previous testimonial" className="w-10 h-10 rounded-full border border-gold-line text-gold flex items-center justify-center hover:bg-gold hover:text-ink transition-colors">
              <FaChevronLeft size={12} />
            </button>
            <button onClick={next} data-cursor aria-label="Next testimonial" className="w-10 h-10 rounded-full border border-gold-line text-gold flex items-center justify-center hover:bg-gold hover:text-ink transition-colors">
              <FaChevronRight size={12} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
