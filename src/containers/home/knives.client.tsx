import { useAnimation, motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const parentVariant: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.5 } },
};

const topLeft: Variants = {
  initial: { y: 25, x: 25 },
  animate: { y: 0, x: 0 },
};

const bottomRight: Variants = {
  initial: { y: -25, x: -25 },
  animate: { y: 0, x: 0 },
};

const infoText: Variants = {
  initial: { opacity: 0, scale: 0, transition: { duration: 0.2 } },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const KniveBox = ({ background = '', image = '' }) => {
  const [hovered, setHovered] = useState(false);
  const [ref, inView] = useInView();
  const controls = useAnimation();
  const hoverControls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [controls, inView]);

  useEffect(() => {
    if (hovered) {
      hoverControls.start('animate');
    } else {
      hoverControls.start('initial');
    }
  }, [hovered]);

  return (
    <motion.div
      ref={ref}
      className="w-[full] h-[285px] bg-transparent skew-x-6  overflow-hidden relative md:w-[full] md:skew-x-12 flex items-center justify-center"
      initial="initial"
      animate={controls}
      variants={parentVariant}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      {/* Background */}
      <div className="bg-[#5c5c5c] w-[120%] 2xl:w-[150%] absolute left-[-35px] -skew-x-6 md:-skew-x-12">
        <img src={background} alt="blade-bg" className="opacity-90 h-[285px] w-full block object-cover relative" />
      </div>

      {/* Top Left */}
      <motion.div
        animate={hoverControls}
        variants={topLeft}
        transition={{ duration: 0.3 }}
        className="absolute top-[4px] left-[4px] h-[45px] w-[45px]"
      >
        <img src="/images/knives/top-left.png" />
      </motion.div>
      {/* Bottom Right */}
      <motion.div
        animate={hoverControls}
        variants={bottomRight}
        transition={{ duration: 0.3 }}
        className="absolute bottom-[-1px] right-[4px] h-[45px] w-[45px]"
      >
        <img src="/images/knives/bottom-right.png" />
      </motion.div>

      {/* Blade Image */}
      <div className="-skew-x-6 flex flex-col items-center justify-between md:-skew-x-12">
        <motion.div variants={infoText} className="flex justify-center items-center relative min-h-[1px] w-full cursor-pointer">
          <img
            src={image}
            alt="blade-1"
            className="max-w-[279.43px] transition-all duration-300"
            style={{ scale: hovered ? '1.125' : '0.75', filter: 'drop-shadow(2px 4px 6px black)' }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export const Knives = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)',
  });

  useEffect(() => {
    setIsDesktop(isDesktopOrLaptop);
  }, [isDesktopOrLaptop]);

  return (
    <div
      className="min-h-[639px] px-[50px] py-[40px] text-white grid grid-cols-1 gap-[12px] items-center md:grid-cols-4 md:py-[unset] md:px-[90px] md:gap-[20px]"
      style={{ backgroundImage: 'url(/images/knives/background.png)' }}
    >
      {isDesktop ? (
        <>
          <KniveBox background="/images/knives/blade-1-bg.png" image="/images/knives/1st.png" />
          <KniveBox background="/images/knives/blade-3-bg.png" image="/images/knives/3rd.png" />
          <KniveBox background="/images/knives/blade-2-bg.png" image="/images/knives/2nd.png" />
          <KniveBox background="/images/knives/blade-4-bg.png" image="/images/knives/4th.png" />
        </>
      ) : (
        <>
          <KniveBox background="/images/knives/blade-4-bg.png" image="/images/knives/4th.png" />
          <button
            className={`h-[54px] flex items-center justify-center font-[900] uppercase text-black
      text-[20px] bg-[rgba(255,255,255,0.6)] focus:bg-[rgba(255,255,255,0.8)]
      hover:bg-[rgba(255,255,255,0.8)] transition-all rounded-[8px] mt-[-145px] col-span-2`}
          >
            SHOP NOW
          </button>
        </>
      )}
    </div>
  );
};
