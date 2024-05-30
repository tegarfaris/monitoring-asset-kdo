import { SetStateAction, useMemo, useState } from "react";
import { INavbarItem, navbarItem } from "../../components/sidebar/navbar.config";
import { useRouter } from "next/router";
import { ERole } from "../../interface/auth.interface";

export interface IUseAuthorizationMenu {
  filteredMenu: INavbarItem[];
  shrink: boolean;
  setShrink: React.Dispatch<SetStateAction<boolean>>;
}

const useAuthorizationMenu = (): IUseAuthorizationMenu => {
  const router = useRouter();
  const [shrink, setShrink] = useState<boolean>(false);

  const filteredMenu = useMemo(() => {
    const role = router?.query.role as ERole;

    if (!role) {
      return [];
    }

    return navbarItem
      .map((nav) => {
        if (nav.authorization.includes(role)) {
          // If the parent item is authorized, include it and filter its child items
          const filteredChildItems = nav.childItems?.filter((child) =>
            child.authorization.includes(role)
          );

          return {
            ...nav,
            childItems: filteredChildItems,
          };
        }

        if (nav.childItems) {
          // If the parent item is not authorized, filter its child items
          const filteredChildItems = nav.childItems.filter((child) =>
            child.authorization.includes(role)
          );

          if (filteredChildItems.length > 0) {
            // Include the parent item only if it has authorized child items
            return { ...nav, childItems: filteredChildItems };
          }
        }

        // Exclude the parent item if it and its child items are not authorized
        return null;
      })
      .filter((nav) => nav !== null); // Filter out null values
  }, [router?.query.role]);

  return {
    filteredMenu: filteredMenu as INavbarItem[], // Type assertion to satisfy TypeScript
    shrink,
    setShrink,
  };
};

export default useAuthorizationMenu;
