import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

/*
  🔝 ऊपर वाला मेन्यू (Navbar)।
  - स्क्रॉल करने पर हल्का सा परछाई के साथ चिपक जाता है
  - मोबाइल पर ☰ (हैमबर्गर) बटन से मेन्यू खुलता है
*/

const LINKS = [
  { to: '/', label: 'होम' },
  { to: '/products', label: 'प्रोडक्ट्स' },
  { to: '/about', label: 'हमारे बारे में' },
  { to: '/contact', label: 'संपर्क' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        {/* लोगो */}
        <Link to="/" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22">
              <path
                d="M12 2C6 8 4 13 4 16a8 8 0 0 0 16 0c0-3-2-8-8-14z"
                fill="#07231B"
              />
              <path d="M12 7v13" stroke="#C9A227" strokeWidth="1.4" />
            </svg>
          </span>
          <span className="logo-text">
            Prakriti<span>Glow</span>
          </span>
        </Link>

        {/* मेन्यू लिंक */}
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-gold nav-cta" onClick={() => setOpen(false)}>
            संपर्क करें
          </Link>
        </nav>

        {/* मोबाइल का ☰ बटन */}
        <button
          className={`hamburger ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="मेन्यू खोलें या बंद करें"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
