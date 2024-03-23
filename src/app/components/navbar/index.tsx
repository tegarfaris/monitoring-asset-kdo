import { Avatar, Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { deleteCookie, getCookie } from "cookies-next";
import { useRouter } from "next/router";
import React from "react";
import { ERole, IAuthUser } from "../../interface/auth.interface";
import { startCase } from "lodash";

const Navbar: React.FC = () => {
  const router = useRouter();
  const dataCookies = getCookie("dataRegister");
  const [data, setData] = React.useState<IAuthUser>();

  React.useEffect(() => {
    if (dataCookies) {
      const dataLogin: IAuthUser = JSON.parse(dataCookies);
      setData(dataLogin as IAuthUser);
    } else {
      console.error("Cookie 'dataRegister' tidak ditemukan.");
    }
  }, [dataCookies]);

  const logout = async () => {
    deleteCookie("dataRegister");
    await router.push("/auth/register");
  };

  return (
    <Flex
      justifyContent="end"
      bg="white"
      p="20px"
      gap="20px"
      alignItems="center"
    >
      <Flex gap="10px">
        <Avatar name={data?.username} size="md" />
        <Flex flexDir="column">
          <Text fontWeight={600} fontSize="16px">
            Hi, {startCase(data?.username)} !
          </Text>
          <Text>{router.query.role as ERole}</Text>
        </Flex>
      </Flex>
      <Button
        variant="outlined"
        onClick={logout}
        fontWeight={600}
        color="white"
        bg="monika-primary.500"
        _hover={{ bg: "monika-primary.200", color: "monika-primary.500" }}
        boxShadow="lg"
      >
        Log out
      </Button>
    </Flex>
  );
};

export default Navbar;
