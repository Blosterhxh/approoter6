// File: app/page.tsx
import postgres from 'postgres';
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

/*

export default function Page() {
  async function create(formData: FormData) {
    'use server';
    const titre = formData.get('titre');
    const description = formData.get('description');
    const image = formData.get('image');
    const date = formData.get('date');

    // Crée la table si elle n'existe pas
    await sql`
      CREATE TABLE IF NOT EXISTS etudes (
        id SERIAL PRIMARY KEY,
        titre TEXT,
        description TEXT,
        image TEXT,
        date TEXT
      );
    `;

    // Insère une ligne correctement
    await sql`
      INSERT INTO etudes (titre, description, image, date)
      VALUES (${titre}, ${description}, ${image},${date});
    `;
  }

  return (
    <form action={create}>
      <input type="text" name="titre" placeholder="Titre" required />
      <input type="text" name="description" placeholder="Description" required />
      <input type="text" name="image" placeholder="Lien vers une image" required />
      <input type="text" name="date" placeholder="Date" required />
      <button type="submit">Submit</button>
    </form>
  );
}

*/
