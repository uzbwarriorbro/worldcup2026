import { useTranslation } from 'react-i18next'
import MatchCard from '../components/MatchCard'
import StandingsTable from '../components/StandingsTable'
import { useLiveMatches, useLiveStandings } from '../hooks/useLiveData'
import './Matches.css'

export default function Matches() {
  const { t } = useTranslation()
  const { matches, source, lastUpdated } = useLiveMatches()
  const { standings } = useLiveStandings()

  return (
    <div className="page matches-page">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">
            <span className="dot-live" /> {t('live.badge')}
          </span>
          <h1 className="section-title">{t('live.title')}</h1>
          <p className="section-subtitle">{t('live.subtitle')}</p>
          {source === 'demo' && <p className="api-note">{t('live.error')}</p>}
          <p className="updated-note">
            {t('live.updated')}: {lastUpdated.toLocaleTimeString()}
          </p>
        </div>

        <div className="match-grid">
          {matches.map((m, i) => (
            <MatchCard match={m} index={i} key={m.id} />
          ))}
        </div>

        <div className="section-head" style={{ marginTop: 70 }}>
          <h2 className="section-title" style={{ fontSize: 30 }}>
            {t('live.groups')}
          </h2>
        </div>
        <div className="standings-grid">
          {standings.map((g) => (
            <StandingsTable data={g} key={g.group} />
          ))}
        </div>
      </div>
    </div>
  )
}
