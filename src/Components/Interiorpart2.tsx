import int1 from "../assets/first-interior.gif";
import int2 from "../assets/second-interior.gif";

type Props = {};

const Interiorpart2 = (props: Props) => {
  return (
    <div className="grid grid-cols-12 min-h-screen min-w-full">
      <div className="col-span-8 col-end-8 grid grid-col-12">
        <div className=" col-span-12 grid grid-cols-12">
          <div className="h-[550px] w-[300px] col-span-6 col-end-7">
            <img src={int1} alt="" className="object-fill" />
          </div>
          <div className="h-[550px] w-[300px] col-span-6 col-end-10">
            <img src={int2} alt="" className="object-fill" />
          </div>
        </div>
        <div>some text</div>
      </div>
    </div>
  );
};

export default Interiorpart2;
