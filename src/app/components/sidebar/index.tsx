import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { IoMdList, IoMdListBox } from "react-icons/io";
import { useRouter } from "next/router";
import { IoCar, IoCarOutline } from "react-icons/io5";
import { ERole } from "../../interface/auth.interface";

const Sidebar = () => {
  const router = useRouter();
  const MENU = [
    {
      id: 1,
      label: "Asset KDO",
      path: "/dashboard/admin/asset-kdo",
      icon: <IoMdList size={20} />,
      iconActive: <IoMdListBox size={20} />,
      authorized: ERole.ADMIN,
    },
    {
      id: 2,
      label: "Pengajuan KDO",
      path: "/dashboard/employee/form-pengajuan",
      icon: <IoCarOutline size={20} />,
      iconActive: <IoCar size={20} />,
      authorized: ERole.EMPLOYEE,
    },
  ];

  const handleClickMenu = (path: string) => {
    router.push(path);
  };

  return (
    <Flex flexDir="column" bg="white" mt="-80px" minH="100vh" w="250px">
      <Text
        pos="sticky"
        fontWeight={700}
        color="monika-primary.500"
        fontSize="20px"
        p="20px"
        fontFamily="poppins"
        textAlign="left"
      >
        Monitoring Asset KDO
      </Text>

      <Flex pt="30px" px="10px">
        {MENU.map((item) => (
          <Flex
            key={item.id}
            display={router.query.role === item.authorized ? "flex" : "none"}
            gap="10px"
            w="full"
            color={router.asPath === item.path ? "white" : "monika-primary.500"}
            alignItems="center"
            fontWeight={600}
            fontSize="16px"
            bg={
              router.asPath === item.path ? "monika-primary.500" : "transparent"
            }
            borderRadius="10px"
            p="10px"
            cursor="pointer"
            onClick={() => handleClickMenu(item.path)}
          >
            <Box>
              {router.asPath === item.path ? item.iconActive : item.icon}
            </Box>
            <Text>{item.label}</Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default Sidebar;
