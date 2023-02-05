import { motion, Variants, useAnimation } from 'framer-motion';
import { useUrl } from '@shopify/hydrogen';
import { useEffect } from 'react';
// import { useMediaQuery } from 'react-responsive';

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

export const Banner = ({
  backgroundImg = '/images/banner/hunting-knives.png',
  heading = 'Heading Knive',
  height = '420px',
  imageStyles = {},
}) => {
  // const [isDesktop, setIsDesktop] = useState(false);
  // const isDesktopOrLaptop = useMediaQuery({
  //   query: '(min-width: 768px)',
  // });
  const url = useUrl();
  const controls = useAnimation();

  useEffect(() => {
    controls.start('animate');
  }, [url]);

  // useEffect(() => {
  //   setIsDesktop(isDesktopOrLaptop);
  // }, [isDesktopOrLaptop]);

  return (
    <motion.div
      className="w-full flex items-center justify-center relative overflow-hidden"
      initial="initial"
      key={backgroundImg}
      animate={controls}
      variants={parentVariant}
      style={{ height }}
      // style={{ height: isDesktop ? height : 150 }}
    >
      <motion.img
        initial="initial"
        animate={controls}
        variants={imageVariant}
        key={backgroundImg}
        transition={{ type: 'tween', delay: 0, duration: 1 }}
        style={imageStyles}
        src={backgroundImg}
        className="z-10 absolute top-0 left-0 object-cover w-full h-full"
      />
      <div className="absolute z-20 w-full h-full top-0 left-0 bg-black opacity-40" />
      <motion.h2
        variants={textVariant}
        initial="initial"
        animate={controls}
        key={backgroundImg}
        transition={{ type: 'tween', delay: 0.2, duration: 0.5 }}
        className="relative z-30 leading-[1.12] text-white text-[58px] font-bold text-center md:text-[77px] md:font-[900]"
      >
        {heading}
      </motion.h2>
    </motion.div>
  );
};
