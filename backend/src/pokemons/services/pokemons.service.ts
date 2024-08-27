import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pokemon } from '../entities/pokemon.entity';
import { Battle } from '../entities/battle.entity';
import { UpdatePokemonDto } from '../dto/update-pokemon.dto';
import { CreatePokemonDto } from '../dto/create-pokemon.dto';

@Injectable()
export class PokemonsService {
  constructor(
    @InjectRepository(Pokemon)
    private readonly pokemonRepository: Repository<Pokemon>,
    @InjectRepository(Battle)
    private readonly battleRepository: Repository<Battle>,
  ) {}

  async findAll(): Promise<Pokemon[]> {
    return this.pokemonRepository.find();
  }

  async findOne(id: string): Promise<Pokemon> {
    const pokemon = await this.pokemonRepository.findOneBy({ id });
    if (!pokemon) {
      throw new BadRequestException('Pokemon no encontrado');
    }
    return pokemon;
  }

  async battle(pokemon1Id: string, pokemon2Id: string): Promise<Pokemon> {
    const pokemon1 = await this.pokemonRepository.findOneBy({ id: pokemon1Id });
    const pokemon2 = await this.pokemonRepository.findOneBy({ id: pokemon2Id });

    if (!pokemon1 || !pokemon2) {
      throw new BadRequestException('Pokemon no encontrado');
    }

    const [firstAttacker, secondAttacker] =
      pokemon1.speed > pokemon2.speed ||
      (pokemon1.speed === pokemon2.speed && pokemon1.attack > pokemon2.attack)
        ? [pokemon1, pokemon2]
        : [pokemon2, pokemon1];

    let rounds = 0;
    while (pokemon1.hp > 0 && pokemon2.hp > 0) {
      rounds++;
      secondAttacker.hp -= Math.max(
        firstAttacker.attack - secondAttacker.defense,
        1,
      );
      if (secondAttacker.hp <= 0) break;
      firstAttacker.hp -= Math.max(
        secondAttacker.attack - firstAttacker.defense,
        1,
      );
    }

    const winner = pokemon1.hp > 0 ? pokemon1 : pokemon2;
    const loser = winner === pokemon1 ? pokemon2 : pokemon1;

    const result = this.battleRepository.create({
      winner,
      loser,
      turns: rounds,
      createdAt: new Date().toLocaleString(),
    });

    this.battleRepository.save(result);
    return winner;
  }

  async create(createPokemonDto: CreatePokemonDto): Promise<Pokemon> {
    const pokemon = this.pokemonRepository.create(createPokemonDto);
    return this.pokemonRepository.save(pokemon);
  }

  async update(id: string, updatedPokemon: UpdatePokemonDto): Promise<Pokemon> {
    const pokemon = await this.pokemonRepository.findOneBy({ id });

    if (!pokemon) {
      throw new Error('Pokemon no encontrado');
    }

    const updated = { ...pokemon, ...updatedPokemon };
    return this.pokemonRepository.save(updated);
  }

  async remove(id: string): Promise<void> {
    await this.pokemonRepository.delete(id);
  }
}
