"use client";
import Image from "next/image";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
type Props = {
  data: {
    msg: string;
    client: string;
    role: string;
  }[];
};

export default function TestimonialSlider({ data }: Props) {
  return (
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
      freeMode
      className="!overflow-visible"
    >
      {data.map((item) => {
        return (
          <SwiperSlide
            key={item.client}
            className="bg-white !w-full rounded-[20px] p-5 md:p-8 lg:p-12 flex flex-col"
          >
            <Image
              src="/media/semicolon.svg"
              alt="X-API"
              width={200}
              height={200}
              className="w-10"
            />

            <div className="mt-5 flex flex-col justify-between flex-1">
              <p className="text-dark text-base sm:text-lg leading-[26px] sm:leading-[32px]">
                {item.msg}
              </p>

              <p className="text-base sm:text-lg font-helvetica mt-5 sm:mt-8">
                {item.role}
              </p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
