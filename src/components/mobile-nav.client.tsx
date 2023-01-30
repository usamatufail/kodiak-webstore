import { useAnimation, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Drawer from 'react-modern-drawer';
import Hamburger from 'hamburger-react';
import { AiOutlineClose } from 'react-icons/ai';
import { Icons } from './nav-icons.client';

export const Menu = ({ isOpen, setIsOpen }: any) => {
  console.log(isOpen);
  const [collections, setCollections] = useState<any>([]);
  useEffect(() => {
    (async () => {
      // Generating Custom Links
      const firstLinks = [
        { name: 'Home', handle: '/', variantValue: 0 },
        { name: 'Blades', handle: '/shop', variantValue: 0.2 },
        { name: 'Gear', handle: '/shop', variantValue: 0.2 },
        { name: 'All Blades Gear', handle: '/shop', variantValue: 0.2 },
        { name: 'About', handle: '/shop', variantValue: 0.2 },
      ];
      const lastLink = [{ name: 'About Us', handle: '/about-us', variantValue: 0.3 }];
      setCollections([...firstLinks, ...lastLink]);
    })();
  }, []);

  const toggleDrawer = () => {
    setIsOpen((prevState: any) => !prevState);
  };
  const getVariant = (duration: number) => ({
    visible: { opacity: 1, transition: { duration } },
    hidden: { opacity: 0, transition: { duration } },
  });

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <>
      <motion.div animate={{ rotate: 180 }} transition={{ type: 'spring' }}>
        <button onClick={toggleDrawer} className="w-[40px] h-[40px] relative">
          <Hamburger toggled={isOpen} color="#1B1211" />
        </button>
      </motion.div>

      <Drawer open={isOpen} onClose={toggleDrawer} direction="left" size="100vw" duration={300}>
        <div className="text-black">
          {/* Logo */}
          <div className="flex items-center justify-center relative">
            <button className="absolute top-[10px] right-[10px]" onClick={toggleDrawer}>
              <AiOutlineClose style={{ fontSize: '32px' }} />
            </button>
            <div className="relative w-[200px] h-[120px] flex items-center">
              <img src="/images/navbar/logo.png" alt="menu button" style={{ objectFit: 'contain' }} />
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#101010]" />
          {/* Menu Links */}
          <div className="flex flex-col items-center px-[20px] py-[50px] text-[26px] md:text-[45px]">
            {collections?.map((link: any) => (
              <motion.div key={link?.handle} ref={ref} animate={controls} initial="hidden" variants={getVariant(link?.variantValue)}>
                <a href={link?.handle} onClick={toggleDrawer}>
                  {link?.name}
                </a>
              </motion.div>
            ))}
            <motion.div
              animate={controls}
              initial="hidden"
              ref={ref}
              variants={{
                visible: { x: 0, opacity: 1, transition: { duration: 0.4 } },
                hidden: { x: -50, opacity: 0, transition: { duration: 0.4 } },
              }}
              className=" items-center gap-[30px] flex md:hidden mt-[40px]"
            >
              {/* Icons */}
              <Icons />
            </motion.div>
          </div>
        </div>
      </Drawer>
    </>
  );
};
