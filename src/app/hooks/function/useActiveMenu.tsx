import React, { useCallback } from "react";
import { useRouter } from "next/router";
import { startCase } from "lodash";
import { ProviderContext } from "../../context/global.context";
import { DashboardMenu } from "../../config/navigation";

const useActiveMenu = () => {
  const router = useRouter();
  const root = React.useContext(ProviderContext);

  const checkRoutePath = React.useMemo(() => {
    if (router.asPath === `/dashboard/${router?.query.role}`) {
      return "dashboard";
    } else if (router.pathname === `/data-kendaraan`) {
      return "data-kendaraan";
    } 
    return startCase(
      ((router.query.menu as string) || "").replaceAll("-", " ")
    );
  }, [router, router?.query.role]);

  const isActive = useCallback(
    (path: `/${DashboardMenu}` | "/" | string) => {
      const role = router?.query.role;
      const asPath = router?.asPath;
      const queryMenu = router.query?.menu as string;

      if (path === "/" && asPath === `/dashboard/${role}`) {
        return true;
      }

      return path.includes(queryMenu);
    },
    [router?.query.role, router?.asPath, router.query?.menu]
  );
  const isActiveChild = useCallback(
    (path: string) => {
      const role = router?.query.role;
      const activePath = router?.asPath;
      
      // Default with slug of start of the pathname will return true
      return activePath.includes(path) && path !== `/dashboard/${role}/`;
    },
    [router?.query.role, router?.asPath]
  );

  return { checkRoutePath, isActive, isActiveChild };
};

export default useActiveMenu;
