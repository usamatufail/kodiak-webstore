const CustomLink = ({ link = '', img = '', text = '', objectPosition = '' }) => {
  return (
    <a href={link} className="relative flex items-center justify-center">
      <img src={img} className="absolute w-full h-[150px] object-cover" style={objectPosition ? { objectPosition } : {}} />
      <div className="absolute z-10 top-0 left-0 w-full h-full bg-black opacity-50" />

      <h2 className="relative z-20 text-[34px] text-white titlecase font-bold">{text}</h2>
    </a>
  );
};

export const Navigation = () => {
  return (
    <div className="grid grid-cols-2 mt-[4px] h-[150px] gap-[4px]">
      <CustomLink
        link="#hunting-knives"
        img="https://res.cloudinary.com/samtufail726/image/upload/q_auto/v1675474860/kodiak/Blades/DSC02380_aprq6x.jpg"
        text="Hunting Knives"
      />
      <CustomLink
        link="#handmade-knives"
        img="https://res.cloudinary.com/samtufail726/image/upload/q_auto/v1675683664/kodiak/Blades/DSC03679-Edit_a4xfoe_1.jpg"
        text="Handmade Knives"
        // objectPosition="0px -100px"
      />
    </div>
  );
};
