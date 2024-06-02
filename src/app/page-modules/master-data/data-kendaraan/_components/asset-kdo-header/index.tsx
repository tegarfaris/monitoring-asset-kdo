import { InputField } from "@/monitoring/app/components";
import InputSelect from "@/monitoring/app/components/input-select";
import { Button, Flex } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { IoSearchOutline } from "react-icons/io5";
import { TfiExport } from "react-icons/tfi";

interface AssetKDOHeaderProps {
  setValueSearch: Dispatch<SetStateAction<string>>;
}
const AssetKDOHeader: React.FC<AssetKDOHeaderProps> = ({ setValueSearch }) => {
  const methods = useForm({});

  return (
    <Flex justifyContent="space-between" gap="10px">
      <Flex gap="10px" w="full" alignItems="center">
        <FormProvider {...methods}>
          <InputField
            id="search"
            name="search"
            type="text"
            rightElement={<IoSearchOutline size={20} />}
            placeholder="Ketik Nomor Polisi ..."
            onChange={(e) => setValueSearch(e.currentTarget.value)}
          />
          <InputSelect id="skpd" name="skpd" placeholder="SKPD">
            <option>SKPD - BPKAD</option>
            <option>SKPD - BAPPEDA</option>
            <option>SKPD - BAPENDA</option>
            <option>SKPD - DINAS SOSIAL</option>
            <option>SKPD - DINAS PENDIDIKAN</option>
            <option>SKPD - DINAS KESEHATAN</option>
            <option>SKPD - DINAS LINGKUNGAN HIDUP</option>
          </InputSelect>
          <InputSelect
            id="jenisKendaraan"
            name="jenisKendaraan"
            placeholder="Jenis Kendaraan"
          >
            <option>Ambulance</option>
            <option>Jeep</option>
            <option>Mobil</option>
            <option>Motor</option>
            <option>Truk</option>
          </InputSelect>
          <InputSelect
            id="kondisi"
            name="kondisi"
            placeholder="Kondisi Kendaraan"
          >
            <option>BAIK</option>
            <option>RUSAK RINGAN</option>
            <option>RUSAK BERAT</option>
          </InputSelect>
          <InputSelect
            id="tahunPerolehan"
            name="tahunPerolehan"
            placeholder="Tahun Perolehan"
          >
            <option>2024</option>
            <option>2023</option>
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
            <option>2019</option>
          </InputSelect>
        </FormProvider>
      </Flex>
    </Flex>
  );
};

export default AssetKDOHeader;
