import Image from "next/image";
import Logo from "@/assets/images/InNeed-blue.png";
import Link from "next/link";
import { render } from "react-dom";

interface MenuItem {
  label: string;
  items: {
    label: string;
    href: string;
  }[];
}

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="Icons"
    width={16}
    height={16}
    fill="#000"
    viewBox="0 0 32 32"
  >
    <g id="SVGRepo_iconCarrier">
      <style>
        {
          ".st1{fill:none;stroke:#000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}"
        }
      </style>
      <path
        d="M17.6 18.8c-.4.4-.8 1-1.1 1.5-1.8-1.4-3.4-3.1-4.8-4.8.6-.3 1.1-.7 1.5-1.1 2-2 1.3-4.6-.7-6.6S8 5 5.9 7.1s-2.3 5.7-.7 8c2.9 4.4 7.3 8.8 11.7 11.7 2.4 1.6 6 1.3 8-.7s1.3-4.6-.7-6.6-4.6-2.8-6.6-.7z"
        style={{
          fill: "none",
          stroke: "#000",
          strokeWidth: 2,
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
        }}
      />
      <path
        d="M27.9 13.9C27.9 8.4 23.5 4 18 4M23 13.7c0-2.6-2.2-4.7-4.9-4.7"
        className="st1"
      />
    </g>
  </svg>
);

const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m3.028 10 7.197 4.817c.641.427.962.641 1.309.724a2 2 0 0 0 .932 0c.346-.083.667-.297 1.309-.724L20.97 10M10.298 4.069l-5.8 3.642c-.547.344-.82.515-1.019.748a2 2 0 0 0-.388.702C3 9.452 3 9.775 3 10.421V16.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C4.52 20 5.08 20 6.2 20h11.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C21 18.48 21 17.92 21 16.8v-6.379c0-.646 0-.969-.091-1.26a2 2 0 0 0-.388-.702c-.199-.233-.472-.404-1.02-.748l-5.8-3.642c-.616-.388-.925-.582-1.256-.657a2 2 0 0 0-.89 0c-.331.075-.64.27-1.257.657Z"
    />
  </svg>
);

const Footer = () => {
  const MENU_ITEMS: MenuItem[] = [
    {
      label: "our services",
      items: [
        { label: "cloud services", href: "/cloud-services" },
        { label: "devops services", href: "/devops-services" },
        { label: "development services", href: "/dev-services" },
        { label: "professional services", href: "/professional-services" },
        { label: "IT consulting services", href: "/it-consulting-services" },
        { label: "managed services", href: "/managed-services" },
      ],
    },
    {
      label: "about us",
      items: [
        { label: "vision", href: "/about-vision" },
        { label: "key values", href: "/key-values" },
        { label: "team", href: "/about-team" },
      ],
    },
    {
      label: "career",
      items: [{ label: "work culture", href: "/work-culture" }],
    },
  ];

  const renderMenuItem = (item: MenuItem) => (
    <div className="flex flex-col">
      <span className="mb-1 sm:mb-5 text-textPrimary text-lg font-semibold capitalize">
        {item.label}
      </span>
      <ul
        className={`leading-4 sm:leading-8 ${
          item.label === MENU_ITEMS[1].label ? "mb-5" : ""
        }`.trim()}
      >
        {item.items.map((link, index) => (
          <li
            key={index}
            className="text-textSecondary text-base font-normal capitalize"
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="border-t border-stroke">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8 sm:py-10 md:py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="flex flex-col">
            <Link href={"/"} className="my-3 md:mb-8">
              <Image src={Logo} alt="logo" className="w-24 sm:w-32 md:w-1/2" />
            </Link>
            <div className="mb-2 md:mb-4">
              <b>USA Office:</b>{" "}
              <span>
                901 N Central Expy
                <br />
                McKinney, TX 65069
              </span>
            </div>
            <div className="mb-2 md:mb-4">
              <b>Bangladesh Office:</b>{" "}
              <span>
                Flat 11-JK, 10th floor,
                <br />
                KA-90, Progoti Sharani, Kuril, Dhaka 1229
              </span>
            </div>
          </div>
          {renderMenuItem(MENU_ITEMS[0])}
          <div>
            {renderMenuItem(MENU_ITEMS[1])}
            {renderMenuItem(MENU_ITEMS[2])}
          </div>
          <div className="flex flex-col">
            <span className="mb-1 sm:mb-5 text-textPrimary text-lg font-semibold">
              Reach us
            </span>
            <ul className="leading-4 sm:leading-8">
              <li className="text-textSecondary text-base font-normal">
                <Link className="flex gap-2 items-center" href={"/"}>
                  <PhoneIcon />
                  <img src="/usa.png" alt="usa-flag" />
                  <span>+1 469-850-9786</span>
                </Link>
              </li>
              <li className="text-textSecondary text-base font-normal">
                <Link className="flex gap-2 items-center" href={"/"}>
                  <PhoneIcon />
                  <img src="/bd.png" alt="usa-flag" />
                  <span>+880 1779-824-005</span>
                </Link>
              </li>
              <li className="text-textSecondary text-base font-normal">
                <Link className="flex gap-2 items-center" href={"/"}>
                  <MailIcon />
                  <span>info@inneed.cloud</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:flex justify-between py-5 border-t-[0.5px] border-stroke">
          <div className="mb-3 md:mb-0">
            <span className="text-textSecondary text-base font-medium">
              © 2024 InNeed Intelligent Cloud. All rights reserved.
            </span>
          </div>
          <div className="flex gap-2">
            <Link href={"/"} target="_blank">
              <img
                src="/linkedin.png"
                alt="linkedIn Icon"
                className="w-7 h-7"
              />
            </Link>
            <Link href={"/"} target="_blank">
              <img
                src="/facebook.png"
                alt="facebook Icon"
                className="w-7 h-7"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
