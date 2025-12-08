"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import PopSliderModal from "./pop-slider-modal";
import { commitments } from "@/data/commitments";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

type Props = {
  data: {
    msg: string;
    image: string;
  }[];
};

export default function AboutSlider({ data }: Props) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState<number | null>(null);
  const [popupSlides, setPopupSlides] = useState<
    {
      id: number | string;
      title?: string;
      description?: string;
      imageSrc?: string;
    }[]
  >([]);

  // Build a unique list of slides from the commitments dataset (de-duplicate by image path)
  const uniqueSlides = useMemo(() => {
    const map = new Map<
      string,
      { id: number; title: string; description: string; imageSrc: string }
    >();
    // Prefer imageSrc, fall back to image
    (commitments || []).forEach((c, i) => {
      const raw: string | string[] | undefined = c.imageSrc ?? c.image ?? "";
      const src = Array.isArray(raw) ? raw[0] : raw;
      if (!src) return;
      if (!map.has(src)) {
        map.set(src, {
          id: c.id ?? i,
          title: c.msg || c.title || "",
          description: c.description || "",
          imageSrc: src,
        });
      }
    });
    return Array.from(map.values());
  }, []);

  // Open popup for a specific slide item: attempt to filter commitments by message
  const openPopupForItem = (item: { msg: string; image: string }) => {
    // Build a gallery where the center (first) image is the slide's local image
    // and the rest come from the matching commitments' imageSrc entries.
    const mainImage = item.image || "";

    // Collect matching commitment images (could be string or string[]), normalize to flat strings
    const matchedImages: string[] = [];
    (commitments || [])
      .filter((c) => (c.msg || "").trim() === (item.msg || "").trim())
      .forEach((c) => {
        const raw: string | string[] | undefined = c.imageSrc ?? c.image ?? "";
        if (Array.isArray(raw)) {
          raw.forEach((r) => {
            if (typeof r === "string" && r) matchedImages.push(r);
          });
        } else if (typeof raw === "string" && raw) {
          matchedImages.push(raw);
        }
      });

    // Start with the main image (if any), then append matched images, dedupe while preserving order
    const combined: string[] = [];
    if (mainImage) combined.push(mainImage);
    matchedImages.forEach((src) => {
      if (!combined.includes(src)) combined.push(src);
    });

    // If no images found, fall back to uniqueSlides' imageSrc values
    if (combined.length === 0) {
      uniqueSlides.forEach((s) => {
        if (!combined.includes(s.imageSrc)) combined.push(s.imageSrc);
      });
    }

    const slidesToShow = combined.map((src, i) => {
      // try to find a commitment that contains this src or matches the slide msg
      const matchedCommit = (commitments || []).find((c) => {
        const raw: string | string[] | undefined = c.imageSrc ?? c.image ?? "";
        const inImageSrc = Array.isArray(raw) ? raw.includes(src) : raw === src;
        const matchesImageProp = c.image === src;
        const matchesMsg = (c.msg || "").trim() === (item.msg || "").trim();
        return inImageSrc || matchesImageProp || matchesMsg;
      });

      return {
        id: matchedCommit?.id ?? i + 1,
        title: matchedCommit?.title || item.msg || "",
        description: matchedCommit?.description || "",
        imageSrc: src,
      };
    });

    setPopupSlides(slidesToShow);
    // set center to the main image if present, otherwise 0
    setActiveSlide(mainImage ? 0 : 0);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setActiveSlide(null);
  };

  return (
    <div className="relative">
      {/* Swiper Section */}
      <Swiper
        modules={[FreeMode, Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView="auto"
        pagination={{
          el: ".testimonial-pagination",
          type: "bullets",
          bulletClass: "testimonial-pagination-bullet",
          bulletActiveClass: "testimonial-pagination-bullet-active",
          clickable: true,
        }}
        navigation={{
          nextEl: ".testimonial-pagination-nextEl",
          prevEl: ".testimonial-pagination-prevEl",
        }}
        loop
        freeMode
        className="!overflow-hidden"
      >
        {data.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              background: `url(${item.image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "top",
            }}
            className="!w-full !h-[470px] 2xl:!h-[700px] relative rounded-[20px]"
          >
            {/* <div className="absolute bg-gradient-to-t from-black/50 to-transparent" /> */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent mask-t-from-25% rounded-[20px]"></div>
            <div className="flex flex-row justify-between">
              <div className="sm:px-10 px-5 whitespace-break-spaces font-helvetica sm:max-w-[660px] max-w-lg sm:text-left text-center text-2xl sm:text-[32px] text-white leading-[30px] sm:leading-[40px] absolute bottom-5 sm:bottom-10 ">
                {item.msg}
              </div>

              {/* Button that triggers popup */}
              <button
                onClick={() => openPopupForItem(item)}
                className="flex absolute md:right-10 md:bottom-12 right-5 bottom-3 items-center hover:scale-110 transition-transform cursor-pointer"
              >
                <Image
                  src="/media/arrow-up.svg"
                  width={55}
                  height={55}
                  alt="Arrow up"
                  className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[55px] md:h-[55px]"
                />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pop-up modal (opens when user clicks the per-slide button) */}
      <PopSliderModal
        open={isPopupOpen}
        initialIndex={activeSlide ?? 0}
        slides={popupSlides.length > 0 ? popupSlides : uniqueSlides}
        onClose={closePopup}
      />
    </div>
  );
}
