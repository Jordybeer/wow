// components/ExpandedCard.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Divider } from '@chakra-ui/react';

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
      >
        <Box className="content-box">
          <div className="top-half">
            <motion.div
              className="carousel"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
            >
              <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
            </motion.div>
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
          <Divider orientation="horizontal" />
          <div className="bottom-half">
            <h3>{data.title}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </Box>
      </motion.div>
    </AnimatePresence>
  );
};

export default ExpandedCard;
