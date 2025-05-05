import React from 'react';
import { motion } from 'framer-motion';
import disk from '../assets/images/contentdisk.png';

export default function Content() {
  return (
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
            src={disk}
            alt="Sample"
            className="img-fluid rounded"
            style={{ maxHeight: '1100px', objectFit: 'cover' }}
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
          <h2 className="fw-light mb-3">Our Commitment to Quality.</h2>
          <p className="text-white fw-lighter">
            We take pride in delivering top-tier performance and reliability. Whether you're looking for durability, strength, or innovation — we bring it all together.
          </p>
          <motion.button
  className="btn mt-3 text-white border border-white"
  style={{
    backgroundColor: 'transparent',
    borderWidth: '1px',
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
  );
}
