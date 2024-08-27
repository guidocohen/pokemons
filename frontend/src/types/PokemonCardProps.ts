import { Pokemon } from "./Pokemon";

export interface PokemonCardProps {
  pokemon: Pokemon;
  onSelect: (pokemon: Pokemon) => void;
}
