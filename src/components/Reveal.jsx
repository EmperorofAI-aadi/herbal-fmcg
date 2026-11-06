import { useEffect, useRef, useState } from 'react'

/*
  ✨ Reveal = स्क्रॉल करते ही चीज़ें उपर से हल्के से उभरती हैं (फीके से साफ)।
  इसे किसी भी हिस्से के चारों ओर <Reveal> ... </Reveal> लगाना है — बस।
*/
export default function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const watcher = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true)
          watcher.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    watcher.observe(el)
    return () => watcher.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${show ? 'in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
