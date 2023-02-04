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
    <div className="px-[280px] flex flex-col gap-[20px] mb-[20px] mt-[20px] md:grid md:grid-cols-2">
      {cardData.map((data) => (
        <div key={data.title}>
          <ShopCard img={data.img} title={data.title} txt={data.txt} price={data.price} />
        </div>
      ))}
    </div>
  );
};
