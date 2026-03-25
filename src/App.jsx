

import { Link, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './components/about/About'
import Services from './components/services/Services'
import Contact from './components/contact/Contact'
import Navbar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import NotFound from './components/NotFound'

function App() {


  return (

    <div className="relative bg-[#fafaf5] dark:bg-[#1a1c19] min-h-screen">
      <div className="fixed inset-0 noise-overlay z-[100] pointer-events-none"></div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>




  )
}

export default App
