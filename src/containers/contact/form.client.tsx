import { Checkbox, Input, TextArea } from '../../components';
import { motion } from 'framer-motion';

const textVariants = {
  initial: { scale: 0 },
  animate: { scale: 1 },
};

export const Form = () => {
  return (
    <div className="w-full min-h-[450px] relative mt-[4px]">
      {/* Background */}
      <img
        src="https://res.cloudinary.com/samtufail726/image/upload/f_auto/v1675492607/kodiak/Contact/DSC02251_oxr8rs.webp"
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
      />
      {/* Overlay */}
      <div className="absolute w-full h-full bg-black opacity-70 top-0 left-0" />
      {/* Form Container */}
      <div className="text-center relative z-20 pt-[45px]">
        <motion.div variants={textVariants} initial="initial" animate="animate" transition={{ type: 'tween', duration: 0.5 }}>
          <h1 className="text-[45px] font-[900] uppercase text-white">Get in Touch</h1>
          <p className="text-white text-[22px]">Stay up to date with the latest discounts, promotions, and new releases.</p>
        </motion.div>
        {/* Form */}
        <motion.form
          initial="initial"
          animate="animate"
          variants={{ initial: { scale: 0, opacity: 0 }, animate: { scale: 1, opacity: 1 } }}
          transition={{ type: 'tween', duration: 0.85, delay: 0.6 }}
          className="grid grid-cols-2 gap-[18px] max-w-[700px] mx-auto mt-[35px] pb-[50px]"
        >
          <Input placeholder="Name" icon="/svg/contact/name.svg" />
          <Input placeholder="Email" icon="/svg/contact/email.svg" />
          <Input placeholder="Phone" icon="/svg/contact/phone.svg" className="col-span-2" />
          <TextArea placeholder="Write a text" icon="/svg/contact/message.svg" className="col-span-2" />
          <Checkbox
            label="Keep me up to date with news and offers from time to time by email"
            name="agree-on-updates"
            className="col-span-2"
          />
          <button className="h-[54px] flex items-center justify-center font-[900] uppercase text-[20px] bg-[rgba(255,255,255,0.6)] focus:bg-[rgba(255,255,255,0.8)] hover:bg-[rgba(255,255,255,0.8)] transition-all rounded-[8px] mt-[40px] col-span-2">
            SUBMIT
          </button>
        </motion.form>
        <motion.div
          initial="initial"
          animate="animate"
          variants={{ initial: { y: 200, opacity: 0 }, animate: { y: 0, opacity: 1 } }}
          transition={{ type: 'tween', duration: 0.85, delay: 0.6 }}
          className="grid grid-cols-2 gap-[18px] max-w-[700px] mx-auto mt-[35px] pb-[50px] overflow-hidden"
        >
          {/* Instagram */}
          <a href="https://instagram.com/kodiak_knife_co" target="_blank">
            <img src="/svg/contact/insta-text.svg" />
          </a>
          {/* Email */}
          <a href="mailto:kodiakknifeco@gmail.com">
            <img src="/svg/contact/email-text.svg" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};
