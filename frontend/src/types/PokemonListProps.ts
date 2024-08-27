import { Pokemon } from "./Pokemon";

export interface PokemonListProps {
  pokemons: Pokemon[];
  onSelect: (pokemon: Pokemon) => void;
  loading: boolean;
}
