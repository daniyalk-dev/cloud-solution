import Image from "next/image";
import DoubleQuotesIcon from "@/assets/images/testimonials/double-quotes.png";
import { Testimonial } from "@/interfaces/common";
import TestimonialSlider from "./testimonialSlider";
import Clients from "./clients";

const Testimonials = () => {
  const TESTIMONIALS: Testimonial[] = [
    {
      summary:
        "JSI partnered with InNeed to develop a training management information system for the National Tuberculosis Control Program (NTP). InNeed's adept team collaborated closely and addressed NTP's needs swiftly during development and post-launch. NTP expressed high satisfaction with the quality of work and customer service. JSI staff enjoyed a collaborative and responsive partnership with InNeed.",
      author: {
        name: "Rebecca Furth",
        image: "furth.png",
        desc: ["Director of JSI APAC Region", "TIFA at JSI"],
      },
    },
    {
      summary:
        "Our partnership with InNeed continues in the iPICS project, focusing on prostate cancer support. iPICS is a cloud-based DSS system, HIPAA compliant, collecting, storing, and analyzing EMR/EHR data using ML for personalized care. It adopts HL7 JSON and FHIR standards. We are very happy to see InNeed’s deep level expertise in healthcare IT and willingness to go above and beyond to support research and innovation in this field. iPICS was recently awarded a grant from the DoD.",

      author: {
        name: "Dr. Javed Mostafa",
        image: "mostafa.png",
        desc: [
          "Dean and Professor, Faculty of Information, University of Toronto",
          "ex-Director, Carolina Health Informatics Program (CHIP) Professor, UNC",
        ],
      },
    },
    {
      summary:
        "InNeed's team of skilled developers worked collaboratively and responded promptly to NTP's questions and requests. After launching the system, they continued to quickly address any issues, ensuring smooth data entry and usage. NTP was highly satisfied with the quality of work and customer service. JSI staff also appreciated InNeed's collaboration and responsiveness, making it a pleasure to work with them.",
      author: {
        name: "Khandoker Abu Jafor Md. Saleh",
        image: "saleh.jpeg",
        desc: ["Program Lead", "JSI"],
      },
    },
  ];
  const CLIENTS_LOGOS: string[] = [
    "zimmet.png",
    "quantlio.png",
    "us-aid.png",
    "unc.png",
    "chip.png",
    "ut-health.png",
    "augmedix.png",
    "rave.png",
    "bbs.png",
    "sirajganj.png",
    "icddr-b.png",
    "homegrown.png",
  ];
  return (
    <section className="bg-[#F5F8FF] sm:relative">
      <div className="relative sm:static container mx-auto px-7 sm:px-8 py-16 md:py-14">
        <Image
          src={DoubleQuotesIcon}
          alt="double-quotes"
          className="w-28 sm:w-32 md:w-36 lg:w-64 absolute top-0 sm:left-6"
        />
        <div className="relative flex flex-col lg:flex-row gap-10 items-center">
          <div className="flex-1">
            <TestimonialSlider testimonials={TESTIMONIALS} />
          </div>
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-4">
            <Clients clientLogos={CLIENTS_LOGOS} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
