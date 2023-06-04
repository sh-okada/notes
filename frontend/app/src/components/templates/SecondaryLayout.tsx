import { Box, Container } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SecondaryLayout = ({ children }: Props) => {
  return (
    <>
      <Box component="main" py={5}>
        <Container maxWidth="md">{children}</Container>
      </Box>
    </>
  );
};

export default SecondaryLayout;
