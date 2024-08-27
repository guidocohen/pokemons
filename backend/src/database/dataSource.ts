import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'pokemons.db',
  logging: true,
  synchronize: false,
  entities: [__dirname + '/../pokemons/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/*-schema-update{.ts,.js}'],
});
