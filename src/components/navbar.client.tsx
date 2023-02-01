import styles from './navbar.module.css';
import { useEffect, useState } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { Menu } from './mobile-nav.client';
import { Icons } from './nav-icons.client';

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
      <motion.div animate={controls} initial="hidden" variants={getVariant(0.5)} className="w-[250px] md:w-[unset]">
        <img src="/images/navbar/logo.png" alt="logo" />
      </motion.div>
      {/* Mobile Menu (Links) */}
      <motion.div animate={controls} initial="hidden" variants={getVariant(0.5)} className="block md:hidden">
        <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      </motion.div>

      {/* Links */}
      <div className="items-center gap-[45px] hidden md:flex">
        <motion.div
          animate={controls}
          initial="hidden"
          variants={getVariant(0.1)}
          className={`${styles['nav-link']} cursor-pointer select-none`}
        >
          home
        </motion.div>
        <motion.div
          animate={controls}
          initial="hidden"
          variants={getVariant(0.3)}
          className={`${styles['nav-link']} cursor-pointer select-none`}
        >
          blade
        </motion.div>
        <motion.div
          animate={controls}
          initial="hidden"
          variants={getVariant(0.5)}
          className={`${styles['nav-link']} cursor-pointer select-none`}
        >
          gear
        </motion.div>
        <motion.div
          animate={controls}
          initial="hidden"
          variants={getVariant(0.7)}
          className={`${styles['nav-link']} cursor-pointer select-none`}
        >
          all blades gear
        </motion.div>
        <motion.div
          animate={controls}
          initial="hidden"
          variants={getVariant(0.9)}
          className={`${styles['nav-link']} cursor-pointer select-none`}
        >
          About
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
