import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './Header.css'

export default function Header() {
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/matches', label: t('nav.matches') },
    { to: '/teams', label: t('nav.teams') },
    { to: '/facts', label: t('nav.facts') },
    { to: '/goals', label: t('nav.goals') },
  ]

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-inner">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-ball">⚽</span>
          <span className="brand-text">
            WC<span className="brand-year">2026</span>
          </span>
        </NavLink>

        <nav className={`main-nav ${open ? 'is-open' : ''}`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <div className="lang-switch">
            <button
              className={i18n.language === 'uz' ? 'is-active' : ''}
              onClick={() => i18n.changeLanguage('uz')}
            >
              UZ
            </button>
            <button
              className={i18n.language === 'ru' ? 'is-active' : ''}
              onClick={() => i18n.changeLanguage('ru')}
            >
              RU
            </button>
          </div>
          <button className="burger" onClick={() => setOpen((v) => !v)} aria-label="menu">
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
