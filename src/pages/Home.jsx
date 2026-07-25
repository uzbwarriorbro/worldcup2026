import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import MatchCard from '../components/MatchCard'
import TeamCard from '../components/TeamCard'
import FactCard from '../components/FactCard'
import GoalCard from '../components/GoalCard'
import { useLiveMatches } from '../hooks/useLiveData'
import { teams } from '../data/teams'
import { facts } from '../data/facts'
import { goals } from '../data/goals'
import './Home.css'

export default function Home() {
  const { t } = useTranslation()
  const { matches, source, lastUpdated } = useLiveMatches()
  const preview = matches.slice(0, 4)
  const featuredTeams = teams.slice(0, 6)

  return (
    <>
      <Hero />

      <section className="section live-preview">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">
              <span className="dot-live" /> {t('live.badge')}
            </span>
            <h2 className="section-title">{t('live.title')}</h2>
            <p className="section-subtitle">{t('live.subtitle')}</p>
            {source === 'demo' && <p className="api-note">{t('live.error')}</p>}
            <p className="updated-note">
              {t('live.updated')}: {lastUpdated.toLocaleTimeString()}
            </p>
          </div>
          <div className="match-grid">
            {preview.map((m, i) => (
              <MatchCard match={m} index={i} key={m.id} />
            ))}
          </div>
          <div className="section-cta">
            <Link to="/matches" className="btn btn-ghost">
              {t('nav.matches')} →
            </Link>
          </div>
        </div>
      </section>

      <section className="section teams-preview">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{t('nav.teams')}</span>
            <h2 className="section-title">{t('teams.title')}</h2>
            <p className="section-subtitle">{t('teams.subtitle')}</p>
          </div>
          <div className="team-grid">
            {featuredTeams.map((team, i) => (
              <TeamCard team={team} index={i} key={team.id} />
            ))}
          </div>
          <div className="section-cta">
            <Link to="/teams" className="btn btn-ghost">
              {t('nav.teams')} →
            </Link>
          </div>
        </div>
      </section>

      <section className="section facts-preview">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{t('nav.facts')}</span>
            <h2 className="section-title">{t('facts.title')}</h2>
            <p className="section-subtitle">{t('facts.subtitle')}</p>
          </div>
          <div className="fact-grid">
            {facts.slice(0, 6).map((f, i) => (
              <FactCard fact={f} index={i} key={f.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="section goals-preview">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{t('nav.goals')}</span>
            <h2 className="section-title">{t('goals.title')}</h2>
            <p className="section-subtitle">{t('goals.subtitle')}</p>
          </div>
          <div className="goal-list">
            {goals.slice(0, 3).map((g, i) => (
              <GoalCard goal={g} index={i} key={g.id} />
            ))}
          </div>
          <div className="section-cta">
            <Link to="/goals" className="btn btn-ghost">
              {t('nav.goals')} →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
