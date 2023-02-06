import { TypeAnimation } from 'react-type-animation';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const getVariant = (duration: number) => ({
  visible: { scale: 1, opacity: 1, transition: { duration } },
  hidden: { scale: 0.5, opacity: 0, transition: { duration } },
});

const images = [
  // 'https://res.cloudinary.com/samtufail726/image/upload/q_auto,b_black,o_50/v1675465118/kodiak/1_n9rg3y.png',
  // 'https://res.cloudinary.com/samtufail726/image/upload/q_auto,b_black,o_50/v1675465116/kodiak/DSC03088-Edit_vwzexh.png',
  'https://res.cloudinary.com/samtufail726/image/upload/q_auto,b_black,o_40/v1675465741/kodiak/DSC02328_ik8rcy.jpg',
  'https://res.cloudinary.com/samtufail726/image/upload/q_auto,b_black,o_40/v1675465743/kodiak/DSC02452_ggxiqy.jpg',
  'https://res.cloudinary.com/samtufail726/image/upload/q_auto,b_black,o_40/v1675465742/kodiak/DSC02277_y6krg4.jpg',
];

export const Header = () => {
  const [img, setImg] = useState(images[0]);
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  useEffect(() => {
    const random = Math.floor(Math.random() * images.length);
    setImg(images[random]);
  }, []);

  return (
    <header
      className="min-h-[60vh] flex flex-col justify-center px-[20px] md:min-h-[78vh] md:px-[160px] relative"
      ref={ref}
      style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="relative" style={{ zIndex: 1 }}>
        <motion.h1
          animate={controls}
          initial="hidden"
          variants={getVariant(0.5)}
          className="text-[55px] text-white leading-[1] font-bold md:text-[168px] md:max-w-[895px]"
        >
          Handmade Knives
        </motion.h1>
        <p className="font-bold text-white text-[18px] md:text-[36px]">
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
