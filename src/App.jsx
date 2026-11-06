import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollTop from './components/ScrollTop.jsx'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

// पेज बदलने पर ऊपर (टॉप) से शुरू करने की छोटी मदद
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

// App = पूरी वेबसाइट का मैप। कौन सा पेज किस पते पर खुलेगा — यहीं लिखा है।
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <ScrollTop />
    </BrowserRouter>
  )
}
