// components/ExpandedCard.tsx
import React from 'react';
import Slider from 'react-slick';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Divider } from '@chakra-ui/react';
import { LoremIpsum } from "lorem-ipsum";
import { countReset } from 'console';
// const LoremIpsum = require("lorem-ipsum").LoremIpsum;

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

  
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

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
            <Slider {...settings}>
              {images.map((img, index) => (
                <div key={index}>
                  <img src={img} alt={`Slide ${index + 1}`} className="carousel-img" />
                </div>
              ))}
            </Slider>
            <div className="thumbnails">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="thumbnail-img"
                />
              ))}
            </div>
          </div>
          <Divider orientation="horizontal" />
          <div className="bottom-half">
            <h3>{data.title}</h3>
            <p>
lorem.generateWords(1);
lorem.generateSentences(5);
lorem.generateParagraphs(7);</p>
          </div>
        </Box>
      </motion.div>
    </AnimatePresence>
  );
};

export default ExpandedCard;
