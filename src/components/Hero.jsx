import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { FiArrowRight, FiPlay } from 'react-icons/fi'
import MagneticButton from './MagneticButton'

const HEADLINE = 'Engineering Precision. Manufacturing Excellence.'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const words = HEADLINE.split(' ')

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-ink grain-bg pt-28"
    >
      {/* parallax blueprint grid */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          {[...Array(12)].map((_, i) => (
            <line key={`v${i}`} x1={i * 110} y1="0" x2={i * 110} y2="800" className="blueprint-line" strokeWidth="0.5" />
          ))}
          {[...Array(9)].map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 100} x2="1200" y2={i * 100} className="blueprint-line" strokeWidth="0.5" />
          ))}
        </svg>
      </motion.div>

      {/* floating particles */}
      {[...Array(18)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-gold/40"
          style={{
            width: 2 + (i % 3),
            height: 2 + (i % 3),
            left: `${(i * 53) % 100}%`,
            top: `${(i * 37) % 100}%`,
          }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 6 + (i % 5), repeat: Infinity, delay: i * 0.3 }}
        />
      ))}

      <motion.div style={{ opacity }} className="relative z-10 max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="eyebrow mb-6"
        >
          Est. 27 June 2016 — Delhi, India
        </motion.p>

        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl leading-[1.05] text-ivory flex flex-wrap justify-center gap-x-3 gap-y-1">
          {words.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={i % 3 === 1 ? 'text-gradient-gold' : ''}
            >
              {w}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="mt-8 text-smoke text-base md:text-lg max-w-2xl mx-auto"
        >
          A precision manufacturing house specializing in injection plastic moulds, industrial die
          development and custom plastic products — built on 20+ years of combined engineering expertise.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton
            as="a"
            href="#contact"
            className="group bg-gold-fade text-ink text-sm uppercase tracking-widest2 font-semibold px-8 py-4 rounded-full shadow-gold inline-flex items-center gap-2"
          >
            Get a Quote <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </MagneticButton>
          <MagneticButton
            as="a"
            href="https://wa.me/919873962526"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gold-line text-ivory text-sm uppercase tracking-widest2 px-8 py-4 rounded-full hover:border-gold transition-colors"
          >
            Contact Us
          </MagneticButton>
          <MagneticButton
            as="a"
            href="#products"
            className="text-ivory/80 text-sm uppercase tracking-widest2 inline-flex items-center gap-2 px-4 py-4 hover:text-gold transition-colors"
          >
            <FiPlay /> Explore Products
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 flex flex-col items-center gap-2 text-smoke"
      >
        <span className="text-[10px] tracking-widest2 uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="w-[1px] h-8 bg-gold-line"
        />
      </motion.div>
    </section>
  )
}
