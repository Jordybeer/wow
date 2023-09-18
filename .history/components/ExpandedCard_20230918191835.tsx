import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Divider } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const ExpandedCard = ({ data, setSelectedCard }) => {
  const cardRef = useRef(null);
  const sliderRef = useRef(null);

  const handleClickOutside = (e) => {
    if (cardRef.current && !cardRef.current.contains(e.target)) {
      setSelectedCard(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const settings = {
    // Your existing settings
  };

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  return (
    <AnimatePresence>
      {data && (
        <motion.div
          layoutId={`${data.id}`}
          className="expanded-card"
          ref={cardRef}
          style={{ backgroundColor: 'rgba(173, 216, 230, 0.7)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Box className="content-box">
            <div className="top-half">
              <button onClick={() => setSelectedCard(null)}>Close</button>

              <Slider ref={sliderRef} {...settings}>
                {data.images.map((img, index) => (
                  <div key={index}>
                    <img src={img} alt={`Slide ${index + 1}`} className="carousel-img" />
                  </div>
                ))}
              </Slider>
              <div className="thumbnails">
                <ChevronLeftIcon boxSize={6} onClick={handlePrevClick} />
                {data.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="thumbnail-img"
                    onClick={() => sliderRef.current.slickGoTo(index)}
                  />
                ))}
                <ChevronRightIcon boxSize={6} onClick={handleNextClick} />
              </div>
            </div>
            <Divider orientation="horizontal" />
            <div className="bottom-half">
              <h3>{data.title}</h3>
              <p>{data.description}</p>
            </div>
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExpandedCard;