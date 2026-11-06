/*
  🖼️ हर नए पेज का ऊपर वाला बैनर (सिर्फ दिखावा वाला हेडर)।
  अंदर के पेजों (प्रोडक्ट्स, बारे में, संपर्क) को सुंदर शुरुआत देता है।
*/

export default function PageBanner({ kicker, title, sub }) {
  return (
    <section className="page-banner">
      <div className="page-banner-leaf" aria-hidden="true">🌿</div>
      <div className="container page-banner-inner">
        <span className="kicker gold">{kicker}</span>
        <h1>{title}</h1>
        <p>{sub}</p>
      </div>
    </section>
  )
}
