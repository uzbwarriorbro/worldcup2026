import { useMemo } from 'react'
import './CrowdField.css'

const COLORS = ['#ffd23f', '#21e786', '#2ce0ff', '#ffffff', '#ff3b5c']

export default function CrowdField({ rows = 6, perRow = 34 }) {
  const dots = useMemo(() => {
    const list = []
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < perRow; c++) {
        list.push({
          id: `${r}-${c}`,
          left: (c / (perRow - 1)) * 100,
          rowIndex: r,
          delay: Math.random() * 3,
          duration: 1.4 + Math.random() * 1.8,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          size: 3 + Math.random() * 3,
        })
      }
    }
    return list
  }, [rows, perRow])

  return (
    <div className="crowd-field" aria-hidden="true">
      {Array.from({ length: rows }).map((_, r) => (
        <div className="crowd-row" key={r} style={{ '--row': r }}>
          {dots
            .filter((d) => d.rowIndex === r)
            .map((d) => (
              <span
                key={d.id}
                className="crowd-dot"
                style={{
                  left: `${d.left}%`,
                  '--dot-color': d.color,
                  width: d.size,
                  height: d.size,
                  animationDelay: `${d.delay}s`,
                  animationDuration: `${d.duration}s`,
                }}
              />
            ))}
        </div>
      ))}
    </div>
  )
}
