import styles from './navbar.module.css';
import { useEffect, useState } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { AiOutlineDown } from 'react-icons/ai';
import { Menu } from './mobile-nav.client';
import { Icons } from './nav-icons.client';
import { Link } from '@shopify/hydrogen';
import { Dropdown } from 'antd';

const getVariant = (duration: number) => ({
  visible: { x: 0, opacity: 1, transition: { duration } },
  hidden: { x: 10, opacity: 0, transition: { duration } },
});

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, []);

  return (
    <nav className="flex items-center justify-between overflow-hidden py-[14px] px-[20px] md:pl-[120px] md:pr-[40px] relative z-10">
      {/* Logo */}
      <Link to="/">
        <motion.div animate={controls} initial="hidden" variants={getVariant(0.5)} className="w-[250px] md:w-[unset]">
          <img src="/images/navbar/logo.png" alt="logo" className="w-[125px]" />
        </motion.div>
      </Link>
      {/* Mobile Menu (Links) */}
      <motion.div animate={controls} initial="hidden" variants={getVariant(0.5)} className="block md:hidden">
        <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      </motion.div>

      {/* Links */}
      <div className="items-center gap-[45px] hidden md:flex">
        <Link to="/">
          <motion.div
            animate={controls}
            initial="hidden"
            variants={getVariant(0.1)}
            className={`${styles['nav-link']} cursor-pointer select-none`}
          >
            home
          </motion.div>
        </Link>
        <Link to="/blades">
          <motion.div
            animate={controls}
            initial="hidden"
            variants={getVariant(0.3)}
            className={`${styles['nav-link']} cursor-pointer select-none`}
          >
            blades
          </motion.div>
        </Link>
        <Dropdown
          trigger={['click']}
          overlayStyle={{ backgroundColor: '#dedede' }}
          dropdownRender={() => (
            // Shop Sub Pages
            <div className="flex flex-col">
              <Link to="/shop/all" className="hover:bg-gray-300 transition-all">
                <div className={`${styles['nav-link']} cursor-pointer select-none px-[20px] py-[13px]`}>all</div>
              </Link>
              <Link to="/shop/all" className="hover:bg-gray-300 transition-all">
                <div className={`${styles['nav-link']} cursor-pointer select-none px-[20px] py-[13px]`}>blades</div>
              </Link>
              <Link to="/shop/all" className="hover:bg-gray-300 transition-all">
                <div className={`${styles['nav-link']} cursor-pointer select-none px-[20px] py-[13px]`}>equipment</div>
              </Link>
              <Link to="/shop/all" className="hover:bg-gray-300 transition-all">
                <div className={`${styles['nav-link']} cursor-pointer select-none px-[20px] py-[13px]`}>gear</div>
              </Link>
            </div>
          )}
        >
          {/* Shop Heading */}
          <motion.div
            animate={controls}
            initial="hidden"
            variants={getVariant(0.5)}
            className={`${styles['nav-link']} cursor-pointer select-none flex items-center gap-[5px]`}
          >
            <span>shop</span>
            <AiOutlineDown />
          </motion.div>
        </Dropdown>
        <Link to="/about">
          <motion.div
            animate={controls}
            initial="hidden"
            variants={getVariant(0.9)}
            className={`${styles['nav-link']} cursor-pointer select-none`}
          >
            About
          </motion.div>
        </Link>
        <Link to="/contact">
          <motion.div
            animate={controls}
            initial="hidden"
            variants={getVariant(1.2)}
            className={`${styles['nav-link']} cursor-pointer select-none`}
          >
            Contact
          </motion.div>
        </Link>
        <motion.div
          animate={controls}
          initial="hidden"
          variants={getVariant(0.7)}
          className={`${styles['nav-link']} cursor-pointer select-none`}
        >
          Gallery
        </motion.div>
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
        <Icons />
      </motion.div>
    </nav>
  );
};
