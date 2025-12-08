import { cn } from "@/lib/utils";
import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { tech } from "../data/governance-matter";

type ConsultsliderProps = {
  selectedTech: string;
  setUseTech: (tech: string) => void;
};

function Consultslider({ selectedTech, setUseTech }: ConsultsliderProps) {
  return (
    <Swiper
      className="!overflow-visible"
      spaceBetween={15}
      freeMode
      slidesPerView="auto"
    >
      {tech.map((item) => (
        <SwiperSlide key={item.id} className="!w-fit">
          <div
            onClick={() => {
              setUseTech(item.name);
            }}
            style={{
              backgroundImage: `url(${item.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className={cn(
              "flex items-center justify-center  px-3 lg:px-0 w-[200px] lg:w-[180px] h-[70px] lg:h-[60px] rounded-[5px]  relative overflow-hidden  opacity-75 cursor-pointer",
              selectedTech === item.name && "opacity-100"
            )}
          >
            <p className="text-white font-artegra-sans-alt-medium leading-4 p-3 z-10">
              {item.name}
            </p>
            <div
              className={cn(
                "absolute w-full h-full transition-all duration-700 ",
                {
                  "bg-[#4A4A4A]/70": selectedTech !== item.name,
                  "bg-primary/40": selectedTech === item.name,
                }
              )}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Consultslider;
