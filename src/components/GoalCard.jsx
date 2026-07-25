import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { getTeamById } from '../data/teams'
import FlagIcon from './FlagIcon'
import './GoalCard.css'

export default function GoalCard({ goal, index = 0 }) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language
  const team = getTeamById(goal.teamId)

  return (
    <motion.div
      className="goal-card glass-card"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.06 }}
    >
      <div className="goal-card-bar" style={{ background: goal.color }} />
      <div className="goal-card-content">
        <div className="goal-card-top">
          <span className="goal-rank">#{index + 1}</span>
          <div className="goal-pitch">
            <span className="goal-ball">⚽</span>
          </div>
          <span className="goal-minute">{goal.minute}' {t('goals.minute')}</span>
        </div>

        <div className="goal-player-row">
          <FlagIcon code={team?.flagCode} className="goal-flag" />
          <h4 className="goal-player">{goal.player}</h4>
        </div>
        <p className="goal-match">{goal.match[lang] ?? goal.match.uz}</p>
        <p className="goal-desc">{goal.desc[lang] ?? goal.desc.uz}</p>

        <a
          className="goal-watch-btn"
          href={`https://www.youtube.com/results?search_query=${encodeURIComponent(
            `${goal.player} goal World Cup 2026 ${goal.minute}'`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="goal-watch-icon">▶</span> {t('goals.watch')}
        </a>
      </div>
    </motion.div>
  )
}
