import { Box, Flex, Text, VStack, IconButton } from "@chakra-ui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { AnimatePresence, motion } from "framer-motion";

const MotionBox = motion(Box);

const ExpandedCard = ({ data }) => {
  return (
    <AnimatePresence>
      <MotionBox
        pos="fixed"
        top={0}
        left={0}
        w="100%"
        h="100%"
        bg="rgba(0, 0, 0, 0.7)"
        zIndex={1000}
        d="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Flex
          bg="orange"
          border="2px"
          borderColor="black"
          borderRadius="md"
          w="80%"
          h="80%"
          flexDirection="column"
        >
          <Flex h="40%" position="relative">
            {/* Carousel here */}
            <VStack
              position="absolute"
              top={0}
              right={0}
              spacing={2}
              align="center"
            >
              <IconButton
                aria-label="Scroll up"
                icon={<ChevronUpIcon />}
              />
              {/* Thumbnails here */}
              <IconButton
                aria-label="Scroll down"
                icon={<ChevronDownIcon />}
              />
            </VStack>
          </Flex>
          <Flex h="60%" p={4} flexDirection="column" justifyContent="space-between">
            <Text fontSize="xl" fontWeight="bold">{data.title}</Text>
            <Text>{data.description}</Text>
          </Flex>
        </Flex>
      </MotionBox>
    </AnimatePresence>
  );
};

export default ExpandedCard;
