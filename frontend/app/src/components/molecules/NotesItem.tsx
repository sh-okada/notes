import { Box, Stack } from "@mui/material";
import { FcDocument } from "react-icons/fc";
import IconBox from "../atoms/IconBox";
import LineClampText from "../atoms/LineClampText";
import RelativeDateTimeText from "../atoms/RelativeDateTimeText";

interface Props {
  id: string;
  title: string;
  createdAt: Date;
}

const NotesItem = ({ id, title, createdAt }: Props) => {
  return (
    <Box display="flex" gap={2}>
      {/* <ButtonBase
        href={`/notes/${id}`}
        disableTouchRipple
        sx={{ display: "block" }}
      > */}
      <IconBox>
        <FcDocument size={40} />
      </IconBox>
      {/* </ButtonBase> */}
      <Stack>
        <LineClampText value={title} lineClamp={2} />
        <RelativeDateTimeText date={createdAt} />
      </Stack>
    </Box>
  );
};

export default NotesItem;
