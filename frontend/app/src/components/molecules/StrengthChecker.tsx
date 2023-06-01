import { MobileStepper, Typography } from "@mui/material";

interface Props {
  strength: "terrible" | "simple" | "medium" | "strong";
}

interface StrengthScoreProperty {
  score: number;
  strength: string;
  lineColor: string;
}

interface StrengthScoreProperties {
  terrible: StrengthScoreProperty;
  simple: StrengthScoreProperty;
  medium: StrengthScoreProperty;
  strong: StrengthScoreProperty;
}

const properties: StrengthScoreProperties = {
  terrible: {
    score: 1,
    strength: "低",
    lineColor: "#dc143c",
  },
  simple: {
    score: 2,
    strength: "低",
    lineColor: "#dc143c",
  },
  medium: {
    score: 2,
    strength: "中",
    lineColor: "#ffd700",
  },
  strong: {
    score: 3,
    strength: "高",
    lineColor: "#3cb371",
  },
};

const StrengthChecker = ({ strength }: Props) => {
  return (
    <MobileStepper
      variant="progress"
      steps={4}
      position="static"
      activeStep={properties[strength].score}
      backButton={
        <Typography fontSize="small">{`強度：${properties[strength].strength}`}</Typography>
      }
      nextButton={undefined}
      sx={{
        bgcolor: "transparent",
      }}
    />
  );
};

export default StrengthChecker;
