import React from 'react'
import ComingSoon from '@/monitoring/app/page-modules/coming-soon';
import FormAddDataAdmin from '@/monitoring/app/page-modules/master-data/data-admin/add';
import FormAddkendaraan from '@/monitoring/app/page-modules/master-data/data-kendaraan/_sub-modules/add';
import FormAddDataUser from '@/monitoring/app/page-modules/master-data/data-user/add';
import { useRouter } from 'next/router';

const Add = () => {
const router = useRouter()

    switch (router.query.slug) {
        case "data-kendaraan":
            return <FormAddkendaraan />
        case "data-user":
            return <FormAddDataUser />
        case "data-admin":
            return <FormAddDataAdmin />
        default:
            return <ComingSoon />
    }
}

export default Add