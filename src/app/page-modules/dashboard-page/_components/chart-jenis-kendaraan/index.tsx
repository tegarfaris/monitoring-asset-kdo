import { Box, Flex, Tooltip } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import React from "react";
import { BiSolidInfoCircle } from "react-icons/bi";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface ChartJeniskendaraanProps {
  series: number[];
  labels: string[];
  colors: string[];
  title: string;
  legends: string[];
  tooltip: string;
}
const ChartJeniskendaraan:React.FC<ChartJeniskendaraanProps> = ({series,labels,colors,legends, title, tooltip}) => {
  const options: ApexOptions = {
    series: series.map((item) => item),
    labels: labels.map((label) => label),
    colors: colors.map((color) => color),
    title: {
      text: title,
      align: "left",
      offsetX: 60,
      margin: 0,
      style: {
        fontSize: "20px",
        fontWeight: "bold",
        fontFamily: "Poppins",
      },
    },
    dataLabels: {
      enabled: true,
    },
    tooltip: {
      enabled: true,
    },
    legend: {
      show: true,
      position: "right",
      fontSize: "10px",
      itemMargin: {
        vertical: 10,
      },
      fontWeight: 300,
      customLegendItems: legends.map((legend) => legend),
      offsetY: -10,
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        customScale: 1,
        donut: {
          size: "40%",
          labels: {
            show: false,
            name: {
              show: false,
              fontFamily: "Inter",
              fontWeight: 600,
              offsetY: 25,
              formatter: function (val) {
                return val;
              },
            },
            value: {
              show: true,
              fontSize: "30px",
              fontFamily: "Outfit",
              fontWeight: 700,
              offsetY: -16,
              formatter: function (val) {
                return val;
              },
            },
            total: {
              show: true,
              showAlways: true,
              label: "Person",
              fontSize: "11px",
              fontFamily: "Inter",
              fontWeight: "400",
              color: "var(--chakra-colors-monika-neutral.70)",
            },
          },
        },
      },
    },
  };
  return (
    <Flex
      pos="relative"
      bg="white"
      boxShadow="lg"
      w="full"
      justifyContent="center"
      py="10px"
    >
      <ReactApexChart
        options={options}
        series={options.series}
        type="donut"
        width={"400px"}
      />
      <Box
        // display={labelTooltip !== "" ? "flex" : "none"}
        pos="absolute"
        top="15px"
        right="15px"
      >
        <Tooltip
          hasArrow
          label={tooltip}
          placement="top"
          bg="monika-background-light.primary"
          color="monika-background-dark.primary"
          p="20px"
          rounded="md"
        >
          <span>
            <BiSolidInfoCircle size={20} color="monika-primary.500" />
          </span>
        </Tooltip>
      </Box>
    </Flex>
  );
};

export default ChartJeniskendaraan;
