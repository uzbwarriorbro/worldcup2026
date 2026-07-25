// Football-data.org API bilan integratsiya (Jahon chempionati — competition code "WC")
//
// - Lokal dev (`npm run dev`): so'rov vite.config.js proksi orqali to'g'ridan-to'g'ri
//   football-data.org'ga boradi. Bunda .env faylidagi VITE_FOOTBALL_API_KEY ishlatiladi.
// - Production (Netlify): so'rov netlify/functions/football-api.js server funksiyasiga
//   yo'naltiriladi, u yerda API kalit (FOOTBALL_API_KEY, Netlify muhit o'zgaruvchisi
//   sifatida) faqat serverda saqlanadi va brauzer kodiga chiqmaydi.
//
// Har ikki holatda ham so'rov muvaffaqiyatsiz tugasa, ilova avtomatik demo rejimga o'tadi.
const API_BASE = '/football-api'
const API_KEY = import.meta.env.VITE_FOOTBALL_API_KEY
const COMPETITION = 'WC'

async function apiFetch(path) {
  const headers = API_KEY ? { 'X-Auth-Token': API_KEY } : {}
  const res = await fetch(`${API_BASE}${path}`, { headers })
  if (!res.ok) {
    throw new Error(`Football API xatosi: ${res.status}`)
  }
  return res.json()
}

export async function fetchStandings() {
  const data = await apiFetch(`/competitions/${COMPETITION}/standings`)
  return data.standings
}

export async function fetchMatches() {
  const data = await apiFetch(`/competitions/${COMPETITION}/matches`)
  return data.matches
}
