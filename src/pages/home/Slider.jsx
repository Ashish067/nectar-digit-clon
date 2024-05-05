import React from "react";
import slider from "../../assets/slider.png";
import Particle from "../../Particle";

const Slider = () => {
  return (
    <div
      className="min-h-[750px]"
      style={{
        backgroundImage: "linear-gradient(-215deg, #292391 4%, #e53e8e 96%)",
        borderRadius: " 0% 0% 30% 30% / 0% 0% 10% 8%",
      }}
    >
      <Particle />
      <div className="flex justify-around items-center">
        <div className="w-[400px] space-y-8">
          <h1 className="text-white font-semibold text-4xl">
            Lets Grow Together and Be Success
          </h1>
          <p className="text-[#fff] font-semibold text-xl">Nectar Digit</p>
        </div>
        <div>
          <img src={slider} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
