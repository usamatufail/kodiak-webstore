import styles from "./navbar.module.css";
import { useEffect, useState, useRef } from "react";
import { useAnimation, motion } from "framer-motion";
import { AiOutlineDown } from "react-icons/ai";
import { Menu } from "./mobile-nav.client";
import { Icons } from "./nav-icons.client";
import { Link, useUrl } from "@shopify/hydrogen";
import { Dropdown } from "antd";
import { useOutsideClick } from "../hooks";

const getVariant = (duration: number) => ({
  visible: { x: 0, opacity: 1, transition: { duration } },
  hidden: { x: 10, opacity: 0, transition: { duration } },
});

const links = [
  { name: "home", to: "/" },
  { name: "blades", to: "/blades" },
  {
    name: "shop",
    links: [
      { name: "All", link: "/shop/all" },
      { name: "Blades", link: "/shop/all" },
      { name: "Equipment", link: "/shop/all" },
      { name: "Gear", link: "/shop/all" },
    ],
  },
  { name: "about", to: "/about" },
  { name: "Maintenance & Care", to: "/product-care" },
  { name: "contact", to: "/contact" },
  // { name: 'gallery', to: '/gallery' },
];

const CustomDropdown = ({ animate, initial, variants }: any) => {
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
          className="flex flex-col w-[170px] mt-[10px] bg-[#dedede]"
          ref={ref}
        >
          <Link
            to="/shop/all"
            className="hover:bg-gray-300 transition-all"
            onClick={() => setOpen(false)}
          >
            <div
              className={`${styles["nav-link"]} cursor-pointer select-none px-[20px] py-[13px]`}
            >
              all
            </div>
          </Link>
          <Link
            to="/shop/blades"
            className="hover:bg-gray-300 transition-all"
            onClick={() => setOpen(false)}
          >
            <div
              className={`${styles["nav-link"]} cursor-pointer select-none px-[20px] py-[13px]`}
            >
              blades
            </div>
          </Link>
          <Link
            to="/shop/equipment"
            className="hover:bg-gray-300 transition-all"
            onClick={() => setOpen(false)}
          >
            <div
              className={`${styles["nav-link"]} cursor-pointer select-none px-[20px] py-[13px]`}
            >
              equipment
            </div>
          </Link>
          <Link
            to="/shop/gear"
            className="hover:bg-gray-300 transition-all"
            onClick={() => setOpen(false)}
          >
            <div
              className={`${styles["nav-link"]} cursor-pointer select-none px-[20px] py-[13px]`}
            >
              gear
            </div>
          </Link>
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
    <nav className="flex items-center justify-between overflow-hidden h-nav px-[20px] md:pl-[120px] md:pr-[140px] relative z-10 shadow-lg">
      {/* Logo */}
      <Link to="/">
        <motion.div
          animate={controls}
          initial="hidden"
          variants={getVariant(0.5)}
          className="w-[100px] md:w-[unset]"
        >
          <img src="/images/navbar/logo.png" alt="logo" className="w-[125px]" />
        </motion.div>
      </Link>
      {/* Mobile Menu (Links) */}
      <motion.div
        animate={controls}
        initial="hidden"
        variants={getVariant(0.5)}
        className="block md:hidden overflow-hidden"
      >
        <Menu customerAccessToken={customerAccessToken} />
      </motion.div>

      {/* Links */}
      <div className="items-center gap-[45px] hidden md:flex">
        {links?.map((link) => {
          if (!link?.links) {
            return (
              <Link to={link.to} key={link.name}>
                <motion.div
                  animate={controls}
                  initial="hidden"
                  variants={getVariant(0.5)}
                  className={`${styles["nav-link"]} ${
                    url.pathname === link.to ? styles["nav-link-active"] : ""
                  } cursor-pointer select-none`}
                >
                  {link.name}
                </motion.div>
              </Link>
            );
          } else
            return (
              <CustomDropdown
                key={link.name}
                animate={controls}
                initial="hidden"
                variants={getVariant(0.5)}
                links={link.links}
              />
            );
        })}
      </div>

      {/* Icons */}
      <motion.div
        animate={controls}
        initial="hidden"
        variants={{
          visible: { x: 0, opacity: 1, transition: { duration: 0.4 } },
          hidden: { x: -50, opacity: 0, transition: { duration: 0.4 } },
        }}
        className=" items-center gap-[30px] hidden md:flex"
      >
        <div className="flex gap-[30px] text-[18px] font-[600] text-black">
          {!!customerAccessToken ? (
            <>
              <Link to="/account" className=" transition-all">
                <div className="cursor-pointer px-[20px] py-[13px]">
                  Account
                </div>
              </Link>
              <div
                onClick={logout}
                className=" transition-all rounded-[83px] cursor-pointer"
              >
                <div className="cursor-pointer px-[20px] py-[13px] rounded-[83px] border-[1px] border-black  border-solid">
                  Logout
                </div>
              </div>
            </>
          ) : (
            <>
              <Link to="/account/login" className=" transition-all">
                <div className="cursor-pointer px-[20px] py-[13px]">Login</div>
              </Link>
              <Link
                to="/account/register"
                className=" transition-all  rounded-[83px]"
              >
                <div className="cursor-pointer px-[20px] py-[13px] rounded-[83px] border-[1px] border-black  border-solid">
                  Sign Up
                </div>
              </Link>
            </>
          )}
        </div>
        <Icons />
      </motion.div>
    </nav>
  );
};
