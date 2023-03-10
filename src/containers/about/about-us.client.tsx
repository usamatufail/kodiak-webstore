import { motion } from "framer-motion";
export const AboutUs = () => {
  return (
    <div
      className="w-full mt-[4px] pb-[45px] md:pb-[40px] px-[20px] min-h-[860px] bg-no-repeat bg-cover grid md:grid-cols-2 justify-center items-center gap-[180px] md:px-[280px]"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/samtufail726/image/upload/v1678470000/kodiak/About/company.png)",
      }}
    >
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
        <h1 className="text-[48px] font-[700] text-black">
          At Kodiac F.A.S.T Company,
        </h1>
        <p className="text-[18px] font-[600] text-black">
          We strive to provide top-notch, functional knives to outdoor
          enthusiasts and those who appreciate rugged, adventurous style. With
          our focus on quality and customer satisfaction, we aim to make your
          shopping experience a memorable one.
        </p>
      </motion.div>

      <motion.div
        variants={{
          initial: { opacity: 0, y: -200 },
          animate: { opacity: 1, y: 0 },
        }}
        transition={{ delay: 0.1, duration: 0.5 }}
        initial="initial"
        animate="animate"
      >
        <img
          src="https://res.cloudinary.com/samtufail726/image/upload/v1678470141/kodiak/About/man.png"
          alt="man"
          className="hidden md:block"
        />
      </motion.div>
    </div>
  );
};
