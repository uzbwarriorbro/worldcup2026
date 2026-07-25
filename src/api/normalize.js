// Football-data.org (haqiqiy) va mahalliy demo ma'lumotlarni bitta umumiy ko'rinishga keltiradi

const STAGE_LABELS = {
  GROUP_STAGE: { uz: 'Guruh bosqichi', ru: 'Групповой этап' },
  ROUND_OF_32: { uz: "1/16 final", ru: '1/16 финала' },
  LAST_32: { uz: "1/16 final", ru: '1/16 финала' },
  ROUND_OF_16: { uz: "1/8 final", ru: '1/8 финала' },
  LAST_16: { uz: "1/8 final", ru: '1/8 финала' },
  QUARTER_FINALS: { uz: 'Chorak final', ru: 'Четвертьфинал' },
  SEMI_FINALS: { uz: 'Yarim final', ru: 'Полуфинал' },
  THIRD_PLACE: { uz: "3-o'rin uchun", ru: 'Матч за 3-е место' },
  FINAL: { uz: 'Final', ru: 'Финал' },
}

export function stageLabel(stage, lang) {
  const entry = STAGE_LABELS[stage]
  if (!entry) return stage ?? ''
  return entry[lang] ?? entry.uz
}

const STATUS_MAP = {
  IN_PLAY: 'LIVE',
  PAUSED: 'LIVE',
  SUSPENDED: 'LIVE',
  FINISHED: 'FINISHED',
  AWARDED: 'FINISHED',
  SCHEDULED: 'SCHEDULED',
  TIMED: 'SCHEDULED',
  POSTPONED: 'SCHEDULED',
  CANCELLED: 'SCHEDULED',
}

function normTeam(t) {
  if (!t) return { name: { uz: '?', ru: '?' } }
  const label = t.shortName || t.name
  return { id: t.id, name: { uz: label, ru: label }, crest: t.crest, tla: t.tla }
}

export function normalizeMatch(m) {
  const rawGroup = m.group
  const group = rawGroup ? rawGroup.replace('GROUP_', '').replace('Group ', '') : null
  return {
    id: `api-${m.id}`,
    group,
    stage: m.stage,
    status: STATUS_MAP[m.status] || 'SCHEDULED',
    minute: m.minute ?? null,
    utcDate: m.utcDate,
    home: normTeam(m.homeTeam),
    away: normTeam(m.awayTeam),
    homeScore: m.score?.fullTime?.home ?? null,
    awayScore: m.score?.fullTime?.away ?? null,
  }
}

export function normalizeStandingsGroup(g) {
  return {
    group: (g.group || '').replace('Group ', ''),
    rows: (g.table || []).map((r) => {
      const label = r.team.shortName || r.team.name
      return {
        id: r.team.id,
        name: { uz: label, ru: label },
        crest: r.team.crest,
        played: r.playedGames,
        win: r.won,
        draw: r.draw,
        loss: r.lost,
        gf: r.goalsFor,
        ga: r.goalsAgainst,
        gd: r.goalDifference,
        pts: r.points,
      }
    }),
  }
}

// Jonli o'yinlarni birinchi, so'ng yaqin kelgusi va so'nggi yakunlangan o'yinlarni ko'rsatish uchun saralaydi
export function pickHighlighted(matches) {
  const live = matches.filter((m) => m.status === 'LIVE')
  const upcoming = matches
    .filter((m) => m.status === 'SCHEDULED')
    .sort((a, b) => new Date(a.utcDate) - new Date(b.utcDate))
    .slice(0, 6)
  const recent = matches
    .filter((m) => m.status === 'FINISHED')
    .sort((a, b) => new Date(b.utcDate) - new Date(a.utcDate))
    .slice(0, 6)
  return [...live, ...upcoming, ...recent]
}
