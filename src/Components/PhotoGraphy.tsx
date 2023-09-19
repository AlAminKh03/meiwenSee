import photography from "../assets/photography.jpg";

const PhotoGraphy = () => {
  return (
    <div className="relative grid grid-cols-12 md:h-[538px] lg:h-[865px] w-full px-[23px] mb-[17px] md:mb-[100px] md:px-[52px] ">
      <div className=" col-end-auto md:col-end-13 w-full h-full col-span-12 md:col-span-6">
        <img
          src={photography}
          alt="Photograpy picture"
          className="w-full h-full object-contain"
        />
        <div className="py-[10px]">
          <a
            href="#"
            className="uppercase text-sm font-semibold font-mono underline tracking-widest"
          >
            Photography
          </a>
        </div>
      </div>
    </div>
  );
};

export default PhotoGraphy;
