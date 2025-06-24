import { Card } from '@/app/ui/dashboard/cards';
import Presentation from '@/app/ui/dashboard/Presentation';
import Separator from '@/app/ui/dashboard/separator';
import { SocialLinks } from '@/app/ui/dashboard/reseaux';
import { Experiences } from '@/app/ui/dashboard/experiences';
import { Professionels } from '@/app/ui/dashboard/professionels';
import { Etudes } from '@/app/ui/dashboard/etudes';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { fetchLatestInvoices, fetchCardData } from '@/app/lib/data';
import { Suspense } from 'react';
import { RevenueChartSkeleton, CardsSkeleton, ExperiencesSkeleton, ProfessionelsSkeleton, EtudesSkeleton } from '@/app/ui/skeletons';
import CardWrapper from '@/app/ui/dashboard/cards';

 
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