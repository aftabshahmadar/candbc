import React from "react";
import productsimg from "../assets/images/productsimg.png";
import prdctimg1 from "../assets/images/prdctimg1.png";
import multipiecerotor from '../assets/images/multipiecerotor.png';
import ProductCardLayout from "./ProductCardLayout";
import { motion } from "framer-motion";

export default function Products() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="mt-5 position-relative text-white"
        style={{
          backgroundImage: `url(${productsimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100%",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="position-absolute mb-5"
          style={{
            top: "5%",
            left: "21%",
            textAlign: "center",
            transform: "translate(-50%, 0%)",
            maxWidth: "1000px",
          }}
        >
          <h1 className="fw-light display-8 mb-2" style={{ lineHeight: 1.2 }}>
            A COPY IS NOTHING MORE THAN AN IMPOSTER.
          </h1>
          <h2 className="fw-bold display-6 mb-3">
            CHOOSE GENUINE OEM REPLACEMENT BRAKES.
          </h2>
        </motion.div>
      </div>

      <hr className="custom-hr" />

      {/* Two Section Layout */}
      <div className="container my-5">
        <div className="row align-items-center">
          {/* Left Content */}
          <motion.div
            className="col-md-6 mb-4 mb-md-0 text-white"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="fw-semi-bold mb-3">Monoblock rotors</h2>
            <p className="fw-light">
              Crafted from a single solid piece of high-grade metal, our
              Monoblock Rotor is engineered for drivers who demand unmatched
              braking reliability and performance. Unlike traditional
              multi-piece rotors, the monoblock design offers exceptional
              structural integrity and thermal stability, making it ideal for
              high-performance and heavy-duty applications.
            </p>
            <button
              className="btn mt-3 text-white explore-btn"
              style={{ backgroundColor: "#aa8a75" }}
            >
              Explore Products
            </button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={prdctimg1}
              alt="OEM Brakes"
              className="img-fluid rounded shadow"
            />
          </motion.div>
        </div>
      </div>

       <div className="container py-5">
            <div className="row align-items-center">
              {/* Left: Image with fade-in from left */}
              <motion.div
  className="col-md-6 mb-4 mb-md-0"
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <img
    src={multipiecerotor}
    alt="Sample"
    className="img-fluid rounded"
    style={{ height: '700px', width:"auto" }}  
  />
</motion.div>
      
              {/* Right: Text content with fade-in from right */}
              <motion.div
                className="col-md-6 text-center text-white text-md-start"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="fw-semi-bold mb-3">2 piece monoblock rotor</h2>
                <p className="text-white fw-light">
                Crafted with precision, our 2-Piece Rotor combines a high-performance rotor disc and a lightweight aluminum hat, engineered for drivers who demand both strength and efficiency. Unlike traditional one-piece designs, the two-piece construction optimizes weight distribution and heat dissipation, offering superior braking power and durability. The design ensures reduced thermal expansion, making it ideal for high-performance and heavy-duty applications.
                </p>
                <motion.button
        className="btn mt-3 text-white border border-white"
        style={{
          backgroundColor: 'transparent',
        //   borderWidth: '1px',
          borderRadius: '4px',
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Learn More
      </motion.button>
      
              </motion.div>
            </div>
          </div>

          <ProductCardLayout />
    </>
  );
}
