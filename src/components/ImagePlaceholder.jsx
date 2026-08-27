import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiUploadCloud } from 'react-icons/fi'

/**
 * Marked image-upload slot. Drop a real image in /public and pass `src`
 * to replace the placeholder — the upload mark disappears automatically.
 */
export default function ImagePlaceholder({ label = 'Image', ratio = 'aspect-[4/3]', src, className = '' }) {
  const [hasError, setHasError] = useState(false)

  if (src && !hasError) {
    return (
      <img
        src={src}
        alt={label}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover ${ratio} ${className}`}
      />
    )
  }

  return (
    <div
      className={`relative ${ratio} ${className} grain-bg flex flex-col items-center justify-center gap-2 border border-gold-line bg-charcoal2 overflow-hidden group text-center px-3`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal2 via-ink to-charcoal2" />
      <motion.div
        initial={{ opacity: 0.4 }}
        whileHover={{ opacity: 0.8 }}
        className="relative z-10 flex flex-col items-center gap-2 text-smoke"
      >
        <FiUploadCloud className="text-2xl text-gold" />
        <span className="text-[11px] tracking-widest2 uppercase">{label}</span>
        <span className="text-[10px] text-smoke/60">
          {src ? `Place at: public${src}` : 'Replace in /public'}
        </span>
      </motion.div>
      <div className="absolute inset-0 border border-dashed border-gold/20" />
    </div>
  )
}
