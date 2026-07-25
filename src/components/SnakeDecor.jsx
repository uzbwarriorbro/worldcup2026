import { useMemo } from 'react'
import { motion } from 'framer-motion'
import './SnakeDecor.css'

const SEGMENT_COUNT = 13

export default function SnakeDecor() {
  const segments = useMemo(
    () =>
      Array.from({ length: SEGMENT_COUNT }).map((_, i) => {
        const t = i / (SEGMENT_COUNT - 1)
        const size = 40 - t * 28
        return { id: i, size, delay: i * 0.09 }
      }),
    [],
  )

  return (
    <div className="snake-decor" aria-hidden="true">
      <div className="snake-body">
        {segments.map((s, i) => (
          <span
            key={s.id}
            className={`snake-segment${i === 0 ? ' snake-head' : ''}`}
            style={{
              width: s.size,
              height: s.size,
              marginLeft: i === 0 ? 0 : -s.size * 0.42,
              animationDelay: `${s.delay}s`,
              zIndex: SEGMENT_COUNT - i,
            }}
          >
            {i === 0 && (
              <>
                <span className="snake-eye snake-eye-l" />
                <span className="snake-eye snake-eye-r" />
                <motion.span
                  className="snake-tongue"
                  animate={{ scaleX: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 1.4, ease: 'easeInOut' }}
                />
              </>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}
