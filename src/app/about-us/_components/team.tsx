"use client";
import { Team } from "@/interfaces/about-us";
import { DynamicImages } from "@/interfaces/common";
import Image from "next/image";
import { createRef, RefObject, useRef, useState, useEffect } from "react";
import LinkedInIcon from "@/assets/images/linkedin white.png";
import clsx from "clsx";

interface TeamImages {
  [key: string]: DynamicImages;
}

const TeamSection = ({ data }: { data: Team[] }) => {
  const [activeTeam, setActiveTeam] = useState<string>(data[0].href);
  const [memberImages, setMemberImages] = useState<TeamImages>({});
  const mainRef = useRef<HTMLDivElement>(null);
  const teamMemberRefs = useRef(
    data.reduce((acc, team) => {
      acc[team.href] = team.members.map(() => createRef<HTMLDivElement>());
      return acc;
    }, {} as { [key: string]: RefObject<HTMLDivElement>[] })
  );

  const [visibilityMap, setVisibilityMap] = useState<{
    [key: string]: boolean[];
  }>(
    Object.fromEntries(
      Object.entries(teamMemberRefs.current).map(([team, refs]) => [
        team,
        refs.map(() => false),
      ])
    )
  );

  useEffect(() => {
    data.forEach((team) => {
      team.members.forEach((member, index) => {
        import(`@/assets/images/about/${member.image}`)
          .then((image) => {
            setMemberImages((prevImages: TeamImages) => {
              const memberImages: DynamicImages = { ...prevImages[team.href] };
              memberImages[index] = image.default;
              return {
                ...prevImages,
                [team.href]: memberImages,
              };
            });
          })
          .catch((err) => {
            console.error(err);
          });
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        setVisibilityMap((prevVisibilityMap) => {
          const newVisibilityMap = { ...prevVisibilityMap };
          entries.forEach((entry) => {
            for (const key in teamMemberRefs.current) {
              const index = teamMemberRefs.current[key].findIndex(
                (ref) => ref.current === entry.target
              );
              if (index !== -1) {
                if (entry.isIntersecting) newVisibilityMap[key][index] = true;
                return newVisibilityMap;
              }
            }
          });
          return newVisibilityMap;
        });
      },
      { threshold: 0.5 }
    );

    for (const key in teamMemberRefs.current) {
      teamMemberRefs.current[key].forEach((ref) => {
        if (ref.current) {
          observer.observe(ref.current);
        }
      });
    }

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      for (const key in teamMemberRefs.current) {
        teamMemberRefs.current[key].forEach((ref) => {
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        });
      }
      observer.disconnect();
    };
  }, [data.length]);

  const handleHashChange = () => {
    try {
      const fragment = window.location.hash;
      if (data.some((obj) => obj.href === fragment)) {
        setActiveTeam(fragment);
        window.scrollTo({
          top: mainRef.current?.offsetTop,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLinkClick = (href: string) => {
    if (activeTeam === href) return;
    window.history.pushState(null, "", href);
    window.dispatchEvent(new Event("hashchange"));
  };

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
      <div
        ref={mainRef}
        className="flex flex-wrap gap-5 sm:gap-7 md:gap-10 text-paraPrimary sm:text-xl md:text-2xl font-medium mb-14"
      >
        {data.map((team, index) => (
          <button
            key={index}
            className={clsx(
              "px-3 pb-2 capitalize",
              activeTeam === team.href &&
                "border-solid border-b-[3px] text-bgPrimary border-b-bgPrimary"
            )}
            onClick={() => handleLinkClick(team.href)}
          >
            {team.title}
          </button>
        ))}
      </div>
      {data.map((team, index) => (
        <div
          key={index}
          className={clsx(
            "grid md:grid-cols-2 lg:grid-cols-4 gap-7",
            activeTeam !== team.href && "hidden"
          )}
        >
          {team.members.map((member, i) => (
            <div
              key={i}
              ref={teamMemberRefs.current[team.href][i]}
              className={clsx(
                "transition-all duration-1000",
                !visibilityMap[team.href][i] && "scale-[.6] opacity-0"
              )}
            >
              {memberImages[team.href] && memberImages[team.href][i] && (
                <>
                  <div className="relative group rounded-lg overflow-hidden mb-3 sm:mb-6">
                    <a href="/" target="_blank" className="block w-full h-full">
                      <Image
                        src={memberImages[team.href][i]}
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
