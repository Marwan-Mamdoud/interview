"use client";
import gsap from "gsap";
import Image from "next/image";
import React from "react";
import { useState } from "react";

const Rooms = () => {
  const [hover, setHover] = useState(true);
  const [hover2, setHover2] = useState(true);
  const [hover3, setHover3] = useState(true);
  const [hover4, setHover4] = useState(true);
  const [hover5, setHover5] = useState(true);
  // const hoverEnter = () => {
  //   // // gsap.to(".roomImage", { scale: 2 });
  //   // gsap.to(".roomBorder", { width: 220, duration: 1 });
  //   // // gsap.set(".rooms-back-ground", {
  //   // //   className: "-=back-ground-image",
  //   // //   duration: 2,
  //   // // });
  // };
  // const hoverLeave = () => {
  //   // // gsap.to(".roomImage", { scale: 2 });
  //   // gsap.to(".roomBorder", { width: 50, duration: 1 });
  //   // // gsap.set(".rooms-back-ground", {
  //   // //   className: "+=back-ground-image",
  //   // //   duration: 1,
  //   // // });
  // };
  return (
    <>
      <div className="w-full flex flex-col pt-32 mx-auto">
        <div className="flex lg:flex-row flex-col justify-between lg:w-1/2 w-full  gap-2 mx-auto pb-20">
          <div className="flex flex-col gap-5 h-full lg:w-3/5 w-full  lg:items-start items-center justify-between">
            <p className="uppercase tracking-wide text-gray-500 font-sans">
              AWARD WINNING VILLA RESORT
            </p>
            <div className="text-xl w-full flex flex-col gap-2 justify-between lg:items-start items-center text-black font-sans">
              <p>Enjoy breathtaking sunset ocean </p>
              <p>views from your private Uluwatu</p>
              <p> villa</p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-0">
            <Image
              src="/assits/icon1.png"
              alt="icon1"
              width={150}
              height={999}
            />
            <Image
              src="/assits/icon2.png"
              alt="icon1"
              width={150}
              height={999}
            />
            <Image
              src="/assits/icon3.png"
              alt="icon1"
              width={150}
              height={999}
            />
          </div>
        </div>
        <div
          className={` grid lg:grid-cols-5 grid-cols-2 gap-5 lg:gap-0 w-5/6 mx-auto`}
        >
          <div
            className={`w-full   h-[440px] overflow-hidden relative`}
            onMouseLeave={() => {
              setHover(true);
            }}
            onMouseEnter={() => {
              setHover(false);
            }}
          >
            <div
              className={`back-ground-image rooms-back-ground transition-all duration-1000  ${
                !hover && "opacity-0"
              }  w-full h-full absolute z-20`}
            ></div>
            <Image
              fill
              src="/assits/Resort (1).webp"
              alt="resort"
              className={`transition-all duration-1000 ${
                !hover && "scale-110"
              }  object-cover roomImage w-full h-full `}
            />
            <div className={`absolute bottom-0  left-4 h-1/5  z-30 w-full`}>
              <div
                className={`bg-white h-[1px] roomBorder ${
                  !hover && "w-full"
                } transition-all duration-1000 w-2/6`}
              />
              <p className="font-sans uppercase text-lg font-light text-white pt-5 ">
                One badRoom
              </p>
            </div>
          </div>
          <div
            className={`w-full  h-[440px] overflow-hidden relative`}
            onMouseLeave={() => {
              setHover2(true);
            }}
            onMouseEnter={() => {
              setHover2(false);
            }}
          >
            <div
              className={`back-ground-image rooms-back-ground transition-all duration-1000  ${
                !hover2 && "opacity-0"
              }  w-full h-full absolute z-20`}
            ></div>
            <Image
              fill
              src="/assits/Resort (2).webp"
              alt="resort"
              className={`transition-all duration-1000 ${
                !hover2 && "scale-110"
              }  object-cover roomImage w-full h-full `}
            />
            <div className={`absolute bottom-0  left-4 h-1/5  z-30 w-full`}>
              <div
                className={`bg-white h-[1px] roomBorder ${
                  !hover2 && "w-full"
                } transition-all duration-1000 w-2/6`}
              />
              <p className="font-sans uppercase text-lg font-light text-white pt-5 ">
                Two badRoom
              </p>
            </div>
          </div>
          <div
            className={`w-full  h-[440px] overflow-hidden relative`}
            onMouseLeave={() => {
              setHover3(true);
            }}
            onMouseEnter={() => {
              setHover3(false);
            }}
          >
            <div
              className={`back-ground-image rooms-back-ground transition-all duration-1000  ${
                !hover3 && "opacity-0"
              }  w-full h-full absolute z-20`}
            ></div>
            <Image
              fill
              src="/assits/Resort (3).webp"
              alt="resort"
              className={`transition-all duration-1000 ${
                !hover3 && "scale-110"
              }  object-cover roomImage w-full h-full `}
            />
            <div className={`absolute bottom-0  left-4 h-1/5  z-30 w-full`}>
              <div
                className={`bg-white h-[1px] roomBorder ${
                  !hover3 && "w-full"
                } transition-all duration-1000 w-2/6`}
              />
              <p className="font-sans uppercase text-lg font-light text-white pt-5 ">
                three badRoom
              </p>
            </div>
          </div>
          <div
            className={`w-full  h-[440px] overflow-hidden relative`}
            onMouseLeave={() => {
              setHover4(true);
            }}
            onMouseEnter={() => {
              setHover4(false);
            }}
          >
            <div
              className={`back-ground-image rooms-back-ground transition-all duration-1000  ${
                !hover4 && "opacity-0"
              }  w-full h-full absolute z-20`}
            ></div>
            <Image
              fill
              src="/assits/Resort (4).webp"
              alt="resort"
              className={`transition-all duration-1000 ${
                !hover4 && "scale-110"
              }  object-cover roomImage w-full h-full `}
            />
            <div className={`absolute bottom-0  left-4 h-1/5  z-30 w-full`}>
              <div
                className={`bg-white h-[1px] roomBorder ${
                  !hover4 && "w-full"
                } transition-all duration-1000 w-2/6`}
              />
              <p className="font-sans uppercase text-lg font-light text-white pt-5 ">
                four badRoom
              </p>
            </div>
          </div>
          <div
            className={`w-full  h-[440px] overflow-hidden relative`}
            onMouseLeave={() => {
              setHover5(true);
            }}
            onMouseEnter={() => {
              setHover5(false);
            }}
          >
            <div
              className={`back-ground-image rooms-back-ground transition-all duration-1000  ${
                !hover5 && "opacity-0"
              }  w-full h-full absolute z-20`}
            ></div>
            <Image
              fill
              src="/assits/Resort (5).webp"
              alt="resort"
              className={`transition-all duration-1000 ${
                !hover5 && "scale-110"
              }  object-cover roomImage w-full h-full `}
            />
            <div className={`absolute bottom-0  left-4 h-1/5  z-30 w-full`}>
              <div
                className={`bg-white h-[1px] roomBorder ${
                  !hover5 && "w-full"
                } transition-all duration-1000 w-2/6`}
              />
              <p className="font-sans uppercase text-lg font-light text-white pt-5 ">
                five badRoom
              </p>
            </div>
          </div>
        </div>
        <button className="bg-white py-3 mt-16 hover:bg-[#394145] hover:text-white transition-all duration-700  px-6 mx-auto font-sans uppercase font-normal text-[10px] border-black/60 border-2 tracking-[.2rem] text-black">
          EXPLORE ALL Villas
        </button>
      </div>
    </>
  );
};

export default Rooms;
