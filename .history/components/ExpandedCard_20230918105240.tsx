// components/ExpandedCard.tsx
import React from 'react';
import Slider from 'react-slick';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Divider } from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';


const ExpandedCard = ({ data, setSelectedCard }) => {
  const images = [
    'https://source.unsplash.com/random/300x200?nature,1',
    'https://source.unsplash.com/random/300x200?nature,2',
    'https://source.unsplash.com/random/300x200?nature,3',
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

 return (
    <AnimatePresence>
      <motion.div className="expanded-card">
        <Box className="content-box">
          <div className="top-half">
            <Slider {...settings}>
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
                />
              ))}
              <ChevronDownIcon boxSize={6} />
            </div>
          </div>
          <Divider orientation="horizontal" />
          <div className="bottom-half">
            <h3>{data.title}</h3>
            <Divider orientation="horizontal" />
            <p>{data.description}</p>
          </div>
        </Box>
      </motion.div>
    </AnimatePresence>
  );
};