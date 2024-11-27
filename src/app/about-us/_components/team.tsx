"use client";
import { Team } from "@/interfaces/about-us";
import { DynamicImages } from "@/interfaces/common";
import Image from "next/image";
import { useEffect, useState } from "react";
import LinkedInIcon from "@/assets/images/linkedin white.png";

interface TeamImages {
  [key: string]: DynamicImages;
}

const TeamSection = ({ data }: { data: Team[] }) => {
  const [activeTeam, setActiveTeam] = useState<string>(data[0].title);
  const [memberImages, setMemberImages] = useState<TeamImages>({});

  useEffect(() => {
    data.forEach((team) => {
      team.members.forEach((member, index) => {
        import(`@/assets/images/about/${member.image}`)
          .then((image) => {
            setMemberImages((prevImages: TeamImages) => {
              const memberImages: DynamicImages = { ...prevImages[team.title] };
              memberImages[index] = image.default;
              return {
                ...prevImages,
                [team.title]: memberImages,
              };
            });
          })
          .catch((err) => {
            console.error(err);
          });
      });
    });
  }, []);

  return (
    <section className="container mx-auto px-4 sm:px-8 my-16 sm:my-24 md:py-30">
      <div className="mb-2 md:mb-6 sm:text-lg md:text-2xl lg:text-xl font-semibold text-bgPrimary uppercase">
        our team
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-6xl font-medium lg:w-[80%] capitalize mb-8 md:mb-20">
        Thinking Big!
        <div className="mt-2"></div>
        Anywhere, Anytime.
      </h2>
      <div className="flex flex-wrap gap-5 sm:gap-7 md:gap-10 text-paraPrimary sm:text-xl md:text-2xl font-medium mb-14">
        {data.map((team, index) => (
          <button
            key={index}
            className={`px-3 pb-2${
              activeTeam === team.title
                ? " border-solid border-b-[3px] text-bgPrimary border-b-bgPrimary"
                : ""
            } capitalize`}
            onClick={() => setActiveTeam(team.title)}
          >
            {team.title}
          </button>
        ))}
      </div>
      {data.map((team, index) => (
        <div
          key={index}
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-7 ${
            activeTeam === team.title ? "" : "hidden"
          }`.trim()}
        >
          {team.members.map((member, i) => (
            <div key={i}>
              {memberImages[team.title] && memberImages[team.title][i] && (
                <>
                  <div className="relative group rounded-lg overflow-hidden mb-3 sm:mb-6">
                    <a href="/" target="_blank" className="block w-full h-full">
                      <Image
                        src={memberImages[team.title][i]}
                        alt={`${member.name} DP`}
                        className="w-full"
                      />
                      {member.linkedIn && (
                        <div className="flex items-center justify-center absolute inset-0 bg-bgPrimary bg-opacity-0 group-hover:bg-opacity-80 transition-opacity duration-300">
                          <div className="text-white font-medium text-xl flex flex-col items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span>Connect with me</span>
                            <Image
                              src={LinkedInIcon}
                              alt="linkedIn Logo"
                              className="w-28"
                            />
                          </div>
                        </div>
                      )}
                    </a>
                  </div>
                  <div className="text-[#000] font-medium text-lg sm:text-xl leading-[30px] sm:mb-2">
                    {member.name}
                  </div>
                  <div className="text-[#333A4E] font-normal text-sm sm:text-base leading-[22.4px] mb-2 sm:mb-4">
                    {member.designation}
                  </div>
                  <p className="text-paraPrimary text-sm sm:text-base leading-[22.4px]">
                    {member.desc}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default TeamSection;
