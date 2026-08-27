import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin, FiCheckCircle } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import MagneticButton from './MagneticButton'

export default function Contact({ selectedProduct, onClearProduct }) {
  const [form, setForm] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    product: selectedProduct || '',
    requirements: selectedProduct
      ? `I am interested in inquiring about ${selectedProduct}. Please provide pricing, MOQ, and tooling specifications.`
      : '',
  })
  const [sent, setSent] = useState(false)

  useEffect(() => {
    if (selectedProduct) {
      setForm((prev) => ({
        ...prev,
        product: selectedProduct,
        requirements: `I am interested in inquiring about ${selectedProduct}. Please provide pricing, MOQ, and tooling specifications.`,
      }))
    }
  }, [selectedProduct])

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleProductChange = (e) => {
    const val = e.target.value
    setForm((prev) => ({
      ...prev,
      product: val,
      requirements: val
        ? `I am interested in inquiring about ${val}. Please provide pricing, MOQ, and tooling specifications.`
        : prev.requirements,
    }))
  }

  const getWhatsAppMessage = () => {
    const parts = [
      `*New Website Inquiry — A.M DIE MOULD*`,
      `----------------------------------------`,
      `👤 *Name:* ${(form.name || '').trim()}`,
    ]
    if ((form.company || '').trim()) {
      parts.push(`🏢 *Company:* ${(form.company || '').trim()}`)
    }
    parts.push(`📞 *Phone:* ${(form.phone || '').trim()}`)
    parts.push(`✉️ *Email:* ${(form.email || '').trim()}`)
    if ((form.product || '').trim()) {
      parts.push(`🏷️ *Catalogue Item:* ${(form.product || '').trim()}`)
    }
    parts.push(`📝 *Requirements:*`)
    parts.push((form.requirements || '').trim())
    parts.push(`----------------------------------------`)
    return parts.join('\n')
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const message = getWhatsAppMessage()
    const url = `https://wa.me/919873962526?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
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

            <div className="glass rounded-sm overflow-hidden aspect-[4/3] min-h-[260px] relative border border-gold-line/30">
              <iframe
                title="A.M Die Mould Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470.58069996704!2d77.15246690071211!3d28.68067047896169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03929ca181ff%3A0x9cbe6ab76df2c70c!2sABREHBAR%20INTERNATIONAL%20PVT%20LTD%23%20Hing%20Importer%23%20Hing%20wholesaler%20%23Hing%20Supplier%20in%20Delhi%23%20Hing%20Wholesaler%20in%20Lawrence%20Road!5e1!3m2!1sen!2sin!4v1787818696199!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1} className="lg:col-span-3 glass rounded-sm p-8 md:p-10">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <FiCheckCircle className="text-gold text-5xl mb-4" />
                <h3 className="font-display text-2xl text-ivory mb-2">Inquiry Prepared</h3>
                <p className="text-smoke max-w-md mb-6">
                  Thank you, {(form.name && form.name.split(' ')[0]) || 'there'}! We have forwarded your message to WhatsApp. If the chat window did not open automatically, click the button below:
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a
                    href={`https://wa.me/919873962526?text=${encodeURIComponent(getWhatsAppMessage())}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1E9E55] hover:bg-[#168a48] text-white text-xs uppercase tracking-widest2 px-6 py-3.5 rounded-full inline-flex items-center gap-2 font-semibold shadow-md transition-colors"
                  >
                    <FaWhatsapp className="text-lg" /> Open WhatsApp Chat
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSent(false)
                      setForm({ name: '', company: '', phone: '', email: '', product: '', requirements: '' })
                      if (onClearProduct) onClearProduct()
                    }}
                    className="border border-gold-line text-smoke hover:text-gold text-xs uppercase tracking-widest2 px-6 py-3.5 rounded-full transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {form.product && (
                  <div className="sm:col-span-2 flex items-center justify-between gap-4 p-4 bg-white/5 border border-gold-line rounded-sm">
                    <p className="text-sm text-ivory">
                      <span className="text-gold font-bold">Selected:</span> {form.product}
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setForm((prev) => ({ ...prev, product: '', requirements: '' }))
                        if (onClearProduct) onClearProduct()
                      }}
                      className="text-xs text-smoke hover:text-gold uppercase tracking-wider underline cursor-pointer"
                    >
                      Clear
                    </button>
                  </div>
                )}

                <Field label="Name" name="name" value={form.name} onChange={onChange} required placeholder="Your full name" />
                <Field label="Company" name="company" value={form.company} onChange={onChange} placeholder="Company or business name" />
                <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={onChange} required placeholder="+91 XXXXX XXXXX" />
                <Field label="Email" name="email" type="email" value={form.email} onChange={onChange} required placeholder="name@example.com" />
                
                <div className="sm:col-span-2">
                  <label className="text-xs uppercase tracking-widest2 text-smoke mb-2 block font-medium">Interested Product / Category</label>
                  <select
                    name="product"
                    value={form.product}
                    onChange={handleProductChange}
                    className="w-full bg-white text-black font-medium border border-gold-line rounded-sm px-4 py-3 focus:border-gold focus:ring-2 focus:ring-gold/30 outline-none transition-all cursor-pointer"
                  >
                    <option value="" className="text-black">General Manufacturing Inquiry</option>
                    <option value="Premium Gym Shakers" className="text-black">Premium Gym Shakers</option>
                    <option value="Electric Lunch Boxes" className="text-black">Electric Lunch Boxes</option>
                    <option value="Non-Electric Lunch Boxes" className="text-black">Non-Electric Lunch Boxes</option>
                    <option value="Injection Mould / Tooling" className="text-black">Injection Mould / Tooling</option>
                    <option value="Industrial Die Manufacturing" className="text-black">Industrial Die Manufacturing</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="text-xs uppercase tracking-widest2 text-smoke mb-2 block font-medium">Requirements</label>
                  <textarea
                    name="requirements"
                    rows={4}
                    value={form.requirements}
                    onChange={onChange}
                    required
                    className="w-full bg-white text-black font-medium border border-gold-line rounded-sm px-4 py-3 placeholder:text-zinc-500 focus:border-gold focus:ring-2 focus:ring-gold/30 outline-none transition-all resize-none"
                    placeholder="Describe the quantity, specifications, mould requirements, etc."
                  />
                </div>
                <div className="sm:col-span-2">
                  <MagneticButton
                    as="button"
                    type="submit"
                    className="w-full bg-gold-fade text-ink text-sm uppercase tracking-widest2 font-semibold py-4 rounded-full shadow-gold inline-flex items-center justify-center gap-2"
                  >
                    Submit Inquiry via WhatsApp <FaWhatsapp className="text-lg" />
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

function Field({ label, name, type = 'text', value, onChange, required, placeholder }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest2 text-smoke mb-2 block font-medium">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full bg-white text-black font-medium border border-gold-line rounded-sm px-4 py-3 placeholder:text-zinc-500 focus:border-gold focus:ring-2 focus:ring-gold/30 outline-none transition-all"
      />
    </div>
  )
}
