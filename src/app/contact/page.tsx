import ContactForm from "@/components/contact-form";
import Image from "next/image";
import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { socialLinks } from "@/data/social";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="relative">
        <section
          className="overflow-hidden "
          style={{
            background: `url("/media/home/contact-hero.svg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-2xl:container 2xl:max-w-[2000px] lg:px-15 px-5 mx-auto py-20">
            <div className=" w-full flex flex-col justify-between ">
              <div></div>
              <div className=" flex items-center justify-between w-full  gap-8 pt-15 sm:pt-20 lg:pt-25 ">
                <div className="grid md:grid-cols-2 w-full">
                  <div>
                    <div className="w-full">
                      <h2 className="text-[64px] font-artegra-sans-alt-medium pb-6 tracking-[-2px]">
                        Contact Us
                      </h2>
                      <ContactForm />
                    </div>
                    <p className="text-black text-2xl font-artegra-sans-alt-semibold text-center sm:text-start mt-9 mb-5 ">
                      Follow us on
                    </p>
                    <div className="flex space-x-4  justify-center sm:justify-start ">
                      {socialLinks.map((item) => (
                        <div className="flex space-x-4 z-20" key={item.name}>
                          <Link
                            href={item.link}
                            className="bg-[#523EF5] hover:bg-gradient-to-tr hover:from-tertiary hover:via-secondary hover:to-primary duration-300 px-3.5 py-3.5 rounded-[7px] cursor-pointer"
                          >
                            {item.icon}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div></div>
                </div>

                <div className="absolute top-0 right-0 h-full w-auto  items-start z-1 justify-end md:block hidden">
                  <Image
                    src="/media/about/hero.svg"
                    alt="Hero Graphic"
                    width={317}
                    height={649}
                    className="object-cover  -z-20 block xl:opacity-60 md:opacity-20 opacity-0 h-full w-auto "
                  />
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 h-20 bg-gradient-to-t from-white to-transparent z-10 "></div>
          </div>
        </section>
      </div>
      <section>
        <div className="relative ">
          <div className="absolute w-full bg-[#161616] bottom-0 h-1/2 "></div>
          <div className="max-2xl:container 2xl:max-w-[2000px] lg:px-15 px-5 mx-auto xl:pt-14">
            <div
              style={{
                background: `url("/media/home/footer-bg.png")`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              className="h-full w-auto sm:px-20 sm:py-16 px-5 py-8 rounded-[40px] flex relative overflow-hidden"
            >
              <div className="flex flex-col justify-between xl:max-w-5xl max-w-3xl lg:items-start items-center">
                <h2 className="text-white sm:text-[40px] text-3xl font-artegra-sans-alt-medium lg:text-left text-center">
                  See How XAPI Makes Governance <br />
                  Effortless
                </h2>
                <p className="text-white text-base font-helvetica leading-[25px] lg:max-w-[630px] max-w-xl mt-5 lg:text-left text-center">
                  Book a demo or start your free trial today and experience
                  governance as a growth enabler, not a bottleneck.
                </p>
                <div className="flex flex-col sm:mt-25 mt-17.5 gap-5 sm:flex-row">
                  <button className="group px-12 py-3.5 bg-white hover:bg-gradient-to-r hover:from-tertiary hover:via-secondary hover:to-primary  font-bold rounded-[5px] cursor-pointer">
                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-tertiary via-secondary to-primary  group-hover:text-white font-helvetica text-lg">
                      Start Free Trial
                    </div>
                  </button>

                  <button className="px-5.5 py-2.5 text-white hover:text-tertiary border-white hover:bg-white border-[1px] rounded-[5px]  leading-[26px] sm:leading-[32px] font-helvetica text-base lg:text-lg font-bold cursor-pointer">
                    Book Demo
                  </button>
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
    </>
  );
}
