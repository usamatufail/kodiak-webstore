const KniveBox = ({
  background = '',
  infoTextColor = '',
  image = '',
  largeImage = false,
  lineProps = {
    width: '35%',
    rotate: '45deg',
    bottom: '110px',
    left: '65px',
  },
}) => {
  return (
    <div className="w-[375px] h-[285px] bg-gray-400 skew-x-12 overflow-hidden relative">
      {/* Background */}
      <div className="-skew-x-12 w-[120%] absolute left-[-35px]">
        <img src={background} alt="blade-bg" className="h-[285px] w-[445px] block object-cover relative opacity-75" />
      </div>

      {/* Blade Name and Info */}
      <div className="-skew-x-12 flex flex-col items-center justify-between min-h-[285px]">
        <div />
        <div className="flex justify-center items-center relative min-h-[1px] w-full">
          <img src={image} alt="blade-1" className="w-[75%]" style={{ position: largeImage ? 'absolute' : 'static', right: '-9px' }} />
        </div>
        <p className="pb-[20px] tracking-wider text-[36px] font-[700]" style={{ color: infoTextColor ? infoTextColor : '#fff' }}>
          [INFO]
        </p>
      </div>

      {/* Line */}
      <div
        className="w-[70%] h-[3px] bg-black absolute"
        style={{ width: lineProps.width, rotate: lineProps.rotate, bottom: lineProps.bottom, left: lineProps.left }}
      ></div>

      {/* Top Left */}
      <div className="absolute top-[4px] left-[4px] h-[45px] w-[45px]">
        <img src="/images/knives/top-left.png" />
      </div>
      {/* Bottom Right */}
      <div className="absolute bottom-[-1px] right-[4px] h-[45px] w-[45px]">
        <img src="/images/knives/bottom-right.png" />
      </div>
    </div>
  );
};

export const Knives = () => {
  return (
    <div
      className="min-h-[639px] px-[90px] text-white grid grid-cols-4 items-center"
      style={{ backgroundImage: 'url(/images/knives/background.png)' }}
    >
      <KniveBox background="/images/knives/blade-1-bg.png" infoTextColor="black" image="/images/knives/blade-1.png" />
      <KniveBox
        background="/images/knives/blade-2-bg.png"
        infoTextColor="black"
        image="/images/knives/blade-2.png"
        largeImage
        lineProps={{ width: '51%', rotate: '136deg', bottom: '133px', left: '164px' }}
      />
      <KniveBox background="/images/knives/blade-3-bg.png" image="/images/knives/blade-3.png" />
      <KniveBox
        background="/images/knives/blade-4-bg.png"
        image="/images/knives/blade-4.png"
        lineProps={{ width: '41%', rotate: '124deg', bottom: '130px', left: '123px' }}
      />
    </div>
  );
};
