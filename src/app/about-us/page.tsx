import Intro from "./_components/intro";
import Story from "./_components/story";
import Vision from "@/assets/images/about/vision.png";
import Mission from "@/assets/images/about/mission.png";
import { TitleDescription, Team } from "@/interfaces/about-us";
import ContentImage from "./_components/contentImage";
import Values from "./_components/values";
import TeamSection from "./_components/team";

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

  const TEAMS: Team[] = [
    {
      id: "executive-team",
      title: "executive team",
      members: [
        {
          name: "Shamim Ashrafi",
          image: "shamin-ashrafi.png",
          linkedIn: "/",
          designation: "Chief Executive Officer",
          desc: "Over 20 years of professional experience in Digital transformation, Enterprise Architecture IT operation and Service, Cloud Computing and migration.",
        },
        {
          name: "Gerri McRight",
          image: "gerri.jpeg",
          linkedIn: "/",
          designation:
            "Global Vice President of Professional Service Delivery and Operations",
          desc: "Over 20 years in IT, specializing in Cybersecurity, Infrastructure, and Service Delivery. Proven leader in digital transformations and boosting operational efficiency.",
        },
        {
          name: "Tarek Choudhury",
          image: "tarek-ch.png",
          linkedIn: "/",
          designation: "Chief Operating Officer",
          desc: "20+ years of professional experience in Digital transformation, Enterprise Architecture IT operation and Service, Cloud Computing and migration.",
        },
        {
          name: "Nasim Ashrafe",
          image: "nasim-ashrafe.png",
          linkedIn: "/",
          designation: "Country Manager",
          desc: "Managing server infrastructures and data-center operations across Unix, Linux and Windows platforms. Effectively plan, install, configure and optimize IT infrastructures to achieve high availability and performance.",
        },
      ],
    },
    {
      id: "advisory-team",
      title: "advisory team",
      members: [
        {
          name: "Dr. Javed Mostafa",
          image: "mostafa-javed.png",
          linkedIn: "/",
          designation: "Advisor",
          desc: "Dr. Javed Mostafa is currently the Dean and Professor at the Faculty of Information, University of Toronto. In 2007, he joined the University of North Carolina at Chapel Hill as Professor with joint appointments in the iSchool and Biomedical Research Imaging Center. He directs a lab focused on machine learning, data visualization, and equitable information services. Mostafa also created programs to support students from HBCUs, non-traditional students, and high-school pipelines.",
        },
        {
          name: "Sheikh Monowar Hossain",
          image: "sheikh-monowar-hossain.png",
          linkedIn: "/",
          designation: "Advisor",
          desc: "Mr. Sheikh Monowar Hossain, Managing Director of Change Bangladesh Limited and Chairman of Sirajganj Trade International, holds degrees in Bengali Literature from Jahangirnagar University. He's an active alumnus, serving as Senate Member and Senior Joint Secretary of the Alumni Association. As a former Director of BKMEA, he advocated for a business-friendly environment. A public speaker and motivator, he's committed to making a positive impact on livelihoods, particularly in Sirajganj.",
        },
      ],
    },
    {
      id: "technology-team",
      title: "technology team",
      members: [
        {
          name: "Shah Jafar Ulla Hamidi",
          image: "shah-jafar.png",
          designation: "Lead Software Engineer",
        },
        {
          name: "Saifullah Mirdha",
          image: "saifullah.png",
          designation: "Senior Software Engineer",
        },
        {
          name: "Shaman Sarif",
          image: "shaman-sarif.png",
          designation: "Senior Software Engineer",
        },
      ],
    },
  ];

  return (
    <>
      <Intro />
      <Story />
      <ContentImage data={VISION} />
      <ContentImage data={MISSION} />
      <Values />
      <TeamSection data={TEAMS} />
    </>
  );
};

export default AboutUs;
