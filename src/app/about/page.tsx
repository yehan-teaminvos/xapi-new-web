"use client";

import Hero from "@/components/hero";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { ArrowBigDown, MoveLeft, MoveRight, Pin } from "lucide-react";
import { cn } from "@/lib/utils";
import { roadMapData } from "@/data/road-map";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { locations } from "@/data/locations";
import AboutSlider from "@/components/sliders/about-slider";
import { commitments } from "@/data/commitments";
import CarRoadmapPath from "@/components/car-roadmap";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const strings = ["One Platform. Complete Governance. All Effortless."];

const team = [
  {
    image: "/media/about/pr.avif",
    name: "Prabath Ariyarathna",
    designation: "CEO & Chief Architect",
    linkedin: "https://www.linkedin.com/in/prabath-ariyarathna-ab255016/",
  },
  {
    image: "/media/about/Shanaka.avif",
    name: "Shanaka Mendis",
    designation: "Head of Business Development and Partnerships",
    linkedin: "https://www.linkedin.com/in/shanaka-mendis/",
  },

  {
    image: "/media/about/Rashmi.avif",
    name: "Rashmi Amaradasa",
    designation: "Manager HR & Operations",
    linkedin: "https://www.linkedin.com/in/rashmi-amaradasa/",
  },
];

