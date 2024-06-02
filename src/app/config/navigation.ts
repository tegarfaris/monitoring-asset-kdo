export const NAVIGATION = {
  auth: {
    login: "/auth/login",
  },
  dashboard: {
    admin: {
      profile: "/dashboard/admin/profile",
      dashboard: "/dashboard/admin",
      "master-data": {
        "data-kendaraan": {
          list: "/dashboard/admin/master-data/data-kendaraan",
          add: "/dashboard/admin/master-data/data-kendaraan/add",
        },
        "data-user": {
          list: "/dashboard/admin/master-data/data-user",
          add: "/dashboard/admin/master-data/data-user/add",
        },
        "data-admin": {
          list: "/dashboard/admin/master-data/data-admin",
          add: "/dashboard/admin/master-data/data-admin/add",
        },
      },
    },
    user: {
      profile: "/dashboard/user/profile",
      dashboard: "/dashboard/user",
      "master-data": {
        "data-kendaraan": {
          list: "/dashboard/user/master-data/data-kendaraan",
          add: "/dashboard/user/master-data/data-kendaraan/add",
        },
        "data-user": {
          list: "dashboard/user/master-data/data-user",
          add: "/dashboard/user/master-data/data-user/add",
        },
      },
    },
  },
};

type AdminMenu = keyof typeof NAVIGATION.dashboard.admin;
type UserMenu = keyof typeof NAVIGATION.dashboard.user;

export type DashboardMenu = AdminMenu | UserMenu;

export const adminMenu = Object.keys(NAVIGATION.dashboard.admin).map(
  (menu) => menu as AdminMenu
);

export const userMenu = Object.keys(NAVIGATION.dashboard.user).map(
  (menu) => menu as UserMenu
);
