import React from "react";
import InputField from "../../components/input-field";
import { useRouter } from "next/navigation";
import { Box, Button, Divider, Flex, Image, Text } from "@chakra-ui/react";

const Register = () => {
  const router = useRouter();
  const [value, setValue] = React.useState({
    email: "",
    username: "",
    password: "",
    phoneNumber: "",
    role: "admin",
  });

  const [error, setError] = React.useState({
    email: "",
    username: "",
    password: "",
    phoneNumber: "",
  });

  const handleError = (e: React.FormEvent<HTMLFormElement>) => {
    if (value.password.length > 12) {
      setError((prevValues) => ({
        ...prevValues,
        password: "password must be 12 characters",
      }));
      return true;
    }
    if (value.phoneNumber.length > 13) {
      setError((prevValues) => ({
        ...prevValues,

        phoneNumber: "password must be 13 characters",
      }));
      return true;
    }

    return false;
  };

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError({ ...error, password: "", phoneNumber: "" });
    // const redirectUrl = value.role === "ad" ? "/" : "/dashboard";

    if (!handleError(e)) {
      // Set cookie
      const cookieName = "dataRegister";
      const cookieValue = JSON.stringify(value);

      // Prepare cookie string
      const cookieString = `${cookieName}=${encodeURIComponent(
        cookieValue
      )}; path=/`;

      // Set cookie in document
      document.cookie = cookieString;
      router.push("/dashboard/asset-kdo");
    }
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
        >
          Monitoring KDO
        </Text>

        <form action="submit" onSubmit={(e) => handleRegister(e)}>
          <InputField
            id="email"
            name="email"
            label="Email"
            type="email"
            placeholder="input email"
            required
            onChange={(e) =>
              setValue({ ...value, email: e.currentTarget.value })
            }
          />

          <InputField
            id="username"
            name="username"
            label="Username"
            type="username"
            placeholder="input username"
            required
            onChange={(e) =>
              setValue({ ...value, username: e.currentTarget.value })
            }
          />
          <InputField
            id="password"
            name="password"
            label="Password"
            type="password"
            placeholder="input password"
            errorMessage={error.password}
            required
            onChange={(e) =>
              setValue({ ...value, password: e.currentTarget.value })
            }
          />
          <InputField
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            type="number"
            placeholder="input Phone Number"
            required
            errorMessage={error.phoneNumber}
            onChange={(e) =>
              setValue({ ...value, phoneNumber: e.currentTarget.value })
            }
          />
          <Divider borderColor="monika-primary.500" pt="10px" />
          <Button
            mt="20px"
            w="full"
            type="submit"
            bg="monika-primary.500"
            color="white"
            fontWeight={600}
            _hover={{ bg: "white", color: "monika-primary.500" }}
          >
            LOGIN
          </Button>
        </form>
      </Flex>

      {/* asset login */}
      <Box>
        <Image src="/login-asset.svg" alt="login-asset" w="600px" />
      </Box>
    </Flex>
  );
};

export default Register;
