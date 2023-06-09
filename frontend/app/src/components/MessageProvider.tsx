import { ReactNode, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

import Snackbar from "./molecules/Snackbar";

import { messageState } from "@/stores/atom";

interface Props {
  children: ReactNode;
}

const MessageProvider = ({ children }: Props) => {
  const [open, setOpen] = useState(false);
  const message = useRecoilValue(messageState);

  useEffect(() => {
    setOpen(true);
  }, [message]);

  return (
    <>
      {children}
      {message && (
        <Snackbar
          open={open}
          setOpen={setOpen}
          message={message.message}
          serverity={message.serverity}
        />
      )}
    </>
  );
};

export default MessageProvider;
