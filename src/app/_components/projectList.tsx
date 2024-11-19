"use client";
import { Project, ProjectImages } from "@/interfaces/projects";
import { useEffect, useState } from "react";
import Image from "next/image";

const ProjectList = ({ projects }: { projects: Project[] }) => {
  const [logoImages, setLogoImages] = useState<ProjectImages>({});
  const [bgImages, setBgImages] = useState<ProjectImages>({});

  useEffect(() => {
    const getImages = async () => {
      try {
        const images = await Promise.all(
          projects.map(async (project) => {
            const [logo, bg] = await Promise.all([
              import(`@/assets/images/projects/${project.logo}`),
              import(`@/assets/images/projects/${project.bg}`),
            ]);
            return { logo, bg };
          })
        );
        images.forEach((image, index) => {
          setLogoImages((prevImages: ProjectImages) => ({
            ...prevImages,
            [index]: image.logo.default,
          }));
          setBgImages((prevImages: ProjectImages) => ({
            ...prevImages,
            [index]: image.bg.default,
          }));
        });
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };

    getImages();
  }, [projects]);

  return (
    <div className="text-white">
      {projects.map((project, index) => (
        <div
          key={index}
          className="sticky top-0 mb-2 bg-center bg-cover rounded-xl p-4 sm:p-10 w-full h-[550px]"
        >
          {project.bg && bgImages[index] && (
            <div className="absolute w-full h-full top-0 left-0">
              <Image
                src={bgImages[index]}
                alt={`${project.title}-bg`}
                fill
                className="z-0 object-cover"
              />
            </div>
          )}
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="mt-5 sm:mt-0">
              <span className="px-10 py-3">{project.title}</span>
            </div>
            <div>
              {project.logo && logoImages[index] ? (
                <Image
                  src={logoImages[index]}
                  alt={`${project.title}-logo`}
                  className="w-auto h-14 mb-2"
                />
              ) : (
                <div className="h-14 mb-2"></div>
              )}
              <p className="font-medium text-lg sm:text-2xl md:text-3xl lg:text-2xl lg:w-[80%]">
                {project.desc}
              </p>
              <div className="pt-1 font-medium md:text-lg lg:text-base opacity-80 pb-6">
                {project.headline}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
