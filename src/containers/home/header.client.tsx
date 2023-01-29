import { TypeAnimation } from 'react-type-animation';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const getVariant = (duration: number) => ({
  visible: { scale: 1, opacity: 1, transition: { duration } },
  hidden: { scale: 0.5, opacity: 0, transition: { duration } },
});

export const Header = () => {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <header
      className="min-h-[78vh] flex flex-col justify-center px-[290px]"
      style={{ backgroundImage: 'url(/images/header/header.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <motion.h1
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={getVariant(0.5)}
        className="max-w-[895px] text-[168px] text-white leading-[1] font-bold"
      >
        Handmade Knives
      </motion.h1>
      <p className="font-bold text-white text-[36px]">
        That embody the Alaskan spirit.
        <br />
        <TypeAnimation
          sequence={[
            'Crafted with',
            1000,
            'Crafted with precision and ruggedness',
            1000,
            'Crafted with precision and ruggedness for those who seek adventure.',
          ]}
          wrapper="span"
          cursor={true}
          repeat={0}
        />
      </p>
    </header>
  );
};
