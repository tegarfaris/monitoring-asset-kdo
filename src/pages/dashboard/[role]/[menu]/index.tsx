import React from "react";
import { useRouter } from "next/router";
import ComingSoon from "@/monitoring/app/page-modules/coming-soon";
import AssetKDOList from "@/monitoring/app/page-modules/asset-kdo/_sub-modules/asset-kdo-list";
import EmployeePage from "@/monitoring/app/page-modules/employee-page/_sub-modules";

const Menu = () => {
  const router = useRouter();
  switch (router.query.menu) {
    case "asset-kdo":
      return <AssetKDOList />;
    case "form-pengajuan":
      return <EmployeePage />
    default:
      return <ComingSoon />;
  }
};

export default Menu;
