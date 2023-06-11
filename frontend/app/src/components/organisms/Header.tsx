import {
  AppBar,
  Box,
  ButtonBase,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";

import LogoutButton from "./LogoutButton";

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
            <ButtonBase onClick={handleClickHome} disableTouchRipple>
              <Typography variant="h6" fontWeight="bold">
                Notes
              </Typography>
            </ButtonBase>
          </Box>
          <LogoutButton />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
