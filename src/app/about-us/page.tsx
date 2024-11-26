import Intro from "./_components/intro";
import Story from "./_components/story";
import Vision from "@/assets/images/about/vision.png";
import Mission from "@/assets/images/about/mission.png";
import { TitleDescription } from "@/interfaces/common";
import ContentImage from "./_components/contentImage";
import Values from "./_components/values";

const AboutUs = () => {
  const VISION: TitleDescription = {
    id: "vision",
    title: "our vision",
    description:
      "InNeed aspires to emerge as a renowned global leader, spearheading the delivery of top-tier intelligent solutions that drive innovation and excellence, fostering business growth, and contributing to a sustainable future.",
    image: Vision,
  };

  const MISSION: TitleDescription = {
    id: "mission",
    title: "our mission",
    description:
      "We aim to establish strategic partnerships with our customers, drive continuous innovation, and empower businesses worldwide with data-driven, cloud-native AI/ML solutions for unprecedented outcomes and sustainable growth.",
    image: Mission,
  };

  return (
    <>
      <Intro />
      <Story />
      <ContentImage data={VISION} />
      <ContentImage data={MISSION} />
      <Values />
    </>
  );
};

export default AboutUs;
