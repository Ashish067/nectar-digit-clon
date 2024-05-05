import React from "react";
import { FaRegChartBar } from "react-icons/fa6";
import Web from "../../assets/web-design-development.png";
import Mobile from "../../assets/mobile-app-development.png";
import DigitalMarketing from "../../assets/digital-marketing.png";

const Services = () => {
  return (
    <>
      <div className="my-20">
        <div>
          <div className="flex flex-col items-center space-y-4">
            <h1 className="font-bold">OUR SERVICES</h1>
            <p>
              We provide a range of IT services related services at reasonable
              cost and with highest quality possible.
            </p>
            <FaRegChartBar color="red" />
          </div>
          <div className="flex justify-evenly pt-6">
            <div className="w-[370px] h-[500px] border-red border-2 flex flex-col items-center shadow-xl">
              {/* img text and button */}
              <img src={Web} alt="web-dev image" className="py-4" />
              <h1 className="font-bold">Web Design and Development</h1>
              <p className="pt-4 pb-10 text-center px-2">
                Cross-browser and cross-device compatibility driven by mobile
                responsiveness all under one roof. Starting from basic website
                designs, including CMS...
              </p>
              <button className="bg-[#dc3b05] hover:bg-[#1b5083] text-white font-medium w-28 h-10 rounded-3xl">
                Read More
              </button>
            </div>
            <div className="w-[370px] h-[500px] border-red border-2 flex flex-col items-center shadow-xl">
              {/* img text and button */}
              <img src={Mobile} alt="web-dev image" className="py-4" />
              <h1 className="font-bold">Mobile App Development</h1>
              <p className="pt-4 pb-10 text-center px-2">
                Cross-browser and cross-device compatibility driven by mobile
                responsiveness all under one roof. Starting from basic website
                designs, including CMS...
              </p>
              <button className="bg-[#dc3b05] hover:bg-[#1b5083] text-white font-medium w-28 h-10 rounded-3xl">
                Read More
              </button>
            </div>
            <div className="w-[370px] h-[500px] border-red border-2 flex flex-col items-center shadow-xl">
              {/* img text and button */}
              <img
                src={DigitalMarketing}
                alt="web-dev image"
                className="py-4"
              />
              <h1 className="font-bold">Digital Marketing</h1>
              <p className="pt-4 pb-10 text-center px-2">
                Cross-browser and cross-device compatibility driven by mobile
                responsiveness all under one roof. Starting from basic website
                designs, including CMS...
              </p>
              <button className="bg-[#dc3b05] hover:bg-[#1b5083] text-white font-medium w-28 h-10 rounded-3xl">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
