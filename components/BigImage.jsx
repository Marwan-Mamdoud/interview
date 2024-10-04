import React from "react";

const BigImage = () => {
  return (
    <div className="w-full flex items-center lg:flex-row flex-col text-center text-white mb-44">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans:wdth@62.5..100&display=swap"
        rel="stylesheet"
      />
      <img
        src="/assits/bigImage.webp"
        className="lg:object-cover object-contain lg:w-3/5 w-full h-fit lg:h-[120dvh]"
      />
      <div className="bg-[#647d8b] lg:w-2/5 lg:h-[120dvh] h-[80dvh] w-full text-lg flex items-center font-medium text-white/70 font-sans  ">
        <div className="w-80  font-big-image  flex items-center flex-col justify-center gap-7 mx-auto h-fit">
          <p className="text-2xl text-white tracking-[.3rem] px-5 font-light uppercase font-sans">
            About our Villas
          </p>{" "}
          <p className=" px-5">
            Each villa has been carefully designed and decorated with it’s own
            unique style, making no two rooms the same.
          </p>{" "}
          <p className="">
            {" "}
            The originality of our boutique villa resort paired with the natural
            grace of it’s beautiful location of Uluwatu makes staying at Hidden
            Hills Villas an experience unto its own.
          </p>{" "}
          <button className="py-2 px-6 uppercase border-[1px] border-white/90 text-white/90 bg-[#647d8b] hover:bg-white hover:text-[#647d8b] duration-500 text-[10px] tracking-[.2rem]">
            {" "}
            our story
          </button>
        </div>
      </div>
    </div>
  );
};

export default BigImage;
