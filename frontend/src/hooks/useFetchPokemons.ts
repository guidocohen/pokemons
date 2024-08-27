import { useState, useEffect } from "react";
import { Pokemon } from "../types/Pokemon";
import { API_URL } from "../constants";

const useFetchPokemons = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/pokemons/`);
        const data = await response.json();
        setPokemons(data);
      } catch (error) {
        console.error("Error fetching pokemons:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  return { pokemons, loading, error };
};

export default useFetchPokemons;
