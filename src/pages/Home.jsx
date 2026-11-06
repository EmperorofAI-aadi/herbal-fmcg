import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Leaves from '../components/Leaves.jsx'
import ProductArt from '../components/ProductArt.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { products } from '../data/products.js'

/*
  🏠 होम पेज — वेबसाइट का मुख्य दरवाज़ा।
  हिस्से (ऊपर से नीचे):
  1) हीरो — पहली नज़र का धमाका
  2) चलती-फिरती पट्टी (मार्की)
  3) हम अलग क्यों (USP)
  4) बेस्टसेलर प्रोडक्ट्स
  5) तुलना टेबल (हम vs बाज़ारी केमिकल प्रोडक्ट)
  6) हमारे प्रोडक्ट ऐसे बनते हैं (3 स्टेप)
  7) ग्राहकों की बातें
  8) आखिरी अपील (CTA)
*/

const USP = [
  { icon: '🌿', title: 'शुद्ध जड़ी-बूटियां', text: 'हर प्रोडक्ट खेत से तौली गई असली जड़ी-बूटियों से बनता है — कोई मिलावट नहीं।' },
  { icon: '🚫', title: 'केमिकल बिल्कुल नहीं', text: 'ना सल्फेट, ना पैराबेन, ना कृत्रिम रंग या महक। जीरो पर्सेंट, बिल्कुल जीरो।' },
  { icon: '🥣', title: 'घर जैसी विधि', text: 'धीमी आंच, हाथ की पिसाई और पारंपरिक तरीके — जैसे घर में दादी बनाती थीं।' },
  { icon: '🐰', title: 'जानवर-मित्र', text: 'किसी जानवर पर कोई टेस्ट नहीं। प्रकृति से लिया, प्रकृति को सलाम।' },
]

const STEPS = [
  { no: '1', title: 'जड़ी-बूटियों का चुनाव', text: 'किसान भाइयों से सीधे ताज़ी जड़ी-बूटियां। हर चीज़ की जांच-परख के बाद ही स्वीकार।' },
  { no: '2', title: 'पारंपरिक तैयारी', text: 'तांबे के बर्तनों में धीमी आंच पर पकाया जाता है — ताकि जड़ी-बूटियों की ताकत बनी रहे।' },
  { no: '3', title: 'गुणवत्ता की जांच', text: 'हर बैच की जांच होती है — रंग, महक और मुलायमपन। तभी पैकिंग, तभी आप तक।' },
]

const REVIEWS = [
  {
    name: 'सीमा शर्मा',
    city: 'जयपुर',
    stars: 5,
    text: 'भृंगराज ऑयल ने 2 महीने में बालों का झड़ना काफी कम कर दिया। अब घर की सब औरतों ने अपना लिया है!',
  },
  {
    name: 'राहुल वर्मा',
    city: 'दिल्ली',
    stars: 5,
    text: 'आंवला-रीठा शैम्पू से सिरदर्द वाली महक वाले शैम्पू छूट गए। बाल अब सच में मुलायम और काले लगते हैं।',
  },
  {
    name: 'अंजलि मेहता',
    city: 'लखनऊ',
    stars: 5,
    text: 'गुलाब-केसर क्रीम की महक ही कमाल है। सर्दियों में रुखी त्वचा को इसने बचा लिया। बस ऐसा लगता है घर का बना हो।',
  },
]

const COMPARE = [
  { point: 'सामग्री', us: 'असली जड़ी-बूटियां', them: 'केमिकल के नाम (सल्फेट, पैराबेन)' },
  { point: 'कृत्रिम रंग-महक', us: 'बिल्कुल नहीं', them: 'लगभग हर प्रोडक्ट में' },
  { point: 'त्वचा पर असर', us: 'मुलायम और पोषण', them: 'रूखापन और एलर्जी का खतरा' },
  { point: 'महक', us: 'प्राकृतिक — पौधों से', them: 'कृत्रिम फैक्ट्री महक' },
  { point: 'पर्यावरण', us: 'सुरक्षित, जल्दी घुलता है', them: 'नदियों के लिए नुकसान' },
]

