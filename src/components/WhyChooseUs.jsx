import { FiCheck, FiX } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const POINTS = [
  '20+ Years of Industry Experience',
  'High Precision Manufacturing',
  'Fast, Reliable Delivery',
  'In-House Design Team',
  'Competitive Pricing',
  'Best Quality Designs & Dies',
  'Advanced Manufacturing Infrastructure',
  'Dedicated Customer Support',
]

const GENERIC = [
  'Outsourced, inconsistent tooling',
  'Variable precision standards',
  'Unpredictable lead times',
  'No in-house design capability',
  'Premium pricing, average output',
  'Limited design refinement',
  'Dated or shared equipment',
  'Slow, indirect support',
]

export default function WhyChooseUs() {
  return (
    <section className="relative py-28 md:py-36 bg-charcoal">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Why Choose A.M Die Mould"
          title="Built different from a typical mould shop."
        />

        <div className="grid md:grid-cols-2 gap-6">
          <Reveal className="glass rounded-sm p-8 md:p-10 border-2 border-gold-line">
            <h3 className="font-display text-xl text-gold mb-6">A.M Die Mould</h3>
            <ul className="space-y-4">
              {POINTS.map((p) => (
                <li key={p} className="flex items-start gap-3 text-ivory text-sm">
                  <span className="mt-0.5 text-gold"><FiCheck /></span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="rounded-sm p-8 md:p-10 border border-white/5 bg-ink/40">
            <h3 className="font-display text-xl text-smoke mb-6">Typical Manufacturer</h3>
            <ul className="space-y-4">
              {GENERIC.map((p) => (
                <li key={p} className="flex items-start gap-3 text-smoke text-sm">
                  <span className="mt-0.5 text-smoke/50"><FiX /></span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
