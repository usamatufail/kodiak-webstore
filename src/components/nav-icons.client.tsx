import { Link, useCart } from '@shopify/hydrogen';
import { useDrawer } from './index';
import { CartDrawer } from './shopify/global/CartDrawer.client';

export const Icons = () => {
  const { totalQuantity } = useCart();
  const { isOpen, openDrawer, closeDrawer } = useDrawer();
  return (
    <>
      <CartDrawer isOpen={isOpen} onClose={closeDrawer} />
      {/* <div>
        <img src="/images/navbar/search.svg" alt="search here" />
      </div> */}
      <button onClick={openDrawer}>
        <div className="relative">
          <div
            style={{ background: 'url(/images/navbar/cart-bubble.png)', backgroundPosition: 'center', backgroundSize: 'cover' }}
            className={`absolute -right-[10px] -top-[10px] rounded-[50%] h-[17px] w-[17px] text-white flex items-center justify-center text-[11px]`}
          >
            {totalQuantity > 0 ? totalQuantity : 0}
          </div>
          <img src="/images/navbar/cart.svg" alt="open the cart" />
        </div>
      </button>
      <Link to={'/account/login'}>
        <div>
          <img src="/images/navbar/user.svg" alt="user icon here" />
        </div>
      </Link>
    </>
  );
};
