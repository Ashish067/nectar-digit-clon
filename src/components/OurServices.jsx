import React from "react";
import { HiMiniChevronDoubleRight } from "react-icons/hi2";

const OurServices = () => {
  return (
    <>
      <div className="w-[300px] ">
        <div className="space-y-4">
          <h1>OUR SERVICES</h1>
          <ul className="flex flex-col">
            <li className="flex justify-start items-center gap-1">
              <HiMiniChevronDoubleRight />
              <a href="#">Web Design & Development</a>
            </li>
            <li className="flex justify-start items-center gap-1">
              <HiMiniChevronDoubleRight />
              <a href="#">Mobile App Development</a>
            </li>
            <li className="flex justify-start items-center gap-1">
              <HiMiniChevronDoubleRight />
              <a href="#">Digital Marketing</a>
            </li>
            <li className="flex justify-start items-center gap-1">
              <HiMiniChevronDoubleRight />
              <a href="#">Branding & Identity</a>
            </li>
            <li className="flex justify-start items-center gap-1">
              <HiMiniChevronDoubleRight />
              <a href="#">Software Development</a>
            </li>
            <li className="flex justify-start items-center gap-1">
              <HiMiniChevronDoubleRight />
              <a href="#">IT Consultancy</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default OurServices;
