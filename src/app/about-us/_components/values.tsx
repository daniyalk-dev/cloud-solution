"use client";
import Image, { StaticImageData } from "next/image";
import CollabrationIcon from "@/assets/images/about/collaboration.png";
import ContinuousLearningIcon from "@/assets/images/about/continuous-learning.png";
import CustomerCentricIcon from "@/assets/images/about/customer-centric.png";
import ExcellenceIcon from "@/assets/images/about/excellence.png";
import InnovationIcon from "@/assets/images/about/innovation.png";
import IntegrityIcon from "@/assets/images/about/integrity.png";
import SustainabilityIcon from "@/assets/images/about/sustainability.png";
import { createRef, RefObject, useRef } from "react";
import useIntersectionObserver from "@/custom-hooks/intersectionObserver";

const Values = () => {
  const VALUES: { title: string; desc: string; image: StaticImageData }[] = [
    {
      title: "Customer-Centric Approach",
      desc: "We place our clients at the center of everything we do, ensuring their needs and goals are prioritized in our solutions and services.",
      image: CustomerCentricIcon,
    },
    {
      title: "Innovation",
      desc: "We prioritize continuous innovation to stay at the forefront of intelligent solutions, driving advancements in technology and business practices.",
      image: InnovationIcon,
    },
    {
      title: "Collaboration",
      desc: "We value and actively seek strategic partnerships, fostering a collaborative culture that enhances our ability to create impactful solutions.",
      image: CollabrationIcon,
    },
    {
      title: "Excellence",
      desc: "We are committed to delivering world-class solutions, striving for excellence in every aspect of our work to meet and exceed client expectations.",
      image: ExcellenceIcon,
    },
    {
      title: "Continuous Improvement",
      desc: "We embrace a culture of continuous Improvement & learning, staying adaptable in the ever-evolving landscape of technology and business to provide cutting-edge solutions.",
      image: ContinuousLearningIcon,
    },
    {
      title: "Integrity",
      desc: "We uphold the highest standards of integrity in all our interactions, fostering trust with clients and partners alike.",
      image: IntegrityIcon,
    },
    {
      title: "Sustainability",
      desc: "We are dedicated to contributing to a sustainable future, both environmentally and economically, in alignment with our mission for sustainable growth.",
      image: SustainabilityIcon,
    },
  ];

  const refs = useRef<RefObject<HTMLDivElement>[]>(
    VALUES.map(() => createRef<HTMLDivElement>())
  );
  const isVisible = useIntersectionObserver(refs.current, true);

  return (
    <section
      id="key-values"
      className="container mx-auto px-4 sm:px-8 py-5 sm:py-8 md:py-10 xl:py-20"
    >
      <h2 className="mb-12 lg:mb-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-center">
        Key Values
      </h2>
      <div className="flex flex-wrap justify-center gap-8 md:gap-x-7 md:gap-y-13">
        {VALUES.map((value, index) => (
          <div
            ref={refs.current[index]}
            key={index}
            className={`flex-shrink-0 transition-all duration-1000${
              isVisible[index] ? "" : " scale-[.6] opacity-0"
            } w-full md:max-w-xs lg:max-w-sm xl:max-w-md md:p-8 flex flex-col items-center gap-3`}
          >
            <Image
              src={value.image}
              alt={`${value.image} Icon`}
              className="w-14 md:w-16 lg:w-20 mb-3 md:mb-8"
            />
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-center leading-[38.4px] capitalize">
              {value.title}
            </h3>
            <p className="text-paraPrimary sm:text-lg md:text-xl text-center leading-[30px] mb-6">
              {value.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;
