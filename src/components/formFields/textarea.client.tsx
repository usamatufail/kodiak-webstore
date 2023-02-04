export const TextArea = ({ icon = '/svg/contact/name.svg', placeholder = 'Name', className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <img src={icon} className="absolute top-[20px] left-[12.5px]" />
      <textarea
        className="rounded-[8px] w-full pl-[54px] bg-[rgba(255,255,255,0.6)] focus:bg-[rgba(255,255,255,0.8)] transition-all placeholder:text-black pt-[22px]"
        placeholder={placeholder}
        rows={10}
      />
    </div>
  );
};
