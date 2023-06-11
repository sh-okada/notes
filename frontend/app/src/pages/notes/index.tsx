import { getNotes } from "@/api";
import NotesItem from "@/components/molecules/NotesItem";
import { NoteResponse } from "@/types/api";
import { withCookie, withValidToken } from "@/utils/middleware";
import { Grid } from "@mui/material";
import { GetServerSideProps } from "next";

interface Props {
  notes: NoteResponse[];
}

export default function Page({ notes }: Props) {
  return (
    <Grid container spacing={3}>
      {notes.map((note) => {
        return (
          <Grid key={note.id} item xs={12} md={6}>
            <NotesItem
              id={note.id}
              title={note.title}
              createdAt={note.created_at}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

export const getServerSideProps: GetServerSideProps = withCookie(
  withValidToken(async (_context) => {
    const props: Props = {
      notes: [],
    };

    await getNotes().then((response) => {
      props.notes = response.data;
    });

    return {
      props: props,
    };
  })
);
