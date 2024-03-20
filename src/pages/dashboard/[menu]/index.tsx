import React from "react";
import { useRouter } from "next/router";
import AssetKDO from "@/monitoring/app/page-modules/asset-kdo";
import ComingSoon from "@/monitoring/app/page-modules/coming-soon";

const Dashboard = () => {
  const router = useRouter();
console.log(router.query.menu)
  switch (router.query.menu) {
    case "asset-kdo":
      return <AssetKDO />;
    default:
      return <ComingSoon />;
  }
};

export default Dashboard;
