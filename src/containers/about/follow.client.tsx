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
      className="min-h-[560px] bg-cover bg-no-repeat w-full flex items-center justify-center px-[10px] md:px-[145px] py-[50px] "
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/samtufail726/image/upload/v1678485438/kodiak/About/follow.png)",
      }}
    >
      <motion.div
        animate={controls}
        initial="hidden"
        variants={getVariant(0.5)}
        className="flex flex-col gap-[20px] max-w-[1200px] text-center"
      >
        <h1 className="text-[38px] md:text-[48px] text-white font-[700] leading-[1.14] mb-[0px]">
          Join the adventure and stay in the know by following us on social
          media!
        </h1>
        <p className="text-[18px] text-white font-[600] mb-[0px]">
          We strive to provide top-notch, functional knives to outdoor
          enthusiasts and those who appreciate rugged, adventurous style. With
          our focus on quality and customer satisfaction, we aim to make your
          shopping experience a memorable one.
        </p>
        <a
          href="https://www.instagram.com/kodiakknifeco/"
          className="flex items-center justify-center"
        >
          <button
            className={`h-[58px] flex items-center justify-center font-[600] px-[60px]
          text-[18px] text-black bg-white focus:bg-[rgba(255,255,255,0.8)]
          hover:bg-[rgba(255,255,255,0.8)] transition-all rounded-[80px] mt-[20px]`}
          >
            Follow
          </button>
        </a>
      </motion.div>
    </div>
  );
};
