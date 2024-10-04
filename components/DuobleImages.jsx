import React from "react";

const DuobleImages = () => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans:wdth@62.5..100&display=swap"
        rel="stylesheet"
      />
      <p className="text-2xl font-sans text-black/75 tracking-[.3rem] mb-36">
        POPULAR PACKAGES
      </p>
      <div className="flex lg:flex-row flex-col-reverse  items-center justify-center gap-32 tracking-wider">
        <div className="flex flex-col items-center justify-center w-80 px-2 text-center">
          <p className=" text-black tracking-[.2rem] text-lg mb-5 ">
            {" "}
            Wellness Package
          </p>
          <p className="font-big-image text-black/85 mb-7 leading-relaxed">
            {" "}
            Be your best self in Bali and leave feeling refresh and invigorated!
            Our wellness package will let you relax and unwind with massages,
            daily yoga sessions and tonnes of delicious and nutritious meals.
          </p>
          <button className="bg-[#f7f5f2] py-3 px-7 tracking-[.2rem] font-sans text-[9px] text-black hover:bg-[#394145] hover:text-white duration-500">
            EXPLORE PACKAGE
          </button>
        </div>
        <img
          src="/assits/oneImage.png"
          alt="one"
          className="w-fit h-fit object-cover"
        />
      </div>
      <div className="flex items-center lg:flex-row flex-col justify-center gap-32 tracking-wider mt-32 mb-56">
        <img
          src="/assits/twoImage.png"
          alt="one"
          className="w-fit h-fit object-cover"
        />
        <div className="flex flex-col items-center justify-center w-80 px-2 text-center">
          <p className=" text-black tracking-[.2rem] text-lg mb-5 ">
            {" "}
            Family Package
          </p>
          <p className="font-big-image text-black/85 mb-7 leading-relaxed">
            {" "}
            This package is designed for the family to explore and experience
            the joys of Bali together, as well as to give mum and dad a little
            relaxation time. Including a tour of Bali, babysitter...
          </p>
          <button className="bg-[#f7f5f2] py-3 px-7 tracking-[.2rem] font-sans text-[9px] text-black hover:bg-[#394145] hover:text-white duration-500">
            EXPLORE PACKAGE
          </button>
        </div>
      </div>
    </div>
  );
};

export default DuobleImages;
