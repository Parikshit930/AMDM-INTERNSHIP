import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import MagneticButton from './MagneticButton'

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', requirements: '' })
  const [sent, setSent] = useState(false)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    // Connect this handler to your backend, form service, or email API.
    setSent(true)
  }

  return (
    <section id="contact" className="relative py-28 md:py-36 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Tell us what you need manufactured."
          desc="Share your requirements below or reach out directly — our team responds within one business day."
        />

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Details */}
          <Reveal className="lg:col-span-2 flex flex-col gap-6">
            {[
              { icon: <FiPhone />, label: 'Phone', value: '+91 98739 62526', href: 'tel:+919873962526' },
              { icon: <FaWhatsapp />, label: 'WhatsApp', value: '+91 98739 62526', href: 'https://wa.me/919873962526' },
              { icon: <FiMail />, label: 'Email', value: 'am.die.manufacturer@gmail.com', href: 'mailto:am.die.manufacturer@gmail.com' },
              { icon: <FiMapPin />, label: 'Address', value: 'C-47/2 Lawrence Road, Britannia Chowk, Delhi – 110035, India' },
            ].map((d) => (
              <div key={d.label} className="glass rounded-sm p-6 flex items-start gap-4">
                <span className="text-gold text-xl mt-1">{d.icon}</span>
                <div>
                  <p className="text-xs uppercase tracking-widest2 text-smoke mb-1">{d.label}</p>
                  {d.href ? (
                    <a href={d.href} target="_blank" rel="noreferrer" className="text-ivory hover:text-gold transition-colors break-words">
                      {d.value}
                    </a>
                  ) : (
                    <p className="text-ivory">{d.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="glass rounded-sm overflow-hidden aspect-[4/3] relative grain-bg flex items-center justify-center">
              <div className="text-center text-smoke">
                <FiMapPin className="text-gold text-3xl mx-auto mb-2" />
                <p className="text-xs uppercase tracking-widest2">Google Maps Embed</p>
                <p className="text-[11px] mt-1">Add your embed code in Contact.jsx</p>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1} className="lg:col-span-3 glass rounded-sm p-8 md:p-10">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-16"
              >
                <FiCheckCircle className="text-gold text-5xl mb-4" />
                <h3 className="font-display text-2xl text-ivory mb-2">Inquiry received</h3>
                <p className="text-smoke">Thank you, {form.name.split(' ')[0] || 'there'}. Our team will be in touch shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-5">
                <Field label="Name" name="name" value={form.name} onChange={onChange} required />
                <Field label="Company" name="company" value={form.company} onChange={onChange} />
                <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={onChange} required />
                <Field label="Email" name="email" type="email" value={form.email} onChange={onChange} required />
                <div className="sm:col-span-2">
                  <label className="text-xs uppercase tracking-widest2 text-smoke mb-2 block">Requirements</label>
                  <textarea
                    name="requirements"
                    rows={5}
                    value={form.requirements}
                    onChange={onChange}
                    required
                    className="w-full bg-ink/60 border border-gold-line rounded-sm px-4 py-3 text-ivory placeholder:text-smoke/50 focus:border-gold outline-none transition-colors resize-none"
                    placeholder="Describe the product, mould or die you need manufactured..."
                  />
                </div>
                <div className="sm:col-span-2">
                  <MagneticButton
                    as="button"
                    type="submit"
                    className="w-full bg-gold-fade text-ink text-sm uppercase tracking-widest2 font-semibold py-4 rounded-full shadow-gold inline-flex items-center justify-center gap-2"
                  >
                    Submit Inquiry <FiSend />
                  </MagneticButton>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', value, onChange, required }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest2 text-smoke mb-2 block">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-ink/60 border border-gold-line rounded-sm px-4 py-3 text-ivory placeholder:text-smoke/50 focus:border-gold outline-none transition-colors"
      />
    </div>
  )
}
