import { useAnimation, motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react';
import { AddToCartButton } from '@shopify/hydrogen';
import { message } from 'antd';
import { Link } from '@shopify/hydrogen/client';

const parentVariant: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 1.2 } },
};

const imageVariant: Variants = {
  initial: { scale: 1.5 },
  animate: { scale: 1 },
};

const textVariant: Variants = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
};

export const ShopCard = ({
  img = '/images/shop-all/sharpening-stone.png',
  title = 'Sharpening Stone',
  txt = `'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,`,
  variantId = '',
  handle = '',
  availableForSale = true,
}: any) => {
  const [messageApi, contextHolder] = message.useMessage();
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [controls, inView]);

  const performed = useRef() as any;
  const buttonRef = useRef() as any;

  const handleCustomOnClick = async (event: any) => {
    if (performed.current) {
      performed.current = false;
      return;
    }

    event.preventDefault(); // stop default behaviour
    messageApi.open({
      type: 'success',
      content: 'Added to cart',
      duration: 1,
    });
    performed.current = true; // prevents retriggering
    buttonRef.current.click(); // trigger button default behaviour
  };

  return (
    <>
      {contextHolder}
      <motion.div className="flex flex-col" initial="initial" animate={controls} ref={ref} variants={parentVariant}>
        <Link to={`/products/${handle}`}>
          <div className="bg-[#DCDCDC] rounded-[40px] w-full h-[250px] md:h-[650px]">
            <motion.img
              src={img}
              alt={title}
              className="w-[100%] h-[100%] rounded-[35px] object-cover"
              initial="initial"
              animate={controls}
              variants={imageVariant}
              transition={{ type: 'tween', delay: 0, duration: 0.5 }}
            />
          </div>
        </Link>
        <div className="flex flex-col gap-[18px]">
          <motion.h1
            variants={textVariant}
            initial="initial"
            animate={controls}
            transition={{ type: 'keyframes', delay: 0.2, duration: 0.5 }}
            className="text-[26px] font-[700] text-white mt-[10px] mb-[0px] md:mb-[29px] md:mt-[35px] uppercase"
          >
            {title}
          </motion.h1>
          <motion.p
            variants={textVariant}
            initial="initial"
            animate={controls}
            transition={{ type: 'keyframes', delay: 0.2, duration: 0.5 }}
            className="text-[19px] font-[400] text-white"
          >
            {txt}
          </motion.p>
          <div className="flex flex-col 2xl:flex-row gap-4">
            <AddToCartButton
              variantId={variantId}
              onClick={handleCustomOnClick as any}
              buttonRef={buttonRef}
              accessibleAddingToCartLabel="Adding Item to your cart"
              disabled={!availableForSale}
            >
              <span
                className="bg-white border-black text-black hover:text-white hover:bg-gray-800 disabled:bg-opacity-90 inline-block rounded-sm font-medium text-center py-3 px-6 max-w-xl leading-none w-full border transition-all"
                style={availableForSale ? {} : { opacity: 0.5 }}
              >
                {availableForSale ? `Add to cart` : `Returning Soon`}
              </span>
            </AddToCartButton>
            <Link to={`/products/${handle}`}>
              <button className="bg-white border-black text-black hover:text-white hover:bg-gray-800 disabled:bg-opacity-90 inline-block rounded-sm font-medium text-center py-3 px-6 max-w-xl leading-none w-full border transition-all">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};
