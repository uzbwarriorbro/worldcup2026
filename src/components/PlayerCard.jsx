import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import './PlayerCard.css'

export default function PlayerCard({ player, index = 0, accentColor }) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language

  const initials = player.name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')

  return (
    <motion.div
      className="player-card glass-card"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.35, delay: (index % 8) * 0.04 }}
    >
      <div className="player-card-head">
        <div className="player-avatar" style={{ background: accentColor ? `${accentColor}33` : undefined, borderColor: accentColor }}>
          {initials}
        </div>
        <span className="pill pill-scheduled player-pos">{t(`players.positions.${player.pos}`)}</span>
      </div>
      <h4 className="player-name">{player.name}</h4>
      <div className="player-stats">
        <div>
          <span className="p-label">{t('players.age')}</span>
          <span className="p-value">{player.age}</span>
        </div>
        <div>
          <span className="p-label">{t('players.caps')}</span>
          <span className="p-value">{player.caps}</span>
        </div>
        <div>
          <span className="p-label">{t('players.goals')}</span>
          <span className="p-value">{player.goals}</span>
        </div>
      </div>
      <p className="player-club">{player.club}</p>
      <p className="player-bio">{player.bio[lang] ?? player.bio.uz}</p>
    </motion.div>
  )
}
