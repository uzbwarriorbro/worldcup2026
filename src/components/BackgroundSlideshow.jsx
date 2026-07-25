import { useEffect, useState } from 'react'
import { bgPhotos } from '../data/bgPhotos'
import './BackgroundSlideshow.css'

const INTERVAL = 6500

export default function BackgroundSlideshow() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % bgPhotos.length)
    }, INTERVAL)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="bg-slideshow" aria-hidden="true">
      {bgPhotos.map((photo, i) => (
        <div
          key={photo.url}
          className={`bg-slide ${i === index ? 'is-active' : ''}`}
          style={{ backgroundImage: `url(${photo.url})` }}
        />
      ))}
      <div className="bg-slideshow-scrim" />
    </div>
  )
}
