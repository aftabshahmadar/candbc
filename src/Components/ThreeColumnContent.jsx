import React from 'react';
import { motion } from 'framer-motion';
import disk from '../assets/images/bluedisk.png';

export default function ThreeColumnContent() {
  return (
    <div className="container-fluid py-5">
      <div className="row align-items-center text-white text-center text-md-start">
        
        {/* Left Content */}
        <motion.div
          className="col-md-3 px-4 mb-4 mb-md-0"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="fw-light fs-3">Durability</h2>
          <p className="fw-lighter fs-6">
            Engineered for long-lasting performance under extreme conditions.
          </p>
        </motion.div>

        {/* Middle Image */}
        <motion.div
          className="col-md-6 d-flex justify-content-center"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src={disk}
            alt="Center"
            className="img-fluid"
            style={{ height: '700px', objectFit: 'contain' }}
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="col-md-3 px-4"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="fw-light fs-3">Precision</h2>
          <p className="fw-lighter fs-6">
            Built with accuracy and innovation at every step of manufacturing.
          </p>
        </motion.div>

      </div>
    </div>
  );
}
