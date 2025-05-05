import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import Navbar from './Components/Navbar';
import Home from './Components/Homepage'
import Products from './Components/Products';
import Footer from './Components/Footer';
// import Content from './Components/Content'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/products" element={<Products />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </Router>
  </StrictMode>,
)
