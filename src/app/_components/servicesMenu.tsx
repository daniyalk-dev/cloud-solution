"use client";
import Link from "next/link";
import { Service } from "@/interfaces/common";
import Image from "next/image";
import AngleDownIcon from "@/assets/images/AngleDownIcon";
import { useState } from "react";

const ServicesMenu = ({ services }: { services: Service[] }) => {
  const [subServicesShow, setSubServicesShow] = useState<boolean[][]>(
    services.map((service) => Array(service.subServices.length).fill(false))
  );
  return (
    <>
      <div className="hidden lg:col-span-3 h-screen lg:flex flex-col justify-center items-start pt-12 pb-12 sticky top-0">
        <div className="mb-5 text-[#1554F5] text-2xl font-medium">
          We can build it for you.
        </div>
        <ul>
          {services.map((service, index) => (
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
      <div className="lg:col-span-9">
        {services.map((service, index) => (
          <div
            key={index}
            className="grid lg:grid-cols-2 lg:gap-12 items-center lg:py-16 lg:min-h-screen"
          >
            <Image src={service.icon} alt={`${service.label} icon`} />
            <div>
              <h2 className="text-[#070720] font-semibold text-[26px] mb-5 capitalize">
                {service.label}
              </h2>
              {service.subServices.map((subService, subIndex) => (
                <div key={subIndex} className="mb-2">
                  <button
                    className={`w-full text-left p-3 text-sm 2xl:text-base flex gap-1 2xl:gap-2 items-center rounded-xl capitalize ${
                      subServicesShow[index][subIndex]
                        ? "bg-bgPrimary text-white"
                        : "bg-[#F3F5F9] text-[#333A4E]"
                    }`}
                    onClick={() => {
                      const temp = [...subServicesShow];
                      temp[index] = Array(service.subServices.length).fill(
                        false
                      );
                      temp[index][subIndex] = !subServicesShow[index][subIndex];
                      setSubServicesShow(temp);
                    }}
                  >
                    <AngleDownIcon
                      className={`w-[14px] h-[14px] ${
                        subServicesShow[index][subIndex]
                          ? ""
                          : "-rotate-90 fill-[#333A4E] "
                      }`}
                    />
                    {subService.title}
                  </button>
                  <div
                    className={`p-3 ${
                      subServicesShow[index][subIndex] ? "" : "hidden "
                    }text-[#747496]`}
                  >
                    {subService.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServicesMenu;
