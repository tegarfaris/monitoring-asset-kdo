import React from "react";
import InputField from "../../components/input-field";
import { useRouter } from "next/navigation";
import { Button, Divider, Flex, Text } from "@chakra-ui/react";

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
    <Flex
      flexDir="column"
      minW="500px"
      gap="10px"
      p="50px"
      borderRadius="10px"
      bg="rgba(0, 0, 0, .60)"
      boxShadow="4px 5px 52px rgba(0, 0, 0, 0.7)"
    >
      <Text color="white" textAlign="center" fontSize="30px" fontWeight={600}>
        Monitoring KDO
      </Text>
      <Divider my="20px" />
      <form action="submit" onSubmit={(e) => handleRegister(e)}>
        <InputField
          id="email"
          name="email"
          label="Email"
          type="email"
          placeholder="input email"
          required
          onChange={(e) => setValue({ ...value, email: e.currentTarget.value })}
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
  );
};

export default Register;
