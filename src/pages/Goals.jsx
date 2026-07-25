import { useTranslation } from 'react-i18next'
import GoalCard from '../components/GoalCard'
import { goals } from '../data/goals'
import './Goals.css'

export default function Goals() {
  const { t } = useTranslation()

  return (
    <div className="page goals-page">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{t('nav.goals')}</span>
          <h1 className="section-title">{t('goals.title')}</h1>
          <p className="section-subtitle">{t('goals.subtitle')}</p>
        </div>
        <div className="goal-list">
          {goals.map((g, i) => (
            <GoalCard goal={g} index={i} key={g.id} />
          ))}
        </div>
      </div>
    </div>
  )
}
