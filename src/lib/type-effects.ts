"use client";

import { useEffect, useState } from "react";

type UseTypewriterPlaceholderProps = {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
  cursor?: boolean;
};

export function useTypewriterPlaceholder({
  words,
  typingSpeed = 120,
  deletingSpeed = 60,
  pause = 1500,
  cursor = true,
}: UseTypewriterPlaceholderProps): string {
  const [placeholder, setPlaceholder] = useState<string>("");
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [showCursor, setShowCursor] = useState<boolean>(true);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && charIndex <= currentWord.length) {
      setPlaceholder(currentWord.slice(0, charIndex));
      timeout = setTimeout(() => setCharIndex(charIndex + 1), typingSpeed);
    } else if (isDeleting && charIndex >= 0) {
      setPlaceholder(currentWord.slice(0, charIndex));
      timeout = setTimeout(() => setCharIndex(charIndex - 1), deletingSpeed);
    } else if (!isDeleting && charIndex > currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && charIndex < 0) {
      setIsDeleting(false);
      setWordIndex((wordIndex + 1) % words.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [
    charIndex,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pause,
  ]);

  useEffect(() => {
    if (!cursor) return;
    const cursorInterval = setInterval(
      () => setShowCursor((prev) => !prev),
      500,
    );
    return () => clearInterval(cursorInterval);
  }, [cursor]);

  return cursor ? placeholder + (showCursor ? "|" : " ") : placeholder;
}
