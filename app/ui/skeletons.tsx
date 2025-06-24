// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';
import Image from "next/image";

export function ExperienceSkeleton (){

  return (
<div className="rounded-xl bg-gray-50 p-2 shadow-md"  
    target="_blank"
    rel="noopener"    
    >
      <div className="flex flex-col items-center p-4">
        <div className="h-7 w-40 rounded-md bg-gray-400" />
      </div>
      <div className="flex flex-row gap-4">
        <div className="h-[200px] w-[200px]  rounded-xl bg-white flex-shrink-0" />
        <div className = "w-full text-center">
          <div className="h-20 w-40 rounded-md bg-gray-200" />
        </div>
      </div>
    </div>
 );
}

export function ProfessionelSkeleton (){

  return (
<div className="space-y-2 mb-4">
  <div
    className="flex justify-between items-center rounded-xl bg-gray-50 p-4 shadow-md cursor-pointer"
  >

    <div className="flex items-center gap-4">
      <div className="h-[50px] w-[50px]  rounded-xl bg-white flex-shrink-0" />
      <div className="h-3 w-40 rounded-md bg-gray-400" />
    </div>

    <div className="flex items-center gap-2">
      <div className="h-3 w-40 rounded-md bg-gray-200" />
    </div>
  </div>
</div>
 );
}

export function ExperiencesSkeleton (){

  return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
             <ExperienceSkeleton/>
             <ExperienceSkeleton/>
             <ExperienceSkeleton/>
             <ExperienceSkeleton/>
        </div>
 );
}

export function ProfessionelsSkeleton (){

  return (
        <div>
             <ProfessionelSkeleton/>
             <ProfessionelSkeleton/>
             <ProfessionelSkeleton/>
        </div>
 );
}

export function EtudesSkeleton (){

  return (
        <div>
             <ProfessionelSkeleton/>
             <ProfessionelSkeleton/>
        </div>
 );
}

