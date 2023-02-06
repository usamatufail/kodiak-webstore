export const INPUT_STYLE_CLASSES =
  'appearance-none h-[52px] bg-[rgba(255,255,255,0.6)] focus:bg-[rgba(255,255,255,0.8)] rounded-[8px] w-full pl-[10px] text-black placeholder:text-black transition-all';

export const getInputStyleClasses = (isError?: string | null) => {
  return `${INPUT_STYLE_CLASSES} ${isError ? 'border-red-500' : 'border-primary/20'}`;
};