const Page = () => {
  return (
    <div>
      <section>
        <Hero
          isFadeIn={false}
          title={strings}
          text="XAPI is the unified governance platform that embeds compliance, control, and visibility across your Data, APIs and AI. By making governance effortless and always-on, XAPI removes friction, reduces risk, and unlocks innovation at scale so your teams can build boldly and grow confidently."
        />
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
          className="max-2xl:container 2xl:max-w-[2000px] lg:px-15 px-5 mx-auto  pt-18 lg:py-29  pb-22 lg:pb-28 sm:text-left text-center"
        >
          <div className="gap-10">
            <motion.h1
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              className="text-white text-3xl sm:text-[44px] leading-[48px] sm:leading-[54px] tracking-[-3px]  font-artegra-sans-alt-medium "
            >
              About XAPI
            </motion.h1>
          </div>

          <motion.div
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.3 } },
            }}
            className="grid grid-cols-1 lg:grid-cols-2 flex-col mt-3 text-base sm:text-lg font-helvetica gap-5 lg:gap-8"
          >
            <motion.div
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              className="flex-1/2"
            >
              <p className="text-white  leading-[26px] sm:leading-[32px] ">
                At Xapi, our team is redefining how governance is done. We are a
                diverse group of engineers, designers, strategists, and
                compliance specialists united by a single mission: to make
                governance effortless, invisible, and always-on. Together, we’ve
                built the world’s first unified governance platform for Data,
                APIs, and AI, simplifying complexity, automating compliance, and
                embedding visibility into the core of digital ecosystems.
              </p>
            </motion.div>
            <motion.p
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              className="text-white list-disc leading-[26px] sm:leading-[32px] flex-1/2 space-y-3 lg:space-y-2"
            >
              Our teams work across Singapore, Sri Lanka, India, Germany,
              Australia, and the UK, combining deep technical expertise with
              industry insight to help organizations grow confidently. Trusted
              by enterprises in highly regulated and high-growth industries, the
              Xapi team transforms governance from a bottleneck into a
              competitive advantage, enabling secure, scalable digital
              transformation across global trade, mobility, and data
              infrastructure
            </motion.p>
          </motion.div>
        </motion.div>
      </section>
      <section>
        <div className="pt-18 lg:pt-28  ">
          <div className="max-2xl:container 2xl:max-w-[2000px] lg:px-15 px-5 mx-auto  sm:text-left text-center">
            <h2 className="text-3xl sm:text-[44px] font-artegra-sans-alt-medium tracking-[-3px] pb-5">
               Cross-Border Data Compliance Enabled
            </h2>
            <p className="text-lg font-helvetica">
              Xapi was integrated into one of the world’s largest ports, enabling secure and compliant cross-border data operations.
            </p>
          </div>
          <CarRoadmapPath />
          {/* <div className="relative">
            <Image
              src="/media/about/road-map.avif"
              alt="Mission Vision Values"
              width={1440}
              height={1169}
              className="w-full h-auto"
            />
            <div className="">
              {roadMapData.map((item, index) => (
                <div
                  key={index}
                  className={cn(`absolute w-fit max-w-[180px]`, item.position)}
                >
                  <div className={cn(`flex justify-center`, item.className)}>
                    <Pin
                      strokeWidth={0.7}
                      className={cn(
                        `text-primary w-15 h-15 `,
                        item.iconrotation
                      )}
                    />
                  </div>
                  <div>
                    <h3
                      className={cn(
                        `font-artegra-sans-alt-medium text-[28px] text-dark`,
                        item.align
                      )}
                    >
                      {item.date}
                    </h3>
                    <p
                      className={cn(
                        ` font-helvetica text-xs text-[#3E4039]  max-w-[200px] mt-2`,
                        item.align
                      )}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </section>
      <section>
        <div className="max-2xl:container 2xl:max-w-[2000px] lg:px-15 px-5 mx-auto pb-22 lg:pb-28">
          <div className="sm:text-left text-center  pb-9">
            <h2 className="text-3xl sm:text-[44px] font-artegra-sans-alt-medium tracking-[-3px] pb-4.5">
              Leadership Team{" "}
            </h2>
            <p className="text-lg font-helvetica">
              A diverse leadership team with deep expertise in governance,
              enterprise technology, and product design.{" "}
            </p>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-3 grid-cols-1 gap-7 gap-y-10">
            {team.map((member, index) => (
  <div className="flex flex-col text-left" key={index}>
    
  
    <div className="relative aspect-[9/11] w-full overflow-hidden rounded-[10px]">
      <Image
        src={member.image}
        alt={`Leadership ${member.name}`}
        width={295}
        height={525}
        className="w-full h-full object-cover"
      />

      {/* LinkedIn icon bottom-right */}
      <div className="absolute bottom-3 right-3">
        {member.linkedin ? (
          <Link
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} on LinkedIn`}
            className="cursor-pointer"
          >
            <Image
              src="/media/icons/linkedin2.svg"
              alt="LinkedIn"
              width={32}
              height={32}
              className="block"
            />
          </Link>
        ) : (
          <Image
            src="/media/icons/linkedin2.svg"
            alt="LinkedIn placeholder"
            width={32}
            height={32}
            className="opacity-60"
          />
        )}
      </div>
    </div>

    <div className="flex flex-col sm:mt-7 mt-5 sm:max-w-[270px] pr-2">
      <div className="flex items-center justify-between">
        <h3 className="sm:text-[28px] text-2xl font-artegra-sans-alt-medium tracking-[-1.5px] sm:leading-[35px]">
          {member.name}
        </h3>
      </div>
    </div>

    <p className="sm:mt-3 sm:text-xl text-lg font-helvetica text-[#6C6C6C] text-left">
      {member.designation}
    </p>
  </div>
))}

          </div>
        </div>
      </section>
      <section>
        <div className="max-2xl:container 2xl:max-w-[2000px] lg:px-15 px-5 mx-auto pb-22 lg:pb-30 sm:text-left text-center">
          <div className="  pb-11">
            <h2 className="text-3xl sm:text-[44px] font-artegra-sans-alt-medium tracking-[-3px] pb-5">
              Global Presence
            </h2>
            <p className="text-lg font-helvetica pb-4 font-semibold">
              Powered by a Distributed, Diverse, and Governance-Native Team
            </p>
            <p className="text-lg font-helvetica">
              Xapi operates across five countries to serve global clients with
              24/7 agility and cross-border expertise.
            </p>
          </div>
          <div className="relative max-w-5xl mx-auto">
            <div className=" flex justify-center mx-auto ">
              <Image
                src="/media/about/global.svg"
                alt="Xapi Global Presence"
                width={1025}
                height={483}
                className="w-full h-auto sm:block hidden"
              />
              <Image
                src="/media/about/mobile-map.png"
                alt="Xapi Global Presence"
                width={1025}
                height={483}
                className="w-full h-auto sm:hidden"
              />
            </div>
            {locations.map((location, index) => (
              <div key={index}>
                <Image
                  src="/media/about/location.png"
                  alt="Xapi Location"
                  width={10}
                  height={10}
                  className={cn(`w-10 h-auto absolute `, location.iconPosition)}
                />
                <div
                  className={cn(
                    `absolute  bg-white sm:px-5 px-2 sm:py-3.5 py-1.5 sm:rounded-md rounded-full hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer`,
                    location.countryPosition
                  )}
                >
                  <div className="relative">
                    <Image
                      src={location.flag}
                      alt={location.country}
                      width={20}
                      height={20}
                      className="flex justify-center mx-auto sm:mb-2"
                    />
                    <p className="text-center text-xs font-helvetica lg:block hidden">
                      {location.country}
                    </p>
                    <PlayArrowIcon
                      className={cn(
                        `sm:text-white text-transparent absolute  w-15 h-15 `,
                        location.trianglePosition
                      )}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        style={{
          background: `url("/media/about/swiper-bg.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-2xl:container 2xl:max-w-[2000px] lg:px-15 px-5 mx-auto  pt-18 lg:pt-28  pb-22 lg:pb-30">
          <div className="text-white pb-13 sm:text-left text-center">
            <h1 className="pb-5 text-3xl sm:text-[44px]  sm:leading-[54px] tracking-[-3px]  font-artegra-sans-alt-medium">
              CSR and ESG Commitments
            </h1>
            <p className="text-lg font-helvetica pb-4 font-semibold">
              Tech-Driven Impact Beyond the Platform
            </p>
            <p className="text-lg font-helvetica">
              At Xapi, we believe in governing not just data, but impact. Our
              CSR and ESG initiatives focus on equity, education, and digital
              access:
            </p>
          </div>
          <AboutSlider data={commitments} />
          <div className="flex items-center justify-between mt-15">
            <div>
              <div className="testimonial-pagination" />
            </div>
            <div className="flex items-center gap-x-2.5">
              <button
                type="button"
                className="p-3 rounded-[10px] bg-white hover:scale-115 duration-200 hover:shadow-2xl cursor-pointer testimonial-pagination-prevEl"
              >
                <MoveLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                className="p-3 rounded-[10px] bg-white hover:scale-120 duration-200 cursor-pointer hover:shadow-2xl testimonial-pagination-nextEl"
              >
                <MoveRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
