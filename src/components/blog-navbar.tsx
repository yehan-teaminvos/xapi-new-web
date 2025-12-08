"use client";
import Link from "next/link";
import type React from "react";
import { useEffect, useRef, useState, Suspense } from "react";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { blogCards } from "@/data/blog-details";

const BlogNavBar = () => {
  const [isActiveNav, setIsActiveNav] = useState(0);

  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("search") || "";

  const [localQuery, setLocalQuery] = useState(query);
  const timerRef = useRef<number | null>(null);

  // sync when URL query changes externally (e.g., clicking a nav link)
  useEffect(() => {
    setLocalQuery(query);
  }, [query]);

  // clear timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, []);

  const scheduleNavigate = (value: string) => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    // debounce navigation to avoid pushing every keystroke
    timerRef.current = window.setTimeout(() => {
      // use replace to avoid filling history with each keystroke
      router.replace(`/resources/blog?search=${encodeURIComponent(value)}`);
      timerRef.current = null;
    }, 300) as unknown as number;
  };

  const menuRef = useRef<HTMLDivElement>(null);

  const blogMenu = [
    { title: "All Blogs", link: "/resources/blog" },
    { title: "API Insight", link: "/resources/blog" },
    { title: "Product Release", link: "/resources/blog" },
    { title: "API Design", link: "/resources/blog" },
    { title: "XAPI News", link: "/resources/blog" },
    { title: "Thoughtful Leadership", link: "/resources/blog" },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // const filteredBlogs = blogCards.filter((blog) =>
  //   [blog.title, blog.summary, blog.author]
  //     .join(" ")
  //     .toLowerCase()
  //     .includes(searchQuery.toLowerCase())
  // );

  const menuVariants = {
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        opacity: { duration: 0.08 },
        height: { duration: 0.22 },
      },
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        opacity: { duration: 0.06 },
        height: { duration: 0.18 },
      },
    },
  };

  return (
    <Suspense fallback={null}>
      {" "}
      <div>
        <div
          ref={menuRef}
          className="max-2xl:container 2xl:max-w-[2000px] lg:px-15 px-5 mx-auto z-[39] "
        >
          <div className="flex w-full justify-between lg:pt-[160px] pt-[110px]">
            {isOpen && <div></div>}

            <nav className="hidden lg:flex flex-row items-center justify-center 2xl:gap-10 gap-5">
              {/* <div className=""></div> */}
              {blogMenu.map((item, idx) => {
                const isActiveRoute = pathname === item.link;
                const hrefValue =
                  item.title === "All Blogs"
                    ? item.link
                    : `/resources/blog?search=${encodeURIComponent(
                        item.title
                      )}`;

                return (
                  <Link
                    key={item.title}
                    href={hrefValue}
                    className="relative "
                    onClick={() => setIsActiveNav(idx)}
                  >
                    {isActiveNav === idx && (
                      <motion.div
                        layoutId="activeTab"
                        className="rounded-[5px] absolute inset-0 bg-tertiary text-white z-0 pointer-events-none"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 25,
                        }}
                      />
                    )}
                    <div
                      className={cn(
                        "xl:text-base text-[15px] w-full tracking-[0%] lg:leading-[20px] leading-[10px] text-dark font-helvetica cursor-pointer relative z-10 duration-300 xl:px- lg:p-4 px-4 py-0 ",
                        {
                          "text-white text-center": isActiveNav === idx,
                        }
                      )}
                    >
                      {item.title}
                    </div>
                  </Link>
                );
              })}
            </nav>
            <div className="lg:hidden flex items-center">
              <button type="button" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                  <X className="w-6 h-6 mr-[15px] text-black cursor-pointer" />
                ) : (
                  <Menu className="ml-4 w-6 h-6 mr-[15px] text-black cursor-pointer" />
                )}
              </button>
            </div>
            <div
              className={cn(
                "flex xl:h-[63px] h-[54px] xl:w-[315px] md:w-[500px] sm:w-[400px] w-[250px] lg:w-[170px] bg-[#F2F2F2] rounded-[10px] items-center xl:gap-[29px] gap-[10px] xl:p-5 p-4 ml-10",
                isOpen ? "max-lg:hidden" : "flex"
              )}
            >
              <Search className="h-[24px] xl:w-[24px] w-[18px]" />
              <input
                className=" xl:placeholder:text-xl max-xl:max-w-[100px] md:placeholder:text-lg placeholder:text-base  placeholder:text-black placeholder:leading-[32px] placeholder:tracking-[0%] placeholder:font-helvetica outline-none"
                placeholder="Search...."
                value={localQuery}
                onChange={(e) => {
                  const v = e.target.value;
                  setLocalQuery(v);
                  scheduleNavigate(v);
                }}
              />
            </div>
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                className="lg:hidden overflow-hidden mt-4"
              >
                <div className="flex flex-col gap-2 text-black px-4">
                  {blogMenu.map((item, idx) => {
                    const hrefValue =
                      item.title === "All Blogs"
                        ? item.link
                        : `/resources/blog?search=${encodeURIComponent(
                            item.title
                          )}`;

                    return (
                      <Link
                        key={idx}
                        href={hrefValue}
                        className=" duration-200"
                        onClick={() => {
                          setIsActiveNav(idx);
                          setIsOpen(false);
                        }}
                      >
                        <div
                          className={cn(
                            "xl:text-base text-[15px] tracking-[0%] xl:leading-[32px] leading-[20px] text-dark font-helvetica cursor-pointer relative z-10 duration-300 xl:px-5 p-4  ",
                            { "text-white ": isActiveNav === idx }
                          )}
                        >
                          {isActiveNav === idx && (
                            <motion.div
                              layoutId="activeHamTab"
                              className="rounded-[5px] absolute inset-0 bg-tertiary text-white -z-1 pointer-events-none"
                              transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 25,
                              }}
                            />
                          )}
                          {item.title}
                        </div>
                      </Link>
                    );
                  })}
                  <div className="flex xl:h-[63px] h-[54px] xl:w-[315px] sm:w-full w-[300px] lg:w-[170px] bg-[#F2F2F2] rounded-[10px] items-center xl:gap-[29px] gap-[10px] xl:p-5 p-4">
                    <Search className="h-[24px] xl:w-[24px] w-[18px]" />
                    <input
                      className=" xl:placeholder:text-xl max-xl:max-w-[100px] placeholder:text-lg placeholder:text-black placeholder:leading-[32px] placeholder:tracking-[0%] placeholder:font-helvetica"
                      placeholder="Search...."
                      value={localQuery}
                      onChange={(e) => {
                        const v = e.target.value;
                        setLocalQuery(v);
                        scheduleNavigate(v);
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Suspense>
  );
};

export default BlogNavBar;
