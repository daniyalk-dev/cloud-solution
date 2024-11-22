"use client";
import { useContext } from "react";
import { AppContext } from "@/components/appContext";
import Link from "next/link";

const ServicesMenu = () => {
  const { SERVICES } = useContext(AppContext);
  return (
    <>
      <div className="lg:col-span-3 h-screen flex flex-col justify-center items-start pt-12 pb-12 sticky top-0">
        <div className="mb-5 text-[#1554F5] text-2xl font-medium">
          We can build it for you.
        </div>
        <ul>
          {SERVICES.map((service, index) => (
            <li
              key={index}
              className="text-xl sm:text-[26px] mb-4 opacity-60 capitalize"
            >
              <Link href={service.href} className="flex">
                <span className="text-base me-2">{index + 1}</span>
                {service.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:col-span-9"></div>
    </>
  );
};

export default ServicesMenu;
