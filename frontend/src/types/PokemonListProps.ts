import { Pokemon } from "./Pokemon";

export interface PokemonListProps {
  pokemons: Pokemon[];
  loading: boolean;
  loadingBattle: boolean;
  onSelect: (pokemon: Pokemon) => void;
}
