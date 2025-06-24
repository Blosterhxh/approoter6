import Image from "next/image";

import type { ExperienceProject } from "@/app/lib/definitions";

export function ExperienceItem({ titre,description,image,url }: ExperienceProject) {
  return (

    <a className="group/link rounded-xl bg-gray-50 p-2 shadow-md"
      href={url}
      target="_blank"
      rel="noopener"     
    >
      <div className="p-4">
        <h3 className="ml-2 text-xl text-center font-bold group-hover/link:underline">{titre}</h3>
      </div>
      <div className="flex flex-row gap-4">
        <div className="relative flex-shrink-0">
           <Image
             className="rounded-xl flex-shrink-0"
             src={image}
             alt={titre}
             width={200}
             height={200}
           />
           <div className="pointer-events-none absolute inset-0 rounded-xl ring-2 ring-black" />
        </div>
        <div className = "w-full text-center">
          <h3 className="font-semibold mb-2">Compétences :</h3>
          <p>{description}</p>
        </div>
      </div>
    </a>
  );
}