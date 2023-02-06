import { useAnimation, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Drawer from 'react-modern-drawer';
import Hamburger from 'hamburger-react';
import { AiOutlineClose } from 'react-icons/ai';
import { Icons } from './nav-icons.client';

export const Menu = ({ isOpen, setIsOpen }: any) => {
  const [collections, setCollections] = useState<any>([]);
  useEffect(() => {
    (async () => {
      // Generating Custom Links
      const links = [
        { name: 'Home', handle: '/', variantValue: 0 },
        { name: 'Shop All', handle: '/shop/all', variantValue: 0.2 },
        { name: 'Shop Blades', handle: '/shop/blades', variantValue: 0.2 },
        { name: 'Shop Equipment', handle: '/shop/equipments', variantValue: 0.2 },
        { name: 'Shop Gear', handle: '/shop/gear', variantValue: 0.2 },
        { name: 'Learn More', handle: '/blades', variantValue: 0 },
        { name: 'Contact Us', handle: '/contact', variantValue: 0.2 },
        { name: 'About', handle: '/about', variantValue: 0.2 },
      ];
      setCollections(links);
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
      <motion.div
        initial="initial"
        animate="animate"
        variants={{ initial: { x: 200 }, animate: { x: 0 } }}
        className="flex flex-row-reverse items-center gap-[20px]"
      >
        <button onClick={toggleDrawer} className="w-[40px] h-[40px] relative flex items-center">
          <Hamburger toggled={isOpen} color="#1B1211" />
        </button>

        {/* Icons */}
        <Icons />
      </motion.div>

      <Drawer open={isOpen} onClose={toggleDrawer} direction="left" size="100vw" duration={300}>
        <div className="text-black">
          {/* Logo */}
          <div className="flex items-center justify-center relative">
            <button className="absolute top-[10px] right-[10px]" onClick={toggleDrawer}>
              <AiOutlineClose style={{ fontSize: '32px' }} />
            </button>
            <div className="relative w-[130px] h-[120px] flex items-center">
              <img src="/images/navbar/logo.png" alt="menu button" style={{ objectFit: 'contain' }} />
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#101010]" />
          {/* Menu Links */}
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
      </Drawer>
    </>
  );
};
