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
  },
  {
    name: 'Electric Lunch Boxes',
    desc: 'Insulated, self-heating lunch boxes with precision-fit internal compartments and sealed housings.',
    specs: ['Power: 12V / 220V options', 'Capacity: 1.0–1.5 L', 'Material: Food-grade PP', 'Compartments: 2–3'],
  },
  {
    name: 'Non-Electric Lunch Boxes',
    desc: 'Lightweight, leak-resistant multi-compartment lunch boxes built for daily durability.',
    specs: ['Capacity: 800 ml – 1.2 L', 'Material: PP / Stainless inserts', 'Compartments: 1–4', 'Microwave safe'],
  },
  {
    name: 'Custom Plastic Components',
    desc: 'Tooling and production for client-specific plastic components, built to supplied specification.',
    specs: ['Tolerance: Precision-grade', 'Material: Client-specified', 'Volumes: Low to high', 'Design support: In-house'],
  },
]

function ProductCard({ p, i }) {
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

  return (
    <Reveal delay={i * 0.08}>
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX, rotateY, transformPerspective: 900 }}
        className="glass rounded-sm overflow-hidden h-full flex flex-col"
      >
        <ImagePlaceholder label={`${p.name} — Product Photo`} ratio="aspect-[4/3]" />
        <div className="p-7 flex flex-col flex-1">
          <h3 className="font-display text-xl text-ivory mb-2">{p.name}</h3>
          <p className="text-smoke text-sm leading-relaxed mb-5">{p.desc}</p>
          <ul className="font-mono text-[11px] text-smoke/80 space-y-1.5 mb-6">
            {p.specs.map((s) => (
              <li key={s} className="flex gap-2">
                <span className="text-gold">/</span>
                {s}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            data-cursor
            className="mt-auto inline-flex items-center justify-center border border-gold-line text-gold text-xs uppercase tracking-widest2 py-3 rounded-full hover:bg-gold hover:text-ink transition-colors"
          >
            Inquire About This Product
          </a>
        </div>
      </motion.div>
    </Reveal>
  )
}

export default function Products() {
  return (
    <section id="products" className="relative py-28 md:py-36 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Product Catalogue"
          title="Engineered products, manufactured in-house."
          desc="Every product below is designed, tooled and produced under one roof — replace the placeholders with your own photography at any time."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((p, i) => (
            <ProductCard key={p.name} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
