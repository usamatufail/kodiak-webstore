import { motion } from 'framer-motion';
import { Link } from '@shopify/hydrogen';
export const AboutUs = () => {
  return (
    <div
      className="w-full mt-[4px] text-center pb-[40px]"
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
        className="text-[24px] max-w-[950px] mx-auto text-white py-[45px] whitespace-pre-wrap"
      >
        {`At Kodiak Knife Company, we strive to provide top-notch, functional knives to outdoor enthusiasts and those who appreciate rugged, adventurous style. With our focus on quality and customer satisfaction, we aim to make your shopping experience a memorable one.

Our target audience includes hunters, hikers, backpackers, prepper enthusiasts, and tactical gear users, and we offer designs for each specific need. Inspired by the Alaskan spirit, our aesthetic blends rustic and modern elements to create a warm and adventurous feel.

We want our website visitors to feel inspired for their next adventure and confident in their gear. With our use of earth tones, leather, metal, and wood, we aim to evoke a natural and adventurous vibe. Keywords that best represent our service include Adventure, Knives, and Hiking.

Our values and mission center around delivering excellent customer service and ensuring that each product is made with care and attention to detail. We aim to exceed your expectations by providing a natural, outdoor aesthetic and a user-friendly experience.

Our target audience is made up of outdoor enthusiasts and those who appreciate the adventurous lifestyle. We offer designs for different types of outdoor activities, including big game hunting, waterfowl hunting, fishing, and more.

We hope to exceed your expectations by delivering a high-quality website that showcases our passion for adventure and our commitment to crafting reliable, functional knives.
`}
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
