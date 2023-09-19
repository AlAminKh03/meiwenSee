import React from "react";

type Props = {};

const Retail = (props: Props) => {
  return (
    <div className="relative grid grid-cols-12 h-[480px] lg:h-[480px] w-full px-[23px] py-[17px] md:py-[300px] md:px-[52px] ">
      <div className=" md:col-end-13 w-full h-full col-span-12 md:col-span-4">
        <img
          src={
            "https://images.squarespace-cdn.com/content/v1/5efd2b45c5ac7d61abff6eff/1605761082176-JOD7I46LOUMTACLWHR3Q/Instagrams-sh3.gif?format=1500w"
          }
          alt="Photograpy picture"
          className="w-full h-full object-contain"
        />
        <div className="py-[10px]">
          <a
            href="#"
            className="uppercase text-sm font-semibold font-mono underline tracking-widest"
          >
            Retail
          </a>
        </div>
      </div>
    </div>
  );
};

export default Retail;
