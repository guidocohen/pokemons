import React from "react";
import { Container, Typography } from "@mui/material";
import { PokemonList } from "../components/PokemonList";
import Battle from "../components/Battle";
import useFetchPokemons from "../hooks/useFetchPokemons";
import useBattle from "../hooks/useBattle";

const containerStyles = {
  width: { xs: "95%", sm: "80%" },
  height: "100%",
  display: "flex",
  flexDirection: "column",
  margin: "0 auto",
};

const App: React.FC = () => {
  const { pokemons, loading, error } = useFetchPokemons();
  const {
    selectedPokemon1,
    selectedPokemon2,
    winnerName,
    loadingBattle,
    handleSelect,
    handleBattle,
  } = useBattle(pokemons);

  return (
    <Container sx={containerStyles}>
      <Typography variant="h4" component="h1" sx={{ marginY: "30px" }}>
        Battle of Pokemon
      </Typography>

      {loading && <Typography variant="h6">Loading...</Typography>}

      {error ? (
        <Typography variant="h6" color="error">
          Failed to load Pokemons. Please try again later.
        </Typography>
      ) : pokemons.length === 0 && !loading ? (
        <Typography variant="h6" color="textSecondary">
          No Pokemon available to select.
        </Typography>
      ) : (
        <>
          {!loading && (
            <Typography variant="h5" component="h2" sx={{ marginBottom: 1 }}>
              Select your pokemon
            </Typography>
          )}
          <PokemonList
            pokemons={pokemons}
            onSelect={handleSelect}
            loading={loading}
            loadingBattle={loadingBattle}
          />
          <Battle
            pokemon1={selectedPokemon1}
            pokemon2={selectedPokemon2}
            onBattle={handleBattle}
            winnerName={winnerName}
            loadingBattle={loadingBattle}
          />
        </>
      )}
    </Container>
  );
};

export default App;
