import React from "react";
import { CiMap } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlinePhone } from "react-icons/md";

const QuickContact = () => {
  return (
    <>
      <div className="w-[300px] pt-6">
        <div className="space-y-4">
          <h3>QUICK CONTACT</h3>
          <ul>
            <li className="flex space-x-1 pb-2 w-[300px]">
              <CiMap className="mt-1" />
              <p className="w-[260px]">
                Unit 82A James Carter Road, Mildenhall, Bury St. Edmunds,
                England, IP28 7DE, UK and Sundhara, Kathmandu, Nepal
              </p>
            </li>
            <li className="flex items-center space-x-1 pb-2">
              <AiOutlineMail className="" />
              <p>info@nectardigit.com</p>
            </li>
            <li className="flex items-center space-x-1 pb-2">
              <MdOutlinePhone className="" />
              <p>
                9807555929 <br /> 015904030
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default QuickContact;
