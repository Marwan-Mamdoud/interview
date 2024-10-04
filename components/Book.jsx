"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import React from "react";
import { useEffect } from "react";

const Book = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(
      ".footter",
      {
        y: "100",
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: ".footter",
          start: "top bottom",
          end: "top center",
          scrub: true,
          toggleActions: "restart pause restart pause",
        },
        y: "0",
        opacity: 1,
      }
    );
  }, []);
  return (
    <div className="book-back-ground relative">
      <div className="book-content footter absolute w-full bottom-0">
        <p className="text-white/80 uppercase tracking-[.3rem] text-xl pt-16 mb-10 flex items-center justify-center">
          YOUR BALI PARADISE AWAITS
        </p>
        <div className="flex items-center flex-col justify-center gap-8">
          <div className="flex items-center lg:flex-row flex-wrap gap-5 px-5 justify-between">
            <div className="flex flex-col  gap-2">
              <label htmlFor="Full Name text-white">Name</label>
              <input
                type="text"
                className="w-48 h-9 px-3"
                placeholder="Full Name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="Full Name text-white">Email</label>
              <input
                type="text"
                className="w-48 h-9 px-3"
                placeholder="Email Address"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="Full Name text-white">Number</label>
              <input
                type="number"
                className="w-48 h-9 px-3"
                placeholder="Your Number"
              />
            </div>
          </div>
          {/* <div className="flex items-center gap-5 justify-between"></div> */}
          <div className="flex items-center lg:flex-row flex-wrap px-5 gap-5 justify-between">
            <div className="flex flex-col gap-2">
              <label htmlFor="Full Name text-white">State</label>
              <input
                type="text"
                className="w-48 h-9 px-3"
                placeholder="Name Of State"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="Full Name text-white">Rooms</label>
              <input
                type="number"
                className="w-48 h-9 px-3"
                placeholder="Number of Rooms"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="Full Name text-white">Massage</label>
              <input
                type="text"
                className="w-48 h-9 px-3"
                placeholder="Live us Massage"
              />
            </div>
          </div>
          <button className="hover:bg-[#354953] duration-500 bg-[#647d8b] py-2.5 px-20 text-xs tracking-wider font-semibold font-sans text-white text-center">
            Submit
          </button>
        </div>
        <p className="text-white/60 uppercase tracking-[.2rem] text-[10px] font-sans font-semibold pt-12 pb-10 flex items-center justify-center">
          UNLOCK A 10% DISCOUNT BY BOOKING DIRECTLY THROUGH OUR WEBSITE{" "}
        </p>
      </div>
    </div>
  );
};

export default Book;
