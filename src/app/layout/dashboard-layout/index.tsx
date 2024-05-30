import { Box, Flex, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import useAuthorizationMenu from "../../hooks/function/useAuthorizationMenu";

const DashboardLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { shrink, setShrink, filteredMenu } = useAuthorizationMenu();
  return (
    <Flex inset={0} justifyContent="space-between">
      <Sidebar
        shrink={shrink}
        setShrink={setShrink}
        filteredMenu={filteredMenu}
      />
      <Box
        w="100%"
        minH="100vh"
        pl={{ base: "0", md: "80px", xl: shrink ? "80px" : "18%" }}
        position="relative"
        id="top"
        transition="all ease-in 0.25s"
      >
        <Flex flexDir="column" minH="100%" pb={{ base: "50px", md: "0" }}>
          <Navbar />
          <Flex
            flexDir="column"
            w="100%"
            minH="100%"
            overflowY="hidden"
            p={{ base: "20px", md: "24px" }}
            flexGrow="1"
          >
            {children}
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
