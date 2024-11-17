"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import Logo from "@/assets/images/InNeed-white.png";
import CTA_Btn from "@/components/ctaBtn";
import { AppContext } from "@/components/appContext";
import { AppContextType } from "@/types/common";

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

const AngleDownIcon = ({ className }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="Layer_1"
    width={20}
    height={20}
    className={className}
    fill="#fff"
    viewBox="0 0 24 24"
  >
    <g id="SVGRepo_iconCarrier">
      <style>{".st0{fill:none}"}</style>
      <path d="M3.7 7.8 2.3 9.2l9 9 .7.7.7-.7 9-9-1.4-1.4-8.3 8.3-8.3-8.3z" />
      <path d="M0 0h24v24H0z" className="st0" />
      <path d="M0 0h24v24H0z" className="st0" />
    </g>
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

const Header: React.FC = () => {
  const { screenWidth } = useContext<AppContextType>(AppContext);
  const menuItems: {
    label: string;
    submenu?: { label: string; href: string }[];
    href?: string;
  }[] = [
    {
      label: "services",
      submenu: [
        { label: "cloud services", href: "/cloud-services" },
        { label: "devops services", href: "/devops-services" },
        { label: "development services", href: "/development-services" },
        { label: "professional services", href: "/professional-services" },
        { label: "it consulting services", href: "/it-consulting-services" },
        { label: "managed services", href: "/managed-services" },
      ],
    },
    {
      label: "case studies",
      href: "/case-studies",
    },
    {
      label: "blog",
      href: "/blog",
    },
    {
      label: "about us",
      submenu: [
        { label: "about inneed", href: "/about-inneed" },
        { label: "executive team", href: "/executive-team" },
        { label: "advisory team", href: "/advisory-team" },
        { label: "technology team", href: "/technology-team" },
      ],
    },
    {
      label: "career",
      href: "/career",
    },
    {
      label: "aws",
      href: "/aws",
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  // isSubMenuOpen is an array of boolean values to keep track of the open/close state of each submenu
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean[]>(
    Array(menuItems.length).fill(false)
  );

  useEffect(() => {
    if (screenWidth >= 1024) setIsMenuOpen(false);
  }, [screenWidth]);

  useEffect(() => {
    if (isMenuOpen) document.body.classList.add("overflow-y-hidden");
    else {
      document.body.classList.remove("overflow-y-hidden");
      setIsSubMenuOpen(Array(menuItems.length).fill(false));
    }
  }, [isMenuOpen, menuItems.length]);

  // toggleSubMenu function toggles the open/close state of the submenu at the given index
  const toggleSubMenu = (index: number) => {
    const newIsSubMenuOpen = [...isSubMenuOpen];
    newIsSubMenuOpen[index] = !newIsSubMenuOpen[index];
    setIsSubMenuOpen(newIsSubMenuOpen);
  };

  return (
    <header
      className={`bg-black w-full top-0 ${
        isMenuOpen ? "fixed h-screen overflow-y-auto" : "sticky"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-8 py-6 lg:py-0">
        <div className="flex justify-between items-center">
          <Link href={"/"} aria-label="logo">
            <Image
              width={80}
              height={40}
              src={Logo}
              className="lg:w-[144px] lg:h-[60px]"
              alt="logo"
            />
          </Link>
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <CrossIcon /> : <HamburgerIcon />}
          </button>
        </div>
        <ul
          className={`font-mono text-xl py-8 text-white uppercase lg:flex ${
            isMenuOpen ? "" : "hidden"
          }`.trim()}
          style={{ wordSpacing: 8 }}
        >
          {menuItems.map((item, index) => (
            <li key={index} className={`${index && "my-6 lg:my-0"}`}>
              {item.href ? (
                <Link href={item.href}>{item.label}</Link>
              ) : (
                <button
                  className="uppercase flex items-center gap-2"
                  style={{ wordSpacing: 8 }}
                  onClick={() => toggleSubMenu(index)}
                >
                  {item.label}
                  <AngleDownIcon
                    className={isSubMenuOpen[index] ? "rotate-180" : ""}
                  />
                </button>
              )}
              {!item.href && item.submenu && (
                <ul
                  className={`${isSubMenuOpen[index] ? "" : "hidden"}`.trim()}
                >
                  {item.submenu.map((subitem, subindex) => (
                    <li key={subindex} className="px-4 py-3">
                      <Link href={subitem.href}>{`- ${subitem.label}`}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li className="my-6 lg:my-0">
            <CTA_Btn label="Contact Us" href="/contact-us" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
