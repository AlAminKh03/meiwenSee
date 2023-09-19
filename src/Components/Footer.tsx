const Footer = () => {
  return (
    <div className="md:px-[52px] px-[23px] bg-white py-[23px] md:pt-[100px]">
      <div className=" border border-black min-w-full mt-[25px] md:mt-[100px] mb-[50px] md:mb-[150px]">
        <p></p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between h-[344px] ">
        <div>
          <h1 className="text-5xl">Let's work together.</h1>
        </div>
        <div className="h-[160px] ">
          <p className="break-all	w-[374px] text-2xl pb-8 lg:pb-24">
            Brand Identity / Brand Strategy / Illustration / Art Direction /
            Photography & Video / Website Design / Packaging / Social Media /
            Branded Interiors / Naming
          </p>
          <button className="uppercase p-2 border-2 border-black">
            Inquire
          </button>
        </div>
      </div>
      <div className="grid grid-cols-12 mt-44 gap-x-4 lg:gap-x-28 gap-y-8">
        <div className=" col-span-10 md:col-span-5 text-2xl underline ">
          Home / Photography /Design / Journal /Contact
        </div>
        <div className="col-span-10 md:col-span-5 underline font-thin text-2xl">
          hello@meiwens.com Instagram 👀
        </div>
      </div>
      <div className="text-sm font-mono pt-[50px]">
        <p>© MEIWEN WANG 2020</p>
      </div>
    </div>
  );
};

export default Footer;
