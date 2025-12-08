import Image from "next/image";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  imageOneStyles?: string;
  imageTwoStyles?: string;
  imageThreeStyles?: string;
  imageOnePosition?: string;
  imageTwoPosition?: string;
  imageThreePosition?: string;
};

export default function SparklesEffectBlue({
  className,
  imageOneStyles,
  imageTwoStyles,
  imageThreeStyles,
  imageOnePosition,
  imageTwoPosition,
  imageThreePosition,
}: Props) {

  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 duration-300",
        className
      )}
    >
      {/* Star 1 */}
      <motion.div
        className={cn(
          "absolute md:right-[39px] right-[40px] md:bottom-[35px] bottom-[30px] z-[1]",
          imageOnePosition
        )}
        animate={{ scale: [0.4, 1, 0.4], opacity: [0, 1, 0] }}
        transition={{ duration: 1.0, repeat: Infinity, repeatDelay: 0.2 }}
      >
        <Image
          src="/media/solutions/card-star-blue.png"
          alt="star-1"
          width={84}
          height={81}
          className={cn("h-[26px] md:h-[22px] w-auto", imageOneStyles)}
        />
      </motion.div>

      {/* Star 2 */}
      <motion.div
        className={cn(
          "absolute md:right-[60px] right-[60px] md:bottom-[20px] bottom-[15px] z-[1]",
          imageTwoPosition
        )}
        animate={{ scale: [0.4, 0.8, 0.4], opacity: [0, 1, 0] }}
        transition={{
          duration: 1.0,
          delay: 0.5,
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
      >
        <Image
          src="/media/solutions/card-star-blue.png"
          alt="star-2"
          width={84}
          height={81}
          className={cn("h-[20px] md:h-[16px] w-auto", imageTwoStyles)}
        />
      </motion.div>

      {/* Star 3 */}
      <motion.div
        className={cn(
          "absolute md:right-[26px] right-[25px] md:bottom-[51px] bottom-[48px] z-[1]",
          imageThreePosition
        )}
        animate={{ scale: [0.4, 0.7, 0.4], opacity: [0, 1, 0] }}
        transition={{
          duration: 1.0,
          delay: 1,
          repeat: Infinity,
          repeatDelay: 0.3,
        }}
      >
        <Image
          src="/media/solutions/card-star-blue.png"
          alt="star-3"
          width={84}
          height={81}
          className={cn("h-[21px] md:h-[14px] w-auto", imageThreeStyles)}
        />
      </motion.div>
    </div>
  );
}
