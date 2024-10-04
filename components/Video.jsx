"use client";

import "react-modal-video/css/modal-video.css";
import ModalVideo from "react-modal-video";
import Image from "next/image";
import React, { useState } from "react";

const Video = () => {
  const [hover, setHover] = useState(true);
  const [isOpen, setIsOpen] = useState();

  return (
    <div className="bg-[#f7f5f2] lg:w-11/12 h-[140dvh] mx-auto flex lg:flex-row flex-col items-center justify-center  mt-36 ">
      <div
        onMouseLeave={() => {
          setHover(true);
        }}
        onMouseEnter={() => {
          setHover(false);
        }}
        className="lg:w-[40dvw] lg:h-[83dvh]  lg:absolute lg:right-64 "
      >
        <img
          src="/assits/chif.webp"
          alt="chif"
          loading="lazy"
          fill
          className={`w-full lg:h-full  h-[300px]  cursor-pointer  duration-300 object-center lg:object-cover`}
        />
        <ModalVideo
          channel="vimeo"
          isOpen={isOpen}
          videoId="1015860988"
          onClose={() => setIsOpen(false)}
        />
        <div
          onClick={() => setIsOpen(true)}
          className={`back-ground-image-chif w-full -translate-y-[100%] h-[46%] flex items-center justify-center cursor-pointer ${
            hover && "opacity-0"
          } duration-1000 lg:h-full z-10 absolute`}
        >
          <Image
            loading="lazy"
            src="/assits/play.svg"
            width={25}
            height={25}
            alt="play"
          />
        </div>
      </div>
      <div className="lg:w-[380px] h-[300px] w-full  flex flex-col  items-center justify-evenly bg-white font-sans text-[#394145] lg:absolute lg:right-[750px] lg:z-30">
        <p className="text-[10px] mt-7 tracking-[.2rem] uppercase font-semibold">
          Customer
        </p>
        <p className=" uppercase tracking-[.4rem] text-2xl ">IS SUPREME</p>
        <p className="w-3/4 text-center text-lg">
          When it comes to our guests, no request is too big and no detail is
          too small.
        </p>
        <button className="bg-[#394145] uppercase text-white py-3 font-semibold mb-5 px-6 rounded-sm text-[9px] border-2 border-[#394145] tracking-[.2rem] hover:bg-white hover:text-[#394145] duration-700">
          learn more
        </button>
      </div>
    </div>
  );
};

export default Video;
