import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar elevation={0} color="inherit">
      <Container maxWidth="md">
        <Toolbar variant="dense" disableGutters>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Notes
          </Typography>
          <Button variant="contained" size="small">
            メモを取る
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
