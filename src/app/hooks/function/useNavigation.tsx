import { startCase } from "lodash";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

export interface IUseSidebar {
  selectedMenu: string | null;
  changeActiveMenu: (menu: string) => void;
}

const useNavigation = () => {
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const labelActive = router.asPath.split("/");
    const cleanPath = (path?: string) => path?.replace(/-/g, " ");

    setSelectedMenu(
      labelActive.length < 2 ? "Dashboard" : startCase(cleanPath(labelActive[3]))
    );
  }, [router]);

  const changeActiveMenu = useCallback((menu: string) => {
    setSelectedMenu(menu);
  }, []);

  return { selectedMenu, changeActiveMenu };
};

export default useNavigation;
