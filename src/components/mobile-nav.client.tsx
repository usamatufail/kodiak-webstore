import { motion } from "framer-motion";
import Hamburger from "hamburger-react";
import { Icons } from "./nav-icons.client";
import { MenuDrawer } from "./shopify/global/MenuDrawer.client";
import { useDrawer } from "./shopify/global/Drawer.client";

const links = [
  { name: "Home", handle: "/", variantValue: 0 },
  { name: "Shop All", handle: "/shop/all", variantValue: 0.2 },
  { name: "Shop F.A.S.T", handle: "/shop/fast", variantValue: 0.2 },
  // { name: "Shop Apparel", handle: "/shop/apparel", variantValue: 0.2 },
  { name: "Shop Equipment", handle: "/shop/equipment", variantValue: 0.2 },
  { name: "Learn More", handle: "/fast", variantValue: 0 },
  { name: "Contact Us", handle: "/contact", variantValue: 0.2 },
  { name: "Maintenance & Care", handle: "/product-care", variantValue: 0.2 },
  { name: "About", handle: "/about", variantValue: 0.2 },
  { name: "Journal", handle: "/journal" },
];

const signinLinks = [
  { name: "My Account", handle: "/account", variantValue: 0.2 },
];

const signoutLinks = [
  { name: "Login", handle: "/account/login", variantValue: 0.2 },
  { name: "SignUp", handle: "/account/register", variantValue: 0.2 },
];

export const Menu = ({ customerAccessToken = "" }) => {
  const { isOpen, openDrawer, closeDrawer } = useDrawer();

  return (
    <>
      <motion.div
        initial="initial"
        animate="animate"
        variants={{ initial: { x: 200 }, animate: { x: 0 } }}
        className="flex flex-row-reverse items-center gap-[20px] min-h-[80px]"
      >
        <button
          onClick={openDrawer}
          className="w-[40px] h-[40px] relative flex items-center"
        >
          <Hamburger toggled={isOpen} color="#1B1211" />
        </button>

        {/* Icons */}
        <Icons />
      </motion.div>

      <MenuDrawer
        menu={
          customerAccessToken
            ? [...links, ...signinLinks]
            : [...links, ...signoutLinks]
        }
        isOpen={isOpen}
        onClose={closeDrawer}
      />
      {/* <Drawer open={isOpen} lockBackgroundScroll onClose={toggleDrawer} direction="left" size="100vw" duration={300}>
        <div className="text-black">
          <div className="flex items-center justify-center relative">
            <button className="absolute top-[10px] right-[10px]" onClick={toggleDrawer}>
              <AiOutlineClose style={{ fontSize: '32px' }} />
            </button>
            <div className="relative w-[130px] h-[120px] flex items-center">
              <img src="/images/navbar/logo.png" alt="menu button" style={{ objectFit: 'contain' }} />
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#101010]" />
          <div className="flex flex-col items-center px-[20px] py-[50px] text-[26px] md:text-[45px]">
            <div className="flex flex-col gap-[15px] items-center">
              {collections?.map((link: any) => (
                <motion.div key={link?.handle} ref={ref} animate={controls} initial="hidden" variants={getVariant(link?.variantValue)}>
                  <a href={link?.handle} onClick={toggleDrawer}>
                    {link?.name}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Drawer> */}
    </>
  );
};
