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
  image = "https://res.cloudinary.com/samtufail726/image/upload/q_auto,b_black,o_65/v1675500468/kodiak/Shop/All/DSC02478_qcdfmd.jpg",
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
      className="min-h-[400px] py-[40px] bg-center bg-no-repeat bg-cover text-white flex items-center md:justify-center md:min-h-[450px] relative after:h-full after:w-full after:absolute after:bg-black after:opacity-[0.65] after:z-10"
      style={{ backgroundImage: `url(${image})` }}
      ref={ref}
    >
      <div className="text-center relative z-20">
        <h2 className="text-[42px] tracking-[0.01em] capitalize font-bold md:text-[62px] md:font-[900]">
          Stay in the Loop
        </h2>
        <motion.p
          initial="hidden"
          animate={controls}
          variants={getVariant()}
          transition={{ duration: 0.5 }}
          className="mt-[15px] text-[16px] md:text-[20px] max-w-[1515px] px-[20px] tracking-wide md:tracking-[unset]"
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

        {/* Input */}
        <div className="items-center justify-center h-[48px] w-[350px] mx-auto grid grid-cols-[70%_auto] mt-[40px] md:w-[500px]">
          {/* Email Icon */}
          <div className="relative">
            <img
              src="/svg/email.svg"
              className="left-[10px] absolute top-[50%] translate-y-[-50%] md:left-[20px]"
            />
            <input
              className="h-[48px] border focus-visible:outline-none border-white border-solid rounded-[7px] bg-transparent w-[300px] pl-[45px] pr-[60px] placeholder:text-whtie md:w-[400px] md:pl-[60px] md:pr-[unset]"
              placeholder="Your Email"
              onChange={(e) => setEmail(e?.target?.value)}
              value={email}
            />
          </div>
          <button
            disabled={loading}
            onClick={() => subscribe({ setLoading, email, setEmail, message })}
            className="disabled:bg-gray-300 w-[150px] flex justify-center items-center gap-[8px] h-[48px] border border-white border-solid bg-white text-black text-[12px] tracking-[0.16em] font-[700] px-[26px] rounded-[7px] relative"
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
            <span>SUBMIT</span>
          </button>
        </div>
      </div>
    </div>
  );
};
