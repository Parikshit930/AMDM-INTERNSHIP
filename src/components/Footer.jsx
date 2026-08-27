import { FaWhatsapp } from 'react-icons/fa'
import { FiDownload } from 'react-icons/fi'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#products', label: 'Products' },
  { href: '#machinery', label: 'Infrastructure' },
  { href: '#projects', label: 'Projects' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="relative bg-ink border-t border-gold-line pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <p className="font-display text-2xl text-ivory mb-3">
              A.M <span className="text-gradient-gold">DIE MOULD</span>
            </p>
            <p className="text-smoke text-sm leading-relaxed max-w-sm mb-6">
              Precision. Innovation. Manufacturing Excellence. Injection mould & industrial die manufacturing
              from Delhi, India — est. 2016.
            </p>
            <a
              href="#"
              data-cursor
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest2 border border-gold-line text-gold px-5 py-3 rounded-full hover:bg-gold hover:text-ink transition-colors"
            >
              <FiDownload /> Download Company Profile
            </a>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest2 text-smoke mb-4">Navigate</p>
            <ul className="space-y-2">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-ivory/80 hover:text-gold text-sm transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest2 text-smoke mb-4">Contact</p>
            <ul className="space-y-2 text-sm text-ivory/80">
              <li>C-47/2 Lawrence Road, Britannia Chowk, Delhi – 110035, India</li>
              <li><a href="tel:+919873962526" className="hover:text-gold transition-colors">+91 98739 62526</a></li>
              <li><a href="mailto:am.die.manufacturer@gmail.com" className="hover:text-gold transition-colors break-all">am.die.manufacturer@gmail.com</a></li>
            </ul>
            <div className="flex gap-3 mt-5">
              {[
                { icon: <FaWhatsapp />, href: 'https://wa.me/919873962526', label: 'WhatsApp' },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  data-cursor
                  className="w-9 h-9 rounded-full border border-gold-line flex items-center justify-center text-gold hover:bg-gold hover:text-ink transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gold-line pt-6 flex flex-col sm:flex-row justify-between gap-3 text-[12px] text-smoke">
          <p>© {new Date().getFullYear()} A.M Die Mould. All rights reserved.</p>
          <p>Founded by Ashok Kumar & Manish Chauhan · Delhi, India</p>
        </div>
      </div>
    </footer>
  )
}
