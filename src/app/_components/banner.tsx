"use client";
import Image from "next/image";
import bgImage from "@/assets/images/homeHeroBg.png";
import CTA_Btn from "@/components/ctaBtn";
import { useEffect, useState } from "react";
import Logo from "@/assets/images/hero-logo.png";
import AnimatedContent from "./animatedContent";

const Banner = () => {
  const CONTENT: { heading: string; desc: string }[] = [
    {
      heading: "Elevate with Industry Experiences",
      desc: "We are a reliable AWS partner, rooted in cloud-native practices. Our unparalleled expertise with Amazon Web Services reflects our extensive experience and presence in the field.",
    },
    {
      heading: "Trusted Partner in Cloud Computing",
      desc: "InNeed is not just a cloud provider; we're your trusted partner to stay at the forefront of technological advancements with Machine learning automatons personalized for your business.",
    },
    {
      heading: "Digital Transformation Through Innovation and AI",
      desc: "We believe in amplifying your business through strategic solutions seamlessly integrating with your existing infrastructure. Innovate and elevate Digital Transformations with InNeed.",
    },
  ];
  // State to track the current index
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Function to update the index
    const updateContent = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % CONTENT.length);
    };

    // Set up an interval
    const intervalId = setInterval(updateContent, 3000); // 3 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [CONTENT.length]); // Dependency array includes contentList.length

  return (
    <section className="relative py-11 lg:py-14 mb-11">
      <Image src={bgImage} alt="banner-bg" fill className="z-0 object-cover" />
      <div className="relative z-10 container mx-auto px-6 sm:px-10 flex flex-col lg:flex-row gap-7 text-white">
        <div className="flex flex-1 flex-col">
          <div>
            <Image
              src={Logo}
              alt="aws-logo"
              className="w-auto h-[100px] sm:h-[140px]"
              style={{ animation: "drift 20s infinite" }}
            />
            <style jsx>{`
              @keyframes drift {
                0% {
                  transform: translateY(0);
                }
                50% {
                  transform: translateY(-40px);
                }
                100% {
                  transform: translateY(0);
                }
              }
            `}</style>
          </div>
          <div className="min-h-[320px] min-[350px]:min-h-[290px] min-[400px]:min-h-[230px] min-[500px]:min-h-[200px] md:min-h-[200px] lg:min-h-[380px] xl:min-h-[400px] 2xl:min-h-[320px]">
            <AnimatedContent
              key={currentIndex}
              heading={CONTENT[currentIndex].heading}
              desc={CONTENT[currentIndex].desc}
            />
          </div>
          <CTA_Btn className="mt-2" label="our services" href="/" />
        </div>
        <div className="flex-1">
          <div className="w-[296px] h-[296px] md:w-[496px] md:h-[496px] lg:w-[360px] lg:h-[360px] 2xl:w-[496px] 2xl:h-[496px] rounded-full bg-slate-400 mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
