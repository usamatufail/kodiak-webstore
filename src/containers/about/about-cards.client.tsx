import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const data = [
  {
    img: "https://res.cloudinary.com/samtufail726/image/upload/v1678475067/kodiak/About/card1.png",
    icon: "/svg/about/business.svg",
    heading: "Where we do business",
    text: `Our target audience includes hunters, hikers, backpackers, prepper
    enthusiasts, and tactical gear users, and we offer designs for each
    specific need. Inspired by the Alaskan spirit, our aesthetic blends
    rustic and modern elements to create a warm and adventurous feel.`,
  },
  {
    img: "https://res.cloudinary.com/samtufail726/image/upload/v1678475093/kodiak/About/card2.png",
    icon: "/svg/about/environment.svg",
    heading: " Environment Friendly",
    text: `We want our website visitors to feel inspired for their next adventure
    and confident in their gear. With our use of earth tones, leather,
    metal, and wood, we aim to evoke a natural and adventurous vibe.
    Keywords that best represent our service include Adventure, Knives,
    and Hiking.`,
  },
];

const getVariant = (duration: number) => ({
  visible: { scale: 1, opacity: 1, transition: { duration } },
  hidden: { scale: 0.5, opacity: 0, transition: { duration } },
});

export const AboutCards = () => {
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
      className="min-h-[900px] w-full grid md:grid-cols-2 gap-[30px] md:gap-[100px] justify-center items-center px-[10px] md:px-[180px] py-[50px]"
    >
      {data.map((data) => {
        return (
          <motion.div
            animate={controls}
            initial="hidden"
            variants={getVariant(0.5)}
            className="min-h-[600px] md:min-h-[720px] flex flex-col justify-center gap-[20px] bg-cover rounded-[30px] bg-no-repeat px-[20px] md:px-[70px] shadow-[20px_20px_30px_rgba(0,0,0,0.2)]"
            style={{
              backgroundImage: `url(${data.img})`,
            }}
          >
            <img
              src={data.icon}
              alt={data.heading}
              className="w-[64px] h-[64px]"
            />
            <h1 className="text-[38px] md:text-[48px] text-white font-[700] mb-[0px]">
              {data.heading}
            </h1>
            <p className="text-[18px] text-white font-[600] md:max-w-[500px]">
              {data.text}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
};
