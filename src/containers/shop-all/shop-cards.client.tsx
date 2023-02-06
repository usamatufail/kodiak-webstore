import { ProductOptionsProvider } from '@shopify/hydrogen';
import { ShopCard } from '../../components';
import { allData } from '../../data';

export const ShopCards = ({ data = allData }: { data: any }) => {
  return (
    <div className="px-[280px] flex flex-col gap-[20px] mb-[4px] mt-[4px] py-[45px] overflow-hidden relative md:grid md:grid-cols-2 md:gap-[45px]">
      <img
        className="z-10 absolute top-0 left-0 object-cover w-full h-full"
        src="https://res.cloudinary.com/samtufail726/image/upload/q_auto,b_black,o_40/v1675496363/kodiak/Shop/All/DSC02514_jpiryo.jpg"
        alt="img-bg"
      />
      <div className="absolute z-20 w-full h-full top-0 left-0 bg-black opacity-40" />

      {data?.nodes?.map((data: any) => (
        <div key={data?.id} className="relative z-30">
          <ProductOptionsProvider data={data} initialVariantId={data?.variants?.nodes?.[0]?.id}>
            <ShopCard
              id={data?.id}
              img={data?.variants?.nodes?.[0]?.image?.url}
              title={data?.title}
              txt={data?.seo?.description}
              price={`${data?.variants?.nodes?.[0]?.priceV2?.amount}`}
              variantId={data?.variants?.nodes?.[0]?.id}
            />
          </ProductOptionsProvider>
        </div>
      ))}
    </div>
  );
};
