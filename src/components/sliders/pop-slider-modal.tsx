"use client";

import { commitments } from "@/data/commitments";

import Image from "next/image";
import { useEffect, useState } from "react";

type SlideItem = {
  id: string | number;
  title?: string;
  description?: string;
  imageSrc?: string;
};

export default function PopSliderModal({
  open = true,
  initialIndex = 0,
  slides = [],
  onClose = () => {},
}: {
  open?: boolean;
  initialIndex?: number;
  slides?: SlideItem[];
  onClose?: () => void;
}) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(open);

  // const defaultSlides: SlideItem[] = [
  //   {
  //     id: 1,
  //     title: "Slide 1",
  //     description: "Description 1",
  //     imageSrc:
  //       "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop",
  //   },
  //   {
  //     id: 2,
  //     title: "Slide 2",
  //     description: "Description 2",
  //     imageSrc:
  //       "https://images.unsplash.com/photo-1511452885600-a3d2c9148a31?w=500&h=300&fit=crop",
  //   },
  //   {
  //     id: 3,
  //     title: "Slide 3",
  //     description: "Description 3",
  //     imageSrc:
  //       "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=500&h=300&fit=crop",
  //   },
  //   {
  //     id: 4,
  //     title: "Slide 4",
  //     description: "Description 4",
  //     imageSrc:
  //       "https://images.unsplash.com/photo-1448630360428-65456885c650?w=500&h=300&fit=crop",
  //   },
  //   {
  //     id: 5,
  //     title: "Slide 5",
  //     description: "Description 5",
  //     imageSrc:
  //       "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=500&h=300&fit=crop",
  //   },
  // ];

  const items = slides && slides.length > 0 ? slides : commitments;
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  useEffect(() => {
    if (open) {
      setShouldRender(true);
      // Small delay to trigger animation after render (ensure initial styles applied)
      setTimeout(() => setIsAnimating(true), 20);
      document.body.style.overflow = "hidden";
    } else {
      setIsAnimating(false);
      // Wait for animation to finish before unmounting
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 620); // Match animation duration (600ms) + small buffer
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
    // wait slightly longer than animation to ensure it finished
    setTimeout(() => {
      onClose();
    }, 620);
  };

  if (!shouldRender) return null;

  return (
    <div className="fixed inset-0 z-[1200] flex items-center justify-center">
      {/* Backdrop with fade animation */}
      <div
        className={`absolute inset-0 bg-black/55 transition-opacity duration-500 ease-out ${
          isAnimating
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={handleClose}
        aria-hidden
      />

      {/* Modal with slide up from bottom animation (transform + opacity only for GPU accel) */}
      <div
        className={`relative h-[554px] max-w-[859px] w-full bg-white rounded-2xl shadow-2xl overflow-hidden transform transition duration-600 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
          isAnimating
            ? "opacity-100 pointer-events-auto scale-100"
            : "translate-y-[100vh] opacity-0 pointer-events-none scale-98"
        }`}
      >
        <button
          onClick={handleClose}
          aria-label="Close gallery"
          className="absolute cursor-pointer top-12 sm:right-2 -right-5 -translate-x-1/2 z-20 w-12 h-12 flex items-center justify-center transition hover:opacity-80"
        >
          <Image
            src="/media/popup-close.svg"
            width={24}
            height={24}
            alt="Close"
            className="w-[24px] h-[24px]"
          />
        </button>

        <div className="">
          <div className="max-w-[820px]  text-center  relative px-13 py-8">
            {/* Left Navigation Arrow */}
            <button
              onClick={() => {
                const prevIndex =
                  activeIndex === 0 ? items.length - 1 : activeIndex - 1;
                setActiveIndex(prevIndex);
              }}
              className="absolute right-9 top-44 -translate-y-1/2 w-10 h-10 flex items-center justify-center transition hover:opacity-80"
              aria-label="Previous slide"
            >
              <Image
                width={30}
                height={30}
                src="/media/popup-left.svg"
                alt="Previous"
                className="w-[30px] h-[30px] duration-500 transition-all ease-in-out"
              />
            </button>

            <h2 className="px-1 text-[22px] md:text-[26px] max-w-lg font-satoshi text-black font-medium mb-2 text-left leading-9 pt-5">
              {items[activeIndex]?.title ||
                (items[activeIndex] as any)?.msg ||
                ""}
            </h2>
            <p className="text-black py-2 px-1 text-left font-normal max-w-xl font-satoshi text-[9px] md:text-[12px]">
              {items[activeIndex]?.description ||
                items[activeIndex]?.title ||
                (items[activeIndex] as any)?.msg ||
                ""}
            </p>

            {/* Right Navigation Arrow */}
            <button
              onClick={() => {
                const nextIndex = (activeIndex + 1) % items.length;
                setActiveIndex(nextIndex);
              }}
              className="absolute right-0 top-44 -translate-y-1/2 w-10 h-10 flex items-center justify-center transition hover:opacity-80"
              aria-label="Next slide"
            >
              <Image
                width={30}
                height={30}
                src="/media/popup-right.svg"
                alt="Next"
                className="w-[30px] h-[30px]"
              />
            </button>
          </div>

          <div className="flex items-center justify-center gap-5 pt-3">
            {/* Left Thumbnail */}
            <div
              className="rounded-r-xl overflow-hidden bg-gray-100 shadow-lg cursor-pointer opacity-50 hover:opacity-100 transition-all duration-500 ease-in-out"
              style={{ width: "167px", height: "191px" }}
              onClick={() => {
                const prevIndex =
                  activeIndex === 0 ? items.length - 1 : activeIndex - 1;
                setActiveIndex(prevIndex);
              }}
            >
              {(() => {
                const prevIdx =
                  activeIndex === 0 ? items.length - 1 : activeIndex - 1;
                const prevSrc = items[prevIdx]?.imageSrc;
                if (typeof prevSrc === "string" && prevSrc.length > 0) {
                  return (
                    <Image
                      width={167}
                      height={191}
                      src={prevSrc}
                      alt="Previous"
                      className="w-full h-full object-cover"
                    />
                  );
                }
                return <div className="w-full h-full bg-gray-200" />;
              })()}
            </div>

            {/* Center Large Image */}
            <div
              className="rounded-xl overflow-hidden bg-gray-100 shadow-2xl transition-all duration-500 ease-in-out"
              style={{ width: "486px", height: "237px" }}
            >
              {(() => {
                const activeSrc = items[activeIndex]?.imageSrc;
                if (typeof activeSrc === "string" && activeSrc.length > 0) {
                  return (
                    <Image
                      src={activeSrc}
                      alt="Xapi"
                      width={486}
                      height={237}
                      className="w-full h-full object-cover"
                    />
                  );
                }
                return <div className="w-full h-full bg-gray-200" />;
              })()}
            </div>

            {/* Right Thumbnail */}
            <div
              className="rounded-l-xl overflow-hidden bg-gray-100 shadow-lg cursor-pointer opacity-50 hover:opacity-100 transition-all duration-500 ease-in-out"
              style={{ width: "167px", height: "191px" }}
              onClick={() => {
                const nextIndex = (activeIndex + 1) % items.length;
                setActiveIndex(nextIndex);
              }}
            >
              {(() => {
                const nextIdx = (activeIndex + 1) % items.length;
                const nextSrc = items[nextIdx]?.imageSrc;
                if (typeof nextSrc === "string" && nextSrc.length > 0) {
                  return (
                    <Image
                      width={167}
                      height={191}
                      src={nextSrc}
                      alt="Next"
                      className="w-full h-full object-cover"
                    />
                  );
                }
                return <div className="w-full h-full bg-gray-200" />;
              })()}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-1 mt-6">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === activeIndex
                    ? "bg-[#1E3A8A] "
                    : "bg-[#523EF5] hover:bg-[#1E3A8A]"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
