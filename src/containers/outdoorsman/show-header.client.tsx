import { motion } from "framer-motion";
export const ShowHeader = () => {
  return (
    <div
      className="w-full mt-[4px] pb-[45px] md:pb-[40px] px-[20px] py-[30px] bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url(/cloudinary/ma/company.png)",
      }}
    >
      <div className="grid md:grid-cols-2 justify-center items-center gap-[180px] md:px-[280px] mt-[30px]">
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
          <h1 className="text-[48px] font-[700] text-black mb-[0px]">
            At Kodiak,
          </h1>
          <p className="text-[18px] font-[600] text-black mb-[0px]">
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
          className="hidden md:block"
        >
          <img
            src="/cloudinary/about/man.png"
            alt="man"
            className="hidden md:block max-w-[500px]"
          />
        </motion.div>
      </div>
    </div>
  );
};
