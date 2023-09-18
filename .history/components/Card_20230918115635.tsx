import React from 'react';
import { Box } from '@chakra-ui/react';

const Card = ({ data, setSelectedCard }) => {
  const handleClick = () => {
    setSelectedCard(data);
  };

  return (
    <Box
      className="card"
      onClick={handleClick}
      p={4}
      m={2}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      _hover={{ backgroundColor: 'gray.100' }}
    >
      <img src={data.image} alt={data.title} />
      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {data.category}
          </Box>
        </Box>

        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
          {data.title}
        </Box>

        <Box>{data.description}</Box>
      </Box>
    </Box>
  );
};

export default Card;