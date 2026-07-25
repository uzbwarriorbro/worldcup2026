import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import CrowdField from './CrowdField'
import ConfettiBurst from './ConfettiBurst'
import ReactionBar from './ReactionBar'
import SnakeDecor from './SnakeDecor'
import './Hero.css'

export default function Hero() {
  const { t } = useTranslation()

  const stats = [
    { value: '48', label: t('hero.stat1') },
    { value: '16', label: t('hero.stat2') },
    { value: '104', label: t('hero.stat3') },
    { value: '16', label: t('hero.stat4') },
  ]

  return (
    <section className="hero">
      <div className="hero-floodlight fl-left" />
      <div className="hero-floodlight fl-right" />
      <div className="hero-stadium">
        <CrowdField />
        <div className="pitch-glow" />
        <SnakeDecor />
      </div>
      <ConfettiBurst count={26} />
      <ReactionBar />

      <div className="container hero-content">
        <motion.div
          className="eyebrow"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="dot-live" /> {t('hero.badge')}
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="hero-title-line hero-title-gold">{t('hero.title1')}</span>
          <span className="hero-title-line">{t('hero.title2')}</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.p
          className="hero-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          {t('hero.desc')}
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <Link to="/matches" className="btn btn-primary">
            {t('hero.cta1')}
          </Link>
          <Link to="/teams" className="btn btn-ghost">
            {t('hero.cta2')}
          </Link>
        </motion.div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          {stats.map((s) => (
            <div className="hero-stat" key={s.label}>
              <span className="hero-stat-value">{s.value}</span>
              <span className="hero-stat-label">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="hero-fade" />
    </section>
  )
}
