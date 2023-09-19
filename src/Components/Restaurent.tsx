import React from "react";

const Restaurent = () => {
  return (
    <div className="relative grid grid-cols-12 md:h-[240px] lg:h-[520px] w-full px-[23px] py-[17px] md:py-[100px] md:px-[52px] ">
      <div className="  w-full h-full col-span-12 md:col-span-8">
        <img
          src={
            "https://images.squarespace-cdn.com/content/v1/5efd2b45c5ac7d61abff6eff/1605760890337-1X3Y1YBAMVVY1A3DAX6P/meiwensee-binghaus-websize-21.jpg?format=1500w"
          }
          alt="Photograpy picture"
          className="w-full h-full object-contain"
        />
        <div className="py-[10px]">
          <a
            href="#"
            className="uppercase text-sm font-semibold font-mono underline tracking-widest"
          >
            Restaurant & Coffe Branding
          </a>
        </div>
      </div>
    </div>
  );
};

export default Restaurent;
