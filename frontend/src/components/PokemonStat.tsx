import { Box, Typography } from "@mui/material";
import { BorderLinearProgress } from "./styled-components/BorderLinearProgress";

export const PokemonStat = ({
  name,
  value,
}: {
  name: string;
  value: number;
}) => {
  return (
    <Box>
      <Typography variant="body2" marginBottom={0.5}>
        {name}
      </Typography>
      <BorderLinearProgress variant="determinate" value={(value / 10) * 100} />
    </Box>
  );
};
