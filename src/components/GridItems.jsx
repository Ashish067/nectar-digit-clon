import React from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaAt } from "react-icons/fa";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { FaHtml5 } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaWordpress } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { LiaUserLockSolid } from "react-icons/lia";
import { FaNetworkWired } from "react-icons/fa";
import { FaPencilRuler } from "react-icons/fa";

const Grid = () => {
  const gridItems = [
    {
      icon: <FaCloudUploadAlt size={75} color="red" />,
      title: "Domain Registration",
    },
    { icon: <FaAt size={75} color="red" />, title: "Web/Email Hosting" },
    {
      icon: <PiTelevisionSimpleLight size={75} color="red" />,
      title: "Responsive Website Design",
    },
    { icon: <FaHtml5 size={75} color="red" />, title: "Website Development" },
    {
      icon: <FaRegLightbulb size={75} color="red" />,
      title: "Digital Marketing",
    },
    {
      icon: <CiSearch size={75} color="red" />,
      title: "Search Engine Optimization",
    },
    {
      icon: <FaWordpress size={75} color="red" />,
      title: "Wordpress/CMS Solution",
    },
    {
      icon: <FaShoppingBag size={75} color="red" />,
      title: "Ecommerce/Online Store Solution",
    },
    {
      icon: <FaAppStore size={75} color="red" />,
      title: "Custom Application Development",
    },
    {
      icon: <FaDatabase size={75} color="red" />,
      title: "Software Architect Design and Development",
    },
    {
      icon: <FaHashtag size={75} color="red" />,
      title: "Social Media Optimization",
    },
    {
      icon: <FaJava size={75} color="red" />,
      title: "Mobile Application Development",
    },
    {
      icon: <LiaUserLockSolid size={75} color="red" />,
      title: "Data Security",
    },
    {
      icon: <FaNetworkWired size={75} color="red" />,
      title: "Graphics Design",
    },
    {
      icon: <FaPencilRuler size={75} color="red" />,
      title: "Hardware Networking",
    },
  ];
  return (
    <div className=" bg-white p-4">
      <div className="grid grid-cols-5 gap-2 self-center justify-center">
        {gridItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center h-[150px] w-[230px] shadow-gray-200 shadow-lg hover:scale-125 "
          >
            {item.icon}
            <h1 className="font-bold text-center p-4">{item.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
