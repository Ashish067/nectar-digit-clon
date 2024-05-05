import React from "react";
import Logo from "../../assets/site-logo.png";
import QuickContact from "../../components/QuickContact";
import OurServices from "../../components/OurServices";
import UsefulLinks from "../../components/UsefulLinks";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-200 h-96 ">
        <div className="pt-16 flex justify-evenly items-center">
          <div className="w-1/6 mt-4 space-y-8">
            <img src={Logo} alt="company-logo" />
            <p className="align-">
              Best and reliable Digital Marketing company with expertise in SEO,
              Software Development, Web Design / Development, and Mobile
              application
            </p>
          </div>
          <UsefulLinks />
          <OurServices />
          <QuickContact />
        </div>
      </div>
      <div className="bg-gray-300 flex justify-between items-center h-[80px] px-4">
        <p>Copyright © 2024 Nectar Digit. All Right Reserved.</p>
        <p>Developed By : Ashish Bhandari</p>
      </div>
    </>
  );
};

export default Footer;
