import React from "react";
import { fetchEtudes } from '@/app/lib/data';
import { ProfessionelItem } from "./professionel-item";

export async function Etudes() {
  const experiences = await fetchEtudes();
  return (
        <div>
          {experiences.map((link, index) => {
            return <ProfessionelItem key={index} {...link} />;
          })}
        </div>
  );
}