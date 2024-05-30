import ComingSoon from "@/monitoring/app/page-modules/coming-soon";
import DataAdminMain from "@/monitoring/app/page-modules/master-data/data-admin";
import Listkendaraan from "@/monitoring/app/page-modules/master-data/data-kendaraan/_sub-modules/list-kendaraan";
import DataUserMain from "@/monitoring/app/page-modules/master-data/data-user";
import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const Slug = () => {
  const router = useRouter();

  return (
    <Flex w="100%" minH="100%" flexGrow="1">
      {(() => {
        switch (router.query.slug) {
          case "data-kendaraan":
            return <Listkendaraan />;
          case "data-admin":
            return <DataAdminMain />;
          case "data-user":
            return <DataUserMain />;
          default:
            return <ComingSoon />;
        }
      })()}
    </Flex>
  );
};

export default Slug;
