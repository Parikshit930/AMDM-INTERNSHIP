import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'
import MagneticButton from './MagneticButton'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#products', label: 'Products' },
  { href: '#machinery', label: 'Infrastructure' },
  { href: '#projects', label: 'Projects' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className={`fixed top-0 inset-x-0 z-[60] transition-all duration-500 ${
        scrolled ? 'glass py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between">
        <a href="#home" className="font-display text-xl md:text-2xl tracking-wide text-ivory" data-cursor>
          A.M <span className="text-gradient-gold">DIE MOULD</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-cursor
              className="text-xs uppercase tracking-widest2 text-smoke hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            data-cursor
            className="text-gold w-9 h-9 rounded-full glass flex items-center justify-center"
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <MagneticButton
            as="a"
            href="#contact"
            className="bg-gold-fade text-ink text-xs uppercase tracking-widest2 font-semibold px-6 py-3 rounded-full shadow-gold"
          >
            Get a Quote
          </MagneticButton>
        </div>

        <button className="lg:hidden text-ivory text-2xl" onClick={() => setOpen(true)} aria-label="Open menu">
          <FiMenu />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-ink/98 z-[90] flex flex-col p-8"
          >
            <div className="flex justify-end">
              <button onClick={() => setOpen(false)} className="text-ivory text-3xl" aria-label="Close menu">
                <FiX />
              </button>
            </div>
            <div className="flex flex-col gap-6 mt-12 items-center">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl text-ivory hover:text-gold"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-6 bg-gold-fade text-ink text-sm uppercase tracking-widest2 font-semibold px-8 py-4 rounded-full"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
