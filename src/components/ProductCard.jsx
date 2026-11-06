import { Link } from 'react-router-dom'
import ProductArt from './ProductArt.jsx'
import { categoryNames } from '../data/products.js'

/*
  🃏 एक प्रोडक्ट का कार्ड। यही कार्ड होम पेज और प्रोडक्ट्स पेज — दोनों जगह इस्तेमाल होता है।
  "onDetails" दिया तो बटन दबाने पर पूरी जानकारी वाली खिड़की (पॉप-अप) खुलेगी।
*/

export default function ProductCard({ p, onDetails }) {
  return (
    <article className="product-card">
      <div
        className="product-art-area"
        style={{ background: `linear-gradient(165deg, ${p.color}22, ${p.color}06)` }}
      >
        {p.tag && <span className="product-tag">{p.tag}</span>}
        <ProductArt type={p.art} color={p.color} className="card-art" />
      </div>

      <div className="product-body">
        <span className="product-cat">{categoryNames[p.category]}</span>
        <h3>{p.name}</h3>
        <p className="product-tagline">{p.tagline}</p>

        <div className="chips">
          {p.ingredients.slice(0, 3).map((i) => (
            <span key={i} className="chip">{i}</span>
          ))}
        </div>

        <div className="price-row">
          <span className="price">₹{p.price}</span>
          <span className="mrp">₹{p.mrp}</span>
          <span className="size">• {p.size}</span>
        </div>

        <div className="product-btns">
          {onDetails ? (
            <button className="btn btn-gold" onClick={() => onDetails(p)}>
              विस्तार देखें
            </button>
          ) : (
            <Link to="/products" className="btn btn-gold">विस्तार देखें</Link>
          )}
          <Link to="/contact" className="btn btn-outline">संपर्क करें</Link>
        </div>
      </div>
    </article>
  )
}
