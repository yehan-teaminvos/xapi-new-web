import { atom } from "jotai";
import type { Message } from "./types";

export const messagesAtom = atom<Message[]>([]);
export const isSendingAtom = atom<boolean>(false);
export const inputAtom = atom<string>("");
export const isChatOpenAtom = atom<boolean>(false);
