import { teams } from './teams'

// Guruh bosqichi uchun qo'shimcha (qisqacha) jamoalar — faqat jadval uchun, to'liq tarkibsiz
export const stubTeams = [
  { id: 'ecu', flagCode: 'ec', name: { uz: 'Ekvador', ru: 'Эквадор' }, group: 'A' },
  { id: 'bel', flagCode: 'be', name: { uz: 'Belgiya', ru: 'Бельгия' }, group: 'B' },
  { id: 'cro', flagCode: 'hr', name: { uz: 'Xorvatiya', ru: 'Хорватия' }, group: 'B' },
  { id: 'col', flagCode: 'co', name: { uz: 'Kolumbiya', ru: 'Колумбия' }, group: 'C' },
  { id: 'uru', flagCode: 'uy', name: { uz: 'Urugvay', ru: 'Уругвай' }, group: 'C' },
  { id: 'par', flagCode: 'py', name: { uz: 'Paragvay', ru: 'Парагвай' }, group: 'C' },
  { id: 'ned', flagCode: 'nl', name: { uz: 'Niderlandiya', ru: 'Нидерланды' }, group: 'D' },
  { id: 'sui', flagCode: 'ch', name: { uz: 'Shveytsariya', ru: 'Швейцария' }, group: 'D' },
  { id: 'mar', flagCode: 'ma', name: { uz: 'Marokash', ru: 'Марокко' }, group: 'D' },
  { id: 'sen', flagCode: 'sn', name: { uz: 'Senegal', ru: 'Сенегал' }, group: 'E' },
  { id: 'aus', flagCode: 'au', name: { uz: 'Avstraliya', ru: 'Австралия' }, group: 'E' },
  { id: 'irn', flagCode: 'ir', name: { uz: 'Eron', ru: 'Иран' }, group: 'E' },
  { id: 'nga', flagCode: 'ng', name: { uz: 'Nigeriya', ru: 'Нигерия' }, group: 'F' },
  { id: 'ksa', flagCode: 'sa', name: { uz: 'Saudiya Arabistoni', ru: 'Саудовская Аравия' }, group: 'F' },
  { id: 'civ', flagCode: 'ci', name: { uz: "Kot-d'Ivuar", ru: "Кот-д'Ивуар" }, group: 'G' },
  { id: 'kor', flagCode: 'kr', name: { uz: 'Janubiy Koreya', ru: 'Южная Корея' }, group: 'G' },
  { id: 'pan', flagCode: 'pa', name: { uz: 'Panama', ru: 'Панама' }, group: 'G' },
  { id: 'pol', flagCode: 'pl', name: { uz: 'Polsha', ru: 'Польша' }, group: 'H' },
  { id: 'egy', flagCode: 'eg', name: { uz: 'Misr', ru: 'Египет' }, group: 'H' },
  { id: 'qat', flagCode: 'qa', name: { uz: 'Qatar', ru: 'Катар' }, group: 'H' },
]

// Guruh jadvali uchun namunaviy (demo) statistika — API mavjud bo'lmaganda ko'rsatiladi
export const mockStandingsStats = {
  bra: { played: 3, win: 3, draw: 0, loss: 0, gf: 8, ga: 2 },
  usa: { played: 3, win: 2, draw: 1, loss: 0, gf: 5, ga: 2 },
  mex: { played: 3, win: 1, draw: 1, loss: 1, gf: 4, ga: 4 },
  ecu: { played: 3, win: 0, draw: 0, loss: 3, gf: 1, ga: 8 },

  fra: { played: 3, win: 3, draw: 0, loss: 0, gf: 9, ga: 1 },
  can: { played: 3, win: 2, draw: 0, loss: 1, gf: 5, ga: 3 },
  bel: { played: 3, win: 1, draw: 0, loss: 2, gf: 3, ga: 5 },
  cro: { played: 3, win: 0, draw: 0, loss: 3, gf: 1, ga: 9 },

  arg: { played: 3, win: 2, draw: 1, loss: 0, gf: 6, ga: 1 },
  col: { played: 3, win: 2, draw: 0, loss: 1, gf: 5, ga: 3 },
  uru: { played: 3, win: 1, draw: 1, loss: 1, gf: 3, ga: 3 },
  par: { played: 3, win: 0, draw: 0, loss: 3, gf: 1, ga: 8 },

  esp: { played: 3, win: 3, draw: 0, loss: 0, gf: 10, ga: 2 },
  ned: { played: 3, win: 2, draw: 0, loss: 1, gf: 6, ga: 3 },
  sui: { played: 3, win: 1, draw: 0, loss: 2, gf: 3, ga: 5 },
  mar: { played: 3, win: 0, draw: 0, loss: 3, gf: 2, ga: 9 },

  eng: { played: 3, win: 2, draw: 1, loss: 0, gf: 5, ga: 2 },
  sen: { played: 3, win: 2, draw: 0, loss: 1, gf: 4, ga: 3 },
  aus: { played: 3, win: 1, draw: 0, loss: 2, gf: 2, ga: 4 },
  irn: { played: 3, win: 0, draw: 1, loss: 2, gf: 2, ga: 4 },

  por: { played: 3, win: 2, draw: 1, loss: 0, gf: 7, ga: 3 },
  jpn: { played: 3, win: 2, draw: 0, loss: 1, gf: 5, ga: 2 },
  nga: { played: 3, win: 1, draw: 0, loss: 2, gf: 3, ga: 5 },
  ksa: { played: 3, win: 0, draw: 1, loss: 2, gf: 1, ga: 6 },

  ger: { played: 3, win: 2, draw: 0, loss: 1, gf: 6, ga: 4 },
  civ: { played: 3, win: 2, draw: 0, loss: 1, gf: 5, ga: 3 },
  kor: { played: 3, win: 1, draw: 0, loss: 2, gf: 3, ga: 4 },
  pan: { played: 3, win: 0, draw: 0, loss: 3, gf: 1, ga: 4 },

  uzb: { played: 3, win: 2, draw: 0, loss: 1, gf: 5, ga: 3 },
  pol: { played: 3, win: 2, draw: 0, loss: 1, gf: 4, ga: 3 },
  egy: { played: 3, win: 1, draw: 0, loss: 2, gf: 3, ga: 4 },
  qat: { played: 3, win: 0, draw: 0, loss: 3, gf: 1, ga: 3 },
}

