import Image from "next/image";
import bgImage from "@/assets/images/homeHeroBg.png";
import CTA_Btn from "@/components/ctaBtn";

const Banner = () => {
  return (
    <section className="relative lg:py-11 mb-11">
      <Image
        src={bgImage}
        alt="banner-bg"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="relative z-10 container mx-auto px-6 sm:px-10 flex flex-col lg:flex-row gap-7 text-white">
        <div className="flex flex-1 flex-col">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
            Trusted Partner in Cloud Computing
          </h1>
          <p className="text-base md:text-2xl font-light sm:leading-7 mb-4 sm:mb-16">
            InNeed is not just a cloud provider; we're your trusted partner to
            stay at the forefront of technological advancements with Machine
            learning automatons personalized for your business.
          </p>
          <CTA_Btn label="our services" href="/" />
        </div>
        <div className="flex-1 mb-11 lg:mb-0">
          <div className="w-[296px] h-[296px] md:w-[496px] md:h-[496px] lg:w-[360px] lg:h-[360px] 2xl:w-[496px] 2xl:h-[496px] rounded-full bg-slate-400 mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
