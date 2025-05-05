
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/BRACO-03.PNG";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-md position-fixed top-0 start-0 w-100 transition-all ${
        scrolled ? "py-3 shadow-lg bg-blur" : "py-2"
      }`}
      style={{
        zIndex: 1000,
        backdropFilter: scrolled ? "blur(10px)" : "none",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/" className="navbar-brand">
          <img
            src={Logo}
            alt="Logo"
            style={{
              width: scrolled ? "110px" : "90px",
              height: "auto",
              transition: "all 0.3s ease",
            }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav gap-4">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link text-white fw-light fs-5 link-underline-hover"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                className="nav-link text-white fw-light fs-5 link-underline-hover"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="products"
                className="nav-link text-white fw-light fs-5 link-underline-hover"
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                className="nav-link text-white fw-light fs-5 link-underline-hover"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
