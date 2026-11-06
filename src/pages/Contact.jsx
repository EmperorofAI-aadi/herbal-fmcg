import { useState } from 'react'
import PageBanner from '../components/PageBanner.jsx'
import Reveal from '../components/Reveal.jsx'
import { site, whatsappLink } from '../data/site.js'

/*
  📞 संपर्क पेज
  - कॉल / WhatsApp / पता / समय के कार्ड
  - पूछताछ फॉर्म (यह डेमो फॉर्म है — भरने पर "भेज दिया" का संदेश दिखता है)
  - आम सवाल (FAQ) — दबाने पर जवाब खुलता है
*/

const FAQS = [
  {
    q: 'क्या सच में कोई केमिकल नहीं होता?',
    a: 'हां। ना सल्फेट, ना पैराबेन, ना कृत्रिम रंग या महक। हर सामग्री प्रोडक्ट के लेबल पर साफ लिखी होती है — जो नहीं समझ आए, WhatsApp पर पूछ लें, हम खुशी से बताएंगे।',
  },
  {
    q: 'प्रोडक्ट कैसे खरीदूं? डिलीवरी है क्या?',
    a: 'हम अभी ऑनलाइन डिलीवरी नहीं करते। आप (1) हमारे स्टोर पर आ सकते हैं, या (2) नीचे नंबर पर कॉल/WhatsApp करके नज़दीकी दुकान की जानकारी ले सकते हैं।',
  },
  {
    q: 'कीमतें कहां दिखेंगी?',
    a: 'प्रोडक्ट्स पेज में हर प्रोडक्ट की कीमत साफ लिखी है — कोई छुपा चार्ज नहीं। स्टोर पर भी वही दाम मिलेगा।',
  },
  {
    q: 'क्या बच्चों के लिए सुरक्षित है?',
    a: 'हां, हमारे सभी प्रोडक्ट त्वचा-अनुकूल हैं। फिर भी 3 साल से छोटे बच्चों के लिए डॉक्टर की सलाह बेहतर रहती है।',
  },
  {
    q: 'डीलरशिप / थोक में लेना चाहता हूं।',
    a: 'बहुत बढ़िया! नीचे फॉर्म में "डीलरशिप" लिखकर भेजें या सीधे कॉल करें — हमारी टीम 1-2 दिन में बात करेगी।',
  },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

  function onSubmit(e) {
    e.preventDefault()
    setSent(true) // डेमो: सिर्फ सफलता का संदेश दिखाता है
  }

  return (
    <>
      <PageBanner
        kicker="संपर्क करें"
        title="बात करें, भरोसा बनाएं"
        sub="सवाल हो, पूछताछ हो या डीलरशिप — हमारी टीम खुशी से बात करेगी।"
      />

      <section className="section">
        <div className="container">
          {/* संपर्क के कार्ड */}
          <div className="contact-cards">
            <Reveal>
              <a className="contact-card" href={`tel:${site.phoneLink}`}>
                <span className="cc-icon">📞</span>
                <h3>कॉल करें</h3>
                <p>{site.phone}</p>
                <span className="cc-hint">सुबह 9 से शाम 8</span>
              </a>
            </Reveal>
            <Reveal delay={80}>
              <a className="contact-card" href={whatsappLink('नमस्ते! मुझे PrakritiGlow के प्रोडक्ट्स के बारे में जानकारी चाहिए।')} target="_blank" rel="noreferrer">
                <span className="cc-icon">💬</span>
                <h3>WhatsApp करें</h3>
                <p>{site.phone}</p>
                <span className="cc-hint">जल्द जवाब मिलेगा</span>
              </a>
            </Reveal>
            <Reveal delay={160}>
              <a className="contact-card" href={site.mapsLink} target="_blank" rel="noreferrer">
                <span className="cc-icon">📍</span>
                <h3>स्टोर पर आएं</h3>
                <p>{site.address}</p>
                <span className="cc-hint">मैप पर खोलें →</span>
              </a>
            </Reveal>
            <Reveal delay={240}>
              <div className="contact-card">
                <span className="cc-icon">🕘</span>
                <h3>समय</h3>
                <p>{site.hours}</p>
                <span className="cc-hint">रविवार बंद</span>
              </div>
            </Reveal>
          </div>

          {/* फॉर्म + नक्शा कार्ड */}
          <div className="contact-grid">
            <Reveal>
              <div className="form-card">
                <h2>पूछताछ भेजें</h2>
                <p className="form-sub">फॉर्म भरें — हम 1 कार्य-दिवस में जवाब देंगे।</p>

                {sent ? (
                  <div className="success-box">
                    <span>✅</span>
                    <strong>धन्यवाद! आपका संदेश मिल गया।</strong>
                    <p>हमारी टीम जल्द ही आपसे बात करेगी। जल्दी हो तो सीधे कॉल करें: {site.phone}</p>
                  </div>
                ) : (
                  <form onSubmit={onSubmit}>
                    <div className="field">
                      <label>आपका नाम</label>
                      <input type="text" placeholder="जैसे: राम शर्मा" required />
                    </div>
                    <div className="field">
                      <label>मोबाइल नंबर</label>
                      <input type="tel" placeholder="10 अंकों का नंबर" pattern="[0-9]{10}" required />
                    </div>
                    <div className="field">
                      <label>क्या पूछना है?</label>
                      <textarea rows="4" placeholder="जैसे: गुलाब-केसर क्रीम की उपलब्धता पूछनी है…" required />
                    </div>
                    <button type="submit" className="btn btn-gold btn-lg full">
                      संदेश भेजें →
                    </button>
                    <p className="form-note">※ यह डेमो फॉर्म है — वेबसाइट जोड़ने के बाद यह मैसेज आपको भेजा जा सकेगा।</p>
                  </form>
                )}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="map-card">
                <div className="map-pin" aria-hidden="true">📍</div>
                <h3>हमारा स्टोर</h3>
                <p>{site.address}</p>
                <p className="map-hours">{site.hours}</p>
                <a href={site.mapsLink} target="_blank" rel="noreferrer" className="btn btn-outline full">
                  Google Maps पर खोलें →
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* आम सवाल */}
      <section className="section section-soft">
        <div className="container narrow">
          <Reveal className="section-head">
            <span className="kicker">आम सवाल</span>
            <h2>जो सबसे ज्यादा पूछा जाता है</h2>
          </Reveal>

          <div className="faq-list">
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={i * 60}>
                <div className={`faq ${openFaq === i ? 'open' : ''}`}>
                  <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                    <span>{f.q}</span>
                    <span className="faq-icon">{openFaq === i ? '−' : '+'}</span>
                  </button>
                  <div className="faq-a"><p>{f.a}</p></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
