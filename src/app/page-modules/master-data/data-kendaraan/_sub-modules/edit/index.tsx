import { InputField } from "@/monitoring/app/components";
import { Button, Divider, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { IoArrowBack } from "react-icons/io5";
import FormInformasiPengguna from "../../_components/form-informasi-pengguna";

const FormEditKDO = () => {
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
          Formulir Perubahan Data Kendaraan Dinas Operasional
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
                  placeholder="Contoh: MOTOR09279"
                />
                <InputField
                  id="nomorRegister"
                  name="nomorRegister"
                  label="Nomor Register"
                  type="text"
                  required
                  placeholder="Contoh: REG908098"
                />
                <InputField
                  id="namaBarang"
                  name="namaBarang"
                  label="Nama Barang"
                  type="text"
                  required
                  placeholder="Contoh: Sepeda Motor"
                />
                <InputField
                  id="tipeKendaraan"
                  name="tipeKendaraan"
                  label="Tipe Kendaraan"
                  type="text"
                  required
                  placeholder="Contoh: SUV"
                />
                <InputField
                  id="ukuranKendaraan"
                  name="ukuranKendaraan"
                  label="Ukuran Kendaraan"
                  type="text"
                  required
                  placeholder="Contoh: 1500 cc"
                />
                <InputField
                  id="bahan"
                  name="bahan"
                  label="Bahan"
                  type="text"
                  required
                  placeholder="Contoh: Baja"
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
                  placeholder="Contoh: 12345678"
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
                  placeholder="Contoh: MCH12345ABC6789"
                />
                <InputField
                  id="nomorMesin"
                  name="nomorMesin"
                  label="Nomor Mesin"
                  type="text"
                  required
                  placeholder="Contoh: 1ABC23456D7890123"
                />
                <InputField
                  id="nomorPolisi"
                  name="nomorPolisi"
                  label="Nomor Polisi"
                  type="text"
                  required
                  placeholder="Contoh: B 1234 CD"
                />
                <InputField
                  id="nomorBPKB"
                  name="nomorBPKB"
                  label="Nomor BPKB"
                  type="text"
                  required
                  placeholder="Contoh: BPKB123456"
                />
                <InputField
                  id="caraPerolehan"
                  name="caraPerolehan"
                  label="Cara Perolehan"
                  type="text"
                  required
                  placeholder="Contoh: Pembelian"
                />
                <InputField
                  id="kondisi"
                  name="kondisi"
                  label="Kondisi"
                  type="text"
                  required
                  placeholder="Contoh: Baik"
                />
                <InputField
                  id="harga"
                  name="harga"
                  label="Harga"
                  type="text"
                  required
                  placeholder="Contoh: 10000000"
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
          Perbarui Data KDO
        </Button>
      </Flex>
    </FormProvider>
  );
};

export default FormEditKDO;
