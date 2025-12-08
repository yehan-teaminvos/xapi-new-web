"use client";

import { useEffect, useState } from "react";

type GovernanceItem = {
  title: string;
  content: string;
};

export default function GovernancePopupModal({
  open = false,
  item,
  onClose = () => {},
}: {
  open?: boolean;
  item: GovernanceItem | null;
  onClose?: () => void;
}) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(open);

  useEffect(() => {
    if (open) {
      setShouldRender(true);
      // Small delay to trigger animation after render
      setTimeout(() => setIsAnimating(true), 20);
      document.body.style.overflow = "hidden";
    } else {
      setIsAnimating(false);
      // Wait for animation to finish before unmounting
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 620);
      document.body.style.overflow = "";
      return () => clearTimeout(timer);
    }
  }, [open]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
    }, 620);
  };

  if (!shouldRender || !item) return null;

  return (
    <div className="fixed inset-0 z-[1200] flex items-center justify-center p-4">
      {/* Backdrop with fade animation */}
      <div
        className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ease-out ${
          isAnimating
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={handleClose}
        aria-hidden
      />

      {/* Modal with scale and fade animation */}
      <div
        className={`relative max-w-3xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden transform transition duration-600 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
          isAnimating
            ? "translate-y-0 opacity-100 pointer-events-auto scale-100"
            : "translate-y-8 opacity-0 pointer-events-none scale-95"
        }`}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          aria-label="Close modal"
          className="absolute top-6 right-6 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 hover:bg-white transition-all hover:scale-110 shadow-lg"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-700"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Gradient header bar */}
        <div className="h-2 bg-gradient-to-r from-[#8022B9] via-[#00005B] to-[#513DF4]" />

        {/* Content */}
        <div className="px-8 sm:px-12 py-10 sm:py-12">
          {/* Title with gradient accent */}
          <div className="flex items-start gap-4 mb-6">
            <div className="h-full w-1.5 bg-gradient-to-b from-[#8022B9] to-[#513DF4] rounded-full mt-1" />
            <h2 className="text-2xl sm:text-[32px] leading-tight sm:leading-[42px] font-artegra-sans-alt-medium tracking-[-1px] text-gray-900">
              {item.title}
            </h2>
          </div>

          {/* Content */}
          <p className="text-base sm:text-lg leading-[28px] sm:leading-[32px] text-[#5F5F5F] font-helvetica pl-6">
            {item.content}
          </p>

          {/* Optional: Action button */}
          <div className="mt-8 pl-6 flex gap-4">
            <button
              onClick={handleClose}
              className="px-8 py-3 bg-gradient-to-r from-[#8022B9] via-[#00005B] to-[#513DF4] text-white font-helvetica font-bold rounded-lg hover:shadow-lg transition-all hover:scale-105"
            >
              Got it
            </button>
            <button
              onClick={handleClose}
              className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-helvetica font-bold rounded-lg hover:border-[#513DF4] hover:text-[#513DF4] transition-all"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
