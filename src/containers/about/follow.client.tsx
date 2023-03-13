import { Link } from "@shopify/hydrogen";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const getVariant = (duration: number) => ({
  visible: { scale: 1, opacity: 1, transition: { duration } },
  hidden: { scale: 0.5, opacity: 0, transition: { duration } },
});

export const Follow = () => {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div
      ref={ref}
      className="min-h-[560px] w-full flex items-center px-[10px] md:px-[145px] py-[50px] "
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/samtufail726/image/upload/v1678485438/kodiak/About/follow.png)",
      }}
    >
      <motion.div
        animate={controls}
        initial="hidden"
        variants={getVariant(0.5)}
        className="flex flex-col gap-[20px]"
      >
        <h1 className="text-[38px] md:text-[48px] text-white font-[700] md:max-w-[500px] mb-[0px]">
          Join the adventure and stay in the know by following us on social
          media!
        </h1>
        <p className="text-[18px] text-white font-[600] md:max-w-[500px] mb-[0px]">
          Stay ahead of the curve and get exclusive access to updates and
          content from Kodiak Knife Company, your trusted source for
          high-quality, rugged knives.
        </p>
        <Link to="/">
          <button
            className={`h-[58px] flex items-center justify-center font-[600] px-[60px]
          text-[18px] text-black bg-white focus:bg-[rgba(255,255,255,0.8)]
          hover:bg-[rgba(255,255,255,0.8)] transition-all rounded-[80px] mt-[20px]`}
          >
            Follow
          </button>
        </Link>
      </motion.div>
    </div>
  );
};
