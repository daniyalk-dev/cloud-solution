"use client";
import { useEffect, useState } from "react";
import ClientLogo from "./clientLogo";
import { DynamicImages } from "@/interfaces/common";

const Clients = ({ clientLogos }: { clientLogos: string[] }) => {
  const [logos, setLogos] = useState<DynamicImages>({});

  useEffect(() => {
    clientLogos.forEach((logo, index) =>
      import(`@/assets/images/testimonials/${logo}`)
        .then((image) => {
          setLogos((prevImages: DynamicImages) => ({
            ...prevImages,
            [index]: image.default,
          }));
        })
        .catch((err) => {
          console.error(err);
        })
    );
  }, [clientLogos]);

  return (
    <>
      {clientLogos.map((_, index: number) => (
        <ClientLogo key={index} image={logos[index]} />
      ))}
    </>
  );
};

export default Clients;
{
}
