import React from "react";
import ReactMarkdown from "react-markdown";
import Markdown from "react-markdown";
import Image from "next/image";
import { termsOfUse } from "@/data/website-term";

function Page() {
  return (
    <>
      <div className="max-2xl:container 2xl:max-w-[1320px] px-5 mx-auto text-left lg:pt-31 lg:pb-8 py-18">
        {/* Title */}
        <h1 className="font-helvetica-neue-medium text-3xl sm:text-4xl lg:text-[40px] leading-snug sm:leading-[45px] lg:leading-[50px] mb-5 mt-10">
          Website Terms of Use
        </h1>

        {/* Intro Paragraph */}
        <p className="font-helvetica text-base sm:text-xl mb-10 leading-relaxed sm:leading-8 lg:leading-[35px]">
          Welcome to Xapi platform! These Terms of Use (“Terms“) govern your use
          of the Xapihub.io website (the “Website“) and the services offered by
          Xapi (“Xapi,“ “we,“ “our,“ or “us“). Please read these Terms carefully
          before using our website. By accessing or using any part of the
          Website, you agree to be bound by these Terms. If you do not agree to
          all the provisions of these Terms, then you may not access the Website
          or use any of our services.
        </p>

        <div className="h-0.5 w-full bg-[#E0E0E0] my-13" />

        {/* Sections */}
        <div className="space-y-10">
          {termsOfUse.sections?.map((section, index) => (
            <div key={index} className="space-y-6">
              {/* Section Title */}
              <h3 className="font-helvetica-neue-medium text-xl sm:text-2xl lg:text-[32px] text-secondary">
                {section.title + "."}
              </h3>

              {/* Paragraphs / Markdown */}
              <div className="font-helvetica text-sm sm:text-base lg:text-xl leading-relaxed sm:leading-7 lg:leading-[35px] space-y-4 sm:space-y-6 lg:space-y-8">
                {section.content?.map((block, i) => (
                  <ReactMarkdown
                    key={i}
                    components={{
                      ul: ({ node, ...props }) => (
                        <ul
                          className="list-disc pl-6 sm:pl-8 md:pl-12"
                          {...props}
                        />
                      ),
                      ol: ({ node, ...props }) => (
                        <ol
                          className="list-decimal pl-6 sm:pl-8 md:pl-12 leading-relaxed sm:leading-7 lg:leading-[35px]"
                          {...props}
                        />
                      ),
                      li: ({ node, ...props }) => (
                        <li className="marker:text-current mb-2" {...props} />
                      ),
                    }}
                  >
                    {block}
                  </ReactMarkdown>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <section>
        <div className="relative ">
          <div className="absolute w-full bg-[#161616] bottom-0 h-1/2 "></div>
          <div className="max-2xl:container 2xl:max-w-[1320px] px-5 mx-auto xl:pt-14">
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

export default Page;
