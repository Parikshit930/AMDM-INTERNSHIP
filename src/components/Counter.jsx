import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Counter({ to, suffix = '', label, duration = 1.6 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = null
    const step = (ts) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / (duration * 1000), 1)
      setVal(Math.floor(progress * to))
      if (progress < 1) requestAnimationFrame(step)
      else setVal(to)
    }
    requestAnimationFrame(step)
  }, [inView, to, duration])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      className="flex flex-col items-center text-center"
    >
      <span className="font-display text-4xl md:text-5xl text-gradient-gold">
        {val}
        {suffix}
      </span>
      <span className="mt-2 text-xs uppercase tracking-widest2 text-smoke">{label}</span>
    </motion.div>
  )
}
