import Image from "next/image";
import BgCover from "@/assets/images/bg-cover.png";

const Blog = () => {
  return (
    <section className="relative py-8 sm:py-16 md:py-20 px-7 sm:px-3 lg:px-0">
      <Image src={BgCover} alt="banner-bg" fill className="z-0 object-cover" />
      <div className="relative text-center">
        <h1 className="text-textPrimary text-4xl lg:text-5xl xl:text-6xl font-semibold mb-6 leading-none">
          One-stop resource for all
          <br />
          the information
        </h1>
        <p className="text-[#7a7d81] md:text-lg">
          Extensive research, compiled into valuable insights and knowledge.
          It's like a university without the fees.
        </p>
      </div>
    </section>
  );
};

export default Blog;
