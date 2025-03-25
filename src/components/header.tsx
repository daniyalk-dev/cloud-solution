"use client";
import Image, { StaticImageData } from "next/image";
import AngleDownIcon from "@/assets/images/AngleDownIcon";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import Logo from "@/assets/images/InNeed-white.png";
import CTA_Btn from "@/components/ctaBtn";
import { AppContext } from "@/components/appContext";
import { AppContextType, LinkLabel } from "@/interfaces/common";
import ServicesImage from "@/assets/images/services-menu.png";
import OurTeamImage from "@/assets/images/ourteam-menu.png";

const HamburgerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    viewBox="0 -0.5 25 25"
  >
    <path
      fill="#fff"
      d="M5.5 7.75a.75.75 0 0 0 0 1.5v-1.5Zm14 1.5a.75.75 0 0 0 0-1.5v1.5Zm-14 2.5a.75.75 0 0 0 0 1.5v-1.5Zm12 1.5a.75.75 0 0 0 0-1.5v1.5Zm-12 2.5a.75.75 0 0 0 0 1.5v-1.5Zm7 1.5a.75.75 0 0 0 0-1.5v1.5Zm-7-8h14v-1.5h-14v1.5Zm0 4h12v-1.5h-12v1.5Zm0 4h7v-1.5h-7v1.5Z"
    />
  </svg>
);

const CrossIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    viewBox="0 -0.5 25 25"
  >
    <path
      fill="#fff"
      d="M6.97 16.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm6.06-3.94a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm-1.06-1.06a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm6.06-3.94a.75.75 0 0 0-1.06-1.06l1.06 1.06Zm-5 3.94a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.94 6.06a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-5-5a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM8.03 6.47a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm0 11.06 5-5-1.06-1.06-5 5 1.06 1.06Zm5-5 5-5-1.06-1.06-5 5 1.06 1.06Zm-1.06 0 5 5 1.06-1.06-5-5-1.06 1.06Zm1.06-1.06-5-5-1.06 1.06 5 5 1.06-1.06Z"
    />
  </svg>
);

interface MenuItem {
  label: string;
  href: string;
  external?: boolean;
  submenu?: LinkLabel[];
  image?: StaticImageData;
}

