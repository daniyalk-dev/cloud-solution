"use client";
import Image from "next/image";
import RowTogether from "@/assets/images/about/row-together.png";
import useIntersectionObserver from "@/custom-hooks/intersectionObserver";
import { useRef } from "react";

const Story = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const isVisible = useIntersectionObserver([imgRef], true)[0];
  return (
    <section className="container mx-auto my-8 sm:my-16 md:my-20 xl:my-40 px-4 sm:px-8">
      <div className="grid xl:grid-cols-2 gap-0 xl:gap-20">
        <div>
          <div className="mb-2 md:mb-6 sm:text-lg md:text-2xl lg:text-xl font-semibold text-bgPrimary uppercase">
            who we are
          </div>
          <h2 className="text-headingPrimary text-3xl md:text-4xl lg:text-5xl font-medium my-6 capitalize">
            our story
          </h2>
          <p className="text-paraPrimary sm:text-lg md:text-xl my-5">
            {`Our story at InNeed is one of transformation and resilience.
            Established in 2020, just before the onset of the pandemic, we
            embarked on a journey with a team of five individuals fueled by a
            passion for innovation and a commitment to client success. Today,
            InNeed has flourished into a cloud-native advanced IT consulting and
            service provider with a global presence, boasting a diverse team of
            over 50 professionals.`}
          </p>
          <p className="text-paraPrimary sm:text-lg md:text-xl my-5">
            {`We've partnered with clients in various fields like technology,
            healthcare, education, travel, and research. InNeed isn't just a
            service provider; we build partnerships, focusing on digital
            transformation through cultural shifts and innovative approaches.
            We're a testament to adaptability, collaboration, and a relentless
            pursuit of excellence.`}
          </p>
        </div>
        <Image
          ref={imgRef}
          src={RowTogether}
          alt="Row Together"
          className={`w-full transition-all duration-1000 ease ${
            isVisible ? "" : "-translate-y-[100px] opacity-0"
          }`.trim()}
        />
      </div>
    </section>
  );
};

export default Story;
