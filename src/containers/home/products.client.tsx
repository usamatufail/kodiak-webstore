import Slider from "@ant-design/react-slick";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import animationData from "../../assets/brids.json";
import lottie from "lottie-web/build/player/lottie_light";
import { ProductBox } from "~/components";

const leftVariant = (duration: number) => ({
  visible: { x: 0, opacity: 1, transition: { duration } },
  hidden: { x: -200, opacity: 0, transition: { duration } },
});
const rightVariant = (duration: number) => ({
  visible: { x: 0, opacity: 1, transition: { duration } },
  hidden: { x: 200, opacity: 0, transition: { duration } },
});

const mainVariant = (duration: number) => ({
  visible: { scale: 1, opacity: 1, transition: { duration } },
  hidden: { scale: 0, opacity: 0, transition: { duration } },
});

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
  ],
};

export const Products = ({ collection }: any) => {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#lottie-left") as Element,
      animationData: animationData,
      renderer: "svg", // "canvas", "html"
      loop: true, // boolean
      autoplay: true, // boolean
    });
  }, []);

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#lottie-right") as Element,
      animationData: animationData,
      renderer: "svg", // "canvas", "html"
      loop: true, // boolean
      autoplay: true, // boolean
    });
  }, []);

  return (
    <>
      <div className="overflow-hidden py-[30px] mt-[18px] mb-[18px]  lg:py-[70px] lg:gap-[unset] relative">
        <div className="pl-[200px]">
          <h1 className="text-[48px] font-[700] text-black">Best sellers</h1>
        </div>
        {/* Left Mountains */}
        <div className="flex justify-center items-center mt-[20px]">
          <motion.div
            animate={controls}
            initial="hidden"
            variants={leftVariant(0.5)}
            className="max-w-[35%] xl:max-w-[15%] absolute left-[0px] bottom-[20%]"
            style={{ zIndex: 1 }}
          >
            <div id="lottie-left" style={{ width: 200, height: 200 }} />
            <img src="/images/products/left-bg.png" alt="background" />
          </motion.div>
          {/* Products */}
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={mainVariant(1)}
            className="custom-slick max-w-[calc(100vw)] lg:max-w-[1600px] relative"
            style={{ zIndex: 2 }}
          >
            <Slider {...settings}>
              {collection?.products?.nodes?.map((product: any) => {
                return <ProductBox key={product?.id} data={product} />;
              })}
            </Slider>
          </motion.div>
          {/* Right Mountains */}
          <motion.div
            animate={controls}
            initial="hidden"
            variants={rightVariant(0.5)}
            className="max-w-[35%] xl:max-w-[15%] absolute right-[0px] bottom-[20%]"
            style={{ zIndex: 1 }}
          >
            <div id="lottie-right" style={{ width: 200, height: 200 }} />
            <img src="/images/products/right-bg.png" alt="background" />
          </motion.div>
        </div>
      </div>
    </>
  );
};
