"use client";
import Hero from "@/components/hero";

import { ArrowRight, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MenuButton } from "@/components/header";
import Button from "@/components/button";
import { motion } from "framer-motion";
import { documentation } from "@/data/documentation";

const strings = ["Xapi Whitepapers"];

export default function Page() {
  const [modalOpen, setModalOpen] = useState(0);
  const [selectedDoc, setSelectedDoc] = useState<{
    title: string;
    description?: string;
  } | null>(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [formError, setFormError] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidForm = fullName.trim().length > 1 && emailRegex.test(email);

  const handleDownload = async () => {
    setFormError("");
    if (!isValidForm) {
      setFormError("Please enter a valid full name and email.");
      return;
    }

    try {
      const href = documentation[modalOpen - 1]?.file;

      // fetch the file as blob to better handle download permissions
      const res = await fetch(href);
      if (!res.ok) {
        console.error("Failed to fetch", href);
        return;
      }
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = href.split("/").pop() || "document.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);

      // Close modal and reset form
      setModalOpen(0);
      setFullName("");
      setEmail("");
    } catch (err) {
      console.error(err);
      setFormError("An error occurred while downloading. Please try again.");
    }
  };
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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.2 }}
          className="max-2xl:container 2xl:max-w-[2000px] lg:px-15 px-5 mx-auto pt-17 xl:pt-28 lg:pb-10"
        >
          {/* Title + Description */}
          <h2 className="text-3xl sm:text-[44px] leading-[48px] sm:leading-[54px] font-artegra-sans-alt-medium tracking-[-3px] pb-2">
            Xapi Whitepapers
          </h2>

          <p className="text-base sm:text-lg text-dark font-helvetica pt-3 pb-10">
            Education and Startup Case Studies Included
          </p>

          {/* Cards */}
          <div className="grid h-full md:grid-cols-2 cols-1 gap-15 mb-8">
            {documentation.map((item, index) => (
              <div
                key={index}
                className="group bg-white  overflow-hidden  cursor-pointer relative"
              >
                <div className="relative   gap-300  w-fit h-fit">
                  <div className="xl:h-96 w-fit overflow-hidden rounded-lg">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={900}
                      height={700}
                      className="object-cover transition-transform duration-300 group-hover:scale-97 rounded-lg"
                    />
                  </div>

                  {/* Hover Download Overlay */}
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                      setSelectedDoc({
                        title: item.title,
                        description: item.description,
                      });
                      setModalOpen(index + 1);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setSelectedDoc({
                          title: item.title,
                          description: item.description,
                        });
                        setModalOpen(index + 1);
                      }
                    }}
                    className="absolute inset-0 rounded-lg bg-black/40 flex items-center justify-center 
                         opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                  >
                    <div className="bg-white p-3 rounded-full shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-dark">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Modal for download access */}
          {modalOpen !== 0 && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <div
                className="absolute inset-0 bg-black/50"
                onClick={() => setModalOpen(0)}
                aria-hidden
              />

              <div className="bg-white rounded-lg shadow-xl max-w-lg w-full mx-4 z-10 p-6 relative">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl  font-artegra-sans-alt-medium">
                      Access the Documentation
                    </h3>
                    <p className="text-sm text-dark mt-2">
                      To proceed with your download, please provide your name
                      and email address. This information is required to grant
                      access to the document.
                    </p>
                  </div>
                  <button
                    onClick={() => setModalOpen(0)}
                    aria-label="Close dialog"
                    className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center transition hover:opacity-80"
                  >
                    <img
                      src="/media/popup-close.svg"
                      alt="Close"
                      className="w-[20px] h-[20px] cursor-pointer"
                    />
                  </button>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleDownload();
                  }}
                  className="mt-4"
                >
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full  px-3 py-2 rounded mb-3 bg-gray-200 appearance-none text-[12px]"
                    required
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full  px-3 py-2 rounded mb-2 bg-gray-200 appearance-none text-[12px]"
                    required
                  />
                  <p className="text-xs text-gray-500 mb-4">
                    Your details will be used solely to provide access to this
                    document.
                  </p>
                  {formError && (
                    <div className="text-sm text-red-600 mb-3">{formError}</div>
                  )}

                  <div className="flex items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => setModalOpen(0)}
                      className="px-4 py-2 rounded border cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className={`px-4 py-2 rounded cursor-pointer text-white ${
                        isValidForm
                          ? "bg-gradient-to-r from-primary to-tertiary"
                          : "bg-gray-300"
                      }`}
                    >
                      Download Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </motion.div>
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
                  />
                  <button className="px-5.5 py-2 text-white hover:text-tertiary border-white hover:bg-white border-[1px] rounded-[5px]  leading-[26px] sm:leading-[32px] font-helvetica text-base lg:text-lg font-bold cursor-pointer">
                    Book Demo
                  </button>
                  <MenuButton
                    className="flex items-center z-10 bg-tertiary hover:bg-white hover:text-tertiary text-center text-lg  sm:leading-0 leading-6 sm:py-6 py-3 text-white"
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
