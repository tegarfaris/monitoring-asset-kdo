import { Divider, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import VehicleEmployeeForm from "../_components/VehicleEmployeeForm";

const EmployeePage = () => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Memeriksa apakah browser mendukung geolocation
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          setError(null);
        },
        function (error) {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation tidak didukung.");
    }
  }, []); // Komponen hanya akan dimuat sekali saat komponen dimuat

  console.log("latitude: ", latitude);
  console.log("longitude: ", longitude);

  return (
    <Flex
      bg="white"
      w="full"
      flexDir="column"
      gap="20px"
      p="30px"
      borderRadius="20px"
    >
      <Text color="monika-primary.500" fontSize="24px" fontWeight={600}>
        Form Pengajuan Kendaraan Dinas Operasional
      </Text>

      <Divider />
      {/* Form pengajuan */}
      <VehicleEmployeeForm />
    </Flex>
  );
};

export default EmployeePage;