const Header: React.FC = () => {
  const { screenWidth, showHeader } = useContext<AppContextType>(AppContext);
  const MENU_ITEMS: MenuItem[] = [
    {
      label: "services",
      href: "/#cloud-services",
      submenu: [
        { label: "cloud services", href: "/#cloud-services" },
        { label: "devOps services", href: "/#devops-services" },
        { label: "design services", href: "/#design-services" },
        { label: "development services", href: "/#development-services" },
        { label: "professional services", href: "/#professional-services" },
        { label: "IT consulting services", href: "/#it-consulting-services" },
        { label: "managed services", href: "/#managed-services" },
      ],
      image: ServicesImage,
    },
    {
      label: "case studies",
      href: "/#projects",
    },
    {
      label: "about us",
      href: "/about-us",
      submenu: [
        { label: "about inneed", href: "/about-us" },
        {
          label: "executive team",
          href: "/about-us?team=executive-team#our-team",
        },
        {
          label: "advisory team",
          href: "/about-us?team=advisory-team#our-team",
        },
        {
          label: "technology team",
          href: "/about-us?team=technology-team#our-team",
        },
      ],
      image: OurTeamImage,
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  // isSubMenuOpen is an array of boolean values to keep track of the open/close state of each submenu
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean[]>(
    Array(MENU_ITEMS.length).fill(false)
  );

  useEffect(() => {
    if (screenWidth >= 1024) {
      setIsMenuOpen(false);
    } else {
      if (isMenuOpen) document.body.classList.add("overflow-y-hidden");
      else {
        document.body.classList.remove("overflow-y-hidden");
        setIsSubMenuOpen(Array(MENU_ITEMS.length).fill(false));
      }
    }
  }, [screenWidth, isMenuOpen, MENU_ITEMS.length]);

  // toggleSubMenu function toggles the open/close state of the submenu at the given index
  const toggleSubMenu = (index: number) => {
    const newIsSubMenuOpen = [...isSubMenuOpen];
    newIsSubMenuOpen[index] = !newIsSubMenuOpen[index];
    setIsSubMenuOpen(newIsSubMenuOpen);
  };

  const Menu = ({ isMobile }: { isMobile: boolean }) => {
    const renderSubMenu = (item: MenuItem, index: number) => {
      if (item.submenu)
        return (
          <ul className={`${isSubMenuOpen[index] ? "" : "hidden"} lg:block`}>
            {item.submenu.map((subitem, subindex) => (
              <li
                key={subindex}
                className={`px-4 py-3 lg:px-0 lg:py-0${
                  !isMobile && item.href === "/about-us" && subindex === 0
                    ? " hidden"
                    : ""
                } lg:mb-4`}
              >
                <Link
                  href={subitem.href}
                  target={item.external ? "_blank" : "_self"}
                  onClick={() => setIsMenuOpen(false)}
                >{`- ${subitem.label}`}</Link>
              </li>
            ))}
          </ul>
        );
    };

    return (
      <ul
        className={`font-mono text-xl py-8 lg:py-0 text-white uppercase ${
          isMobile
            ? isMenuOpen
              ? "lg:hidden"
              : "hidden"
            : "hidden lg:flex lg:items-center lg:justify-center gap-8 lg:text-xs xl:text-base"
        }`}
        style={isMobile ? { wordSpacing: 8 } : { wordSpacing: 4 }}
      >
        {MENU_ITEMS.map((item, index) => (
          <li
            key={index}
            className={`${
              index ? "my-6 lg:my-0" : ""
            } group lg:py-4 lg:relative`.trim()}
          >
            {isMobile ? (
              item.submenu ? (
                <button
                  className="uppercase flex items-center gap-2"
                  style={{ wordSpacing: 8 }}
                  onClick={() => toggleSubMenu(index)}
                >
                  {item.label}
                  <AngleDownIcon
                    className={`lg:w-3 lg:h-3 xl:w-4 xl:h-4 ${
                      isSubMenuOpen[index] ? "rotate-180" : ""
                    }`}
                  />
                </button>
              ) : (
                <Link
                  href={item.href}
                  target={item.external ? "_blank" : "_self"}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            ) : item.submenu ? (
              <Link
                href={item.href}
                className="flex items-center gap-2"
                target={item.external ? "_blank" : "_self"}
              >
                {item.label}
                <AngleDownIcon className="lg:w-3 lg:h-3 xl:w-4 xl:h-4" />
              </Link>
            ) : (
              <Link
                href={item.href}
                target={item.external ? "_blank" : "_self"}
              >
                {item.label}
              </Link>
            )}
            {isMobile
              ? renderSubMenu(item, index)
              : item.submenu && (
                  <div className="absolute top-10 -translate-x-[40%] bg-black border border-stroke rounded-md p-2 hidden group-hover:grid grid-cols-3 gap-5 min-w-[60vw] 2xl:min-w-[40vw]">
                    {item.image && (
                      <Image src={item.image} alt={`${item.label} bg`} />
                    )}
                    <div className="rounded-md col-span-2 py-3">
                      {renderSubMenu(item, index)}
                    </div>
                  </div>
                )}
          </li>
        ))}
        <li className="my-6 lg:hidden">
          <CTA_Btn
            label="Contact Us"
            href="/contact-us"
            onClick={() => setIsMenuOpen(false)}
          />
        </li>
      </ul>
    );
  };

  return (
    <header
      className={`bg-black w-full top-0 z-50 ${
        isMenuOpen ? "fixed h-screen overflow-y-auto" : "sticky"
      } ${showHeader ? "" : "lg:static"}`.trim()}
    >
      <nav className="container mx-auto px-4 sm:px-8 py-6 lg:py-3">
        <div className="flex justify-between items-center">
          <Link href={"/"} aria-label="logo">
            <Image
              src={Logo}
              className="w-auto h-8 lg:w-36 lg:h-auto"
              alt="logo"
            />
          </Link>
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <CrossIcon /> : <HamburgerIcon />}
          </button>
          <Menu isMobile={false} />
          <CTA_Btn
            label="Contact Us"
            href="/contact-us"
            className="hidden lg:flex"
          />
        </div>
        <Menu isMobile={true} />
      </nav>
    </header>
  );
};

export default Header;
