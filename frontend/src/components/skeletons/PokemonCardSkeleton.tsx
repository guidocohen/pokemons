import React from "react";
import { Card, Typography, Skeleton } from "@mui/material";

const PokemonCardSkeleton: React.FC = () => {
  return (
    <Card>
      <Skeleton variant="rectangular" width="100%" height="100px" />
      <Typography
        variant="body1"
        width="80%"
        component="div"
        sx={{ padding: 1 }}
      >
        <Skeleton />
      </Typography>
    </Card>
  );
};

export default PokemonCardSkeleton;
