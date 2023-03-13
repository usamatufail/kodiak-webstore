// import { ProductOptionsProvider } from "@shopify/hydrogen";
import {
  ProductBox,
  // ShopCard
} from "../../components";
import { allData } from "../../data";

export const ShopCards = ({ data = allData }: { data: any }) => {
  return (
    <div
      className="px-[12px] md:px-[280px] flex flex-col gap-[45px] mb-[4px] mt-[4px] py-[45px] bg-cover bg-no-repeat overflow-hidden relative md:grid md:grid-cols-4 md:gap-[45px]"
      // style={{
      //   backgroundImage:
      //     "url(https://res.cloudinary.com/samtufail726/image/upload/q_auto,b_black,o_20/v1675496363/kodiak/Shop/All/DSC02514_jpiryo.jpg)",
      // }}
    >
      {data?.nodes?.map((data: any) => {
        return (
          <div key={data?.id}>
            <ProductBox key={data?.id} data={data} />
            {/* <ProductOptionsProvider data={data} initialVariantId={data?.variants?.nodes?.[0]?.id}>
              <ShopCard
                id={data?.id}
                img={data?.variants?.nodes?.[0]?.image?.url}
                title={data?.title}
                txt={data?.seo?.description}
                price={`${data?.variants?.nodes?.[0]?.priceV2?.amount}`}
                variantId={data?.variants?.nodes?.[0]?.id}
                handle={data?.handle}
                availableForSale={data?.availableForSale}
              />
            </ProductOptionsProvider> */}
          </div>
        );
      })}
    </div>
  );
};
