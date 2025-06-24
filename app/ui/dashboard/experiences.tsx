import React from "react";
import { ExperiencePoject } from '@/app/lib/definitions';
import { fetchExperiences } from '@/app/lib/data';
import { ExperienceItem } from "./experience-item";

export async function Experiences() {
  const experiences = await fetchExperiences();
  return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-4">
          {experiences.map((link, index) => {
            return <ExperienceItem key={index} {...link} />;
          })}
        </div>
  );
}