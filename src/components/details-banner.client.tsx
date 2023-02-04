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

export const DetailsBanner = ({
  backgroundImg = '/images/banner/hunting-knives.png',
  heading = '',
  description = '',
  minHeight = '350px',
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="w-full flex flex-col items-center justify-center relative overflow-hidden"
      style={{ minHeight }}
      initial="initial"
      animate={controls}
      ref={ref}
      variants={parentVariant}
    >
      <motion.img
        initial="initial"
        animate={controls}
        variants={imageVariant}
        transition={{ type: 'keyframes', delay: 0, duration: 0.5 }}
        src={backgroundImg}
        className="z-10 absolute top-0 left-0 object-cover w-full h-full"
      />
      {heading ? <div className="absolute z-20 w-full h-full top-0 left-0 bg-black opacity-70" /> : <></>}
      <motion.h2
        variants={textVariant}
        initial="initial"
        animate={controls}
        transition={{ type: 'keyframes', delay: 0.2, duration: 0.5 }}
        className="relative z-30 leading-[1.12] text-white text-[58px] font-bold text-center md:text-[77px] md:font-[900]"
      >
        {heading}
      </motion.h2>
      <motion.p
        variants={textVariant}
        initial="initial"
        animate={controls}
        transition={{ type: 'keyframes', delay: 0.2, duration: 0.5 }}
        className="relative z-30 text-white text-[20px] text-center mt-[10px] px-[300px]"
      >
        {description}
      </motion.p>
    </motion.div>
  );
};
