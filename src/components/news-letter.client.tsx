export const NewsLetter = ({ image = '/images/news-letter/background.png' }) => {
  return (
    <div
      className="min-h-[400px] bg-center bg-no-repeat bg-cover text-white flex items-center md:justify-center md:min-h-[450px] relative after:h-full after:w-full after:absolute after:bg-black after:opacity-[0.65] after:z-10"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="text-center relative z-20">
        <h2 className="text-[42px] tracking-[0.01em] capitalize font-bold md:text-[62px] md:font-[900]">Stay in the Loop</h2>
        <p className="mt-[15px] text-[20px]">Stay up to date with the latest discounts, promotions, & new releases</p>

        {/* Input */}
        <div className="items-center justify-center h-[48px] w-[350px] mx-auto grid grid-cols-[70%_auto] mt-[40px] md:w-[500px]">
          {/* Email Icon */}
          <div className="relative">
            <img src="/svg/email.svg" className="left-[10px] absolute top-[50%] translate-y-[-50%] md:left-[20px]" />
            <input
              className="h-[48px] border border-white border-solid rounded-[7px] bg-transparent w-[300px] pl-[45px] pr-[60px] placeholder:text-whtie md:w-[400px] md:pl-[60px] md:pr-[unset]"
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
