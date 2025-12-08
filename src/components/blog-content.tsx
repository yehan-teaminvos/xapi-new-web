"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { MoveRight } from "lucide-react";
import { BlogPost } from "@/data/blog-details";
import { cn } from "@/lib/utils";
import BlogMenu from "@/components/blog-menu";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { blogDesignSocials } from "@/data/social";
import Link from "next/link";
interface BlogContentProps {
  blogItem: BlogPost;
}

function BlogContent({ blogItem }: BlogContentProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const titles =
    blogItem?.section
      ?.map((s) => s.secTitle)
      .filter((title): title is string => !!title) || [];

  const sectionRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [titles]);

  return (
    <div>
      <div className="relative flex mt-[46px] justify-between">
        <div className=" 2xl:w-[1300px]  xl:w-[900px] lg:w-[650px] md:w-[495px] sm:w-[400px] ">
          {blogItem.summary.map((item, idx) => (
            <div
              key={idx}
              className={cn(
                "font-helvetica-neue-roman xl:leading-[35px] tracking-[0%] xl:text-xl lg:text-base max-sm:text-sm lg:leading-[30px] text-black max-2xl:max-w-[885px] max-w-[1200px]",
                idx !== 0 && "mt-[20px]"
              )}
            >
              <ReactMarkdown>{item}</ReactMarkdown>
            </div>
          ))}

          {blogItem?.section?.map((section, index) => {
            const sectionId = `section-${index}`;

            return (
              <div
                key={index}
                data-index={index}
                ref={(el) => {
                  sectionRefs.current[index] = el!;
                }}
                className="scroll-mt-[100px]"
              >
                <h2
                  className="font-helvetica-neue-medium font-medium lg:leading-[30px] tracking-[0%] xl:text-[32px] lg:text-[30px] text-[28px] max-sm:text-xl text-secondary mt-[34px] max-sm:mt-[25px]"
                  id={`${sectionId}`}
                >
                  {section.secTitle}
                </h2>
                {section.secDesc && (
                  <div className="font-helvetica-neue-roman tracking-[0%] xl:text-xl lg:text-base max-sm:text-sm lg:leading-[30px] text-black max-2xl:max-w-[875px] max-w-[1250px] xl:leading-[35px] mt-[35px]">
                    <ReactMarkdown
                      skipHtml={false}
                      components={{
                        a: ({ node, ...props }) => (
                          <a
                            {...props}
                            className="text-tertiary hover:underline font-semibold"
                            target="_blank"
                            rel="noopener noreferrer"
                          />
                        ),
                        p: ({ node, ...props }) => (
                          <p
                            className="leading-relaxed text-black"
                            {...props}
                          />
                        ),
                        li: ({ ...props }) => (
                          <li
                            className="ml-[20px] list-disc leading-relaxed"
                            {...props}
                          />
                        ),
                      }}
                    >
                      {section.secDesc}
                    </ReactMarkdown>
                  </div>
                )}
                {section.secImgUrl && (
                  <div
                    className={cn(
                      "relative md:w-3/4 w-full mt-[30px]",
                      section.secImgClasses
                    )}
                  >
                    <Image
                      fill
                      src={section.secImgUrl}
                      alt="list Image"
                      className="object-cover"
                    />
                  </div>
                )}
                {section.secDesc1 && (
                  <div className="font-helvetica-neue-roman tracking-[0%] xl:text-xl lg:text-base max-sm:text-sm lg:leading-[30px] text-black max-2xl:max-w-[875px] max-w-[1250px] xl:leading-[35px] mt-[35px]">
                    <ReactMarkdown
                      skipHtml={false}
                      components={{
                        a: ({ node, ...props }) => (
                          <a
                            {...props}
                            className="text-tertiary hover:underline font-semibold"
                            target="_blank"
                            rel="noopener noreferrer"
                          />
                        ),
                        p: ({ node, ...props }) => (
                          <p
                            className="leading-relaxed text-black"
                            {...props}
                          />
                        ),
                        li: ({ ...props }) => (
                          <li
                            className="ml-[20px] list-disc leading-relaxed"
                            {...props}
                          />
                        ),
                      }}
                    >
                      {section.secDesc1}
                    </ReactMarkdown>
                  </div>
                )}
                {section.secDesc2 && (
                  <div className="font-helvetica-neue-roman tracking-[0%] xl:text-xl lg:text-base max-sm:text-sm lg:leading-[30px] text-black max-2xl:max-w-[875px] max-w-[1250px] xl:leading-[35px] mt-[35px]">
                    <ReactMarkdown
                      skipHtml={false}
                      components={{
                        a: ({ node, ...props }) => (
                          <a
                            {...props}
                            className="text-tertiary hover:underline font-semibold"
                            target="_blank"
                            rel="noopener noreferrer"
                          />
                        ),
                        p: ({ node, ...props }) => (
                          <p
                            className="leading-relaxed text-black"
                            {...props}
                          />
                        ),
                        li: ({ ...props }) => (
                          <li
                            className="ml-[20px] list-disc leading-relaxed"
                            {...props}
                          />
                        ),
                      }}
                    >
                      {section.secDesc2}
                    </ReactMarkdown>
                  </div>
                )}
                {(section.secUnOrderedList || section.secOrderedList) &&
                  (() => {
                    const isOrdered = !!section.secOrderedList;
                    const list = isOrdered
                      ? section.secOrderedList
                      : section.secUnOrderedList;
                    const listClass = isOrdered ? "list-decimal" : "list-disc";

                    const ListTag = isOrdered ? "ol" : "ul";

                    return (
                      <ListTag
                        className={`${listClass} list-outside sm:marker:mr-6 marker:mr-4 text-black sm:ml-10 ml-3 mt-[18px]`}
                        type={isOrdered ? "1" : undefined}
                      >
                        {list?.map((point, idx) => (
                          <li
                            key={idx}
                            className={cn(
                              "font-helvetica-neue-roman xl:leading-[35px] tracking-[0%] xl:text-xl lg:text-base max-sm:text-sm lg:leading-[30px] text-black max-2xl:max-w-[885px] max-w-[1200px]",
                              (point.listDesc || point.listPositionDesc) &&
                                "font-bold"
                            )}
                          >
                            {point.title}
                            {point.listPositionDesc && (
                              <div className="xl:my-[25px] lg:my-[20px] my-[15px] font-normal">
                                <ReactMarkdown
                                  components={{
                                    a: ({ node, ...props }) => (
                                      <a
                                        {...props}
                                        className="text-tertiary hover:underline font-semibold"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      />
                                    ),
                                    p: ({ node, ...props }) => (
                                      <p
                                        className="leading-relaxed text-black"
                                        {...props}
                                      />
                                    ),
                                    li: ({ ...props }) => (
                                      <li
                                        className="ml-[20px] list-disc leading-relaxed"
                                        {...props}
                                      />
                                    ),
                                  }}
                                  skipHtml={false}
                                >
                                  {point.listPositionDesc}
                                </ReactMarkdown>
                              </div>
                            )}

                            {point.listImgUrl && (
                              <div
                                className={cn(
                                  "relative md:w-3/4 max-w-full mt-[30px]",
                                  point.listImgClasses
                                )}
                              >
                                <Image
                                  fill
                                  src={point.listImgUrl}
                                  alt="list Image"
                                  className="object-cover"
                                />
                              </div>
                            )}

                            {point.listDesc?.map((item, idx) => (
                              <div
                                key={idx}
                                className="xl:my-[25px] lg:my-[15px] my-[10px] font-normal"
                              >
                                <ReactMarkdown
                                  remarkPlugins={[remarkGfm]}
                                  skipHtml={false}
                                  components={{
                                    table: ({ ...props }) => (
                                      <div className="overflow-x-auto mt-4">
                                        <table
                                          className="border border-gray-300 w-full text-left mt-4 "
                                          {...props}
                                        />
                                      </div>
                                    ),
                                    th: ({ ...props }) => (
                                      <th
                                        className="border border-gray-300 px-2 py-1 bg-gray-100"
                                        {...props}
                                      />
                                    ),
                                    td: ({ ...props }) => (
                                      <td
                                        className="border border-gray-300 px-2 py-1"
                                        {...props}
                                      />
                                    ),
                                    a: ({ node, ...props }) => (
                                      <a
                                        {...props}
                                        className="text-tertiary hover:underline font-semibold"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      />
                                    ),
                                    p: ({ node, ...props }) => (
                                      <p
                                        className="leading-relaxed text-black"
                                        {...props}
                                      />
                                    ),
                                    li: ({ ...props }) => (
                                      <div className="overflow-x-auto mt-4">
                                        <li
                                          className="ml-[20px] list-disc leading-relaxed"
                                          {...props}
                                        />
                                      </div>
                                    ),
                                  }}
                                >
                                  {item.trim()}
                                </ReactMarkdown>
                              </div>
                            ))}

                            {point.listSec?.map((subSection, subIdx) => {
                              const isOrdered = !!subSection.secOrderedList;
                              const list = isOrdered
                                ? subSection.secOrderedList
                                : subSection.secUnOrderedList;
                              const ListTag = isOrdered ? "ol" : "ul";
                              const listClass = isOrdered
                                ? "list-decimal"
                                : "list-disc";

                              return (
                                <div key={subIdx} className="my-[25px] ml-6">
                                  {subSection.secTitle && (
                                    <h3 className="font-helvetica-neue-medium text-[22px] text-secondary mt-[20px] mb-[15px]">
                                      {subSection.secTitle}
                                    </h3>
                                  )}
                                  {subSection.secDesc && (
                                    <div className="font-helvetica-neue-roman xl:leading-[35px] tracking-[0%] xl:text-xl lg:text-base max-sm:text-sm lg:leading-[30px] text-black max-2xl:max-w-[885px] max-w-[1200px] mt-[37px] font-normal">
                                      <ReactMarkdown
                                        skipHtml={false}
                                        components={{
                                          a: ({ node, ...props }) => (
                                            <a
                                              {...props}
                                              className="text-tertiary hover:underline font-semibold"
                                              target="_blank"
                                              rel="noopener noreferrer"
                                            />
                                          ),
                                          p: ({ node, ...props }) => (
                                            <p
                                              className="leading-relaxed text-black"
                                              {...props}
                                            />
                                          ),
                                        }}
                                      >
                                        {subSection.secDesc}
                                      </ReactMarkdown>
                                    </div>
                                  )}

                                  {list && (
                                    <ListTag
                                      className={`${listClass} list-outside marker:mr-6 ml-6`}
                                      type={isOrdered ? "1" : undefined}
                                    >
                                      {list.map((item, i) => (
                                        <li
                                          key={i}
                                          className={cn(
                                            "font-helvetica-neue-roman xl:leading-[30px] tracking-[0%] xl:text-lg lg:text-base text-black mt-[10px]",
                                            item.listDesc
                                              ? "font-normal"
                                              : "font-bold"
                                          )}
                                        >
                                          <ReactMarkdown
                                            components={{
                                              li: ({ ...props }) => (
                                                <li
                                                  className="ml-[20px] list-disc leading-relaxed font-normal"
                                                  {...props}
                                                />
                                              ),
                                            }}
                                          >
                                            {item.title}
                                          </ReactMarkdown>
                                          {item.listDesc?.map((desc, idx) => (
                                            <div
                                              key={idx}
                                              className="lg:my-[10px] my-[7px] font-normal"
                                            >
                                              <ReactMarkdown
                                                components={{
                                                  li: ({ ...props }) => (
                                                    <li
                                                      className="ml-[20px] list-disc leading-relaxed font-normal"
                                                      {...props}
                                                    />
                                                  ),
                                                }}
                                              >
                                                {desc}
                                              </ReactMarkdown>
                                            </div>
                                          ))}
                                        </li>
                                      ))}
                                    </ListTag>
                                  )}

                                  {subSection.secImgUrl && (
                                    <div
                                      className={cn(
                                        "relative md:w-3/4 w-full mt-[25px]",
                                        subSection.secImgClasses
                                      )}
                                    >
                                      <Image
                                        fill
                                        src={subSection.secImgUrl}
                                        alt="nested section image"
                                        className="object-cover rounded-[10px]"
                                      />
                                    </div>
                                  )}

                                  {subSection.secImgUrl1 && (
                                    <div
                                      className={cn(
                                        "relative md:w-3/4 w-full mt-[25px]",
                                        subSection.secImg1Classes
                                      )}
                                    >
                                      <Image
                                        fill
                                        src={subSection.secImgUrl1}
                                        alt="nested section image 2"
                                        className="object-cover rounded-[10px]"
                                      />
                                    </div>
                                  )}
                                  {subSection.secEndDesc && (
                                    <div className="font-helvetica-neue-roman xl:leading-[35px] tracking-[0%] xl:text-xl lg:text-base max-sm:text-sm lg:leading-[30px] text-black max-2xl:max-w-[885px] max-w-[1200px] mt-[37px] font-normal">
                                      <ReactMarkdown
                                        skipHtml={false}
                                        components={{
                                          a: ({ node, ...props }) => (
                                            <a
                                              {...props}
                                              className="text-tertiary hover:underline font-semibold"
                                              target="_blank"
                                              rel="noopener noreferrer"
                                            />
                                          ),
                                          p: ({ node, ...props }) => (
                                            <p
                                              className="leading-relaxed text-black"
                                              {...props}
                                            />
                                          ),
                                        }}
                                      >
                                        {subSection.secEndDesc}
                                      </ReactMarkdown>
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </li>
                        ))}
                      </ListTag>
                    );
                  })()}
                {section.secEndDesc && (
                  <div className="font-helvetica-neue-roman xl:leading-[35px] tracking-[0%] xl:text-xl lg:text-base max-sm:text-sm lg:leading-[30px] text-black max-2xl:max-w-[885px] max-w-[1200px] mt-[37px] ">
                    <ReactMarkdown
                      skipHtml={false}
                      components={{
                        a: ({ node, ...props }) => (
                          <a
                            {...props}
                            className="text-tertiary hover:underline font-semibold"
                            target="_blank"
                            rel="noopener noreferrer"
                          />
                        ),
                        p: ({ node, ...props }) => (
                          <p
                            className="leading-relaxed text-black"
                            {...props}
                          />
                        ),
                      }}
                    >
                      {section.secEndDesc}
                    </ReactMarkdown>
                  </div>
                )}
                {section.secButtonLabel && (
                  <a href={section.secButtonLink}>
                    <button className="flex text-white text-lg max-sm:text-base font-helvetica-neue-roman leading-[32px] tracking-[0%] xl:h-16 w-[192px] lg:h-14 bg-linear-to-r from-[#8022B9] to-[#513DF4] justify-center items-center rounded-[10px] mt-[44px]">
                      {section.secButtonLabel}
                      <span>
                        <MoveRight
                          className="text-white w-[14px] ml-5"
                          strokeWidth={3}
                        />
                      </span>
                    </button>
                  </a>
                )}
              </div>
            );
          })}
        </div>

        {titles.length > 0 && (
          <div className="xl:w-[315px] lg:w-[300px] md:w-[210px] sm:w-[190px] w-[100px]  sticky top-[120px] max-sm:top-[100px] self-start h-fit  max-sm:ml-4">
            <div className="w-full bg-linear-to-r from-[#8022B9] to-[#513DF4] rounded-[10px] flex items-center sm:px-5 py-[8px] px-1 ">
              <div className="xl:w-[30px] w-[20px] max-sm:w-[12px] aspect-[1/1] sm:block hidden ">
                <Image
                  width={96}
                  height={96}
                  src="/media/blog/menuIconBlog.png"
                  alt="Table of Content Icon"
                  className="object-cover"
                />
              </div>
              <h2 className="text-white font-helvetica-neue-medium font-medium xl:text-xl lg:text-base max-sm:text-sm lg:leading-[30px] xl:leading-[35px] tracking-[0%] sm:ml-5 ml-1 ">
                Table of Content
              </h2>
            </div>
            <BlogMenu
              titles={titles}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
            <p className="text-black font-helvetica-neue-roman font-bold text-xl max-sm:text-base leading-[35px] tracking-[0%] mt-[48px] max-sm:mt-[15px] ">
              Share Article
            </p>
            <div className="flex gap-2.5 max-sm:gap-1.5 mt-[30px] max-sm:mt-[15px]">
              {blogDesignSocials.map((icon, idx) => {
                const handleShare = () => {
                  const shareUrl = window.location.href;
                  const title = blogItem?.title || document.title || "";

                  switch (icon.name) {
                    case "Facebook":
                      window.open(
                        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                          shareUrl
                        )}`,
                        "_blank",
                        "noopener,noreferrer"
                      );
                      break;
                    case "x":
                    case "Twitter":
                      window.open(
                        `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                          title
                        )}&url=${encodeURIComponent(shareUrl)}`,
                        "_blank",
                        "noopener,noreferrer"
                      );
                      break;
                    case "LinkedIn":
                      window.open(
                        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                          shareUrl
                        )}`,
                        "_blank",
                        "noopener,noreferrer"
                      );
                      break;
                    case "Instagram":
                      if (navigator.share) {
                        navigator
                          .share({ title, url: shareUrl })
                          .catch(() => {});
                      } else if (navigator.clipboard) {
                        navigator.clipboard.writeText(shareUrl).then(() => {
                          alert(
                            "Link copied to clipboard. Paste in Instagram to share."
                          );
                        });
                      } else {
                        window.open(icon.link, "_blank", "noopener,noreferrer");
                      }
                      break;
                    default:
                      window.open(icon.link, "_blank", "noopener,noreferrer");
                  }
                };

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={handleShare}
                    className="cursor-pointer"
                    aria-label={`Share on ${icon.name}`}
                  >
                    <div className="w-10 aspect-[1/1]">
                      <div className="relative rounded-[10px] overflow-hidden group w-full h-full">
                        <Image
                          src={`/blog/${icon.img}`}
                          alt={icon.name}
                          fill
                          className="object-cover z-0 transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 z-10" />
                        <div className="relative z-20 flex items-center justify-center w-full h-full" />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
      {(!titles || titles.length === 0) && (
        <div>
          <p className="text-black font-helvetica-neue-roman font-bold text-xl max-sm:text-base leading-[35px] tracking-[0%] mt-[48px] max-sm:mt-[15px] ">
            Share Article
          </p>
          <div className="flex gap-2.5 max-sm:gap-1.5 mt-[30px] max-sm:mt-[15px]">
            {blogDesignSocials.map((icon, idx) => {
              const handleShare = () => {
                const shareUrl = window.location.href;
                const title = blogItem?.title || document.title || "";

                switch (icon.name) {
                  case "Facebook":
                    window.open(
                      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                        shareUrl
                      )}`,
                      "_blank",
                      "noopener,noreferrer"
                    );
                    break;
                  case "x":
                  case "Twitter":
                    window.open(
                      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                        title
                      )}&url=${encodeURIComponent(shareUrl)}`,
                      "_blank",
                      "noopener,noreferrer"
                    );
                    break;
                  case "LinkedIn":
                    window.open(
                      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                        shareUrl
                      )}`,
                      "_blank",
                      "noopener,noreferrer"
                    );
                    break;
                  case "Instagram":
                    if (navigator.share) {
                      navigator.share({ title, url: shareUrl }).catch(() => {});
                    } else if (navigator.clipboard) {
                      navigator.clipboard.writeText(shareUrl).then(() => {
                        alert(
                          "Link copied to clipboard. Paste in Instagram to share."
                        );
                      });
                    } else {
                      window.open(icon.link, "_blank", "noopener,noreferrer");
                    }
                    break;
                  default:
                    window.open(icon.link, "_blank", "noopener,noreferrer");
                }
              };

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={handleShare}
                  className="cursor-pointer"
                  aria-label={`Share on ${icon.name}`}
                >
                  <div className="w-10 aspect-[1/1]">
                    <div className="relative rounded-[10px] overflow-hidden group w-full h-full">
                      <Image
                        src={`/blog/${icon.img}`}
                        alt={icon.name}
                        fill
                        className="object-cover z-0 transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 z-10" />
                      <div className="relative z-20 flex items-center justify-center w-full h-full" />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default BlogContent;
