import { Typography } from "@mui/material";
import dayjs from "dayjs";

interface Props {
  date: Date;
}

const DateText = ({ date }: Props) => {
  return (
    <Typography variant="caption">
      {dayjs(date).format("YYYY年MM月DD日 HH:mm")}
    </Typography>
  );
};

export default DateText;
