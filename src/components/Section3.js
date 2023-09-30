import React, { useState, useEffect } from 'react';
import './Section3.css';
import Navbar from './Navbar';

const Section3 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    'https://i0.wp.com/ewastekuldeep.com/wp-content/uploads/2021/01/E-waste-type-half-img.png',
    'https://www.sanjarirecycling.com/wp-content/uploads/2021/10/Best-E-waste-Management-Company-in-India-1-1170x500.png',
    'https://www.tcil.net.in/public/img/EWasteimg1.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 7000); 

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className='section3'>
    <div><Navbar></Navbar></div>
    <div className='Section3-content'>
    <div>

      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={slide} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="dots-container">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentSlide ? 'active-dot' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>

    {/* container  */}

    <div className='container'>
    information about us
    </div>
    </div>

    </div>
  );
};

export default Section3;


