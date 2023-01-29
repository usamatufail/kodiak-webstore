import Slider from '@ant-design/react-slick';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const leftVariant = (duration: number) => ({
  visible: { x: 0, opacity: 1, transition: { duration } },
  hidden: { x: -200, opacity: 0, transition: { duration } },
});
const rightVariant = (duration: number) => ({
  visible: { x: 0, opacity: 1, transition: { duration } },
  hidden: { x: 200, opacity: 0, transition: { duration } },
});

const mainVariant = (duration: number) => ({
  visible: { scale: 1, opacity: 1, transition: { duration } },
  hidden: { scale: 0, opacity: 0, transition: { duration } },
});

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
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
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div className="overflow-hidden py-[70px] mt-[18px] mb-[18px] border-t-4 border-b-4 border-b-solid border-b-black border-t-solid border-t-black flex items-end justify-between">
      <motion.div animate={controls} initial="hidden" variants={leftVariant(0.5)} className="max-w-[300px] min-w-[300px]">
        <img src="/images/products/left-bg.png" alt="background" />
      </motion.div>
      <motion.div ref={ref} animate={controls} initial="hidden" variants={mainVariant(1)} className="custom-slick max-w-[1200px]">
        <Slider {...settings}>
          {productsData?.map((product: any) => {
            return <ProductCard key={product?.id} {...product} />;
          })}
        </Slider>
      </motion.div>
      <motion.div animate={controls} initial="hidden" variants={rightVariant(0.5)} className="max-w-[300px] min-w-[300px]">
        <img src="/images/products/right-bg.png" alt="background" />
      </motion.div>
    </div>
  );
};
