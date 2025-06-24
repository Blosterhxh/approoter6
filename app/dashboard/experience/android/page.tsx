export default async function Page() {
  return (
    <div className="p-6 max-w-3xl mx-auto text-gray-800">
      <h2 className="text-xl font-bold underline mb-4">
        Application de saisie sur Android
      </h2>

      <p className="mb-4">
        Construction d'une application de saisie d'informations
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          Trois fragments représentant trois pages : une page de saisie d'informations, une page de résumé, et une page avec
            un calendrier pour sélectionner la date
        </li>
        <li>
          Les trois fragments sont créés tour à tour dynamiquement dans les fonctions de l'activité, et sont ajoutés
            à la backstack pour pouvoir revenir en arrière
        </li>
        <li>Sauvegarde de l'état des fragments avec un bundle pour la rotation et en utilisant les attributs de classe pour le
            retour en arrière</li>
        <li>Création de vues de manière statique (ex : champ nom) ou dynamique (ex: numero de telephone)</li>
        <li>
          Création d'un menu qui permet de rediriger vers d'autres applications en créant des intents, comme par exemple
            aller sur la page wikipedia de la ville renseignée
        </li>
      </ul>
    </div>
  );
}