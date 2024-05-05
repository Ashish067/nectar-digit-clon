import React from "react";
import { HiMiniChevronDoubleRight } from "react-icons/hi2";

const UsefulLinks = () => {
  return (
    <>
      <div className="w-1/6 space-y-4">
        <h1>USEFULLINKS</h1>
        <ul>
          <li className="flex justify-start items-center gap-1 ">
            <HiMiniChevronDoubleRight />

            <a href="#">Home</a>
          </li>
          <li className="flex justify-start items-center gap-1 ">
            <HiMiniChevronDoubleRight />

            <a href="#">About</a>
          </li>
          <li className="flex justify-start items-center gap-1 ">
            <HiMiniChevronDoubleRight />

            <a href="#">Team</a>
          </li>
          <li className="flex justify-start items-center gap-1 ">
            <HiMiniChevronDoubleRight />

            <a href="#">Careen</a>
          </li>
          <li className="flex justify-start items-center gap-1 ">
            <HiMiniChevronDoubleRight />

            <a href="#">Contact</a>
          </li>
          <li className="flex justify-start items-center gap-1 ">
            <HiMiniChevronDoubleRight />

            <a href="#">Privacy and Policy</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default UsefulLinks;
