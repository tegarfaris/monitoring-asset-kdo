import {
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Center,
  Divider,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import BasicTable, { ITableColumns } from "../../components/basic-table";
import DATA_KDO from "../../data/data-kdo.json";
import usePagination from "../../hooks/function/usePagination";
import { IAssetKDO } from "../../interface/asset-kdo.interface";
import { startCase } from "lodash";
import { renderKDOStatus } from "../../helper/renderKDOStatus";
import { PiPlusCircle } from "react-icons/pi";

const AssetKDO = () => {
  const [showingData, setShowingData] = React.useState<number>(DATA_KDO.length);
  const { pageSize, currentPage, renderPageNumber } = usePagination({
    currentCount: showingData || 0,
    totalCount: DATA_KDO.length || 0,
    siblingCount: 1,
  });

  // buatkan fungsi untuk memecah data sesuai dengan pageSize dan currentPage

  const getPaginatedData = (): IAssetKDO[] => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return DATA_KDO.slice(startIndex, endIndex) as IAssetKDO[];
  };

  React.useEffect(() => {
    setShowingData(getPaginatedData().length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showingData, getPaginatedData().length]);

  const columns: ITableColumns[] = [
    {
      key: "no",
      title: "No",
      width: "5%",
      render: (_, i) => {
        const no = (currentPage - 1) * pageSize + (i as number) + 1;
        return <Text textAlign="center">{no}</Text>;
      },
    },
    {
      key: "vehicleName",
      title: "Nama Kendaraan",
      capitalize: true,
      render: (data: IAssetKDO) => {
        return <Text>{startCase(data.vehicleName)}</Text>;
      },
    },
    {
      key: "tipe",
      title: "Tipe kendaraan",
      capitalize: true,
      render: (data: IAssetKDO) => {
        return <Text textAlign="center">{startCase(data.tipe)}</Text>;
      },
    },
    {
      key: "numberPlate",
      title: "Nomor Polisi",
      capitalize: true,
      render: (data: IAssetKDO) => {
        return <Text textAlign="center">{data.numberPlate}</Text>;
      },
    },
    {
      key: "status",
      title: "Status",
      render: (data: IAssetKDO) => {
        return (
          <Badge
            display="block"
            border="2px solid"
            borderColor={`${renderKDOStatus(data.status).color}.500`}
            backgroundColor={`${renderKDOStatus(data.status).color}.50`}
            color={`${renderKDOStatus(data.status).color}.500`}
            p="0.5em 0.75em"
            borderRadius="20px"
            fontSize="10px"
            textAlign="center"
            shadow="sm"
            fontWeight="400"
          >
            {renderKDOStatus(data.status).text}
          </Badge>
        );
      },
      capitalize: true,
    },
  ];

  return (
    <Flex flexDir="column" gap="20px" p="20px" w="full">
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">
            Asset Kendaraan Dinas Operasional
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Flex
        flexDir="column"
        gap="20px"
        bg="white"
        w="full"
        minH="600px"
        p="20px"
        borderRadius="10px"
      >
        <Flex w="full" justifyContent="space-between">
          <Text fontSize="24px" fontWeight={600} color="monika-primary.500">
            List Asset Kendaraan Dinas Operasional
          </Text>
          <Button leftIcon={<PiPlusCircle size={20} />} fontWeight={600} bg="monika-primary.500" color="white">
            ADD KDO
          </Button>
        </Flex>
        <Divider />
        <Flex flexDir="column" w="full" justifyContent="center" gap="20px">
          <BasicTable
            variant="simple"
            width="full"
            datas={getPaginatedData()}
            columns={columns}
          />
          {renderPageNumber}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AssetKDO;
