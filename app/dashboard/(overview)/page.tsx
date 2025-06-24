import Presentation from '@/app/ui/dashboard/Presentation';
import Separator from '@/app/ui/dashboard/separator';
import { Experiences } from '@/app/ui/dashboard/experiences';
import { Professionels } from '@/app/ui/dashboard/professionels';
import { Etudes } from '@/app/ui/dashboard/etudes';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { ExperiencesSkeleton, ProfessionelsSkeleton, EtudesSkeleton } from '@/app/ui/skeletons';

 
export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Présentation
      </h1>
      <div>
            <Presentation/>
      </div>
      <Separator/>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Etudes
      </h1>
      <div>
         <Suspense fallback = {<EtudesSkeleton/>}>
            <Etudes/>
         </Suspense>
      </div>
      <Separator/>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Projets académiques
      </h1>
      <div>
         <Suspense fallback = {<ExperiencesSkeleton/>}>
            <Experiences/>
         </Suspense>
      </div>
      <Separator/>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Expériences professionnelles
      </h1>
      <div>
         <Suspense fallback = {<ProfessionelsSkeleton/>}>
            <Professionels/>
         </Suspense>
      </div>
    </main>
  );
}