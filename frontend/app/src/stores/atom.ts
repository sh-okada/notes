import { Message } from "@/types/state";
import { atom } from "recoil";

export const messageState = atom<Message | undefined | null>({
  key: "messageState",
  default: undefined,
});
