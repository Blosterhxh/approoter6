import { generateYAxis } from '@/app/lib/utils';
import { lusitana } from '@/app/ui/fonts';
import { Revenue } from '@/app/lib/definitions';
import Image from 'next/image';

// This component is representational only.
// For data visualization UI, check out:
// https://www.tremor.so/
// https://www.chartjs.org/
// https://airbnb.io/visx/

export default function Presentation() {
  // NOTE: Uncomment this code in Chapter 7

  return (
    <div className="rounded-xl bg-gray-100 p-4 mb-4 shadow-md">
      <div className="flex flex-row gap-4">
        <div className="flex-shrink-0">
          <Image
            src="/profile.webp"
            width={160}
            height={160}
            className="rounded-full shadow-md"
            alt="Loick"
          />
        </div>

        <div
          className={`${lusitana.className} w-full rounded-xl bg-white px-6 py-4 text-center`}
        >
          <h3 className="text-xl font-semibold text-gray-800">2A à l'IMT</h3>
          <p className="mt-2 text-gray-600">
            Etudes en développement logiciel
          </p>
        </div>
      </div>
    </div>
  );
}
       
