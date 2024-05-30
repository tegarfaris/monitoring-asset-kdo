import { FaChartArea } from 'react-icons/fa';
import { FaChartBar } from 'react-icons/fa';
import { DashboardMenu } from "../../config/navigation";
import { ERole } from "../../interface/auth.interface";
import { IoMdList, IoMdListBox } from 'react-icons/io';
import { IoCar, IoCarOutline } from 'react-icons/io5';
import { HiOutlineUserGroup, HiUserGroup } from 'react-icons/hi';
import { RiAdminFill, RiAdminLine } from 'react-icons/ri';

export interface IChildItems {
  id: number;
  label: string;
  path: (role?: ERole) => string;
  icon: React.ReactNode;
  iconActive: React.ReactNode;
  authorization: ERole[];
}

export interface INavbarItem {
    id: number;
    label: string;
    path: (role?: ERole) => `/${DashboardMenu}` | "/";
    icon: React.ReactNode;
    iconActive: React.ReactNode;
    authorization: ERole[];
    childItems?: IChildItems[];
  }

  export const navbarItem: INavbarItem[] = [
    {
      id: 0,
      label: "Dashboard",
      path: () => "/",
      icon: <FaChartBar size={20} />,
      iconActive: <FaChartArea size={20} />,
      authorization: [ERole.ADMIN, ERole.USER]
    },
    {
      id: 1,
      label: "Master Data",
      path: () => "/master-data",
      icon: <IoMdList size={20} />,
      iconActive: <IoMdListBox size={20} />,
      authorization: [ERole.ADMIN, ERole.USER],
      childItems: [
        {
          id: 0,
          label: "Data Kendaraan",
          path: () => "/master-data/data-kendaraan",
          icon: <IoCarOutline size="18px" />,
          iconActive: <IoCar size="18px" />,
          authorization: [ERole.ADMIN, ERole.USER],
        },
        {
          id: 1,
          label: "Data Users",
          path: () => "/master-data/data-user",
          icon: <HiOutlineUserGroup size="18px" />,
          iconActive: <HiUserGroup size="18px" />,
          authorization: [ERole.ADMIN],
        },
        {
          id: 2,
          label: "Data Admin",
          path: () => "/master-data/data-admin",
          icon: <RiAdminLine size="18px" />,
          iconActive: <RiAdminFill size="18px" />,
          authorization: [ERole.ADMIN],
        },
      ]
    },
  ];