import React, { createContext } from "react";
import { IUseSidebar } from "../hooks/function/useNavigation";
import useNavigation from "../hooks/function/useNavigation";


export interface IRootContext {
  sidenav: IUseSidebar;
}

export const ProviderContext = createContext<IRootContext | undefined>(
  undefined
);

const GlobalProvider: React.FC<{
  root: IRootContext;
  children: React.ReactNode;
}> = ({ children }) => {
  const initialContext: IRootContext = {
    sidenav: useNavigation(),
  };

  return (
    <ProviderContext.Provider value={initialContext}>
      {children}
    </ProviderContext.Provider>
  );
};

export default GlobalProvider;
