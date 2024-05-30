import React, { useContext, useMemo } from "react";
import { useRouter } from "next/router";
import { INavbarItem } from "./navbar.config";
import { IRootContext, ProviderContext } from "../../context/global.context";
import useActiveMenu from "../../hooks/function/useActiveMenu";
import { Box, Collapse, Flex, Image, Text } from "@chakra-ui/react";
import { ERole } from "../../interface/auth.interface";
import { FiArrowRight, FiChevronDown } from "react-icons/fi";

interface SidebarProps {
  shrink: boolean;
  setShrink: React.Dispatch<React.SetStateAction<boolean>>;
  filteredMenu: INavbarItem[];
}

const Sidebar: React.FC<SidebarProps> = ({
  shrink,
  setShrink,
  filteredMenu,
}) => {
  const router = useRouter();
  const { sidenav } = useContext(ProviderContext) as IRootContext;
  const { isActive, isActiveChild } = useActiveMenu();

  const menuItemContainer = useMemo(() => {
    return {
      gap: "20px",
      py: "10px",
      cursor: "pointer",
      borderRadius: "10px",
      pl: { base: shrink ? "20px" : "0", xl: shrink ? "0" : "20px" },
      justifyContent: {
        base: shrink ? "flex-start" : "center",
        xl: shrink ? "center" : "flex-start",
      },
      alignItems: "center",
      maxW: { base: shrink ? "full" : "50px", xl: shrink ? "50px" : "full" },
      h: "44px",
    };
  }, [shrink]);

  const menuItemText = useMemo(() => {
    return {
      variant: "heading/heading-6",
      opacity: {
        base: shrink ? "1" : "0",
        xl: shrink ? "0" : "1",
      },
    };
  }, [shrink]);

  const menuSubItemText = useMemo(() => {
    return {
      variant: "heading/heading-7",
      opacity: {
        base: shrink ? "1" : "0",
        xl: shrink ? "0" : "1",
      },
    };
  }, [shrink]);

  return (
    <Flex
      flexDir="column"
      p="20px"
      bg={{
        base: shrink ? "rgba(247, 247, 247, 0.8)" : "monika-neutral.0",
        xl: "monika-neutral.0",
      }}
      display={{ base: "none", md: "flex" }}
      w={{ base: shrink ? "300px" : "80px", xl: shrink ? "80px" : "18%" }}
      borderRight={{ base: shrink ? "monika-primary.500" : "none", xl: "none" }}
      minH="100vh"
      position="fixed"
      zIndex="999"
      shadow="sm"
      gap="30px"
      transition="ease-in 0.25s"
      transitionDelay="0.3s"
    >
      <Flex justifyContent="center" h="50px" w={shrink ? "45px" : undefined}>
        {shrink ? (
          <Image
            src="https://res.cloudinary.com/dg3gdr6le/image/upload/v1716907404/monitoring-kdo/logo%20garut/xkcpi0vfrtox4v00ta30.png"
            alt="logo"
          />
        ) : (
          <Flex alignItems="center" gap="10px">
            <Image
              w="30px"
              h="35px"
              src="https://res.cloudinary.com/dg3gdr6le/image/upload/v1716907404/monitoring-kdo/logo%20garut/xkcpi0vfrtox4v00ta30.png"
              alt="logo-garut"
            />
            <Text fontSize="30px">M O N I K A</Text>
          </Flex>
        )}
      </Flex>
      <Flex
        flexDir="column"
        gap="10px"
        color="monika-text.light"
        position="relative"
      >
        {filteredMenu.map((menu) => {
          if (menu.childItems) {
            return (
              <Flex
                key={menu.id}
                flexDir="column"
                bg={
                  sidenav.selectedMenu === menu.label ||
                  isActive(menu.path(router?.query.role as ERole))
                    ? "monika-primary.500"
                    : "inherit"
                }
                color={
                  sidenav.selectedMenu === menu.label ||
                  isActive(menu.path(router?.query.role as ERole))
                    ? "monika-neutral.0"
                    : "inherit"
                }
                borderRadius="10px"
                onClick={() => sidenav.changeActiveMenu(menu.label)}
              
              >
                <Flex {...menuItemContainer} position="relative" justifyContent="center">
                  <Text position="absolute" left="10px">
                    {isActive(menu.path(router?.query.role as ERole))
                      ? menu.iconActive
                      : menu.icon}
                  </Text>
                  <Text
                    {...menuItemText}
                    position="absolute"
                    left={{
                      base: shrink ? "50px" : "20px",
                      xl: shrink ? "20px" : "50px",
                    }}
                    transition={{
                      base: shrink ? "ease-in 0.25s" : "ease-out 0.1s",
                      xl: shrink ? "ease-out 0.1s" : "ease-in 0.25s",
                    }}
                    transitionDelay={{
                      base: shrink ? "0.25s" : "0.1s",
                      xl: shrink ? "0.1s" : "0.1s",
                    }}
                    fontWeight={600}
                 
                  >
                    {menu.label}
                  </Text>
                  <Box
                    position="absolute"
                    right="10px"
                    display={{
                      base: shrink ? "block" : "none",
                      xl: shrink ? "none" : "block",
                    }}
                  >
                    <FiChevronDown />
                  </Box>
                </Flex>
                <Collapse in={sidenav.selectedMenu === menu.label}>
                  <Flex
                    pl={{
                      base: shrink ? "10px" : "0",
                      xl: shrink ? "0" : "10px",
                    }}
                    flexDir="column"
                    transition={{
                      base: shrink ? "ease-in 0.25s" : "ease-out 0.1s",
                      xl: shrink ? "ease-out 0.1s" : "ease-in 0.25s",
                    }}
                    transitionDelay={{
                      base: shrink ? "0.25s" : "0.1s",
                      xl: shrink ? "0.1s" : "0.1s",
                    }}
                   
                  >
                    {menu.childItems.map((childMenu) => {
                      return (
                        <Flex
                          key={childMenu.id}
                          {...menuItemContainer}
                          color={
                            isActiveChild(
                              childMenu.path(router?.query.role as ERole)
                            )
                              ? "monika-primary.500"
                              : "white"
                          }
                          bg={
                            isActiveChild(
                              childMenu.path(router?.query.role as ERole)
                            )
                              ? "monika-neutral.0"
                              : "transparent"
                          }
                          onClick={() =>
                            router.push(
                              `/dashboard/${router?.query.role}${childMenu.path(
                                router?.query.role as ERole
                              )}`
                            )
                          }
                          position="relative"
                          transition={{
                            base: shrink ? "ease-in 0.25s" : "ease-out 0.1s",
                            xl: shrink ? "ease-out 0.1s" : "ease-in 0.25s",
                          }}
                          transitionDelay={{
                            base: shrink ? "0.02s" : "0.5s",
                            xl: shrink ? "0.5s" : "0.25s",
                          }}
                          mr={shrink ? "0" : "10px"}
                          my="10px"
                        >
                          <Text
                            position="absolute"
                            left={{ xl: shrink ? "12px" : "24px" }}
                            transition={{
                              base: shrink ? "ease-in 0.25s" : "ease-out 0.1s",
                              xl: shrink ? "ease-out 0.15s" : "ease-in 0.1s",
                            }}
                            transitionDelay={{
                              base: shrink ? "0.5s" : "0.1s",
                              xl: shrink ? "0.25s" : "0.5s",
                            }}
                          >
                            {isActiveChild(
                              childMenu.path(router?.query.role as ERole)
                            )
                              ? childMenu.iconActive
                              : childMenu.icon}
                          </Text>
                          <Text
                            {...menuSubItemText}
                            position="absolute"
                            left={{
                              base: shrink ? "50px" : "20px",
                              xl: shrink ? "20px" : "65px",
                            }}
                            // Transition Label
                            transition={{
                              base: shrink ? "ease-in 0.25s" : "ease-out 0.1s",
                              xl: shrink ? "ease-out 0.15s" : "ease-in 0.1s",
                            }}
                            transitionDelay={{
                              base: shrink ? "0.5s" : "0.1s",
                              xl: shrink ? "0.25s" : "0.5s",
                            }}
                            fontWeight={600}
                          >
                            {childMenu.label}
                          </Text>
                        </Flex>
                      );
                    })}
                  </Flex>
                </Collapse>
              </Flex>
            );
          }
          return (
            <Flex
              key={menu.id}
              bg={
                isActive(menu.path(router?.query.role as ERole))
                  ? "monika-primary.500"
                  : "inherit"
              }
              color={
                isActive(menu.path(router?.query.role as ERole))
                  ? "monika-neutral.0"
                  : "inherit"
              }
              onClick={() => {
                router.push(
                  `/dashboard/${router?.query.role}${menu.path(
                    router?.query.role as ERole
                  )}`
                );
                sidenav.changeActiveMenu(menu.label);
              }}
              {...menuItemContainer}
              position="relative"
              transition={{
                base: shrink ? "ease-in 0.25s" : "ease-out 0.1s",
                xl: shrink ? "ease-out 0.1s" : "ease-in 0.25s",
              }}
              transitionDelay={{
                base: shrink ? "0.02s" : "0.5s",
                xl: shrink ? "0.25s" : "0.02s",
              }}
              transitionProperty="transition, opacity, left"
              alignItems="center"
              fontWeight={600}
            >
              <Text position="absolute" left={shrink ? "10px" : "20px"}>
                {isActive(menu.path(router?.query.role as ERole))
                  ? menu.iconActive
                  : menu.icon}
              </Text>
              <Text
                {...menuItemText}
                position="absolute"
                left={{
                  base: shrink ? "50px" : "20px",
                  xl: shrink ? "20px" : "50px",
                }}
                transition={{
                  base: shrink ? "ease-in 0.25s" : "ease-out 0.1s",
                  xl: shrink ? "ease-out 0.1s" : "ease-in 0.25s",
                }}
                transitionDelay={{
                  base: shrink ? "0.25s" : "0.1s",
                  xl: shrink ? "0.1s" : "0.15s",
                }}
              >
                {menu.label}
              </Text>
            </Flex>
          );
        })}
        <Flex
          bg="monika-background-light.primary"
          justifyContent="center"
          alignItems="center"
          p="10px"
          w="36px"
          h="36px"
          rounded="full"
          border="monika-primary.500"
          position="absolute"
          right="-35px"
          bottom="-50px"
          cursor="pointer"
          shadow="md"
          onClick={() => setShrink(!shrink)}
          transform={{
            base: shrink ? "rotate(-180deg)" : "rotate(360deg)",
            xl: shrink ? "rotate(360deg)" : "rotate(-180deg)",
          }}
          transition="ease-in 0.25s"
        >
          <FiArrowRight
            color="var(--chakra-colors-monika-primary-500)"
            size="20px"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
