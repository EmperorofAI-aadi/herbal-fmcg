import React from 'react'

/*
  🧴 हर प्रोडक्ट का चित्र — फोटो नहीं, बल्कि कोड से बना चित्र (SVG)।
  फायदा: बहुत तेज़ लोड होता है, हर स्क्रीन पर साफ दिखता है, और किसी फोटो की जरूरत नहीं।
  "type" से बोतल का आकार बदलता है: pump, dish, shampoo, oil, balm, jar
  "color" से बोतल का रंग बदलता है।
*/

export default function ProductArt({ type = 'pump', color = '#2F7D4F', className = '' }) {
  const uid = React.useId().replace(/[:]/g, '')
  const g = `g-${uid}`
  const shine = `s-${uid}`

  // नीचे हल्की परछाई (छाया)
  const Shadow = () => (
    <ellipse cx="100" cy="248" rx="56" ry="7" fill="#07231B" opacity="0.14" />
  )

  // बोतल पर चिपकी लेबल (क्रीम रंग की पट्टी)
  const Label = ({ x = 62, y = 130, w = 76, h = 74 }) => (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="10" fill="#F7F3E8" stroke="#C9A227" strokeOpacity="0.35" />
      <circle cx={x + w / 2} cy={y + 17} r="11" fill={color} opacity="0.18" />
      <path
        d={`M${x + w / 2} ${y + 8}c-4 5-6 8-6 11a6 6 0 0 0 12 0c0-3-2-6-6-11z`}
        fill={color}
      />
      <rect x={x + 14} y={y + h - 28} width={w - 28} height="4" rx="2" fill="#C9A227" />
      <rect x={x + 20} y={y + h - 18} width={w - 40} height="3" rx="1.5" fill="#C9A227" opacity="0.55" />
    </g>
  )

  let art = null

  if (type === 'pump') {
    // पंप वाली बोतल (हैंड वॉश / मॉइस्चराइज़र)
    art = (
      <>
        <Shadow />
        <rect x="112" y="46" width="30" height="10" rx="5" fill={color} />
        <rect x="86" y="38" width="30" height="16" rx="7" fill={color} />
        <rect x="88" y="56" width="26" height="36" rx="6" fill={color} opacity="0.9" />
        <rect x="55" y="90" width="90" height="152" rx="20" fill={`url(#${g})`} />
        <rect x="55" y="90" width="90" height="152" rx="20" fill={`url(#${shine})`} />
        <Label x={63} y={132} w={74} h={74} />
      </>
    )
  } else if (type === 'dish') {
    // फ्लिप-कैप वाली बोतल (डिश वॉश)
    art = (
      <>
        <Shadow />
        <rect x="90" y="58" width="20" height="12" rx="4" fill={color} opacity="0.8" />
        <rect x="78" y="66" width="44" height="32" rx="7" fill={color} />
        <rect x="48" y="98" width="104" height="144" rx="22" fill={`url(#${g})`} />
        <rect x="48" y="98" width="104" height="144" rx="22" fill={`url(#${shine})`} />
        <Label x={60} y={142} w={80} h={70} />
      </>
    )
  } else if (type === 'shampoo') {
    // लंबी बोतल (शैम्पू)
    art = (
      <>
        <Shadow />
        <rect x="90" y="44" width="20" height="12" rx="5" fill={color} opacity="0.8" />
        <rect x="82" y="52" width="36" height="30" rx="7" fill={color} />
        <rect x="56" y="82" width="88" height="160" rx="20" fill={`url(#${g})`} />
        <rect x="56" y="82" width="88" height="160" rx="20" fill={`url(#${shine})`} />
        <Label x={64} y={126} w={72} h={82} />
      </>
    )
  } else if (type === 'oil') {
    // पतली कांच जैसी बोतल (हेयर ऑयल)
    art = (
      <>
        <Shadow />
        <rect x="86" y="46" width="28" height="26" rx="5" fill="#2B2B2B" />
        <rect x="90" y="72" width="20" height="26" fill={color} opacity="0.9" />
        <rect x="66" y="96" width="68" height="146" rx="14" fill={`url(#${g})`} />
        <rect x="66" y="96" width="68" height="146" rx="14" fill={`url(#${shine})`} />
        <Label x={72} y={140} w={56} h={72} />
      </>
    )
  } else if (type === 'balm') {
    // छोटा डिब्बा (बाम)
    art = (
      <>
        <Shadow />
        <rect x="52" y="126" width="96" height="28" rx="12" fill={color} />
        <rect x="56" y="150" width="88" height="92" rx="14" fill={`url(#${g})`} />
        <rect x="56" y="150" width="88" height="92" rx="14" fill={`url(#${shine})`} />
        <Label x={66} y={164} w={68} h={62} />
      </>
    )
  } else {
    // चौड़ा जार (क्रीम)
    art = (
      <>
        <Shadow />
        <rect x="50" y="118" width="100" height="30" rx="12" fill={color} />
        <rect x="55" y="146" width="90" height="96" rx="16" fill={`url(#${g})`} />
        <rect x="55" y="146" width="90" height="96" rx="16" fill={`url(#${shine})`} />
        <Label x={64} y={162} w={72} h={66} />
      </>
    )
  }

  return (
    <svg viewBox="0 0 200 260" className={`product-art ${className}`} role="img" aria-label="प्रोडक्ट का चित्र">
      <defs>
        <linearGradient id={g} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={color} />
          <stop offset="1" stopColor={color} stopOpacity="0.72" />
        </linearGradient>
        <linearGradient id={shine} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.38" />
          <stop offset="0.35" stopColor="#ffffff" stopOpacity="0.05" />
          <stop offset="0.75" stopColor="#000000" stopOpacity="0.08" />
          <stop offset="1" stopColor="#000000" stopOpacity="0.22" />
        </linearGradient>
      </defs>
      {art}
    </svg>
  )
}
