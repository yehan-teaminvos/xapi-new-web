"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";

interface TitleListProps {
  titles: string[];
  activeIndex: number;
  setActiveIndex: (idx: number) => void;
}

function BlogMenu({ titles, activeIndex, setActiveIndex }: TitleListProps) {
  const [activeTitle, setActiveTitle] = useState(0);

  useEffect(() => {
    setActiveTitle(activeIndex);
  }, [activeIndex]);

  return (
    <div className="w-full bg-[#8122BA1F] sm:px-7.5 px-3 py-[21px] border-[#8122BA] border-[1px] rounded-[10px] mt-2.5 max-h-[calc(100vh-160px)] overflow-y-auto pr-2">
      <ul className="space-y-[22px]">
        {titles.map((title, idx) => {
          const sectionId = `section-${idx}`;
          return (
            <li
              key={idx}
              className="font-helvetica xl:text-lg lg:text-[15px] max-sm:text-[11px] lg:leading-[26px] text-black xl:leading-[30px] tracking-[0%] hover:text-[#8122BA] cursor-pointer"
            >
              <a
                href={`#${sectionId}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveIndex(idx);
                  const el = document.getElementById(sectionId);
                  if (el) {
                    // compute element center and scroll so the section is centered in viewport
                    const rect = el.getBoundingClientRect();
                    const elCenterY =
                      rect.top + window.scrollY + rect.height / 2;
                    const targetScroll = Math.max(
                      0,
                      elCenterY - window.innerHeight / 2
                    );
                    window.scrollTo({ top: targetScroll, behavior: "smooth" });
                  }
                }}
                className="block"
              >
                <div className="flex relative">
                  {activeIndex === idx && (
                    <motion.div
                      layoutId="activeTitle"
                      className="absolute sm:left-[-30px] left-[-14px] h-full w-[7px] max-sm:w-[5px] bg-[#8122BA] "
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                    />
                  )}

                  {title}
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BlogMenu;
