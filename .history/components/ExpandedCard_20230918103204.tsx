import { Box, Flex, Text, VStack, IconButton } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { AnimatePresence, motion } from "framer-motion";

const MotionBox = motion(Box);

const ExpandedCard = ({ data }) => {
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

export default ExpandedCard;
