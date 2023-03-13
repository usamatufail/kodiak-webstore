import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const getVariant = (duration: number) => ({
  visible: { scale: 1, opacity: 1, transition: { duration } },
  hidden: { scale: 0.5, opacity: 0, transition: { duration } },
});

export const OurMission = () => {
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
      className="min-h-[610px] w-full flex items-center px-[10px] md:px-[145px] py-[50px] "
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/samtufail726/image/upload/v1678476564/kodiak/About/mission.png)",
      }}
    >
      <motion.div
        animate={controls}
        initial="hidden"
        variants={getVariant(0.5)}
        className="flex flex-col gap-[20px]"
      >
        <h1 className="text-[38px] md:text-[48px] text-white font-[700] mb-[0px]">
          Our Mission
        </h1>
        <p className="text-[18px] text-white font-[600] md:max-w-[500px]">
          Our values and mission center around delivering excellent customer
          service and ensuring that each product is made with care and attention
          to detail. We aim to exceed your expectations by providing a natural,
          outdoor aesthetic and a user-friendly experience.
        </p>
      </motion.div>
    </div>
  );
};
