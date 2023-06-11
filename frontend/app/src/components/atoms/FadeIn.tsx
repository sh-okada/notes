import { Box } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const FadeIn = ({ children }: Props) => {
  return <Box className="fadeIn">{children}</Box>;
};

export default FadeIn;
