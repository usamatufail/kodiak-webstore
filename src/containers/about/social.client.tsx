import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const leftVariant = {
  initial: { x: -200, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

const rightVariant = {
  initial: { x: 200, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

export const Social = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [inView, controls]);

  return (
    <div
      className="w-full mt-[4px] text-center grid grid-cols-1 md:grid-cols-2 items-center justify-start px-[20px] md:px-[300px] overflow-hidden"
      ref={ref}
      style={{
        backgroundImage:
          'url(https://res.cloudinary.com/samtufail726/image/upload/b_black,o_40/v1675508797/kodiak/About/DSC02050_1_tptii0.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '450px',
        overflow: 'hidden',
      }}
    >
      <motion.div initial="initial" animate={controls} variants={leftVariant} className="flex flex-col items-center md:items-start">
        <h2 className="hidden md:block text-white text-[44px] font-bold leading-[1.11] text-left mb-[4px]">
          Join the adventure and stay in the know by following us on social media!
        </h2>
        <h2 className="md:hidden text-white text-[44px] font-bold leading-[1.11] text-center mb-[4px] pt-[20px]">Follow us on social</h2>
        <p className="text-white text-[16px] md:text-[18px] text-center md:text-left mb-[30px]">
          Stay ahead of the curve and get exclusive access to updates and content from Kodiak Knife Company, your trusted source for
          high-quality, rugged knives.
        </p>
        <a href="https://www.instagram.com/kodiakknifeco/" target="_blank">
          <button className="text-[18px] text-black bg-[rgba(255,255,255,0.7)] px-[40px] py-[16px] rounded-[8px] titlecase font-semibold transition-all hover:bg-[rgba(255,255,255,0.9)]">
            Go to Insta Profile
          </button>
        </a>
      </motion.div>
      <motion.div
        initial="initial"
        animate={controls}
        variants={rightVariant}
        className="flex justify-center mt-[40px] pb-[40px] md:mt-[0px] md:pb-[0px]"
      >
        <a href="https://www.instagram.com/kodiakknifeco/" target="_blank">
          <img
            src="https://res.cloudinary.com/samtufail726/image/upload/v1675509800/kodiak/About/Group_993_feosju.png"
            alt="instagram"
            className="max-w-[250px] h-[auto]"
            style={{ filter: 'drop-shadow(2px 4px 14px white)' }}
          />
        </a>
      </motion.div>
    </div>
  );
};
