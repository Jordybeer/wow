// components/ExpandedCard.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ExpandedCard = ({ data, setSelectedCard }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <AnimatePresence>
      <motion.div
        className="expanded-card"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setSelectedCard(null)}
      >
        <div className="top-half">
          <div className="carousel">
            <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
          </div>
          <div className="thumbnails">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
        <div className="bottom-half">
          <h3>{data.title}</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ExpandedCard;
