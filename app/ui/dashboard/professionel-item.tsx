"use client";
import { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import type { ProfessionelItem } from "@/app/lib/definitions";

export function ProfessionelItem({ titre,description,image,date }: ProfessionelItem) {
  const [isOpen, setIsOpen] = useState(false);

  return (
<div className="space-y-2 mb-4 select-none">
  <div
    className="flex justify-between items-center rounded-xl bg-gray-50 p-4 shadow-md cursor-pointer"
    onClick={() => setIsOpen(!isOpen)}
  >

    <div className="flex items-center gap-4">
      <div className="relative">
         <Image
           className="rounded-xl"
           src={image}
           width={50}
           height={50}
         />
      </div>
      <p className="font-medium">{titre}</p>
    </div>

    <div className="flex items-center gap-2">
      <p className="text-sm text-gray-600 font-medium">{date}</p>
      {isOpen ? (
        <ChevronUpIcon className="w-5 h-5 text-gray-500" />
      ) : (
        <ChevronDownIcon className="w-5 h-5 text-gray-500" />
      )}
    </div>
  </div>

  {isOpen && (
    <div className="rounded-xl bg-white p-4 shadow-md">
      <p>
        {description}
      </p>
    </div>
  )}
</div>
  );
}
