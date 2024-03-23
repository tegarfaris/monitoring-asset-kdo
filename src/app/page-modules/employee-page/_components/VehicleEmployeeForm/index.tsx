import { InputField } from "@/monitoring/app/components";
import { Button, Flex, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

const VehicleEmployeeForm: React.FC = () => {
  const methods = useForm({
    values: {
      fullName: "",
      vehicleName: "",
      policePlate: "",
      startDate: "",
      endDate: "",
      employeeNumber: "",
      phoneNumber: "",
    },
  });

  const {
    formState: { errors },
  } = methods;

  return (
    <Flex flexDir="column" gap="10px">
      <FormProvider {...methods}>
        <form>
          <Flex flexDir="column" gap="20px">
            <InputField
              id="fullName"
              name="fullName"
              label="Full Name Employee"
              type="text"
              required
              placeholder="ex: Krisela Ardeani"
              error={errors.fullName?.message}
            />
            <InputField
              id="vehicleName"
              name="vehicleName"
              label="Nama Kendaraan"
              type="text"
              required
              placeholder="ex: Toyota Avanza"
              error={errors.vehicleName?.message}
            />
            <InputField
              id="policePlate"
              name="policePlate"
              label="Nomor Polisi Kendaraan"
              type="text"
              required
              placeholder="ex: Z 1234 GG"
              error={errors.policePlate?.message}
            />
            <SimpleGrid columns={2} gap="10px">
              <InputField
                id="startDate"
                name="startDate"
                label="Dari Tanggal"
                type="date"
                required
                error={errors.startDate?.message}
              />
              <InputField
                id="endDate"
                name="endDate"
                label="Sampai Tanggal"
                type="date"
                required
                error={errors.endDate?.message}
              />
            </SimpleGrid>
            <InputField
              id="employeeNumber"
              name="employeNumber"
              label="Nomor ID Card Karyawan"
              type="text"
              required
              placeholder="ex: 98792878287"
              error={errors.employeeNumber?.message}
            />
            <InputField
              id="phoneNumber"
              name="phoneNumber"
              label="Nomor HP Aktif"
              type="text"
              required
              placeholder="ex: 0897675621"
              error={errors.phoneNumber?.message}
            />
            <Button
              placeSelf="end"
              variant="solid"
              w="200px"
              bg="monika-primary.500"
              color="white"
              fontWeight={600}
              _hover={{ bg: "transparent" ,border: "1px solid" ,borderColor: "monika-primary.500", color: "monika-primary.500" }}
            >
              Kirim Pengajuan
            </Button>
          </Flex>
        </form>
      </FormProvider>
    </Flex>
  );
};

export default VehicleEmployeeForm;
