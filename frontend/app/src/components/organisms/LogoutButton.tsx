import { Button } from "@mui/material";
import { useRouter } from "next/router";

import { logout } from "@/api";

const LogoutButton = () => {
  const router = useRouter();

  const handleClickLogout = () => {
    logout().then(() => {
      router.replace("/");
    });
  };

  return (
    <Button variant="contained" onClick={handleClickLogout}>
      ログアウト
    </Button>
  );
};

export default LogoutButton;
