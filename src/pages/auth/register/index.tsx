import { NextPageWithLayout } from '@/monitoring/app/interface/dashboard.interface';
import AuthLayout from '@/monitoring/app/layout/auth-layout';
import Register from '@/monitoring/app/page-modules/register-page';
import React from 'react'

const RegisterPages: NextPageWithLayout = () => {
    return <Register/>;
  };
  
  export default RegisterPages;
  
  RegisterPages.getLayout = function getLayout(page: React.ReactElement) {
    return <AuthLayout>{page}</AuthLayout>;
  };