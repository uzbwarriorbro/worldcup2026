import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import FlagIcon from './FlagIcon'
import { stageLabel } from '../api/normalize'
import './MatchCard.css'

function TeamBadge({ team, lang, align }) {
  const label = team?.name?.[lang] ?? team?.name?.uz ?? '?'
  const badge = team?.crest ? (
    <img className="match-flag" src={team.crest} alt="" />
  ) : (
    <FlagIcon code={team?.flagCode} className="match-flag" />
  )

  if (align === 'right') {
    return (
      <div className="match-team match-team-away">
        <span className="match-team-name">{label}</span>
        {badge}
      </div>
    )
  }

  return (
    <div className="match-team">
      {badge}
      <span className="match-team-name">{label}</span>
    </div>
  )
}

export default function MatchCard({ match, index = 0 }) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language

  if (!match?.home || !match?.away) return null

  const isLive = match.status === 'LIVE'
  const isFinished = match.status === 'FINISHED'
  const hasScore = match.homeScore !== null && match.homeScore !== undefined

  const dateLabel =
    !isLive && !isFinished && match.utcDate
      ? new Date(match.utcDate).toLocaleString(lang === 'ru' ? 'ru-RU' : 'uz-UZ', {
          day: '2-digit',
          month: 'short',
          hour: '2-digit',
          minute: '2-digit',
        })
      : null

  return (
    <motion.div
      className={`match-card glass-card ${isLive ? 'is-live' : ''}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
    >
      <div className="match-card-top">
        <span className="match-group">
          {match.group ? `${t('live.group')} ${match.group}` : stageLabel(match.stage, lang)}
        </span>
        {isLive && (
          <span className="pill pill-live">
            <span className="dot-live" /> {t('live.live_now')}
            {match.minute ? ` ${match.minute}'` : ''}
          </span>
        )}
        {isFinished && <span className="pill pill-finished">{t('live.finished')}</span>}
        {!isLive && !isFinished && <span className="pill pill-scheduled">{t('live.scheduled')}</span>}
      </div>

      <div className="match-card-body">
        <TeamBadge team={match.home} lang={lang} />

        <div className="match-score">
          {hasScore ? (
            <>
              <span className={match.homeScore > match.awayScore ? 'score-lead' : ''}>{match.homeScore}</span>
              <span className="score-sep">:</span>
              <span className={match.awayScore > match.homeScore ? 'score-lead' : ''}>{match.awayScore}</span>
            </>
          ) : (
            <span className="score-vs">{t('common.vs')}</span>
          )}
        </div>

        <TeamBadge team={match.away} lang={lang} align="right" />
      </div>

      {dateLabel && <div className="match-date">{dateLabel}</div>}
    </motion.div>
  )
}
