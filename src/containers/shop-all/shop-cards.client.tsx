import { ShopCard } from '../../components';

const cardData = [
  {
    img: '/images/shop-all/sharpening-stone.png',
    title: 'Sharpening Stone',
    txt: `'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'`,
    price: '12.00',
  },
  {
    img: '/images/shop-all/cleaning-kit.png',
    title: 'CLEANING KIT',
    txt: `'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'`,
    price: '12.00',
  },
  {
    img: '/images/shop-all/tongass.png',
    title: 'THE TONGASS',
    txt: `'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'`,
    price: '12.00',
  },
  {
    img: '/images/shop-all/leconte.png',
    title: 'THE LECONTE',
    txt: `'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'`,
    price: '12.00',
  },
];

export const ShopCards = () => {
  return (
    <div className="px-[280px] flex flex-col gap-[20px] mb-[4px] mt-[4px] py-[45px] overflow-hidden relative md:grid md:grid-cols-2 ">
      <img
        className="z-10 absolute top-0 left-0 object-cover w-full h-full"
        src="https://res.cloudinary.com/samtufail726/image/upload/f_auto,q_auto/v1675496363/kodiak/Shop/All/DSC02514_jpiryo.jpg"
        alt="img-bg"
      />
      <div className="absolute z-20 w-full h-full top-0 left-0 bg-black opacity-40" />

      {cardData.map((data) => (
        <div key={data.title} className="relative z-30">
          <ShopCard img={data.img} title={data.title} txt={data.txt} price={data.price} />
        </div>
      ))}
    </div>
  );
};
