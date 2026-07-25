import { useTranslation } from 'react-i18next'
import FlagIcon from './FlagIcon'
import './StandingsTable.css'

export default function StandingsTable({ data }) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language

  if (!data || !data.rows || data.rows.length === 0) return null

  return (
    <div className="standings-table glass-card">
      <div className="standings-header">
        <span className="standings-group-badge">
          {t('live.group')} {data.group}
        </span>
      </div>
      <table>
        <thead>
          <tr>
            <th className="col-team">{t('live.team')}</th>
            <th>{t('live.played')}</th>
            <th>{t('live.win')}</th>
            <th>{t('live.draw')}</th>
            <th>{t('live.loss')}</th>
            <th>{t('live.gf')}</th>
            <th>{t('live.ga')}</th>
            <th>{t('live.gd')}</th>
            <th className="col-pts">{t('live.pts')}</th>
          </tr>
        </thead>
        <tbody>
          {data.rows.map((r, idx) => (
            <tr key={r.id} className={idx < 2 ? 'is-qualified' : ''}>
              <td className="col-team">
                <span className="rank">{idx + 1}</span>
                {r.crest ? (
                  <img className="flag" src={r.crest} alt="" />
                ) : (
                  <FlagIcon code={r.flagCode} className="flag" />
                )}
                <span className="name">{r.name[lang] ?? r.name.uz}</span>
              </td>
              <td>{r.played}</td>
              <td>{r.win}</td>
              <td>{r.draw}</td>
              <td>{r.loss}</td>
              <td>{r.gf}</td>
              <td>{r.ga}</td>
              <td>{r.gd > 0 ? `+${r.gd}` : r.gd}</td>
              <td className="col-pts">{r.pts}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
