import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Divider } from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    adaptiveHeight: true,
    centerMode: true,
    draggable: true,
    focusOnSelect: true,
    pauseOnHover: true,
    swipeToSlide: true,
    touchMove: true,
    useCSS: true,
    useTransform: true,
    slidesPerRow: 1,
    className: 'carousel-img',
    prevArrow: <ChevronUpIcon boxSize={6} />,
    nextArrow: <ChevronDownIcon boxSize={6} />,
    swipe: true,
    
  };

  return (
    <AnimatePresence>
      <motion.div className="expanded-card" ref={cardRef} style={{ backgroundColor: 'rgba(173, 216, 230, 0.7)' }}>
        <Box className="content-box">
          <div className="top-half">
            <Slider ref={sliderRef} {...settings}>
              {data.images.map((img, index) => (
                <div key={index}>
                  <img src={img} alt={`Slide ${index + 1}`} className="carousel-img" />
                </div>
              ))}
            </Slider>
            <div className="thumbnails">
              <ChevronUpIcon boxSize={6} />
              {data.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="thumbnail-img"
                  onClick={() => sliderRef.current.slickGoTo(index)}
                />
              ))}
              <ChevronDownIcon boxSize={6} />
            </div>
          </div>
          <Divider orientation="horizontal" />
          <div className="bottom-half">
            <h3>{data.title}</h3>
            <p>{data.description}</p>
          </div>
        </Box>
      </motion.div>
    </AnimatePresence>
  );
};

export default ExpandedCard;
