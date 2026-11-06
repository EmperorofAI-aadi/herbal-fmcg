/*
  📇 यह फाइल आपकी "पर्सनल जानकारी" की कॉपी-बुक है।
  यहां से नंबर, पता, ईमेल बदलो — पूरी वेबसाइट में अपने-आप बदल जाएगा।
*/

export const site = {
  name: 'PrakritiGlow',
  tagline: 'प्रकृति की शक्ति, आपकी देखभाल',
  // 👇 यहां अपना असली नंबर डालो
  phone: '+91 98765 43210',
  phoneLink: '+919876543210', // बिना स्पेस वाला नंबर (कॉल करने के लिए)
  whatsapp: '919876543210', // WhatsApp के लिए (91 + नंबर, बिना + या स्पेस)
  email: 'namaste@prakritiglow.in',
  address: '12, हर्बल मार्केट, मालवीय नगर, जयपुर, राजस्थान — 302017',
  hours: 'सोमवार – शनिवार • सुबह 9:00 – शाम 8:00',
  mapsLink: 'https://maps.google.com/?q=Malviya+Nagar+Jaipur',
}

// WhatsApp पर मैसेज भेजने का लिंक बनाने की छोटी मदद
export function whatsappLink(message) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}
