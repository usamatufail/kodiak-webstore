import { Link } from "@shopify/hydrogen";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const data = [
  {
    bg: "/cloudinary/homepage/cat1.png",
    btn: "F.A.S.T.",
    to: "/shop/fast",
  },
  {
    bg: "/cloudinary/homepage/cat2.png",
    btn: "Equipment",
    to: "/shop/equipment",
    black: true,
  },
  // {
  //   bg: "https://res.cloudinary.com/samtufail726/image/upload/v1678495187/kodiak/cat3.png",
  //   btn: "Apparel",
  //   to: "/shop/apparel",
  // },
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
        backgroundImage: "url(/cloudinary/ma/company.png)",
      }}
    >
      <h1 className="text-[42px] text-center md:text-left font-[700] text-black px-[20px] md:px-[100px] mt-[60px]">
        Categories
      </h1>
      <div className="px-[10px] md:px-[85px] grid md:grid-cols-2 gap-[50px] mt-[20px]">
        {data.map((data) => {
          return (
            <motion.div
              key={data.to}
              animate={controls}
              initial="hidden"
              variants={getVariant(0.5)}
              className="rounded-[30px] min-h-[550px] bg-cover bg-no-repeat relative"
              style={{
                backgroundImage: `url(${data.bg})`,
              }}
            >
              <div className="absolute bottom-[50px] left-[50%] -translate-x-[50%]">
                <Link to={data.to}>
                  <button
                    className={`h-[58px] flex items-center justify-center font-[600] px-[60px]
                        text-[18px] text-white hover:px-[70px] hover:scale-[1.15]
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
