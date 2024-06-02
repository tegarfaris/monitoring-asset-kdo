import { InputField } from "@/monitoring/app/components";
import { NAVIGATION } from "@/monitoring/app/config/navigation";
import { Button, Divider, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { IoArrowBack } from "react-icons/io5";

const FormAddAdmin = () => {
  const router = useRouter();
  const methods = useForm({
    values: {
      kodeBarang: "",
    },
  });

  return (
    <FormProvider {...methods}>
      <Flex
        cursor="pointer"
        gap="10px"
        p="10px"
        fontWeight={600}
        onClick={() =>
          router.push(`/dashboard/${router?.query.role}/master-data/data-admin`)
        }
        w="full"
      >
        <IoArrowBack size={20} /> Back
      </Flex>
      <Flex
        w="full"
        flexDir="column"
        gap="20px"
        bg="white"
        p="40px"
        rounded="20px"
      >
        <Text fontSize="20px" fontWeight={600}>
          Formulir Penambahan Data Admin
        </Text>
        <Divider />
        <form>
          <Flex w="full" gap="20px">
            <Flex w="full" flexDir="column" gap="20px">
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
            </Flex>
            <Flex w="full" flexDir="column" gap="20px">
              <InputField
                id="jabatan"
                name="jabatan"
                label="Jabatan"
                type="text"
                required
              />
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
            </Flex>
          </Flex>
          <Button
            mt="20px"
            variant="solid"
            bg="monika-primary.500"
            color="white"
            fontFamily="Poppins"
          >
            Tambah Admin
          </Button>
        </form>
      </Flex>
    </FormProvider>
  );
};

export default FormAddAdmin;
