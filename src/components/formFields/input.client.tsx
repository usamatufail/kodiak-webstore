export const Input = ({ icon = "", placeholder = "Name", className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <img
        src={icon}
        className="absolute top-[50%] -translate-y-[50%] left-[12.5px]"
      />
      <input
        className="h-[52px] bg-[rgba(255,255,255,0.6)] focus:bg-[rgba(255,255,255,0.8)] rounded-[8px] w-full  placeholder:text-black transition-all"
        placeholder={placeholder}
      />
    </div>
  );
};
