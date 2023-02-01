import { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const quickLinks = {
  title: 'Quick Links',
  links: [
    { title: 'HOME', url: '/' },
    { title: 'ABOUT', url: '/' },
    { title: 'SHOP', url: '/' },
    { title: 'SUPPORT', url: '/' },
    { title: 'POLICIES', url: '/' },
  ],
};

const connectLinks = {
  title: 'Connect',
  links: [
    { title: 'GET IN TOUCH', url: '/' },
    { title: '@KODIAK_KNIFE_CO', url: '/' },
    { title: 'KODIAKKNIFECO@GMAIL.COM', url: '/' },
  ],
};

const socialLinks = {
  title: 'Social Links',
  links: [
    {
      title: 'Facebook',
      icon: '/svg/fb.svg',
      url: '/',
    },
    {
      title: 'Instagram',
      icon: '/svg/insta.svg',
      url: '/',
    },
    {
      title: 'Twitter',
      icon: '/svg/twitter.svg',
      url: '/',
    },
  ],
};

const getVariant = (duration: number) => ({
  visible: { x: 0, opacity: 1, transition: { duration } },
  hidden: { x: 10, opacity: 0, transition: { duration } },
});

const Links = ({ links }: { links: typeof quickLinks }) => {
  return (
    <div className="text-center md:text-left">
      <h5 className="font-[600] text-[22px] uppercase custom-gradient-text">{links.title}</h5>
      <div className="mt-[10px] md:mt-[20px] flex flex-col gap-[12px]">
        {links.links.map((link) => {
          return (
            <a key={link.title} href={link.url} className="font-[300] text-[18px] text-[#1F2227]">
              {link.title}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export const Footer = () => {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div className="py-[60px] px-[20px] grid grid-cols-1 gap-[30px] xl:gap-[100px] xl:grid-cols-[350px_auto] xl:px-[100px]">
      {/* Logo */}
      <motion.div ref={ref} animate={controls} initial="hidden" variants={getVariant(0.5)}>
        <img src="/images/navbar/logo.png" alt="logo" className="m-auto xl:m-[unset]" />
      </motion.div>
      <div className="grid gap-[45px] grid-cols-1 xl:grid-cols-4">
        <Links links={quickLinks} />
        <Links links={connectLinks} />
        {/* Social Links */}
        <div className="text-center md:text-left">
          <h5 className="font-[600] text-[22px] uppercase custom-gradient-text">FOLLOW US</h5>
          <div className="mt-[10px] md:mt-[20px] flex gap-[8px] justify-center xl:justify-start">
            {socialLinks.links.map((link) => (
              <a key={link.icon} href={link.url} className="font-[300] text-[18px]">
                <img src={link.icon} alt={link.title} />
              </a>
            ))}
          </div>
        </div>

        {/* Stay Informed Section */}
        <div className="text-center md:text-left">
          <h5 className="font-[600] text-[22px] uppercase custom-gradient-text">STAY INFORMED</h5>
          <p className="mt-[10px] md:mt-[20px] flex gap-[8px]">
            Subscribe to get special offers, drop announcements, and stay up to date on all things Toor Knives.
          </p>
          {/* Input */}
          <div className="items-center justify-start h-[40px] w-[300px] mx-auto grid grid-cols-[70%_auto] mt-[40px]">
            {/* Email Icon */}
            <div className="relative">
              <img src="/svg/email-small.svg" className="left-[10px] absolute top-[50%] translate-y-[-50%]" />
              <input
                className="h-[40px] border border-black border-solid rounded-[7px] bg-transparent w-[240px] pl-[40px] placeholder:text-whtie"
                placeholder="Your Email"
              />
            </div>
            <button className="h-[40px] border border-black border-solid bg-black text-white text-[12px] tracking-[0.16em] font-[700] px-[16px] rounded-[7px] relative">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
