import int1 from "../assets/first-interior.gif";
import int2 from "../assets/second-interior.gif";

type Props = {};

const Interior = (props: Props) => {
  return (
    <div className="relative grid grid-cols-12 md:h-[538px] lg:h-[865px] w-full px-[23px] py-[35px] md:py-[500px] md:px-[52px] ">
      <div className=" col-end-auto md:col-end-13 w-full h-full col-span-12 md:col-span-8 grid grid-cols-12 gap-6">
        <img
          src={int1}
          alt="Photograpy picture"
          className="w-[400px] h-[556px] col-span-12 lg:col-span-6 "
        />
        <img
          src={int2}
          alt="Photograpy picture"
          className=" w-[400px] h-[556px] col-span-12 lg:col-span-6"
        />

        <div className="py-[10px] col-span-12">
          <a
            href="#"
            className="uppercase text-sm font-semibold font-mono underline tracking-widest"
          >
            INTERIORS & ARCHITECTURE PHOTOGRAPHY
          </a>
        </div>
      </div>
    </div>
  );
};

export default Interior;
