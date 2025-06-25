// File: app/experiences/page.tsx
import postgres from 'postgres';
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export default async function Page() {
  // Récupère toutes les expériences
  const result = await sql`
    SELECT id, titre, description, image,date
    FROM professionel
    ORDER BY id DESC;
  `;

  const experiences = result;

  return (
    <main>
      <h1>Liste des expériences</h1>
      <ul>
        {experiences.map((exp: any) => (
          <li key={exp.id}>
            <h2>{exp.titre}</h2>
            <p>{exp.description}</p>
            {exp.image && <img src={exp.image} alt={exp.titre} style={{ maxWidth: '200px' }} />}
            <p>{exp.date}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
