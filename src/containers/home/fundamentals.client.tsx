import { Link } from "@shopify/hydrogen";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const getVariant = (duration: number) => ({
  visible: { scale: 1, opacity: 1, transition: { duration } },
  hidden: { scale: 0.5, opacity: 0, transition: { duration } },
});

export const Fundamentals = () => {
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
      className="min-h-[560px] w-full flex items-center justify-center px-[10px] py-[50px] bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/samtufail726/image/upload/v1678492221/kodiak/fundamentals.png)",
      }}
    >
      <motion.div
        animate={controls}
        initial="hidden"
        variants={getVariant(0.5)}
        className="flex flex-col gap-[20px]"
      >
        <h1 className="text-[38px] text-center md:text-[62px] text-white font-[700] mb-[0px]">
          Fundamentals
        </h1>
        <p className="text-[18px] md:text-[24px] text-white text-center font-[600] mb-[0px]">
          The daily basics make up the bulk of our clothing <br />
          consumption—choose basics made better.
        </p>
        <motion.div
          animate={controls}
          initial="hidden"
          variants={getVariant(0.5)}
          className="flex justify-center"
        >
          <Link to="/shop/all">
            <button
              className={`h-[58px] flex items-center justify-center font-[600] border-[1px] border-white border-solid px-[60px]
            text-[18px] text-white bg-transparent focus:bg-[rgba(255,255,255,0.8)]
            hover:bg-[rgba(255,255,255,0.8)] transition-all rounded-[80px] mt-[20px]`}
            >
              Shop Now
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};
