import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import Counter from './Counter'
import ImagePlaceholder from './ImagePlaceholder'

const TIMELINE = [
  { year: '2016', text: 'A.M Die Mould founded on 27 June by Ashok Kumar & Manish Chauhan in Delhi.' },
  { year: '2018', text: 'Tool room facility established; capability expanded into industrial die manufacturing.' },
  { year: '2021', text: 'In-house design & development team formed to support custom product engineering.' },
  { year: '2024', text: 'Fleet expanded to 3 injection moulding machines and 2 VMC machines across a 500 sq.m. facility.' },
  { year: 'Today', text: '25 skilled workers manufacturing precision moulds and plastic products for diverse industries.' },
]

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="About the Company"
          title="Two decades of combined precision engineering, distilled into every mould we cut."
          desc="A.M Die Mould is a precision manufacturing company specializing in injection plastic moulds, industrial die manufacturing, and plastic product development — built for businesses that cannot compromise on tolerance or timeline."
        />

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <Reveal>
            <ImagePlaceholder label="Factory Floor Photograph" ratio="aspect-[5/4]" className="rounded-sm" />
          </Reveal>
          <Reveal delay={0.15} className="flex flex-col gap-6">
            <h3 className="font-display text-2xl text-ivory">Our Story</h3>
            <p className="text-smoke leading-relaxed">
              Founded on 27 June 2016 by Ashok Kumar and Manish Chauhan, A.M Die Mould was built on a simple
              conviction: that Indian manufacturing could match global precision standards without compromising
              on delivery or price. Operating from a 500 square metre facility at Britannia Chowk, Delhi, our
              team brings more than 20 years of combined experience in mould manufacturing and plastic
              production to every project we take on.
            </p>
            <p className="text-smoke leading-relaxed">
              Today, our products reach businesses across healthcare, consumer goods, fitness and packaging —
              and our in-house design team continues to develop new tooling and products in step with what
              modern manufacturing demands.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-4 pt-6 border-t border-gold-line">
              <Counter to={20} suffix="+" label="Years Experience" />
              <Counter to={25} label="Skilled Workers" />
              <Counter to={500} suffix="m²" label="Factory Area" />
            </div>
          </Reveal>
        </div>

        {/* Mission / Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-24">
          {[
            {
              title: 'Our Mission',
              text: 'To deliver precision-engineered moulds and plastic products with uncompromising quality, competitive pricing and reliable, on-time delivery — for every client, every time.',
            },
            {
              title: 'Our Vision',
              text: 'To be recognised as one of India\u2019s most trusted names in injection mould and die manufacturing, driven by continuous innovation and in-house design capability.',
            },
          ].map((b, i) => (
            <Reveal key={b.title} delay={i * 0.1} className="glass p-8 md:p-10 rounded-sm">
              <h4 className="font-display text-xl text-gold mb-3">{b.title}</h4>
              <p className="text-smoke leading-relaxed">{b.text}</p>
            </Reveal>
          ))}
        </div>

        {/* Timeline */}
        <Reveal>
          <h3 className="font-display text-2xl text-ivory mb-10 text-center">Our Journey</h3>
        </Reveal>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-[7px] md:left-1/2 top-0 bottom-0 w-px bg-gold-line md:-translate-x-1/2" />
          {TIMELINE.map((t, i) => (
            <Reveal
              key={t.year}
              delay={i * 0.05}
              className={`relative flex md:items-center mb-10 last:mb-0 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className={`md:w-1/2 pl-8 md:pl-0 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <span className="font-display text-gold text-lg">{t.year}</span>
                <p className="text-smoke text-sm mt-1 leading-relaxed">{t.text}</p>
              </div>
              <motion.span
                whileInView={{ scale: [0, 1.3, 1] }}
                viewport={{ once: true }}
                className="absolute left-0 md:left-1/2 top-1 w-4 h-4 rounded-full bg-gold-fade md:-translate-x-1/2 shadow-gold"
              />
              <div className="hidden md:block md:w-1/2" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
