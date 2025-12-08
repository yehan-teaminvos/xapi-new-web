"use client";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { useAtom, useAtomValue } from "jotai";
import { ArrowUp, Loader2, Sparkles, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Markdown from "react-markdown";
import { ReactTyped } from "react-typed";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import useChat from "@/hooks/use-chat";
import {
  inputAtom,
  isChatOpenAtom,
  isSendingAtom,
  messagesAtom,
} from "@/lib/jotai";
import { cn } from "@/lib/utils";
import SuggestionsSlider from "./sliders/suggestions-slider";
import SparklesEffect from "./sparkles-effect";
import SparklesEffectBlue from "./sparkles-effect-blue";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";

const suggestionsData = [
  {
    title: "Design-first API governance that scales",
    description:
      "Ensure compliance and foster innovation with our robust API governance framework.",
  },
  {
    title: "Real-time data pipeline control and auditability",
    description:
      "Streamline data management and ensure quality across your organization.",
  },
  {
    title: "Responsible, compliant AI model oversight",
    description:
      "Build a foundation for AI innovation with comprehensive governance.",
  },
];

type Props = {
  hideInput: boolean;
};

const ChatWithAI = ({ hideInput = false }: Props) => {
  const messages = useAtomValue(messagesAtom);
  const isWaiting = useAtomValue(isSendingAtom);
  const [input, setInput] = useAtom(inputAtom);
  const [isChatOpen, setIsChatOpen] = useAtom(isChatOpenAtom);
  const endRef = useRef<HTMLDivElement>(null);
  const { sendMessage } = useChat();

  useEffect(() => {
    sessionStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    setTimeout(() => {
      endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages, isChatOpen]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsChatOpen(true);
    if (input.trim() === "") return;
    sendMessage(input);
  };

  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (messages.length === 0) return;
    setIsChatOpen(true);
  };

  return (
    <Dialog open={isChatOpen} onOpenChange={setIsChatOpen}>
      {!hideInput && (
        <div
          onClick={onClick}
          className="relative w-full max-w-[600px] mt-10 hide-scrollbar"
        >
          <form onSubmit={onSubmit}>
            <ReactTyped
              strings={[
                "What is effortless governance?",
                "Ask me anything about Xapi…",
                "What is unified governance?",
                "How do I get 100% digital visibility?",
                "How do I become AI ready?",
              ]}
              typeSpeed={40}
              backSpeed={50}
              attr="placeholder"
              cursorChar="|"
              loop
            >
              <input
                type="text"
                className="shadow-custom w-full pl-6 pr-4 py-4 text-base sm:text-lg font-helvetica  rounded-[10px] focus:ring-1 focus:ring-tertiary focus:border-transparent outline-none transition-all duration-200 bg-white shadow-lg shadow-tertiary/20 drop-shadow-md"
                onChange={(e) => setInput(e.target.value ?? "")}
                value={input}
              />
            </ReactTyped>
            <DialogTrigger className="absolute top-1 right-1 group flex items-center px-5.5 sm:py-2.5 py-2 bg-gradient-to-r from-tertiary via-secondary to-primary rounded-[5px] gap-3 cursor-pointer overflow-hidden">
              <p className="font-helvetica-bold text-white text-2xl relative z-10 pr-3">
                AI
              </p>
              {/* Decorative sparkles and star overlay */}
              <div className="absolute bottom-0 right-0 w-full pointer-events-none">
                <SparklesEffect
                  imageOneStyles="md:h-[6px] h-[6px]"
                  imageTwoStyles="md:h-[8px] h-[8px]"
                  imageThreeStyles="md:h-[14px] h-[15px]"
                  imageOnePosition="md:right-[19px] md:bottom-[17px] right-[19px] bottom-[17px]" // bottom star
                  imageTwoPosition="md:right-[5px] md:bottom-[28px] right-[5px] bottom-[28px]" // top star
                  imageThreePosition="md:right-[9px] md:bottom-[20px] right-[9px] bottom-[20px]" //middle star
                />
              </div>
              <div className="absolute md:right-[1px] right-[1px] md:bottom-[11px] bottom-[11px] rounded-[56px] md:h-7.5 md:w-7.5 sm:h-7 sm:w-7 h-6 w-6 flex items-center justify-center group-hover:opacity-0 duration-200 pointer-events-none">
                <Image
                  src="/media/whitestar.svg"
                  alt="Move Up Right"
                  width={20}
                  height={17}
                />
              </div>
              {/* <ArrowLongRightIcon className="h-6 w-6 text-white" /> */}
            </DialogTrigger>
          </form>
        </div>
      )}

      <DialogContent showCloseButton={false} className="">
        <div className="relative h-full container! mx-auto pb-4 px-2 flex flex-col md:p-6 lg:p-10 md:rounded-[40px] z-[1000] overflow-hidden no-scrollbar bg-white/5 backdrop-blur-xl border-t-2 border-t-white/55 border-b-2 border-b-white/55 shadow-2xl">
          {/* Gradient Border Effect */}
          <span
            aria-hidden
            className="absolute inset-0 md:rounded-[40px] pointer-events-none"
            style={{
              padding: "1px",
              background: `
              linear-gradient(
                135deg,
                rgba(255,255,255,0.6) 0%,
                rgba(255,255,255,0.2) 50%,
                rgba(255,255,255,0.1) 100%
              )
            `,
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />
          <button
            type="button"
            onClick={() => setIsChatOpen(false)}
            className="absolute top-3 cursor-pointer w-10 h-10 flex items-center justify-center backdrop-blur-sm sm:right-10 right-5 md:hover:bg-[#E2E2E2] duration-200 rounded-full z-10"
          >
            <X className="w-10 text-black" />
          </button>
          <DialogTitle hidden>Chat with AI</DialogTitle>
          {!messages ||
            (messages.length === 0 && (
              <div className="flex flex-col items-center justify-end gap-2 px-2 lg:px-6 pt-40 lg:pt-32">
                <div className="flex flex-col items-center w-full relative h-fit">
                  <SparklesEffectBlue
                    className="opacity-100 w-16 top-0 left-0 relative"
                    imageTwoPosition="absolute md:right-[10px] right-[10px] md:bottom-[10px] bottom-[15px] z-[1]"
                    imageThreePosition="absolute md:right-[15px] right-[15px] md:bottom-[56px] bottom-[56px] z-[1]"
                    imageTwoStyles="h-[20px] md:h-[16px] w-auto"
                    imageThreeStyles="h-[20px] md:h-[14px] w-auto"
                  />
                  <p className=" max-w-[180px] text-[20px] md:text-[25px] lg:text-[30px] leading-8 text-black transition-all duration-300 font-helvetica text-3xl">
                    Hi there,
                  </p>
                  <p className=" h-fit pt-2 pb-1 text-center items-center w-full text-xl leading-8 bg-gradient-to-r from-[#8022B9] to-[#513DF4] bg-clip-text text-transparent transition-all duration-300  md:text-2xl lg:text-3xl font-helvetica italic">
                    Start chatting with{" "}
                    <span className="font-helvetica-bold italic">
                      Xapi AI
                    </span>
                  </p>
                </div>
              </div>
            ))}
          {!messages ||
            (messages.length > 0 && <div className="flex flex-col overflow-hidden overflow-y-auto no-scrollbar mask-y-from-90% flex-1 h-full">
              <div className="space-y-2 lg:space-y-5 h-full pt-[5vh] flex-1">
                {messages.map(
                  (message) =>
                    message.content && (
                      <div
                        key={message.content}
                        className={cn("flex flex-row w-full h-auto px-2 ", {
                          "justify-end": message.role === "user",
                        })}
                      >
                        <div
                          className={cn("bg-white px-4 py-2 rounded-lg border", {
                            "": message.role === "user",
                            "": message.role === "agent",
                          })}
                        >
                          <div
                            className={cn(
                              `prose dark:prose-invert prose-h1:font-bold text-[14px] prose-h1:text-lg prose-a:text-accent prose-img:rounded-none prose-p:my-1 prose-code:block prose-code:before:hidden prose-code:after:hidden prose-em:block prose-em:mb-2`,
                              `prose-a:text-black bg-gradient-to-r from-[#8022B9] to-[#513DF4] bg-clip-text text-transparent`
                            )}
                          >
                            <Markdown
                              rehypePlugins={[rehypeRaw]}
                              remarkPlugins={[remarkGfm]}
                            >
                              {message.content}
                            </Markdown>
                          </div>
                        </div>
                      </div>
                    )
                )}
                {isWaiting && (
                  <div
                    className={cn(
                      "flex flex-row w-min gap-2 px-2 lg:px-4 border py-2 rounded-lg ml-4 bg-white text-[#8022B9]"
                    )}
                  >
                    <Loader2 className="animate-spin" /> Processing...
                  </div>
                )}
                <div
                  ref={endRef}
                  className={messages && messages.length > 0 ? "pt-20" : ""}
                />
              </div>
            </div>)}

          {/* Desktop Grid View */}
          {!messages ||
            (messages.length === 0 && (
              <div className="py-10 lg:py-4 hidden md:grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-x-[20px] sm:gap-y-0 gap-y-2 flex-1">
                {suggestionsData.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 border rounded-lg bg-white/60 w-full lg:h-44 h-40 flex flex-col justify-between"
                  >
                    <div className="h-full flex flex-col xl:max-w-80 2xl:max-w-full">
                      <div className="font-semibold text-gray-900 mb-2 text-[14px] lg:text-[18px]">
                        {item.title}
                      </div>
                      <p className="text-[10px] text-black mb-2">
                        {item.description}
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setInput(item.title);
                        sendMessage(item.title);
                      }}
                      className="mt-2 text-sm text-white bg-linear-to-r from-[#8022B9] to-[#513DF4] w-full py-2 rounded-xl hover:shadow-lg transition-all"
                    >
                      Ask Xapi
                    </button>
                  </div>
                ))}
              </div>
            ))}

          {/* Mobile Slider View */}
          {!messages ||
            (messages.length === 0 && (
              <div className="md:hidden pb-6  w-full flex justify-center items-center flex-1">
                <SuggestionsSlider
                  suggestions={suggestionsData}
                  onSuggestionClick={(title) => {
                    setInput(title);
                    sendMessage(title);
                  }}
                />
              </div>
            ))}
          <div className="flex justify-end sm:h-20">
            <form
              onSubmit={onSubmit}
              className="flex flex-row self-end w-full gap-2  pl-4  pr-1.5 py-1.5 rounded-[10px] bg-white focus:border-tertiary    duration-200"
            >
              <input
                className="w-full px-3 outline-none font-helvetica bg-gradient-to-r from-[#8022B9] to-[#513DF4] bg-clip-text text-transparent placeholder:text-gray-400"
                type="text"
                placeholder="Ask me anything....."
                value={input}
                onChange={(e) => setInput(e.target.value ?? "")}
                autoFocus
              />
              <button
                type="submit"
                className=" group flex cursor-pointer items-center sm:px-3 sm:py-3 px-1 py-1 bg-gradient-to-r from-[#8022B9] to-[#513DF4] rounded-[5px] text-white gap-2 font-semibold"
              >
                <ArrowUp className="w-6 h-6" />
              </button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChatWithAI;
