import styles from './navbar.module.css';
import { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const getVariant = (duration: number) => ({
  visible: { x: 0, opacity: 1, transition: { duration } },
  hidden: { x: 10, opacity: 0, transition: { duration } },
});

export const Navbar = () => {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  return (
    <nav className="flex items-center justify-between pl-[120px] pr-[40px] py-[14px]">
      {/* Logo */}
      <motion.div ref={ref} animate={controls} initial="hidden" variants={getVariant(0.5)}>
        <img src="/images/navbar/logo.png" alt="logo" />
      </motion.div>

      {/* Links */}
      <div className="flex items-center gap-[45px]">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={getVariant(0.1)}
          className={`${styles['nav-link']} cursor-pointer select-none`}
        >
          home
        </motion.div>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={getVariant(0.3)}
          className={`${styles['nav-link']} cursor-pointer select-none`}
        >
          blade
        </motion.div>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={getVariant(0.5)}
          className={`${styles['nav-link']} cursor-pointer select-none`}
        >
          gear
        </motion.div>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={getVariant(0.7)}
          className={`${styles['nav-link']} cursor-pointer select-none`}
        >
          all blades gear
        </motion.div>
        <motion.div
          ref={ref}
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
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { x: 0, opacity: 1, transition: { duration: 0.4 } },
          hidden: { x: -50, opacity: 0, transition: { duration: 0.4 } },
        }}
        className="flex items-center gap-[30px]"
      >
        <div>
          <img src="/images/navbar/search.svg" alt="search here" />
        </div>
        <div className="relative">
          <div
            style={{ background: 'url(/images/navbar/cart-bubble.png)', backgroundPosition: 'center', backgroundSize: 'cover' }}
            className={`absolute -right-[10px] -top-[10px] rounded-[50%] h-[17px] w-[17px] text-white flex items-center justify-center text-[11px]`}
          >
            3
          </div>
          <img src="/images/navbar/cart.svg" alt="open the cart" />
        </div>
        <div>
          <img src="/images/navbar/user.svg" alt="user icon here" />
        </div>
      </motion.div>
    </nav>
  );
};
