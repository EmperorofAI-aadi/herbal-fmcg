/*
  🍃 यह हियरो सेक्शन में हल्के-हल्के गिरते पत्ते बनाता है (सिर्फ दिखने के लिए)।
  पत्ते असल में छोटे-छोटे चित्र (SVG) हैं जो ऊपर से नीचे तैरते हैं।
*/

const LEAVES = [
  { left: '6%', size: 20, dur: 13, delay: 0 },
  { left: '16%', size: 14, dur: 17, delay: 3 },
  { left: '28%', size: 24, dur: 15, delay: 6 },
  { left: '41%', size: 12, dur: 19, delay: 1.5 },
  { left: '55%', size: 18, dur: 14, delay: 5 },
  { left: '66%', size: 22, dur: 18, delay: 2.5 },
  { left: '74%', size: 13, dur: 16, delay: 8 },
  { left: '85%', size: 20, dur: 15, delay: 4 },
  { left: '93%', size: 16, dur: 20, delay: 7 },
  { left: '48%', size: 15, dur: 21, delay: 10 },
]

export default function Leaves() {
  return (
    <div className="leaves" aria-hidden="true">
      {LEAVES.map((l, i) => (
        <svg
          key={i}
          className="leaf"
          style={{
            left: l.left,
            width: `${l.size}px`,
            animationDuration: `${l.dur}s`,
            animationDelay: `${l.delay}s`,
          }}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 2C6 8 4 13 4 16a8 8 0 0 0 16 0c0-3-2-8-8-14z"
            fill="currentColor"
          />
          <path
            d="M12 7v13"
            stroke="#07231B"
            strokeOpacity="0.35"
            strokeWidth="1"
          />
        </svg>
      ))}
    </div>
  )
}
