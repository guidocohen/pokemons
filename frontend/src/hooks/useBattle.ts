import { useState } from "react";
import { Pokemon } from "../types/Pokemon";
import { execBattle } from "../services/pokemonService";

const useBattle = (pokemons: Pokemon[]) => {
  const [selectedPokemon1, setSelectedPokemon1] = useState<Pokemon | null>(
    null
  );
  const [selectedPokemon2, setSelectedPokemon2] = useState<Pokemon | null>(
    null
  );
  const [winnerName, setWinnerName] = useState<string>("");
  const [loadingBattle, setLoadingBattle] = useState<boolean>(false);

  const getRandomPokemon = (excludeIds: string[]) => {
    const filteredPokemons = pokemons.filter(
      (pokemon) => !excludeIds.includes(pokemon.id)
    );
    const randomIndex = Math.floor(Math.random() * filteredPokemons.length);
    return filteredPokemons[randomIndex];
  };

  const handleSelect = (pokemon: Pokemon) => {
    setSelectedPokemon1(pokemon);
    setSelectedPokemon2(null);
    setWinnerName("");
  };

  const handleBattle = async (pokemon1: Pokemon) => {
    if (!pokemon1) return;
    setWinnerName("");
    let pokemon2: Pokemon;

    const randomizePokemon = () => {
      pokemon2 = getRandomPokemon([pokemon1.id, selectedPokemon2?.id || ""]);
      setSelectedPokemon2(pokemon2);
    };

    const intervalId = setInterval(randomizePokemon, 50);
    setLoadingBattle(true);

    setTimeout(async () => {
      clearInterval(intervalId);
      const winnerResult = await execBattle(pokemon1.id, pokemon2.id);
      setWinnerName(winnerResult.name);
      setLoadingBattle(false);
    }, 2000);
  };

  return {
    selectedPokemon1,
    selectedPokemon2,
    winnerName,
    loadingBattle,
    handleSelect,
    handleBattle,
  };
};

export default useBattle;
