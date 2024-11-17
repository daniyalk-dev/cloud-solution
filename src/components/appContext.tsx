"use client";
import { AppContextType } from "@/types/common";
import { createContext, ReactNode, useEffect, useState } from "react";

export const AppContext = createContext<AppContextType>({
  screenWidth: 0,
});

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AppContext.Provider value={{ screenWidth }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