export default function Home() {
  const featured = products.filter((p) => p.tag === 'बेस्टसेलर').slice(0, 3)

  return (
    <>
      {/* ============ 1) हीरो सेक्शन ============ */}
      <section className="hero">
        <div className="hero-orbs" aria-hidden="true">
          <span className="orb orb-1" />
          <span className="orb orb-2" />
          <span className="orb orb-3" />
        </div>
        <Leaves />

        <div className="container hero-grid">
          {/* बाईं तरफ: शब्द */}
          <div className="hero-text">
            <span className="hero-badge">🌿 100% हर्बल • 0% केमिकल</span>

            <h1>
              प्रकृति की <span className="gold-text">शक्ति</span>,
              <br />
              आपकी देखभाल में
            </h1>

            <p className="hero-sub">
              हैंड वॉश से हेयर ऑयल तक — हर प्रोडक्ट शुद्ध जड़ी-बूटियों से,
              दादी-नानी के आयुर्वेदिक तरीकों से बना।
              <strong> ना सल्फेट, ना पैराबेन, ना कोई केमिकल।</strong>
            </p>

            <div className="hero-btns">
              <Link to="/products" className="btn btn-gold btn-lg">
                प्रोडक्ट्स देखें →
              </Link>
              <Link to="/about" className="btn btn-outline-light btn-lg">
                हमारी कहानी
              </Link>
            </div>

            <div className="hero-chips">
              <span>✔ केमिकल बिल्कुल नहीं</span>
              <span>✔ पारंपरिक आयुर्वेद</span>
              <span>✔ त्वचा के लिए सुरक्षित</span>
              <span>✔ पर्यावरण-मित्र</span>
            </div>
          </div>

          {/* दाईं तरफ: तैरते हुए प्रोडक्ट */}
          <div className="hero-visual" aria-hidden="true">
            <div className="glow-ring" />
            <div className="hero-art main-art">
              <ProductArt type="shampoo" color="#1B6B50" />
            </div>
            <div className="hero-art float-1">
              <ProductArt type="jar" color="#A8576B" />
            </div>
            <div className="hero-art float-2">
              <ProductArt type="oil" color="#9A6B1F" />
            </div>

            {/* घूमती हुई मोहर (सील) */}
            <svg className="seal" viewBox="0 0 120 120">
              <defs>
                <path id="seal-circle" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
              </defs>
              <circle cx="60" cy="60" r="31" fill="#0B3226" stroke="#C9A227" strokeWidth="1.5" />
              <text x="60" y="66" textAnchor="middle" fontSize="22">🌿</text>
              <text className="seal-text">
                <textPath href="#seal-circle">
                  100% HERBAL • CHEMICAL FREE • AYURVEDIC •
                </textPath>
              </text>
            </svg>
          </div>
        </div>

        {/* आंकड़े-पट्टी */}
        <div className="container">
          <div className="hero-stats">
            <div><strong>7+</strong><span>हर्बल प्रोडक्ट्स</span></div>
            <div><strong>100%</strong><span>प्राकृतिक सामग्री</span></div>
            <div><strong>0%</strong><span>केमिकल</span></div>
            <div><strong>5000+</strong><span>खुश परिवार</span></div>
          </div>
        </div>

        {/* स्क्रॉल करने का संकेत */}
        <div className="scroll-cue" aria-hidden="true">
          <div className="mouse"><span /></div>
          <span className="cue-text">स्क्रॉल करें</span>
        </div>
      </section>

      {/* ============ 2) चलती-फिरती पट्टी ============ */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((n) => (
            <span key={n}>
              100% हर्बल ✦ केमिकल फ्री ✦ आयुर्वेदिक ✦ ना सल्फेट ✦ ना पैराबेन ✦
              प्राकृतिक महक ✦ त्वचा-अनुकूल ✦ पर्यावरण-मित्र ✦&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ============ 3) हम अलग क्यों ============ */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="kicker">हमारा वादा</span>
            <h2>प्रकृति ने दिया, हमने बस तैयार किया</h2>
            <p>
              बाज़ार में हर प्रोडक्ट के पीछे लंबी-लंबी केमिकल की लिस्ट है।
              हमारे प्रोडक्ट के पीछे सिर्फ एक लिस्ट है — <strong>प्रकृति</strong>।
            </p>
          </Reveal>

          <div className="usp-grid">
            {USP.map((u, i) => (
              <Reveal key={u.title} delay={i * 90}>
                <div className="usp-card">
                  <span className="usp-icon">{u.icon}</span>
                  <h3>{u.title}</h3>
                  <p>{u.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 4) बेस्टसेलर प्रोडक्ट्स ============ */}
      <section className="section section-soft">
        <div className="container">
          <Reveal className="section-head">
            <span className="kicker">ग्राहकों की पसंद</span>
            <h2>सबसे ज़्यादा पसंद किए गए</h2>
            <p>हमारे 7 प्रोडक्ट्स में से ये 3 — जिन्हें परिवार सबसे ज्यादा प्यार करते हैं।</p>
          </Reveal>

          <div className="product-grid">
            {featured.map((p, i) => (
              <Reveal key={p.id} delay={i * 100}>
                <ProductCard p={p} />
              </Reveal>
            ))}
          </div>

          <Reveal className="center">
            <Link to="/products" className="btn btn-dark btn-lg">
              सभी 7 प्रोडक्ट्स देखें →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ 5) तुलना टेबल ============ */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="kicker">सच की तुलना</span>
            <h2>PrakritiGlow <span className="gold-text">vs</span> सामान्य बाज़ारी प्रोडक्ट</h2>
            <p>खुद देखिए — फर्क साफ दिखेगा।</p>
          </Reveal>

          <Reveal>
            <div className="table-scroll">
              <table className="compare-table">
                <thead>
                  <tr>
                    <th>देखने की चीज़</th>
                    <th className="us-col">🌿 PrakritiGlow</th>
                    <th>सामान्य केमिकल प्रोडक्ट</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE.map((row) => (
                    <tr key={row.point}>
                      <td className="point">{row.point}</td>
                      <td className="us-col">{row.us}</td>
                      <td>{row.them}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 6) बनने की विधि (3 स्टेप) ============ */}
      <section className="section section-dark">
        <div className="container">
          <Reveal className="section-head">
            <span className="kicker gold">पीछे की तैयारी</span>
            <h2>हमारे प्रोडक्ट ऐसे बनते हैं</h2>
            <p>तीन सोचे-समझे कदम — जैसे घर की रसोई में दादी बनाती थीं।</p>
          </Reveal>

          <div className="steps-grid">
            {STEPS.map((s, i) => (
              <Reveal key={s.no} delay={i * 120}>
                <div className="step-card">
                  <span className="step-no">{s.no}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 7) ग्राहकों की बातें ============ */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="kicker">आपकी बातें</span>
            <h2>परिवारों ने क्या कहा</h2>
          </Reveal>

          <div className="review-grid">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 100}>
                <div className="review-card">
                  <div className="stars">{'★'.repeat(r.stars)}</div>
                  <p>“{r.text}”</p>
                  <div className="review-who">
                    <strong>{r.name}</strong>
                    <span>{r.city}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 8) आखिरी अपील (CTA) ============ */}
      <section className="cta-band">
        <div className="container cta-inner">
          <Reveal>
            <h2>अपनी त्वचा और बालों को दें <span className="gold-text">प्रकृति का प्यार</span></h2>
            <p>एक बार इस्तेमाल करके तो देखिए — फर्क आपके हाथ खुद महसूस करेंगे।</p>
            <div className="hero-btns">
              <Link to="/products" className="btn btn-gold btn-lg">प्रोडक्ट्स देखें →</Link>
              <Link to="/contact" className="btn btn-outline-light btn-lg">संपर्क करें</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
