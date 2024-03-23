import { ERole } from '@/monitoring/app/interface/auth.interface';
import AssetKDOList from '@/monitoring/app/page-modules/asset-kdo/_sub-modules/asset-kdo-list';
import ComingSoon from '@/monitoring/app/page-modules/coming-soon';
import EmployeePage from '@/monitoring/app/page-modules/employee-page/_sub-modules';
import { useRouter } from 'next/router'
import React from 'react'

const Role = () => {
    const router = useRouter();
    switch (router.query.role) {
        case ERole.ADMIN:
            return <AssetKDOList />  
        case ERole.EMPLOYEE:
            return <EmployeePage />  
        default:
            <ComingSoon />;
    }
}

export default Role