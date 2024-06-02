import { Avatar, Button, Divider, Flex, Text } from "@chakra-ui/react";
import { getCookie } from "cookies-next";
import React from "react";
import { IAuthUser } from "../../interface/auth.interface";
import { capitalize, startCase } from "lodash";
import { InputField } from "../../components";
import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { IoArrowBack } from "react-icons/io5";
import InputTextArea from "../../components/inputTextArea";

const Profile = () => {
  const dataCookies = getCookie("dataRegister");
  const [data, setData] = React.useState<IAuthUser>();
  const router = useRouter();
  const methods = useForm({
    values: {
      asalSKPD: "BPKAD",
      nip: "1231231",
      nama: "Krisela Ardeani",
      nomorTelephone: "09890809809",
      jabatan: "Manager",
      email: "krisela@gmail.com",
      username: data?.username,
      password: "PAOSPO",
      alamat: "Jln. Bandung",
    },
  });

  React.useEffect(() => {
    if (dataCookies) {
      const dataLogin: IAuthUser = JSON.parse(dataCookies);
      setData(dataLogin as IAuthUser);
    } else {
      console.error("Cookie 'dataRegister' tidak ditemukan.");
    }
  }, [dataCookies]);
  return (
    <Flex flexDir="column" gap="20px">
      <Flex
        cursor="pointer"
        gap="10px"
        p="10px"
        fontWeight={600}
        onClick={() => router.push(`/dashboard/${router?.query.role}`)}
        w="full"
      >
        <IoArrowBack size={20} /> Back
      </Flex>
      <Flex flexDir="column" bg="white" p="40px" rounded="20px" gap="20px">
        <Text fontSize="24px" fontWeight={600}>
          Profile
        </Text>
        <Divider />
        <Flex flexDir="column" alignItems="center" h="100px">
          <Avatar name={data?.username} w="100px" h="100px" />
          <Text pt="20px" fontSize="24px" fontWeight={600}>
            {startCase(data?.username)}
          </Text>
        </Flex>

        <Flex flexDir="column" gap="10px" pt="100px">
          <FormProvider {...methods}>
            <form>
              <Flex w="full" gap="20px">
                <Flex w="full" flexDir="column" gap="20px">
                  {router?.query.role === "user" && (
                    <InputField
                      id="asalSKPD"
                      name="asalSKPD"
                      label="Asal SKPD"
                      type="text"
                      required
                      placeholder="askdjla"
                    />
                  )}

                  <InputField
                    id="nip"
                    name="nip"
                    label="NIP"
                    type="number"
                    required
                  />
                  <InputField
                    id="nama"
                    name="nama"
                    label="Nama"
                    type="text"
                    required
                  />
                  <InputField
                    id="nomorTelephone"
                    name="nomorTelephone"
                    label="Nomor Telephone"
                    type="number"
                    required
                  />
                  <Button
                    w="fit-content"
                    mt="20px"
                    variant="solid"
                    bg="monika-primary.500"
                    color="white"
                    fontFamily="Poppins"
                  >
                    Simpan Perubahan
                  </Button>
                </Flex>
                <Flex w="full" flexDir="column" gap="20px">
                  <InputField
                    id="jabatan"
                    name="jabatan"
                    label="Jabatan"
                    type="text"
                    required
                  />
                  {router?.query.role === "user" && (
                    <InputField
                      id="email"
                      name="email"
                      label="email"
                      type="email"
                      required
                    />
                  )}
                  <InputField
                    id="username"
                    name="username"
                    label="Username"
                    type="text"
                    required
                  />
                  <InputField
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    required
                  />
                  <InputTextArea
                    id="alamat"
                    name="alamat"
                    label="Alamat"
                    required
                  />
                </Flex>
              </Flex>
            </form>
          </FormProvider>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Profile;
