import React from "react";
import { FaRegChartBar } from "react-icons/fa6";
import marketplace from "../../assets/marketplace.png";
import seo from "../../assets/seo.jpg";
import trending from "../../assets/tranding.jpg";
import Banner2 from "../../components/Banner2";
import Image14 from "../../assets/image-14.png";

const Blog = () => {
  return (
    <>
      <div className="mt-48 mb-10">
        <div>
          <div className="flex flex-col items-center space-y-4">
            <h1 className="font-bold">OUR LATEST BLOG</h1>
            <p>
              We provide a range of IT services related services at reasonable
              cost and with highest quality possible.
            </p>
            <FaRegChartBar color="red" />
          </div>
          <div className="flex justify-evenly pt-6">
            <div className="w-[370px] h-[370px] border-red border-2 flex flex-col items-center shadow-xl">
              <img
                src={marketplace}
                alt="web-dev image"
                className="py-4 object-fill h-72 w-96"
              />
              <h1 className="font-bold py-4">Web Design and Development</h1>
            </div>
            <div className="w-[370px] h-[370px] border-red border-2 flex flex-col items-center shadow-xl">
              <img
                src={seo}
                alt="web-dev image"
                className="py-4 object-fill h-72 w-96"
              />
              <h1 className="font-bold py-4">
                Search Engine Optimization (SEO)
              </h1>
            </div>
            <div className="w-[370px] h-[370px] border-red border-2 flex flex-col items-center shadow-xl">
              <img
                src={trending}
                alt="web-dev image"
                className="py-4 object-fill h-72 w-96"
              />
              <h1 className="font-bold py-4">Technologies trends in Nepal</h1>
            </div>
          </div>
          <div className="bg-[#0951a9] h-48 mt-10 flex items-center">
            <Banner2 />
          </div>
          <div className="flex mt-24">
            <img src={Image14} alt="image" />
            <div className="space-y-4">
              <p className="bg-gray-100 h-16 p-5 font-bold shadow-sm">
                Does your product provide value to others?
              </p>
              <span className="shadow-sm">
                Yes, cause we hire only those individuals who are born ready to
                give their best to our company's given tasks.
              </span>
              <p className="bg-gray-100 h-16 p-5 font-bold shadow-sm">
                How likely would you recommend your product to others?
              </p>
              <p className="bg-gray-100 h-16 p-5 font-bold shadow-sm">
                Why should others prefer Nectar Digit for business?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
