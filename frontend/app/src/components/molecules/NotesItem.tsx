import { Box, Link, Stack } from "@mui/material";
import NextLink from "next/link";
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
      <IconBox>
        <FcDocument size={40} />
      </IconBox>
      <Stack>
        <Link component={NextLink} href={`/notes/${id}`} passHref>
          <LineClampText value={title} lineClamp={2} />
        </Link>
        <RelativeDateTimeText date={createdAt} />
      </Stack>
    </Box>
  );
};

export default NotesItem;
