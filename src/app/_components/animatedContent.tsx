const AnimatedContent = ({
  heading,
  desc,
}: {
  heading: string;
  desc: string;
}) => {
  return (
    <>
      <h1
        className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6"
        style={{
          animation: "headingAnimation 400ms linear",
        }}
      >
        {heading}
      </h1>
      <p
        className="text-base md:text-2xl font-light sm:leading-7"
        style={{
          animation: "paraAnimation 1s linear",
        }}
      >
        {desc}
      </p>
      <style jsx>
        {`
          @keyframes headingAnimation {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0px);
            }
          }
          @keyframes paraAnimation {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        `}
      </style>
    </>
  );
};

export default AnimatedContent;
