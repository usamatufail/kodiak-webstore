import { useAnimation, motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

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
  price = '12.00',
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [controls, inView]);
  return (
    <motion.div className="flex flex-col" initial="initial" animate={controls} ref={ref} variants={parentVariant}>
      <div className="bg-[#DCDCDC] rounded-[40px] w-full h-[650px]">
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
      <div className="flex flex-col gap-[18px]">
        <motion.h1
          variants={textVariant}
          initial="initial"
          animate={controls}
          transition={{ type: 'keyframes', delay: 0.2, duration: 0.5 }}
          className="text-[26px] font-[700] text-white mt-[35px] uppercase"
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
        <div className="flex">
          <button className="h-[75px] px-[45px] text-[24px] font-[900] text-black bg-white rounded-[6px]">${price}</button>
        </div>
      </div>
    </motion.div>
  );
};
