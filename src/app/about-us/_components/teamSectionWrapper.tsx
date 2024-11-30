"use client";
import { Team } from "@/interfaces/about-us";
import TeamSection from "./team";
import { Suspense } from "react";

const TeamSectionWrapper = ({ data }: { data: Team[] }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TeamSection data={data} />
    </Suspense>
  );
};

export default TeamSectionWrapper;
