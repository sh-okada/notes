import MessageProvider from "@/components/MessageProvider";
import PrimaryLayout from "@/components/templates/PrimaryLayout";
import { theme } from "@/styles/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { RecoilRoot } from "recoil";
import "../styles/global.css";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => <PrimaryLayout>{page}</PrimaryLayout>);

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <MessageProvider>
          <CssBaseline />
          {getLayout(<Component {...pageProps} />)}
        </MessageProvider>
      </ThemeProvider>
    </RecoilRoot>
  );
}
