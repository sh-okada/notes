import SignUpForm from "@/components/organisms/SignUpForm";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Tab } from "@mui/material";
import { useState } from "react";

export default function Page() {
  const [value, setValue] = useState("1");

  const handleChangeTab = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <TabList
        variant="fullWidth"
        onChange={handleChangeTab}
        sx={{ maxWidth: 350, m: "auto" }}
      >
        <Tab label="ログイン" value="1" />
        <Tab label="新規登録" value="2" />
      </TabList>
      <TabPanel value="1" sx={{ maxWidth: 350, m: "auto" }}>
        ログイン
      </TabPanel>
      <TabPanel value="2" sx={{ maxWidth: 350, m: "auto" }}>
        <SignUpForm />
      </TabPanel>
    </TabContext>
  );
}
