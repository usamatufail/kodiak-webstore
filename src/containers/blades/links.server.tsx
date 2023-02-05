// const arr = [1, 2, 3, 4, 5];

// const card1 = arr?.map((arr) => `/images/available/available1-${arr}.png`);
// const card2 = arr?.map((arr) => `/images/available/available2-${arr}.png`);

// const images = [...card1, ...card2];

let images: string[] = [];
for (let i = 2; i < 15; i++) {
  images?.push(`/images/blades/icons/1 (${i}).png`);
}

export const Links = () => {
  return (
    <div className="flex items-center justify-center pt-[45px] pb-[45px] gap-[8px]" style={{ background: 'rgba(0, 0, 0, 0.98)' }}>
      {images?.length ? (
        images.map((image) => {
          return (
            <div key={image} className="cursor-pointer">
              <img key={image} src={image} alt="available image" className="max-w-[100px]" />
            </div>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
};
