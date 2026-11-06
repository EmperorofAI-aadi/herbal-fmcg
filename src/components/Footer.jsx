import { Link } from 'react-router-dom'
import { site } from '../data/site.js'
import { categories, products } from '../data/products.js'

/*
  🧱 नीचे वाला हिस्सा (Footer) — वेबसाइट का "पिछला दरवाज़ा"।
  यहां लिंक, संपर्क और छोटी-मोटी जानकारी रहती है।
*/

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* ब्रांड की झलक */}
        <div className="footer-brand">
          <div className="logo-text footer-logo">
            Prakriti<span>Glow</span>
          </div>
          <p>
            100% हर्बल और 0% केमिकल — दादी-नानी के आयुर्वेदिक तरीकों से बने
            रोज़मर्रा के प्रोडक्ट्स। प्रकृति की देन, आपके घर तक।
          </p>
          <div className="footer-badges">
            <span>🌿 100% हर्बल</span>
            <span>🚫 0% केमिकल</span>
          </div>
        </div>

        {/* जल्दी लिंक */}
        <div>
          <h4>जल्दी लिंक</h4>
          <ul>
            <li><Link to="/">होम</Link></li>
            <li><Link to="/products">प्रोडक्ट्स</Link></li>
            <li><Link to="/about">हमारे बारे में</Link></li>
            <li><Link to="/contact">संपर्क करें</Link></li>
          </ul>
        </div>

        {/* प्रोडक्ट्स */}
        <div>
          <h4>प्रोडक्ट्स</h4>
          <ul>
            {products.slice(0, 5).map((p) => (
              <li key={p.id}>
                <Link to="/products">{p.name}</Link>
              </li>
            ))}
            <li>
              <Link to="/products">…और भी ({categories[0].label})</Link>
            </li>
          </ul>
        </div>

        {/* संपर्क */}
        <div>
          <h4>संपर्क</h4>
          <ul className="footer-contact">
            <li>📞 <a href={`tel:${site.phoneLink}`}>{site.phone}</a></li>
            <li>✉️ <a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li>📍 {site.address}</li>
            <li>🕘 {site.hours}</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <span>© 2026 PrakritiGlow — सभी अधिकार सुरक्षित</span>
          <span>प्रकृति से, प्यार से 💚</span>
        </div>
      </div>
    </footer>
  )
}
