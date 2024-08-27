import { Button } from "@mui/material";

const buttonStyles = {
  backgroundColor: "#47743F",
  borderRadius: "5px",
  padding: "10px 30px",
  marginY: "20px",
  fontSize: "1rem",
  fontWeight: 500,
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#36532D",
  },
  "&:disabled": {
    backgroundColor: "#B0B0B0",
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#B0B0B0",
    },
  },
};

export const PrimaryButton = ({
  onClick,
  loadingBattle,
}: {
  onClick: () => void;
  loadingBattle: boolean;
}) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
      disabled={loadingBattle}
      sx={buttonStyles}
    >
      Start Battle
    </Button>
  );
};
