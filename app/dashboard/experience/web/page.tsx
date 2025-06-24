import React from "react";
import { ExperienceProject } from '@/app/lib/definitions';
import { fetchExperiencePetriNet } from '@/app/lib/data';
import { ExperienceItem } from "./experience-item";
import postgres from 'postgres';
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export default async function Page() {
  const experienceproject = await fetchExperiencePetriNet();
  return (
    <div className="p-6 max-w-3xl mx-auto text-gray-800">
      <h2 className="text-xl font-bold underline mb-4">
        Site web en Symfony
      </h2>

      <p className="mb-4">
         Dans un site de Wishlists (liste d’objets souhaités), création d’une page donnant le top 3 des wishlists et des items par prix
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          Création de méthodes dans les Entités Wishlist et Item qui renvoient les objets triés dans l’ordre croissant des prix
        </li>
        <li>
          Création d’un template twig qui récupère la liste des wishlists et des items en appelant les méthodes des Entités, et
 créé avec du HTML les boutons et les sections pour afficher ces objets
        </li>
        <li>Les boutons sont reliés à un code javascript, permettant d’actionner des menus déroulant et d’être redirigé vers les
 pages permettant de visionner plus en détail les wishlists et les items</li>
      </ul>
    </div>
  );
}