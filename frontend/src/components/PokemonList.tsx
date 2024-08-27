import React from "react";
import { Grid } from "@mui/material";
import { Pokemon } from "../types/Pokemon";
import { PokemonListProps } from "../types/PokemonListProps";
import PokemonCard from "./cards/PokemonCard";
import PokemonCardSkeleton from "./skeletons/PokemonCardSkeleton";

export const PokemonList: React.FC<PokemonListProps> = ({
  pokemons,
  onSelect,
  loading,
  loadingBattle,
}) => {
  return (
    <Grid container spacing={2} sx={{ marginBottom: 6 }}>
      {loading
        ? Array.from(new Array(5)).map((_, index) => (
            <Grid item xs={6} sm={4} md={2.4} key={index}>
              <PokemonCardSkeleton />
            </Grid>
          ))
        : pokemons.map((pokemon: Pokemon) => (
            <Grid item xs={6} sm={4} md={2.4} key={pokemon.id}>
              <PokemonCard
                pokemon={pokemon}
                onSelect={onSelect}
                loadingBattle={loadingBattle}
              />
            </Grid>
          ))}
    </Grid>
  );
};
