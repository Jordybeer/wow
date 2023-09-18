import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Divider } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import  Carousel  from './Carousel'


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
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    centerMode: true,
    draggable: true,
    pauseOnHover: true,
    swipeToSlide: true,
    // useCSS: true,
    variableWidth: true,
    // className: 'carousel-img',
    swipe: true,
    
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
          className="expanded-card"
          ref={cardRef}
          style={{ backgroundColor: 'rgba(173, 216, 230, 0.7)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Box className="content-box">
            <div className="top-half">
              <Carousel images={data.images} />
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