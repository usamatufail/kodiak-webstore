export const Location = () => {
  return (
    <div
      className="mt-[8px] mb-[8px] min-h-[450px] bg-center bg-no-repeat bg-cover text-white flex items-center justify-center relative"
      style={{ backgroundImage: 'url(/images/location/background.png)' }}
    >
      <div className="bg-black w-full h-full absolute z-10 opacity-60"></div>
      <div className="w-full h-full absolute z-20 flex items-center justify-center">
        <h2 className="text-[62px] tracking-[0.01em] capitalize font-[900]">Location</h2>
      </div>
    </div>
  );
};