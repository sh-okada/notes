import LoginForm from "@/components/organisms/LoginForm";
import SignUpForm from "@/components/organisms/SignUpForm";
import SecondaryLayout from "@/components/templates/SecondaryLayout";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Stack, Tab } from "@mui/material";
import Lottie from "lottie-react";
import { GetServerSideProps } from "next";
import { ReactNode, useState } from "react";
import note from "../../public/assets/note.json";

export default function Page() {
  const [value, setValue] = useState("1");

  const handleChangeTab = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Stack maxWidth={350} m="auto">
      <Box width={150} m="auto">
        <Lottie animationData={note} loop={true} width={100} />
      </Box>
      <Stack bgcolor="white">
        <TabContext value={value}>
          <TabList variant="fullWidth" onChange={handleChangeTab}>
            <Tab label="ログイン" value="1" />
            <Tab label="新規登録" value="2" />
          </TabList>
          <TabPanel value="1">
            <LoginForm />
          </TabPanel>
          <TabPanel value="2">
            <SignUpForm />
          </TabPanel>
        </TabContext>
      </Stack>
    </Stack>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context.req.headers.cookie?.includes("access_token")) {
    return {
      redirect: {
        permanent: false,
        destination: "/notes",
      },
    };
  }

  return {
    props: {},
  };
};

Page.getLayout = (page: ReactNode) => <SecondaryLayout>{page}</SecondaryLayout>;
