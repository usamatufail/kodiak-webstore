import { useAnimation, motion } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from '@shopify/hydrogen';

const getVariant = (duration: number) => ({
  visible: { scale: 1, opacity: 1, transition: { duration } },
  hidden: { scale: 0.5, opacity: 0, transition: { duration } },
});

// const arr = [1, 2, 3, 4, 5];

// const card1 = arr?.map((arr) => `/images/available/available1-${arr}.png`);
// const card2 = arr?.map((arr) => `/images/available/available2-${arr}.png`);

// const ShopCard = ({ images, background }: { images: string[]; background: string }) => {
//   const [ref, inView] = useInView();
//   const controls = useAnimation();

//   useEffect(() => {
//     if (inView) {
//       controls.start('visible');
//     }
//   }, [controls, inView]);
//   return (
//     <motion.div
//       ref={ref}
//       animate={controls}
//       initial="hidden"
//       variants={getVariant(0.5)}
//       className={`py-[56px] px-[25px] flex flex-col justify-between min-h-[553px] rounded-[30px] bg-center bg-no-repeat bg-cover`}
//       style={{ backgroundImage: `linear-gradient(0deg, rgba(90, 41, 17, 0), rgba(90, 41, 17, 0)), url(${background})` }}
//     >
//       <div />
//       <div className="flex items-center justify-center">
//         <button className="bg-white text-black rounded-[7px] py-[24px] px-[45px] text-[18px]">Shop Now</button>
//       </div>
//       <div className="grid grid-cols-2 mt-[50px] gap-[20px] md:grid-cols-5 md:gap-[35px]">
//         {images.map((image) => {
//           return (
//             <div key={image} className="cursor-pointer">
//               <img src={image} alt="available image" />
//             </div>
//           );
//         })}
//       </div>
//     </motion.div>
//   );
// };

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
          src="https://res.cloudinary.com/samtufail726/video/upload/q_auto/v1675517765/kodiak/Videos/videoblocks-plasma-cutting-cnc-machine_r6bnr045q_1080__D_pvgnzx.mp4"
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
      {/* <h1 className="text-[#126149] text-[52px] font-bold leading-[1.12] text-center md:text-[77px] md:font-[900] md:leading-[unset]">
        Available Blades
      </h1>
      <div className=" flex flex-col gap-[20px] px-[12px] mt-[25px] md:grid md:grid-cols-2 md:gap-[34px] md:px-[70px] md:mt-[96px]">
        <ShopCard images={card1} background="/images/available/available1.png" />
        <ShopCard images={card2} background="/images/available/available2.png" />
      </div> */}
    </section>
  );
};
