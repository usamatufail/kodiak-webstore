import Slider from "@ant-design/react-slick";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";
import animationData from "../../assets/brids.json";
import lottie from "lottie-web/build/player/lottie_light";
import { Link } from "@shopify/hydrogen/client";
import { message } from "antd";
import { ProductOptionsProvider, AddToCartButton } from "@shopify/hydrogen";

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

const ProductCard = ({ data }: any) => {
  const [messageApi, contextHolder] = message.useMessage();

  const performed = useRef() as any;
  const buttonRef = useRef() as any;

  const handleCustomOnClick = async (event: any) => {
    if (performed.current) {
      performed.current = false;
      return;
    }

    event.preventDefault(); // stop default behaviour
    messageApi.open({
      type: "success",
      content: "Added to cart",
      duration: 1,
    });
    performed.current = true; // prevents retriggering
    buttonRef.current.click(); // trigger button default behaviour
  };
  return (
    <ProductOptionsProvider
      data={data}
      initialVariantId={data?.variants?.nodes?.[0]?.id}
    >
      <div className="max-w-[350px] m-auto ">
        {/* Image */}
        <div className="h-[350px] w-[350px] bg-[#DCDCDC] rounded-[30px] flex items-center justify-center product-box relative">
          <Link
            to={`/products/${data?.handle}`}
            className="object-cover w-full h-full rounded-[30px] shadow-md hover:shadow-xl transition-all"
          >
            <img
              src={data?.variants?.nodes?.[0]?.image?.url}
              alt="black shirt"
              className="object-cover w-full h-full rounded-[30px] shadow-md hover:shadow-xl transition-all"
            />
          </Link>
          {!data?.availableForSale ? (
            <p className="bg-black text-white absolute top-[1rem] right-[1rem] text-[1.1rem] hover:text-white rounded-[83px] hover:bg-gray-800 disabled:bg-opacity-90 inline-block font-medium text-center py-3 px-6 leading-none w-full border transition-all max-w-[140px]">
              Sold out
            </p>
          ) : (
            <></>
          )}
          <AddToCartButton
            variantId={data?.variants?.nodes?.[0]?.id}
            onClick={handleCustomOnClick as any}
            buttonRef={buttonRef}
            accessibleAddingToCartLabel="Adding Item to your cart"
            disabled={!data?.availableForSale}
            className="product-box__link transition-all absolute left-[50%] -translate-x-[50%] bottom-5"
          >
            <span className="bg-white text-black text-[1.1rem] hover:text-white rounded-[83px] hover:bg-gray-800 disabled:bg-opacity-90 inline-block font-medium text-center py-3 px-6 max-w-xl leading-none w-full border transition-all">
              Add to cart
            </span>
          </AddToCartButton>
        </div>
        {/* Text */}
        <Link
          to={`/products/${data?.handle}`}
          className="object-cover w-full h-full rounded-[30px] shadow-md hover:shadow-xl transition-all"
        >
          <div className="mt-[15px] flex justify-between">
            <div className="">
              <p className="text-[18px] font-[600] text-black">{data?.title}</p>
              <p className="text-[24px] font-[600] text-black">
                ${data?.variants?.nodes?.[0]?.priceV2?.amount}
              </p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/samtufail726/image/upload/v1678696771/kodiak/stars.png"
                alt="stars"
              />
            </div>
          </div>
        </Link>
      </div>
    </ProductOptionsProvider>
  );
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
                return <ProductCard key={product?.id} data={product} />;
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
