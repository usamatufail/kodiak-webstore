export const NewsLetter = () => {
  return (
    <div
      className="mt-[8px] mb-[8px] min-h-[450px] bg-center bg-no-repeat bg-cover text-white flex items-center justify-center"
      style={{ backgroundImage: 'url(/images/news-letter/background.png)' }}
    >
      <div className="text-center">
        <h2 className="text-[62px] tracking-[0.01em] capitalize font-[900]">Stay in the Loop</h2>
        <p className="mt-[15px] text-[20px]">Stay up to date with the latest discounts, promotions, & new releases</p>

        {/* Input */}
        <div className="items-center justify-center h-[48px] w-[500px] mx-auto grid grid-cols-[70%_auto] mt-[40px]">
          {/* Email Icon */}
          <div className="relative">
            <img src="/public/svg/email.svg" className="left-[20px] absolute top-[50%] translate-y-[-50%]" />
            <input
              className="h-[48px] border border-white border-solid rounded-[7px] bg-transparent w-[400px] pl-[60px] placeholder:text-whtie"
              placeholder="Your Email"
            />
          </div>
          <button className="w-[100px] h-[48px] border border-white border-solid bg-white text-black text-[12px] tracking-[0.16em] font-[700] px-[26px] rounded-[7px] relative">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};
