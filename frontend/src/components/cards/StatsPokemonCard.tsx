import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Divider,
  Stack,
} from "@mui/material";
import { Pokemon } from "../../types/Pokemon";
import { PokemonStat } from "../PokemonStat";

export const StatsPokemonCard: React.FC<{ pokemon: Pokemon }> = ({
  pokemon,
}) => {
  return (
    <Card sx={{ borderRadius: "10px" }} elevation={6}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 160,
          marginTop: 2,
        }}
      >
        <CardMedia
          component="img"
          alt={pokemon.name}
          image={pokemon.imageUrl}
          sx={{
            objectFit: "contain",
            maxHeight: "100%",
            maxWidth: "100%",
          }}
        />
      </Box>
      <CardContent>
        <Typography variant="h5" component="h4" fontWeight={500}>
          {pokemon.name}
        </Typography>
        <Divider variant="fullWidth" />
        <Stack spacing={1} sx={{ marginTop: 1, marginBottom: 2 }}>
          <PokemonStat name="HP" value={pokemon.hp} />
          <PokemonStat name="Attack" value={pokemon.attack} />
          <PokemonStat name="Defense" value={pokemon.defense} />
          <PokemonStat name="Speed" value={pokemon.speed} />
        </Stack>
      </CardContent>
    </Card>
  );
};
