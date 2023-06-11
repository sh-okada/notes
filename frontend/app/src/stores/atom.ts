import { atom } from "recoil";

import { Message } from "@/types/state";

export const messageState = atom<Message | undefined | null>({
  key: "messageState",
  default: undefined,
});
