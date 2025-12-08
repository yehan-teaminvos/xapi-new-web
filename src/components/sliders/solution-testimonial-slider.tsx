import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const testimonials = [
  {
    msg: "Xapi aligns perfectly with our expectations for modern API governance. It gives us the tools to automate compliance, enforce standards, and maintain full traceability without slowing our teams down.\nWe’ve cut back on manual oversight, improved reliability, and built a strong foundation for scalable, secure API innovation.",
    client: "Vincent CORNET ",
    role: "Solution Design Manager",
    company: "CHAMP Cargosystems S.A ",
  },
];

export const SolutionTestimonial = () => {
  return (
    <Swiper
      modules={[FreeMode, Pagination, Navigation]}
      spaceBetween={20}
      slidesPerView={1.1}
      pagination={{
        el: ".testimonial-pagination1",
        type: "bullets",
        bulletClass: "testimonial-pagination1-bullet",
        bulletActiveClass: "testimonial-pagination1-bullet-active",
        clickable: true,
      }}
      navigation={{
        nextEl: ".testimonial-pagination1-nextEl",
        prevEl: ".testimonial-pagination1-prevEl",
      }}
      freeMode
      className="!overflow-visible"
    >
      <div className="flex">
        {testimonials.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            className="md:w-[54.5%] sm:!h-96 !h-full rounded-[20px] border-primary border-[1px] md:p-10 p-7.5 flex-col justify-between flex "
          >
            <div className="flex-1 h-96 sm:h-60 md:h-55">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="fill-[#523EF5] stroke-none w-5.5 h-5.5"
                  />
                ))}
              </div>
              <p className="font-helvetica sm:text-xl text-lg text-[#5F5F5F] leading-8 md:mt-7.5 mt-5">
                {testimonial.msg}
              </p>
            </div>
            <div className="flex items-center pt-10">
              <Image
                width={140}
                height={140}
                alt=""
                src="/media/solutions/testimonial-profile-pic.png"
                className="h-[35px] w-auto"
              />
              <span className="px-[15px]">
                <p className="font-helvetica sm:text-base text-sm leading-none text-[#080808]">
                  {testimonial.role},{" "}
                </p>{" "}
                <p className="font-helvetica sm:text-base text-sm leading-8 text-[#5F5F5F]">
                  {testimonial.company}
                </p>
              </span>
            </div>
          </SwiperSlide>
        ))}
      </div>
      <div className="testimonial-pagination1 mt-6 flex justify-center"></div>
    </Swiper>
  );
};
