import React from "react";
import Logo from "../assets/site-logo.png";
import { FaBarsStaggered } from "react-icons/fa6";
import Dropdown from "./Dropdown";
const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center h-[90px] bg-amber-400 px-4">
        <div>
          <img src={Logo} alt="logo of company" />
        </div>
        <div>
          <div>
            <ul className="flex justify-center items-center space-x-4">
              <li className="active">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <Dropdown />

              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <FaBarsStaggered size={25} className="hover:text-white" />
            </ul>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
