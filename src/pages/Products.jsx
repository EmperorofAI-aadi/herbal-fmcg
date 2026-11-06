import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner.jsx'
import Reveal from '../components/Reveal.jsx'
import ProductCard from '../components/ProductCard.jsx'
import ProductArt from '../components/ProductArt.jsx'
import { products, categories, categoryNames } from '../data/products.js'
import { whatsappLink, site } from '../data/site.js'

/*
  🧴 प्रोडक्ट्स पेज
  - ऊपर छोटे बटनों से श्रेणी (कैटेगरी) बदलें: सब / बाल / त्वचा / घर
  - "विस्तार देखें" दबाने पर पूरी जानकारी वाली खिड़की (पॉप-अप) खुलती है
  - हम डिलीवरी नहीं करते — इसकी सूचना नीचे साफ लिखी है
*/

export default function Products() {
  const [cat, setCat] = useState('all')
  const [detail, setDetail] = useState(null)

  const list = cat === 'all' ? products : products.filter((p) => p.category === cat)

  // पॉप-अप खुला हो तो पीछे का पेज स्क्रॉल बंद कर दो
  useEffect(() => {
    document.body.style.overflow = detail ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [detail])

  return (
    <>
      <PageBanner
        kicker="हमारा सामान"
        title="7 प्रोडक्ट्स, एक ही वादा — शुद्ध प्रकृति"
        sub="हर प्रोडक्ट 100% जड़ी-बूटियों से, बिना एक बूंद केमिकल के। कीमतें ईमानदार, गुणवत्ता राजवाड़े जैसी।"
      />

      <section className="section">
        <div className="container">
          {/* श्रेणी बदलने वाले बटन */}
          <Reveal className="filter-row">
            {categories.map((c) => (
              <button
                key={c.id}
                className={`filter-chip ${cat === c.id ? 'active' : ''}`}
                onClick={() => setCat(c.id)}
              >
                {c.label}
              </button>
            ))}
          </Reveal>

          {/* प्रोडक्ट्स की झुर्री (ग्रिड) */}
          <div className="product-grid">
            {list.map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <ProductCard p={p} onDetails={setDetail} />
              </Reveal>
            ))}
          </div>

          {/* डिलीवरी की सूचना */}
          <Reveal className="notice-band">
            <span className="notice-icon">🏬</span>
            <div>
              <strong>हम ऑनलाइन डिलीवरी नहीं करते।</strong>
              <p>
                प्रोडक्ट लेने के 2 आसान तरीके — (1) हमारे स्टोर पर आएं, (2) नीचे संपर्क करें और
                नज़दीकी दुकान की जानकारी लें।
              </p>
            </div>
            <Link to="/contact" className="btn btn-gold">संपर्क करें</Link>
          </Reveal>
        </div>
      </section>

      {/* ====== पूरी जानकारी की खिड़की (पॉप-अप) ====== */}
      {detail && (
        <div className="modal-back" onClick={() => setDetail(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setDetail(null)} aria-label="बंद करें">✕</button>

            <div className="modal-art" style={{ background: `linear-gradient(165deg, ${detail.color}26, ${detail.color}08)` }}>
              <ProductArt type={detail.art} color={detail.color} className="modal-img" />
            </div>

            <div className="modal-body">
              <span className="product-cat">{categoryNames[detail.category]}</span>
              <h3>{detail.name}</h3>
              <p className="modal-tagline">{detail.tagline}</p>

              <div className="price-row">
                <span className="price">₹{detail.price}</span>
                <span className="mrp">₹{detail.mrp}</span>
                <span className="size">• {detail.size}</span>
              </div>

              <p className="modal-desc">{detail.desc}</p>

              <h4>✅ फायदे</h4>
              <ul className="benefit-list">
                {detail.benefits.map((b) => <li key={b}>{b}</li>)}
              </ul>

              <h4>🌿 किन चीज़ों से बना</h4>
              <div className="chips">
                {detail.ingredients.map((i) => <span key={i} className="chip">{i}</span>)}
              </div>

              <div className="modal-btns">
                <a
                  className="btn btn-gold"
                  href={whatsappLink(`नमस्ते! मुझे ${detail.name} (₹${detail.price}) के बारे में जानकारी चाहिए।`)}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp पर पूछें
                </a>
                <a className="btn btn-outline" href={`tel:${site.phoneLink}`}>📞 कॉल करें</a>
              </div>

              <p className="modal-note">※ डिलीवरी उपलब्ध नहीं — स्टोर से खरीदें।</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
