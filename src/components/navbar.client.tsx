import styles from "./navbar.module.css";
import { useEffect, useState, useRef } from "react";
import { useAnimation, motion } from "framer-motion";
import { AiOutlineDown } from "react-icons/ai";
import { Menu } from "./mobile-nav.client";
import { Icons } from "./nav-icons.client";
import { Link, useUrl } from "@shopify/hydrogen";
import { Dropdown } from "antd";
import { SlSocialDropbox } from "react-icons/sl";
import { useOutsideClick } from "../hooks";

const getVariant = (duration: number) => ({
  visible: { x: 0, opacity: 1, transition: { duration } },
  hidden: { x: 10, opacity: 0, transition: { duration } },
});

const links = [
  { name: "home", to: "/" },
  // { name: "Shop All", to: "/shop/all" },
  // { name: "Shop F.A.S.T", to: "/shop/all" },
  // { name: "Shop Equipment", to: "/shop/all" },
  // { name: "Shop Gear", to: "/shop/all" },
  {
    name: "Shop",
    subLinks: [
      { name: "All", to: "/shop/all" },
      { name: "F.A.S.T", to: "/shop/all" },
      { name: "Equipment", to: "/shop/all" },
      { name: "Gear", to: "/shop/all" },
    ],
  },
  { name: "About F.A.S.T", to: "/fast" },
  { name: "about us", to: "/about" },
  { name: "Maintenance & Care", to: "/product-care" },
  { name: "Journal", to: "/journal" },
  // { name: "contact", to: "/contact" },
];

const CustomDropdown = ({ links, animate, initial, variants }: any) => {
  const [open, setOpen] = useState(false);

  const ref: any = useRef();

  useOutsideClick(ref, () => {
    setOpen(false);
  });
  return (
    <Dropdown
      open={open}
      // overlayStyle={{ backgroundColor: '' }}
      dropdownRender={() => (
        // Shop Sub Pages
        <div
          className="flex flex-col w-[170px] mt-[10px] bg-[#dedede] rounded-[8px]"
          ref={ref}
        >
          {links?.map((link: any) => {
            return (
              <Link
                to={link.to}
                className="hover:bg-gray-300 transition-all rounded-[8px]"
                onClick={() => setOpen(false)}
              >
                <div
                  className={`${styles["nav-link"]} cursor-pointer select-none px-[20px] py-[13px] rounded-[8px]`}
                >
                  {link?.name}
                </div>
              </Link>
            );
          })}
        </div>
      )}
    >
      {/* Shop Heading */}
      <motion.div
        animate={animate}
        ref={ref}
        onClick={() => setOpen((prev) => !prev)}
        initial={initial}
        variants={variants}
        className={`${styles["nav-link"]} cursor-pointer select-none flex items-center gap-[5px]`}
      >
        <span>shop</span>
        <AiOutlineDown />
      </motion.div>
    </Dropdown>
  );
};

export const Navbar = ({ customerAccessToken = "" }) => {
  const controls = useAnimation();

  const logout = () => {
    fetch("/account/logout", { method: "POST" }).then(() => {
      window.location.href = "/";
    });
  };

  const url = useUrl();

  useEffect(() => {
    controls.start("visible");
  }, []);

  return (
    <div>
      <nav className="flex flex-row-reverse md:flex-row items-center justify-between overflow-hidden h-nav px-[20px] md:px-[60px] 3xl:px-[120px] relative z-10 shadow-lg">
        {/* Mobile Menu (Links) */}
        <motion.div
          animate={controls}
          initial="hidden"
          variants={getVariant(0.5)}
          className="block 2xl:hidden overflow-hidden"
        >
          <Menu customerAccessToken={customerAccessToken} />
        </motion.div>

        {/* Links */}
        <div className="items-center gap-[25px] hidden 2xl:flex">
          {links?.map((link, index) => {
            if (index < 4) {
              if (!link?.to) {
                return (
                  <CustomDropdown
                    key={link.name}
                    variants={getVariant(0.5)}
                    links={link.subLinks}
                  />
                );
              } else {
                return (
                  <Link to={link.to} key={link.name}>
                    <motion.div
                      animate={controls}
                      initial="hidden"
                      variants={getVariant(0.5)}
                      className={`${styles["nav-link"]} ${
                        url.pathname === link.to
                          ? styles["nav-link-active"]
                          : ""
                      } cursor-pointer select-none`}
                    >
                      {link.name}
                    </motion.div>
                  </Link>
                );
              }
            }
          })}
        </div>

        {/* Logo */}
        <Link to="/">
          <motion.div
            animate={controls}
            initial="hidden"
            variants={{
              hidden: { scale: 0, opacity: 0 },
              visible: { scale: 1, opacity: 1 },
            }}
            className="w-[190px] md:w-[275px] md:ml-[40px]"
          >
            <img
              src="/images/navbar/logo.png"
              alt="logo"
              className="w-[150px] md:w-[275px]"
            />
          </motion.div>
        </Link>

        {/* Icons */}
        <motion.div
          animate={controls}
          initial="hidden"
          variants={{
            visible: { x: 0, opacity: 1, transition: { duration: 0.4 } },
            hidden: { x: -50, opacity: 0, transition: { duration: 0.4 } },
          }}
          className=" items-center gap-[30px] hidden 2xl:flex"
        >
          {links?.map((link, index) => {
            if (index >= 4) {
              if (!link?.to) {
                return (
                  <CustomDropdown
                    key={link.name}
                    variants={getVariant(0.5)}
                    links={link.subLinks}
                  />
                );
              } else {
                return (
                  <Link to={link.to} key={link.name}>
                    <motion.div
                      animate={controls}
                      initial="hidden"
                      variants={getVariant(0.5)}
                      className={`${styles["nav-link"]} ${
                        url.pathname === link.to
                          ? styles["nav-link-active"]
                          : ""
                      } cursor-pointer select-none`}
                    >
                      {link.name}
                    </motion.div>
                  </Link>
                );
              }
            }
          })}
          {!!customerAccessToken ? (
            <>
              <Link to="/account">
                <motion.div
                  animate={controls}
                  initial="hidden"
                  variants={getVariant(0.5)}
                  className={`${styles["nav-link"]} ${
                    url.pathname === "/account" ? styles["nav-link-active"] : ""
                  } cursor-pointer select-none`}
                >
                  Account
                </motion.div>
              </Link>

              <motion.div
                animate={controls}
                initial="hidden"
                variants={getVariant(0.5)}
                className={`${styles["nav-link"]} ${
                  url.pathname === "/account" ? styles["nav-link-active"] : ""
                } cursor-pointer select-none`}
                onClick={logout}
              >
                Logout
              </motion.div>
            </>
          ) : (
            <>
              <Link to="/account/login">
                <motion.div
                  animate={controls}
                  initial="hidden"
                  variants={getVariant(0.5)}
                  className={`${styles["nav-link"]} ${
                    url.pathname === "/account" ? styles["nav-link-active"] : ""
                  } cursor-pointer select-none`}
                >
                  Login
                </motion.div>
              </Link>
            </>
          )}
          <Icons />
        </motion.div>
      </nav>
      <div className="min-h-[50px] bg-slate-800 flex items-center justify-center text-white text-[14px] md:text-[16px]">
        <div className="flex items-center gap-[15px]">
          <div>
            <SlSocialDropbox className="w-[16px] md:w-[20px]" />
          </div>
          <p className="mb-0">Free ground shipping on orders over $150</p>
        </div>
      </div>
    </div>
  );
};
