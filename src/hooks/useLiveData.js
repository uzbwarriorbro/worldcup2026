import { useEffect, useRef, useState } from 'react'
import { fetchMatches, fetchStandings } from '../api/footballApi'
import { normalizeMatch, normalizeStandingsGroup, pickHighlighted } from '../api/normalize'
import { mockMatches, mockStandings } from '../data/groups'

const POLL_INTERVAL = 30000

function driftOne(m) {
  if (m.status !== 'LIVE' || Math.random() > 0.35) return m
  const scoreBump = Math.random() < 0.18
  const homeGets = Math.random() < 0.5
  return {
    ...m,
    minute: Math.min(90, (m.minute ?? 0) + 1),
    homeScore: scoreBump && homeGets ? m.homeScore + 1 : m.homeScore,
    awayScore: scoreBump && !homeGets ? m.awayScore + 1 : m.awayScore,
  }
}

export function useLiveMatches() {
  const [matches, setMatches] = useState(() => pickHighlighted(mockMatches))
  const [source, setSource] = useState('loading')
  const [lastUpdated, setLastUpdated] = useState(new Date())
  const demoRef = useRef(mockMatches)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const data = await fetchMatches()
        if (cancelled) return
        setMatches(pickHighlighted(data.map(normalizeMatch)))
        setSource('live')
        setLastUpdated(new Date())
      } catch (err) {
        if (cancelled) return
        console.warn("Football API mavjud emas, demo ma'lumotlar ko'rsatilmoqda:", err.message)
        demoRef.current = demoRef.current.map(driftOne)
        setMatches(pickHighlighted(demoRef.current))
        setSource('demo')
        setLastUpdated(new Date())
      }
    }

    load()
    const id = setInterval(load, POLL_INTERVAL)
    return () => {
      cancelled = true
      clearInterval(id)
    }
  }, [])

  return { matches, source, lastUpdated }
}

export function useLiveStandings() {
  const [standings, setStandings] = useState(mockStandings)
  const [source, setSource] = useState('loading')

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const data = await fetchStandings()
        if (cancelled) return
        const totalGroups = data.filter((g) => g.type === 'TOTAL' && g.group)
        setStandings(totalGroups.map(normalizeStandingsGroup))
        setSource('live')
      } catch (err) {
        if (cancelled) return
        console.warn("Football API mavjud emas, demo jadval ko'rsatilmoqda:", err.message)
        setStandings(mockStandings)
        setSource('demo')
      }
    }

    load()
    const id = setInterval(load, POLL_INTERVAL)
    return () => {
      cancelled = true
      clearInterval(id)
    }
  }, [])

  return { standings, source }
}
