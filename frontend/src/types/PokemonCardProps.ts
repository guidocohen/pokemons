import { Pokemon } from "./Pokemon";

export interface PokemonCardProps {
  pokemon: Pokemon;
  loadingBattle: boolean;
  onSelect: (pokemon: Pokemon) => void;
}
