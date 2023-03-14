import { TypeAnimation } from "react-type-animation";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";

const getVariant = () => ({
  visible: { scale: 1, opacity: 1 },
  hidden: { scale: 0.5, opacity: 0 },
});

export const Why = () => {
  const [ref, inView] = useInView();
  const controls = useAnimation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setVisible(true);
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      ref={ref}
      className="mt-[4px] min-h-[650px] bg-cover bg-center flex flex-col items-center justify-center gap-[25px] px-[20px] md:min-h-[700px] md:gap-[40px] md:mt-[4px]"
      style={{ backgroundImage: "url(/images/why/background.png)" }}
    >
      {visible ? (
        <h1 className="text-[52px] font-[900] text-white leading-[1.25] md:leadig-[1] md:text-[77px]">
          <TypeAnimation
            sequence={["Why Kodiak"]}
            wrapper="span"
            cursor={false}
            repeat={0}
          />
        </h1>
      ) : (
        <></>
      )}

      <motion.div
        animate={controls}
        initial="hidden"
        variants={getVariant()}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="max-w-[1180px] text-white text-left md:text-center  text-[17px] font-[400] leading-normal"
      >
        At Kodiak F.A.S.T Company, we aim to craft handmade Alaskan F.A.S.T that
        inspire adventure and exceed expectations. As outdoor enthusiasts, we
        understand the importance of having a durable, reliable, and functional
        F.A.S.T.
        <br />
        <br />
        Our passion for excellence is evident in every F.A.S.T we create. We're
        committed to providing an unparalleled customer experience from when you
        visit our website to when you take your F.A.S.T out on your next
        adventure.
      </motion.div>

      <motion.div
        animate={controls}
        initial="hidden"
        variants={getVariant()}
        transition={{ delay: 1 }}
      >
        <button className="py-[24px] px-[40px] text-[#126149] tracking-[0.1em] text-[18px] bg-white rounded-md">
          Read More
        </button>
      </motion.div>
    </section>
  );
};
