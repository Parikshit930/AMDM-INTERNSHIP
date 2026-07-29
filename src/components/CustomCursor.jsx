import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [hovering, setHovering] = useState(false)
  const [isTouch, setIsTouch] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { damping: 25, stiffness: 300 })
  const sy = useSpring(y, { damping: 25, stiffness: 300 })

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true)
      return
    }
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const over = (e) => {
      setHovering(!!e.target.closest('a, button, [data-cursor]'))
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
    }
  }, [x, y])

  if (isTouch) return null

  return (
    <motion.div
      className="fixed top-0 left-0 z-[90] pointer-events-none mix-blend-difference hidden md:block"
      style={{ x: sx, y: sy, translateX: '-50%', translateY: '-50%' }}
    >
      <motion.div
        animate={{ width: hovering ? 46 : 16, height: hovering ? 46 : 16, opacity: hovering ? 0.9 : 0.6 }}
        transition={{ duration: 0.25 }}
        className="rounded-full border border-gold bg-gold/10"
      />
    </motion.div>
  )
}
