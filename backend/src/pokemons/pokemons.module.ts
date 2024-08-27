import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from './entities/pokemon.entity';
import { PokemonsService } from './services/pokemons.service';
import { PokemonsController } from './controllers/pokemons.controller';
import { Battle } from './entities/battle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pokemon, Battle])],
  providers: [PokemonsService],
  controllers: [PokemonsController],
  exports: [PokemonsService, TypeOrmModule],
})
export class PokemonsModule {}
