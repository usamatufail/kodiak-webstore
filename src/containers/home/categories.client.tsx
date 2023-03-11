import { Link } from "@shopify/hydrogen";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const data = [
  {
    bg: "https://res.cloudinary.com/samtufail726/image/upload/v1678495018/kodiak/cat1.png",
    btn: "Equipment",
    to: "/shop/equipment",
  },
  {
    bg: "https://res.cloudinary.com/samtufail726/image/upload/v1678495180/kodiak/cat2.png",
    btn: "Gear",
    to: "/shop/gear",
    black: true,
  },
  {
    bg: "https://res.cloudinary.com/samtufail726/image/upload/v1678495187/kodiak/cat3.png",
    btn: "Apparel",
    to: "/shop/blades",
  },
];
const getVariant = (duration: number) => ({
  visible: { scale: 1, opacity: 1, transition: { duration } },
  hidden: { scale: 0.5, opacity: 0, transition: { duration } },
});

export const Categories = () => {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div
      ref={ref}
      className="min-h-[800px] bg-cover bg-no-repeat pt-[15px] pb-[90px]"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/samtufail726/image/upload/v1678470000/kodiak/About/company.png)",
      }}
    >
      <h1 className="text-[48px] font-[700] text-black px-[20px] md:px-[145px]">
        Categories
      </h1>
      <div className="px-[10px] md:px-[85px] grid md:grid-cols-3 gap-[50px] mt-[70px]">
        {data.map((data) => {
          return (
            <motion.div
              animate={controls}
              initial="hidden"
              variants={getVariant(0.5)}
              className="rounded-[30px] min-h-[550px] bg-cover bg-no-repeat relative"
              style={{
                backgroundImage: `url(${data.bg})`,
              }}
            >
              <div className="absolute bottom-[50px] left-40 ">
                <Link to={data.to}>
                  <button
                    className={`h-[58px] flex items-center justify-center font-[600] px-[60px]
                        text-[18px] text-white hover:px-[70px]
                        transition-all rounded-[80px] mt-[20px] ${
                          data.black
                            ? "bg-black"
                            : "bg-transparent border-[1px] border-white border-solid"
                        }`}
                  >
                    {data.btn}
                  </button>
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
