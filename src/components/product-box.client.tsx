import { Link } from "@shopify/hydrogen/client";
import { message } from "antd";
import { ProductOptionsProvider, AddToCartButton } from "@shopify/hydrogen";
import { useRef } from "react";

export const ProductBox = ({ data }: any) => {
  const performed = useRef() as any;
  const buttonRef = useRef() as any;

  const handleCustomOnClick = async (event: any) => {
    if (performed.current) {
      performed.current = false;
      return;
    }

    event.preventDefault(); // stop default behaviour
    performed.current = true; // prevents retriggering
    message.success("Added to cart", 1);
    buttonRef.current.click(); // trigger button default behaviour
  };
  return (
    <ProductOptionsProvider
      data={data}
      initialVariantId={data?.variants?.nodes?.[0]?.id}
    >
      <div className="max-w-[350px] m-auto ">
        {/* Image */}
        <div className="h-[350px] w-full bg-[#DCDCDC] rounded-[30px] flex items-center justify-center product-box relative">
          <Link
            to={`/products/${data?.handle}`}
            className="object-cover w-full h-full rounded-[30px] shadow-md hover:shadow-xl transition-all"
          >
            <img
              src={data?.variants?.nodes?.[0]?.image?.url}
              alt="black shirt"
              className="object-cover w-full h-full rounded-[30px] shadow-md hover:shadow-xl transition-all"
              style={{ opacity: !data?.availableForSale ? 0.75 : 1 }}
            />
          </Link>
          {!data?.availableForSale ? (
            <p className="bg-black text-white absolute top-[1rem] right-[1rem] text-[1.1rem] hover:text-white rounded-[83px] hover:bg-gray-800 disabled:bg-opacity-90 inline-block font-medium text-center py-3 px-6 leading-none w-full border transition-all max-w-[140px]">
              Sold out
            </p>
          ) : (
            <></>
          )}
          <AddToCartButton
            variantId={data?.variants?.nodes?.[0]?.id}
            onClick={handleCustomOnClick as any}
            buttonRef={buttonRef}
            accessibleAddingToCartLabel="Adding Item to your cart"
            disabled={!data?.availableForSale}
            style={
              !data?.availableForSale
                ? { opacity: 0.75, cursor: "not-allowed" }
                : {}
            }
            className="product-box__link transition-all absolute left-[50%] -translate-x-[50%] bottom-5"
          >
            <span className="bg-white text-black text-[1.1rem] hover:text-white rounded-[83px] hover:bg-gray-800 disabled:bg-opacity-90 inline-block font-medium text-center py-3 px-6 max-w-xl leading-none w-full border transition-all">
              Quick Add
            </span>
          </AddToCartButton>
        </div>
        {/* Text */}
        <Link
          to={`/products/${data?.handle}`}
          className="object-cover w-full h-full rounded-[30px] shadow-md hover:shadow-xl transition-all"
        >
          <div className="mt-[15px] flex justify-between">
            <div className="">
              <p className="text-[18px] font-[600] text-black">{data?.title}</p>
              <p className="text-[24px] font-[600] text-black">
                ${data?.variants?.nodes?.[0]?.priceV2?.amount}
              </p>
            </div>
            <div className="pt-[2px] pr-[5px]">
              <img
                src="https://res.cloudinary.com/samtufail726/image/upload/v1678696771/kodiak/stars.png"
                alt="stars"
                className="pt-[2px] pr-[5px]"
              />
            </div>
          </div>
        </Link>
      </div>
    </ProductOptionsProvider>
  );
};
