import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader() {
  const [show, setShow] = useState(true)
  const [pct, setPct] = useState(0)

  useEffect(() => {
    let current = 0
    const interval = setInterval(() => {
      current += Math.ceil(Math.random() * 8) + 4
      if (current >= 100) {
        current = 100
        setPct(100)
        clearInterval(interval)
        setTimeout(() => setShow(false), 300)
      } else {
        setPct(current)
      }
    }, 45)

    // Failsafe timer so loader never gets stuck
    const failsafe = setTimeout(() => {
      clearInterval(interval)
      setShow(false)
    }, 1800)

    return () => {
      clearInterval(interval)
      clearTimeout(failsafe)
    }
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] bg-ink flex flex-col items-center justify-center pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
        >
          <motion.svg
            width="120"
            height="60"
            viewBox="0 0 120 60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6"
          >
            <motion.path
              d="M5 50 L30 10 L60 50 L90 10 L115 50"
              className="blueprint-line"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            />
          </motion.svg>
          <p className="font-display text-ivory text-2xl tracking-wide mb-3">A.M DIE MOULD</p>
          <div className="w-56 h-[2px] bg-charcoal2 overflow-hidden">
            <motion.div
              className="h-full bg-gold-fade"
              style={{ width: `${pct}%` }}
              transition={{ ease: 'easeOut', duration: 0.1 }}
            />
          </div>
          <p className="eyebrow mt-4">{pct}%</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
