import { useTranslation } from 'react-i18next'
import './Footer.css'

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand-ball">⚽</span>
          <span className="brand-text">
            WC<span className="brand-year">2026</span>
          </span>
        </div>
        <p className="footer-desc">{t('footer.desc')}</p>

        <div className="footer-social">
          <a
            href="https://t.me/avazxon_uzb"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="Telegram"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M21.05 3.64 2.98 10.66c-1.23.49-1.22 1.18-.22 1.48l4.63 1.44 1.79 5.48c.22.6.11.85.75.85.5 0 .72-.23.99-.5l2.37-2.28 4.68 3.45c.86.48 1.48.23 1.7-.8l3.07-14.4c.32-1.26-.48-1.83-1.69-1.74Zm-12.5 10.4-1.03-3.62 8.36-6.13c.4-.28.76-.13.46.16l-7.79 9.6Z" />
            </svg>
          </a>

          <a
            href="https://instagram.com/avazxon.bro"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>

        <div className="footer-bottom">
          <span>{t('footer.madeWith')} ❤️</span>
          <span>© 2026 · {t('footer.rights')}</span>
        </div>
      </div>
    </footer>
  )
}
