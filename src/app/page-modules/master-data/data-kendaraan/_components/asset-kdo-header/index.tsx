import { InputField } from "@/monitoring/app/components";
import InputSelect from "@/monitoring/app/components/input-select";
import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { IoSearchOutline } from "react-icons/io5";
import { TfiExport } from "react-icons/tfi";

const AssetKDOHeader = () => {
  const methods = useForm({});

  return (
    <Flex justifyContent="space-between">
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
            <option>SKPD - BPKAD</option>
            <option>SKPD - BPKAU</option>
            <option>SKPD - BPKAL</option>
          </InputSelect>
        </FormProvider>
      </Flex>

      <Button
      color="monika-primary.500"
        variant="outline"
        borderColor="monika-primary.500"
        leftIcon={<TfiExport color="monika-primary.500" />}
        _hover={{bg: "monika-primary.500", color: "white"}}
        fontWeight={600}
      >
        Export Data
      </Button>
    </Flex>
  );
};

export default AssetKDOHeader;
