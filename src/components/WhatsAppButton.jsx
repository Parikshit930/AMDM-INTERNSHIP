import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919873962526"
      target="_blank"
      rel="noopener noreferrer"
      data-cursor
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.6 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-[70] flex items-center gap-2 bg-[#1E9E55] text-white pl-4 pr-5 py-3 rounded-full shadow-lg shadow-black/40"
      aria-label="Chat with us on WhatsApp"
    >
      <motion.span
        animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute inset-0 rounded-full bg-[#1E9E55]"
      />
      <FaWhatsapp className="text-xl relative z-10" />
      <span className="text-sm font-medium relative z-10 hidden sm:inline">Chat With Us</span>
    </motion.a>
  )
}
