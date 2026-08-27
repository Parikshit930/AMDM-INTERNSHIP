import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import ImagePlaceholder from './ImagePlaceholder'

const PRODUCTS = [
  {
    name: 'Premium Gym Shakers',
    desc: 'Leak-proof protein shakers engineered with precision-moulded components for durability and grip.',
    specs: ['Capacity: 500–700 ml', 'Material: BPA-free PP/Tritan', 'Finish: Matte / Glossy', 'MOQ: On request'],
    image: '/images/products/gym-shakers.jpg',
  },
  {
    name: 'Electric Lunch Boxes',
    desc: 'Insulated, self-heating lunch boxes with precision-fit internal compartments and sealed housings.',
    specs: ['Power: 12V / 220V options', 'Capacity: 1.0–1.5 L', 'Material: Food-grade PP', 'Compartments: 2–3'],
    image: '/images/products/electric-lunch-box.jpg',
  },
  {
    name: 'Non-Electric Lunch Boxes',
    desc: 'Lightweight, leak-resistant multi-compartment lunch boxes built for daily durability.',
    specs: ['Capacity: 800 ml – 1.2 L', 'Material: PP / Stainless inserts', 'Compartments: 1–4', 'Microwave safe'],
    image: '/images/products/lunch-box.jpg',
  },
]

function ProductCard({ p, i, onInquireProduct }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-50, 50], [8, -8]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-50, 50], [-8, 8]), { stiffness: 200, damping: 20 })

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }
  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  const handleClick = (e) => {
    if (onInquireProduct) {
      e.preventDefault()
      onInquireProduct(p.name)
    }
  }

  return (
    <Reveal delay={i * 0.08}>
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX, rotateY, transformPerspective: 900 }}
        className="glass rounded-sm overflow-hidden h-full flex flex-col hover:border-gold/40 transition-colors"
      >
        <ImagePlaceholder src={p.image} label={`${p.name} — Product Photo`} ratio="aspect-[4/3]" />
        <div className="p-7 md:p-8 flex flex-col flex-1">
          <h3 className="font-display text-xl md:text-2xl text-ivory mb-3">{p.name}</h3>
          <p className="text-smoke text-sm md:text-base leading-relaxed mb-6">{p.desc}</p>
          <ul className="font-mono text-xs text-smoke/80 space-y-2 mb-8">
            {p.specs.map((s) => (
              <li key={s} className="flex gap-2">
                <span className="text-gold">/</span>
                {s}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={handleClick}
            data-cursor
            className="mt-auto inline-flex items-center justify-center border border-gold-line text-gold text-xs uppercase tracking-widest2 py-3.5 rounded-full hover:bg-gold hover:text-ink transition-colors font-medium"
          >
            Inquire About This Product
          </a>
        </div>
      </motion.div>
    </Reveal>
  )
}

export default function Products({ onInquireProduct }) {
  return (
    <section id="products" className="relative py-28 md:py-36 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Product Catalogue"
          title="Engineered products, manufactured in-house."
          desc="Every product below is designed, tooled and produced under one roof — replace the placeholders with your own photography at any time."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {PRODUCTS.map((p, i) => (
            <ProductCard key={p.name} p={p} i={i} onInquireProduct={onInquireProduct} />
          ))}
        </div>
      </div>
    </section>
  )
}
