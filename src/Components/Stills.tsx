import React from "react";

type Props = {};

const Stills = (props: Props) => {
  return (
    <div className="relative grid grid-cols-12 md:h-[470px] lg:h-[635px] w-full px-[23px] pt-[17px] md:pt-[300px] md:px-[52px] ">
      <div className=" md:col-start-3 w-full h-full col-span-12 md:col-span-5">
        <img
          src={
            "https://images.squarespace-cdn.com/content/v1/5efd2b45c5ac7d61abff6eff/1607734939164-PYQ4INJFGTWFU1UFDDP8/IMG_1007.jpg?format=1500w"
          }
          alt="Photograpy picture"
          className="w-full h-full object-contain"
        />
        <div className="py-[10px]">
          <a
            href="#"
            className="uppercase text-sm font-semibold font-mono underline tracking-widest"
          >
            Stills
          </a>
        </div>
      </div>
    </div>
  );
};

export default Stills;
