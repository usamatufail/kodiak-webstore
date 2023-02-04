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
      className="w-full mt-[4px] text-center grid grid-cols-2 items-center justify-start px-[300px] overflow-hidden"
      ref={ref}
      style={{
        backgroundImage:
          'url(https://res.cloudinary.com/samtufail726/image/upload/b_black,o_40/v1675508797/kodiak/About/DSC02050_1_tptii0.jpg)',
        backgroundPosition: 'center',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        minHeight: '450px',
        overflow: 'hidden',
      }}
    >
      <motion.div initial="initial" animate={controls} variants={leftVariant} className="flex flex-col items-start">
        <h2 className="text-white text-[52px] mb-[30px]">Follow us on social</h2>
        <a href="https://www.instagram.com/kodiak_knife_co/" target="_blank">
          <button className="text-[18px] text-black bg-[rgba(255,255,255,0.7)] px-[40px] py-[16px] rounded-[8px] titlecase font-semibold transition-all hover:bg-[rgba(255,255,255,0.9)]">
            Go to Insta Profile
          </button>
        </a>
      </motion.div>
      <motion.div initial="initial" animate={controls} variants={rightVariant} className="flex justify-center">
        <a href="https://www.instagram.com/kodiak_knife_co/" target="_blank">
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
