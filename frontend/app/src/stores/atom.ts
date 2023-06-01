import { Message } from "@/types/state";
import { atom } from "recoil";

export const messageState = atom<Message | undefined | null>({
  key: "messageState", // unique ID (with respect to other atoms/selectors)
  default: undefined, // default value (aka initial value)
});
