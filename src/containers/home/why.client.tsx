import { TypeAnimation } from 'react-type-animation';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';

const getVariant = (duration: number) => ({
  visible: { scale: 1, opacity: 1, transition: { duration } },
  hidden: { scale: 0.5, opacity: 0, transition: { duration } },
});

export const Why = () => {
  const [ref, inView] = useInView();
  const controls = useAnimation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setVisible(true);
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section
      ref={ref}
      className="mt-[64px] min-h-[700px] bg-cover bg-center flex flex-col items-center justify-center gap-[40px]"
      style={{ background: 'url(/images/why/background.png)' }}
    >
      {visible ? (
        <h1 className="text-[77px] font-[900] text-white leadig-[1]">
          <TypeAnimation sequence={['Why Kodiak']} wrapper="span" cursor={false} repeat={0} />
        </h1>
      ) : (
        <></>
      )}
      {visible ? (
        <p className="max-w-[1180px] text-white text-center text-[19px] font-[400]">
          <TypeAnimation
            sequence={[
              1000,
              `We started Kodiak Knife Company with one goal in mind: providing a high-quality, smart, and reliable knife. Our passion for
        excellence has driven us from the beginning, and continues to drive us into the future. We know that every product counts, and we
        aim to make the entire shopping experience as rewarding as possible.`,
            ]}
            wrapper="span"
            cursor={true}
            repeat={0}
          />
        </p>
      ) : (
        <></>
      )}
      <motion.div ref={ref} animate={controls} initial="hidden" variants={getVariant(0.5)}>
        <button className="py-[24px] px-[40px] text-[#126149] tracking-[0.1em] text-[18px] bg-white rounded-md">Read More</button>
      </motion.div>
    </section>
  );
};
