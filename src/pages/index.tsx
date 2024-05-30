import { NextPageWithLayout } from "../app/interface/dashboard.interface";
import { Box, ChakraProvider } from "@chakra-ui/react";
import theme from "../../themes/theme";
import { useRouter } from "next/router";
import Splash from "../app/components/splash";
import React from "react";

const Dashboard: NextPageWithLayout = () => {
  const router = useRouter();

  // logic for show splash and then go to login or dashboard here
  React.useEffect(() => {
    setTimeout(() => {
      if (router.asPath === "/") {
        router.replace(`/auth/register`);
      } else {
        router.replace("/dashboard/data-kendaraan");
      }
    }, 1000);
  }, [router]);

  return (
    <Box>
      <Splash />
    </Box>
  );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page: React.ReactElement) {
  return <ChakraProvider theme={theme}>{page}</ChakraProvider>;
};
