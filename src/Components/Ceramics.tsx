type Props = {};

const Ceramics = (props: Props) => {
  return (
    <div className="relative grid grid-cols-12  md:h-[538px] lg:h-[890px] w-full px-[23px] py-[17px] md:py-[200px] md:px-[52px] ">
      <div className="w-full h-full col-span-12 md:col-span-8">
        <img
          src={
            "https://images.squarespace-cdn.com/content/v1/5efd2b45c5ac7d61abff6eff/1620678066355-NMARBD8LJ72DQNM4B50K/balconystudio-2020-web-16.jpg?format=1500w"
          }
          alt="cermaics picture"
          className=" object-contain  md:h-[538px] lg:h-[890px] "
        />
        <div className="py-[10px]">
          <a
            href="#"
            className="uppercase text-sm font-semibold font-mono underline tracking-widest"
          >
            Ceramics
          </a>
        </div>
      </div>
    </div>
  );
};

export default Ceramics;
