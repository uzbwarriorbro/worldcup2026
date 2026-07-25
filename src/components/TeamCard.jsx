import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import FlagIcon from './FlagIcon'
import './TeamCard.css'

export default function TeamCard({ team, index = 0 }) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.06 }}
    >
      <Link to={`/teams/${team.id}`} className="team-card glass-card">
        <div className="team-card-glow" style={{ background: team.colors?.primary }} />
        <div className="team-card-top">
          <FlagIcon code={team.flagCode} className="team-card-flag" />
          <span className="pill pill-scheduled">{t('live.group')} {team.group}</span>
        </div>
        <h3 className="team-card-name">{team.name[lang] ?? team.name.uz}</h3>
        <div className="team-card-meta">
          <div>
            <span className="meta-label">{t('teams.ranking')}</span>
            <span className="meta-value">#{team.fifaRanking}</span>
          </div>
          <div>
            <span className="meta-label">{t('teams.titles')}</span>
            <span className="meta-value">{team.titles}</span>
          </div>
        </div>
        <span className="team-card-cta">{t('teams.viewSquad')} →</span>
      </Link>
    </motion.div>
  )
}
