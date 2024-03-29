import { Fragment, useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { message } from "antd";
import { useInView } from "react-intersection-observer";
import { Link } from "@shopify/hydrogen";
import { subscribe } from "~/lib";
import { Triangle } from "react-loader-spinner";

const payments = [
  "/svg/payment/visa.svg",
  "/svg/payment/master-card.svg",
  "/svg/payment/amex.svg",
  "/svg/payment/discover.svg",
  "/svg/payment/paypal.svg",
];

const quickLinks = {
  title: "Quick Links",
  links: [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Shop", url: "/shop/all" },
    { title: "Support", url: "/contact" },
    { title: "Policies", url: "/policies" },
  ],
};

const connectLinks = {
  title: "Connect",
  links: [
    { title: "Get in touch", url: "/contact" },
    {
      title: "kodiakknifeco",
      url: "https://instagram.com/kodiakknifeco",
      isOutside: true,
    },
    {
      title: "kodiakknifeco@gmail.com",
      url: "mailto:kodiakknifeco@gmail.com",
      isOutside: true,
    },
  ],
};

const socialLinks = {
  title: "Social Links",
  links: [
    {
      title: "Facebook",
      icon: "/svg/fb.svg",
      url: "/",
    },
    {
      title: "Instagram",
      icon: "/svg/insta.svg",
      url: "https://instagram.com/kodiakknifeco",
    },
    {
      title: "Twitter",
      icon: "/svg/twitter.svg",
      url: "/",
    },
  ],
};

const getVariant = (duration: number) => ({
  visible: { x: 0, opacity: 1, transition: { duration } },
  hidden: { x: 10, opacity: 0, transition: { duration } },
});

const Links = ({ links }: { links: typeof connectLinks }) => {
  return (
    <div className="text-center md:text-left">
      <h5 className="font-[600] text-[22px] uppercase custom-gradient-text">
        {links.title}
      </h5>
      <div className="mt-[10px] md:mt-[20px] flex flex-col gap-[12px]">
        {links.links.map((link) => {
          return (
            <Fragment key={link.url}>
              {link?.isOutside ? (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  className="font-bold text-[18px] text-[#1F2227]"
                >
                  {link.title}
                </a>
              ) : (
                <Link
                  key={link.title}
                  to={link.url}
                  className="font-bold text-[18px] text-[#1F2227] capitalize"
                >
                  {link.title}
                </Link>
              )}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export const Footer = () => {
  const [ref, inView] = useInView();
  const controls = useAnimation();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="py-[45px] px-[20px] flex flex-col gap-[30px] xl:grid xl:gap-[100px] xl:grid-cols-[200px_auto] xl:px-[100px] bg-[#ededed]">
      {/* Logo */}
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={getVariant(0.5)}
      >
        <img
          src="/images/navbar/logo.png"
          alt="logo"
          className="max-w-[180px] mx-auto"
        />
      </motion.div>
      <div className="grid gap-[45px] grid-cols-1 xl:grid-cols-4">
        <Links links={quickLinks} />
        <Links links={connectLinks} />
        {/* Social Links */}
        <div className="text-center md:text-left">
          <h5 className="font-[600] text-[22px] uppercase custom-gradient-text">
            FOLLOW US
          </h5>
          <div className="mt-[10px] md:mt-[20px] flex gap-[8px] justify-center xl:justify-start">
            {socialLinks.links.map((link) => (
              <a
                key={link.icon}
                href={link.url}
                target="_blank"
                className="font-bold text-[18px]"
              >
                <img src={link.icon} alt={link.title} />
              </a>
            ))}
          </div>
        </div>

        {/* Stay Informed Section */}
        <div className="text-center md:text-left">
          <h5 className="font-[600] text-[22px] uppercase custom-gradient-text">
            STAY INFORMED
          </h5>
          <p className="mt-[10px] md:mt-[20px] flex gap-[8px] text-black">
            Subscribe to get special offers, drop announcements, and stay up to
            date on all things.
          </p>
          {/* Input */}
          <div className="items-center justify-start flex flex-col h-[40px]  mx-auto md:grid md:grid-cols-[70%_auto] mt-[40px]  ml-0">
            {/* Email Icon */}
            <div className="relative">
              <img
                src="/svg/email-small.svg"
                className="left-[10px] absolute top-[50%] translate-y-[-50%]"
              />
              <input
                className="h-[40px] border border-black border-solid rounded-[7px] bg-transparent w-[240px] pl-[40px] placeholder:text-whtie"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <button
            disabled={loading}
            onClick={() => subscribe({ setLoading, email, setEmail, message })}
            className="mt-[10px] h-[40px] border border-black border-solid bg-black text-white text-[12px] tracking-[0.16em] font-[700] px-[16px] rounded-[7px] relative"
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
      <div className="col-span-2 xl:-mt-[75px] gap-[15px] flex flex-col">
        <div className="flex items-center justify-center gap-[5px]">
          {payments?.map((payment) => (
            <img src={payment} alt="payment-icon" key={payment} />
          ))}
        </div>
        <div className="flex items-center justify-center text-black">
          © 2023 Kodiak Knife Co.
        </div>
      </div>
    </div>
  );
};
