import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { getTeamById } from '../data/teams'
import PlayerCard from '../components/PlayerCard'
import FlagIcon from '../components/FlagIcon'
import './TeamDetail.css'

export default function TeamDetail() {
  const { teamId } = useParams()
  const { t, i18n } = useTranslation()
  const lang = i18n.language
  const team = getTeamById(teamId)

  if (!team) {
    return (
      <div className="page container">
        <p>404</p>
        <Link to="/teams" className="btn btn-ghost">
          {t('teams.back')}
        </Link>
      </div>
    )
  }

  const keyPlayer = team.squad.find((p) => p.id === team.keyPlayerId)

  return (
    <div className="page team-detail">
      <div
        className="team-hero"
        style={{
          background: `linear-gradient(135deg, ${team.colors?.primary}22, ${team.colors?.secondary}11)`,
        }}
      >
        <div className="container">
          <Link to="/teams" className="back-link">
            ← {t('teams.back')}
          </Link>
          <motion.div
            className="team-hero-inner"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FlagIcon code={team.flagCode} className="team-hero-flag" />
            <h1 className="team-hero-name">{team.name[lang] ?? team.name.uz}</h1>
            <div className="team-hero-tags">
              <span className="pill pill-scheduled">{t('live.group')} {team.group}</span>
              <span className="pill pill-finished">{team.confederation}</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container">
        <div className="team-info-grid">
          <div className="glass-card team-info-card">
            <span className="meta-label">{t('teams.coach')}</span>
            <span className="meta-value">{team.coach[lang] ?? team.coach.uz}</span>
          </div>
          <div className="glass-card team-info-card">
            <span className="meta-label">{t('teams.ranking')}</span>
            <span className="meta-value">#{team.fifaRanking}</span>
          </div>
          <div className="glass-card team-info-card">
            <span className="meta-label">{t('teams.titles')}</span>
            <span className="meta-value">{team.titles}</span>
          </div>
        </div>

        <div className="section-head team-about-head">
          <h2 className="section-title" style={{ fontSize: 26 }}>
            {t('teams.about')}
          </h2>
        </div>
        <p className="team-about-text">{team.about[lang] ?? team.about.uz}</p>

        {keyPlayer && (
          <div className="key-player-banner glass-card">
            <span className="eyebrow">{t('teams.keyPlayer')}</span>
            <h3>{keyPlayer.name}</h3>
            <p>{keyPlayer.bio[lang] ?? keyPlayer.bio.uz}</p>
          </div>
        )}

        <div className="section-head team-squad-head">
          <h2 className="section-title" style={{ fontSize: 26 }}>
            {t('teams.squad')}
          </h2>
        </div>
        <div className="squad-grid">
          {team.squad.map((player, i) => (
            <PlayerCard player={player} index={i} key={player.id} accentColor={team.colors?.primary} />
          ))}
        </div>
      </div>
    </div>
  )
}
