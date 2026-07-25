import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './ReactionBar.css'

const EMOJIS = ['🔥', '⚽', '😱', '🎉', '👏', '💪', '🏆', '❤️']

let uid = 0

export default function ReactionBar() {
  const [reactions, setReactions] = useState([])
  const timerRef = useRef(null)

  useEffect(() => {
    timerRef.current = setInterval(() => {
      const id = uid++
      const emoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)]
      const left = 10 + Math.random() * 80
      setReactions((prev) => [...prev.slice(-14), { id, emoji, left }])
    }, 550)
    return () => clearInterval(timerRef.current)
  }, [])

  return (
    <div className="reaction-bar" aria-hidden="true">
      <AnimatePresence>
        {reactions.map((r) => (
          <motion.span
            key={r.id}
            className="reaction-emoji"
            style={{ left: `${r.left}%` }}
            initial={{ y: 0, opacity: 0, scale: 0.5 }}
            animate={{ y: -220, opacity: [0, 1, 1, 0], scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.6, ease: 'easeOut' }}
            onAnimationComplete={() =>
              setReactions((prev) => prev.filter((x) => x.id !== r.id))
            }
          >
            {r.emoji}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  )
}
