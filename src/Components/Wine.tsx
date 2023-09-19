const Wine = () => {
  return (
    <div className="relative grid grid-cols-12 md:h-[450px] lg:h-[500px] w-full px-[23px] py-[17px] md:py-[300px] md:px-[52px] ">
      <div className="  w-full h-full col-span-12 md:col-span-7 col-end-auto md:col-end-13">
        <img
          src={
            "https://images.squarespace-cdn.com/content/v1/5efd2b45c5ac7d61abff6eff/1620678030656-UNKVX11IW946206LMCLJ/cale-ms-brand-390.jpg?format=1500w"
          }
          alt="Photograpy picture"
          className="w-full h-full object-contain"
        />
        <div className="py-[10px]">
          <a
            href="#"
            className="uppercase text-sm font-semibold font-mono underline tracking-widest"
          >
            WINE BRANDING & PACKAGING
          </a>
        </div>
      </div>
    </div>
  );
};

export default Wine;
