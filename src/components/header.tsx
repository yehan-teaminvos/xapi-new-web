"use client";
import { AnimatePresence, motion } from "framer-motion";
import {
  BookText,
  ChevronDown,
  FileInput,
  FileOutput,
  Menu,
  NotepadText,
  SquarePen,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import configs from "@/config/env_config";

type MenuButtonProps = {
  link: string;
  children: React.ReactNode;
  className?: string;
  target?: "_blank" | "_parent" | "_self" | "_top";
};

export default function Header() {
  const menu = [
    { title: "About", link: "/about" },
    { title: "Platform", link: "/platform" },
    { title: "Solutions", link: "/solutions" },
    { title: "Resources", link: "" },
    { title: "Contact", link: "/contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const pathname = usePathname();
  const resourcesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        resourcesRef.current &&
        !resourcesRef.current.contains(e.target as Node)
      ) {
        setIsSubMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  return (
    <div className="py-7 fixed w-full  z-[49]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            onClick={() => setIsOpen(false)}
            className="h-screen fixed top-0 backdrop-blur-xs bg-black/10 w-full -z-10 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
      <div className="max-2xl:container 2xl:max-w-[2000px] mx-auto lg:px-15 px-5">
        <div className=" bg-gradient-to-r from-tertiary via-secondary to-primary p-4 rounded-[10px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-10">
              <Link href="/">
                <Image
                  alt="X-API Logo"
                  src="/media/home/main-logo.svg"
                  width={104}
                  height={33}
                  priority={true}
                  className="w-20 xl:w-26"
                />
              </Link>
              <nav className="hidden lg:flex items-center gap-x-4">
                {menu.map((item) => {
                  const isActiveRoute = pathname === item.link;

                  return (
                    <div key={item.title} className="relative group ">
                      {item.title === "Resources" ? (
                        <div
                          className={cn(
                            `flex items-center gap-1 group xl:text-[18px] text-base tracking-[-1px] text-white font-artegra-sans-alt-medium cursor-pointer border-transparent py-0.5 px-2 duration-200`
                          )}
                        >
                          <div className="group">
                            <div
                              onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                              className="flex items-center "
                            >
                              <div className="">{item.title}</div>
                              <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-300 " />
                            </div>

                            <div
                              ref={resourcesRef}
                              className={` opacity-0 invisible absolute  w-52 h-auto bg-secondary rounded-[10px] top-12 left-0 mt-2 transition-opacity duration-300  ${
                                isSubMenuOpen
                                  ? "opacity-100 visible"
                                  : "opacity-0 invisible"
                              }`}
                            >
                              <div className="flex flex-col ">
                                <Link
                                  href="/resources/blog"
                                  className="text-white p-3 flex items-center gap-4 rounded-t-[10px] hover:bg-gradient-to-r hover:from-primary hover:to-tertiary "
                                  onClick={() => setIsSubMenuOpen(false)}
                                >
                                  <SquarePen className="w-5 h-5" />
                                  <span> Blog</span>
                                </Link>

                                <Link
                                  href="/resources/case-studies"
                                  className="text-white p-3  flex items-center gap-4 rounded-b-[10px] hover:bg-gradient-to-r hover:from-primary hover:to-tertiary"
                                  onClick={() => setIsSubMenuOpen(false)}
                                >
                                  <BookText className="w-5 h-5" />
                                  <span> Case Studies</span>
                                </Link>
                                <Link
                                  href="/resources/whitepapers"
                                  className="text-white p-3  flex items-center gap-4 rounded-b-[10px] hover:bg-gradient-to-r hover:from-primary hover:to-tertiary"
                                  onClick={() => setIsSubMenuOpen(false)}
                                >
                                  <NotepadText className="w-5 h-5" />
                                  <span>Whitepapers</span>
                                </Link>
                                <Link
                                  href={process.env.NEXT_PUBLIC_DOCS_URL ?? "#"}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-white p-3 flex items-center gap-4 rounded-b-[10px] hover:bg-gradient-to-r hover:from-primary hover:to-tertiary"
                                  onClick={() => setIsSubMenuOpen(false)}
                                >
                                  <FileOutput className="w-5 h-5" />
                                  <span>Documentation</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={item.link}
                          className={cn(
                            `flex items-center gap-1 group xl:text-[18px] text-base tracking-[-1px] text-white font-artegra-sans-alt-medium cursor-pointer border-transparent py-0.5 px-2 duration-200`
                          )}
                        >
                          <div className="group">{item.title}</div>
                        </Link>
                      )}
                      <div
                        className={cn(
                          "h-[0.5px] w-full bg-white transition-transform duration-300",
                          isActiveRoute
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100 origin-center",
                          item.title === "Resources"
                            ? "h-0 bg-white scale-x-0 group-hover:scale-x-0 transition-transform duration-300"
                            : null
                        )}
                      />
                    </div>
                  );
                })}
              </nav>
            </div>

            <div className="hidden lg:flex items-center gap-x-4">
              <Link
                className="group px-2"
                href={configs?.signInUrl ?? "#"}
              >
                <div className="xl:text-[18px] text-base text-white font-artegra-sans-alt-medium cursor-pointer py-0.5  duration-200">
                  Sign In
                  <div className="h-[1px] w-full bg-white scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100" />
                </div>
              </Link>

              <MenuButton
                link={configs.signUpUrl ?? "#"}
                target="_blank"
                className="px-0.5 py-0.5"
              >
                <div className="animated-gradient-border hover:scale-[103%] duration-300">
                  <div className="animated-gradient-border-inner text-secondary ">
                    Start Xapi For Free
                  </div>
                </div>
              </MenuButton>
            </div>

            <div className="lg:hidden flex items-center">
              <button type="button" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                  <X className="w-6 h-6 text-white cursor-pointer" />
                ) : (
                  <Menu className="w-6 h-6 text-white cursor-pointer" />
                )}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="lg:hidden overflow-hidden mt-4"
              >
                <div className="flex flex-col gap-5 text-white ">
                  {menu.map((item) =>
                    item.title === "Resources" ? (
                      <div key={item.title} className="w-full ">
                        <Accordion type="single" collapsible>
                          <AccordionItem value="resources">
                            <AccordionTrigger
                              className="w-full text-left text-white cursor-pointer justify-start"
                              iconClass="text-white"
                            >
                              {item.title}
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="flex flex-col">
                                <Link
                                  href="/resources/blog"
                                  className="text-white py-2 px-3 rounded"
                                  onClick={() => setIsOpen(false)}
                                >
                                  Blog
                                </Link>
                                <Link
                                  href="/resources/case-studies"
                                  className="text-white py-2 px-3 rounded"
                                  onClick={() => setIsOpen(false)}
                                >
                                  Case Studies
                                </Link>
                                <Link
                                  href="/resources/whitepapers"
                                  className="text-white py-2 px-3 rounded"
                                  onClick={() => setIsOpen(false)}
                                >
                                  Whitepapers
                                </Link>
                                <Link
                                  href={process.env.NEXT_PUBLIC_DOCS_URL ?? "#"}
                                  className="text-white py-2 px-3 rounded"
                                  onClick={() => setIsOpen(false)}
                                >
                                  Documentation
                                </Link>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    ) : (
                      <Link
                        key={item.title}
                        href={item.link}
                        className="rounded-md duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    )
                  )}
                  <MenuButton
                    className="bg-white flex justify-between items-center gap-x-4 text-dark"
                    link={configs?.signInUrl ?? "#"}
                  >
                    <div>Sign In</div>
                  </MenuButton>
                  <MenuButton
                    link={configs.signUpUrl ?? "#"}
                    // className="bg-white text-secondary hover:bg-white duration-300 hover:text-tertiary"
                    className="bg-linear-to-r from-primary via-secondary to-tertiary px-1 py-1 rounded-[5px]"
                  >
                    <div className="px-3 py-1 bg-white  text-secondary hover:bg-tertiary duration-300 hover:text-white rounded-[5px]">
                      Start Xapi For Free
                    </div>
                  </MenuButton>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export const MenuButton = ({
  children,
  link = "/",
  className,
  target,
}: MenuButtonProps) => {
  return (
    <Link
      target={target}
      className={cn(
        ` px-4 py-2 font-helvetica-bold   rounded-[5px] xl:text-[18px] text-base`,
        className
      )}
      href={link}
    >
      {children}
    </Link>
  );
};
