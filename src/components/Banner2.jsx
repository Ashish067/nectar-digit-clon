import React from "react";
import { FaEye } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { FaRegFolderOpen } from "react-icons/fa6";
import { FaBullhorn } from "react-icons/fa";

const Banner2 = () => {
  return (
    <div className="w-full flex justify-evenly">
      <div className="flex space-x-4">
        <FaEye color="red" size={75} />
        <div>
          <span className="text-white font-bold text-3xl">1190</span>
          <p className="text-white">Happy Clients</p>
        </div>
      </div>
      <div className="flex space-x-4">
        <FaRegFolderOpen color="red" size={75} />
        <div>
          <span className="text-white font-bold text-3xl">345</span>
          <p className="text-white">Skilled Experts</p>
        </div>
      </div>
      <div className="flex space-x-4">
        <FaUserPlus color="red" size={75} />
        <div>
          <span className="text-white font-bold text-3xl">548</span>
          <p className="text-white">Finished Products</p>
        </div>
      </div>
      <div className="flex space-x-4">
        <FaBullhorn color="red" size={75} />
        <div>
          <span className="text-white font-bold text-3xl">980</span>
          <p className="text-white">Media Posts</p>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
