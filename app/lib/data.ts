import postgres from 'postgres';
import {
  ExperienceProject,
  ProfessionelItem
} from './definitions';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });


export async function fetchExperiences() {
  try {
	const data = await sql<ExperienceProject[]>`
  	 SELECT titre, description, image, url
 	 FROM experience`;

    const experiences = data.map((experienceproject) => ({
      ...experienceproject
    }));
    return experiences;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the experiences.');
  }
}

export async function fetchProfessionels() {
  try {
	const data = await sql<ProfessionelItem[]>`
  	 SELECT titre, description, image, date
 	 FROM professionel`;

    const professionels = data.map((professionelitem) => ({
      ...professionelitem
    }));
    return professionels;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the professionels.');
  }
}

export async function fetchEtudes() {
  try {
	const data = await sql<ProfessionelItem[]>`
  	 SELECT titre, description, image, date
 	 FROM etudes`;

    const professionels = data.map((professionelitem) => ({
      ...professionelitem
    }));
    return professionels;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the etudes.');
  }
}

