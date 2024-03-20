import { Button, Flex, Text } from "@chakra-ui/react";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/router";
import React from "react";

const Navbar: React.FC = () => {
  const router = useRouter();
  const logout = async () => {
    deleteCookie("dataRegister");
    await router.push("/auth/register");
  };

  return (
    <Flex justifyContent="end" bg="white" p="20px">
      <Button
        variant="outlined"
        onClick={logout}
        fontWeight={600}
        color="white"
        bg="monika-primary.500"
        _hover={{bg: "monika-primary.200", color: "monika-primary.500"}}
        boxShadow="lg"
      >
        Log out
      </Button>
    </Flex>
  );
};

export default Navbar;
