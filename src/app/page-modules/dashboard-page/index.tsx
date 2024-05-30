import { Box, Flex, Text } from "@chakra-ui/react";
import { getCookie } from "cookies-next";
import React from "react";
import { IAuthUser } from "../../interface/auth.interface";
import { startCase } from "lodash";
import CardinfoKDO from "./_components/card-info-kdo";
import ChartJeniskendaraan from "./_components/chart-jenis-kendaraan";

const DATA_CARD_INFO = [
  {
    id: 1,
    title: "Total KDO",
    description: "Total Kendaraan Dinas Operasional",
    amount: 2000,
  },
  {
    id: 2,
    title: "Total Kendaraan Layak",
    description: "Total Kendaraan dengan kondisi layak digunakan",
    amount: 1500,
  },
  {
    id: 3,
    title: "Total Kendaraan Tidak Layak",
    description: "Total Kendaraan dengan kondisi tidak layak digunakan",
    amount: 500,
  },
];

const DATA_CHART = [
  {
    id: 0,
    series: [10, 20, 30, 30, 10],
    labels: ["Ambulans", "Mini Bus", "Truk", "Motor", "Jeep"],
    colors: ["#497F52", "#254336", "#6B8A7A", "#B7B597", "#DAD3BE"],
    title: "Jenis Kendaraan",
    legends: ["Ambulans", "Mini Bus", "Truk", "Motor", "Jeep"],
    tooltip: "Informasi grafis data jenis kendaraan yang berada pada SKPD"
  },
  {
    id: 1,
    series: [10, 20, 30, 30, 10],
    labels: [
      "2023",
      "2022",
      "2021",
      "2020",
      "2019",
      "2018",
      "2017",
      "2016",
      "2016",
    ],
    colors: [
      "#497F52",
      "#254336",
      "#6B8A7A",
      "#B7B597",
      "#DAD3BE",
      "#82A885",
      "#3E5942",
      "#A1AD94",
      "#E3DBC7",
    ],
    title: "Tahun Kendaraan",
    legends: [
      "2023",
      "2022",
      "2021",
      "2020",
      "2019",
      "2018",
      "2017",
      "2016",
      "2016",
    ],
    tooltip: "Informasi grafis data tahun kendaraan yang berada pada SKPD"
  },
];
const DashboardPage = () => {
  const dataCookies = getCookie("dataRegister");
  const [data, setData] = React.useState<IAuthUser>();

  React.useEffect(() => {
    if (dataCookies) {
      const dataLogin: IAuthUser = JSON.parse(dataCookies);
      setData(dataLogin as IAuthUser);
    } else {
      console.error("Cookie 'dataRegister' tidak ditemukan.");
    }
  }, [dataCookies]);
  return (
    <Flex
      pos="relative"
      flexDir="column"
      gap="20px"
      bg="white"
      borderRadius="20px"
      minH="100vh"
      p="40px"
    >
      <Text
        pos="relative"
        zIndex={1}
        fontSize="24px"
        fontWeight={600}
        pb="30px"
        fontFamily="Poppins"
      >
        Hallo, {startCase(data?.username)} 👋 <br />
        Selamat Datang di Dashboard !
      </Text>
      <Box
        pos="absolute"
        bgColor="monika-primary.500"
        w="60px"
        h="2px"
        top="75px"
        left="40px"
        zIndex={0}
      />
      <Flex
        bg="white"
        boxShadow="md"
        p="70px"
        rounded="10px"
        gap="10px"
        w="full"
        justifyContent="space-around"
      >
        {DATA_CARD_INFO.map((data) => (
          <CardinfoKDO
            key={data.id}
            title={data.title}
            amount={data.amount}
            description={data.description}
          />
        ))}
      </Flex>
      <Flex flexDir="column" pt="50px" w="full" gap="30px">
        <Text fontSize="30px" fontWeight={600} fontFamily="Poppins">
          Statistik Kendaraan Dinas Operasional
        </Text>
        <Flex gap="20px">
          {DATA_CHART.map((kendaraan) => (
            <ChartJeniskendaraan
              key={kendaraan.id}
              labels={kendaraan.labels}
              colors={kendaraan.colors}
              legends={kendaraan.legends}
              title={kendaraan.title}
              series={kendaraan.series}
              tooltip={kendaraan.tooltip}
            />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardPage;
