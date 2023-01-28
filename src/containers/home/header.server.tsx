export const Header = () => {
  return (
    <header
      className="min-h-[78vh] flex flex-col justify-center px-[290px]"
      style={{ background: 'url(/images/header/header.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <h1 className="max-w-[895px] text-[168px] text-white leading-[1] font-bold">Handmade Knives</h1>
      <p className="font-bold text-white text-[36px]">
        That embody the Alaskan spirit.
        <br />
        Crafted with precision and ruggedness for those who seek adventure.
      </p>
    </header>
  );
};
