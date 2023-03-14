export const INPUT_STYLE_CLASSES =
  " h-[52px] bg-[rgba(255,255,255,0.6)] focus:bg-[rgba(255,255,255,0.8)]  w-full  placeholder:text-black transition-all border-none ";

export const getInputStyleClasses = (isError?: string | null) => {
  return `${INPUT_STYLE_CLASSES} ${isError ? "border-red-500" : ""}`;
};
