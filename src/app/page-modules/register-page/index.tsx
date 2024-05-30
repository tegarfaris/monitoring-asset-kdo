import React from "react";
import InputField from "../../components/input-field";
import { useRouter } from "next/navigation";
import { Box, Button, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import { NAVIGATION } from "../../config/navigation";
import { RiEye2Line, RiEyeCloseFill } from "react-icons/ri";

const Register = () => {
  const router = useRouter();
  const [dataLogin, setDataLogin] = React.useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = React.useState(false);

  const methods = useForm({
    values: {
      username: dataLogin.username,
      password: dataLogin.password,
    },
  });

  const {
    watch,
    formState: { errors },
  } = methods;

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const routeLogin =
      watch("username") === "admin" && watch("password") === "password"
        ? NAVIGATION.dashboard.admin.dashboard
        : NAVIGATION.dashboard.user.dashboard;

    const roleLogin =
      watch("username") === "admin" && watch("password") === "password"
        ? "admin"
        : "user";

    const cookieName = "dataRegister";
    const cookieValue = JSON.stringify({ ...dataLogin, role: roleLogin });

    // Prepare cookie string
    const cookieString = `${cookieName}=${encodeURIComponent(
      cookieValue
    )}; path=/`;

    // Set cookie in document
    document.cookie = cookieString;

    router.push(routeLogin);
  };

  return (
    <Flex w="full" p="50px" justifyContent="space-around" alignItems="center">
      <Flex
        flexDir="column"
        minW="500px"
        gap="10px"
        p="50px"
        borderRadius="10px"
        bg="white"
        boxShadow="md"
        m="50px"
      >
        <Flex
          pb="20px"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
        >
          <Flex gap="20px">
            <Image
              src="https://res.cloudinary.com/dg3gdr6le/image/upload/v1716907404/monitoring-kdo/logo%20garut/xkcpi0vfrtox4v00ta30.png"
              alt="logo-garut"
              w="full"
              h="35px"
              objectFit="contain"
              bgColor="white"
            />
            <Divider orientation="vertical" h="30px" />
            <Image
              src="https://res.cloudinary.com/dg3gdr6le/image/upload/v1717080056/monitoring-kdo/uciotknuuerrsc7zehdf.png"
              alt="asset-BPKAD"
              w="full"
              h="35px"
              objectFit="contain"
            />
          </Flex>

          <Text
            color="monika-primary.500"
            textAlign="center"
            fontSize="60px"
            fontWeight={700}
          >
            M O N I K A
          </Text>
          <Text mt="-10px" fontSize="12px" fontWeight={500}>
            Monitoring Kendaraan Dinas Operasional
          </Text>
        </Flex>

        <FormProvider {...methods}>
          <form action="submit" onSubmit={(e) => handleRegister(e)}>
            <Flex flexDir="column" gap="10px">
              <InputField
                id="username"
                name="username"
                label="Username"
                type="text"
                placeholder="input username"
                required
                error={errors.username?.message}
                onChange={(e) =>
                  setDataLogin({
                    ...dataLogin,
                    username: e.currentTarget.value,
                  })
                }
              />
              <InputField
                id="password"
                label="Password"
                name="Password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required={true}
                error={errors.password?.message}
                rightElement={
                  showPassword ? (
                    <RiEye2Line
                      onClick={() => setShowPassword(!showPassword)}
                      cursor={"pointer"}
                    />
                  ) : (
                    <RiEyeCloseFill
                      onClick={() => setShowPassword(!showPassword)}
                      cursor={"pointer"}
                    />
                  )
                }
              />
            </Flex>
            <Divider borderColor="monika-primary.500" pt="10px" />
            <Button
              mt="20px"
              w="full"
              type="submit"
              bg="monika-primary.500"
              color="white"
              fontWeight={600}
              _hover={{
                bg: "white",
                color: "monika-primary.500",
                border: "1px solid",
                borderColo: "monika-primary.500",
              }}
            >
              LOGIN
            </Button>
          </form>
        </FormProvider>
      </Flex>

      {/* asset login */}
      <Box pos="relative">
        <Image src="/login-asset.svg" alt="login-asset" w="600px" />
      </Box>
    </Flex>
  );
};

export default Register;
