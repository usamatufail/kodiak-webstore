import { useEffect } from "react";
import { DetailsBanner } from "../../components";
import lottie from "lottie-web/build/player/lottie_light";
import animationData from "../../assets/brids.json";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const leftVariant = (duration: number) => ({
  visible: { x: 0, opacity: 1, transition: { duration } },
  hidden: { x: -200, opacity: 0, transition: { duration } },
});
const rightVariant = (duration: number) => ({
  visible: { x: 0, opacity: 1, transition: { duration } },
  hidden: { x: 200, opacity: 0, transition: { duration } },
});

export const HuntingKnives = ({
  link = "hunting-fast",
  heading = "Why F.A.S.T?",
  image = "https://res.cloudinary.com/samtufail726/image/upload/q_auto/v1675683664/kodiak/Blades/DSC03679-Edit_a4xfoe_1.jpg",
  description = `At Kodiak Knife Co., we take pride in offering top-of-the-line, versatile, and stylish knives that cater to the diverse needs of adventure enthusiasts worldwide. Our exceptional knives, referred to as Field Adaptive Survival Tools (F.A.S.T.), are designed to provide unbeatable performance, durability, and functionality in the great outdoors. Whether you're an avid hiker, camper, or hunter, our F.A.S.T. knives are the perfect companion for your escapades.

  The F.A.S.T. acronym embodies our commitment to creating tools that adapt to various environments and outdoor conditions. This emphasis on versatility, functionality, and durability sets our knives apart from the competition and ensures that they can withstand even the most challenging outdoor adventures.
  
  Our F.A.S.T. knives are meticulously crafted using the highest quality materials, ensuring that they can endure rigorous use. The blades are made from premium-grade steel, providing unmatched sharpness and edge retention, while the handles are fashioned from natural materials such as wood or bone, delivering a unique and authentic outdoor aesthetic.
  
  As a leading brand in the world of outdoor knives, Kodiak Knife Co. is committed to delivering an unparalleled customer experience. Our user-friendly website makes it easy to browse our extensive collection of F.A.S.T. knives, and our dedicated customer support team is always on hand to assist with any questions or concerns.
  
  In addition to offering remarkable F.A.S.T. knives, we also understand the importance of optimizing our content for search engines. Our SEO-friendly approach ensures that outdoor enthusiasts searching for the best knives on the market can easily discover and connect with our brand.
  
  Experience the ultimate in outdoor knives and elevate your wilderness experiences with the unmatched quality, style, and performance of Kodiak Knife Co.'s F.A.S.T. knives. Our dedication to providing versatile, functional, and durable tools truly sets us apart, making our F.A.S.T. knives the ideal choice for any adventure enthusiast.`,
  // texts = {
  //   h1: "",
  //   h1p: ``,
  //   h2: "",
  //   h2p: ``,
  //   h3: ``,
  //   h3p: ``,
  // },
}) => {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector(`#${link}-left`) as Element,
      animationData: animationData,
      renderer: "svg", // "canvas", "html"
      loop: true, // boolean
      autoplay: true, // boolean
    });
  }, []);

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector(`#${link}-right`) as Element,
      animationData: animationData,
      renderer: "svg", // "canvas", "html"
      loop: true, // boolean
      autoplay: true, // boolean
    });
  }, []);
  return (
    <div id={`#${link}`} className="overflow-hidden">
      {/* Image */}
      <DetailsBanner
        heading={heading}
        backgroundImg={image}
        description={description}
        className="pt-[20px] md:pt-[50px] pb-[20px] md:pb-[50px]"
      />
      {/* Text with Mountains */}
      {/* <div
        className="relative bg-cover bg-no-repeat"
        ref={ref}
        style={{
          backgroundImage: `url(https://res.cloudinary.com/samtufail726/image/upload/q_auto,b_white,o_50/v1675649447/kodiak/DSC02239_xrvqnk.png)`,
        }}
      >
        
        <motion.div
          animate={controls}
          initial="hidden"
          variants={leftVariant(0.5)}
          className="max-w-[15%] absolute left-[0px] top-[-113px] z-10"
        >
          <div id={`${link}-left`} style={{ width: 200, height: 200 }} />
          <img
            src="/images/products/left-bg.png"
            alt="background"
            className="opacity-40 z-10"
          />
        </motion.div>
        
        <motion.div
          animate={controls}
          initial="hidden"
          variants={rightVariant(0.5)}
          className="max-w-[35%] xl:max-w-[15%] absolute right-[0px] bottom-[40px] z-10"
        >
          <div id={`${link}-right`} style={{ width: 200, height: 200 }} />
          <img
            src="/images/products/right-bg.png"
            alt="background"
            className="opacity-40 z-10"
          />
        </motion.div>
        <div className="text-center relative z-20 px-[15px] md:px-[250px] flex flex-col gap-[20px] mt-[4px] pt-[40px]">
          <h2 className="text-[40px] font-bold">{texts.h1}</h2>
          <p className="text-[19px] whitespace-pre-wrap">{texts.h1p}</p>
          {texts.h2 ? <hr /> : <></>}
          <h2 className="text-[40px] font-bold">{texts.h2}</h2>
          <p className="text-[19px] whitespace-pre-wrap">{texts.h2p}</p>
          {texts.h3 ? <hr /> : <></>}
          <h2 className="text-[40px] font-bold">{texts.h3}</h2>
          <p className="text-[19px] whitespace-pre-wrap">{texts.h3p}</p>
        </div>
      </div> */}
      {/* 3 Layers of Image */}
    </div>
  );
};
