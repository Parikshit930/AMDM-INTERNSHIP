import { useEffect, useState } from 'react'
import Loader from './components/Loader'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Products from './components/Products'
import Machinery from './components/Machinery'
import WhyChooseUs from './components/WhyChooseUs'
import Projects from './components/Projects'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import BackToTop from './components/BackToTop'

export default function App() {
  const [theme, setTheme] = useState('dark')
  const [selectedProduct, setSelectedProduct] = useState('')

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light')
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  const handleInquireProduct = (productName) => {
    setSelectedProduct(productName)
    const contactElement = document.getElementById('contact')
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <Loader />
      <CustomCursor />
      <ScrollProgress />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Services />
        <Products onInquireProduct={handleInquireProduct} />
        <Machinery />
        <WhyChooseUs />
        <Projects />
        <Gallery />
        <Testimonials />
        <Contact selectedProduct={selectedProduct} onClearProduct={() => setSelectedProduct('')} />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  )
}
