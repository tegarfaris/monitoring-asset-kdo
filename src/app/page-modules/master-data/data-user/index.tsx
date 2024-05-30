import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Divider,
  Flex,
  Text,
} from "@chakra-ui/react";
import { PiPlusCircle } from "react-icons/pi";
import usePagination from "@/monitoring/app/hooks/function/usePagination";
import DATA_KDO from "@/monitoring/app/data/data-kdo.json";
import BasicTable, {
  ITableColumns,
} from "@/monitoring/app/components/basic-table";
import { IAssetKDO } from "@/monitoring/app/interface/asset-kdo.interface";
import { useRouter } from "next/router";
import { NAVIGATION } from "@/monitoring/app/config/navigation";
import { TfiExport } from "react-icons/tfi";

const DataUser = () => {
  const router = useRouter();
  const [showingData, setShowingData] = React.useState<number>(DATA_KDO.length);
  const { pageSize, currentPage, renderPageNumber } = usePagination({
    currentCount: showingData || 0,
    totalCount: DATA_KDO.length || 0,
    siblingCount: 1,
  });

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
      key: "nomorIdentitasPegawai",
      title: "NIP",
      capitalize: true,
      render: () => {
        return <Text>098098098</Text>;
      },
    },
    {
      key: "name",
      title: "nama",
      capitalize: true,
      render: () => {
        return <Text>098098098</Text>;
      },
    },
    {
      key: "nomorTelephone",
      title: "Nomor Telephone",
      capitalize: true,
      render: () => {
        return <Text>098098098</Text>;
      },
    },
    {
      key: "jabatan",
      title: "Jabatan",
      capitalize: true,
      render: () => {
        return <Text>098098098</Text>;
      },
    },
    {
      key: "username",
      title: "Username",
      capitalize: true,
      render: () => {
        return <Text>098098098</Text>;
      },
    },
  ];

  return (
    <Flex flexDir="column" gap="20px" p="20px" w="full">
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">List Data Users</BreadcrumbLink>
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
            List Data Users
          </Text>
          <Flex gap="10px">
            <Button
              color="monika-primary.500"
              variant="outline"
              borderColor="monika-primary.500"
              leftIcon={<TfiExport color="monika-primary.500" />}
              _hover={{ bg: "monika-primary.500", color: "white" }}
              fontWeight={600}
            >
              Export Data
            </Button>
            <Button
              leftIcon={<PiPlusCircle size={20} />}
              fontWeight={600}
              variant="outline"
              color="monika-primary.500"
              borderColor=" monika-primary.500"
              onClick={() =>
                router.push(
                  `/dashboard/${router?.query.role}/master-data/data-user/add`
                )
              }
            >
              Add Users
            </Button>
          </Flex>
        </Flex>
        <Divider />

        {/* list asset kdo header */}
        {/* <AssetKDOHeader /> */}

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

export default DataUser;
