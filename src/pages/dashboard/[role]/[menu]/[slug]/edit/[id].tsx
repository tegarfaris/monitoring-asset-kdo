import ComingSoon from '@/monitoring/app/page-modules/coming-soon';
import FormEditDataKDO from '@/monitoring/app/page-modules/master-data/data-kendaraan/_sub-modules/edit';
import { useRouter } from 'next/router'
import React from 'react'

const EditPage = () => {
 const router = useRouter();
 switch (router.query.slug) {
    case "data-kendaraan":
        return <FormEditDataKDO />
    default:
        return <ComingSoon />
 }
}

export default EditPage