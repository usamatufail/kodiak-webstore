import { Link } from '@shopify/hydrogen';

export const Icons = () => {
  return (
    <>
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
      <Link to={'/account/login'}>
        <div>
          <img src="/images/navbar/user.svg" alt="user icon here" />
        </div>
      </Link>
    </>
  );
};
