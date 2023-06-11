import { Box, Stack, Typography } from "@mui/material";
import { GetServerSideProps } from "next";

import { getNote } from "@/api";
import MarkdownPreview from "@/components/atoms/MarkdownPreview";
import { NoteResponse } from "@/types/api";
import { withCookie, withValidToken } from "@/utils/middleware";

interface Props {
  note: NoteResponse;
}

export default function Page({ note }: Props) {
  return (
    <Stack>
      <Box maxWidth={500} m="auto">
        <Typography variant="h4" fontWeight="bold">
          {note.title}
        </Typography>
      </Box>
      <MarkdownPreview value={note.body} />
    </Stack>
  );
}

export const getServerSideProps: GetServerSideProps = withCookie(
  withValidToken(async (context) => {
    const { id } = context.query;

    try {
      const note = (await getNote(id?.toString() ?? "")).data;

      return {
        props: {
          note: note,
        },
      };
    } catch {
      return {
        notFound: true,
      };
    }
  })
);
