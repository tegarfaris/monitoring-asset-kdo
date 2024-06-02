import {
  Badge,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Divider,
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import BasicTable, {
  ITableColumns,
} from "../../../../../components/basic-table";
import DATA_KDO from "../../../../../data/data-kdo.json";
import usePagination from "../../../../../hooks/function/usePagination";
import { IAssetKDO } from "../../../../../interface/asset-kdo.interface";
import { startCase, upperCase } from "lodash";
import { renderKDOStatus } from "../../../../../helper/renderKDOStatus";
import { PiPlusCircle } from "react-icons/pi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import AssetKDOHeader from "../../_components/asset-kdo-header";
import { useRouter } from "next/router";
import ImageWithPopup from "../../_components/image-with-pop-up";
import { TfiExport } from "react-icons/tfi";
import { formatRupiah } from "@/monitoring/app/helper/formatRupiah.helper";

const images = [
  "https://awsimages.detik.net.id/community/media/visual/2017/10/30/25855a3e-636e-4142-a8bb-bf9d19671488_169.jpg?w=600&q=90",
  "https://umsu.ac.id/artikel/wp-content/uploads/2023/09/Cara-Mengurus-STNK-yang-Hilang-atau-Rusak-Dengan-Mudah-2023-.jpg",
  "https://asset-3.tstatic.net/jualbeli/img/njajal/2019/1/Modal-SMS--Kalian-Sudah-Bisa-cek-Keaslian-Surat-Kendaraan-Motor-Bekas-master-1247237077.jpg",
];

const normalizeString = (str: string) => str.replace(/\s+/g, "").toLowerCase();

const Listkendaraan = () => {
  const router = useRouter();
  const [showingData, setShowingData] = React.useState<number>(DATA_KDO.length);
  const [valueSearch, setValueSearch] = React.useState("");
  const [debouncedSearch, setDebouncedSearch] = React.useState(valueSearch);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(valueSearch);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [valueSearch]);

  const filteredBySearch = DATA_KDO.filter((a) =>
    normalizeString(a.nomorPolisi).includes(normalizeString(debouncedSearch))
  );

  const { pageSize, currentPage, renderPageNumber } = usePagination({
    currentCount: showingData || 0,
    totalCount:
      debouncedSearch !== "" ? filteredBySearch.length : DATA_KDO.length || 0,
    siblingCount: 1,
  });

  const getPaginatedData = (): IAssetKDO[] => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return debouncedSearch !== ""
      ? (filteredBySearch.slice(startIndex, endIndex) as IAssetKDO[])
      : (DATA_KDO.slice(startIndex, endIndex) as IAssetKDO[]);
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
      key: "kodeBarang",
      width: "full",
      title: "",
      capitalize: true,
      renderHeaderProperty: (
        <Text w="full">
          Kode Barang /<br /> ID Barang /<br />
          ID Awal
        </Text>
      ),
      render: (data: IAssetKDO) => {
        return <Text>{data.kodeBarang}</Text>;
      },
    },
    {
      key: "nomorRegister",
      title: "Nomor Register",
      capitalize: true,
      render: (data: IAssetKDO) => {
        return <Text>{data.nomorRegistrasi}</Text>;
      },
    },
    {
      key: "namaBarang",
      title: "Nama Barang",
      capitalize: true,
      render: (data: IAssetKDO) => {
        return <Text>{startCase(data.namaKendaraan)}</Text>;
      },
    },
    {
      key: "tipeKendaraan",
      title: "Tipe kendaraan",
      capitalize: true,
      render: (data: IAssetKDO) => {
        return <Text textAlign="center">{startCase(data.tipe)}</Text>;
      },
    },
    {
      key: "coordinates",
      title: "Koordinat GPS",
      hide: router?.query.role === "user" && true,
      capitalize: true,
      render: (data: IAssetKDO) => {
        return (
          <Flex justifyContent="center">
            <Text
              cursor="pointer"
              onClick={() =>
                router.push(
                  `/dashboard/${router?.query.role}/master-data/data-kendaraan/maps/${data.id}`
                )
              }
              textAlign="center"
              bg="monika-primary.500"
              color="white"
              w="fit-content"
              px="10px"
              py="2px"
              borderRadius="full"
              _hover={{ bg: "monika-primary.200", color: "monika-primary.500" }}
              fontWeight={600}
            >
              Lacak Kendaraan
            </Text>
          </Flex>
        );
      },
    },
    {
      key: "status",
      title: "Status",
      hide: router?.query.role === "user" && true,
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
    {
      key: "ukuranKendaraan",
      title: "Ukuran / CC",
      capitalize: true,
      render: (data: IAssetKDO) => {
        return <Text>{startCase(data.ccKendaraan)}</Text>;
      },
    },
    {
      key: "bahan",
      title: "Bahan",
      capitalize: true,
      render: () => {
        return <Text>Besi</Text>;
      },
    },
    {
      key: "tahunPerolehan",
      title: "Tahun Perolehan",
      capitalize: true,
      render: (data: IAssetKDO) => {
        return <Text>{startCase(data.tahunPerolehan as string)}</Text>;
      },
    },
    {
      key: "nomorPabrik",
      title: "Nomor Pabrik",
      capitalize: true,
      render: (data: IAssetKDO) => {
        return <Text>{startCase(data.nomorPabrik)}</Text>;
      },
    },
    {
      key: "nomorRangka",
      title: "Nomor Rangka",
      capitalize: true,
      render: (data: IAssetKDO) => {
        return <Text>{startCase(data.nomorRangka)}</Text>;
      },
    },
    {
      key: "nomorMesin",
      title: "Nomor Mesin",
      capitalize: true,
      render: (data: IAssetKDO) => {
        return <Text>{startCase(data.nomorMesin)}</Text>;
      },
    },
    {
      key: "nomorPolisi",
      title: "Nomor Polisi",
      capitalize: true,
      render: (data: IAssetKDO) => {
        return <Text textAlign="center">{data.nomorPolisi}</Text>;
      },
    },
    {
      key: "nomor BPKB",
      title: "Nomor BPKB",
      capitalize: true,
      render: (data: IAssetKDO) => {
        return <Text>{startCase(data.nomorBPKB)}</Text>;
      },
    },
    {
      key: "caraPerolehan",
      title: "Cara Perolehan",
      capitalize: true,
      render: (data: IAssetKDO) => {
        return <Text>{upperCase(data.caraPerolehan)}</Text>;
      },
    },
    {
      key: "kondisi",
      title: "Kondisi",
      capitalize: true,
      render: (data: IAssetKDO) => {
        return <Text>{startCase(data.kondisiKendaraan)}</Text>;
      },
    },
    {
      key: "harga",
      title: "Harga",
      capitalize: true,
      render: (data: IAssetKDO) => {
        return <Text>{formatRupiah(data.harga)}</Text>;
      },
    },
    {
      key: "buktiFisikLegal",
      title: "Bukti Fisik Legal",
      capitalize: true,
      render: () => {
        return <ImageWithPopup images={images} />;
      },
    },
    {
      key: "",
      title: "Aksi",
      render: (data: IAssetKDO) => {
        return (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<BsThreeDotsVertical />}
              bg="transparent"
            />
            <MenuList>
              <MenuItem
                icon={<MdEdit />}
                command="⌘N"
                onClick={() =>
                  router.push(
                    `/dashboard/${router?.query.role}/master-data/data-kendaraan/edit/${data.id}`
                  )
                }
              >
                Edit Data KDO
              </MenuItem>
              <MenuItem
                display={router?.query.role === "admin" ? "flex" : "none"}
                icon={<FaTrash />}
                command="⌘⇧N"
              >
                Hapus Data KDO
              </MenuItem>
            </MenuList>
          </Menu>
        );
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
          <BreadcrumbLink href="#">
            Aset Kendaraan Dinas Operasional
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
            List Aset Kendaraan Dinas Operasional
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
                  `/dashboard/${router?.query.role}/master-data/data-kendaraan/add`
                )
              }
            >
              Add KDO
            </Button>
          </Flex>
        </Flex>
        <Divider />

        {/* list asset kdo header */}
        <AssetKDOHeader setValueSearch={setValueSearch} />

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

export default Listkendaraan;
