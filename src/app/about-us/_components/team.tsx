import { Team } from "@/interfaces/about-us";
import { DynamicImages } from "@/interfaces/common";
import Image from "next/image";
import { createRef, RefObject, useRef, useState, useEffect } from "react";
import LinkedInIcon from "@/assets/images/linkedin white.png";
import clsx from "clsx";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

interface TeamImages {
  [key: string]: DynamicImages;
}

const TeamSection = ({ data }: { data: Team[] }) => {
  const [activeTeam, setActiveTeam] = useState<string>(data[0].id);
  const [memberImages, setMemberImages] = useState<TeamImages>({});
  const searchParams = useSearchParams();
  const mainRef = useRef<HTMLDivElement>(null);
  const teamMemberRefs = useRef(
    data.reduce((acc, team) => {
      acc[team.id] = team.members.map(() => createRef<HTMLDivElement>());
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
    try {
      data.forEach((team) => {
        team.members.forEach((member, index) => {
          import(`@/assets/images/about/${member.image}`)
            .then((image) => {
              setMemberImages((prevImages: TeamImages) => {
                const memberImages: DynamicImages = { ...prevImages[team.id] };
                memberImages[index] = image.default;
                return {
                  ...prevImages,
                  [team.id]: memberImages,
                };
              });
            })
            .catch((err) => {
              console.error(err);
            });
        });
      });
    } catch (error) {
      console.error(error);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        setVisibilityMap((prevVisibilityMap) => {
          const newVisibilityMap = { ...prevVisibilityMap };
          try {
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
          } catch (error) {
            console.error(error);
          }
          return newVisibilityMap;
        });
      },
      { threshold: 0.5 }
    );

    try {
      for (const key in teamMemberRefs.current) {
        teamMemberRefs.current[key].forEach((ref) => {
          if (ref.current) {
            observer.observe(ref.current);
          }
        });
      }
    } catch (error) {
      console.error(error);
    }

    return () => {
      try {
        for (const key in teamMemberRefs.current) {
          teamMemberRefs.current[key].forEach((ref) => {
            if (ref.current) {
              observer.unobserve(ref.current);
            }
          });
        }
      } catch (error) {
        console.error(error);
      }
      observer.disconnect();
    };
  }, [data.length]);

  useEffect(() => {
    try {
      const team = searchParams.get("team");
      if (team && data.some((obj) => obj.id === team)) {
        setActiveTeam(team);
        window.scrollTo({
          top: mainRef.current ? mainRef.current.offsetTop - 100 : 0,
        });
      }
    } catch (error) {
      console.error(error);
    }
  }, [data.length, searchParams]);

  const createQueryString = (id: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("team", id);
    return params.toString();
  };

  return (
    <section
      id="our-team"
      ref={mainRef}
      className="container mx-auto px-4 sm:px-8 my-16 sm:my-24 md:py-30"
    >
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
          <Link
            key={index}
            href={`?${createQueryString(team.id)}#our-team`}
            className={clsx(
              "px-3 pb-2 capitalize",
              activeTeam === team.id &&
                "border-solid border-b-[3px] text-bgPrimary border-b-bgPrimary"
            )}
          >
            {team.title}
          </Link>
        ))}
      </div>
      {data.map((team, index) => (
        <div
          key={index}
          className={clsx(
            "grid md:grid-cols-2 lg:grid-cols-4 gap-7",
            activeTeam !== team.id && "hidden"
          )}
        >
          {team.members.map((member, i) => (
            <div
              key={i}
              ref={teamMemberRefs.current[team.id][i]}
              className={clsx(
                "transition-all duration-1000",
                !visibilityMap[team.id][i] && "scale-[.6] opacity-0"
              )}
            >
              {memberImages[team.id] && memberImages[team.id][i] && (
                <>
                  <div className="relative group rounded-lg overflow-hidden mb-3 sm:mb-6">
                    {member.linkedIn ? (
                      <a
                        href="/"
                        target="_blank"
                        className="block w-full h-full"
                      >
                        <Image
                          src={memberImages[team.id][i]}
                          alt={`${member.name} DP`}
                          className="w-full"
                        />
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
                      </a>
                    ) : (
                      <Image
                        src={memberImages[team.id][i]}
                        alt={`${member.name} DP`}
                        className="w-full"
                      />
                    )}
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
