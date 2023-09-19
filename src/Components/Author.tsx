import React from "react";

type Props = {};

const Author = (props: Props) => {
  return (
    <div className="md:pb-[200px] md:px-[52px] pb-[50px] px-[23px]">
      <div>
        <img
          src="https://images.squarespace-cdn.com/content/v1/5efd2b45c5ac7d61abff6eff/1605764947532-2SSNVQOARB9R52H7GQTV/Sees-AlmansorHome-94.jpg?format=1500w"
          alt="Author image"
          className="md:w-[170px] md:h-[255px] w-full h-full"
        />
        <div className="py-[10px] col-span-12">
          <a
            href="#"
            className="uppercase text-sm font-semibold font-mono underline tracking-widest"
          >
            Follow Along
          </a>
        </div>
      </div>
    </div>
  );
};

export default Author;
