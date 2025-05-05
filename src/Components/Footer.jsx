import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from '../assets/images/BRACO-04.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    
    <footer className="bg-black text-white pt-5 pb-3 mt-5 border-top border-secondary">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Brand and Description */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold text-uppercase mb-3"><span><img src={logo} alt='logo' style={{width:"70px", height:"auto"}}/></span></h4>
            <p>
              High-performance, precision-engineered disc brakes and tools crafted for safety and durability. Trusted by professionals across the industry.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4 fw-lighter">
            <h5 className="text-uppercase mb-3">Quick Links</h5>
            <ul className="list-unstyled" style={{ lineHeight: "2.5" }}>
  <li><a href="/" className="footer-link">Home</a></li>
  <li><a href="/about" className="footer-link">About</a></li>
  <li><a href="/products" className="footer-link">Products</a></li>
  <li><a href="/contact" className="footer-link">Contact</a></li>
</ul>

          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4 fw-lighter">
            <h5 className="text-uppercase mb-3">Get in Touch</h5>
            <p><i className="bi bi-geo-alt-fill me-2"></i>Rajkot, Gujarat, India</p>
            <p><i className="bi bi-envelope-fill me-2"></i>info@braco.com</p>
            <p><i className="bi bi-telephone-fill me-2"></i>+91 98765 43210</p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="text-center mt-4 fw-lighter">
          <a href="#" className="text-white me-3 fs-5"><i className="bi bi-facebook"></i></a>
          <a href="#" className="text-white me-3 fs-5"><i className="bi bi-twitter-x"></i></a>
          <a href="#" className="text-white me-3 fs-5"><i className="bi bi-instagram"></i></a>
          <a href="#" className="text-white fs-5"><i className="bi bi-linkedin"></i></a>
        </div>

        {/* Copyright */}
        <div className="text-center mt-3">
        <small>&copy; {currentYear} BRACO. All rights reserved.</small>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
