/*
  ⬆️ नीचे दाईं तरफ छोटा गोल बटन — दबाते ही पेज ऊपर से शुरू हो जाए।
  सिर्फ तब दिखता है जब थोड़ा नीचे स्क्रॉल किया हो।
*/

import { useState, useEffect } from 'react'

export default function ScrollTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!show) return null

  return (
    <button
      className="scroll-top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="ऊपर जाएं"
    >
      ↑
    </button>
  )
}
