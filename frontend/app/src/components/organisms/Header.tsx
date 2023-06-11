import {
  AppBar,
  Box,
  Button,
  ButtonBase,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const handleClickHome = () => {
    router.push("/");
  };

  const handleClickEdit = () => {
    router.push("/notes/edit");
  };

  return (
    <AppBar elevation={0} color="inherit">
      <Container maxWidth="md">
        <Toolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <ButtonBase onClick={handleClickHome}>
              <Typography variant="h6" fontWeight="bold">
                Notes
              </Typography>
            </ButtonBase>
          </Box>
          <Button variant="contained" size="small" onClick={handleClickEdit}>
            メモを取る
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
