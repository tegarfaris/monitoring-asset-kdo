import { Box, Divider, Flex, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import { IoIosInformationCircle } from "react-icons/io";

interface CardInfoKDOProps {
  title: string;
  amount: string | number;
  description: string;
}

const CardinfoKDO: React.FC<CardInfoKDOProps> = ({ title, amount, description }) => {
  return (
    <Box pos="relative" w="200px" h="250px">
      <Box pos="absolute" top="-120px" right="-100px" w="300px" h="300px" zIndex={0}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <path
            fill="#4A7F52"
            d="M70.7,-23.6C78.6,1.3,62.9,33.2,39.4,49.1C15.9,65,-15.6,64.9,-33.8,50.7C-52,36.5,-56.9,8.2,-49.1,-16.6C-41.2,-41.5,-20.6,-62.8,5.4,-64.6C31.4,-66.3,62.8,-48.5,70.7,-23.6Z"
            transform="translate(100 100)"
          />
        </svg>
      </Box>
      <Flex
        pos="relative"
        flexDir="column"
        gap="20px"
        justifyContent="center"
        alignItems="center"
        fontFamily="sans-serif"
        bg="white"
        boxShadow="lg"
        p="20px"
        w="100%"
        h="200px"
        border="1px solid"
        borderColor="monika-neutral.10"
        borderRadius="10px"
        zIndex={1}
        
      >
        <Text fontSize="20px" h="120px"  textAlign="center" fontWeight={600}>
          {title}
        </Text>
        <Divider w="full" borderColor="monika-primary.500" />
        <Text fontSize="40px" color="monika-primary.500" fontWeight={600}>
          {amount}
        </Text>
        <Box pos="absolute" top="10px" right="10px">
          <Tooltip hasArrow label={description}>
          <Box>
            <IoIosInformationCircle color="var(--chakra-colors-monika-primary-500)" size={20} />
          </Box>
          </Tooltip>
        </Box>
      </Flex>
    </Box>
  );
};

export default CardinfoKDO;
