// import { Noto_Sans_JP, Roboto } from "@next/font/google";

// const notoSansJP = Noto_Sans_JP({
//   weight: ["300", "400", "500", "700"],
//   subsets: ["latin"],
// });

// const robot = Roboto({
//   weight: ["300", "400", "500", "700"],
//   subsets: ["latin"],
// });

import { createTheme } from "@mui/material";
import { colors } from "./color";

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
  },
  // typography: {
  //   fontFamily: [notoSansJP.style.fontFamily, robot.style.fontFamily].join(","),
  // },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          wordWrap: "break-word",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: colors.bgPrimary,
        },
      },
    },
  },
});
