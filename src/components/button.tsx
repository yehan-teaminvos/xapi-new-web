import { cn } from "@/lib/utils";

type Props = {
  title: string;
  type?: "button" | "submit" | "reset";
  className?: string;
};

export default function Button({ title, type = "button", className }: Props) {
  return (
    <button
      type={type}
      className={cn(
        `group bg-white hover:bg-gradient-to-r hover:from-tertiary hover:via-secondary hover:to-primary  px-6 py-4 rounded-[5px] font-helvetica-bold cursor-pointer`,
        className
      )}
    >
      <div className="group-hover:text-white bg-gradient-to-r from-tertiary via-secondary to-primary bg-clip-text text-transparent">
        {title}
      </div>
    </button>
  );
}
