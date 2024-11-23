"use client";
import CTA_Btn from "@/components/ctaBtn";
import { useEffect, useState } from "react";

const Intro = () => {
  const [zoomIn, setZoomIn] = useState<boolean>(false);

  useEffect(() => {
    setZoomIn(true);
  }, []);
  return (
    <div
      className={`transition-all duration-1000 ${
        zoomIn ? "scale-100 opacity-100" : "scale-[.6] opacity-0"
      }`}
    >
      <h1 className="text-4xl sm:text-6xl lg:text-5xl xl:text-6xl text-textPrimary font-medium sm:tracking-[-1px] leading-[1.1] text-center">
        InNeed is Empowering Businesses Globally
      </h1>
      <p className="text-textSecondary sm:text-xl md:text-2xl my-7 sm:my-10 text-center">
        From AI-driven insights to cloud-native services, we unlock your digital
        potential.
      </p>
      <div className="flex justify-center my-6 sm:my-12">
        <CTA_Btn label="careers" href="https://careers.inneed.cloud/" />
      </div>
    </div>
  );
};

export default Intro;
