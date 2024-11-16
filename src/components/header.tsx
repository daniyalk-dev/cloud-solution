import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/assets/images/InNeed-white.png";
import MenuIcon from "@/assets/images/hamburger.svg";

const Header: React.FC = () => {
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
  return (
    <header className="bg-black">
      <nav className="container mx-auto px-4 sm:px-8 py-6">
        <div className="flex justify-between items-center">
          <Link href={"/"} aria-label="logo">
            <Image width={80} height={400} src={Logo} alt="logo" />
          </Link>
          <Image width={40} height={40} src={MenuIcon} alt="menuIcon"></Image>
        </div>
        <ul className="font-mono text-xl font-medium min-h-screen overflow-y-auto py-8 text-white uppercase">
          {menuItems.map((item, index) => (
            <li key={index} className={`${index && "my-6 lg:my-0"}`}>
              {item.href ? (
                <Link href={item.href}>{item.label}</Link>
              ) : (
                <button className="uppercase">
                  {item.label}{" "}
                  <svg
                    fill="#ffffff"
                    width="20px"
                    height="20px"
                    className="inline"
                    viewBox="-8.5 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />

                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>angle-down</title>{" "}
                      <path d="M7.28 20.040c-0.24 0-0.44-0.080-0.6-0.24l-6.44-6.44c-0.32-0.32-0.32-0.84 0-1.2 0.32-0.32 0.84-0.32 1.2 0l5.84 5.84 5.84-5.84c0.32-0.32 0.84-0.32 1.2 0 0.32 0.32 0.32 0.84 0 1.2l-6.44 6.44c-0.16 0.16-0.4 0.24-0.6 0.24z" />{" "}
                    </g>
                  </svg>
                </button>
              )}
              {!item.href && item.submenu && (
                <ul className="">
                  {item.submenu.map((subitem, subindex) => (
                    <li key={subindex} className="px-4 py-3">
                      <Link href={subitem.href}>{`- ${subitem.label}`}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
