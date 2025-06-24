export default async function Page() {
  return (
    <div className="p-6 max-w-3xl mx-auto text-gray-800">
      <h2 className="text-xl font-bold underline mb-4">
        Contrôle d'un robot
      </h2>

      <p className="mb-4">
        Création de plusieurs scripts Python pour communiquer avec un robot, le lien entre les scripts et le robot est fait avec ROS
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          Un script permettant de déplacer le robot en fonction des touches pressées sur le clavier
        </li>
        <li>
          Un script qui permet de récupérer des points colorés en R/G/B et de déterminer l'équation des plans colorés qui contiennent
        ces points en utilisant la Least-Square method
        </li>
        <li>Un script détectant les différences d'accélération du robot pour pouvoir arrêter le moteur en cas de choc</li>
        <li>Un script permettant au robot de trouver le plus court chemin entre deux points en utilisant le A* search</li>
        <li>
          Un script permettant au robot de déplacer et contracter une pince afin de saisir un objet en utilisant l’algorithme d’inverse kinematics
        </li>
      </ul>
    </div>
  );
}