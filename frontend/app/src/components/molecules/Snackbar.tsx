import { Alert, AlertColor, Snackbar as MuiSnackbar } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  message: string;
  serverity: AlertColor;
}

const Snackbar = ({ open, setOpen, message, serverity }: Props) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <MuiSnackbar open={open} autoHideDuration={2000} onClose={handleClose}>
      <Alert variant="filled" severity={serverity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </MuiSnackbar>
  );
};

export default Snackbar;
