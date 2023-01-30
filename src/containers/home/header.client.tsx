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
    }
  }, [controls, inView]);

  return (
    <header
      className="min-h-[60vh] flex flex-col justify-center px-[20px] md:min-h-[78vh] md:px-[120px]"
      style={{ backgroundImage: 'url(/images/header/header.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <motion.h1
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={getVariant(0.5)}
        className="text-[70px] text-white leading-[1] font-bold md:text-[168px] md:max-w-[895px]"
      >
        Handmade Knives
      </motion.h1>
      <p className="font-bold text-white text-[22px] md:text-[36px]">
        <TypeAnimation sequence={['That embody the Alaskan spirit.']} speed={85} wrapper="span" cursor={false} repeat={0} />
        <br />
        <TypeAnimation
          sequence={[' ', 1000, 'Crafted with precision and ruggedness for those who seek adventure.']}
          speed={85}
          wrapper="span"
          cursor={true}
          repeat={0}
        />
      </p>
    </header>
  );
};
