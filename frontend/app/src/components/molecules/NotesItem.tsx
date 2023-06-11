import { Box, Stack } from "@mui/material";
import { FcDocument } from "react-icons/fc";
import DateText from "../atoms/DateText";
import IconBox from "../atoms/IconBox";
import LineClampText from "../atoms/LineClampText";

interface Props {
  id: string;
  title: string;
  createdAt: Date;
}

const NotesItem = ({ id, title, createdAt }: Props) => {
  return (
    <Box display="flex" gap={2}>
      <IconBox>
        <FcDocument size={40} />
      </IconBox>
      <Stack>
        <LineClampText value={title} lineClamp={2} />
        <DateText date={createdAt} />
      </Stack>
    </Box>
  );
};

export default NotesItem;
