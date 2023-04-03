import { TypeAnimation } from "react-type-animation";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { Link } from "@shopify/hydrogen";

const getVariant = (duration: number) => ({
  visible: { scale: 1, opacity: 1, transition: { duration } },
  hidden: { scale: 0.5, opacity: 0, transition: { duration } },
});

// const images = [
//   "/cloudinary/homepage/banner-1.jpg",
//   "/cloudinary/homepage/banner-2.jpg",
//   "/cloudinary/homepage/banner-3.jpg",
// ];

export const Header = () => {
  // const [img, setImg] = useState(images[0]);
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // useEffect(() => {
  //   const random = Math.floor(Math.random() * images.length);
  //   setImg(images[random]);
  // }, []);

  return (
    <header
      className="min-h-[70vh] flex flex-col justify-center items-start px-[20px] xl:px-[160px] relative md:justify-end xl:pl-[500px] xl:pb-[174px]"
      ref={ref}
      style={{
        backgroundImage: `url(/cloudinary/homepage/64.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <div className="absolute top-0 left-0 bg-[rgba(0,0,0,0.45)] w-full h-full" /> */}
      <div className="relative " style={{ zIndex: 1 }}>
        <motion.h1
          animate={controls}
          initial="hidden"
          variants={getVariant(0.5)}
          className="text-[42px] font-[700] text-white leading-[1] md:text-[62px] text-left md:max-w-[560px] gradient-text"
        >
          Adventure Essentials
          {/* by Kodiak */}
        </motion.h1>
        <p className="font-bold text-white text-[18px] mt-[20px] md:text-[24px] flex flex-col gap-[28px] md:max-w-[500px] text-left gradient-text leading-[1.14]">
          <TypeAnimation
            sequence={["Free Shipping + Knife + 2 Gifts"]}
            speed={85}
            wrapper="span"
            cursor={false}
            repeat={0}
          />
        </p>
        <motion.div
          animate={controls}
          initial="hidden"
          variants={getVariant(0.5)}
          className=""
        >
          <Link to="/products/kodiak-adventure-box">
            <button
              className={`h-[58px] flex items-center justify-center font-[600] px-[30px] md:px-[60px]
            text-[18px] text-white bg-[#879281] focus:bg-[#6a7365]
            hover:bg-[#6a7365] transition-all rounded-[80px] mt-[20px]`}
            >
              Shop Now
            </button>
          </Link>
        </motion.div>
      </div>
    </header>
  );
};
