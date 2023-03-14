const CustomLink = ({
  link = "",
  img = "",
  text = "",
  objectPosition = "",
}) => {
  return (
    <a href={link} className="relative flex items-center justify-center">
      <img
        src={img}
        className="absolute w-full h-[150px] object-cover"
        style={objectPosition ? { objectPosition } : {}}
      />

      <h2 className="relative z-20 text-[30px] md:text-[34px] text-white titlecase font-bold text-center">
        {text}
      </h2>
    </a>
  );
};

export const Navigation = () => {
  return (
    <div className="grid grid-cols-2 mt-[4px] h-[150px] gap-[4px]">
      <CustomLink
        link="#hunting-knives"
        img="https://res.cloudinary.com/samtufail726/image/upload/q_auto,b_black,o_60/v1675474860/kodiak/Blades/DSC02380_aprq6x.jpg"
        text="Hunting F.A.S.T"
      />
      <CustomLink
        link="#handmade-knives"
        img="https://res.cloudinary.com/samtufail726/image/upload/q_auto,b_black,o_60/v1675683664/kodiak/Blades/DSC03679-Edit_a4xfoe_1.jpg"
        text="Handmade F.A.S.T"
      />
    </div>
  );
};
