import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "@shopify/hydrogen";

const getVariant = (duration: number) => ({
  visible: { scale: 1, opacity: 1, transition: { duration } },
  hidden: { scale: 0.5, opacity: 0, transition: { duration } },
});

export const Available = () => {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <section className="mt-[4px] h-[500px] relative flex items-center justify-center md:h-[1024px]">
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        className="absolute h-full w-full object-cover"
        style={{ zIndex: 1 }}
      >
        <source
          src="https://res.cloudinary.com/samtufail726/video/upload/q_auto/v1675559276/kodiak/Videos/Untitled_wml6iz.mp4"
          type="video/mp4"
        />
      </video>
      <div
        className="absolute top-0 left-0 h-full w-full bg-black opacity-75"
        style={{ zIndex: 2 }}
      />
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={getVariant(0.5)}
        className="relative flex flex-col items-center"
        style={{ maxWidth: "1024px", zIndex: 3 }}
      >
        <p className="px-[20px] md:px-[0px] text-center text-gray-300 md:text-[24px] tracking-wider md:tracking-[unset] leading-normal md:leading-[unset]">
          If you are looking for a special and unique gift or the perfect
          addition to your own kitchen, consider handmade F.A.S.Ts. Handmade
          F.A.S.Ts offer a level of craftsmanship that is simply unrivaled by
          regular store-bought models. Let's explore why handmade F.A.S.Ts are
          so special and how they can make a great addition to any kitchen.{" "}
        </p>
        <Link to="/shop/all">
          <button
            className={`h-[64px] flex items-center justify-center font-semibold capitalize
          text-[20px] bg-[rgba(255,255,255,0.6)] focus:bg-[rgba(255,255,255,0.8)]
          hover:bg-[rgba(255,255,255,0.8)] transition-all rounded-[8px] min-w-[200px] mt-[20px] col-span-2`}
          >
            shop now
          </button>
        </Link>
      </motion.div>
    </section>
  );
};
