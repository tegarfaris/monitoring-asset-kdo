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
import DATA_ADMIN from "@/monitoring/app/data/data-admin.json";
import BasicTable, {
  ITableColumns,
} from "@/monitoring/app/components/basic-table";
import { useRouter } from "next/router";
import { TfiExport } from "react-icons/tfi";
import { IAdmin } from "@/monitoring/app/interface/data-admin.interface";
import { startCase } from "lodash";

const DataAdmin = () => {
  const router = useRouter();
  const [showingData, setShowingData] = React.useState<number>(
    DATA_ADMIN.length
  );
  const { pageSize, currentPage, renderPageNumber } = usePagination({
    currentCount: showingData || 0,
    totalCount: DATA_ADMIN.length || 0,
    siblingCount: 1,
  });

  const getPaginatedData = (): IAdmin[] => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return DATA_ADMIN.slice(startIndex, endIndex) as IAdmin[];
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
      render: (data: IAdmin) => {
        return <Text>{data.nip}</Text>;
      },
    },
    {
      key: "name",
      title: "nama",
      capitalize: true,
      render: (data: IAdmin) => {
        return <Text>{startCase(data.nama)}</Text>;
      },
    },
    {
      key: "nomorTelephone",
      title: "Nomor Telephone",
      capitalize: true,
      render: (data: IAdmin) => {
        return <Text>{data.nomorTelephone}</Text>;
      },
    },
    {
      key: "jabatan",
      title: "Jabatan",
      capitalize: true,
      render: (data: IAdmin) => {
        return <Text>{startCase(data.jabatan)}</Text>;
      },
    },
    {
      key: "username",
      title: "Username",
      capitalize: true,
      render: (data: IAdmin) => {
        return <Text>{data.username}</Text>;
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
          <BreadcrumbLink href="#">List Data Admin</BreadcrumbLink>
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
            List Data Admin
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
                  `/dashboard/${router?.query.role}/master-data/data-admin/add`
                )
              }
            >
              Add Admin
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

export default DataAdmin;
