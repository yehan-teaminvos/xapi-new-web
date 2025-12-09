"use client";

import { useSetAtom } from "jotai";
import Lottie from "lottie-react";
import {
  ChevronDown,
  Mail,
  MapPin,
  MoveLeft,
  MoveRight,
  Phone,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import ContactForm from "@/components/contact-form";
import Governance from "@/components/governance-matter";
import { Marquee } from "@/components/marquee";
import TestimonialSlider from "@/components/sliders/testimonial-slider";
import SparklesEffect from "@/components/sparkles-effect";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { accordionData } from "@/data/accordion-data";
import { clients } from "@/data/clients";
import { tech } from "@/data/governance-matter";
import { platformHighlights } from "@/data/platform-highlight";
import { testimonials } from "@/data/testimonial-data";
import useChat from "@/hooks/use-chat";
import { cn } from "@/lib/utils";
import heroAnimation from "../data/hero-animation.json";
import configs from "@/config/env_config";

// import { useSearchParams, useRouter } from "next/navigation";

const contactDetails = [
  // {
  //   icon: Phone,
  //   title: "Ring us",
  //   detail: "+94 71 13 24 234",
  //   link: "tel:+94711324234",
  // },
  {
    icon: Mail,
    title: "Send us a mail",
    detail: "info@xapihub.io",
    link: "mailto:info@xapihub.io",
  },
  {
    icon: MapPin,
    title: "Find us",
    detail:
      "160 Robinson Road, #14-04 Singapore Business Federation Center , Singapore (068194)",
  },
];

const ChatWithAI = dynamic(() => import("@/components/chat-with-ai"), {
  ssr: false,
});

export default function Page() {
  const { sendMessage } = useChat();
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [isOutComeHovered, setIsOutComeHovered] = useState(0);
  const [showOfferBanner, setShowOfferBanner] = useState(false);

  const outcomes = [
    {
      image: "/media/home/outcome-delivered/outcome-image.jpg",
      title: "Effortless Governance",
      content:
        "Technology does the heavy lifting, freeing business, technical, and compliance teams from manual tasks. ",
    },
    {
      image: "/media/home/outcome-delivered/outcome-image-2.jpg",
      title: "Visibility",
      content: "Gain 100% visibility across all your digital layers. ",
    },
    {
      image: "/media/home/outcome-delivered/outcome-image-3.jpg",
      title: "Single Source of Truth",
      content:
        "A single platform for governance removing silos and blind spots.",
    },
    {
      image: "/media/home/outcome-delivered/outcome-image-4.jpg",
      title: "AI First Company",
      content:
        "Transform your company by simplifying integration complexity so enterprises can be ready for the AI era. ",
    },
  ];

  const designAPI = [
    {
      title:
        "Design-First Approach — Build APIs from the ground up with governance built in",
    },
    {
      title:
        "AI-Powered Design Reviews — Get smart suggestions and instant feedback",
    },
    {
      title:
        "Centralized API Catalog — Improve discoverability and reuse across teams",
    },
    {
      title:
        "Seamless Version Management — Track, update, and retire APIs with confidence",
    },
    {
      title:
        "Built-in Compliance Checks — Enforce style guides, security rules, and policies",
    },
    {
      title:
        "Role-Based Collaboration — Streamline teamwork across designers, reviewers, and stakeholders",
    },
    {
      title:
        "Faster Time to Production — Accelerate delivery without compromising quality",
    },
  ];

  const strings = [
    "Effortless Governance",
    "Govern Everything. Build Confidently. Scale Without Risk",
    "Is your Data/APIs/AI, AI Ready?",
    "100%  Digital Visibility with a Single Source of Truth",
  ];

  const [open, setOpen] = useState("data");
  const [useTech, SetUseTech] = useState("BFSI");
  const activeTech = tech.find((b) => b.name === useTech);
  // const searchParams = useSearchParams();
  // const router = useRouter();

  // Open chat when navigated with ?openChat=1 and optional msg
  // useEffect(() => {
  //   try {
  //     const open = searchParams.get("openChat");
  //     const msg = searchParams.get("msg");
  //     if (open) {
  //       setIsChatOpen(true);
  //       if (msg) {
  //         // send a starter message if useChat is available
  //         sendMessage && sendMessage(decodeURIComponent(msg));
  //       }
  //       // clear the query so it doesn't reopen on back/focus
  //       router.replace("/");
  //     }
  //   } catch (e) {
  //     // ignore in SSR or if hooks unavailable
  //   }
  // }, [searchParams, setIsChatOpen, sendMessage, router]);

  return (
    <div>
      <section
        className="overflow-hidden"
        style={{
          background: `url("/media/home/hero-bg.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-2xl:container 2xl:max-w-[2000px] lg:px-15 px-5  mx-auto ">
          <div className=" w-full min-h-screen flex flex-col justify-between ">
            {/* Ad Banner */}
            <div className="w-full px-5 mt-29 min-h-[0] ">
              {/* in feature need to change min height as min-h-[100px] sm:min-h-[80px] */}
              <AnimatePresence mode="wait">
                {showOfferBanner && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="max-2xl:container 2xl:max-w-[1700px] mx-auto bg-gradient-to-r from-[#0A0F5C] via-[#1a1f6c] to-[#0A0F5C] py-4 px-10 sm:px-8 xl:px-10 pr-14 rounded-[20px] relative"
                  >
                    {/* Close button - top right corner */}
                    <button
                      type="button"
                      aria-label="Close"
                      onClick={() => setShowOfferBanner(false)}
                      className="absolute top-2 right-2 sm:top-2 sm:right-2 h-5 w-5 sm:h-6 sm:w- grid place-items-center rounded-full text-white transition-transform hover:scale-110 cursor-pointer"
                    >
                      <X className="h-5 w-4.5 sm:h-4 sm:w-4" />
                    </button>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                      <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start max-sm:text-center">
                        <span className="flex items-center gap-2 text-white hover:text-[#bf9cf7] font-artegra-sans-alt-medium text-lg sm:text-xl">
                          <Image
                            src="/media/target.png"
                            alt="Special Offer"
                            width={24}
                            height={24}
                          />
                          Special Offer:
                        </span>

                        <span className="text-white/90 font-helvetica text-sm sm:text-base hover:text-[#bf9cf7]">
                          Start your governance journey today and get 30 days
                          free trial
                        </span>
                      </div>

                      <button className="px-6 max-xl:px-5 py-2 cursor-pointer bg-gradient-to-r from-tertiary to-primary text-white font-helvetica-bold rounded-[5px] hover:scale-105 transition-transform duration-200 text-sm xl:text-base sm:text-[15px] whitespace-nowrap">
                        Claim Offer
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-between w-full  gap-8   sm:mt-0  ">
              <div className="flex transition-all duration-300 flex-col w-full justify-center items-start  ">
                <div className="w-full max-w-75 sm:max-w-80 mx-auto pb-4 sm:pb-5 xl:max-w-xl lg:hidden items-end justify-end ">
                  <Lottie
                    animationData={heroAnimation}
                    loop={true}
                    className="w-full"
                  />
                </div>

                <h1 className=" text-3xl md:text-4xl lg:text-5xl max-lg:mx-auto lg:text-start text-center lg:min-h-40 xl:min-h-55 xl:text-[64px] font-artegra-sans-alt-medium leading-[40px] md:leading-[54px] lg:leading-[55px] xl:leading-[72px] tracking-[-2px] max-w-2xl ">
                  <ReactTyped
                    loop
                    fadeOut
                    strings={strings}
                    backDelay={3000}
                    typeSpeed={60}
                  />
                </h1>
                <motion.p className="text-base lg:text-start text-center max-lg:mx-auto sm:text-lg font-helvetica leading-8 max-w-xl mt-1 lg:mt-5 transition-all duration-300">
                  The world's first unified governance platform for Data, API
                  and AI layers, simplifying complexity so enterprises can
                  accelerate innovation, ensure compliance, and unlock
                  monetization.
                </motion.p>
                <div className="mt-1 sm:mt-2 lg:mt-5 flex justify-center lg:justify-start w-full">
                  <ChatWithAI hideInput={false} />
                </div>
                <motion.a
                  href={configs.signUpUrl ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.3 } },
                  }}
                  className="text-white pt-10 flex gap-4 cursor-pointer group w-fit"
                >
                  <p className="text-base sm:text-lg font-helvetica font-bold">
                    See Our Unified Governance Platform in Action
                  </p>
                  <div className="flex items-center translate-x-0 group-hover:translate-x-5 duration-200">
                    <MoveRight />
                  </div>
                </motion.a>
              </div>
              <div className="w-full max-w-[350px] xl:max-w-[600px] 2xl:max-w-[800px] hidden lg:flex items-end justify-end">
                <Lottie animationData={heroAnimation} loop={true} />
              </div>
            </div>
            <div className="pb-4 mt-10 items-center">
              <Marquee className="duration-1000 strategic-partners-sliders">
                {clients.map((item) => {
                  return (
                    <div
                      key={item.image}
                      className="flex items-center px-5 md:px-7 lg:px-10 xl:px-15"
                    >
                      <Image
                        src={item.image}
                        width={500}
                        height={500}
                        alt="XAPI"
                        className="w-22 h-10 grayscale hover:grayscale-0 transition duration-300"
                      />
                    </div>
                  );
                })}
              </Marquee>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{
          background: `url("/media/home/accelerate-bg.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {" "}
        <div id="about" className="relative -top-15" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.2 }}
          className="max-2xl:container 2xl:max-w-[2000px] lg:px-15 px-5 mx-auto  pt-18 lg:pt-30  pb-21 lg:pb-31"
        >
          <div className="flex sm:flex-row flex-col gap-3 justify-between">
            <motion.h1
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              className="text-white text-3xl sm:text-[44px] leading-[48px] sm:leading-[54px] tracking-[-3px]  font-artegra-sans-alt-medium "
            >
              Take Control with Effortless,
              <br /> End-to-End Governance
            </motion.h1>
            <motion.div
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              className="flex items-center gap-x-5"
            >
              <div>
                <Image
                  className="w-14 md:w-20 rounded-[10px] select-none pointer-events-none"
                  src="/media/iso-27001.png"
                  alt="X-API"
                  width={500}
                  height={500}
                />
              </div>
              {/* <div>
                <Image
                  className="w-14 md:w-20 rounded-[10px] select-none pointer-events-none"
                  src="/media/iso-27018.png"
                  alt="X-API"
                  width={500}
                  height={500}
                />
              </div> */}
            </motion.div>
          </div>
          <motion.div
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.3 } },
            }}
            className="grid grid-cols-1 lg:grid-cols-2 flex-col mt-4 text-base sm:text-lg font-helvetica gap-5 lg:gap-10"
          >
            <motion.div
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              className="flex-1/2"
            >
              <p className="text-white  leading-[26px] sm:leading-[32px] ">
                Simplify control, strengthen compliance, and gain real-time
                visibility across your data, APIs, and AI. Xapi unifies
                governance into a single, intelligent platform that embeds
                policy enforcement and oversight directly into your workflows —
                eliminating silos, reducing risk, and accelerating innovation
                without compromise. Whether you're managing data pipelines, API
                ecosystems, or AI models, Xapi ensures every asset is secure,
                traceable, and audit-ready by design.
              </p>
            </motion.div>
            <motion.p
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              className="text-white list-disc leading-[26px] sm:leading-[32px] flex-1/2 space-y-3 lg:space-y-2"
            >
              Xapi is certified with ISO 27001, ensuring your systems meet the
              highest global standards for information security and cloud
              privacy protection. These certifications validate our commitment
              to secure, compliant operations — empowering your organization to
              scale with confidence as you build for 2025 and beyond.
            </motion.p>
          </motion.div>
          <motion.div
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.3 } },
            }}
            className="w-fit"
          >
            <motion.div
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
            >
              <Link href="/#contact">
                <div className="mt-7.5 flex justify-end gap-x-3 items-center w-fit px-8 py-2.5 bg-white rounded-[5px] cursor-pointer group">
                  <div className="text-transparent bg-clip-text bg-gradient-to-r from-tertiary via-secondary to-primary text-base sm:text-lg  font-helvetica-bold">
                    Contact Us
                  </div>
                  <MoveRight className="w-0 group-hover:w-5 text-primary duration-200" />
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
      <section className="relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.2 }}
          className="max-2xl:container 2xl:max-w-[2000px] lg:px-15 px-5 mx-auto pt-18 lg:pt-30 pb-15 lg:pb-25"
        >
          <motion.h2
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="text-3xl sm:text-[44px] leading-[48px] sm:leading-[54px] font-artegra-sans-alt-medium tracking-[-3px] hover:gradient-to-br from-primary via-secondary to-tertiary"
          >
            Why Unified Governance?
          </motion.h2>
          <motion.p
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="text-base sm:text-lg text-dark font-helvetica pt-3"
          >
            Eliminate Fragmentation. Build Trust at Every Layer.
          </motion.p>
          <motion.p
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="text-base sm:text-lg  text-dark leading-[26px] sm:leading-[32px] font-helvetica pt-10 sm:pt-16 max-w-3xl"
          >
            In today's hyper-connected digital economy, disconnected governance
            tools create blind spots, operational delays, and costly risks. Xapi
            unifies data, API and AI governance, compliance into one seamless
            platform, giving you complete control over your digital strategy.
          </motion.p>
          <motion.div
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.3 } },
            }}
            className="pt-11 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-[860px]"
          >
            {accordionData.slice(0, 4).map((item) => (
              <motion.div
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                key={item.name}
                className="bg-[#E8E8E8] group relative hover:text-white  hover:bg-gradient-to-r from-primary to-tertiary text-dark  rounded-[10px] p-4.5 text-base sm:text-lg font-helvetica max-w-[425px] cursor-pointer overflow-hidden"
                onClick={() => {
                  sendMessage(
                    `Provide a concise yet insightful overview of **${item.name}**, explaining its key principles, purpose, and relevance within the context of Unified Governance and XAPI.`
                  );
                }}
              >
                {item.name}
                <div className="absolute bottom-0 right-0 w-full">
                  <SparklesEffect
                    imageOneStyles="md:h-[7px] h-[7px]"
                    imageTwoStyles="md:h-[8px] h-[7px]"
                    imageThreeStyles="md:h-[14px] h-[15px]"
                    imageOnePosition="md:right-[22px] md:bottom-[12px] right-[25px] bottom-[12px]" // bottom star
                    imageTwoPosition="md:right-[10px] md:bottom-[23px] right-[12px] bottom-[24px]" // top star
                    imageThreePosition="md:right-[13px] md:bottom-[15px] right-[14px] bottom-[15px]" //middle star
                  />
                </div>
                <div className="absolute md:right-[6px] right-[8px] md:bottom-[5px] bottom-[8px]  rounded-[56px] md:h-7.5 md:w-7.5 sm:h-7 sm:w-7 h-6 w-6 flex items-center justify-center group-hover:opacity-0 duration-200">
                  <Image
                    src="/media/bluestar.svg"
                    alt="Move Up Right"
                    width={22}
                    height={22}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-4.5 max-w-[860px]">
            <Accordion
              type="single"
              collapsible
              onValueChange={(value) => setIsAccordionOpen(value === "item-1")}
            >
              <AccordionItem value="item-1">
                <div className="border border-transparent hover:border-black/40  w-fit group cursor-pointer rounded-[10px] duration-200 px-3  ">
                  <AccordionTrigger className="cursor-pointer">
                    <div className="flex items-center gap-x-2  p-2">
                      <div className="text-base sm:text-lg font-helvetica flex items-center gap-2 text-[#161616] cursor-pointer">
                        {isAccordionOpen ? "Explore less" : "Explore more"}
                      </div>
                      {/* <ChevronDown
                        className={
                          isAccordionOpen
                            ? "rotate-180 transition-transform duration-300"
                            : "transition-transform duration-300"
                        }
                      /> */}
                    </div>
                  </AccordionTrigger>
                </div>
                <AccordionContent>
                  <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 z-50">
                    {accordionData.slice(4, 12).map((item) => (
                      <div
                        key={item.name}
                        className="bg-[#E8E8E8] hover:text-white text-dark hover:bg-gradient-to-r from-primary to-tertiary cursor-pointer z-10 relative rounded-[10px] p-4.5 text-base sm:text-lg font-helvetica max-w-[425px] group overflow-hidden"
                        onClick={() => {
                          sendMessage(
                            `Provide a concise yet insightful overview of ${item.name}, explaining its key principles, purpose, and relevance within the context of Unified Governance and XAPI.`
                          );
                        }}
                      >
                        {item.name}
                        <div className="absolute bottom-0 right-0 w-full">
                          <SparklesEffect
                            imageOneStyles="md:h-[7px] h-[7px]"
                            imageTwoStyles="md:h-[8px] h-[7px]"
                            imageThreeStyles="md:h-[14px] h-[15px]"
                            imageOnePosition="md:right-[22px] md:bottom-[12px] right-[25px] bottom-[12px]" // bottom star
                            imageTwoPosition="md:right-[10px] md:bottom-[23px] right-[12px] bottom-[24px]" // top star
                            imageThreePosition="md:right-[13px] md:bottom-[15px] right-[14px] bottom-[15px]" //middle star
                          />
                        </div>
                        <div className="absolute md:right-[6px] right-[8px] md:bottom-[5px] bottom-[8px]   rounded-[56px] md:h-7.5 md:w-7.5 sm:h-7 sm:w-7 h-6 w-6 flex items-center justify-center group-hover:opacity-0 duration-200">
                          <Image
                            src="/media/bluestar.svg"
                            alt="Move Up Right"
                            width={22}
                            height={22}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </motion.div>
        <div className="absolute top-0 right-0 h-full w-auto flex items-start -z-10 justify-end">
          <Image
            src="/media/home/home.svg"
            alt="Hero Graphic"
            width={500}
            height={600}
            className="object-cover opacity-20 -z-0  hidden lg:block xl:opacity-100 h-full w-auto "
          />
        </div>
      </section>

      <section
        className="h-full w-full "
        style={{
          background: `url("/media/home/platform-bg.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div id="highlights" className="relative -top-15" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
          className="max-2xl:container 2xl:max-w-[2000px] lg:px-15 px-5 mx-auto pt-19 lg:pt-30  pb-21 lg:pb-30"
        >
          <motion.h2
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="text-3xl sm:text-[44px] font-artegra-sans-alt-medium tracking-[-3px] text-white"
          >
            Platform Highlights
          </motion.h2>
          <motion.p
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="text-white leading-[26px] sm:leading-[32px] mt-5 font-helvetica text-base sm:text-lg max-w-2xl "
          >
            Explore how Xapi embeds governance across the most critical layers
            of your digital ecosystem, enabling effortless control, continuous
            compliance, and real-time visibility across every asset.
          </motion.p>
          <motion.div
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.3 } },
            }}
            className="flex lg:flex-row flex-col w-full gap-4 pt-10 lg:pt-18 lg:min-h-[600px] items-start"
          >
            {platformHighlights.map((highlight) => (
              <motion.div
                variants={{
                  hidden: { scale: 0.8, opacity: 0 },
                  visible: { scale: 1, opacity: 1 },
                }}
                key={highlight.icon}
                onClick={() => setOpen(highlight.id)}
                className={cn(
                  "bg-white rounded-[10px] p-7.5 flex flex-col  transition-all duration-700 ease-in-out overflow-hidden select-none",
                  highlight.id === open
                    ? "w-full lg:w-2/4 lg:max-h-[600px] lg:min-h-[650px] cursor-pointer"
                    : "w-full lg:w-1/4 cursor-pointer lg:h-[650px]"
                )}
              >
                <div className="flex flex-col items-center gap-5 ">
                  <div className="flex justify-start w-full">
                    <Image
                      src={highlight.icon}
                      alt={highlight.title}
                      width={500}
                      height={500}
                      className="w-auto h-8"
                    />
                  </div>
                  <div>
                    <h3 className="text-[28px] text-dark font-artegra-sans-alt-medium tracking-[-2px] pb-[10px] pt-[10px]">
                      {highlight.title}
                    </h3>
                    <motion.p
                      key={highlight.id === open ? "open-desc" : "closed-desc"}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: highlight.id === open ? 1 : 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.7,
                        delay: 0.45,
                        ease: "easeOut",
                      }}
                      className="text-base sm:text-[19px] text-[#5F5F5F] font-helvetica leading-6.5 sm:leading-8 mt-2"
                    >
                      {highlight.description}
                    </motion.p>
                  </div>
                </div>
                <AnimatePresence mode="wait">
                  {highlight.id === open ? (
                    <motion.div
                      key="accordion"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{
                        delay: 0.4,
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                      className="px-1 overflow-hidden "
                    >
                      <Accordion
                        type="single"
                        collapsible
                        className="w-full mt-11"
                      >
                        {highlight.option.map((item, index) => (
                          <AccordionItem
                            value={item.id.toString()}
                            key={item.id}
                            className={cn(
                              index === highlight.option.length - 1 && "pb-20"
                            )}
                          >
                            <AccordionTrigger className="w-full  justify-between text-base sm:text-lg font-helvetica cursor-pointer !py-3">
                              {item.question}
                            </AccordionTrigger>

                            <AccordionContent className="text-sm font-helvetica text-[#5F5F5F] ">
                              {item.ans}
                            </AccordionContent>
                            <div className=" h-[1px]  w-full -ml-30 bg-[#1D1D1D4D] mt-[10px]" />
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </motion.div>
                  ) : (
                    <motion.p
                      key="readmore"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="font-helvetica text-tertiary cursor-pointer group flex xl:items-start items-end xl:h-fit h-full gap-4 mt-6 w-fit "
                    >
                      Read More{" "}
                      <MoveRight className="w-5 h-5 xl:h-full group-hover:ml-2 ml-0 duration-200 items-center justify-center flex" />
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
          <motion.a
            href={configs.signUpUrl ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            variants={{
              hidden: { scale: 0.8, opacity: 0 },
              visible: { scale: 1, opacity: 1 },
            }}
            className="text-white pt-10 flex gap-4 cursor-pointer group w-fit"
          >
            <p className="text-base sm:text-lg font-helvetica font-bold">
              See Our Unified Governance Platform in Action
            </p>
            <div className="flex items-center translate-x-0 group-hover:translate-x-5 duration-200">
              <MoveRight />
            </div>
          </motion.a>
        </motion.div>
      </section>
      <section>
        <div id="outcomes" className="relative -top-15" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
          className="max-2xl:container 2xl:max-w-[2000px] lg:px-15 px-5 mx-auto pt-18 lg:pt-30  "
        >
          <motion.h2
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="text-3xl sm:text-[44px] font-artegra-sans-alt-medium tracking-[-3px] mb-2"
          >
            Outcomes Delivered
          </motion.h2>
          <motion.p
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="font-helvetica text-base sm:text-lg max-w-2xl mt-3 "
          >
            Xapi turns governance into measurable results. By embedding
            visibility, compliance, and traceability across your data, APIs, and
            AI systems, our platform helps organizations reduce risk, accelerate
            innovation, and unlock new opportunities, all while staying aligned
            with global standards and audit requirements.
          </motion.p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-20 mt-10 lg:mt-18">
            <motion.div
              variants={{
                hidden: { x: -20, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              className="overflow-hidden rounded-[20px]"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={isOutComeHovered}
                  initial={{ filter: "blur(10px)" }}
                  animate={{ filter: "blur(0px)" }}
                  exit={{ filter: "blur(10px)" }}
                  transition={{ duration: 0.35 }}
                  src={outcomes[isOutComeHovered].image}
                  width={500}
                  height={500}
                  alt={outcomes[isOutComeHovered].title}
                  className="h-[250px] lg:h-full w-full object-cover rounded-[20px] transition-all duration-300"
                />
              </AnimatePresence>
            </motion.div>
            <div>
              <motion.div
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.1 } },
                }}
                className="flex flex-col gap-y-10 py-10.5"
              >
                {outcomes.map((item, index) => (
                  <motion.div
                    variants={{
                      hidden: { x: 20, opacity: 0 },
                      visible: { x: 0, opacity: 1 },
                    }}
                    key={item.title}
                    onClick={() => setIsOutComeHovered(index)}
                    onMouseEnter={() => setIsOutComeHovered(index)}
                    className={cn(
                      `flex flex-col justify-center h-23 sm:h-32 xl:h-24 cursor-pointer duration-300 border-l-[9px]`,
                      {
                        "border-tertiary": isOutComeHovered === index,
                        "border-tertiary/30": isOutComeHovered !== index,
                      }
                    )}
                  >
                    <div className={cn(` pl-9  duration-200`)}>
                      <p className="text-xl sm:text-[28px] font-artegra-sans-alt-medium text-dark -tracking-[1px]">
                        {item.title}
                      </p>
                      <p className="text-base sm:text-lg leading-[26px] sm:leading-[32px] font-helvetica">
                        {item.content}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
      <section>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
          className="max-2xl:container 2xl:max-w-[2000px] lg:px-15 px-5 mx-auto pb-21 lg:pb-32  pt-8 lg:pt-30"
        >
          <motion.h2
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="text-3xl sm:text-[44px] leading-[48px] sm:leading-[54px] font-artegra-sans-alt-medium tracking-[-3px] mb-3"
          >
            Why Governance Matters Across Industries{" "}
          </motion.h2>
          <motion.p
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="font-helvetica text-base sm:text-lg max-w-2xl leading-[26px] sm:leading-[32px]"
          >
            In every industry, the ability to move fast, stay compliant, and
            maintain trust hinges on effective governance. Xapi delivers
            tailored governance that adapts to your regulatory landscape,
            operational complexity, and digital maturity, so you can innovate
            without compromise
          </motion.p>
          {/* <motion.div
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-15"
          >
            {industries.map((item) => (
              <motion.div
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                key={item.title}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="w-auto h-14"
                />
                <h3 className="text-xl sm:text-[28px] font-artegra-sans-alt-medium mt-5 tracking-[-2px]">
                  {item.title}
                </h3>
                <p className="text-base sm:text-lg font-helvetica sm:leading-8 mt-2">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div> */}

          <div className="lg:hidden overflow-hidden mt-7 md:mt-15">
            <Governance selectedTech={useTech} setUseTech={SetUseTech} />
          </div>
          <div className="flex gap-20 mt-7 md:mt-15 lg:mt-18">
            <div className="lg:block hidden space-y-8 w-[550px]">
              {tech.map((item) => (
                <div key={item.id}>
                  <button
                    type="button"
                    onClick={() => {
                      SetUseTech(item.name);
                    }}
                    style={{
                      backgroundImage: `url(${item.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    className={cn(
                      "flex items-center   w-[440px] h-[90px] relative overflow-hidden  opacity-75 cursor-pointer rounded-[10px]",
                      useTech === item.name && "opacity-100"
                    )}
                  >
                    <p className="text-white font-artegra-sans-alt-medium font-medium text-base sm:text-xl z-10 px-5 sm:px-10">
                      {item.name}
                    </p>
                    <div
                      // className={cn(
                      //   "absolute  w-full h-full",
                      //   useTech !== item.name && "bg-black/80"
                      // )}
                      className={cn(
                        "absolute w-full h-full transition-all duration-700 ",
                        {
                          "bg-[#4A4A4A]/70": useTech !== item.name,
                          "bg-primary/40": useTech === item.name,
                        }
                      )}
                    />
                  </button>
                </div>
              ))}
            </div>
            <div className="w-full   ">
              {activeTech && (
                <div>
                  <div>
                    <Image
                      src={activeTech.img}
                      width={500}
                      height={500}
                      className="w-full sm:h-[458px] xl:h-[490px] h-[200px] object-cover rounded-[10px] flex items-end justify-end"
                      alt="cyaniq"
                    />
                  </div>
                  <p className="font-helvetica text-lg leading-[32px] text-dark mt-6">
                    {activeTech.desc}
                  </p>

                  <div>
                    {/* <p className="font-artegra-sans-alt-medium text-[28px] pt-13 font-medium">
                      {activeTech.name}
                    </p> */}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="overflow-hidden">
        <div id="testimonials" className="relative -top-15" />
        <div
          style={{
            backgroundImage: `url("/media/testimonial-bg.png")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.2 }}
            className="max-2xl:container 2xl:max-w-[2000px] lg:px-15 px-5 mx-auto pt-17 lg:pt-29 pb-5.5 lg:pb-17"
          >
            <motion.h2
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              className="text-3xl sm:text-[44px] text-white  leading-[48px] sm:leading-[54px] font-artegra-sans-alt-medium tracking-[-3px] "
            >
              Customer Highlight
            </motion.h2>
            <motion.p
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              className="font-helvetica text-base  sm:text-lg text-white max-w-2xl mt-3 leading-[26px] sm:leading-[32px]"
            >
              From financial services to life sciences to government, Xapi
              customers simplify governance, scale securely, and accelerate
              digital transformation with trust.
            </motion.p>
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              className="mt-13 sm:mt-18 "
            >
              <TestimonialSlider data={testimonials} />
            </motion.div>
            <div className="flex items-center justify-between mt-15">
              <div>
                <div className="testimonial-pagination" />
              </div>
              <div className="flex items-center gap-x-2.5"></div>
            </div>
          </motion.div>
        </div>
      </section>
      <section>
        <div id="contact" className="relative -top-15" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
          className="max-2xl:container 2xl:max-w-[2000px] lg:px-15 px-5 mx-auto pt-19 lg:pt-29 pb-20 lg:pb-32"
        >
          <motion.h1
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className=" font-artegra-sans-alt-medium text-dark text-3xl sm:text-[44px] tracking-[-3px]"
          >
            Contact us
          </motion.h1>
          <motion.p
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="text-dark font-helvetica  text-base sm:text-lg max-w-[720px] leading-[26px] sm:leading-[32px]  pt-2"
          >
            From financial services to life sciences to government, Xapi
            customers govern data, APIs, and AI with confidence. Ensuring
            oversight, compliance, and accelerated innovation.
          </motion.p>
          <motion.div
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.3 } },
            }}
            className="mt-13 sm:mt-18 grid grid-cols-1 lg:grid-cols-3  gap-0 lg:gap-5"
          >
            <motion.div
              variants={{
                hidden: { x: -20, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
            >
              <div className="space-y-8 sm:space-y-5 ">
                {contactDetails.map((item) => {
                  return (
                    <div key={item.title} className="flex gap-x-4 items-start">
                      <div className="p-3 xl:p-3.5 bg-dark-light w-fit rounded-[10px]">
                        <item.icon className="w-5 xl:w-6 h-5 xl:h-6" />
                      </div>
                      <div>
                        <div className="text-base sm:text-lg font-artegra-sans-alt-medium font-semibold text-secondary">
                          {item.title}
                        </div>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className=" text-dark mt-0.5 text-base sm:text-lg hover:text-tertiary">
                            {item.detail}
                          </div>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* <div className="lg:h-50 xl:h-56 2xl:h-84 h-auto w-full mt-15 ">
                <Image
                  src="/media/home/contact-map.svg"
                  alt="map"
                  width={407}
                  height={229}
                  className="w-full h-full object-cover"
                />
              </div> */}

              <div className="w-full mt-15">
                <div className="aspect-[16/8] w-full">
                  <Image
                    src="/media/home/contact-map.svg"
                    alt="map"
                    width={407}
                    height={229}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: { x: 20, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              className="col-span-2 lg:mt-0 mt-15"
            >
              <ContactForm />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
