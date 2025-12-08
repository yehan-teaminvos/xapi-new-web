"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SuggestionItem {
  title: string;
  description: string;
}

interface SuggestionsSliderProps {
  suggestions: SuggestionItem[];
  onSuggestionClick: (title: string) => void;
}

const SuggestionsSlider = ({
  suggestions,
  onSuggestionClick,
}: SuggestionsSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      handleNext();
    }

    if (touchStart - touchEnd < -75) {
      // Swipe right
      handlePrev();
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === suggestions.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? suggestions.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-75 sm:w-full px-[10px] sm:px-8 ">
      {/* Slider Container */}
      <div
        className="overflow-hidden relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {suggestions.map((item, index) => (
            <div key={index} className="min-w-full px-1">
              <div className="p-4 border rounded-lg bg-white/60 w-full h-fit">
                <div className="font-semibold text-gray-900 mb-2 text-base sm:text-[18px] leading-tight">
                  {item.title}
                </div>
                <p className="text-[10px] sm:text-xs text-black mb-3">
                  {item.description}
                </p>
                <button
                  type="button"
                  onClick={() => onSuggestionClick(item.title)}
                  className="mt-2 text-sm text-white bg-linear-to-r from-[#8022B9] to-[#513DF4] w-full py-2 rounded-xl hover:shadow-lg transition-all"
                >
                  Ask Xapi
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={handlePrev}
        className="absolute left-[-17px] top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-1.5 sm:p-2 rounded-full shadow-lg hover:bg-white transition-all active:scale-95 z-10"
        aria-label="Previous suggestion"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
      </button>
      <button
        type="button"
        onClick={handleNext}
        className="absolute right-[-17px] top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-1.5 sm:p-2 rounded-full shadow-lg hover:bg-white transition-all active:scale-95 z-10"
        aria-label="Next suggestion"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {suggestions.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-gradient-to-r from-[#8022B9] to-[#513DF4] w-2"
                : "bg-white w-2"
            }`}
            aria-label={`Go to suggestion ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SuggestionsSlider;
