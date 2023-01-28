import styles from './navbar.module.css';

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between pl-[120px] pr-[40px] py-[14px]">
      {/* Logo */}
      <img src="/images/navbar/logo.png" alt="logo" />

      {/* Links */}
      <div className="flex items-center gap-[45px]">
        <div className={`${styles['nav-link']} cursor-pointer select-none`}>home</div>
        <div className={`${styles['nav-link']} cursor-pointer select-none`}>blade</div>
        <div className={`${styles['nav-link']} cursor-pointer select-none`}>gear</div>
        <div className={`${styles['nav-link']} cursor-pointer select-none`}>all blades gear</div>
        <div className={`${styles['nav-link']} cursor-pointer select-none`}>About</div>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-[30px]">
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
      </div>
    </nav>
  );
};
