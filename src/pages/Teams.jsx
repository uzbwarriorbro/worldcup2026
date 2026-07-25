import { useTranslation } from 'react-i18next'
import TeamCard from '../components/TeamCard'
import { teams } from '../data/teams'
import './Teams.css'

export default function Teams() {
  const { t } = useTranslation()

  return (
    <div className="page teams-page">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{t('nav.teams')}</span>
          <h1 className="section-title">{t('teams.title')}</h1>
          <p className="section-subtitle">{t('teams.subtitle')}</p>
        </div>
        <div className="team-grid">
          {teams.map((team, i) => (
            <TeamCard team={team} index={i} key={team.id} />
          ))}
        </div>
      </div>
    </div>
  )
}
