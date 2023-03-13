import { Checkbox, Input } from "../../components";
import { motion } from "framer-motion";

const textVariants = {
  initial: { scale: 0 },
  animate: { scale: 1 },
};

export const Form = () => {
  return (
    <>
      <div
        className="w-full min-h-[800px] relative mt-[4px] grid md:grid-cols-2 gap-[150px] items-center bg-cover bg-no-repeat px-[20px] md:px-[350px] py-[50px]"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/samtufail726/image/upload/v1678460827/kodiak/register.png)`,
        }}
      >
        {/* Form Container */}

        <div className=" relative pt-[45px]">
          {/* Form */}
          <motion.form
            initial="initial"
            animate="animate"
            variants={{
              initial: { scale: 0, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
            }}
            transition={{ type: "tween", duration: 0.85, delay: 0.6 }}
            className="flex flex-col gap-[20px] bg-white rounded-[15px] mx-auto p-[50px] max-w-[500px]"
          >
            <Input
              placeholder="Name"
              className="border-b-[1px] border-solid border-black text-[18px] font-[600]"
            />
            <Input
              placeholder="Email"
              className="border-b-[1px] border-solid border-black text-[18px] font-[600]"
            />
            <Input
              placeholder="Phone"
              className="border-b-[1px] border-solid border-black text-[18px] font-[600]"
            />
            <Input
              placeholder="Your message..."
              className="border-b-[1px] border-solid border-black text-[18px] font-[600]"
            />
            <Checkbox
              label="Keep me up to date with news and offers from time to time by email"
              name="agree-on-updates"
              className="text-black mt-[50px]"
            />
            <button
              className={`h-[58px] flex items-center justify-center font-[600] border-[1px] border-black border-solid 
          text-[18px] bg-transparent focus:bg-[rgba(255,255,255,0.8)]
          hover:bg-[rgba(255,255,255,0.8)] transition-all rounded-[80px] mt-[20px]`}
            >
              Submit
            </button>
          </motion.form>
        </div>
        <div className="flex justify-center items-center">
          <motion.div
            variants={textVariants}
            initial="initial"
            animate="animate"
            transition={{ type: "tween", duration: 0.5 }}
          >
            <h1 className="text-[45px] font-[900] text-white ">Get in touch</h1>
            <p className="text-[24px] font-[600] text-white max-w-[500px]">
              YOU are at the heart of everything we do, and we are committed to
              ensuring that your experience with us is exceptional. <br />
              <br />
              Our unmatched customer experience is our top priority, and we are
              committed to going above and beyond to exceed your expectations.We
              take pride in our commitment to sustainability and always strive
              to find ways to enhance the user experience.
            </p>
            <div className="flex gap-[15px] mt-[20px]">
              <a href="https://instagram.com/kodiakknifeco" target="_blank">
                <img src="/svg/insta-white.svg" className="w-[30px] h-[30px]" />
              </a>
              {/* Email */}
              <a href="mailto:kodiakknifeco@gmail.com">
                <img src="/svg/email.svg" className="w-[30px] h-[30px]" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};
