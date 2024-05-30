import {
    Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import dynamic from "next/dynamic";
import { FaRegUser } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/router";

const EmbeddedMaps = dynamic(() => import("../../_components/embeded-maps"), {
  ssr: false,
});
const MapsDetail = () => {
    const router = useRouter()
  return (
    <Flex flexDir="column" gap="20px">
    <Button w="fit-content" _hover={{bg: "transparent"}} onClick={() => router.push(`/dashboard/${router.query.role}/master-data/data-kendaraan`)} leftIcon={<IoArrowBack />} bg="transparent">Back</Button>
      <Flex
        flexDir="column"
        bg="white"
        w="full"
        borderRadius="10px"
        gap="20px"
        p="30px"
      >
        <Text fontWeight={600} textAlign="center" fontSize="24px">
          Detail Koordinat Kendaraan
        </Text>
        <EmbeddedMaps />

        <Flex gap="10px" alignItems="center">
          <FaRegUser size={20} />
          <Text fontSize="20px" fontWeight={600}>
            Informasi Pengguna
          </Text>
        </Flex>
        <Divider />
        <Grid templateColumns="repeat(2,1fr)">
          <GridItem>
            <UnorderedList>
              <Flex
                flexDir="column"
                gap="5px"
                fontFamily="Poppins"
                fontWeight="600"
              >
                <ListItem>Asal SKPD</ListItem>
                <ListItem>NIP</ListItem>
                <ListItem>Nama</ListItem>
                <ListItem>Jabatan</ListItem>
                <ListItem>Nomor Telephone</ListItem>
                <ListItem>Email</ListItem>
                <ListItem>Alamat Rumah</ListItem>
              </Flex>
            </UnorderedList>
          </GridItem>
          <GridItem>
            <Flex flexDir="column" gap="5px">
              <Text>BPKAD</Text>
              <Text>3738922738</Text>
              <Text>Krisela Ardeani</Text>
              <Text>Manager</Text>
              <Text>0828282828</Text>
              <Text>krisela@polban.ac.id</Text>
              <Text>Kp. Konoha Ds. Canada Kab. Australia</Text>
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  );
};

export default MapsDetail;
