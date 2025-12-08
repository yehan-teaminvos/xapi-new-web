import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  title: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  link?: string;
};

export default function Button({
  title,
  type = "button",
  className,
  link,
}: Props) {
  return (
    <Link
      href={link || "#"}
      type={type}
      className={cn(
        `group bg-white hover:bg-gradient-to-r hover:from-tertiary hover:via-secondary hover:to-primary  px-6 py-4 rounded-[5px] font-helvetica-bold cursor-pointer flex justify-center items-center text-center text-lg sm:text-xl leading-6 sm:leading-7 transition-all duration-300 border-2 border-transparent hover:border-white`,
        className
      )}
    >
      <div className="group-hover:text-white bg-gradient-to-r from-tertiary via-secondary to-primary bg-clip-text text-transparent">
        {title}
      </div>
    </Link>
  );
}
