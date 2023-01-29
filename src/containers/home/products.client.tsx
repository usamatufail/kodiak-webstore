import Slider from '@ant-design/react-slick';

// Slider Components
function CustomNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: 'block', height: '40px', width: '40px' }} onClick={onClick}>
      <img src="/svg/right.svg" alt="back-arrow" />
    </div>
  );
}

function CustomPreviousArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: 'block', height: '40px', width: '40px' }} onClick={onClick}>
      <img src="/svg/left.svg" alt="back-arrow" />
    </div>
  );
}
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  nextArrow: <CustomNextArrow />,
  prevArrow: <CustomPreviousArrow />,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const productsData = [
  { id: 1, name: 'the tongass', price: '175.00', image: '/images/products/black.png' },
  { id: 2, name: 'the tongass', price: '175.00', image: '/images/products/white.png' },
  { id: 3, name: 'the tongass', price: '175.00', image: '/images/products/black.png' },
  { id: 4, name: 'the tongass', price: '175.00', image: '/images/products/white.png' },
  { id: 5, name: 'the tongass', price: '175.00', image: '/images/products/black.png' },
  { id: 6, name: 'the tongass', price: '175.00', image: '/images/products/white.png' },
  { id: 7, name: 'the tongass', price: '175.00', image: '/images/products/black.png' },
];

const ProductCard = ({ name = '', image = '', price = '' }) => {
  return (
    <div className="max-w-[220px] m-auto">
      {/* Image */}
      <div className="h-[229px] w-[220px] bg-[#DCDCDC] rounded-[30px] flex items-center justify-center">
        <img src={image} alt="black shirt" />
      </div>
      {/* Text */}
      <div className="mt-[15px] text-center">
        <p className="uppercase">{name}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export const Products = () => {
  return (
    <div className="py-[70px] mt-[18px] mb-[18px] border-t-4 border-b-4 border-b-solid border-b-black border-t-solid border-t-black flex items-end justify-between">
      <div className="max-w-[300px]">
        <img src="/images/products/left-bg.png" alt="background" />
      </div>
      <div className="custom-slick container">
        <Slider {...settings}>
          {productsData?.map((product: any) => {
            return <ProductCard key={product?.id} {...product} />;
          })}
        </Slider>
      </div>
      <div className="max-w-[300px]">
        <img src="/images/products/right-bg.png" alt="background" />
      </div>
    </div>
  );
};
