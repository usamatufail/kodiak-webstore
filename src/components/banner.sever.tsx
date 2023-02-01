export const Banner = ({ backgroundImg = '/images/banner/hunting-knives.png', heading = 'Heading Knive' }) => {
  return (
    <div
      className="min-h-[250px] leading-[1.12] flex justify-center items-center md:min-h-[350px]"
      style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <h2 className="text-white text-[58px] font-bold text-center md:text-[77px] md:font-[900]">{heading}</h2>
    </div>
  );
};
