import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner.jsx'
import Reveal from '../components/Reveal.jsx'

/*
  📖 हमारे बारे में पेज — कंपनी की कहानी, सपने और सफर।
*/

const VALUES = [
  { icon: '🌱', title: 'शुद्धता सबसे ऊपर', text: 'एक भी ऐसी चीज़ नहीं जो प्रकृति से न हो। लेबल पर जो लिखा, डिब्बे में वही।' },
  { icon: '🤝', title: 'किसानों से सीधा', text: 'जड़ी-बूटियां किसानों से बिन-बिचौलिया ली जाती हैं — बेहतर दाम उन्हें, बेहतर गुणवत्ता आपको।' },
  { icon: '🔬', title: 'हर बैच की जांच', text: 'हर तैयार बैच की रंग-महक-मुलायमपन की जांच — तभी पैकिंग।' },
]

const TIMELINE = [
  { year: '2018', title: 'रसोई से शुरुआत', text: 'शर्मा परिवार की रसोई में दादी की विधि से पहला तेल पका — पड़ोसियों ने मांगना शुरू किया।' },
  { year: '2020', title: 'पहला प्रोडक्ट बाज़ार में', text: 'भृंगराज हेयर ऑयल पहली बार दुकानों पर पहुंचा। लोगों ने प्यार से स्वीकार किया।' },
  { year: '2022', title: '1000+ परिवार जुड़े', text: 'शैम्पू और हैंड वॉश आए। हज़ारों परिवारों ने "केमिकल फ्री" को अपनी आदत बनाया।' },
  { year: '2024', title: 'नई तैयारी की इकाई', text: 'पारंपरिक विधियों के साथ साफ-सुथरी नई इकाई — गुणवत्ता और बढ़ी।' },
  { year: '2026', title: '7 प्रोडक्ट्स, एक परिवार', text: 'आज हर कोने की देखभाल के लिए हर्बल प्रोडक्ट — और यह सफर अभी रुकने वाला नहीं।' },
]

const PROMISES = [
  'हर सामग्री लेबल पर साफ लिखी होगी',
  'कोई छुपा हुआ केमिकल नहीं',
  'त्वचा-अनुकूल, हर उम्र के लिए',
  'जानवरों पर कोई टेस्ट नहीं',
  'पैकिंग दोबारा इस्तेमाल लायक',
]

export default function About() {
  return (
    <>
      <PageBanner
        kicker="हमारी कहानी"
        title="एक रसोई से, हज़ारों घरों तक"
        sub="PrakritiGlow कोई फैक्ट्री का प्रोडक्ट नहीं — यह एक परिवार का वादा है।"
      />

      {/* कहानी */}
      <section className="section">
        <div className="container story-grid">
          <Reveal>
            <span className="kicker">शुरुआत</span>
            <h2>सब शुरू हुआ एक चुटकी हल्दी से</h2>
            <p>
              2018 में हमारी दादी जी ने कहा — <em>"जो खाने में न हो, वो त्वचा पर भी नहीं चाहिए।"</em>
              यही एक बात हमारी कंपनी की नींव बन गई।
            </p>
            <p>
              रसोई में तांबे के बर्तन में पका पहला भृंगराज तेल, पड़ोस में चर्चा बन गया।
              फिर एक-एक कर प्रोडक्ट बने — और आज <strong>5000+ परिवार</strong> रोज़
              PrakritiGlow को अपनी देखभाल का हिस्सा बनाते हैं।
            </p>
            <p>
              हमारी विधि आज भी वही है — <strong>धीमी आंच, शुद्ध जड़ी-बूटियां और बिल्कुल जीरो केमिकल।</strong>
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="quote-card">
              <span className="quote-mark">“</span>
              <p>जो खाने में न हो, वो त्वचा पर भी नहीं चाहिए।</p>
              <span className="quote-who">— दादी मां, संस्थापक की प्रेरणा</span>
              <span className="quote-leaf" aria-hidden="true">🌿</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* हमारे मूल्य */}
      <section className="section section-soft">
        <div className="container">
          <Reveal className="section-head">
            <span className="kicker">हमारे मूल्य</span>
            <h2>जिन तीन बातों पर कोई समझौता नहीं</h2>
          </Reveal>
          <div className="usp-grid">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="usp-card">
                  <span className="usp-icon">{v.icon}</span>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* सफर (टाइमलाइन) */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="kicker">हमारा सफर</span>
            <h2>रसोई से राष्ट्र तक</h2>
          </Reveal>

          <div className="timeline">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={i * 70}>
                <div className="timeline-item">
                  <span className="timeline-dot" />
                  <div className="timeline-card">
                    <span className="timeline-year">{t.year}</span>
                    <h3>{t.title}</h3>
                    <p>{t.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* वादे */}
      <section className="section section-dark">
        <div className="container promise-grid">
          <Reveal>
            <span className="kicker gold">हमारा वादा</span>
            <h2>5 वादे — जो हर डिब्बे पर लागू</h2>
            <p>ये वादे कागज़ पर नहीं, हर बैच में आज़माए जाते हैं।</p>
          </Reveal>
          <Reveal delay={120}>
            <ul className="promise-list">
              {PROMISES.map((p) => (
                <li key={p}><span className="tick">✔</span>{p}</li>
              ))}
            </ul>
            <Link to="/products" className="btn btn-gold btn-lg promise-btn">
              प्रोडक्ट्स देखें →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
