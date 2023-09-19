const HeadingTitle = () => {
  return (
    <div className=" relative grid grid-cols-12 pt-[156px] pb-[86px] px-[23px] md:px-[52px] ">
      <h1
        className=" text-[#0d0d0d]  text-5xl col-span-10 	tracking-tighter font-sans "
        style={{ lineHeight: "1.3" }}
      >
        Meiwen <span className="italic">(/may-when/)</span> is a<br />
        multidisciplinary <span className="underline"> designer</span> &
        <span className="underline"> photographer</span>
        <br /> creating brand identities, digital <br /> experiences, and
        thoughtful imagery.{" "}
      </h1>
    </div>
  );
};

export default HeadingTitle;
