import { InputField } from "@/monitoring/app/components";
import InputSelect from "@/monitoring/app/components/input-select";
import { Flex } from "@chakra-ui/react";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { IoSearchOutline } from "react-icons/io5";

const AssetKDOHeader = () => {
  const methods = useForm({});

  return (
    <Flex gap="10px" w="lg" alignItems="center">
      <FormProvider {...methods}>
        <InputField
          id="search"
          name="search"
          type="text"
          rightElement={<IoSearchOutline size={20} />}
          placeholder="Search ..."
        />
        <InputSelect id="skpd" name="skpd">
          <option>SKPD - Garut Kota</option>
          <option>SKPD - Samarang</option>
          <option>SKPD - Rancabango</option>
        </InputSelect>
      </FormProvider>
    </Flex>
  );
};

export default AssetKDOHeader;
