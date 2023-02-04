import { ShopCard } from '../../components';
import { allData } from '../../data';

export const ShopCards = ({ data = allData }) => {
  return (
    <div className="px-[280px] flex flex-col gap-[20px] mb-[4px] mt-[4px] py-[45px] overflow-hidden relative md:grid md:grid-cols-2 md:gap-[45px]">
      <img
        className="z-10 absolute top-0 left-0 object-cover w-full h-full"
        src="https://res.cloudinary.com/samtufail726/image/upload/f_auto,q_auto/v1675496363/kodiak/Shop/All/DSC02514_jpiryo.jpg"
        alt="img-bg"
      />
      <div className="absolute z-20 w-full h-full top-0 left-0 bg-black opacity-40" />

      {data.map((data) => (
        <div key={data.title} className="relative z-30">
          <ShopCard img={data.img} title={data.title} txt={data.txt} price={data.price} />
        </div>
      ))}
    </div>
  );
};
