import React from 'react';
import { motion } from 'framer-motion';
import manufacturinvideo from '../assets/videos/manufacturingvideo.mp4';
 // Your video file

export default function VideoBackground() {
  return (
    <div className="video-container">
      <video
        className="bg-video"
        src={manufacturinvideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="overlay"></div>
      <motion.div
        className="video-content text-white container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.h1
          className="display-4 ms-3"
          style={{ textAlign: 'left' }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Designed and manufactured <br /> <span className='fw-bold'>in India.</span>
        </motion.h1>
      </motion.div>
    </div>
  );
}
