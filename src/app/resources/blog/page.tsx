"use client";
import { useState, Suspense } from "react";
import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useSearchParams } from "next/navigation";

import React from "react";
import Image from "next/image";

import { blogCards } from "@/data/blog-details";
import { Clock, ArrowRight } from "lucide-react";

const Page = () => {
  const blogsPerPage = 6;
  const totalPages = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  const startIndex = (currentPage - 1) * blogsPerPage;
  const currentBlogs = blogCards.slice(
    startIndex,
    startIndex + blogsPerPage + 1
  );

  const filteredBlogs = blogCards.filter((blog) =>
    [blog.title, blog.summary, blog.author, blog.category]
      .join(" ")
      .toLowerCase()
      .includes(searchQuery)
  );

  const getVisiblePages = (currentPage: number, totalPages: number) => {
    const pages: (number | "ellipsis")[] = [];

    if (totalPages <= 4) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    if (totalPages === 5) {
      if (currentPage <= 2) {
        return [1, 2, 3, "ellipsis", 5];
      } else {
        return [1, "ellipsis", 3, 4, 5];
      }
    }

    pages.push(1);

    if (currentPage <= 2) {
      pages.push(2, 3, "ellipsis", totalPages);
      return pages;
    }

    if (currentPage >= totalPages - 1) {
      pages.push("ellipsis");
      pages.push(totalPages - 2, totalPages - 1, totalPages);
      return pages;
    }

    pages.push("ellipsis");
    pages.push(currentPage, currentPage + 1);
    pages.push("ellipsis", totalPages);

    return pages;
  };

  return (
    <Suspense fallback={null}>
      <div className="">
        {/* The latest blog section */}
        <section id="blogList">
          <div className="max-2xl:container 2xl:max-w-[2000px] lg:px-15 px-5 mx-auto">
            <div className="lg:h-[50px] h-[65px]"></div>
            {searchQuery && (
              <div>
                <h2 className="text-black text-3xl mb-6">
                  Search Results for "{searchQuery}"
                </h2>
                {filteredBlogs.length === 0 ? (
                  <div className="text-center py-8 md:my-[100px] my-[80px]">
                    <p className="text-xl text-[#787878]">
                      No results found for "{searchQuery}"
                    </p>
                  </div>
                ) : (
                  <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 xl:mt-[49px]  md:my-[100px] my-[80px]">
                    {filteredBlogs.slice(0).map((item, idx) => (
                      <Link href={`blog/${item.slug}`} key={item.slug}>
                        <div className="px-5 pt-[21px] pb-[15px] border-[1px] border-[#523EF51A]  rounded-[20px] hover:scale-102 duration-300">
                          <div className=" relative w-full aspect-[1440/760]">
                            {item.imgUrl ? (
                              <Image
                                width={1440}
                                height={760}
                                src={
                                  item.imgUrl ||
                                  "/media/blog/blog-default-placeholder.jpg"
                                }
                                alt="blog image"
                                className="object-cover rounded-[10px]"
                                onError={(e) => {
                                  e.currentTarget.src =
                                    "/media/blog/blog-default-placeholder.jpg";
                                }}
                              />
                            ) : (
                              <div className="w-full aspect-[1440/760] bg- rounded-[10px]" />
                            )}
                            <div className="absolute flex items-center justify-center bg-white  z-10 left-[10px]  bottom-[10px] w-[88px] h-[23px] rounded-[5px]">
                              <p className=" text-sm font-helvetica-neue-medium font-medium leading-[29px] tracking-[0%] text-secondary ">
                                API Design
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center mt-[18px]">
                            <Clock
                              className="h-[12.5px] w-[12.5px] text-[#787878]"
                              strokeWidth={2}
                            />
                            <span className="font-helvetica-neue-medium text-[#787878] font-medium text-sm leaing-[22px] tracking-[0%] ml-[7px]">
                              {Math.min(item.readTime, 15)} mins read
                            </span>
                          </div>
                          <h2 className="font-helvetica-neue-medium font-medium text-lg leading-[31px] tracking-[0%] text-black min-h-[62px] mt-[13px] line-clamp-2 hover:text-tertiary">
                            {item.title}
                          </h2>
                          <p className="font-helvetica text-[#787878] text-sm leading-[22px] tracking-[0%] font-normal mt-[9px] line-clamp-2">
                            {item.summary}
                          </p>
                          <div className="flex justify-between items-end mt-[27px]">
                            <div className="flex items-center gap-[14px]">
                              <div className="w-[34px] aspect-[1/1] ">
                                <Image
                                  width={136}
                                  height={136}
                                  src={item.profilePic}
                                  alt="blog image"
                                  className="object-cover rounded-full"
                                />
                              </div>
                              <div className="flex flex-col">
                                <p className="text-dark text-sm font-helvetica-neue-medium tracking-[0%] sm:line-clamp-1">
                                  {item.author}
                                </p>
                                <p className="font-helvetica font-normal text-xs text-[#787878] leading-[20px] tracking-[0%]">
                                  {item.date}
                                </p>
                              </div>
                            </div>
                            <div className="group inline-flex items-center cursor-pointer">
                              <p className="text-tertiary text-[13px] font-helvetica-neue-medium leading-[22px] font-medium tracking-[0%] flex gap-[6px] items-center max-xl:text-[10px]">
                                Read More
                                <span className="transform transition-transform duration-200 group-hover:translate-x-2">
                                  <ArrowRight
                                    className="text-tertiary h-5 w-5"
                                    strokeWidth={2}
                                  />
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}

            <div className="flex items-center justify-center w-full">
              <div className="bg-[#E0E0E0] h-[2px] flex-1 mr-5"></div>

              <h2 className="font-artegra-sans-alt-medium xl:text-[44px] lg:text-[38px] sm:text-[28px] text-[25px] text-7xl text-black leading-[50px] tracking-[0%] text-center">
                The Latest
              </h2>
              <div className="bg-[#E0E0E0] h-[2px] flex-1 ml-5"></div>
            </div>
            <Link href={`blog/${blogCards[0].slug}`}>
              <div className="relative w-full aspect-[4960/1940] mt-13 hover:border-tertiary border-2 rounded-[20px]">
                <Image
                  height={1940}
                  width={4960}
                  src={blogCards[0].imgUrl}
                  alt="the latest blog"
                  className=""
                />
              </div>
            </Link>

            <div className="mt-5 flex items-center gap-5">
              <div className="relative w-[40px] aspect-[1/1] ">
                <Image
                  width={160}
                  height={160}
                  src={blogCards[0].profilePic}
                  alt="latest blog profile picture"
                  className="object-cover"
                />
              </div>
              <div className="flex items-start align-top">
                <p className="font-helvetica-neue-medium font-medium text-base leading-[22px] tracking-[0%] text-[#787878]">
                  {blogCards[0].author}&nbsp;&nbsp;
                </p>

                <span className="text-xl text-[#787878] leading-none font-medium">
                  |
                </span>

                <p className="font-helvetica-neue-medium font-medium text-base leading-[22px] tracking-[0%] text-[#787878]">
                  &nbsp;&nbsp;{blogCards[0].date}
                </p>
              </div>
            </div>
            <Link href={`blog/${blogCards[0].slug}`}>
              <h2 className="mt-[13px] xl:text-[32px] lg:text-[px] md:text-[25px] sm:text-2xl text-[21px] lg:leading-[50px] md:leading-[40px] sm:leading-[35px] leading-[33px] tracking-[0%] text-black font-medium font-helvetica-neue-medium  hover:text-tertiary">
                {blogCards[0].title}
              </h2>
            </Link>

            <Link
              href={`blog/${blogCards[0].slug}`}
              className="group inline-flex items-center"
            >
              <p className=" font-helvetica-neue-medium text-tertiary text-xl leading-[22px] font-medium tracking-[0%] mt-[25px] flex gap-2.5 items-center">
                Read More
                <span className="transform transition-transform duration-200 group-hover:translate-x-2">
                  <ArrowRight
                    className="text-tertiary h-6 w-6"
                    strokeWidth={2}
                  />
                </span>
              </p>
            </Link>
          </div>
        </section>
        <section>
          <div className="max-2xl:container 2xl:max-w-[2000px] lg:px-15 px-5 mx-auto ">
            <h2 className="text-black xl:text-[44px] lg:text-[38px] sm:text-[28px] text-[25px] text-7xl font-medium leading-[50px] tracking-[0%] font-artegra-sans-alt-medium xl:mt-[54px] lg:mt-[104px] mt-[58px]">
              Recent Blogs
            </h2>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 xl:mt-[49px]  md:mt-[30px] mt-[25px]">
              {currentBlogs.slice(1).map((item, idx) => (
                <Link href={`blog/${item.slug}`} key={item.slug}>
                  <div className="px-5 pt-[21px] pb-[15px] border-[1px] border-[#523EF51A]  rounded-[20px] hover:scale-101 duration-300">
                    <div className=" relative w-full aspect-[1440/760]">
                      {item.imgUrl ? (
                        <Image
                          width={1440}
                          height={760}
                          src={
                            item.imgUrl || "/media/blog/blog-default-placeholder.jpg"
                          }
                          alt="blog image"
                          className="object-cover rounded-[10px]"
                          onError={(e) => {
                            e.currentTarget.src =
                              "/media/blog/blog-default-placeholder.jpg";
                          }}
                        />
                      ) : (
                        <div className="w-full aspect-[1440/760] bg- rounded-[10px]" />
                      )}
                      <div className="absolute flex items-center justify-center bg-white  z-10 left-[10px]  bottom-[10px] w-[88px] h-[23px] rounded-[5px]">
                        <p className=" text-sm font-helvetica-neue-medium font-medium leading-[29px] tracking-[0%] text-secondary ">
                          API Design
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center mt-[18px]">
                      <Clock
                        className="h-[12.5px] w-[12.5px] text-[#787878]"
                        strokeWidth={2}
                      />
                      <span className="font-helvetica-neue-medium text-[#787878] font-medium text-sm leaing-[22px] tracking-[0%] ml-[7px]">
                        {Math.min(item.readTime, 15)} mins read
                      </span>
                    </div>
                    <h2 className="font-helvetica-neue-medium font-medium text-lg leading-[31px] tracking-[0%] text-black min-h-[62px] mt-[13px] line-clamp-2 hover:text-tertiary">
                      {item.title}
                    </h2>
                    <p className="font-helvetica text-[#787878] text-sm leading-[22px] tracking-[0%] font-normal mt-[9px] line-clamp-2">
                      {item.summary}
                    </p>
                    <div className="flex justify-between items-end mt-[27px]">
                      <div className="flex items-center gap-[14px]">
                        <div className="w-[34px] aspect-[1/1] ">
                          <Image
                            width={136}
                            height={136}
                            src={item.profilePic}
                            alt="blog image"
                            className="object-cover rounded-full"
                          />
                        </div>
                        <div className="flex flex-col sm:max-w-[115px]">
                          <p className="text-dark text-sm font-helvetica-neue-medium tracking-[0%] sm:line-clamp-1 ">
                            {item.author}
                          </p>
                          <p className="font-helvetica font-normal text-xs text-[#787878] leading-[20px] tracking-[0%]">
                            {item.date}
                          </p>
                        </div>
                      </div>
                      <div className="group inline-flex items-center cursor-pointer">
                        <p className="text-tertiary text-[13px] font-helvetica-neue-medium leading-[22px] font-medium tracking-[0%] flex gap-[6px] items-center max-xl:text-[10px]">
                          Read More
                          <span className="transform transition-transform duration-200 group-hover:translate-x-2">
                            <ArrowRight
                              className="text-tertiary h-5 w-5"
                              strokeWidth={2}
                            />
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="flex justify-center mt-[78px]">
              <Pagination className="cursor-pointer">
                <PaginationContent className="lg:gap-2.5 md:gap-2 sm:gap-1 gap-0 cursor-pointer">
                  <PaginationItem className="mr-[11px] cursor-pointer">
                    <button
                      onClick={() =>
                        setCurrentPage(Math.max(1, currentPage - 1))
                      }
                      className="bg-tertiary text-white font-helvetica md:text-lg text-base leading-[32px] tracking-[0%] rounded-[5px] md:py-[5px] md:px-[16px] py-[4px] px-[12px] hover:bg-tertiary/20 hover:text-black transition-all cursor-pointer"
                    >
                      Previous
                    </button>
                  </PaginationItem>
                  {getVisiblePages(currentPage, totalPages).map(
                    (page, index) => (
                      <PaginationItem key={index}>
                        {page === "ellipsis" ? (
                          //   <PaginationEllipsis className="items-end" />
                          <div className="flex gap-1.5 w-fit h-[41px] justify-start items-end ml-[-8px] cursor-pointer">
                            {[1, 2, 3].map((_, idx) => (
                              <div
                                key={idx}
                                className="w-[2px] h-[2px] bg-black cursor-pointer"
                              />
                            ))}
                          </div>
                        ) : (
                          <button
                            className={` md:py-[5px] py-[4px]  rounded-[5px] w-[41px] font-helvetica md:text-lg text-base leading-[32px] tracking-[0%] cursor-pointer ${
                              page === currentPage
                                ? "bg-tertiary text-white "
                                : "text-dark"
                            }`}
                            onClick={() => {
                              if (typeof page === "number")
                                setCurrentPage(page);
                            }}
                          >
                            {page}
                          </button>
                        )}
                      </PaginationItem>
                    )
                  )}
                  <PaginationItem className="ml-[10px]">
                    <button
                      onClick={() =>
                        setCurrentPage(Math.min(totalPages, currentPage + 1))
                      }
                      className="bg-tertiary text-white font-helvetica text-lg leading-[32px] tracking-[0%] rounded-[5px]  md:py-[5px] md:px-[16px] py-[4px] px-[12px] hover:bg-tertiary/20 hover:text-black transition-all"
                    >
                      Next
                    </button>
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </section>
        {/* CTA section */}
        <section>
          <div className="relative ">
            <div className="absolute w-full bg-[#161616] bottom-0 h-1/2 "></div>
            <div className="max-2xl:container 2xl:max-w-[2000px] lg:px-15 px-5 mx-auto xl:pt-29.5 lg:pt-25 pt-20">
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
      </div>
    </Suspense>
  );
};

export default Page;
