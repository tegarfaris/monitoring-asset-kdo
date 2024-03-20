
import { Inter } from "next/font/google";
import { NextPageWithLayout } from "../app/interface/dashboard.interface";
import DashboardPage from "../app/page-modules/dashboard-page";
import DashboardLayout from "../app/layout/dashboard-layout";

const Dashboard: NextPageWithLayout = () => {
  return <DashboardPage />;
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};