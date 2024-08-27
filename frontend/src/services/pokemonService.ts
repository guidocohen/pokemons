import { API_URL } from "../constants";
import { Pokemon } from "../types/Pokemon";

export const execBattle = async (
  pokemon1Id: string,
  pokemon2Id: string
): Promise<Pokemon> => {
  try {
    const response = await fetch(`${API_URL}/pokemons/battle/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pokemon1Id,
        pokemon2Id,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to execute battle");
    }

    const winner = await response.json();
    return winner;
  } catch (error) {
    console.error("Error executing battle:", error);
    throw error;
  }
};
