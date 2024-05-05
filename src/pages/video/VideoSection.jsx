import React from "react";
import shape2 from "../../assets/shape2.png";
import shape3 from "../../assets/shape3.png";
import { IoPlayCircle } from "react-icons/io5";
import image from "../../assets/video-post-homeppage.png";
import bg7 from "../../assets/bg7.png";
const VideoSection = () => {
  return (
    <div>
      <div
        className="flex justify-between px-4 h-[800px]"
        style={{ backgroundImage: `url(${bg7})` }}
      >
        <div className="flex flex-col justify items-center w-[450px] pt-52 pl-4">
          <h1 className="text-white ">How we satisfy you</h1>
          <span className="text-white font-bold text-[40px] line-clamp-2 ">
            We Help You To Grow Your Business Quickly
          </span>
          <button className="p-20">
            <IoPlayCircle size={100} color="white" />
          </button>
        </div>
        <div className="flex items-end">
          <img src={image} alt="image" />
        </div>
      </div>
      <div className="flex justify-center items-center h-48 space-x-10 gap-10 pb-10">
        <img src={shape2} alt="image" />
        <div className="space-y-4">
          <h1 className="font-bold text-3xl">Subscribe To Our NewsLetter</h1>
          <div>
            <input
              type="text"
              placeholder="Please enter your email address"
              className=" h-10 w-96 p-6"
            />
            <button className="bg-[#dc3b05] h-14 w-36">Subscribe</button>
          </div>
        </div>
        <img src={shape3} alt="" />
      </div>
    </div>
  );
};

export default VideoSection;
