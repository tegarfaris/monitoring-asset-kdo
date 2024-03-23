import React, { useEffect, useState } from "react";
import InputField from "../../components/input-field";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  Image,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";

const Register = () => {
  const router = useRouter();
  const [dataLogin, setDataLogin] = React.useState({
    email: "",
    username: "",
    password: "",
    phoneNumber: "",
    role: "",
  });

  // get location permition
  const [isLocationApproved, setLocationApproved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const methods = useForm({
    values: {
      email: dataLogin.email,
      username: dataLogin.username,
      password: dataLogin.password,
      phoneNumber: dataLogin.phoneNumber,
      role: dataLogin.role,
    },
  });

  const {
    watch,
    formState: { errors },
  } = methods;

  useEffect(() => {
    if (isLocationApproved && "geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setError(null);
        },
        function (error) {
          setError(error.message);
        }
      );
    }
  }, [error, isLocationApproved]);

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const routeLogin =
      watch("email") === "admin@admin.com" &&
      watch("password") === "P@ssword123"
        ? "/dashboard/admin/asset-kdo"
        : "/dashboard/employee/form-pengajuan";

    const roleLogin =
      watch("email") === "admin@admin.com" &&
      watch("password") === "P@ssword123"
        ? "admin"
        : "employee";

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
        <Text
          color="monika-primary.500"
          textAlign="center"
          fontSize="30px"
          fontWeight={700}
          pb="20px"
        >
          Monitoring KDO
        </Text>

        <FormProvider {...methods}>
          <form action="submit" onSubmit={(e) => handleRegister(e)}>
            <Flex flexDir="column" gap="10px">
              <InputField
                id="email"
                name="email"
                label="Email"
                type="email"
                placeholder="input email"
                required
                error={errors.username?.message}
                onChange={(e) =>
                  setDataLogin({ ...dataLogin, email: e.currentTarget.value })
                }
              />

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
                name="password"
                label="Password"
                type="password"
                placeholder="input password"
                error={errors.password?.message}
                required
                onChange={(e) =>
                  setDataLogin({
                    ...dataLogin,
                    password: e.currentTarget.value,
                  })
                }
              />
              <InputField
                id="phoneNumber"
                name="phoneNumber"
                label="Phone Number"
                type="number"
                placeholder="input Phone Number"
                required
                error={errors.phoneNumber?.message}
                onChange={(e) =>
                  setDataLogin({
                    ...dataLogin,
                    phoneNumber: e.currentTarget.value,
                  })
                }
              />

              <Checkbox
                checked={isLocationApproved}
                onChange={() => setLocationApproved(!isLocationApproved)}
                size="sm"
              >
                Terms and Conditions
              </Checkbox>
            </Flex>
            <Divider borderColor="monika-primary.500" pt="10px" />
            <Tooltip
              isDisabled={
                !!isLocationApproved || error === "User denied Geolocation"
                  ? false
                  : true
              }
              hasArrow
              label={
                (!isLocationApproved &&
                  "Anda Harus menekan kotak terms and condition terlebih dahulu") ||
                (error === "User denied Geolocation" &&
                  "Anda harus memilih Allow Every Time atau Izinkan Selalu pada pop up yang muncul untuk dapat masuk ke website ini")
              }
            >
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
                isDisabled={!isLocationApproved || error !== null}
              >
                LOGIN
              </Button>
            </Tooltip>
          </form>
        </FormProvider>
      </Flex>

      {/* asset login */}
      <Box>
        <Image src="/login-asset.svg" alt="login-asset" w="600px" />
      </Box>
    </Flex>
  );
};

export default Register;
