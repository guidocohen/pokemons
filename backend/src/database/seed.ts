import * as fs from 'fs';
import { AppDataSource } from './dataSource';
import { Pokemon } from '../pokemons/entities/pokemon.entity';

async function seedDatabase() {
  try {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
    }

    const pokemonsJSON = JSON.parse(
      fs.readFileSync('src/database/migrations/pokemons.json', 'utf8'),
    );

    if (!pokemonsJSON || !Array.isArray(pokemonsJSON.pokemon)) {
      throw new Error('Invalid JSON format');
    }

    const pokemonRepository = AppDataSource.getRepository(Pokemon);
    for (const pokemon of pokemonsJSON.pokemon) {
      const pokemonRegistry = pokemonRepository.create({
        id: pokemon.id,
        name: pokemon.name,
        attack: pokemon.attack,
        defense: pokemon.defense,
        hp: pokemon.hp,
        speed: pokemon.speed,
        type: pokemon.type,
        imageUrl: pokemon.imageUrl,
      });
      await pokemonRepository.save(pokemonRegistry);
    }

    console.log('Database seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    if (AppDataSource.isInitialized) {
      await AppDataSource.destroy();
    }
  }
}

seedDatabase();
