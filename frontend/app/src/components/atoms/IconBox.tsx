import { Box } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const IconBox = ({ children }: Props) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minWidth={80}
      minHeight={80}
      bgcolor="white"
      borderRadius={4}
    >
      {children}
    </Box>
  );
};

export default IconBox;
