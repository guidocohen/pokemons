import { Pokemon } from "./Pokemon";

export interface BattleProps {
  pokemon1: Pokemon | null;
  pokemon2: Pokemon | null;
  onBattle: (pokemon1: Pokemon) => void;
  winnerName: string;
  loadingBattle: boolean;
}
