import { motion } from 'framer-motion';
import { Link } from '@shopify/hydrogen';
export const AboutUs = () => {
  return (
    <div
      className="w-full mt-[4px] text-center"
      style={{
        backgroundImage:
          'url(https://res.cloudinary.com/samtufail726/image/upload/b_black,o_40/v1675505545/kodiak/About/DSC02558_z7tmka.webp)',
        backgroundPosition: '-200px -100px',
        backgroundRepeat: 'no-repeat',
        minHeight: '701px',
        overflow: 'hidden',
      }}
    >
      <motion.p
        variants={{ initial: { opacity: 0, y: -200 }, animate: { opacity: 1, y: 0 } }}
        transition={{ delay: 0.1, duration: 0.5 }}
        initial="initial"
        animate="animate"
        className="text-[24px] max-w-[950px] mx-auto text-white py-[45px]"
      >
        We started Kodiak Knife Company with one goal in mind: providing a high-quality, smart, and reliable knife. Our passion for
        excellence has driven us from the beginning, and continues to drive us into the future. We know that every product counts, and we
        aim to make the entire shopping experience as rewarding as possible.
      </motion.p>
      <Link to="/contact">
        <motion.button
          variants={{ initial: { opacity: 0, scale: 0 }, animate: { opacity: 1, scale: 1 } }}
          transition={{ delay: 0.6, duration: 0.5 }}
          initial="initial"
          animate="animate"
          className="text-[24px] mx-auto text-black bg-[rgba(255,255,255,0.7)] px-[40px] py-[20px] rounded-[8px] titlecase font-[900] transition-all hover:bg-[rgba(255,255,255,0.9)]"
        >
          Contact Support
        </motion.button>
      </Link>
    </div>
  );
};
