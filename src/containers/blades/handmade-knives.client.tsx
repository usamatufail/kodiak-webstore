import { useEffect } from 'react';
import { DetailsBanner } from '../../components';
import lottie from 'lottie-web/build/player/lottie_light';
import animationData from '../../assets/brids.json';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const leftVariant = (duration: number) => ({
  visible: { x: 0, opacity: 1, transition: { duration } },
  hidden: { x: -200, opacity: 0, transition: { duration } },
});
const rightVariant = (duration: number) => ({
  visible: { x: 0, opacity: 1, transition: { duration } },
  hidden: { x: 200, opacity: 0, transition: { duration } },
});

export const HandmadeKnives = ({
  heading = 'Handmade Knives',
  description = `If you are looking for a special and unique gift or the perfect addition to your own kitchen, consider handmade knives. Handmade knives offer a level of craftsmanship that is simply unrivaled by regular store-bought models. Let's explore why handmade knives are so special and how they can make a great addition to any kitchen.`,
  texts = {
    h1: '',
    h1p: ``,
    h2: '',
    h2p: ``,
    h3: ``,
    h3p: ``,
  },
}) => {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector(`#handmade-knives-left`) as Element,
      animationData: animationData,
      renderer: 'svg', // "canvas", "html"
      loop: true, // boolean
      autoplay: true, // boolean
    });
  }, []);

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector(`#handmade-knives-right`) as Element,
      animationData: animationData,
      renderer: 'svg', // "canvas", "html"
      loop: true, // boolean
      autoplay: true, // boolean
    });
  }, []);
  return (
    <div id={`handmade-knives`} className="overflow-hidden">
      {/* Image */}
      <DetailsBanner
        heading={heading}
        backgroundImg="https://res.cloudinary.com/samtufail726/image/upload/f_auto/v1675484446/kodiak/Blades/DSC02473_wdpygj.jpg"
        description={description}
      />
      {/* Text with Mountains */}
      <div className="relative" ref={ref}>
        {/* Top Left Mountains */}
        <motion.div
          animate={controls}
          initial="hidden"
          variants={leftVariant(0.5)}
          className="max-w-[15%] absolute left-[0px] top-[-113px] z-10"
        >
          <div id={`handmade-knives-left`} style={{ width: 200, height: 200 }} />
          <img src="/images/products/left-bg.png" alt="background" className="opacity-40 z-10" />
        </motion.div>
        {/* Bottom Right Mountains */}
        <motion.div
          animate={controls}
          initial="hidden"
          variants={rightVariant(0.5)}
          className="max-w-[35%] xl:max-w-[15%] absolute right-[0px] bottom-[40px] z-10"
        >
          <div id={`handmade-knives-right`} style={{ width: 200, height: 200 }} />
          <img src="/images/products/right-bg.png" alt="background" className="opacity-40 z-10" />
        </motion.div>
        <div className="text-center relative z-20 px-[250px] flex flex-col gap-[20px] mt-[40px]">
          <h2 className="text-[40px] font-bold">{texts.h1}</h2>
          <p className="text-[19px] whitespace-pre-wrap">{texts.h1p}</p>
          {texts.h2 ? <hr /> : <></>}
          <h2 className="text-[40px] font-bold">{texts.h2}</h2>
          <p className="text-[19px] whitespace-pre-wrap">{texts.h2p}</p>
          {texts.h3 ? <hr /> : <></>}
          <h2 className="text-[40px] font-bold">{texts.h3}</h2>
          <p className="text-[19px] whitespace-pre-wrap">{texts.h3p}</p>
        </div>
      </div>
      {/* 3 Layers of Image */}
    </div>
  );
};
