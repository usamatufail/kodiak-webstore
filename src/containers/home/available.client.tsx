import styles from './available.module.css';

const arr = [1, 2, 3, 4, 5];

const card1 = arr?.map((arr) => `/images/available/available1-${arr}.png`);
const card2 = arr?.map((arr) => `/images/available/available2-${arr}.png`);

const ShopCard = ({ images }: { images: string[] }) => {
  return (
    <div className={`${styles['shop-card']} py-[56px] px-[25px] flex flex-col justify-between`}>
      <div />
      <div className="flex items-center justify-center">
        <button className="bg-white text-black rounded-[7px] py-[24px] px-[45px] text-[18px]">Shop Now</button>
      </div>
      <div className="grid grid-cols-5 gap-[35px]">
        {images.map((image) => {
          return (
            <div key={image}>
              <img src={image} alt="available image" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Available = () => {
  return (
    <section className="mt-[55px]">
      <h1 className="text-[#126149] text-[77px] font-[900] text-center">Available Blades</h1>
      <div className="grid grid-cols-2 gap-[34px] px-[70px] mt-[96px]">
        <ShopCard images={card1} />
        <ShopCard images={card2} />
      </div>
    </section>
  );
};
