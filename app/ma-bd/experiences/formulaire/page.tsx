// File: app/page.tsx
import postgres from 'postgres';
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export default function Page() {
  async function create(formData: FormData) {
    'use server';
    const titre = formData.get('titre');
    const description = formData.get('description');
    const image = formData.get('image');
    const url = formData.get('url');

    // Crée la table si elle n'existe pas
    await sql`
      CREATE TABLE IF NOT EXISTS experience (
        id SERIAL PRIMARY KEY,
        titre TEXT,
        description TEXT,
        image TEXT,
        url TEXT
      );
    `;

    // Insère une ligne correctement
    await sql`
      INSERT INTO experience (titre, description, image, url)
      VALUES (${titre}, ${description}, ${image},${url});
    `;
  }

  return (
    <form action={create}>
      <input type="text" name="titre" placeholder="Titre" required />
      <input type="text" name="description" placeholder="Description" required />
      <input type="text" name="image" placeholder="Lien vers une image" required />
      <input type="text" name="url" placeholder="Url" required />
      <button type="submit">Submit</button>
    </form>
  );
}
