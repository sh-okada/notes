import { getNotes } from "@/api";
import NotesItem from "@/components/molecules/NotesItem";
import { NoteResponse } from "@/types/api";
import { withCookie, withValidToken } from "@/utils/middleware";
import { Fab, Grid, Stack } from "@mui/material";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { BsPencilSquare } from "react-icons/bs";

interface Props {
  notes: NoteResponse[];
}

export default function Page({ notes }: Props) {
  const router = useRouter();

  const handleClickFab = () => {
    router.push("/notes/edit");
  };

  return (
    <Stack>
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
      <Fab
        color="primary"
        size="large"
        onClick={handleClickFab}
        sx={{ position: "absolute", bottom: 32, right: 32 }}
      >
        <BsPencilSquare />
      </Fab>
    </Stack>
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
