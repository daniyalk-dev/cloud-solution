"use client";
import Image from "next/image";
import { TitleDescription } from "@/interfaces/common";
import useIntersectionObserver from "@/custom-hooks/intersectionObserver";
import { useRef } from "react";

const ContentImage = ({ data }: { data: TitleDescription }) => {
  const { id, title, description, image } = data;
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver([sectionRef], true)[0];
  return (
    <section
      id={id}
      ref={sectionRef}
      className="container mx-auto px-4 sm:px-12 lg:px-24 my-10 sm:my-16 md:my-20 xl:my-32"
    >
      <div className="grid lg:grid-cols-2 gap-y-8 gap-20 items-center">
        <div className={`${id === "vision" ? "lg:order-2" : ""}`.trim()}>
          <h2 className="text-headingPrimary text-3xl md:text-4xl lg:text-5xl font-medium capitalize sm:mb-6">
            {title}
          </h2>
          <p className="text-paraPrimary sm:text-lg md:text-xl">
            {description}
          </p>
        </div>
        <Image
          src={image}
          alt="Vision"
          className={`transition-all duration-1000${
            isVisible ? "" : " scale-[.6] opacity-0"
          } ${id === "vision" ? "lg:order-1" : ""}`.trim()}
        />
      </div>
    </section>
  );
};

export default ContentImage;
