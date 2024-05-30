import React from "react";
import { useRouter } from "next/router";
import ComingSoon from "@/monitoring/app/page-modules/coming-soon";
import DashboardPage from "@/monitoring/app/page-modules/dashboard-page";

const Menu = () => {
  const router = useRouter();
  switch (router.query.menu) {
    case "dashboard":
      return <DashboardPage />;
    default:
      return <ComingSoon />;
  }
};

export default Menu;
