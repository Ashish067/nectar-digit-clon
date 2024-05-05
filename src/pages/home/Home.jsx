import React from "react";
import { GoArrowRight } from "react-icons/go";
import one from "../../assets/capital-nepal.png";
import two from "../../assets/complete-cop-solution.png";
import three from "../../assets/el-hal-jamal.png";
import four from "../../assets/eshopping.png";
import five from "../../assets/eos-nepal.png";
import Slider from "./Slider";

const Home = () => {
  return (
    <div className="">
      <div>
        <Slider />
      </div>
      <div className="flex justify-evenly items-center h-36 w-[95%] bg-[#022d62] mx-auto mt-[-100px] rounded-md">
        <h3 className="font-semibold text-white">Our Clients</h3>
        <img src={one} alt="image" className="h-14 w-40" />
        <img src={two} alt="image" className="h-14 w-40" />
        <img src={three} alt="image" className="h-14 w-40" />
        <img src={four} alt="image" className="h-14 w-40" />
        <img src={five} alt="image" className="h-14 w-40" />
        <div className="flex items-center space-x-2">
          <button className="text-white font-semibold ">
            View More Clients
          </button>
          <GoArrowRight color="white" />
        </div>
      </div>
    </div>
  );
};

export default Home;
