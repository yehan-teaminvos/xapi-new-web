import { blogCards } from "@/data/blog-details";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Clock } from "lucide-react";
import Link from "next/link";

import BlogContent from "@/components/blog-content";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return blogCards.map((post) => ({
    slug: post.slug,
  }));
}

// recent list will be computed per-page to exclude the current post when necessary

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const blogItem = blogCards.find((blog) => blog.slug === slug);

  if (!blogItem) {
    notFound();
  }

  // Build recent blogs list (skip latest at index 0). Ensure the current blog is not included;
  // if it appears in the next items, pick the following posts so we always show 3 items.
  const recentCandidates = blogCards.slice(1); // skip the top latest
  const currentBlogs = [] as typeof blogCards;
  for (let i = 0; i < recentCandidates.length && currentBlogs.length < 3; i++) {
    const c = recentCandidates[i];
    if (c.slug === blogItem.slug) continue;
    currentBlogs.push(c);
  }

  return (
    <div>
      <div className="h-[50px]"></div>
      {/* The latest blog section */}
      <section id="blogList">
        <div className="max-2xl:container 2xl:max-w-[2000px] lg:px-15 px-5  mx-auto ">
          <div className="relative w-full aspect-[4960/1940] mt-[9px] ">
            <Image
              height={1940}
              width={4960}
              src={`${blogItem?.imgUrl}`}
              alt="the latest blog"
              className="object-cover rounded-[10px]"
            />
          </div>

          <h2 className="mt-[45px] xl:text-[40px] lg:text-[34px] sm:text-[24px] text-[21px] text-7xl lg:leading-[48px] md:leading-[40px] leading-[33px] tracking-[0%] text-black font-medium font-helvetica-neue-medium">
            {blogItem?.title}
          </h2>
          <div className="mt-7.5 flex items-center md:gap-10 gap-6 ">
            <div className="relative lg:w-[105px] md:w-[95px] sm:w-[80px] w-[70px]  aspect-[1/1] ">
              <Image
                width={160}
                height={160}
                src={`${blogItem?.profilePic}`}
                alt="blog profile picture"
                className="object-cover rounded-full"
              />
            </div>

            <div>
              <p className="font-helvetica-neue-medium font-medium lg:text-2xl md:text-xl sm:text-lg text-base leading-[22px] tracking-[0%] text-dark">
                {blogItem?.author}&nbsp;&nbsp;
              </p>
              <div className="flex lg:mt-[18px] md:mt-[12px] mt-[8px]">
                <p className="font-helvetica-neue-medium font-medium xl:text-2xl md:text-xl sm:text-lg text-base leading-[22px] tracking-[0%] text-[#787878]">
                  {blogItem?.date}
                </p>
                <span className="text-xl text-[#787878] leading-none font-medium">
                  &nbsp;&nbsp;|
                </span>
                <p className="font-helvetica-neue-medium font-medium xl:text-2xl md:text-xl text-lg leading-[22px] tracking-[0%] text-[#787878]">
                  &nbsp;&nbsp;{blogItem?.readTime}&nbsp; min read
                </p>
              </div>
            </div>
          </div>
          <div className="h-[2px] bg-[#E0E0E0] 2xl:w-425 xl:w-250 lg:w-180 md:w-115 sm:w-90 w-70  mx-auto xl:mt-10 lg:mt-8 md:mt-6 sm:mt-5 mt-4"></div>
          <BlogContent blogItem={blogItem} />
        </div>
      </section>
      <section>
        <div className="max-2xl:container 2xl:max-w-[2000px] lg:px-15 px-5 mx-auto">
          <h2 className="text-black xl:text-[44px] lg:text-[38px] sm:text-[28px] text-[25px] text-7xl font-medium leading-[50px] tracking-[0%] font-artegra-sans-alt-medium xl:mt-[93px] lg:mt-[86px] mt-[63px]">
            Recent Blogs
          </h2>
          <div className="grid lg:grid-cols-3 gap-5 xl:mt-[42px] md:mt-[30px] mt-[25px] ">
            {currentBlogs.map((item, idx) => (
              <Link href={`/resources/blog/${item.slug}`} key={item.slug}>
                <div
                  key={item.slug}
                  className="px-5 pt-[21px] pb-[15px] border-[1px] border-[#523EF51A]  rounded-[20px] hover:scale-102 duration-300"
                >
                  <div className=" relative w-full aspect-[1440/760]">
                    <Link href={`/resources/blog/${item.slug}`}>
                      <Image
                        width={1440}
                        height={760}
                        src={item.imgUrl}
                        alt="blog image"
                        className="object-cover"
                      />
                    </Link>

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
                      {item.readTime} mins read
                    </span>
                  </div>
                  <Link href={`/resources/blog/${item.slug}`}>
                    <h2 className="font-helvetica-neue-medium font-medium text-lg leading-[31px] tracking-[0%] text-black mt-[13px] line-clamp-2 hover:text-tertiary min-h-[62px]">
                      {item.title}
                    </h2>
                  </Link>

                  <p className="font-helvetica-neue-roman text-[#787878] text-sm leading-[22px] tracking-[0%] font-normal mt-[9px] line-clamp-2">
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
                        <p className="text-dark text-sm font-helvetica-neue-medium tracking-[0%] line-clamp-1">
                          {item.author}
                        </p>
                        <p className="font-helvetica-neue-roman font-normal text-xs text-[#787878] leading-[20px] tracking-[0%]">
                          {item.date}
                        </p>
                      </div>
                    </div>
                    <Link href={`/resources/blog/${item.slug}`}>
                      <p className="text-tertiary text-[13px] font-helvetica-neue-medium leading-[22px] font-medium tracking-[0%] flex gap-[6px] max-xl:text-[10px]">
                        Read More
                        <span>
                          <ArrowRight
                            className="text-tertiary h-5 w-5"
                            strokeWidth={2}
                          />
                        </span>
                      </p>
                    </Link>
                  </div>
                </div>
              </Link>
            ))}
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
                <p className="text-white text-base font-helvetica-neue-roman leading-[25px] lg:max-w-[630px] max-w-xl mt-5 lg:text-left text-center">
                  Book a demo or start your free trial today and experience
                  governance as a growth enabler, not a bottleneck.
                </p>
                <div className="flex flex-col sm:mt-25 mt-17.5 gap-5 sm:flex-row">
                  <button className="group px-12 py-3.5 bg-white hover:bg-gradient-to-r hover:from-tertiary hover:via-secondary hover:to-primary  font-bold rounded-[5px] cursor-pointer">
                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-tertiary via-secondary to-primary  group-hover:text-white font-helvetica-neue-roman text-lg">
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
  );
}
