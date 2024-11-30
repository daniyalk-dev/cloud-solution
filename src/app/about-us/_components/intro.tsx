"use client";
import CTA_Btn from "@/components/ctaBtn";
import useIntersectionObserver from "@/custom-hooks/intersectionObserver";
import { useRef } from "react";

const Intro = () => {
  const animatedRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver([animatedRef], true)[0];
  return (
    <section className="container mx-auto px-4 sm:px-8 my-8 sm:my-16 md:my-20">
      <div
        ref={animatedRef}
        className={`transition-all duration-1000 ${
          isVisible ? "" : "scale-[.6] opacity-0"
        }`.trim()}
      >
        <h1 className="text-4xl sm:text-6xl lg:text-5xl xl:text-6xl text-textPrimary font-medium sm:tracking-[-1px] leading-[1.1] text-center">
          InNeed is Empowering Businesses Globally
        </h1>
        <p className="text-textSecondary sm:text-xl md:text-2xl my-7 sm:my-10 text-center">
          {`From AI-driven insights to cloud-native services, we unlock your digital
        potential.`}
        </p>
        <div className="flex justify-center my-6 sm:my-12">
          <CTA_Btn label="careers" href="https://pk.indeed.com/" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
