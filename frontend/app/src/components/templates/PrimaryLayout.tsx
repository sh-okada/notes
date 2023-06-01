import { Box, Container, Toolbar } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PrimaryLayout = ({ children }: Props) => {
  return (
    <>
      {/* <Header /> */}
      <Box component="main" py={5}>
        <Toolbar />
        <Container maxWidth="md">{children}</Container>
      </Box>
    </>
  );
};

export default PrimaryLayout;
