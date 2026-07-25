import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import './FactCard.css'

export default function FactCard({ fact, index = 0 }) {
  const { i18n } = useTranslation()
  const lang = i18n.language

  return (
    <motion.div
      className="fact-card glass-card"
      initial={{ opacity: 0, scale: 0.94, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.07 }}
      whileHover={{ y: -6 }}
    >
      <div className="fact-icon">{fact.icon}</div>
      <h4 className="fact-title">{fact.title[lang] ?? fact.title.uz}</h4>
      <p className="fact-text">{fact.text[lang] ?? fact.text.uz}</p>
    </motion.div>
  )
}