// Jonli/yakunlangan o'yinlar — API topilmaganda foydalaniladigan demo hisob-kitob (xom format)
const mockMatchesRaw = [
  { id: 'm1', group: 'H', homeId: 'uzb', awayId: 'pol', homeScore: 2, awayScore: 1, status: 'LIVE', minute: 73 },
  { id: 'm2', group: 'A', homeId: 'bra', awayId: 'mex', homeScore: 3, awayScore: 1, status: 'LIVE', minute: 61 },
  { id: 'm3', group: 'C', homeId: 'arg', awayId: 'uru', homeScore: 1, awayScore: 1, status: 'LIVE', minute: 55 },
  { id: 'm4', group: 'D', homeId: 'esp', awayId: 'ned', homeScore: 2, awayScore: 0, status: 'FINISHED', minute: 90 },
  { id: 'm5', group: 'B', homeId: 'fra', awayId: 'can', homeScore: 4, awayScore: 0, status: 'FINISHED', minute: 90 },
  { id: 'm6', group: 'F', homeId: 'por', awayId: 'jpn', homeScore: 2, awayScore: 2, status: 'FINISHED', minute: 90 },
  { id: 'm7', group: 'G', homeId: 'ger', awayId: 'civ', homeScore: 0, awayScore: 0, status: 'SCHEDULED', minute: 0 },
  { id: 'm8', group: 'E', homeId: 'eng', awayId: 'sen', homeScore: 0, awayScore: 0, status: 'SCHEDULED', minute: 0 },
]

export const groupLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

const allLocalTeams = [...teams, ...stubTeams]
const localTeamsById = allLocalTeams.reduce((acc, t) => {
  acc[t.id] = t
  return acc
}, {})

function localTeamRef(id) {
  const t = localTeamsById[id]
  if (!t) return { name: { uz: id, ru: id } }
  return { id: t.id, name: t.name, flagCode: t.flagCode }
}

// Umumiy (API bilan bir xil) formatga keltirilgan demo o'yinlar ro'yxati
export const mockMatches = mockMatchesRaw.map((m) => ({
  id: m.id,
  group: m.group,
  stage: 'GROUP_STAGE',
  status: m.status,
  minute: m.minute,
  utcDate: null,
  home: localTeamRef(m.homeId),
  away: localTeamRef(m.awayId),
  homeScore: m.homeScore,
  awayScore: m.awayScore,
}))

// Umumiy (API bilan bir xil) formatga keltirilgan demo guruh jadvali
export const mockStandings = groupLetters
  .map((letter) => {
    const rows = allLocalTeams
      .filter((t) => t.group === letter)
      .map((t) => {
        const s = mockStandingsStats[t.id] || { played: 0, win: 0, draw: 0, loss: 0, gf: 0, ga: 0 }
        const pts = s.win * 3 + s.draw
        return {
          id: t.id,
          name: t.name,
          flagCode: t.flagCode,
          played: s.played,
          win: s.win,
          draw: s.draw,
          loss: s.loss,
          gf: s.gf,
          ga: s.ga,
          gd: s.gf - s.ga,
          pts,
        }
      })
      .sort((a, b) => b.pts - a.pts || b.gd - a.gd || b.gf - a.gf)
    return { group: letter, rows }
  })
  .filter((g) => g.rows.length > 0)
