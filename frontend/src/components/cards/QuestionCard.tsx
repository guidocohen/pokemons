import { Box, Card, CardMedia } from "@mui/material";
import questionMarkIcon from "../../assets/question-mark.svg";

export const QuestionCard = () => {
  return (
    <Card sx={{ borderRadius: "10px" }} elevation={6}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 410,
          marginTop: 2,
        }}
      >
        <CardMedia
          component="img"
          alt="question"
          image={questionMarkIcon}
          sx={{
            objectFit: "contain",
            maxHeight: "50%",
            maxWidth: "50%",
          }}
        />
      </Box>
    </Card>
  );
};
