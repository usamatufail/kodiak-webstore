import { Link } from "@shopify/hydrogen";
import { motion } from "framer-motion";
export const ContactUs = () => {
  return (
    <div className="w-full mt-[4px] pb-[45px] md:pb-[40px] px-[20px] min-h-[800px]  grid md:grid-cols-2 justify-center items-center gap-[180px] md:px-[280px]">
      <motion.div
        variants={{
          initial: { opacity: 0, y: -200 },
          animate: { opacity: 1, y: 0 },
        }}
        transition={{ delay: 0.1, duration: 0.5 }}
        initial="initial"
        animate="animate"
        className="hidden md:block"
      >
        <img
          src="https://res.cloudinary.com/samtufail726/image/upload/v1678477372/kodiak/About/contact.png"
          alt="contact"
          className="hidden md:block"
        />
      </motion.div>

      <motion.div
        variants={{
          initial: { opacity: 0, y: -200 },
          animate: { opacity: 1, y: 0 },
        }}
        transition={{ delay: 0.1, duration: 0.5 }}
        initial="initial"
        animate="animate"
        className="md:max-w-[500px] flex flex-col gap-[20px]"
      >
        <p className="text-[18px] font-[600] text-black mb-[0px]">
          We strive to provide top-notch, functional knives to outdoor
          enthusiasts and those who appreciate rugged, adventurous style. With
          our focus on quality and customer satisfaction, we aim to make your
          shopping experience a memorable one.
        </p>
        <Link to="/contact">
          <button
            className={`h-[58px] flex items-center justify-center font-[600] border-[1px] border-black border-solid px-[60px]
          text-[18px] bg-transparent focus:bg-[rgba(255,255,255,0.8)]
          hover:bg-[rgba(255,255,255,0.8)] transition-all rounded-[80px] mt-[20px]`}
          >
            Contact Us
          </button>
        </Link>
      </motion.div>
    </div>
  );
};
