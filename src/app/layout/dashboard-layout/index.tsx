import { Flex, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";

const DashboardLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Flex pos="relative" w="full" flexDir="column" minH="100vh" boxShadow="md">
      <Navbar />
      <Flex gap="10px">
        <Sidebar />
        {children}
      </Flex>
    </Flex>
  );
};

export default DashboardLayout;
