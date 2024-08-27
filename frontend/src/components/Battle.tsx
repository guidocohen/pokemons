import React from "react";
import { Alert, Fade, Grid, Typography } from "@mui/material";
import { StatsPokemonCard } from "./cards/StatsPokemonCard";
import { BattleProps } from "../types/BattleProps";
import { PrimaryButton } from "./buttons/PrimaryButton";
import { QuestionCard } from "./cards/QuestionCard";

const Battle: React.FC<BattleProps> = ({
  pokemon1,
  pokemon2,
  onBattle,
  winnerName,
  loadingBattle,
}) => {
  if (!pokemon1) return null;

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      {winnerName && (
        <Grid item xs={12} sx={{ marginBottom: 6 }}>
          <Fade in={!!winnerName} timeout={{ enter: 500 }}>
            <div>
              <Alert
                icon={false}
                elevation={6}
                sx={{
                  borderRadius: "5px",
                  backgroundColor: "#E8F8FD",
                  border: "1px solid black",
                  paddingY: "15px",
                  paddingX: "30px",
                }}
              >
                <Typography variant="h5" component="span">
                  {winnerName} wins!
                </Typography>
              </Alert>
            </div>
          </Fade>
        </Grid>
      )}

      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ marginBottom: 6 }}
      >
        <Grid item xs={12} md={4.5}>
          <Fade in={!!pokemon1} timeout={{ enter: 500 }}>
            <div>
              <StatsPokemonCard pokemon={pokemon1} />
            </div>
          </Fade>
        </Grid>

        <Grid item xs={12} md={2} sx={{ textAlign: "center" }}>
          <PrimaryButton
            onClick={() => onBattle(pokemon1)}
            loadingBattle={loadingBattle}
          />
        </Grid>

        <Grid item xs={12} md={4.5}>
          {pokemon2 ? (
            <Fade in={!!pokemon2} timeout={{ enter: 500 }}>
              <div>{pokemon2 && <StatsPokemonCard pokemon={pokemon2} />}</div>
            </Fade>
          ) : (
            <Fade in={pokemon1 && !pokemon2} timeout={{ enter: 500 }}>
              <div>
                <QuestionCard />
              </div>
            </Fade>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Battle;
