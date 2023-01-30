import { useAnimation, motion } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const getVariant = (duration: number) => ({
  visible: { scale: 1, opacity: 1, transition: { duration } },
  hidden: { scale: 0.5, opacity: 0, transition: { duration } },
});

const arr = [1, 2, 3, 4, 5];

const card1 = arr?.map((arr) => `/images/available/available1-${arr}.png`);
const card2 = arr?.map((arr) => `/images/available/available2-${arr}.png`);

const ShopCard = ({ images, background }: { images: string[]; background: string }) => {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={getVariant(0.5)}
      className={`py-[56px] px-[25px] flex flex-col justify-between min-h-[553px] rounded-[30px] bg-center bg-no-repeat bg-cover`}
      style={{ backgroundImage: `linear-gradient(0deg, rgba(90, 41, 17, 0), rgba(90, 41, 17, 0)), url(${background})` }}
    >
      <div />
      <div className="flex items-center justify-center">
        <button className="bg-white text-black rounded-[7px] py-[24px] px-[45px] text-[18px]">Shop Now</button>
      </div>
      <div className="grid grid-cols-2 mt-[50px] gap-[20px] md:grid-cols-5 md:gap-[35px]">
        {images.map((image) => {
          return (
            <div key={image} className="cursor-pointer">
              <img src={image} alt="available image" />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export const Available = () => {
  return (
    <section className="mt-[35px] md:mt-[unset]">
      <h1 className="text-[#126149] text-[52px] font-bold leading-[1.12] text-center md:text-[77px] md:font-[900] md:leading-[unset]">
        Available Blades
      </h1>
      <div className=" flex flex-col gap-[20px] px-[12px] mt-[25px] md:grid md:grid-cols-2 md:gap-[34px] md:px-[70px] md:mt-[96px]">
        <ShopCard images={card1} background="/images/available/available1.png" />
        <ShopCard images={card2} background="/images/available/available2.png" />
      </div>
    </section>
  );
};
