import { Typography } from "@mui/material";
import dayjs, { extend, locale } from "dayjs";
import "dayjs/locale/ja";
import relativeTime from "dayjs/plugin/relativeTime";

locale("ja");
extend(relativeTime);

interface Props {
  date: Date;
}

const RelativeDatetimeText = ({ date }: Props) => {
  return <Typography variant="caption">{dayjs(date).fromNow()}</Typography>;
};

export default RelativeDatetimeText;
