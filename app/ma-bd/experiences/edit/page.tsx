// File: app/page.tsx
import postgres from 'postgres';
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export default function Page() {


  // 🔁 Formulaire de modification
  async function update(formData: FormData) {
    'use server';
    const titre = formData.get('titre');
    const newDescription = formData.get('description');
    const newImage = formData.get('image');
    const newUrl = formData.get('url');

    // Met à jour les champs d'une ligne existante
    await sql`
      UPDATE experience
      SET description = ${newDescription}, image = ${newImage}, url = ${newUrl}
      WHERE titre = ${titre};
    `;
  }

  return (
    <>
      <h2>Modifier une expérience (par titre)</h2>
      <form action={update}>
        <input type="text" name="titre" placeholder="Titre existant" required />
        <input type="text" name="description" placeholder="Nouvelle description" />
        <input type="text" name="image" placeholder="Nouveau lien image" />
        <input type="text" name="url" placeholder="Nouvelle URL" />
        <button type="submit">Mettre à jour</button>
      </form>
    </>
  );
}
