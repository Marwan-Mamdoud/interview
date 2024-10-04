import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" bg-[#647d8b] flex items-center  justify-center flex-col">
      <div className="my-6 flex flex-col lg:flex-row lg:my-28  items-center w-full gap-5">
        <h1 className="text-white/60 lg:w-1/2 text-2xl lg:pl-80 w-fit tracking-wide ">
          Subscribe To Our Newsletters
        </h1>
        <input
          type="text"
          placeholder="Enter Your Email"
          className="px-4 relative w-4/5 py-4   lg:w-1/3 bg-[#647d8b] border-[1px] active:border-black border-white/60"
        />{" "}
        <button className="bg-[#566c79] py-3 px-10 lg:w-[250px] lg:-translate-x-[110%] lg:translate-y-0 translate-x-[36%] -translate-y-[160%]  z-10  uppercase text-sm  tracking-widest">
          Subscribe now
        </button>
      </div>
      <div className="w-full flex lg:justify-between flex-col lg:mb-0  lg:flex-row lg:w-3/4 lg:mx-auto px-10 items-start">
        <div className="flex-col flex lg:flex-row lg:items-center gap-5  lg:gap-10 mb-10 ">
          <Link
            href=""
            className=" hover:text-black duration-700 text-sm text-white/60 font-sans"
          >
            About us
          </Link>
          <Link
            href=""
            className=" hover:text-black duration-700 text-sm text-white/60 font-sans"
          >
            Out Villas
          </Link>
          <Link
            href=""
            className=" hover:text-black duration-700 text-sm text-white/60 font-sans"
          >
            Packages
          </Link>
          <Link
            href=""
            className=" hover:text-black duration-700 text-sm text-white/60 font-sans"
          >
            Contact
          </Link>
        </div>
        <div className="flex items-start gap-10">
          <img
            src="/assits/face.svg"
            alt="icon"
            loading="lazy"
            className="filter text-white"
          />
          <img
            src="/assits/insta.svg"
            alt="icon"
            loading="lazy"
            className="filter text-white"
          />
          <img
            src="/assits/x.svg"
            alt="icon"
            loading="lazy"
            className="filter text-white"
          />
          <img
            src="/assits/youtube.svg"
            alt="icon"
            loading="lazy"
            className="filter text-white"
          />
        </div>
      </div>
      <div className="border-t-[1px] border-white/60 flex lg:w-3/4 w-full   items-center justify-between my-16 lg:mt-0 flex-col lg:flex-row pt-10 gap-10">
        <p className="text-white/50">© 2022 Noubodiez. All rights reserved</p>
        <div className="font-medium">
          <Link
            href=""
            className=" mb-20  hover:text-black mr-10 underline duration-700 text-sm text-white/60 font-sans"
          >
            Terms Of Use
          </Link>
          <Link
            href=""
            className=" hover:text-black underline duration-700 text-sm text-white/60 font-sans"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
