import { Typography } from "@mui/material";
import dayjs from "dayjs";

interface Props {
  date: Date;
}

const DateTimeText = ({ date }: Props) => {
  return (
    <Typography variant="caption">
      {dayjs(date).format("YYYY年MM月DD日 HH:mm")}
    </Typography>
  );
};

export default DateTimeText;
