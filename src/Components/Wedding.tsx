const Wedding = () => {
  return (
    <div className="relative  md:h-[240px] lg:h-[520px] w-full px-[23px] py-[17px] md:pb-[400px] md:pt-[600px] md:px-[52px] mx-auto ">
      <div className="  w-full h-full flex flex-col items-center	justify-center  ">
        <div>
          <img
            src={
              "https://images.squarespace-cdn.com/content/v1/5efd2b45c5ac7d61abff6eff/1605765145519-VPDSBAML0QD5KG81UV95/Screen+Shot+2020-11-18+at+9.51.42+PM.png?format=1500w"
            }
            alt="Photograpy picture"
            className=" object-contain w-[580px] h-[430px] "
          />
          <div className="py-[10px] ">
            <a
              href="#"
              className="uppercase text-sm font-semibold font-mono underline tracking-widest "
            >
              Weedings
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wedding;
