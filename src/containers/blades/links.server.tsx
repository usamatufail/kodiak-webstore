const arr = [1, 2, 3, 4, 5];

const card1 = arr?.map((arr) => `/images/available/available1-${arr}.png`);
const card2 = arr?.map((arr) => `/images/available/available2-${arr}.png`);

const images = [...card1, ...card2];

export const Links = () => {
  return (
    <div className="flex items-center justify-center mt-[45px] gap-[4px]">
      {images.map((image) => {
        return (
          <div key={image} className="cursor-pointer">
            <img src={image} alt="available image" />
          </div>
        );
      })}
    </div>
  );
};
