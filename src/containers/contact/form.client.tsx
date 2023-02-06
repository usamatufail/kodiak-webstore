import { Checkbox, Input, TextArea } from '../../components';
import { motion } from 'framer-motion';

const textVariants = {
  initial: { scale: 0 },
  animate: { scale: 1 },
};

export const Form = () => {
  return (
    <div
      className="w-full min-h-[450px] relative mt-[4px] bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(https://res.cloudinary.com/samtufail726/image/upload/b_black,o_45,q_auto/v1675492607/kodiak/Contact/DSC02251_oxr8rs.jpg)`,
      }}
    >
      {/* Form Container */}
      <div className="text-center relative pt-[45px]">
        <motion.div variants={textVariants} initial="initial" animate="animate" transition={{ type: 'tween', duration: 0.5 }}>
          <h1 className="text-[45px] font-[900] uppercase text-white">Get in Touch</h1>
          <p className="text-white text-[16px] md:text-[22px] tracking-wider md:tracking-[unset] px-[20px] whitespace-pre-wrap leading-relaxed md:-mt-[40px]">{`YOU are at the heart of everything we do, and we are committed to ensuring that your experience with us is exceptional.\n\nOur unmatched customer experience is our top priority, and we are committed to going above and beyond to exceed your expectations.\n\nWe take pride in our commitment to sustainability and always strive to find ways to enhance the user experience.
          `}</p>
        </motion.div>
        {/* Form */}
        <motion.form
          initial="initial"
          animate="animate"
          variants={{ initial: { scale: 0, opacity: 0 }, animate: { scale: 1, opacity: 1 } }}
          transition={{ type: 'tween', duration: 0.85, delay: 0.6 }}
          className="grid grid-cols-2 gap-[18px] max-w-[700px] mx-auto mt-[35px] pb-[50px] px-[20px]"
        >
          <Input placeholder="Name" icon="/svg/contact/name.svg" className="col-span-2 md:col-span-1" />
          <Input placeholder="Email" icon="/svg/contact/email.svg" className="col-span-2 md:col-span-1" />
          <Input placeholder="Phone" icon="/svg/contact/phone.svg" className="col-span-2" />
          <TextArea placeholder="Write a text" icon="/svg/contact/message.svg" className="col-span-2" />
          <Checkbox
            label="Keep me up to date with news and offers from time to time by email"
            name="agree-on-updates"
            className="col-span-2"
          />
          <button
            className={`h-[54px] flex items-center justify-center font-[900] uppercase
          text-[20px] bg-[rgba(255,255,255,0.6)] focus:bg-[rgba(255,255,255,0.8)]
          hover:bg-[rgba(255,255,255,0.8)] transition-all rounded-[8px] mt-[20px] col-span-2`}
          >
            SUBMIT
          </button>
        </motion.form>
        <motion.div
          initial="initial"
          animate="animate"
          variants={{ initial: { y: 200, opacity: 0 }, animate: { y: 0, opacity: 1 } }}
          transition={{ type: 'tween', duration: 0.85, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[18px] max-w-[700px] mx-auto md:mt-[35px] px-[20px] pb-[50px] overflow-hidden"
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
