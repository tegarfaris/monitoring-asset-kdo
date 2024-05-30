import { InputField } from "@/monitoring/app/components";
import { NAVIGATION } from "@/monitoring/app/config/navigation";
import { Button, Divider, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { IoArrowBack } from "react-icons/io5";
import FormInformasiPengguna from "../../_components/form-informasi-pengguna";

const FormAddkendaraan = () => {
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
          router.push(
            `/dashboard/${router?.query.role}/master-data/data-kendaraan`
          )
        }
      >
        <IoArrowBack size={20} /> Back
      </Flex>
      <Flex flexDir="column" gap="20px" bg="white" p="40px" rounded="20px">
        <Text fontSize="20px" fontWeight={600}>
          Formulir Penambahan Data Kendaraan Dinas Operasional
        </Text>
        <Divider />
        <form>
          <Grid templateColumns="repeat(2,1fr)" w="full" gap="20px">
            <GridItem>
              <Flex flexDir="column" gap="20px">
                <InputField
                  id="kodeBarang"
                  name="kodeBarang"
                  label="Kode Barang"
                  type="text"
                  required
                />
                <InputField
                  id="nomorRegister"
                  name="nomorRegister"
                  label="Nomor Register"
                  type="text"
                  required
                />
                <InputField
                  id="namaBarang"
                  name="namaBarang"
                  label="Nama Barang"
                  type="text"
                  required
                />
                <InputField
                  id="tipeKendaraan"
                  name="tipeKendaraan"
                  label="Tipe Kendaraan"
                  type="text"
                  required
                />
                <InputField
                  id="ukuranKendaraan"
                  name="ukuranKendaraan"
                  label="Ukuran Kendaraan"
                  type="text"
                  required
                />
                <InputField
                  id="bahan"
                  name="bahan"
                  label="Bahan"
                  type="text"
                  required
                />
                <InputField
                  id="tahunPerolehan"
                  name="tahunPerolehan"
                  label="Tahun Perolehan"
                  type="date"
                  required
                />
                <InputField
                  id="nomorPabrik"
                  name="nomorPabrik"
                  label="Nomor Pabrik"
                  type="number"
                  required
                />
              </Flex>
            </GridItem>
            <GridItem>
              <Flex flexDir="column" gap="20px">
                <InputField
                  id="nomorRangka"
                  name="nomorRangka"
                  label="Nomor Rangka"
                  type="text"
                  required
                />
                <InputField
                  id="nomorMesin"
                  name="nomorMesin"
                  label="Nomor Mesin"
                  type="text"
                  required
                />
                <InputField
                  id="nomorPolisi"
                  name="nomorPolisi"
                  label="Nomor Polisi"
                  type="text"
                  required
                />
                <InputField
                  id="nomorBPKB"
                  name="nomorBPKB"
                  label="Nomor BPKB"
                  type="text"
                  required
                />
                <InputField
                  id="caraPerolehan"
                  name="caraPerolehan"
                  label="Cara Perolehan"
                  type="text"
                  required
                />
                <InputField
                  id="kondisi"
                  name="kondisi"
                  label="Kondisi"
                  type="text"
                  required
                />
                <InputField
                  id="harga"
                  name="harga"
                  label="Harga"
                  type="text"
                  required
                />
                <InputField
                  id="buktiFisikLegal"
                  name="buktiFisikLegal"
                  label="Bukti Fisik Legal"
                  type="file"
                  required
                />
              </Flex>
            </GridItem>
          </Grid>
        </form>
        {router.query.role === "user" && (
          <Flex flexDir="column" pt="50px" gap="20px">
            <Text fontSize="20px" fontWeight={600}>
              Formulir Informasi Pengguna
            </Text>
            <Divider />
            <FormInformasiPengguna />

          </Flex>
        )}
            <Button
              placeSelf="end"
              w="fit-content"
              bg="monika-primary.500"
              color="white"
              variant="solid"
              fontWeight={600}
            >
              Tambah Data KDO
            </Button>
      </Flex>
    </FormProvider>
  );
};

export default FormAddkendaraan;
