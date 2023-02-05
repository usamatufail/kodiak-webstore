import { useAnimation, motion } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from '@shopify/hydrogen';

const getVariant = (duration: number) => ({
  visible: { scale: 1, opacity: 1, transition: { duration } },
  hidden: { scale: 0.5, opacity: 0, transition: { duration } },
});

export const Available = () => {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  return (
    <section className="mt-[4px] h-[600px] relative flex items-center justify-center">
      <video autoPlay muted loop id="myVideo" className="absolute h-full w-full object-cover z-10">
        <source
          src="https://res.cloudinary.com/samtufail726/video/upload/q_auto/v1675559276/kodiak/Videos/Untitled_wml6iz.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute top-0 left-0 h-full w-full bg-black opacity-60 z-20" />
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={getVariant(0.5)}
        className="relative z-30 flex flex-col items-center max-w-[950px]"
      >
        <p className="text-center text-gray-300 text-[22px]">
          If you are looking for a special and unique gift or the perfect addition to your own kitchen, consider handmade knives. Handmade
          knives offer a level of craftsmanship that is simply unrivaled by regular store-bought models. Let&aspo;s explore why handmade
          knives are so special and how they can make a great addition to any kitchen.{' '}
        </p>
        <Link to="/shop/all">
          <button
            className={`h-[54px] flex items-center justify-center font-semibold capitalize
          text-[20px] bg-[rgba(255,255,255,0.6)] focus:bg-[rgba(255,255,255,0.8)]
          hover:bg-[rgba(255,255,255,0.8)] transition-all rounded-[8px] min-w-[200px] mt-[20px] col-span-2`}
          >
            shop now
          </button>
        </Link>
      </motion.div>
    </section>
  );
};
