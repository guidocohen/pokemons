import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
  Box,
} from "@mui/material";
import { PokemonCardProps } from "../../types/PokemonCardProps";

const PokemonCard = ({
  pokemon,
  loadingBattle,
  onSelect,
}: PokemonCardProps) => {
  return (
    <Card sx={{ borderRadius: "10px" }} elevation={6}>
      <CardActionArea
        sx={{ flex: 1, cursor: loadingBattle ? "not-allowed" : "pointer" }}
        onClick={() => !loadingBattle && onSelect(pokemon)}
        disabled={loadingBattle}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 100,
            marginTop: 1.5,
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
        <CardContent sx={{ paddingBottom: 0, paddingTop: 1, paddingX: 1 }}>
          <Typography
            gutterBottom
            variant="body1"
            component="div"
            sx={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {pokemon.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PokemonCard;
