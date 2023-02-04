import { TypeAnimation } from 'react-type-animation';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const getVariant = (duration: number) => ({
  visible: { scale: 1, opacity: 1, transition: { duration } },
  hidden: { scale: 0.5, opacity: 0, transition: { duration } },
});

const images = [
  'https://res.cloudinary.com/samtufail726/image/upload/f_auto,q_auto/v1675465118/kodiak/1_n9rg3y.webp',
  'https://res.cloudinary.com/samtufail726/image/upload/f_auto,q_auto/v1675465116/kodiak/DSC03088-Edit_vwzexh.webp',
  'https://res.cloudinary.com/samtufail726/image/upload/f_auto,q_auto/v1675465741/kodiak/DSC02328_ik8rcy.jpg',
  'https://res.cloudinary.com/samtufail726/image/upload/f_auto,q_auto/v1675465743/kodiak/DSC02452_ggxiqy.jpg',
  'https://res.cloudinary.com/samtufail726/image/upload/f_auto,q_auto/v1675465742/kodiak/DSC02277_y6krg4.jpg',
];

const random = Math.floor(Math.random() * images.length);

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
      className="min-h-[60vh] flex flex-col justify-center px-[20px] md:min-h-[78vh] md:px-[160px] relative"
      style={{ backgroundImage: `url(${images[random]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Overlay */}
      <div className="absolute top-0 left-0 h-full w-full bg-black opacity-40" />
      <div className="relative z-20">
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
      </div>
    </header>
  );
};
