"use client";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Testimonial } from "@/interfaces/common";
import Image, { StaticImageData } from "next/image";
import { Fragment, useEffect, useState } from "react";

type Direction = "prev" | "next";

const IndicatorIcon = ({ direction }: { direction: Direction }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="#fff"
    className={`icon ${direction === "prev" ? "rotate-180" : ""}`.trim()}
    viewBox="0 0 1024 1024"
  >
    <path d="M256 120.768 306.432 64 768 512 306.432 960 256 903.232 659.072 512z" />
  </svg>
);

const IndicatorBtn = ({ direction }: { direction: Direction }) => {
  const swiper = useSwiper();

  const handleSlide = () => {
    if (direction === "prev") swiper.slidePrev();
    else swiper.slideNext();
  };

  return (
    <button
      className={`px-3 py-2 ${
        direction === "prev" ? "bg-gradient-to-r " : "bg-gradient-to-l "
      }from-[#05E8BA] via-[#087EE1] to-[#156FF5] rounded-md`}
      onClick={() => handleSlide()}
    >
      <IndicatorIcon direction={direction} />
    </button>
  );
};

const TestimonialSlider = ({
  testimonials,
}: {
  testimonials: Testimonial[];
}) => {
  const [authorImages, setAuthorImages] = useState<StaticImageData[]>([]);

  useEffect(() => {
    const getImages = async () => {
      try {
        const images = await Promise.all(
          testimonials.map(
            (image) =>
              import(`@/assets/images/testimonials/${image.author.image}`)
          )
        );
        setAuthorImages(images);
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };

    getImages();
  }, [testimonials]);

  return (
    <Swiper grabCursor={true} loop={true} spaceBetween={10}>
      {testimonials.map((testimonial, index) => {
        const {
          summary,
          author: { name, desc },
        } = testimonial;
        return (
          <SwiperSlide key={index}>
            <p className="text-paraPrimary text-sm md:text-xl mb-4">
              {summary}
            </p>
            <div className="flex items-center gap-5">
              {authorImages[index] ? (
                <Image
                  src={authorImages[index]}
                  alt={name}
                  className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                />
              ) : (
                <div className="w-16 h-16 flex-shrink-0"></div>
              )}
              <div>
                <div className="text-bgPrimary text-xl sm:text-2xl font-semibold">
                  {name}
                </div>
                <div className="text-textSecondary text-base font-normal">
                  {desc.map((item, index) => (
                    <Fragment key={index}>
                      {item}
                      <br />
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
      <div className="flex justify-center gap-5 my-[26px] lg:my-[60px]">
        <IndicatorBtn direction="prev" />
        <IndicatorBtn direction="next" />
      </div>
    </Swiper>
  );
};

export default TestimonialSlider;
