import React from "react";
import { Box, Center, Flex, Spinner, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Splash: React.FC = () => {
  return (
    <Center w="100vw" h="100vh" justifyContent="center" alignItems="center">
      <Flex flexDir="column" justifyContent="center">
        <Box as={Flex} position="relative" flexDir="column" justifyContent="center" alignItems="center" gap="20px">
          <Text fontSize="30px" fontWeight={600} color="monika-primary.500">
            Selamat Datang di Website Monitoring Asset KDO
          </Text>
          <Flex gap="10px">
            <Spinner color="monika-primary.500" />
            <Text fontSize="16px" color="monika-primary.500">Sedang Menyiapkan ...</Text>
          </Flex>
        </Box>
      </Flex>
    </Center>
  );
};

export default Splash;
