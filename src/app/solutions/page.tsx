"use client";
import { MoveUpRight, Star } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import React, { useState } from "react";
import Button from "@/components/button";
import ChatWithAI from "@/components/chat-with-ai";
import { MenuButton } from "@/components/header";
import Hero from "@/components/hero";
import SparklesEffect from "@/components/sparkles-effect";
import SparklesEffectBlue from "@/components/sparkles-effect-blue";
import { chooseXAPI, outcomeMatter } from "@/data/outcome-choose-xapi-data";
import { services } from "@/data/solutions";
import useChat from "@/hooks/use-chat";
import { cn } from "@/lib/utils";
import { SolutionTestimonial } from "@/components/sliders/solution-testimonial-slider";

const title_hero = ["Solutions That Scale With Your Business &amp; Industry"];
function Page() {
  const { sendMessage } = useChat();
  const [isActiveService, setIsActiveService] = useState(0);

  return (
    <div>
      <Hero
        isFadeIn={false}
        title={title_hero}
        text="Every organization faces unique governance challenges. Whether you’re standardizing data in the organization, controlling API sprawl, or managing compliance across data and AI systems, Xapi delivers governance tailored to your business needs and industry realities."
      />
      <section
        className="h-full w-full "
        style={{
          background: `url("/media/solutions/outcome-matter-bg.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-2xl:container 2xl:max-w-[2000px] lg:px-15 px-5 mx-auto pt-17 pb-20 lg:pt-27 lg:pb-30">
          <h2 className="text-3xl sm:text-[44px] font-artegra-sans-alt-medium tracking-[-3px] text-white">
            Outcomes That Matter
          </h2>
          <p className="text-white leading-[26px] sm:leading-[32px] mt-5 font-helvetica text-base sm:text-lg max-w-[850px]">
            Xapi isn’t just about governance, it’s about measurable results. By
            embedding compliance and visibility into every layer of your
            ecosystem, organizations unlock faster decision-making, reduced risk
            exposure, and smoother paths to innovation.
          </p>
          <div className="grid md:grid-cols-3 grid-cols-1 w-full lg:gap-5 gap-4 mt-[35px]">
            {outcomeMatter.map((outcomeMatterCard, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[20px] lg:p-10 lg:pb-8 p-7.5 pb-6 flex flex-col flex-1 justify-between transition-all duration-300 ease-in-out transform-gpu hover:scale-104"
              >
                <div className="flex flex-col lg:gap-7 md:gap-5 gap-3.5">
                  <div className="flex justify-start w-full">
                    <outcomeMatterCard.icon
                      className="text-primary w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <h3 className="xl:text-[28px] lg:text-[22px] md:text-[19px] sm:text-xl text-base text-dark font-artegra-sans-alt-medium lg:tracking-[-2px] md:tracking-[-0.5px] sm:tracking-0 xl:max-w-[270px] lg:max-w-[190px] md:max-w-[100px] lg:leading-[39px]">
                      {outcomeMatterCard.title}
                    </h3>
                    <p className="lg:text-lg md:text-base text-sm  text-[#5F5F5F] font-helvetica  font-normal lg:leading-8 md:leading-7 leading-6 md:mt-2.5 sm:mt-2 mt-1.5 lg:max-w-[310px]">
                      {outcomeMatterCard.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* "Services"*/}
      <section>
        <div className="lg:py-30 py-20 max-2xl:container 2xl:max-w-[2000px] mx-auto lg:px-15 px-5 ">
          <div className="bg-white lg:rounded-[20px] rounded-[16px] shadow-[0_1px_4px_0_#00000040] mx-auto flex w-fit lg:gap-1 md:gap-3 sm:gap-2 gap-1">
            {services.map((item, index) => {
              return (
                <div
                  key={index}
                  className="font-artegra-sans-alt-medium lg:text-xl md:text-lg text-base p-3"
                >
                  {/* <button
                    onClick={() => setIsActiveService(index)}
                    className={cn(
                      `text-dark p-3  rounded-[15px] cursor-pointer bg-white relative overflow-hidden duration-200`,
                      {
                        "text-white": isActiveService === index,
                      }
                    )}
                  >
                    <div
                      className={cn(
                        `absolute w-full h-full bg-gradient-to-r from-primary via-secondary to-tertiary top-0 left-0 opacity-0 duration-300`,
                        {
                          "opacity-100": isActiveService === index,
                        }
                      )}
                    />
                    <div className="relative">{item.title}</div>
                  </button> */}
                  <button
                    onClick={() => setIsActiveService(index)}
                    className={cn(
                      `text-dark p-3.5  rounded-[15px] cursor-pointer bg-white relative overflow-hidden duration-200`,
                      {
                        "text-white": isActiveService === index,
                      }
                    )}
                  >
                    {isActiveService === index && (
                      <motion.div
                        layoutId="activeTab"
                        className="rounded-[15px] absolute inset-0 bg-gradient-to-r from-primary via-secondary to-tertiary text-white z-0 pointer-events-none"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 25,
                        }}
                      />
                    )}
                    <div
                      className={cn("relative z-10 duration-300", {
                        "text-white": isActiveService === index,
                      })}
                    >
                      {item.title}
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
          <ChatWithAI hideInput />
          <div
            className={cn(
              `grid sm:grid-cols-2 grid-cols-1 lg:gap-5 gap-[14px] lg:mt-15 md:mt-10 mt-8`,
              services[isActiveService].layoutStyles
            )}
          >
            {services[isActiveService].items.map((serviceItems) => {
              return (
                <button
                  type="button"
                  key={serviceItems.id}
                  className="relative group border-primary border-[1px] rounded-[20px] lg:py-7.5 lg:px-10 py-6 px-7.5 leading-[38px] overflow-hidden group"
                  onClick={() => {
                    sendMessage(
                      `Provide a concise yet insightful overview of **${serviceItems.title}: ${serviceItems.content}**, explaining its key principles, purpose, and relevance within the context of XAPI.`
                    );
                  }}
                >
                  <div className="absolute w-full h-full bg-gradient-to-r from-primary to-tertiary top-0 left-0 opacity-0 group-hover:opacity-100 duration-300" />
                  <div className="md:min-h-[383px] lg:min-h-[308px] xl:min-h-[200px] sm:min-h-[164px] relative flex justify-start h-full flex-col ">
                    <h2 className="group-hover:text-white text-left text-dark duration-200 font-artegra-sans-alt-medium xl:text-[28px] lg:text-[22px] sm:text-xl text-base md:max-w-[240px] lg:max-w-none">
                      {serviceItems.title}
                    </h2>
                    <p className="group-hover:text-white text-left sm:mt-5.5 mt-4 font-helvetica lg:text-lg md:text-base text-sm text-[#5F5F5F] lg:leading-8 md:leading-7 leading-6 max-md:max-w-[491px] duration-200">
                      {serviceItems.content}
                    </p>
                  </div>
                  <div className="absolute bottom-0 right-0 w-full">
                    <SparklesEffect
                      imageOneStyles="md:h-[8px] h-[8px]"
                      imageTwoStyles="md:h-[9px] h-[9px]"
                      imageThreeStyles="md:h-[14px] h-[15px]"
                      imageOnePosition="md:right-[40px] md:bottom-[23px] right-[29px] bottom-[15px]" // bottom star
                      imageTwoPosition="md:right-[25px] md:bottom-[35px] right-[17px] bottom-[28px]" // top star
                      imageThreePosition="md:right-[30px] md:bottom-[27px] right-[20px] bottom-[19px]" //middle star
                    />
                  </div>
                  <div className="absolute md:right-[20px] right-[12px] md:bottom-[20px] bottom-[12px]  rounded-[56px] md:h-7.5 md:w-7.5 sm:h-7 sm:w-7 h-6 w-6 flex items-center justify-center group-hover:opacity-0 duration-200">
                    <Image
                      src="/media/bluestar.svg"
                      alt="Move Up Right"
                      width={22}
                      height={22}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>
      {/* "Choose XAPI section" */}
      <section
        className="h-full w-full "
        style={{
          background: `url("/media/solutions/outcome-matter-bg.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-2xl:container 2xl:max-w-[2000px] lg:px-15 px-5 mx-auto pt-17 lg:pt-28 lg:pb-30 py-21 ">
          <h2 className="text-3xl sm:text-[44px] font-artegra-sans-alt-medium tracking-[-3px] text-white">
            Why Choose XAPI
          </h2>
          <p className="text-white leading-[26px] sm:leading-[32px] mt-5 font-helvetica text-base sm:text-lg max-w-2xl">
            Not all governance platforms are created equal. Xapi is
            purpose-built to make governance invisible yet always-on, giving you
            clarity without friction.
          </p>
          <div className="grid  md:grid-cols-3 grid-cols-1 w-full lg:gap-5 gap-4 md:mt-18 mt-15 ">
            {chooseXAPI.map((chooseXAPICard, idx) => (
              <button
                type="button"
                key={idx}
                className="relative group  bg-white hover:bg-gradient-to-r from-primary to-tertiary rounded-[20px] lg:p-9 p-7.5 flex flex-col justify-between transition-all duration-300 ease-in-out overflow-hidden "
                onClick={() => {
                  sendMessage(
                    `Provide a concise yet insightful overview of **${chooseXAPICard.title}: ${chooseXAPICard.description}**, explaining its key principles, purpose, and relevance within the context of XAPI.`
                  );
                }}
              >
                <div className="flex flex-col lg:gap-7 md:gap-5 gap-3.5 ">
                  <div>
                    <h3 className="md:max-w-[130px] text-left group-hover:text-white lg:max-w-none xl:text-[28px] lg:text-[22px] md:text-[19px] sm:text-xl text-base text-dark font-artegra-sans-alt-medium lg:tracking-[-2px] md:tracking-[-0.5px] sm:tracking-0 ">
                      {chooseXAPICard.title}
                    </h3>
                    <p className="lg:text-lg text-left group-hover:text-white md:text-base text-sm  text-[#5F5F5F] font-helvetica   lg:leading-8 md:leading-7 leading-6 md:mt-2.5 sm:mt-2 mt-1.5 max-w-[400px]">
                      {chooseXAPICard.description}
                    </p>
                  </div>
                </div>
                <div className="absolute md:right-[20px] right-[12px] md:bottom-[20px] bottom-[12px]  rounded-[56px] md:h-7.5 md:w-7.5 sm:h-7 sm:w-7 h-6 w-6 flex items-center justify-center group-hover:opacity-0 duration-200">
                  <Image
                    src="/media/bluestar.svg"
                    alt="Move Up Right"
                    width={22}
                    height={22}
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-full">
                  <SparklesEffect
                    imageOneStyles="md:h-[7px] h-[7px]"
                    imageTwoStyles="md:h-[8px] h-[8px]"
                    imageThreeStyles="md:h-[14px] h-[15px]"
                    imageOnePosition="md:right-[40px] md:bottom-[24px] right-[27px] bottom-[15px]" // bottom star
                    imageTwoPosition="md:right-[25px] md:bottom-[35px] right-[14px] bottom-[25px]" // top star
                    imageThreePosition="md:right-[30px] md:bottom-[27px] right-[17px] bottom-[17px]" //middle star
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* "Testimonials by innovators section" */}
      <section>
        <div className="lg:pt-30 pt-20 max-2xl:container 2xl:max-w-[2000px] mx-auto lg:px-15 px-5">
          <div className="flex lg:mb-30 mb-20 max-xl:flex-col max-md:gap-10 max-sm:gap-7.5 md:gap-10">
            <div className="xl:w-[46.5%]">
              <h2 className="text-3xl sm:text-[44px] font-artegra-sans-alt-medium tracking-[-3px] text-black mt-5">
                Trusted by Innovators
              </h2>
              <p className="font-helvetica text-base sm:text-lg leading-[32px] text-black md:mt-10 sm:mt-5 mt-4  xl:max-w-[525px]  max-w-full">
                Across industries, enterprises rely on Xapi to transform
                governance from a bottleneck into a business advantage. Our
                platform empowers organizations to scale confidently, knowing
                compliance and oversight are always handled.
              </p>
            </div>
            <div className="w-full overflow-hidden xl:p-10 md:pb-7.5 ">
              <SolutionTestimonial />
            </div>
          </div>
        </div>
      </section>
      {/* "CTA section" */}
      {/* <section className="bg-dark m-0 p-0">
        <div className="bg-white pb-50"></div>
        <div className="relative max-2xl:container 2xl:max-w-[1320px] mx-auto px-5  z-40 ">
          <div
            className="relative sm:rounded-[50px] rounded-[40px]"
            style={{
              background: `url("/media/solutions/outcome-matter-bg.png")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="relative sm:px-20 px-15 sm:pt-25 pt-20 sm:pb-[67px] pb-[47px] z-40">
              <h2 className="text-3xl sm:text-[44px] font-artegra-sans-alt-medium tracking-[-3px] text-white xl:max-w-[677px] lg:max-w-[600px]">
                Discover the solution that fits your growth journey.
              </h2>
              <Image
                width={1256}
                height={1716}
                alt=""
                src="/media/solutions/CTA-X.png"
                className="absolute right-0 bottom-0 top-0 h-full w-auto sm:rounded-r-[50px] rounded-r-[40px] -z-10 opacity-0 xl:opacity-100 lg:opacity-50 "
              />
              <div className="flex flex-col sm:mt-27 mt-18 gap-5 sm:flex-row">
                <button className="bg-white rounded-[5px] px-4 py-2.5 ">
                  <span className="leading-[26px] sm:leading-[32px] font-helvetica text-base lg:text-lg  bg-gradient-to-r from-[#523EF5] via-[#1F0076] to-[#8122BA] bg-clip-text text-transparent font-bold cursor-pointer">
                    Start Free Trial
                  </span>
                </button>
                <button className="px-4 py-2.5 text-white border-white border-[1px] rounded-[5px]  leading-[26px] sm:leading-[32px] font-helvetica text-base lg:text-lg font-bold cursor-pointer">
                  Book Demo
                </button>
                <button className="px-4 py-2.5 bg-[#523EF5] text-white rounded-[5px]  leading-[26px] sm:leading-[32px] font-helvetica text-base lg:text-lg tracking-[1px] font-bold cursor-pointer">
                  Connect with a Solutions Expert
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-dark pb-50"></div>
      </section> */}
      {/* CTA Section from the component of Chamara */}
      <section>
        <div className="relative">
          <div className="absolute w-full bg-[#161616] bottom-0 h-1/2"></div>
          <div className="max-2xl:container 2xl:max-w-[2000px] mx-auto lg:px-15 px-5">
            <div
              style={{
                background: `url("/media/home/footer-bg.png")`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              className="h-full w-auto rounded-[40px] flex relative overflow-hidden sm:px-20 px-15 sm:pt-21.5 pt-18 sm:pb-[67px] pb-[47px]"
            >
              <div className="flex flex-col justify-between xl:max-w-5xl max-w-3xl lg:items-start items-center ">
                <h2 className="text-3xl sm:text-[44px] font-Satoshi tracking-[-1px] sm:tracking-[-3px] text-white xl:max-w-[677px] lg:max-w-[600px] lg:leading-[60px] sm:leading-[50px] leading-[42px] text-center sm:text-start">
                  Discover the solution that fits your growth journey.
                </h2>
                {/* <p className="text-white text-base font-helvetica leading-[25px] lg:max-w-[630px] max-w-xl mt-5 lg:text-left text-center">
                The Xapi Community is a vibrant network of Xapi Platform users
                from around the globe: collaborating, innovating, and advancing
                together towards a more robust API design and governance
                ecosystem.
              </p> */}
                <div className="flex flex-col lg:mt-25 mt-17.5 gap-5 lg:flex-row">
                  {/* <button className="px-12 py-3.5 bg-white  font-bold rounded-[5px] cursor-pointer">
                  <div className="text-transparent bg-clip-text bg-gradient-to-r from-tertiary via-secondary to-primary font-helvetica text-lg">
                    Join Now
                  </div>
                </button> */}
                  <Button
                    title="Start Free Trial"
                    type="button"
                    className="text-lg py-2"
                  />
                  <button className="px-5.5 py-2.5 text-white hover:text-tertiary border-white hover:bg-white border-[1px] rounded-[5px]  leading-[26px] sm:leading-[32px] font-helvetica text-base lg:text-lg font-bold cursor-pointer">
                    Book Demo
                  </button>
                  <MenuButton
                    className="flex items-center bg-tertiary z-10 hover:bg-white hover:text-tertiary text-center text-lg  sm:leading-0 leading-6 py-3 text-white"
                    link="/"
                  >
                    Connect with a Solutions Expert
                  </MenuButton>
                </div>
              </div>
              <div className=" absolute h-full w-fit top-0 right-0 ">
                <Image
                  src="/media/home/footer.png"
                  alt="XAPI footer image"
                  width={400}
                  height={400}
                  className=" object-cover h-full w-auto max-w-2xl xl:opacity-100 lg:opacity-50 opacity-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;
