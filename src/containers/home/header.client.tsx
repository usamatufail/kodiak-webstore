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
      className="header-content min-h-[70vh]"
      ref={ref}
      style={{
        backgroundImage: `url(/cloudinary/homepage/og-header.png)`,
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
          className="header-heading gradient-text"
        >
          Adventure Essentials
          {/* by Kodiak */}
        </motion.h1>
        <p className="header-paragraph gradient-text">
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
          {/* <Link to="/products/kodiak-adventure-box"> */}
          <a href="#adventure-box">
            <button
              className={`h-[42px] 2xl:h-[58px] flex items-center justify-center font-[600] px-[30px] 2xl:px-[60px]
            text-[16px] 2xl:text-[18px] text-white bg-[#879281] focus:bg-[#6a7365]
            hover:bg-[#6a7365] transition-all rounded-[80px] mt-[20px]`}
            >
              Shop Now
            </button>
          </a>
          {/* </Link> */}
        </motion.div>
      </div>
    </header>
  );
};
