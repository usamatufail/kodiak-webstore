import { motion } from "framer-motion";
import { Link } from "@shopify/hydrogen";

export const ProductCare = () => {
  return (
    <div
      className="w-full mt-[4px] text-center pb-[45px] md:pb-[40px] px-[20px]"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/samtufail726/image/upload/b_black,o_40/v1675505545/kodiak/About/DSC02558_z7tmka.png)",
        backgroundPosition: "-200px -100px",
        backgroundRepeat: "no-repeat",
        minHeight: "701px",
        overflow: "hidden",
      }}
    >
      <h2 className="pt-[20px] md:pt-[45px] text-[45px] font-[700] text-white mb-[20px]">
        Maintenance & Care
      </h2>
      <motion.p
        variants={{
          initial: { opacity: 0, y: -200 },
          animate: { opacity: 1, y: 0 },
        }}
        transition={{ delay: 0.1, duration: 0.5 }}
        initial="initial"
        animate="animate"
        className="text-[16px] md:text-[24px] max-w-[950px] mx-auto text-white py-[45px] pt-[10px] whitespace-pre-wrap"
      >
        {`Maintaining the condition of your Kodiak knife is essential for ensuring its longevity and reliable performance. To help you achieve this, we've outlined a few steps to follow to make your knife last for years.

Lubricate the blade and handle with Kodiak's specially formulated oil when needed. Doing this will keep the blade and handle well-lubricated and protected from corrosion, moisture, and other harmful elements. To do this, simply apply a small amount of the oil to both the blade and handle, and use one of our gentle cleaning rags to gently wipe the knife dry.

Sharpen the blade periodically using a Kodiak high-grit whetstone. Sharpening the knife regularly will keep it sharp and ready for use. However, it's essential to be extra careful not to damage the Cerakote coating on the blade's body while sharpening. The Cerakote coating is a highly durable and corrosion-resistant coating that enhances the blade's durability, so handling it with care is essential. You can avoid damaging the layer by being gentle and precise when using the whetstone on the blade.

Following these simple yet effective maintenance steps, you can keep your Kodiak knife in pristine condition and ensure it remains a reliable tool for years. With proper care and maintenance, your Kodiak knife will serve you well in all your adventure & cutting needs.
`}
      </motion.p>
      <Link to="/contact">
        <motion.button
          variants={{
            initial: { opacity: 0, scale: 0 },
            animate: { opacity: 1, scale: 1 },
          }}
          transition={{ delay: 0.6, duration: 0.5 }}
          initial="initial"
          animate="animate"
          className="text-[16px] md:text-[24px] mx-auto text-black bg-[rgba(255,255,255,0.7)] px-[25px] md:px-[40px] py-[15px] md:py-[20px] rounded-[8px] titlecase font-[900] transition-all hover:bg-[rgba(255,255,255,0.9)]"
        >
          Contact Support
        </motion.button>
      </Link>
    </div>
  );
};
