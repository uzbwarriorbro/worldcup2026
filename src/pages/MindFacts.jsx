import { useTranslation } from 'react-i18next'
import FactCard from '../components/FactCard'
import { mindFacts } from '../data/mindFacts'
import './Facts.css'

export default function MindFacts() {
  const { t } = useTranslation()

  return (
    <div className="page facts-page">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{t('nav.mindFacts')}</span>
          <h1 className="section-title">{t('mindFacts.title')}</h1>
          <p className="section-subtitle">{t('mindFacts.subtitle')}</p>
        </div>
        <div className="fact-grid">
          {mindFacts.map((f, i) => (
            <FactCard fact={f} index={i} key={f.id} />
          ))}
        </div>
      </div>
    </div>
  )
}
