import Slider from '@ant-design/react-slick';

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 10,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 1000,
      },
    },
  ],
};

let images: string[] = [];
for (let i = 2; i < 23; i++) {
  images?.push(`/images/blades/icons/1 (${i}).png`);
}

export const Links = () => {
  return (
    <div className="flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.95)' }}>
      <div className="pt-[45px] pb-[45px] custom-slick max-w-[calc(100vw)] lg:max-w-[1200px] relative">
        <Slider {...settings}>
          {images.map((image) => {
            return (
              <div key={image} className="cursor-pointer">
                <img key={image} src={image} alt="available image" className="max-w-[100px]" />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
