import { TypeAnimation } from "react-type-animation";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { Link } from "@shopify/hydrogen";

const getVariant = (duration: number) => ({
  visible: { scale: 1, opacity: 1, transition: { duration } },
  hidden: { scale: 0.5, opacity: 0, transition: { duration } },
});

const images = [
  // 'https://res.cloudinary.com/samtufail726/image/upload/q_auto,b_black,o_50/v1675465118/kodiak/1_n9rg3y.png',
  // 'https://res.cloudinary.com/samtufail726/image/upload/q_auto,b_black,o_50/v1675465116/kodiak/DSC03088-Edit_vwzexh.png',

  "https://res.cloudinary.com/samtufail726/image/upload/v1678488177/kodiak/header.png",
  "https://res.cloudinary.com/samtufail726/image/upload/q_auto,b_black,o_40/v1675465741/kodiak/DSC02328_ik8rcy.jpg",
  "https://res.cloudinary.com/samtufail726/image/upload/q_auto,b_black,o_40/v1675465743/kodiak/DSC02452_ggxiqy.jpg",
  "https://res.cloudinary.com/samtufail726/image/upload/q_auto,b_black,o_40/v1675465742/kodiak/DSC02277_y6krg4.jpg",
];

export const Header = () => {
  const [img, setImg] = useState(images[0]);
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    const random = Math.floor(Math.random() * images.length);
    setImg(images[random]);
  }, []);

  return (
    <header
      className="min-h-[60vh] flex flex-col justify-center items-center px-[20px] md:min-h-[78vh] md:px-[160px] relative"
      ref={ref}
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative " style={{ zIndex: 1 }}>
        <motion.h1
          animate={controls}
          initial="hidden"
          variants={getVariant(0.5)}
          className="text-[52px] font-[700] text-white leading-[1] md:text-[62px] text-center"
        >
          Embody the Alaskan Spirit.
        </motion.h1>
        <p className="font-bold text-white text-[18px] mt-[20px] md:text-[24px] text-center flex flex-col gap-[28px] md:max-w-[700px] md:pl-[150px]">
          <TypeAnimation
            sequence={["Handmade F.A.S.T"]}
            speed={85}
            wrapper="span"
            cursor={false}
            repeat={0}
          />

          <TypeAnimation
            sequence={[
              " ",
              1000,
              "Crafted with precision and ruggedness for those who seek adventure.",
            ]}
            speed={85}
            wrapper="span"
            cursor={true}
            repeat={0}
          />
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
      </div>
    </header>
  );
};
