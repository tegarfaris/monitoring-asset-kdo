import { Inter } from "next/font/google";
import { NextPageWithLayout } from "../app/interface/dashboard.interface";
import DashboardPage from "../app/page-modules/dashboard-page";
import DashboardLayout from "../app/layout/dashboard-layout";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../../themes/theme";
import { useRouter } from "next/router";
import ComingSoon from "../app/page-modules/coming-soon";

const Dashboard: NextPageWithLayout = () => {
  const router = useRouter();
  return <ComingSoon />;
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <ChakraProvider theme={theme}>
      <DashboardLayout>{page}</DashboardLayout>
    </ChakraProvider>
  );
};
