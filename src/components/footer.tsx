import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/data/social";
import configs from "@/config/env_config";

export default function Footer() {
  return (
    <div>
      {/* <div className="relative">
        <div className="absolute w-full bg-[#161616] bottom-0 h-1/2"></div>
        <div className="container px-4 mx-auto">
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
              <h2 className="text-white sm:text-[44px] text-3xl font-artegra-sans-alt-medium lg:text-left text-center">
                Xapi Community Discord Channel
              </h2>
              <p className="text-white text-base font-helvetica leading-[25px] lg:max-w-[630px] max-w-xl mt-5 lg:text-left text-center">
                The Xapi Community is a vibrant network of Xapi Platform users
                from around the globe: collaborating, innovating, and advancing
                together towards a more robust API design and governance
                ecosystem.
              </p>
              <div className="mt-8">
                <button className="px-12 py-3.5 bg-white  font-bold rounded-[5px] cursor-pointer">
                  <div className="text-transparent bg-clip-text bg-gradient-to-r from-tertiary via-secondary to-primary font-helvetica text-lg">
                    Join Now
                  </div>
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
      </div> */}
      <div className="bg-dark">
        <div className="max-2xl:container 2xl:max-w-[2000px] px-5 lg:px-15 mx-auto pt-21 sm:pt-35">
          <div className="flex xl:flex-row flex-col gap-y-9.5 xl:gap-y-0 justify-between ">
            <div className=" flex-col  ">
              <div className="w-full h-8">
                <Image
                  src="/media/home/logo.png"
                  alt="XAPI logo"
                  width={500}
                  height={500}
                  className=" object-cover h-8 w-auto mx-auto sm:mx-0"
                />
              </div>
              <p className="text-white text-base text-center sm:text-start mx-auto sm:mx-0 font-helvetica leading-[25px] max-w-sm mt-8  mb-9 ">
                The Xapi Community is a vibrant network of Xapi Platform users
                from around the globe: collaborating, innovating, and advancing
                together towards a more robust API design and governance
                ecosystem.
              </p>
              <div className="flex sm:justify-start justify-center gap-5">
                <div className="w-auto h-25">
                  <Image
                    src="/media/footer/ISO-1.png"
                    alt="ISO logo"
                    width={500}
                    height={500}
                    className=" object-cover h-full w-auto mx-auto sm:mx-0"
                  />
                </div>
                {/* <div className="w-auto h-25">
                  <Image
                    src="/media/footer/ISO-2.png"
                    alt="ISO logo"
                    width={500}
                    height={500}
                    className=" object-cover h-full w-auto mx-auto sm:mx-0"
                  />
                </div> */}
              </div>
            </div>
            <div className=" ">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-[135px_185px_185px_210px] 2xl:grid-cols-[148px_197px_197px_232px] gap-y-8 lg:gap-y-0">
                <div>
                  <h4 className="text-white text-center sm:text-start text-basse font-artegra-sans-alt-semibold mb-4.5">
                    Sitemap
                  </h4>
                  <ul className="space-y-3.5 sm:space-y-[19px] text-center sm:text-start  text-base font-helvetica">
                    <div>
                      <Link href={"/about"}>
                        <li className="hover:text-white duration-300 text-[#FFFFFF80]">
                          About
                        </li>
                      </Link>
                    </div>
                    <div>
                      <Link href={"/platform"}>
                        <li className="hover:text-white duration-300 text-[#FFFFFF80]">
                          Platform
                        </li>
                      </Link>
                    </div>
                    <div>
                      <Link href={"/solutions"}>
                        <li className="hover:text-white duration-300 text-[#FFFFFF80]">
                          Solutions
                        </li>
                      </Link>
                    </div>

                    <div>
                      <Link href={"/contact"}>
                        <li className="hover:text-white duration-300 text-[#FFFFFF80]">
                          Contact
                        </li>
                      </Link>
                    </div>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white text-center sm:text-start text-base font-artegra-sans-alt-semibold mb-4.5">
                    Useful Links
                  </h4>
                  <ul className="space-y-3.5 sm:space-y-[19px] text-center sm:text-start text-[#FFFFFF80] text-base font-helvetica">
                    <div>
                      <a
                        href={configs.publicEditorUrl ?? "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <li className="hover:text-white duration-300 text-[#FFFFFF80] cursor-pointer">
                          Public Editor
                        </li>
                      </a>
                    </div>
                    <div>
                      <a
                        href={configs.signInUrl ?? "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <li className="hover:text-white duration-300 text-[#FFFFFF80] cursor-pointer">
                          Sign In
                        </li>
                      </a>
                    </div>
                    <div>
                      <a
                        href={configs.signUpUrl ?? "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <li className="hover:text-white duration-300 text-[#FFFFFF80] cursor-pointer">
                          Start Xapi For Free
                        </li>
                      </a>
                    </div>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white text-center sm:text-start text-base font-artegra-sans-alt-semibold mb-4.5">
                    Legal
                  </h4>
                  <ul className="space-y-3.5 sm:space-y-[19px] text-center sm:text-start text-[#FFFFFF80] text-base font-helvetica">
                    <li>
                      {" "}
                      <Link
                        href="/website-terms"
                        className="hover:text-white duration-300 text-[#FFFFFF80] cursor-pointer"
                      >
                        Website Terms
                      </Link>
                    </li>

                    <li>
                      {" "}
                      <Link
                        href="/privacy-policy"
                        className="hover:text-white duration-300 text-[#FFFFFF80] cursor-pointer"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link
                        href="/end-user-license-agreement"
                        className="hover:text-white duration-300 text-[#FFFFFF80] cursor-pointer"
                      >
                        License Agreement
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white text-center sm:text-start text-base font-artegra-sans-alt-semibold mb-6">
                    Reach Us
                  </h4>
                  <ul className="space-y-3.5 sm:space-y-2.5 text-[#FFFFFF80] text-base font-helvetica mx-auto sm:mx-0 w-fit">
                    <div className="max-w-[208px]">
                      <Link
                        className="cursor-pointer hover:text-white"
                        href="mailto:hello@xapi-io.hub"
                      >
                        <li className="flex items-center space-x-2">
                          <div className="bg-[#FFFFFF1A] px-3 py-3 rounded-[7px] cursor-pointer">
                            <Mail className="w-5 h-5 text-white" />
                          </div>
                          <span className="ml-[12px]">info@xapihub.io</span>
                        </li>
                      </Link>
                    </div>
                    {/* <div className="max-w-[208px]">
                      <Link
                        className="cursor-pointer hover:text-white"
                        href="tel:++94 71 13 24 234"
                      >
                        <li className="flex items-center space-x-2">
                          <div className="bg-[#FFFFFF1A] px-3 py-3 rounded-[7px] cursor-pointer">
                            <Phone className="w-5 h-5 text-white" />
                          </div>
                          <span className="ml-[12px]">(+94)71 13 24 234</span>
                        </li>
                      </Link>
                    </div> */}
                    <div className="max-w-[208px]">
                      <Link
                        className="cursor-pointer hover:text-white"
                        href="map:160 Robinson Road, #14-04 Singapore Business Federation Center , Singapore (068194) "
                      >
                        <li className="flex items-start space-x-2  max-sm:max-w-[200px]">
                          <div className="bg-[#FFFFFF1A] px-3 py-3 rounded-[7px] cursor-pointer">
                            <MapPin className="w-5 h-5 text-white" />
                          </div>
                          <span className="max-w-[186px] ml-[12px]">
                            160 Robinson Road, #14-04 Singapore Business
                            Federation Center , Singapore (068194)
                          </span>
                        </li>
                      </Link>
                    </div>
                    <p className="text-white text-base font-artegra-sans-alt-semibold text-center sm:text-start mt-8 mb-6 ">
                      Follow us on
                    </p>
                    <div className="flex space-x-[10px]  justify-center sm:justify-start">
                      {socialLinks.map((item) => (
                        <div className="flex space-x-2" key={item.name}>
                          <Link
                            href={item.link}
                            className="bg-[#FFFFFF1A] hover:bg-gradient-to-tr hover:from-tertiary hover:via-secondary hover:to-primary  duration-300 px-2.5 py-3 rounded-[7px] cursor-pointer"
                          >
                            {item.icon}
                          </Link>
                        </div>
                      ))}
                    </div>
                    {/* <li className="flex items-center space-x-2">
                      <div className="bg-[#FFFFFF1A] px-3 py-3 rounded-[7px] cursor-pointer">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <span>79498 Princess Corners</span>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="h-[2px] bg-white/30 mt-21 sm:mt-[49px]" />
            <p className="font-helvetica  text-sm text-white/50 text-center pt-3 pb-4">
              Copyright © {new Date().getFullYear()} X-Venture. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
