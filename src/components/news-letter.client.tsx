import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { Triangle } from "react-loader-spinner";
import { subscribe } from "../lib";
import { message } from "antd";

const getVariant = () => ({
  visible: { scale: 1, opacity: 1 },
  hidden: { scale: 0.5, opacity: 0 },
});

export const NewsLetter = ({
  image = "/cloudinary/homepage/news-letter.png",
}) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div
      id="news-letter"
      className="min-h-[400px] py-[40px] bg-center bg-no-repeat bg-cover text-white grid md:grid-cols-2 md:gap-[100px] items-center md:min-h-[490px] md:px-[200px] relative after:h-full after:w-full after:absolute after:bg-black after:opacity-[0.65] after:z-10"
      style={{ backgroundImage: `url(${image})` }}
      ref={ref}
    >
      <div className="relative z-20 px-[20px] text-center md:text-left">
        <h2 className="text-[42px] tracking-[0.01em] capitalize font-bold md:text-[62px] md:font-[900]">
          Stay in the Loop
        </h2>
        <motion.p
          initial="hidden"
          animate={controls}
          variants={getVariant()}
          transition={{ duration: 0.5 }}
          className="mt-[15px] text-[16px] md:text-[20px] leading-[1.15] tracking-wide md:tracking-[unset]"
        >
          Embark on a never-ending journey of discovery and excitement. Join us
          on a quest to unlock the full potential of your outdoor adventures.
          Our weekly newsletters are designed to be your ultimate guide, filled
          with valuable insights and expert advice on optimizing your gear,
          mastering the great outdoors, and elevating your experience. As a
          member of our community, you'll gain access to a wealth of information
          that will inspire and empower you to tackle new challenges and reach
          new heights. Sign up now and take the first step towards a journey
          that is never-ending and always full of excitement.
        </motion.p>
      </div>
      {/* Input */}
      <div className="items-center justify-center w-[350px] mx-auto mt-[40px] md:w-[500px] relative z-20 flex flex-col gap-[20px]">
        <div className="">
          <input
            className="h-[48px] text-white border focus-visible:outline-none border-white border-solid rounded-[50px] bg-transparent w-[300px] px-[30px] placeholder:text-white md:w-[370px] text-[18px] font-[600]"
            placeholder="Your Email"
            onChange={(e) => setEmail(e?.target?.value)}
            value={email}
          />
        </div>
        <button
          disabled={loading}
          onClick={async () =>
            await subscribe({ setLoading, email, setEmail, message })
          }
          className="disabled:bg-gray-300 w-[300px] md:w-[370px] flex justify-center items-center gap-[8px] h-[48px] border bg-white text-black text-[18px] tracking-[0.16em] font-[600] px-[26px] rounded-[50px] relative"
        >
          {loading ? (
            <Triangle
              height="24"
              width="24"
              color="#000"
              ariaLabel="triangle-loading"
              visible
            />
          ) : (
            <></>
          )}
          <span>Subscribe</span>
        </button>
      </div>
    </div>
  );
};
