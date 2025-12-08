import { useSetAtom } from "jotai";
import { v4 } from "uuid";
import {
  inputAtom,
  isChatOpenAtom,
  isSendingAtom,
  messagesAtom,
} from "@/lib/jotai";
import configs from "@/config/env_config";

const useChat = () => {
  const setIsChatOpen = useSetAtom(isChatOpenAtom);
  const setMessages = useSetAtom(messagesAtom);
  const setIsWaiting = useSetAtom(isSendingAtom);
  const setInput = useSetAtom(inputAtom);

  const sendMessage = async (input: string) => {
    if (input.trim() === "") return;
    setIsChatOpen(true);

    let uid = sessionStorage.getItem("uid");
    let sid = sessionStorage.getItem("sid");

    if (!uid || !sid) {
      uid = v4();
      sid = v4();
      sessionStorage.setItem("uid", uid);
      sessionStorage.setItem("sid", sid);
    }

    try {
      setIsWaiting(true);
      const body = {
        user_id: uid,
        session_id: sid,
        streaming: true,
        app_name: "agent",
        new_message: {
          role: "user",
          parts: [
            {
              text: input,
            },
          ],
        },
        state_delta: {},
        time_zone: "Asia/Colombo",
      };

      setMessages((old) => [
        ...old,
        {
          content: input,
          role: "user",
        },
      ]);

      setInput("");

      if (
        !configs.chatUrl ||
        !configs.chatKey
      ) {
        throw "No url or key defined!";
      }

      const response = await fetch(configs.chatUrl, {
        headers: {
          accept: "*/*",
          "accept-language": "en-US,en;q=0.9",
          "content-type": "application/json",
          "x-api-key": configs.chatKey,
        },
        body: JSON.stringify(body),
        method: "POST",
        mode: "cors",
        credentials: "omit",
      });
      console.log(response);

      if (!response.body) return;

      const reader = response.body.getReader();

      setMessages((prev) => [...prev, { role: "agent", content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          console.log("Stream complete");
          break;
        }
        const chunk = new TextDecoder().decode(value);
        setIsWaiting(false);
        setMessages((prev) => {
          const items = [...prev];
          if (items.length === 0) return items;

          const lastItem = items[items.length - 1];

          items[items.length - 1] = {
            ...lastItem,
            content: lastItem.content + chunk,
          };

          return items;
        });
      }
    } catch (error) {
      console.log(error);
    }

    setIsWaiting(false);
  };

  return {
    sendMessage,
  };
};

export default useChat;
