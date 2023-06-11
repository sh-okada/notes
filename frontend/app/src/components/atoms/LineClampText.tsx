import { Typography } from "@mui/material";

interface Props {
  value: string;
  lineClamp: number;
}

const LineClampText = ({ value, lineClamp }: Props) => {
  return (
    <Typography
      variant="h6"
      fontWeight="bold"
      sx={{
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: lineClamp,
        WebkitBoxOrient: "vertical",
      }}
    >
      {value}
    </Typography>
  );
};

export default LineClampText;
