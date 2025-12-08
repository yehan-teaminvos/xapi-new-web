"use client";

import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { ReactTyped } from "react-typed";
import { clients } from "@/data/clients";
import ChatWithAI from "./chat-with-ai";
import { Marquee } from "./marquee";
import { Accordion } from "./ui/accordion";

type HeroContent = { title: string[]; text: string; isFadeIn?: boolean };

const Hero = ({ title, text, isFadeIn = false }: HeroContent) => {
  return (
    <div>
      <section
        className="overflow-hidden relative"
        style={{
          background: `url("/media/home/hero-bg.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-2xl:container 2xl:max-w-[2000px] lg:px-15 px-5 mx-auto relative">
          <div className=" w-full min-h-screen flex flex-col justify-between ">
            <div className="pt-15 sm:pt-20 lg:pt-25 "></div>
            <div className="flex items-center justify-between w-full  gap-8 ">
              <div className="flex transition-all duration-300 flex-col w-full justify-center items-start pb-20">
                <h1 className="text-3xl md:text-4xl lg:text-5xl max-lg:mx-auto lg:text-start text-center lg:min-h-30 xl:min-h-35 xl:text-[64px] font-artegra-sans-alt-medium leading-[40px] md:leading-[54px] lg:leading-[55px] xl:leading-[72px] tracking-[-2px] xl:max-w-4xl max-w-2xl ">
                  <ReactTyped
                    loop
                    fadeOut
                    strings={title}
                    backDelay={3000}
                    typeSpeed={60}
                  />
                </h1>
                <motion.p className="text-base lg:text-start text-center max-lg:mx-auto telg sm:text-lg font-helvetica leading-8 xl:max-w-[930px] max-w-3xl mt-1 lg:mt-5 transition-all duration-300">
                  {text}
                </motion.p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="absolute top-0 right-0 h-full w-auto flex items-start z-10 justify-end">
          <Image
            src="/media/about/hero.svg"
            alt="Hero Graphic"
            width={317}
            height={649}
            className="object-cover opacity-20 -z-20 block xl:opacity-100 h-full w-auto "
          />
        </div>
        <div
          className={
            isFadeIn
              ? "absolute bottom-0 w-full h-20 bg-gradient-to-t from-white to-transparent z-10 "
              : ""
          }
        />
      </section>
    </div>
  );
};

export default Hero;
