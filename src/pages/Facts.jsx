import { useTranslation } from 'react-i18next'
import FactCard from '../components/FactCard'
import { facts } from '../data/facts'
import './Facts.css'

export default function Facts() {
  const { t } = useTranslation()

  return (
    <div className="page facts-page">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{t('nav.facts')}</span>
          <h1 className="section-title">{t('facts.title')}</h1>
          <p className="section-subtitle">{t('facts.subtitle')}</p>
        </div>
        <div className="fact-grid">
          {facts.map((f, i) => (
            <FactCard fact={f} index={i} key={f.id} />
          ))}
        </div>
      </div>
    </div>
  )
}
