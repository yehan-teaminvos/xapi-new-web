"use client";
import Hero from "@/components/hero";
import { caseStudies } from "@/data/case-studies";
import { ArrowRight, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MenuButton } from "@/components/header";
import configs from "@/config/env_config";
import Button from "@/components/button";

const strings = ["Xapi Case Studies"];

export default function Page() {
  return (
    <div>
      <section>
        <Hero
          isFadeIn={true}
          title={strings}
          text="Explore the remarkable journeys of diverse users who leveraged Xapi to streamline operations and revolutionize workflows to achieve exceptional outcomes! Dive into our case studies today!"
        />
      </section>
      <section>
        <div className="max-2xl:container 2xl:max-w-[2000px] lg:px-15 px-5 mx-auto  sm:text-left text-center lg:py-26 py-18">
          <h2 className="font-artegra-sans-alt-medium text-[44px] pb-4">
            Available Xapi Case Studies
          </h2>
          <p className="font-helvetica text-2xl pb-10">
            Education and Startup Case Studies Included
          </p>
          <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-5 h-full">
            {caseStudies.map((caseStudy, index) => (
              <Link
                href={`/resources/case-studies/${caseStudy.slug}`}
                key={index}
              >
                <div className="border border-[#523EF51A] rounded-[20px] p-5 relative hover:scale-101 duration-300 ">
                  <Image
                    src={caseStudy.image}
                    alt="Case Study Blog"
                    width={360}
                    height={190}
                    className="rounded-[10px] mb-4  border-[#8122BA45] w-full"
                  />
                  <Link href={`/resources/case-studies/${caseStudy.slug}`}>
                    <h4 className="font-helvetica-neue-medium text-lg leading-[30px] line-clamp-2 hover:text-tertiary cursor-pointer min-h-[62px]">
                      {caseStudy.title}
                    </h4>
                  </Link>

                  <p className="text-sm font-helvetica leading-[22px] text-[#787878] mt-6 line-clamp-3">
                    {caseStudy.description}
                  </p>

                  <div className="flex justify-end ">
                    <Link href={`/resources/case-studies/${caseStudy.slug}`}>
                      <button className="text-[#523EF5] flex text-[13px] font-helvetica-neue-medium mt-4 justify-end items-end  w-full cursor-pointer">
                        Read More
                        <span className="ml-2 items-center flex">
                          <MoveRight className="w-5 h-5" />
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
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
              <div className="flex flex-col justify-between xl:max-w-5xl max-w-3xl lg:items-start items-center">
                <h2 className="text-3xl sm:text-[44px] font-Satoshi tracking-[-1px] sm:tracking-[-3px] text-white xl:max-w-[677px] lg:max-w-[600px] lg:leading-[60px] sm:leading-[50px] leading-[42px] text-center sm:text-start">
                  Discover the solution that fits your growth journey.
                </h2>
                {/* <p className="text-white text-base font-helvetica leading-[25px] lg:max-w-[630px] max-w-xl mt-5 lg:text-left text-center">
                      The Xapi Community is a vibrant network of Xapi Platform users
                      from around the globe: collaborating, innovating, and advancing
                      together towards a more robust API design and governance
                      ecosystem.
                    </p> */}
                <div className="flex flex-col sm:mt-25 mt-17.5 gap-5 lg:flex-row">
                  {/* <button className="px-12 py-3.5 bg-white  font-bold rounded-[5px] cursor-pointer">
                        <div className="text-transparent bg-clip-text bg-gradient-to-r from-tertiary via-secondary to-primary font-helvetica text-lg">
                          Join Now
                        </div>
                      </button> */}
                  <Button
                    title="Start Free Trial"
                    type="button"
                    className="text-lg py-2"
                    link={configs?.signInUrl ?? "#"}
                  />

                  <button className=" px-5.5 py-2.5 text-white hover:text-tertiary border-white hover:bg-white border-[1px] rounded-[5px]  leading-[26px] sm:leading-[32px] font-helvetica text-base lg:text-lg font-bold cursor-pointer">
                    <Link href="/contact" className="cursor-pointer">
                      Book Demo
                    </Link>
                  </button>

                  <MenuButton
                    className="flex items-center bg-tertiary z-10 hover:bg-white hover:text-tertiary text-center sm:text-lg text-[16px] py-6  sm:leading-0 leading-6  text-white"
                    link="mailto:hello@xapi-io.hub"
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
                  className=" object-cover h-full w-auto max-w-2xl xl:opacity-100 lg:opacity-50  opacity-0 lg:block hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
