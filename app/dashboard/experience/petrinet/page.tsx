export default async function Page() {
  return (
    <div className="p-6 max-w-3xl mx-auto text-gray-800">
      <h2 className="text-xl font-bold underline mb-4">
        PetriNet
      </h2>

      <p className="mb-4">
        Construction d'un réseau de Petri en suivant toutes les étapes clés du développement logiciel :
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          Création d'un diagramme de classe UML avec une classe pour chaque composant du réseau : <strong>PetriNet, Place, Transition</strong> et <strong>Arc</strong> avec un héritage pour arc en <strong>ArcVideur</strong> et <strong>ArcZero</strong>
        </li>
        <li>
          Création de deux diagrammes de séquence, un décrivant la création d'un réseau et un pour le tirage d'une transition
        </li>
        <li>Implémentation des classes en Java</li>
        <li>Création de classes de tests pour chaque objet pour vérifier les constructeurs et les fonctions</li>
        <li>
          Création d'une classe de tests avec plusieurs transitions pour vérifier que les tirages fonctionnent
        </li>
        <li>
          Création d'une classe de tests avec un grand réseau de Petri et plusieurs tirages d'affilée pour vérifier le fonctionnement global
        </li>
        <li>
          Création de classes Adapter associées à nos objets (<strong>Arc, Place, Transition, PetriNet</strong>) afin d'intégrer notre code dans celui de <strong>PNEditor</strong> pour pouvoir afficher notre réseau
        </li>
        <li>
          Analyse de la qualité du code avec <strong>STAN</strong> en utilisant plusieurs métriques (ex : taille, complexité)
        </li>
        <li>Outils utilisés : UML, Java, Eclipse</li>
      </ul>
    </div>
  );
}