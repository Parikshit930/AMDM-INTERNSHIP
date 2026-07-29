import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, desc, align = 'center' }) {
  const alignClass = align === 'left' ? 'text-left items-start' : 'text-center items-center'
  return (
    <Reveal className={`flex flex-col ${alignClass} mb-14 md:mb-20`}>
      <span className="eyebrow mb-4">{eyebrow}</span>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ivory max-w-3xl">{title}</h2>
      {desc && <p className="mt-5 text-smoke max-w-2xl">{desc}</p>}
      <div className="mt-6 w-16 h-[2px] bg-gold-fade" />
    </Reveal>
  )
}
