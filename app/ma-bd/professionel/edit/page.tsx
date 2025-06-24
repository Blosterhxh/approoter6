// File: app/experiences/page.tsx
import postgres from 'postgres';
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

/*

export default async function ExperiencesPage() {
  // Récupère toutes les expériences
  const result = await sql`
    DROP TABLE professionel;
  `;

  return (
  	<h3>Suppression de experience</h3>
  );
}

*/
