export const ShopCard = ({
  img = '/images/shop-all/sharpening-stone.png',
  title = 'Sharpening Stone',
  txt = `'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,`,
  price = '12.00',
}) => {
  return (
    <div className="flex flex-col gap-[25px]">
      <img src={img} alt={title} />
      <h1 className="text-[26px] font-[700] text-black mt-[25px]">{title}</h1>
      <p className="text-[19px] font-[400] text-black">{txt}</p>
      <div className="flex">
        <button className="h-[75px] px-[20px] text-[24px] font-[900] text-white bg-black">${price}</button>
      </div>
    </div>
  );
};
