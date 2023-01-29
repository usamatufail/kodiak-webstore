import { useAnimation, motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const parentVariant: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.75 } },
};

const childVariant: Variants = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
};

const bladeVariant: Variants = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
};

const KniveBox = ({
  background = '',
  infoTextColor = '',
  image = '',
  largeImage = false,
  lineProps = {
    width: '35%',
    rotate: '45deg',
    bottom: '110px',
    left: '65px',
  },
}) => {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="w-[375px] h-[285px] bg-gray-400 skew-x-12 overflow-hidden relative"
      initial="initial"
      animate={controls}
      variants={parentVariant}
    >
      {/* Background */}
      <div className="-skew-x-12 w-[120%] absolute left-[-35px]">
        <img src={background} alt="blade-bg" className="h-[285px] w-[445px] block object-cover relative opacity-75" />
      </div>

      {/* Top Left */}
      <motion.div variants={bladeVariant} transition={{ duration: 0.3 }} className="absolute top-[4px] left-[4px] h-[45px] w-[45px]">
        <img src="/images/knives/top-left.png" />
      </motion.div>
      {/* Bottom Right */}
      <motion.div variants={bladeVariant} transition={{ duration: 0.3 }} className="absolute bottom-[-1px] right-[4px] h-[45px] w-[45px]">
        <img src="/images/knives/bottom-right.png" />
      </motion.div>

      {/* Blade Name and Info */}
      <div className="-skew-x-12 flex flex-col items-center justify-between min-h-[285px]">
        <div />
        <motion.div
          variants={bladeVariant}
          transition={{ duration: 1 }}
          className="flex justify-center items-center relative min-h-[1px] w-full"
        >
          <img src={image} alt="blade-1" className="w-[75%]" style={{ position: largeImage ? 'absolute' : 'static', right: '-9px' }} />
        </motion.div>
        <motion.p
          variants={bladeVariant}
          transition={{ duration: 1 }}
          className="pb-[20px] tracking-wider text-[36px] font-[700]"
          style={{ color: infoTextColor ? infoTextColor : '#fff' }}
        >
          [INFO]
        </motion.p>
      </div>

      {/* Line */}
      <motion.div
        variants={childVariant}
        transition={{ duration: 1 }}
        className="w-[70%] h-[3px] bg-black absolute"
        style={{ width: lineProps.width, rotate: lineProps.rotate, bottom: lineProps.bottom, left: lineProps.left }}
      ></motion.div>
    </motion.div>
  );
};

export const Knives = () => {
  return (
    <div
      className="min-h-[639px] px-[90px] text-white grid grid-cols-4 items-center"
      style={{ backgroundImage: 'url(/images/knives/background.png)' }}
    >
      <KniveBox background="/images/knives/blade-1-bg.png" infoTextColor="black" image="/images/knives/blade-1.png" />
      <KniveBox
        background="/images/knives/blade-2-bg.png"
        infoTextColor="black"
        image="/images/knives/blade-2.png"
        largeImage
        lineProps={{ width: '51%', rotate: '136deg', bottom: '133px', left: '164px' }}
      />
      <KniveBox background="/images/knives/blade-3-bg.png" image="/images/knives/blade-3.png" />
      <KniveBox
        background="/images/knives/blade-4-bg.png"
        image="/images/knives/blade-4.png"
        lineProps={{ width: '41%', rotate: '124deg', bottom: '130px', left: '123px' }}
      />
    </div>
  );
};
