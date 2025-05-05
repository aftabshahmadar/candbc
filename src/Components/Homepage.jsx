
import React from 'react';
import Homepage from '../assets/images/homepage2.jpg';
import Content from './Content';
import ThreeColumnContent from './ThreeColumnContent';
import VideoBackground from './VideoBackground';

const Home = () => {
  return (
    <>
        <div
      className="position-relative text-center px-4 d-flex align-items-center justify-content-between flex-column flex-md-row"
      style={{
        backgroundImage: `url(${Homepage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100%',
      }}
    >
  
    </div>
    <Content />
    <ThreeColumnContent />
    <VideoBackground />
    </>
  
  );
};

export default Home;
