import Slider from '@ant-design/react-slick';
import { useState, useEffect } from 'react';

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

export const Links = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    let imgHolder: string[] = [];
    for (let i = 2; i < 24; i++) {
      imgHolder?.push(`https://res.cloudinary.com/samtufail726/image/upload/q_auto/v1675689328/kodiak/icons/1_${i}.png`);
    }
    setImages(imgHolder);
  }, []);

  return (
    <div className="flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.95)' }}>
      <div className="pt-[45px] pb-[45px] custom-slick w-[calc(100vw)] lg:w-[1200px] relative">
        <Slider {...settings}>
          {images?.map((image) => {
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
