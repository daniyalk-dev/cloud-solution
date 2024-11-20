"use client";
import { AppContextType } from "@/types/common";
import { createContext, ReactNode, useEffect, useRef, useState } from "react";

export const AppContext = createContext<AppContextType>({
  screenWidth: 0,
  scrollY: 0,
  showHeader: true,
});

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [showHeader, setShowHeader] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const lastScrollYRef = useRef(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollYRef.current) {
      // Scrolling down
      setShowHeader(false);
    } else {
      // Scrolling up
      setShowHeader(true);
    }
    lastScrollYRef.current = currentScrollY;
    setScrollY(currentScrollY);
  };

  const handleResize = () => setScreenWidth(window.innerWidth);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppContext.Provider value={{ screenWidth, scrollY, showHeader }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
