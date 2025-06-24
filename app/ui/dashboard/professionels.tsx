import React from "react";
import { fetchProfessionels } from '@/app/lib/data';
import { ProfessionelItem } from "./professionel-item";

export async function Professionels() {
  const experiences = await fetchProfessionels();
  return (
        <div>
          {experiences.map((link, index) => {
            return <ProfessionelItem key={index} {...link} />;
          })}
        </div>
  );
}