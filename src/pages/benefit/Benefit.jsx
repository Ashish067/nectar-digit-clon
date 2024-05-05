import React from "react";
import Bg7 from "../../assets/bg7.png";
import GridItems from "../../components/GridItems";

const Benefit = () => {
  return (
    <div className="">
      <div
        className="w-full h-[600px]"
        style={{ backgroundImage: `url(${Bg7})` }}
      >
        <div className="flex flex-col items-center py-14 space-y-6">
          <h1 className="text-white text-3xl">
            How can your company get benefit from Nectar Digit?
          </h1>
          <p className="text-white">
            See some of the industries we have vast experience working in as a
            full-service.
          </p>
          <button className="bg-[#dc3b05] h-12 w-48 rounded-3xl text-white">
            View more services
          </button>
        </div>
        <div className="px-14">
          <GridItems />
        </div>
      </div>
    </div>
  );
};

export default Benefit;
